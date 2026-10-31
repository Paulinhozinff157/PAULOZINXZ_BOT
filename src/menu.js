import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import pkg from "../package.json" with { type: "json" };
import { BOT_NAME } from "./config.js";
import { getPrefix } from "./utils/database.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const COMMANDS_ROOT = path.join(__dirname, "commands");

const GROUPS = [
  { key: "owner", title: "PROPRIETÁRIO", icon: "👑" },
  { key: "admin", title: "ADMINISTRAÇÃO", icon: "🛡️" },
  { key: "member", title: "MEMBROS", icon: "👤" },
];

let cachedCatalog = null;

function readCommands(directory) {
  try {
    return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
      const fullPath = path.join(directory, entry.name);
      if (entry.isDirectory()) return readCommands(fullPath);
      if (!entry.isFile() || !entry.name.endsWith(".js")) return [];

      const name = entry.name.replace(/\.js$/i, "");
      if (name === "index" || name === "legacy-catalog" || name.startsWith("_")) return [];
      if (name.startsWith("zz-")) return [];
      return [name];
    });
  } catch {
    return [];
  }
}

function normalizeCommand(command) {
  return String(command || "").trim().toLowerCase().replace(/[^a-z0-9]/g, "");
}

function getCatalog() {
  if (cachedCatalog) return cachedCatalog;

  cachedCatalog = Object.fromEntries(
    GROUPS.map(({ key }) => {
      const seen = new Set();
      const commands = readCommands(path.join(COMMANDS_ROOT, key))
        .filter((name) => {
          const normalized = normalizeCommand(name);
          if (!normalized || seen.has(normalized)) return false;
          seen.add(normalized);
          return true;
        })
        .sort((a, b) => a.localeCompare(b, "pt-BR"));
      return [key, commands];
    }),
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

export function menuMessage(groupJid, prefix = getPrefix(groupJid)) {
  const catalog = getCatalog();
  const total = Object.values(catalog).reduce((sum, list) => sum + list.length, 0);

  const quick = ["menu", "info", "suporte", "perfil", "meu-lid"]
    .filter((command) => Object.values(catalog).some((list) => list.includes(command)))
    .map((command) => `${prefix}${command}`)
    .join("  •  ");

  return [
    "╭────────────────────────────────────╮",
    `│          🤖 ${BOT_NAME.padEnd(22).slice(0, 22)}│`,
    `│      ⚡ v${pkg.version}  •  🟢 ONLINE      │`,
    `│         Prefixo: ${prefix}  •  WhatsApp    │`,
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
    `🚀 _${BOT_NAME} • simples, rápido e organizado._`,
  ].join("\n");
}

export function invalidateMenuCache() {
  cachedCatalog = null;
}
