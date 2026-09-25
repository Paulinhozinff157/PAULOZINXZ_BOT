import { PREFIX, OWNER_LID, OWNER_PHONE } from "../../config.js";
import { DangerError, InvalidParameterError } from "../../errors/index.js";
import { onlyNumbers } from "../../utils/index.js";

const OWNER_PHONE_ALIASES = new Set([
  onlyNumbers(OWNER_PHONE),
  "5581995597603",
  "558195597603",
]);

function targetFromPhone(rawTarget) {
  const digits = onlyNumbers(rawTarget);
  if (!digits) {
    return null;
  }

  if (OWNER_PHONE_ALIASES.has(digits)) {
    return `${onlyNumbers(OWNER_PHONE)}@lid`;
  }

  return digits.length >= 10 ? `${digits}@lid` : null;
}

export default {
  name: "sair",
  description: "Promove o usuário indicado e faz o bot sair do grupo.",
  commands: ["sair", "ban-x"],
  usage: `${PREFIX}sair @usuario, número de telefone ou respondendo à mensagem do usuário`,
  handle: async ({
    args,
    isGroup,
    isReply,
    replyLid,
    remoteJid,
    socket,
    userLid,
    sendSuccessReply,
  }) => {
    if (!isGroup) {
      throw new InvalidParameterError("Este comando só pode ser usado em grupo.");
    }
    if (userLid !== OWNER_LID) {
      throw new DangerError("Apenas o dono configurado pode usar o /sair.");
    }
    const rawTarget = args.join(" ").trim();
    const targetLid = isReply ? replyLid : targetFromPhone(rawTarget);
    if (!targetLid) {
      throw new InvalidParameterError(
        "Mencione um usuário, informe um número válido ou responda à mensagem dele.",
      );
    }
    await socket.groupParticipantsUpdate(remoteJid, [targetLid], "promote");
    await sendSuccessReply(
      `@${targetLid.split("@")[0]} foi promovido a administrador. Vou sair do grupo agora.`,
      [targetLid],
    );
    await socket.groupLeave(remoteJid);
  },
};
