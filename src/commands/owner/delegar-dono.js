import { OWNER_LID, PREFIX } from "../../config.js";
import { DangerError, InvalidParameterError } from "../../errors/index.js";
import { addOwnerDelegate, removeOwnerDelegate } from "../../utils/database.js";
import { normalizePairingPhone, onlyNumbers } from "../../utils/index.js";
import { isBotOwner } from "../../middlewares/index.js";

function target(args, isReply, replyLid, webMessage) {
  if (isReply && replyLid) return replyLid;

  const mentioned =
    webMessage?.message?.extendedTextMessage?.contextInfo?.mentionedJid?.[0] ||
    webMessage?.message?.imageMessage?.contextInfo?.mentionedJid?.[0] ||
    webMessage?.message?.videoMessage?.contextInfo?.mentionedJid?.[0];

  if (mentioned) return mentioned;

  const digits = onlyNumbers(args.join(" "));
  return digits.length >= 10 ? `${normalizePairingPhone(digits)}@lid` : null;
}

export default {
  name: "dar-dono",
  description: "Concede ou remove comandos de dono de um usuário.",
  commands: ["dar-dono", "remover-dono"],
  usage: `${PREFIX}dar-dono @usuario\n${PREFIX}remover-dono @usuario`,
  handle: async ({ commandName, args, isReply, replyLid, userLid, userPhone, webMessage, sendReply, sendSuccessReact }) => {
    if (!isBotOwner({ userLid, userPhone })) {
      throw new DangerError("Somente o dono principal pode alterar delegados.");
    }
    const user = target(args, isReply, replyLid, webMessage);
    if (!user || user === OWNER_LID) throw new InvalidParameterError("Mencione, responda ou informe o número do usuário.");
    const isGrantCommand = commandName === "dardono" || commandName === "dar-dono";
    if (isGrantCommand) addOwnerDelegate(user);
    else removeOwnerDelegate(user);
    await sendSuccessReact();
    await sendReply(`Comandos de dono ${isGrantCommand ? "concedidos" : "removidos"} para o usuário.`);
  },
};
