<<<<<<< HEAD
import { PREFIX } from "../../config.js";
=======
import { PREFIX } from "../../bot/config/index.mjs";
>>>>>>> 7b68792 (Atualização do bot)
import { menuMessage } from "../../menu.js";

export default {
  name: "menu",
<<<<<<< HEAD
  description: "Menu de comandos em texto",
  commands: ["menu", "help"],
  usage: `${PREFIX}menu`,
  /**
   * @param {CommandHandleProps} props
   */
  handle: async ({ remoteJid, sendSuccessReact, sendReply }) => {
    await sendSuccessReact();
    await sendReply(menuMessage(remoteJid));
=======
  description: "Menu completo de comandos",
  commands: ["menu", "help"],
  usage: `${PREFIX}menu`,
  /** @param {CommandHandleProps} props */
  handle: async ({ remoteJid, sendSuccessReact, sendReply }) => {
    await sendSuccessReact();
    await sendReply(await menuMessage(remoteJid));
>>>>>>> 7b68792 (Atualização do bot)
  },
};
