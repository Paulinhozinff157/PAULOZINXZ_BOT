import { createRequire } from "node:module";
import path from "node:path";
import { fileURLToPath } from "node:url";

const require = createRequire(import.meta.url);
const botRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "bot");
let botHandler;
let loadError;
let legacyQueue = Promise.resolve();

global.infoLog ??= (...args) => console.info(...args);
global.errorLog ??= (...args) => console.error(...args);
global.warningLog ??= (...args) => console.warn(...args);
global.isJsonIncludes ??= (value, target) => {
  if (Array.isArray(value)) return value.includes(target);
  if (value && typeof value === "object") return Object.prototype.hasOwnProperty.call(value, target);
  return false;
};

function loadBotHandler() {
  if (botHandler || loadError) return botHandler;
  const previousCwd = process.cwd();
  try {
    process.chdir(botRoot);
    botHandler = require(path.join(botRoot, "sandro.js"));
  } catch (error) {
    loadError = error;
  } finally {
    process.chdir(previousCwd);
  }
  return botHandler;
}

export async function runBotCommand({ socket, webMessage }) {
  const handler = loadBotHandler();
  if (typeof handler !== "function") {
    throw loadError || new Error("Processador de comandos indisponível.");
  }

  // O processador legado ainda usa caminhos relativos. Serializar a execução
  // evita que duas mensagens alterem o cwd uma da outra.
  const run = legacyQueue.then(async () => {
    const previousCwd = process.cwd();
    try {
      process.chdir(botRoot);
      await handler({ messages: [webMessage], type: "notify" }, socket);
    } finally {
      process.chdir(previousCwd);
    }
  });
  legacyQueue = run.catch(() => {});
  await run;
  return true;
}
