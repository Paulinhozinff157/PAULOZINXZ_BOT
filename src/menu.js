<<<<<<< HEAD
import fs from "node:fs";
import path from "node:path";
import { getPrefix } from "./utils/database.js";

const COMMANDS_ROOT = path.resolve(process.cwd(), "src", "commands");

const GROUPS = [
  { key: "owner", title: "PROPRIETÁRIO", icon: "👑" },
  { key: "admin", title: "ADMINISTRAÇÃO", icon: "🛡️" },
  { key: "member", title: "MEMBROS", icon: "👤" },
];

let cachedCatalog = null;

function readCommands(group) {
  const dir = path.join(COMMANDS_ROOT, group);

  try {
    return fs.readdirSync(dir, { withFileTypes: true })
      .filter((entry) => entry.isFile() && entry.name.endsWith(".js"))
      .map((entry) => entry.name.replace(/\.js$/i, ""))
      .filter((name) => name !== "index")
      .sort((a, b) => a.localeCompare(b, "pt-BR"));
  } catch {
    return [];
  }
}

function getCatalog() {
  if (cachedCatalog) return cachedCatalog;

  cachedCatalog = Object.fromEntries(
    GROUPS.map(({ key }) => [key, readCommands(key)])
  );

  return cachedCatalog;
}

function commandRows(commands, prefix, columns = 2) {
  const rows = [];

  for (let i = 0; i < commands.length; i += columns) {
    const row = commands
      .slice(i, i + columns)
      .map((command) => `› ${prefix}${command}`)
      .join("   ");

    rows.push(row);
  }

  return rows;
}

function section({ icon, title }, commands, prefix) {
  if (!commands.length) return "";

  const rows = commandRows(commands, prefix, commands.length === 1 ? 1 : 2);

  return [
    `${icon} ${title}`,
    "┌────────────────────────────────────",
    ...rows,
    "└────────────────────────────────────",
  ].join("\n");
}

export function menuMessage(groupJid) {
  const prefix = getPrefix(groupJid);
  const catalog = getCatalog();
  const total = Object.values(catalog).reduce((sum, list) => sum + list.length, 0);

  const quick = ["menu", "info", "suporte", "perfil", "meu-lid"]
    .filter((command) => Object.values(catalog).some((list) => list.includes(command)))
    .map((command) => `${prefix}${command}`)
    .join("  •  ");

  return [
    "╭────────────────────────────────────╮",
    "│          🤖 PAULOZINXZ_BOT         │",
    "│      ⚡ v8.11.0  •  🟢 ONLINE      │",
    "│         Prefixo: /  •  WhatsApp    │",
    "╰────────────────────────────────────╯",
    "",
    "✨ *MENU PRINCIPAL*",
    "_Organizado automaticamente pelos módulos ativos._",
    `📦 *${total} comandos* disponíveis no momento`,
    "",
    section(GROUPS[0], catalog.owner, prefix),
    "",
    section(GROUPS[1], catalog.admin, prefix),
    "",
    section(GROUPS[2], catalog.member, prefix),
    "",
    "⚡ ACESSO RÁPIDO",
    "┌────────────────────────────────────",
    `│ ${quick}`,
    "└────────────────────────────────────",
    "",
    "💬 _Use o prefixo antes do comando._",
    "🚀 _PAULOZINXZ_BOT • simples, rápido e organizado._",
  ].join("\n");
}

export function invalidateMenuCache() {
  cachedCatalog = null;
}
=======
import { BOT_NAME, OWNER_NAME, PREFIX, TEXTS } from "./bot/config/index.mjs";
import { readCommandImports } from "./utils/index.js";
import { legacyCommandGroups } from "./commands/member/legacy-catalog.js";

const HIDDEN_FROM_MENU = new Set([
  "addpremium", "animeimage", "anonovo", "attp3", "beijo", "boton", "brother", "chocar", "chutar",
  "conselhosb", "criador", "criargp", "delautoban", "delprem", "desmute", "download", "efeitoimg", "encurtalink",
  "figurinhas", "fotomenu", "fsticker", "game", "gamenews", "gpt3", "hd", "infogp", "listaadmins", "listacodigos",
  "loli33", "matar", "menulogos", "menupremium", "meubanco", "meusc", "modoc", "nota", "pedrapapeltesoura",
  "rbg", "regrasgrupo", "resetvelha", "rmnota", "screenshot", "stalktwitter", "tapa", "toanime", "toimg",
  "totalcmd3", "verforca", "seta", "fundobv", "ranking", "zerotwo", "simih", "simih2", "ver-canal", "ytsearch",
  "ytmp4", "ytdoc", "ytaudio", "ytvideo", "ytdoc1", "tagme", "rank-all", "suporte",
]);

const GROUPS = [
  { key: "owner", title: "DONO", icon: "👑" },
  { key: "admin", title: "ADMINISTRAÇÃO", icon: "🛡️" },
  { key: "protection", title: "PROTEÇÃO", icon: "🔐" },
  { key: "rankings", title: "RANKINGS & NÍVEIS", icon: "🏆" },
  { key: "games", title: "JOGOS & RPG", icon: "🎮" },
  { key: "media", title: "FIGURINHAS & MÍDIA", icon: "🎨" },
  { key: "downloads", title: "DOWNLOADS", icon: "⬇️" },
  { key: "ai", title: "IA & INTELIGÊNCIA", icon: "🧠" },
  { key: "group", title: "GRUPO & SOCIAL", icon: "👥" },
  { key: "premium", title: "PREMIUM", icon: "💎" },
  { key: "paulozinxz18", title: "PAULOZINXZ18", icon: "🎬" },
  { key: "utilities", title: "UTILIDADES", icon: "⚡" },
];

const RANKING_COMMANDS = new Set([
  "ranking", "rank", "rank-all", "rankativos", "rankinativo", "ranklevel", "rankcity", "rankcornos",
  "rankgay", "rankgostosa", "rankgostoso", "ranklixo", "rankpau", "rankppt", "level", "addlevel", "addxp",
]);
const GAME_COMMANDS = new Set(["adivinha", "akinator", "jogo", "jogodaforca", "verforca", "iniciar-forca", "pedrapapeltesoura", "resetvelha", "game", "games", "gamenews"]);
const MEDIA_COMMANDS = new Set(["sticker", "togif", "toimg", "attp", "attp1", "attp2", "attp3", "attp4", "attp5", "attp6", "attp7", "attp8", "attp9", "figurinhas", "fsticker", "hd", "rbg", "efeitoimg", "foto", "imagem", "anime", "toanime", "animeimage"]);
const DOWNLOAD_COMMANDS = new Set(["ytsearch", "ytmp4", "ytdoc", "ytaudio", "ytvideo", "ytdoc1", "tagme", "rank-all", "suporte", "play-video", "play-audio", "download", "encurtalink"]);
const AI_COMMANDS = new Set(["gpt", "gpt3", "chatgpt3", "zeroai", "zerotwo"]);
const GROUP_COMMANDS = new Set(["infogp", "gpinfo", "regrasgrupo", "criargp", "listaadmins", "tagme", "totag", "hidetag", "cita", "reviver", "sairgp", "perfilff", "legendabv", "legendasaiu", "legenda-estrangeiros", "fundobv"]);
const PREMIUM_COMMANDS = new Set(["addpremium", "addvip", "delprem", "menupremium", "premium"]);

let cachedCatalogPromise = null;

function canonicalCommand(command) {
  if (!Array.isArray(command?.commands) || !command.commands.length) return null;
  return String(command.commands[0]).trim().toLowerCase();
}
function normalize(command) {
  return String(command || "").trim().toLowerCase().replace(/[^a-z0-9-]/g, "");
}
function classifyCommand({ command, key, source }) {
  const name = normalize(command);
  const path = String(source || "").replaceAll("\\", "/");
  if (key === "owner") return "owner";
  if (key === "admin") return /^(anti-|warn$|unwarn$|revelar)/.test(name) ? "protection" : "admin";
  if (path.includes("/commands/member/downloads/")) return "downloads";
  if (path.includes("/commands/member/paulozinxz18/")) return "paulozinxz18";
  if (RANKING_COMMANDS.has(name) || name.startsWith("rank")) return "rankings";
  if (GAME_COMMANDS.has(name) || /^(adivinha|akinator|jogo)/.test(name)) return "games";
  if (MEDIA_COMMANDS.has(name) || /^(sticker|figurin|attp)/.test(name)) return "media";
  if (DOWNLOAD_COMMANDS.has(name) || /^(yt|play-)/.test(name)) return "downloads";
  if (AI_COMMANDS.has(name) || /^(gpt|chatgpt|zeroai)/.test(name)) return "ai";
  if (GROUP_COMMANDS.has(name) || /^(anti|grupo|gp|tag|legenda)/.test(name)) return "group";
  if (PREMIUM_COMMANDS.has(name) || /premium|vip/.test(name)) return "premium";
  return "utilities";
}

async function getCatalog() {
  if (cachedCatalogPromise) return cachedCatalogPromise;
  cachedCatalogPromise = readCommandImports().then((imports) => {
    const catalog = Object.fromEntries(GROUPS.map(({ key }) => [key, []]));
    const seen = new Set();
    const addCommand = (command, key) => {
      const normalized = normalize(command);
      if (!normalized || normalized.startsWith("zz-") || HIDDEN_FROM_MENU.has(normalized) || seen.has(normalized)) return;
      seen.add(normalized);
      if (catalog[key]) catalog[key].push(normalized);
    };
    for (const [sourceKey, modules] of Object.entries(imports)) {
      for (const module of modules || []) {
        if (module?.menu === false || module?.hidden === true || module?.name === "legacy-catalog") continue;
        const name = canonicalCommand(module);
        if (!name) continue;
        addCommand(name, classifyCommand({ command: name, key: sourceKey, source: module.__sourceFile }));
      }
    }
    for (const groups of legacyCommandGroups) {
      const primary = String(groups[0] || "").trim().toLowerCase();
      if (primary) addCommand(primary, classifyCommand({ command: primary, key: "legacy", source: "" }));
    }
    for (const key of Object.keys(catalog)) catalog[key].sort((a, b) => a.localeCompare(b, "pt-BR"));
    return catalog;
  }).catch((error) => { cachedCatalogPromise = null; throw error; });
  return cachedCatalogPromise;
}

function formatPersonalizedText(template) {
  return String(template || "").replaceAll("{prefix}", PREFIX).replaceAll("{bot}", BOT_NAME).replaceAll("{dono}", OWNER_NAME);
}
function chunk(items, size) {
  const rows = [];
  for (let i = 0; i < items.length; i += size) rows.push(items.slice(i, i + size));
  return rows;
}
function section({ icon, title }, commands) {
  if (!commands.length) return "";
  return [`${icon} *${title}*`, ...chunk(commands, 3).map(row => row.map(command => `• ${PREFIX}${command}`).join("   "))].join("\n");
}

export async function menuMessage() {
  const catalog = await getCatalog();
  const total = Object.values(catalog).reduce((sum, list) => sum + list.length, 0);
  const activeSections = GROUPS.filter(group => catalog[group.key]?.length);
  const lines = [
    `🤖 *${BOT_NAME}*`,
    `👑 *Dono:* ${OWNER_NAME}   ⚡ *Prefixo:* ${PREFIX}`,
    `📦 *${total} comandos*   •   🟢 *online*`,
    "",
    formatPersonalizedText(TEXTS.menuIntro || "✨ *Seu bot. Seus comandos. Seu estilo.*"),
    "",
  ];
  for (const group of activeSections) lines.push(section(group, catalog[group.key]), "");
  lines.push(
    "💡 *COMO USAR*",
    formatPersonalizedText(TEXTS.menuInfo || "• {prefix}info <comando> — detalhes do comando"),
    formatPersonalizedText(TEXTS.menuAtalho || "• {prefix}menu — abrir este menu"),
    "",
    formatPersonalizedText(TEXTS.mediaRodape || "🤖 {bot}  •  👑 {dono}"),
  );
  return lines.filter(Boolean).join("\n");
}

export function invalidateMenuCache() { cachedCatalogPromise = null; }
>>>>>>> 7b68792 (Atualização do bot)
