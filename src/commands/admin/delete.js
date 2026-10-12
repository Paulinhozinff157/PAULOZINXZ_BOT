<<<<<<< HEAD
import { PREFIX } from "../../config.js";
=======
import { PREFIX } from "../../bot/config/index.mjs";
>>>>>>> 7b68792 (Atualização do bot)
import { InvalidParameterError } from "../../errors/index.js";
import { deletePaymentMessageWithFallback } from "../../utils/deletePaymentMessage.js";
import { getQuotedPaymentContext } from "../../utils/paymentMessage.js";

export default {
  name: "delete",
  description: "Excluo mensagens",
<<<<<<< HEAD
  commands: ["delete", "d", "apagar", "apaga", "del", "deletar"],
=======
  commands: ["delete", "apagar", "apaga", "del", "deletar"],
>>>>>>> 7b68792 (Atualização do bot)
  usage: `${PREFIX}delete (mencione uma mensagem)`,
  /**
   * @param {CommandHandleProps} props
   */
  handle: async ({ deleteMessage, webMessage, remoteJid, socket }) => {
    if (!webMessage?.message?.extendedTextMessage?.contextInfo) {
      throw new InvalidParameterError(
        "Você deve mencionar uma mensagem para excluir!",
      );
    }

    const { stanzaId, participant } =
      webMessage?.message?.extendedTextMessage?.contextInfo;

    if (!stanzaId || !participant) {
      throw new InvalidParameterError(
        "Você deve mencionar uma mensagem para excluir!",
      );
    }

    const quotedPayment = getQuotedPaymentContext(webMessage);

    if (quotedPayment?.stanzaId) {
      await deletePaymentMessageWithFallback({
        socket,
        remoteJid,
        messageKey: {
          remoteJid,
          fromMe: false,
          id: quotedPayment.stanzaId,
          participant: quotedPayment.participant || participant,
        },
      });
    } else {
      await deleteMessage({
        remoteJid,
        fromMe: false,
        id: stanzaId,
        participant,
      });
    }

    await deleteMessage(webMessage.key);
  },
};
