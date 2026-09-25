/**
 * Funções úteis para trabalhar
 * com dados.
 *
 * @author PAULOZINXZ_BOT
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { PREFIX, SPIDER_API_TOKEN } from "../config.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const databasePath = path.resolve(__dirname, "..", "..", "database");

const AFK_GROUPS_FILE = "afk-groups";
const ANTI_LINK_GROUPS_FILE = "anti-link-groups";
const CONFIG_FILE = "config";
const EXIT_GROUPS_FILE = "exit-groups";
const GROUP_RESTRICTIONS_FILE = "group-restrictions";
const INACTIVE_GROUPS_FILE = "inactive-groups";
const MUTE_FILE = "muted";
const ONLY_ADMINS_FILE = "only-admins";
const PREFIX_GROUPS_FILE = "prefix-groups";
const RESTRICTED_MESSAGES_FILE = "restricted-messages";
const WELCOME_GROUPS_FILE = "welcome-groups";
const AUTO_REVEAL_GROUPS_FILE = "auto-reveal-groups";
const LINK_EXEMPTIONS_FILE = "link-exemptions";
const CUSTOM_MESSAGES_FILE = "custom-messages";
const OWNER_DELEGATES_FILE = "owner-delegates";

const jsonCache = new Map();

function createIfNotExists(fullPath, formatIfNotExists = []) {
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(path.dirname(fullPath), { recursive: true });
    fs.writeFileSync(fullPath, JSON.stringify(formatIfNotExists));
  }
}

function readJSON(jsonFile, formatIfNotExists = []) {
  if (jsonCache.has(jsonFile)) {
    return jsonCache.get(jsonFile);
  }

  const fullPath = path.resolve(databasePath, `${jsonFile}.json`);
  createIfNotExists(fullPath, formatIfNotExists);

  try {
    const data = JSON.parse(fs.readFileSync(fullPath, "utf8"));
    jsonCache.set(jsonFile, data);
    return data;
  } catch (error) {
    // Evita derrubar o bot por um JSON temporariamente inválido.
    const fallback = Array.isArray(formatIfNotExists)
      ? [...formatIfNotExists]
      : { ...formatIfNotExists };
    jsonCache.set(jsonFile, fallback);
    return fallback;
  }
}

function writeJSON(jsonFile, data, formatIfNotExists = []) {
  const fullPath = path.resolve(databasePath, `${jsonFile}.json`);
  createIfNotExists(fullPath, formatIfNotExists);

  // Mantém as referências em memória e grava de forma atômica para reduzir
  // o risco de corrupção caso o Termux seja encerrado durante a escrita.
  jsonCache.set(jsonFile, data);
  const tempPath = `${fullPath}.tmp`;
  const serialized = JSON.stringify(data, null, 2);
  fs.writeFileSync(tempPath, serialized, "utf8");
  fs.renameSync(tempPath, fullPath);
}

export function setAfkMember(groupId, memberId, reason) {
  const afkGroups = readJSON(AFK_GROUPS_FILE, {});

  if (!afkGroups[groupId]) {
    afkGroups[groupId] = {};
  }

  afkGroups[groupId][memberId] = reason.trim();

  writeJSON(AFK_GROUPS_FILE, afkGroups, {});
}

export function getAfkReason(groupId, memberId) {
  const afkGroups = readJSON(AFK_GROUPS_FILE, {});

  return afkGroups[groupId]?.[memberId] || null;
}

export function listAfkMembers(groupId) {
  const afkGroups = readJSON(AFK_GROUPS_FILE, {});

  return { ...(afkGroups[groupId] || {}) };
}

export function removeAfkMember(groupId, memberId) {
  const afkGroups = readJSON(AFK_GROUPS_FILE, {});

  if (!afkGroups[groupId]?.[memberId]) {
    return false;
  }

  delete afkGroups[groupId][memberId];

  if (!Object.keys(afkGroups[groupId]).length) {
    delete afkGroups[groupId];
  }

  writeJSON(AFK_GROUPS_FILE, afkGroups, {});

  return true;
}

export function activateExitGroup(groupId) {
  const filename = EXIT_GROUPS_FILE;

  const exitGroups = readJSON(filename);

  if (!exitGroups.includes(groupId)) {
    exitGroups.push(groupId);
  }

  writeJSON(filename, exitGroups);
}

export function deactivateExitGroup(groupId) {
  const filename = EXIT_GROUPS_FILE;

  const exitGroups = readJSON(filename);

  const index = exitGroups.indexOf(groupId);

  if (index === -1) {
    return;
  }

  exitGroups.splice(index, 1);

  writeJSON(filename, exitGroups);
}

export function isActiveExitGroup(groupId) {
  const filename = EXIT_GROUPS_FILE;

  const exitGroups = readJSON(filename);

  return exitGroups.includes(groupId);
}

export function activateWelcomeGroup(groupId) {
  const welcomeGroups = readJSON(WELCOME_GROUPS_FILE);
  if (!welcomeGroups.includes(groupId)) {
    welcomeGroups.push(groupId);
  }
  writeJSON(WELCOME_GROUPS_FILE, welcomeGroups);
}

export function deactivateWelcomeGroup(groupId) {
  const welcomeGroups = readJSON(WELCOME_GROUPS_FILE);
  const index = welcomeGroups.indexOf(groupId);
  if (index === -1) {
    return;
  }
  welcomeGroups.splice(index, 1);
  writeJSON(WELCOME_GROUPS_FILE, welcomeGroups);
}

export function isActiveWelcomeGroup(groupId) {
  const welcomeGroups = readJSON(WELCOME_GROUPS_FILE);
  return welcomeGroups.includes(groupId);
}

export function activateAutoRevealGroup(groupId) {
  const groups = readJSON(AUTO_REVEAL_GROUPS_FILE);
  if (!groups.includes(groupId)) {
    groups.push(groupId);
  }
  writeJSON(AUTO_REVEAL_GROUPS_FILE, groups);
}

export function deactivateAutoRevealGroup(groupId) {
  const groups = readJSON(AUTO_REVEAL_GROUPS_FILE);
  const index = groups.indexOf(groupId);
  if (index === -1) {
    return;
  }
  groups.splice(index, 1);
  writeJSON(AUTO_REVEAL_GROUPS_FILE, groups);
}

export function isActiveAutoRevealGroup(groupId) {
  const groups = readJSON(AUTO_REVEAL_GROUPS_FILE);
  return groups.includes(groupId);
}

export function allowLinkUser(groupId, userId) {
  const data = readJSON(LINK_EXEMPTIONS_FILE, {});
  data[groupId] ||= [];
  if (!data[groupId].includes(userId)) data[groupId].push(userId);
  writeJSON(LINK_EXEMPTIONS_FILE, data, {});
}

export function blockLinkUser(groupId, userId) {
  const data = readJSON(LINK_EXEMPTIONS_FILE, {});
  data[groupId] = (data[groupId] || []).filter((id) => id !== userId);
  writeJSON(LINK_EXEMPTIONS_FILE, data, {});
}

export function isLinkUserAllowed(groupId, userId) {
  const data = readJSON(LINK_EXEMPTIONS_FILE, {});
  return !!data[groupId]?.includes(userId);
}

export function setCustomGroupMessage(groupId, type, message) {
  const data = readJSON(CUSTOM_MESSAGES_FILE, {});
  data[groupId] ||= {};
  data[groupId][type] = message.trim();
  writeJSON(CUSTOM_MESSAGES_FILE, data, {});
}

export function getCustomGroupMessage(groupId, type, fallback) {
  const data = readJSON(CUSTOM_MESSAGES_FILE, {});
  return data[groupId]?.[type] || fallback;
}

export function addOwnerDelegate(userId) {
  const delegates = readJSON(OWNER_DELEGATES_FILE, []);
  if (!delegates.includes(userId)) delegates.push(userId);
  writeJSON(OWNER_DELEGATES_FILE, delegates);
}

export function removeOwnerDelegate(userId) {
  const delegates = readJSON(OWNER_DELEGATES_FILE, []);
  writeJSON(OWNER_DELEGATES_FILE, delegates.filter((id) => id !== userId));
}

export function isOwnerDelegate(userId, userPhone = "") {
  const delegates = readJSON(OWNER_DELEGATES_FILE, []);
  const phone = String(userPhone).replace(/\D/g, "");

  return delegates.some((delegate) => {
    if (delegate === userId) return true;
    return phone && String(delegate).replace(/\D/g, "") === phone;
  });
}

export function listOwnerDelegates() {
  return readJSON(OWNER_DELEGATES_FILE, []);
}

export function activateGroup(groupId) {
  const filename = INACTIVE_GROUPS_FILE;

  const inactiveGroups = readJSON(filename);

  const index = inactiveGroups.indexOf(groupId);

  if (index === -1) {
    return;
  }

  inactiveGroups.splice(index, 1);

  writeJSON(filename, inactiveGroups);
}

export function deactivateGroup(groupId) {
  const filename = INACTIVE_GROUPS_FILE;

  const inactiveGroups = readJSON(filename);

  if (!inactiveGroups.includes(groupId)) {
    inactiveGroups.push(groupId);
  }

  writeJSON(filename, inactiveGroups);
}

export function isActiveGroup(groupId) {
  const filename = INACTIVE_GROUPS_FILE;

  const inactiveGroups = readJSON(filename);

  return !inactiveGroups.includes(groupId);
}





export function activateAntiLinkGroup(groupId) {
  const filename = ANTI_LINK_GROUPS_FILE;

  const antiLinkGroups = readJSON(filename);

  if (!antiLinkGroups.includes(groupId)) {
    antiLinkGroups.push(groupId);
  }

  writeJSON(filename, antiLinkGroups);
}

export function deactivateAntiLinkGroup(groupId) {
  const filename = ANTI_LINK_GROUPS_FILE;

  const antiLinkGroups = readJSON(filename);

  const index = antiLinkGroups.indexOf(groupId);

  if (index === -1) {
    return;
  }

  antiLinkGroups.splice(index, 1);

  writeJSON(filename, antiLinkGroups);
}

export function isActiveAntiLinkGroup(groupId) {
  const filename = ANTI_LINK_GROUPS_FILE;

  const antiLinkGroups = readJSON(filename);

  return antiLinkGroups.includes(groupId);
}




export function muteMember(groupId, memberId) {
  const filename = MUTE_FILE;

  const mutedMembers = readJSON(filename, JSON.stringify({}));

  if (!mutedMembers[groupId]) {
    mutedMembers[groupId] = [];
  }

  if (!mutedMembers[groupId]?.includes(memberId)) {
    mutedMembers[groupId].push(memberId);
  }

  writeJSON(filename, mutedMembers);
}

export function unmuteMember(groupId, memberId) {
  const filename = MUTE_FILE;

  const mutedMembers = readJSON(filename, JSON.stringify({}));

  if (!mutedMembers[groupId]) {
    return;
  }

  const index = mutedMembers[groupId].indexOf(memberId);

  if (index !== -1) {
    mutedMembers[groupId].splice(index, 1);
  }

  writeJSON(filename, mutedMembers);
}

export function checkIfMemberIsMuted(groupId, memberId) {
  const filename = MUTE_FILE;

  const mutedMembers = readJSON(filename, JSON.stringify({}));

  if (!mutedMembers[groupId]) {
    return false;
  }

  return mutedMembers[groupId]?.includes(memberId);
}

export function activateOnlyAdmins(groupId) {
  const filename = ONLY_ADMINS_FILE;

  const onlyAdminsGroups = readJSON(filename, []);

  if (!onlyAdminsGroups.includes(groupId)) {
    onlyAdminsGroups.push(groupId);
  }

  writeJSON(filename, onlyAdminsGroups);
}

export function deactivateOnlyAdmins(groupId) {
  const filename = ONLY_ADMINS_FILE;

  const onlyAdminsGroups = readJSON(filename, []);

  const index = onlyAdminsGroups.indexOf(groupId);
  if (index === -1) {
    return;
  }

  onlyAdminsGroups.splice(index, 1);

  writeJSON(filename, onlyAdminsGroups);
}

export function isActiveOnlyAdmins(groupId) {
  const filename = ONLY_ADMINS_FILE;

  const onlyAdminsGroups = readJSON(filename, []);

  return onlyAdminsGroups.includes(groupId);
}

export function readGroupRestrictions() {
  return readJSON(GROUP_RESTRICTIONS_FILE, {});
}

export function saveGroupRestrictions(restrictions) {
  writeJSON(GROUP_RESTRICTIONS_FILE, restrictions, {});
}

export function isActiveGroupRestriction(groupId, restriction) {
  const restrictions = readGroupRestrictions();

  if (!restrictions[groupId]) {
    return false;
  }

  return restrictions[groupId][restriction] === true;
}

export function updateIsActiveGroupRestriction(groupId, restriction, isActive) {
  const restrictions = readGroupRestrictions();

  if (!restrictions[groupId]) {
    restrictions[groupId] = {};
  }

  restrictions[groupId][restriction] = isActive;

  saveGroupRestrictions(restrictions);
}

export function readRestrictedMessageTypes() {
  return readJSON(RESTRICTED_MESSAGES_FILE, {
    sticker: "stickerMessage",
    video: "videoMessage",
    image: "imageMessage",
    audio: "audioMessage",
    product: "productMessage",
    document: "documentMessage",
    event: "eventMessage",
  });
}

export function setPrefix(groupJid, prefix) {
  const filename = PREFIX_GROUPS_FILE;

  const prefixGroups = readJSON(filename, {});

  prefixGroups[groupJid] = prefix;

  writeJSON(filename, prefixGroups, {});
}

export function getPrefix(groupJid) {
  const filename = PREFIX_GROUPS_FILE;

  const prefixGroups = readJSON(filename, {});

  return prefixGroups[groupJid] || PREFIX;
}




export function setSpiderApiToken(token) {
  const filename = CONFIG_FILE;

  const config = readJSON(filename, {});

  config.spider_api_token = token;

  writeJSON(filename, config, {});
}

export function getSpiderApiToken() {
  const filename = CONFIG_FILE;

  const config = readJSON(filename, {});

  return config.spider_api_token || SPIDER_API_TOKEN;
}
