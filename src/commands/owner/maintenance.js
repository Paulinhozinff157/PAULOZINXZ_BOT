import { PREFIX } from "../../config.js";

export default {
  name: "atualizar",
  description: "Atualiza dados do grupo e confirma o estado do bot.",
  commands: ["atualizar", "reiniciar", "creditos"],
  usage: `${PREFIX}atualizar\n${PREFIX}reiniciar\n${PREFIX}creditos`,
  handle: async ({ commandName, socket, remoteJid, sendReply, sendSuccessReact }) => {
    if (commandName === "creditos") {
      await sendReply("Desenvolvimento e manutenção: PAULOZINXZ_BOT.");
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
