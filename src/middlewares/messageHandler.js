/**
 * Validador de mensagens
 *
 * @author PAULOZINXZ_BOT
 */
import { BOT_LID, OWNER_LID } from "../config.js";
import {
  applyAntiPaymentRestriction,
  handleQuotedPaymentRestriction,
} from "../utils/antiPaymentAction.js";
import { handleQuotedLinkRestriction } from "../utils/quotedLinkAction.js";
import {
  readGroupRestrictions,
  readRestrictedMessageTypes,
  isLinkUserAllowed,
} from "../utils/database.js";
import { hasGroupStatusMessage } from "../utils/groupStatusMessage.js";
import { hasDirectMedia } from "../utils/index.js";
import { errorLog } from "../utils/logger.js";
import { hasPaymentMessage } from "../utils/paymentMessage.js";
import { isAdmin } from "./index.js";
import { activeAntiRule, messageText } from "../utils/antiPolicy.js";
import { antiContentMessage, antiLinkMessage } from "../messages.js";

export async function messageHandler(socket, webMessage) {
  try {
    if (!webMessage?.key) {
      return;
    }

    const { remoteJid, fromMe, id: messageId } = webMessage.key;

    if (!remoteJid?.endsWith("@g.us")) {
      return;
    }

    if (fromMe) {
      return;
    }

    const userLid = webMessage.key?.participant || webMessage.key?.participantAlt;

    if (!userLid) {
      return;
    }

    const isBotOrOwner = userLid === OWNER_LID || userLid === BOT_LID;

    if (isBotOrOwner) {
      return;
    }

    const antiGroups = readGroupRestrictions();
    const groupRules = antiGroups[remoteJid];
    if (!groupRules || !Object.values(groupRules).some(Boolean)) {
      return;
    }

    const isAntiLinkActive = !!antiGroups[remoteJid]?.["anti-link"];
    const isAntiPaymentActive = !!antiGroups[remoteJid]?.["anti-payment"];

    const userIsAdmin = await isAdmin({ remoteJid, userLid, socket });

    if (userIsAdmin) {
      return;
    }

    const text = messageText(webMessage);
    const hasAnyLink = /(?:https?:\/\/|www\.|[a-z0-9-]+\.(?:com|net|org|io|co|br|ly|me|app|xyz)\b)/i.test(text);
    if (
      isAntiLinkActive &&
      !isLinkUserAllowed(remoteJid, userLid) &&
      (hasAnyLink || (await handleQuotedLinkRestriction({ socket, remoteJid, webMessage })))
    ) {
      await socket.sendMessage(remoteJid, {
        delete: { remoteJid, fromMe: false, id: messageId, participant: userLid },
      });
      await socket.sendMessage(remoteJid, { text: antiLinkMessage });
      return;
    }

    const antiRule = activeAntiRule(remoteJid, text);
    if (antiRule) {
      await socket.sendMessage(remoteJid, {
        delete: { remoteJid, fromMe: false, id: messageId, participant: userLid },
      });
      await socket.sendMessage(remoteJid, { text: antiContentMessage });
      return;
    }

    if (isAntiPaymentActive && hasPaymentMessage(webMessage)) {
      await applyAntiPaymentRestriction({
        socket,
        remoteJid,
        userLid,
        messageKey: {
          remoteJid,
          fromMe: false,
          id: messageId,
          participant: userLid,
        },
      });

      return;
    }

    if (
      isAntiPaymentActive &&
      (await handleQuotedPaymentRestriction({ socket, remoteJid, webMessage }))
    ) {
      return;
    }

    if (
      antiGroups[remoteJid]?.["anti-status-grupo"] &&
      hasGroupStatusMessage(webMessage)
    ) {
      try {
        await socket.sendMessage(remoteJid, {
          delete: webMessage.key,
        });
      } catch (error) {
        errorLog(
          `Erro ao aplicar anti-status-grupo. Verifique se eu estou como admin do grupo! Detalhes: ${error.message}`,
        );
      }
      return;
    }

    const messageType = Object.keys(readRestrictedMessageTypes()).find((type) =>
      hasDirectMedia(webMessage, type),
    );

    if (!messageType) {
      return;
    }

    const isAntiActive = !!antiGroups[remoteJid]?.[`anti-${messageType}`];

    if (!isAntiActive) {
      return;
    }

    await socket.sendMessage(remoteJid, {
      delete: {
        remoteJid,
        fromMe,
        id: messageId,
        participant: userLid,
      },
    });
  } catch (error) {
    errorLog(
      `Erro ao processar mensagem restrita. Verifique se eu estou como admin do grupo! Detalhes: ${error.message}`,
    );
  }
}
