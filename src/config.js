import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const PREFIX = "/";
export const BOT_EMOJI = "";
export const COMMAND_REACTION_EMOJI = "🪄";
export const BOT_NAME = "PAULOZINXZ_BOT";
export const CHANNEL_INVITE_URL = "https://whatsapp.com/channel/0029Vb8tJ5x77qVZnxr3oC3C";

// DADOS PRINCIPAIS — edite somente se souber o LID correto.
export const OWNER_PHONE = "5581995597603";
export const BOT_LID = "115157351059667@lid";
export const OWNER_LID = "115157351059667@lid";

// LIDs autorizados a usar comandos de dono. Adicione um por linha.
export const OWNER_DELEGATE_LIDS = [];

export const COMMANDS_DIR = path.join(__dirname, "commands");
export const DATABASE_DIR = path.resolve(__dirname, "..", "database");
export const ASSETS_DIR = path.resolve(__dirname, "..", "assets");
export const TEMP_DIR = path.resolve(__dirname, "..", "assets", "temp");
export const TIMEOUT_IN_MILLISECONDS_BY_EVENT = 150;
export const SPIDER_API_BASE_URL = "https://api.spiderx.com.br/api";
export const SPIDER_API_TOKEN = "seu_token_aqui";
export const LINKER_BASE_URL = "https://linker.devgui.dev/api";
export const LINKER_API_KEY = "seu_token_aqui";
export const ONLY_GROUP_ID = "";
export const DEVELOPER_MODE = false;
export const OPENAI_API_KEY = "";
