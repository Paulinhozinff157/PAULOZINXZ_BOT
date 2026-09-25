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
