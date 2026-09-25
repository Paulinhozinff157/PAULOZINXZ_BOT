import { execFile } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { promisify } from "node:util";
import { TEMP_DIR } from "../config.js";
import { getRandomName } from "./index.js";

const execFileAsync = promisify(execFile);

function unwrapMessage(message) {
  let current = message;
  for (let attempt = 0; attempt < 4; attempt += 1) {
    const wrapped =
      current?.ephemeralMessage?.message ||
      current?.viewOnceMessage?.message ||
      current?.viewOnceMessageV2?.message ||
      current?.viewOnceMessageV2Extension?.message;
    if (!wrapped) {
      return current;
    }
    current = wrapped;
  }
  return current;
}

export function getViewOnceMediaType(webMessage) {
  const message = webMessage?.message;
  if (!message) {
    return null;
  }

  const hasViewOnceWrapper = Boolean(
    message.viewOnceMessage ||
      message.viewOnceMessageV2 ||
      message.viewOnceMessageV2Extension,
  );
  if (!hasViewOnceWrapper) {
    return null;
  }

  const content = unwrapMessage(message);
  if (content?.imageMessage) {
    return "image";
  }
  if (content?.videoMessage) {
    return "video";
  }
  return null;
}

export async function revealViewOnceMedia({
  webMessage,
  mediaType,
  downloadImage,
  downloadVideo,
  sendImageFromFile,
  sendVideoFromFile,
}) {
  const isImage = mediaType === "image";
  const inputPath = isImage
    ? await downloadImage(webMessage, "auto-reveal-input")
    : await downloadVideo(webMessage, "auto-reveal-input");

  if (!inputPath) {
    return false;
  }

  fs.mkdirSync(TEMP_DIR, { recursive: true });
  const outputPath = path.join(
    TEMP_DIR,
    `${getRandomName()}.${isImage ? "jpg" : "mp4"}`,
  );

  try {
    if (isImage) {
      await execFileAsync("ffmpeg", [
        "-y",
        "-i",
        inputPath,
        "-q:v",
        "2",
        outputPath,
      ]);
      await sendImageFromFile(outputPath, "Imagem revelada automaticamente.");
    } else {
      await execFileAsync("ffmpeg", [
        "-y",
        "-i",
        inputPath,
        "-c",
        "copy",
        outputPath,
      ]);
      await sendVideoFromFile(outputPath, "Vídeo revelado automaticamente.");
    }
    return true;
  } finally {
    for (const filePath of [inputPath, outputPath]) {
      if (filePath && fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    }
  }
}
