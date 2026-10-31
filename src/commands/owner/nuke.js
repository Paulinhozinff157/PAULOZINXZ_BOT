import { BOT_LID, OWNER_LID, PREFIX } from "../../config.js";
import { DangerError, InvalidParameterError } from "../../errors/index.js";
import { nukeNoTargetsMessage, nukeSuccessMessage } from "../../messages.js";
import { listOwnerDelegates } from "../../utils/database.js";

function bareJid(value) {
  return String(value || "").split(":")[0];
}

export default {
  name: "nuke",
  description: "Remove todos os participantes do grupo, preservando somente o bot.",
  commands: ["nuke"],
  usage: `${PREFIX}nuke`,
  handle: async ({ socket, remoteJid, sendReply, sendSuccessReact }) => {
    if (!remoteJid?.endsWith("@g.us")) {
      throw new InvalidParameterError("Este comando só pode ser usado em grupo.");
    }

    const metadata = await socket.groupMetadata(remoteJid);
    const botJid = bareJid(socket.user?.id);
    const protectedIds = new Set(
      [botJid, BOT_LID, OWNER_LID, ...listOwnerDelegates()]
        .filter(Boolean)
        .map(bareJid),
    );
    const targets = metadata.participants
      .filter((participant) => {
        const participantId = bareJid(participant.id);
        const participantPhone = bareJid(
          participant.phoneNumber || participant.participantAlt,
        );
        return (
          !protectedIds.has(participantId) &&
          !protectedIds.has(participantPhone)
        );
      })
      .map((participant) => participant.id);

    if (!targets.length) {
      throw new DangerError(nukeNoTargetsMessage);
    }

    await socket.groupParticipantsUpdate(remoteJid, targets, "remove");
    await sendSuccessReact();
    await sendReply(nukeSuccessMessage(targets.length));
  },
};
