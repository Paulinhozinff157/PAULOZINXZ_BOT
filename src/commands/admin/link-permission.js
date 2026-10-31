import { PREFIX } from "../../config.js";
import { InvalidParameterError } from "../../errors/index.js";
import { allowLinkUser, blockLinkUser } from "../../utils/database.js";
import { onlyNumbers } from "../../utils/index.js";

function targetFrom(args, isReply, replyLid) {
  if (isReply && replyLid) return replyLid;
  const digits = onlyNumbers(args.join(" "));
  return digits.length >= 10 ? `${digits}@lid` : null;
}

export default {
  name: "liberar-link",
  description: "Libera ou remove a liberação de um usuário no anti-link.",
  commands: ["liberar-link", "bloquear-link"],
  usage: `${PREFIX}liberar-link @usuario ou respondendo à mensagem\n${PREFIX}bloquear-link @usuario ou respondendo à mensagem`,
  handle: async ({ commandName, args, isReply, replyLid, remoteJid, sendReply, sendSuccessReact }) => {
    const target = targetFrom(args, isReply, replyLid);
    if (!target) throw new InvalidParameterError("Mencione, responda ou informe o número do usuário.");
    const allowing = commandName === "liberar-link";
    if (allowing) allowLinkUser(remoteJid, target);
    else blockLinkUser(remoteJid, target);
    await sendSuccessReact();
    await sendReply(`Usuário ${allowing ? "liberado" : "bloqueado"} no anti-link.`);
  },
};
