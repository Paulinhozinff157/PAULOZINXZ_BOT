import { BOT_LID, OWNER_LID, PREFIX } from "../../config.js";
import { DangerError, InvalidParameterError } from "../../errors/index.js";
import { onlyNumbers } from "../../utils/index.js";
import { errorLog } from "../../utils/logger.js";

export default {
  name: "ban",
  description: "Removo um membro do grupo",
  commands: ["ban", "kick"],
  usage: `${PREFIX}ban @marcar_membro 

ou 

${PREFIX}ban (mencionando uma mensagem)`,
  /**
   * @param {CommandHandleProps} props
   */
  handle: async ({
    args,
    isReply,
    socket,
    remoteJid,
    replyLid,
    sendReply,
    userLid,
    sendSuccessReact,
    sendErrorReply,
  }) => {
    try {
      const rawTarget = args.join(" ").trim();
      const targetDigits = onlyNumbers(rawTarget);
      const hasFormattedNumber = targetDigits.length >= 10;

      if (!rawTarget && !isReply) {
        throw new InvalidParameterError(
          "Você precisa mencionar, informar um número ou responder à mensagem de um membro!"
        );
      }

      if (rawTarget && !rawTarget.includes("@") && !hasFormattedNumber) {
        throw new InvalidParameterError(
          'Informe um número válido, como +55 81 8885-2710, ou mencione um membro com "@"!'
        );
      }

      const userId = rawTarget ? `${targetDigits}@lid` : null;

      const memberToRemoveLid = isReply ? replyLid : userId;

      if (!memberToRemoveLid) {
        throw new InvalidParameterError("Membro inválido!");
      }

      if (memberToRemoveLid === userLid) {
        throw new DangerError("Você não pode remover você mesmo!");
      }

      const resolvedOwnerLid = OWNER_LID;

      if (resolvedOwnerLid && memberToRemoveLid === resolvedOwnerLid) {
        throw new DangerError("Você não pode remover o dono do bot!");
      }

      if (BOT_LID && memberToRemoveLid === BOT_LID) {
        throw new DangerError("Você não pode me remover!");
      }

      await socket.groupParticipantsUpdate(
        remoteJid,
        [memberToRemoveLid],
        "remove"
      );

      await sendSuccessReact();
      await sendReply("Membro removido com sucesso!");
    } catch (error) {
      errorLog(JSON.stringify(error, null, 2));
      await sendErrorReply(
        `Ocorreu um erro ao remover o membro: ${error.message}`
      );
    }
  },
};
