<<<<<<< HEAD
import { PREFIX } from "../../config.js";
=======
import { PREFIX } from "../../bot/config/index.mjs";
>>>>>>> 7b68792 (Atualização do bot)

export default {
  name: "atualizar",
  description: "Atualiza dados do grupo e confirma o estado do bot.",
  commands: ["atualizar", "reiniciar", "creditos"],
  usage: `${PREFIX}atualizar\n${PREFIX}reiniciar\n${PREFIX}creditos`,
  handle: async ({ commandName, socket, remoteJid, sendReply, sendSuccessReact }) => {
    if (commandName === "creditos") {
<<<<<<< HEAD
      await sendReply("Desenvolvimento e manutenção: PAULOZINXZ_BOT.");
=======
      await sendReply("Desenvolvimento e manutenção: PAULOZINXZ18.");
>>>>>>> 7b68792 (Atualização do bot)
      return;
    }
    if (commandName === "reiniciar") {
      await sendSuccessReact();
      await sendReply("Reiniciando a conexão, sem apagar a sessão...");
      setTimeout(() => socket.ws?.close(), 500);
      return;
    }
    await socket.groupMetadata(remoteJid);
    await sendSuccessReact();
    await sendReply("Comandos, administradores e dados do grupo atualizados.");
  },
};
