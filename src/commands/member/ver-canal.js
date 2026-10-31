import { PREFIX } from "../../config.js";
import { InvalidParameterError, WarningError } from "../../errors/index.js";

function getChannelKey(value) {
  const input = String(value || "").trim();
  const match = input.match(/whatsapp\.com\/channel\/([A-Za-z0-9_-]+)/i);
  if (match) return { type: "invite", key: match[1] };
  if (/^[0-9]+@newsletter$/.test(input)) return { type: "jid", key: input };
  return null;
}

export default {
  name: "ver-canal",
  description: "Envia o cartão nativo de um canal do WhatsApp",
  commands: ["ver-canal", "canal"],
  usage: `${PREFIX}ver-canal https://whatsapp.com/channel/SEU_LINK`,
  handle: async ({ args, fullArgs, socket, remoteJid, sendReply, sendSuccessReact }) => {
    const channel = getChannelKey(fullArgs || args.join(" "));

    if (!channel) {
      throw new InvalidParameterError(
        `Envie o link do canal. Exemplo: ${PREFIX}ver-canal https://whatsapp.com/channel/SEU_LINK`,
      );
    }

    if (typeof socket.newsletterMetadata !== "function") {
      throw new WarningError("Esta versão do WhatsApp não oferece suporte a cartões de canal.");
    }

    try {
      const metadata =
        channel.type === "jid"
          ? await socket.newsletterMetadata("jid", channel.key)
          : await socket.newsletterMetadata(channel.type, channel.key);

      if (!metadata?.id) {
        throw new Error("Canal não encontrado");
      }

      await socket.sendMessage(remoteJid, {
        newsletterFollowerInviteMessage: {
          newsletterJid: metadata.id,
          newsletterName: metadata.name || "Canal do WhatsApp",
          caption: fullArgs.replace(/https?:\/\/\S+/i, "").trim() || "Siga nosso canal no WhatsApp.",
        },
      });
      await sendSuccessReact();
    } catch {
      await sendReply("Não consegui carregar esse canal. Confira se o link do WhatsApp está correto.");
    }
  },
};
