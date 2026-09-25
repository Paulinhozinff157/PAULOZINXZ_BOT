/**
 * Este script é responsável
 * por carregar os eventos
 * que serão escutados pelo
 * socket do WhatsApp.
 *
 * @author PAULOZINXZ_BOT
 */
import { onCall } from "./middlewares/onCall.js";
import { onMessagesUpsert } from "./middlewares/onMesssagesUpsert.js";
import { badMacHandler } from "./utils/badMacHandler.js";
import { errorLog } from "./utils/logger.js";

export function load(socket) {
  const safeEventHandler = async (callback, data, eventName) => {
    try {
      await callback(data);
    } catch (error) {
      if (badMacHandler.handleError(error, eventName)) {
        return;
      }
      errorLog(`Erro ao processar evento ${eventName}: ${error.message}`);
      if (error.stack) {
        errorLog(`Stack trace: ${error.stack}`);
      }
    }
  };

  socket.ev.on("messages.upsert", async (data) => {
    const startProcess = Date.now();
    safeEventHandler(
      () =>
        onMessagesUpsert({
          socket,
          messages: data.messages,
          startProcess,
        }),
      data,
      "messages.upsert",
    );
  });

  socket.ev.process((events) => {
    if (events?.call?.length) {
      safeEventHandler(
        () => onCall({ socket, calls: events.call }),
        events.call,
        "call",
      );
    }
  });

}
