import { WarningError } from "../../../errors/index.js";

export function createPaulozinxz18Command({ name, urls, mediaType }) {
  return {
    name,
    description: mediaType === "video" ? "Envia um vídeo do módulo Paulozinxz18." : "Envia uma imagem do módulo Paulozinxz18.",
    commands: [name],
    usage: `.${name}`,
    handle: async ({ sendImageFromURL, sendVideoFromURL }) => {
      if (!Array.isArray(urls) || !urls.length) throw new WarningError("Este módulo está sem mídia disponível.");
      const url = urls[Math.floor(Math.random() * urls.length)];
      if (mediaType === "video") await sendVideoFromURL(url);
      else await sendImageFromURL(url);
    },
  };
}
