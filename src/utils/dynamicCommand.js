/**
 * Direcionador
 * de comandos.
 *
<<<<<<< HEAD
 * @author PAULOZINXZ_BOT
 */
import { COMMAND_REACTION_EMOJI, ONLY_GROUP_ID } from "../config.js";
=======
 * @author PAULOZINXZ18
 */
import { COMMAND_REACTION_EMOJI, ONLY_GROUP_ID, PREFIX } from "../bot/config/index.mjs";
>>>>>>> 7b68792 (Atualização do bot)
import {
  DangerError,
  InvalidParameterError,
  WarningError,
} from "../errors/index.js";
import {
  checkPermission,
  hasTypeAndCommand,
  isAdmin,
  isBotOwner,
  isLink,
<<<<<<< HEAD
  verifyPrefix,
} from "../middlewares/index.js";
import { badMacHandler } from "./badMacHandler.js";
import {
  getPrefix,
=======
} from "../middlewares/index.js";
import { badMacHandler } from "./badMacHandler.js";
import {
>>>>>>> 7b68792 (Atualização do bot)
  isActiveAntiLinkGroup,
  isActiveGroup,
  isActiveOnlyAdmins,
  isLinkUserAllowed,
<<<<<<< HEAD
=======
  recordGroupCommandActivity,
>>>>>>> 7b68792 (Atualização do bot)
} from "./database.js";
import { findCommandImport } from "./index.js";
import { errorLog } from "./logger.js";
import { withGokuBlackCommandStyle } from "./gokuBlackPhrases.js";

/**
 * @param {CommandHandleProps} paramsHandler
 * @param {number} startProcess
 */
export async function dynamicCommand(paramsHandler, startProcess) {
  const {
    commandName,
    fullMessage,
    prefix,
    remoteJid,
    sendErrorReply,
    sendReact,
    sendReply,
    sendWarningReply,
    socket,
    userLid,
    userPhone,
    webMessage,
  } = paramsHandler;

  const activeGroup = isActiveGroup(remoteJid);

  if (activeGroup && isActiveAntiLinkGroup(remoteJid) && isLink(fullMessage)) {
    if (!userLid) {
      return;
    }

    if (
      !(await isAdmin({ remoteJid, userLid, socket })) &&
      !isLinkUserAllowed(remoteJid, userLid)
    ) {
      await socket.sendMessage(remoteJid, {
        delete: {
          remoteJid,
          fromMe: false,
          id: webMessage.key.id,
          participant: webMessage.key.participant,
        },
      });

      await sendReply("Anti-link ativado! A mensagem com link foi apagada.");

      return;
    }
  }

  const { type, command } = await findCommandImport(commandName);

  if (ONLY_GROUP_ID && ONLY_GROUP_ID !== remoteJid) {
    return;
  }

  if (activeGroup) {
    if (
<<<<<<< HEAD
      !verifyPrefix(prefix, remoteJid) ||
=======
      prefix !== PREFIX ||
>>>>>>> 7b68792 (Atualização do bot)
      !hasTypeAndCommand({ type, command })
    ) {
      if (fullMessage.toLocaleLowerCase().includes("prefixo")) {
        await sendReact(COMMAND_REACTION_EMOJI);
<<<<<<< HEAD
        const groupPrefix = getPrefix(remoteJid);
        await sendReply(
          `O padrão é: ${groupPrefix}\nUse ${groupPrefix}menu para ver os comandos disponíveis!`
=======
        await sendReply(
          `O prefixo oficial é ${PREFIX}.\nUse ${PREFIX}menu para ver os comandos disponíveis!`
>>>>>>> 7b68792 (Atualização do bot)
        );
      }

      return;
    }

    if (!(await checkPermission({ type, ...paramsHandler }))) {
      await sendErrorReply(
        "Você não tem permissão para executar este comando!"
      );
      return;
    }

    if (
      isActiveOnlyAdmins(remoteJid) &&
      !(await isAdmin({ remoteJid, userLid, socket }))
    ) {
      await sendWarningReply(
        "Somente administradores podem executar comandos!"
      );
      return;
    }
  }

  if (!isBotOwner({ userLid, userPhone }) && !activeGroup) {
    if (
<<<<<<< HEAD
      verifyPrefix(prefix, remoteJid) &&
=======
      prefix === PREFIX &&
>>>>>>> 7b68792 (Atualização do bot)
      hasTypeAndCommand({ type, command })
    ) {
      if (command.name !== "on") {
        await sendWarningReply(
          "Este grupo está desativado! Peça para o dono do grupo ativar o bot!"
        );
        return;
      }

      if (!(await checkPermission({ type, ...paramsHandler }))) {
        await sendErrorReply(
          "Você não tem permissão para executar este comando!"
        );
        return;
      }
    } else {
      return;
    }
  }

<<<<<<< HEAD
  if (!verifyPrefix(prefix, remoteJid)) {
    return;
  }

  const groupPrefix = getPrefix(remoteJid);

  if (fullMessage === groupPrefix) {
    await sendReact(COMMAND_REACTION_EMOJI);
    await sendReply(
      `Este é meu prefixo! Use ${groupPrefix}menu para ver os comandos disponíveis!`
=======
  if (prefix !== PREFIX) {
    return;
  }

  if (fullMessage === PREFIX) {
    await sendReact(COMMAND_REACTION_EMOJI);
    await sendReply(
      `Este é meu prefixo! Use ${PREFIX}menu para ver os comandos disponíveis!`
>>>>>>> 7b68792 (Atualização do bot)
    );

    return;
  }

  if (!hasTypeAndCommand({ type, command })) {
    await sendWarningReply(
<<<<<<< HEAD
      `Comando não encontrado! Use ${groupPrefix}menu para ver os comandos disponíveis!`
=======
      `Comando não encontrado! Use ${PREFIX}menu para ver os comandos disponíveis!`
>>>>>>> 7b68792 (Atualização do bot)
    );

    return;
  }

  const ownerCommand = isBotOwner({
    userLid: paramsHandler.userLid,
    userPhone: paramsHandler.userPhone,
  });
  const styledCommandParams = withGokuBlackCommandStyle(
    { ...paramsHandler, isBotOwner: ownerCommand },
    command.name,
  );
  try {
    await command.handle(withGokuBlackCommandStyle({
      ...paramsHandler,
      isBotOwner: ownerCommand,
      type,
      startProcess,
    }, command.name));
<<<<<<< HEAD
=======

    if (activeGroup) {
      recordGroupCommandActivity(remoteJid, userLid || userPhone);
      try {
        const groupName = paramsHandler.getGroupName
          ? await paramsHandler.getGroupName()
          : remoteJid;
        const person = webMessage?.pushName || userPhone || userLid || "desconhecido";
        infoLog(`COMANDO  •  ${person}  •  ${groupName || remoteJid}  •  ${PREFIX}${command.name}`);
      } catch {
        infoLog(`COMANDO  •  ${userPhone || userLid || "desconhecido"}  •  ${remoteJid}  •  ${PREFIX}${command.name}`);
      }
    }
>>>>>>> 7b68792 (Atualização do bot)
  } catch (error) {
    if (badMacHandler.handleError(error, `command:${command?.name}`)) {
      await styledCommandParams.sendWarningReply(
        "Erro temporário de sincronização. Tente novamente em alguns segundos."
      );
      return;
    }

    if (badMacHandler.isSessionError(error)) {
      errorLog(
        `Erro de sessão durante execução de comando ${command?.name}: ${error.message}`
      );
      await styledCommandParams.sendWarningReply(
        "Erro de comunicação. Tente executar o comando novamente."
      );
      return;
    }

    if (error instanceof InvalidParameterError) {
      await styledCommandParams.sendWarningReply(`Parâmetros inválidos! ${error.message}`);
    } else if (error instanceof WarningError) {
      await styledCommandParams.sendWarningReply(error.message);
    } else if (error instanceof DangerError) {
      await styledCommandParams.sendErrorReply(error.message);
    } else if (error.isAxiosError) {
      const messageText = error.response?.data?.message || error.message;
      const url = error.config?.url || "URL não disponível";

      const isSpiderAPIError = url.includes("api.spiderx.com.br");

      await styledCommandParams.sendErrorReply(
        `Ocorreu um erro ao executar uma chamada remota para ${
          isSpiderAPIError ? "a Spider X API" : url
        } no comando ${command.name}!
      
📄 *Detalhes*: ${messageText}`
      );
    } else {
      errorLog("Erro ao executar comando", error);
      await styledCommandParams.sendErrorReply(
        `Ocorreu um erro ao executar o comando ${command.name}!
      
📄 *Detalhes*: ${error.message}`
      );
    }
  }
}
