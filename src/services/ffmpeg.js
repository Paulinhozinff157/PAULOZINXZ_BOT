/**
 * Serviços de processamento de imagens usando ffmpeg.
 *
 * @author MRX
 */
import { spawn } from "node:child_process";
import path from "node:path";
import { TEMP_DIR } from "../config.js";
import { getRandomNumber, removeFileIfExists } from "../utils/index.js";
import { errorLog } from "../utils/logger.js";

class Ffmpeg {
  constructor() {
    this.tempDir = TEMP_DIR;
  }

  async _executeCommand(args) {
    return new Promise((resolve, reject) => {
      const child = spawn("ffmpeg", args, { stdio: ["ignore", "ignore", "pipe"] });
      let stderr = "";

      child.stderr.on("data", (chunk) => {
        stderr += chunk.toString();
        if (stderr.length > 4000) stderr = stderr.slice(-4000);
      });

      child.once("error", reject);
      child.once("close", (code) => {
        if (code === 0) return resolve();
        const error = new Error(`ffmpeg terminou com código ${code}`);
        errorLog(`Command error: ${stderr.trim() || error.message}`);
        reject(error);
      });
    });
  }

  async _createTempFilePath(extension = "png") {
    return path.join(
      this.tempDir,
      `${getRandomNumber(10_000, 99_999)}.${extension}`,
    );
  }

  async applyBlur(inputPath, intensity = "7:5") {
    const outputPath = await this._createTempFilePath();
    await this._executeCommand(["-y", "-i", inputPath, "-vf", `boxblur=${intensity}`, outputPath]);
    return outputPath;
  }

  async convertToGrayscale(inputPath) {
    const outputPath = await this._createTempFilePath();
    await this._executeCommand(["-y", "-i", inputPath, "-vf", "format=gray", outputPath]);
    return outputPath;
  }

  async mirrorImage(inputPath) {
    const outputPath = await this._createTempFilePath();
    await this._executeCommand(["-y", "-i", inputPath, "-vf", "hflip", outputPath]);
    return outputPath;
  }

  async adjustContrast(inputPath, contrast = 1.2) {
    const outputPath = await this._createTempFilePath();
    await this._executeCommand(["-y", "-i", inputPath, "-vf", `eq=contrast=${contrast}`, outputPath]);
    return outputPath;
  }

  async applyPixelation(inputPath) {
    const outputPath = await this._createTempFilePath();
    await this._executeCommand(["-y", "-i", inputPath, "-vf", "scale=iw/6:ih/6,scale=iw*10:ih*10:flags=neighbor", outputPath]);
    return outputPath;
  }

  async convertStickerToImage(inputPath) {
    const outputPath = await this._createTempFilePath();
    await this._executeCommand(["-y", "-i", inputPath, outputPath]);
    return outputPath;
  }

  async cleanup(filePath) {
    removeFileIfExists(filePath);
  }
}

export { Ffmpeg };
