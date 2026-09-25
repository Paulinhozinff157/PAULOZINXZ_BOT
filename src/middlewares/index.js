/**
 * Interceptadores diversos.
 *
 * @author PAULOZINXZ_BOT
 */
import { messageHandler } from "./messageHandler.js";
import { onGroupParticipantsUpdate } from "./onGroupParticipantsUpdate.js";
import { onMessagesUpsert } from "./onMesssagesUpsert.js";

export { messageHandler, onGroupParticipantsUpdate, onMessagesUpsert };

import { OWNER_LID, OWNER_PHONE } from "../config.js";
import { getPrefix, isOwnerDelegate } from "../utils/database.js";

const GROUP_METADATA_CACHE_TTL = 30_000;
const GROUP_METADATA_CACHE_MAX = 500;
const groupMetadataCache = new Map();

function cleanupGroupMetadataCache(now = Date.now()) {
  for (const [jid, entry] of groupMetadataCache) {
    if (entry.expiresAt <= now) groupMetadataCache.delete(jid);
  }

  while (groupMetadataCache.size > GROUP_METADATA_CACHE_MAX) {
    const oldest = groupMetadataCache.keys().next().value;
    if (!oldest) break;
    groupMetadataCache.delete(oldest);
  }
}

export async function getCachedGroupMetadata(socket, remoteJid) {
  const now = Date.now();
  const cached = groupMetadataCache.get(remoteJid);
  if (cached && cached.expiresAt > now) return cached.value;

  const pending = socket.groupMetadata(remoteJid);
  groupMetadataCache.set(remoteJid, { value: pending, expiresAt: now + GROUP_METADATA_CACHE_TTL });
  cleanupGroupMetadataCache(now);

  try {
    return await pending;
  } catch (error) {
    groupMetadataCache.delete(remoteJid);
    throw error;
  }
}

export function verifyPrefix(prefix, groupJid) {
  const groupPrefix = getPrefix(groupJid);
  return groupPrefix === prefix;
}

export function hasTypeAndCommand({ type, command }) {
  return !!type && !!command;
}

export function isLink(text) {
  const cleanText = text.trim();

  if (/^\d+$/.test(cleanText)) {
    return false;
  }

  if (/[.]{2,3}/.test(cleanText)) {
    return false;
  }

  const ipPattern =
    /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

  if (ipPattern.test(cleanText.split("/")[0])) {
    return true;
  }

  const urlPattern =
    /(https?:\/\/)?(www\.)?[a-zA-Z0-9]([a-zA-Z0-9-]*[a-zA-Z0-9])?(\.[a-zA-Z0-9]([a-zA-Z0-9-]*[a-zA-Z0-9])?)*\.[a-zA-Z]{2,}(\/[^\s]*)?/g;

  const matches = cleanText.match(urlPattern);

  if (!matches || matches.length === 0) {
    return false;
  }

  const fileExtensions =
    /\.(txt|pdf|doc|docx|xls|xlsx|ppt|pptx|zip|rar|exe|jpg|jpeg|png|gif|mp4|mp3|avi)$/i;

  return matches.some((match) => {
    const cleanMatch = match.replace(/^https?:\/\//, "").replace(/^www\./, "");

    const matchIndex = cleanText.indexOf(match);

    const beforeMatch = cleanText.substring(0, matchIndex);

    const afterMatch = cleanText.substring(matchIndex + match.length);

    const charBefore = beforeMatch.slice(-1);

    const charAfter = afterMatch.slice(0, 1);

    if (
      charBefore &&
      /[a-zA-Z0-9]/.test(charBefore) &&
      !/[\s\.\,\:\;\!\?\(\)\[\]\{\}]/.test(charBefore)
    ) {
      return false;
    }

    if (
      charAfter &&
      /[a-zA-Z0-9]/.test(charAfter) &&
      !/[\s\.\,\:\;\!\?\(\)\[\]\{\}\/]/.test(charAfter)
    ) {
      return false;
    }

    if (/\s/.test(cleanMatch)) {
      return false;
    }

    if (fileExtensions.test(cleanMatch)) {
      return false;
    }

    const domainPart = cleanMatch.split("/")[0];
    if (domainPart.split(".").length < 2) {
      return false;
    }

    const parts = domainPart.split(".");
    const extension = parts[parts.length - 1];
    if (extension.length < 2) {
      return false;
    }

    try {
      const url = new URL("https://" + cleanMatch);
      return url.hostname.includes(".") && url.hostname.length > 4;
    } catch {
      return false;
    }
  });
}

export async function isAdmin({ remoteJid, userLid, socket }) {
  const { participants, owner } = await getCachedGroupMetadata(socket, remoteJid);

  const participant = participants.find(
    (participant) => participant.id === userLid
  );

  if (!participant) {
    return userLid === OWNER_LID;
  }

  const isOwner = userLid === owner || participant.admin === "superadmin";

  const isAdmin = participant.admin === "admin";

  return isOwner || isAdmin;
}

export function isBotOwner({ userLid, userPhone }) {
  const normalizedPhone = String(userPhone || "").replace(/\D/g, "");
  const configuredPhone = String(OWNER_PHONE || "").replace(/\D/g, "");
  return (
    userLid === OWNER_LID ||
    isOwnerDelegate(userLid, userPhone) ||
    (normalizedPhone && normalizedPhone === configuredPhone) ||
    (String(userLid || "").replace(/\D/g, "") === configuredPhone)
  );
}

export async function checkPermission({
  type,
  socket,
  userLid,
  userPhone,
  remoteJid,
}) {
  if (type === "member") {
    return true;
  }

  try {
    const { participants, owner } = await getCachedGroupMetadata(socket, remoteJid);

    const participant = participants.find(
      (participant) => participant.id === userLid
    );

    const isAuthorizedOwner = isBotOwner({ userLid, userPhone });

    if (!participant) {
      return isAuthorizedOwner;
    }

    const isOwner = userLid === owner || participant.admin === "superadmin";

    const isAdmin = isOwner || participant.admin === "admin";

    const ownerStillInGroup = participants.some(
      (participant) => participant.id === owner
    );

    const hasSuperAdmin = participants.some(
      (participant) => participant.admin === "superadmin"
    );

    if (type === "admin") {
      return isOwner || isAdmin || isAuthorizedOwner;
    }

    if (type === "owner") {
      if (isAuthorizedOwner) {
        return true;
      }

      if (isOwner) {
        return true;
      }

      if (!ownerStillInGroup || !hasSuperAdmin) {
        return isAdmin;
      }

      return false;
    }

    return false;
  } catch (error) {
    return false;
  }
}
