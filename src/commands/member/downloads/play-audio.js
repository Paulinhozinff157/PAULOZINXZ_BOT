<<<<<<< HEAD
import { PREFIX } from "../../../config.js";
import { InvalidParameterError } from "../../../errors/index.js";
import { play } from "../../../services/spider-x-api.js";
import {
  formatSecondsToMinutesAndSeconds,
  getRandomNumber,
} from "../../../utils/index.js";
=======
import { PREFIX, BOT_NAME, OWNER_NAME } from "../../../bot/config/index.mjs";
import { InvalidParameterError } from "../../../errors/index.js";
import { play } from "../../../services/spider-x-api.js";
import { formatSecondsToMinutesAndSeconds } from "../../../utils/index.js";
import { nextMediaFromResults } from "../../../utils/mediaQueue.js";
>>>>>>> 7b68792 (Atualização do bot)

export default {
  name: "play-audio",
  description: "Faço o download de músicas",
  commands: ["play-audio", "play", "pa"],
  usage: `${PREFIX}play-audio MC Hariel`,
  /**
   * @param {CommandHandleProps} props
   */
  handle: async ({
    sendAudioFromURL,
    sendImageFromURL,
    fullArgs,
    sendWaitReact,
    sendSuccessReact,
    sendErrorReply,
  }) => {
    if (!fullArgs.length) {
      throw new InvalidParameterError(
        "Você precisa me dizer o que deseja buscar!",
      );
    }

    if (fullArgs.includes("http://") || fullArgs.includes("https://")) {
      throw new InvalidParameterError(
        `Você não pode usar links para baixar músicas! Use ${PREFIX}yt-mp3 link`,
      );
    }

    await sendWaitReact();

    const data = await play("audio", fullArgs);

    if (!data) {
      await sendErrorReply("Nenhum resultado encontrado!");
      return;
    }

<<<<<<< HEAD
    await sendSuccessReact();

    const randomSeconds = getRandomNumber(10, 20);
    const videoDuration = formatSecondsToMinutesAndSeconds(
      data.total_duration_in_seconds,
    );

    await sendImageFromURL(
      data.thumbnail,
      `*Título*: ${data.title}
        
*Descrição*: ${data.description}
*Canal*: ${data.channel.name}

> 0:${randomSeconds} ━━●──────${videoDuration} ↻ ⊲ Ⅱ ⊳ ↺
> ılı.lıllılı.ıllı..ılı.lıllılı.ıllı`,
    );

    await sendAudioFromURL(data.url);
=======
    const candidates = Array.isArray(data)
      ? data
      : Array.isArray(data.results)
        ? data.results
        : Array.isArray(data.items)
          ? data.items
          : [data];

    const selected = nextMediaFromResults(`play-audio:${fullArgs.join(" ")}`, candidates);

    if (!selected?.url) {
      await sendErrorReply("Nenhuma mídia válida foi encontrada.");
      return;
    }

    await sendSuccessReact();

    const videoDuration = formatSecondsToMinutesAndSeconds(
      selected.total_duration_in_seconds || 0,
    );

    await sendImageFromURL(
      selected.thumbnail,
      `🎵 *${BOT_NAME}*
👑 *Dono:* ${OWNER_NAME}
🎧 *Título:* ${selected.title || "Sem título"}
📺 *Canal:* ${selected.channel?.name || "Não informado"}
⏱️ *Duração:* ${videoDuration}

💡 ${BOT_NAME} • ${OWNER_NAME}`,
    );

    await sendAudioFromURL(selected.url);
>>>>>>> 7b68792 (Atualização do bot)
  },
};
