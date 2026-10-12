<<<<<<< HEAD
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
=======
import { downloadMediaMessage, extractMessageContent } from "baileys";
import { COMMAND_REACTION_EMOJI, PREFIX } from "../../bot/config/index.mjs";
import { InvalidParameterError } from "../../errors/index.js";

function unwrapMessage(message) {
  if (!message) return null;
  return extractMessageContent(message) || message;
}

function getQuotedMessage(webMessage) {
  const context = webMessage?.message?.extendedTextMessage?.contextInfo;
  return context?.quotedMessage || null;
}

function getSourceMessage(webMessage) {
  return unwrapMessage(getQuotedMessage(webMessage)) || unwrapMessage(webMessage?.message);
}

function getTextContent(message) {
  return (
    message?.conversation ||
    message?.extendedTextMessage?.text ||
    message?.imageMessage?.caption ||
    message?.videoMessage?.caption ||
    message?.documentMessage?.caption ||
    message?.documentWithCaptionMessage?.message?.documentMessage?.caption ||
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

function getDocumentInfo(message) {
  const document = message?.documentMessage;
  return {
    mimetype: document?.mimetype || "application/octet-stream",
    fileName: document?.fileName || "arquivo",
    caption: document?.caption || undefined,
  };
}

export default {
  name: "hide-tag",
  description: "Reenvia o conteúdo e marca todos do grupo",
  commands: ["hide-tag", "hidetag", "to-tag", "marcar", "marca", "tag-all"],
  usage: `${PREFIX}hide-tag (envie ou responda a um conteúdo)`,

  handle: async ({ socket, remoteJid, webMessage, sendReact }) => {
    const { participants = [] } = await socket.groupMetadata(remoteJid);
    const mentions = participants.map(({ id }) => id).filter(Boolean);
    const source = getSourceMessage(webMessage);

    if (!source) {
      throw new InvalidParameterError(
        `Envie ou responda a um texto, imagem, vídeo, áudio, música, figurinha ou arquivo com ${PREFIX}hide-tag.`
      );
    }

    await sendReact(COMMAND_REACTION_EMOJI);

    const text = getTextContent(source);
    const mediaType = getMediaType(source);

    if (!mediaType) {
      const messageText = text || webMessage?.message?.extendedTextMessage?.text || "";
      if (!messageText.trim()) {
        throw new InvalidParameterError("Não encontrei nenhum conteúdo para marcar todos.");
      }

      await socket.sendMessage(remoteJid, {
        text: messageText,
        mentions,
      });
      return;
    }

    const quoted = getQuotedMessage(webMessage);
    const sourceEnvelope = quoted
      ? {
          key: {
            remoteJid,
            fromMe: false,
            id: webMessage?.message?.extendedTextMessage?.contextInfo?.stanzaId,
            participant: webMessage?.message?.extendedTextMessage?.contextInfo?.participant,
          },
          message: source,
        }
      : webMessage;

    const media = await downloadMediaMessage(
      sourceEnvelope,
      "buffer",
      {},
      {
        logger: undefined,
        reuploadRequest: socket.updateMediaMessage,
      },
    );

    let payload;

    if (mediaType === "image") {
      payload = { image: media, mentions };
      if (text) payload.caption = text;
    } else if (mediaType === "video") {
      payload = { video: media, mentions };
      if (text) payload.caption = text;
    } else if (mediaType === "audio") {
      payload = {
        audio: media,
        mimetype: source.audioMessage?.mimetype || "audio/mpeg",
        ptt: Boolean(source.audioMessage?.ptt),
        mentions,
      };
    } else if (mediaType === "document") {
      const info = getDocumentInfo(source);
      payload = {
        document: media,
        mimetype: info.mimetype,
        fileName: info.fileName,
        mentions,
      };
      if (info.caption) payload.caption = info.caption;
    } else {
      payload = {
        sticker: media,
        mentions,
      };
    }

    await socket.sendMessage(remoteJid, payload);

    // Apaga somente a mensagem que o usuário enviou com o comando,
    // deixando no grupo apenas a nova mensagem com as marcações.
    if (webMessage?.key?.id) {
      await socket.sendMessage(remoteJid, { delete: webMessage.key }).catch(() => {});
    }
>>>>>>> 7b68792 (Atualização do bot)
  },
};
