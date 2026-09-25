import { COMMAND_REACTION_EMOJI, PREFIX } from "../../config.js";

export default {
  name: "hide-tag",
  description: "Este comando marcará todos do grupo",
  commands: ["hide-tag", "to-tag", "marcar", "marca", "tag-all"],
  usage: `${PREFIX}hidetag motivo`,
  /**
   * @param {CommandHandleProps} props
   */
  handle: async ({ fullArgs, sendText, socket, remoteJid, sendReact }) => {
    const { participants } = await socket.groupMetadata(remoteJid);
    const mentions = participants.map(({ id }) => id);
    await sendReact(COMMAND_REACTION_EMOJI);
    await sendText(`📢 Marcando todos!\n\n${fullArgs}`, mentions);
  },
};
