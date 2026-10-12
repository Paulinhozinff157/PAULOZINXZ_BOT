<<<<<<< HEAD
import { PREFIX } from "../../../config.js";
import { InvalidParameterError } from "../../../errors/index.js";
import { play } from "../../../services/spider-x-api.js";
import { errorLog } from "../../../utils/logger.js";
=======
import { PREFIX } from "../../../bot/config/index.mjs";
import { InvalidParameterError } from "../../../errors/index.js";
import { play } from "../../../services/spider-x-api.js";
import { errorLog } from "../../../utils/logger.js";
import { nextMediaFromResults } from "../../../utils/mediaQueue.js";
import { BOT_NAME, OWNER_NAME } from "../../../bot/config/index.mjs";
>>>>>>> 7b68792 (Atualização do bot)

export default {
  name: "play-video",
  description: "Faço o download de vídeos",
  commands: ["play-video", "pv"],
  usage: `${PREFIX}play-video MC Hariel`,
  /**
   * @param {CommandHandleProps} props
   */
  handle: async ({
    sendVideoFromURL,
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
        `Você não pode usar links para baixar vídeos! Use ${PREFIX}yt-mp4 link`,
      );
    }

    await sendWaitReact();

    try {
      const data = await play("video", fullArgs);

      if (!data) {
        await sendErrorReply("Nenhum resultado encontrado!");
        return;
      }

<<<<<<< HEAD
      await sendSuccessReact();

      await sendImageFromURL(
        data.thumbnail,
        `*Título*: ${data.title}
        
*Descrição*: ${data.description}
*Duração em segundos*: ${data.total_duration_in_seconds}
*Canal*: ${data.channel.name}`,
      );

      await sendVideoFromURL(data.url);
=======
      const candidates = Array.isArray(data)
        ? data
        : Array.isArray(data.results)
          ? data.results
          : Array.isArray(data.items)
            ? data.items
            : [data];

      const selected = nextMediaFromResults(`play-video:${fullArgs.join(" ")}`, candidates);

      if (!selected?.url) {
        await sendErrorReply("Nenhuma mídia válida foi encontrada.");
        return;
      }

      await sendSuccessReact();

      await sendImageFromURL(
        selected.thumbnail,
        `🎬 *${BOT_NAME}*
👑 *Dono:* ${OWNER_NAME}
🎞️ *Título:* ${selected.title || "Sem título"}
📺 *Canal:* ${selected.channel?.name || "Não informado"}

💡 ${BOT_NAME} • ${OWNER_NAME}`,
      );

      await sendVideoFromURL(selected.url);

>>>>>>> 7b68792 (Atualização do bot)
    } catch (error) {
      errorLog(JSON.stringify(error, null, 2));
      await sendErrorReply(JSON.stringify(error.message));
    }
  },
};
