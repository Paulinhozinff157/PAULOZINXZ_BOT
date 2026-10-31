import { PREFIX } from "../../config.js";
import { menuMessage } from "../../menu.js";

export default {
  name: "menu",
  description: "Menu de comandos em texto",
  commands: ["menu", "help"],
  usage: `${PREFIX}menu`,
  /**
   * @param {CommandHandleProps} props
   */
  handle: async ({ remoteJid, sendSuccessReact, sendReply }) => {
    await sendSuccessReact();
    await sendReply(menuMessage(remoteJid));
  },
};
