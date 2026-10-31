import { downloadMediaMessage } from "baileys";
import { COMMAND_REACTION_EMOJI, PREFIX } from "../../config.js";
import { InvalidParameterError } from "../../errors/index.js";

function unwrapMessage(message) {
  let current = message;
  for (let depth = 0; depth < 5 && current; depth += 1) {
    const wrapped =
      current.ephemeralMessage?.message ||
      current.viewOnceMessage?.message ||
      current.viewOnceMessageV2?.message ||
      current.documentWithCaptionMessage?.message;
    if (!wrapped) break;
    current = wrapped;
  }
  return current || null;
}

function getQuotedContext(webMessage) {
  return webMessage?.message?.extendedTextMessage?.contextInfo || null;
}

function getText(message) {
  return (
    message?.conversation ||
    message?.extendedTextMessage?.text ||
    message?.imageMessage?.caption ||
    message?.videoMessage?.caption ||
    message?.documentMessage?.caption ||
    ""
  );
}

function getMediaType(message) {
  if (message?.imageMessage) return "image";
  if (message?.videoMessage) return "video";
  if (message?.audioMessage) return "audio";
  if (message?.documentMessage) return "document";
  if (message?.stickerMessage) return "sticker";
  return null;
}

export default {
  name: "hide-tag",
  description: "Marca o grupo e apaga a mensagem do comando",
  commands: ["hide-tag", "hidetag", "to-tag", "marcar", "marca", "tag-all"],
  usage: `${PREFIX}hidetag texto (ou responda a uma mídia)`,

  /** @param {CommandHandleProps} props */
  handle: async ({ fullArgs, socket, remoteJid, webMessage, sendReact }) => {
    if (!remoteJid?.endsWith("@g.us")) {
      throw new InvalidParameterError("Este comando só funciona em grupos.");
    }

    const { participants = [] } = await socket.groupMetadata(remoteJid);
    const mentions = participants.map(({ id }) => id).filter(Boolean);
    const context = getQuotedContext(webMessage);
    const quotedMessage = unwrapMessage(context?.quotedMessage);
    const inlineText = String(fullArgs || "").trim();
    const sourceText = getText(quotedMessage);
    const text = [sourceText, inlineText].filter(Boolean).join("\n").trim();
    const mediaType = getMediaType(quotedMessage);

    if (!mediaType && !text) {
      throw new InvalidParameterError(
        `Use ${PREFIX}hidetag texto ou responda a uma imagem, vídeo, áudio, figurinha ou arquivo.`,
      );
    }

    await sendReact(COMMAND_REACTION_EMOJI);

    let payload;
    if (!mediaType) {
      payload = { text: `📢 Marcando todos!\n\n${text}`, mentions };
    } else {
      const sourceEnvelope = {
        key: {
          remoteJid,
          fromMe: false,
          id: context.stanzaId,
          participant: context.participant,
        },
        message: quotedMessage,
      };
      const media = await downloadMediaMessage(
        sourceEnvelope,
        "buffer",
        {},
        { logger: undefined, reuploadRequest: socket.updateMediaMessage },
      );

      if (mediaType === "image") {
        payload = { image: media, mentions };
        if (text) payload.caption = text;
      } else if (mediaType === "video") {
        payload = { video: media, mentions };
        if (text) payload.caption = text;
      } else if (mediaType === "audio") {
        payload = {
          audio: media,
          mimetype: quotedMessage.audioMessage?.mimetype || "audio/mpeg",
          ptt: Boolean(quotedMessage.audioMessage?.ptt),
          mentions,
        };
      } else if (mediaType === "document") {
        const document = quotedMessage.documentMessage;
        payload = {
          document: media,
          mimetype: document.mimetype || "application/octet-stream",
          fileName: document.fileName || "arquivo",
          mentions,
        };
        if (text) payload.caption = text;
      } else {
        payload = { sticker: media, mentions };
      }
    }

    // Envia primeiro para não perder o conteúdo se o WhatsApp rejeitar a exclusão.
    await socket.sendMessage(remoteJid, payload);

    // Apaga apenas a mensagem que contém o comando, não a mídia/texto citado.
    if (webMessage?.key?.id) {
      try {
        await socket.sendMessage(remoteJid, { delete: webMessage.key });
      } catch (error) {
        console.warn(`[HIDETAG] Não foi possível apagar o comando: ${error.message}`);
      }
    }
  },
};
