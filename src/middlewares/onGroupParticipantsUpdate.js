import { exitMessage, welcomeMessage } from "../messages.js";
import {
  isActiveExitGroup,
  isActiveGroup,
  isActiveWelcomeGroup,
  getCustomGroupMessage,
} from "../utils/database.js";
import { extractUserLid, onlyNumbers } from "../utils/index.js";
import { errorLog } from "../utils/logger.js";

/**
 * Evento chamado quando um usuário entra ou sai de um grupo de WhatsApp.
 * As mensagens de entrada e saída são sempre enviadas como texto simples.
 *
 * @author PAULOZINXZ_BOT
 */
export async function onGroupParticipantsUpdate({
  data,
  remoteJid,
  socket,
  action,
}) {
  try {
    if (!remoteJid.endsWith("@g.us")) {
      return;
    }

    if (!isActiveGroup(remoteJid)) {
      return;
    }

    const userLid = extractUserLid(data);

    if (isActiveWelcomeGroup(remoteJid) && action === "add") {
      const mentions = [];
      let finalWelcomeMessage = getCustomGroupMessage(
        remoteJid,
        "welcome",
        welcomeMessage,
      );

      if (finalWelcomeMessage.includes("@member")) {
        const userNumber = onlyNumbers(userLid);
        finalWelcomeMessage = finalWelcomeMessage.replace(
          "@member",
          `@${userNumber}`,
        );
        mentions.push(userLid);
      }

      await socket.sendMessage(remoteJid, {
        text: finalWelcomeMessage,
        mentions,
      });
    } else if (isActiveExitGroup(remoteJid) && action === "remove") {
      const customExitMessage = getCustomGroupMessage(
        remoteJid,
        "exit",
        exitMessage,
      );
      const hasMemberMention = customExitMessage.includes("@member");
      const mentions = [];
      let finalExitMessage = customExitMessage;

      if (hasMemberMention) {
        const userNumber = onlyNumbers(userLid);
        finalExitMessage = customExitMessage.replace("@member", `@${userNumber}`);
        mentions.push(userLid);
      }

      await socket.sendMessage(remoteJid, {
        text: finalExitMessage,
        mentions,
      });
    }
  } catch (error) {
    errorLog(`Erro em onGroupParticipantsUpdate: ${error.message}`);
    errorLog(JSON.stringify(error, null, 2));
  }
}
