/**
 * Interface visual premium — PAULOZINXZ_BOT
 * Feita para Termux: compacta, colorida, organizada e sem "torres" de texto.
 * Sem dependências extras.
 */
import fs from "node:fs";
import path from "node:path";
import pkg from "../../package.json" with { type: "json" };

let consoleNoiseFilterInstalled = false;
let animationRunning = false;

const A = {
  reset: "\x1b[0m", bold: "\x1b[1m", dim: "\x1b[2m", white: "\x1b[97m",
  gray: "\x1b[90m", black: "\x1b[30m", cyan: "\x1b[96m", blue: "\x1b[94m",
  green: "\x1b[92m", yellow: "\x1b[93m", red: "\x1b[91m", magenta: "\x1b[95m",
  violet: "\x1b[35m", bgBlue: "\x1b[48;5;17m", bgViolet: "\x1b[48;5;54m",
};
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const stripAnsi = (text) => String(text).replace(/\x1b\[[0-9;]*m/g, "");
const width = () => Math.min(Math.max(process.stdout.columns || 58, 48), 78);
const innerWidth = () => width() - 2;
const isTTY = () => Boolean(process.stdout.isTTY);

function setTitle(title = "PAULOZINXZ_BOT") {
  if (isTTY()) process.stdout.write(`\x1b]0;${title}\x07`);
}
function cursor(show = true) {
  if (isTTY()) process.stdout.write(show ? "\x1b[?25h" : "\x1b[?25l");
}
function clearLine() {
  if (isTTY()) process.stdout.write("\r\x1b[2K");
}
function fit(text, max = innerWidth() - 2) {
  const clean = stripAnsi(text);
  return clean.length <= max ? text : clean.slice(0, Math.max(0, max - 1)) + "…";
}
function centered(text, max = innerWidth()) {
  const value = fit(text, max);
  const clean = stripAnsi(value);
  const spaces = Math.max(0, max - clean.length);
  return " ".repeat(Math.floor(spaces / 2)) + value + " ".repeat(Math.ceil(spaces / 2));
}
function commandCount() {
  try {
    const root = path.resolve(process.cwd(), "src", "commands");
    let total = 0;
    const walk = (dir) => {
      for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        if (entry.name.startsWith(".")) continue;
        const p = path.join(dir, entry.name);
        if (entry.isDirectory()) walk(p);
        else if (entry.name.endsWith(".js")) total++;
      }
    };
    walk(root);
    return total;
  } catch {
    return "—";
  }
}
function memory() {
  return `${(process.memoryUsage().rss / 1024 / 1024).toFixed(1)} MB`;
}
function frameLine(text, color = A.cyan) {
  clearLine();
  process.stdout.write(`${color}${text}${A.reset}`);
}
function line(char = "─", color = A.gray) {
  console.log(`${color}${char.repeat(innerWidth())}${A.reset}`);
}
function box(title, rows = [], color = A.cyan) {
  const w = innerWidth();
  console.log(`${color}╭${"─".repeat(w)}╮${A.reset}`);
  console.log(`${color}│${A.reset}${centered(`${A.bold}${title}${A.reset}`, w)}${color}│${A.reset}`);
  console.log(`${color}├${"─".repeat(w)}┤${A.reset}`);
  for (const row of rows) {
    const value = fit(` ${row}`, w).padEnd(w);
    console.log(`${color}│${A.reset}${value}${color}│${A.reset}`);
  }
  console.log(`${color}╰${"─".repeat(w)}╯${A.reset}`);
}

export function installConsoleNoiseFilter() {
  if (consoleNoiseFilterInstalled) return;
  const originalInfo = console.info.bind(console);
  console.info = (...args) => {
    const first = String(args[0] ?? "");
    if (first === "Closing session:") return warningLog("Sessão anterior encerrada — limpeza normal.");
    if (first === "Removing old closed session:") return warningLog("Chaves antigas removidas — limpeza normal.");
    originalInfo(...args);
  };
  process.on("exit", () => cursor(true));
  process.on("SIGINT", () => {
    cursor(true);
    console.log(`\n${A.yellow}⚡${A.reset} ${A.white}PAULOZINXZ_BOT${A.reset} ${A.gray}→ encerrando com segurança...${A.reset}`);
  });
  consoleNoiseFilterInstalled = true;
}
export function sayLog(message) { console.log(`${A.magenta}✦${A.reset} ${message}`); }
export function inputLog(message) { console.log(`${A.cyan}›${A.reset} ${message}`); }
export function infoLog(message, ...details) { console.log(`${A.blue}●${A.reset} ${message}`, ...details); }
export function successLog(message, ...details) { console.log(`${A.green}✓${A.reset} ${message}`, ...details); }
export function errorLog(message, ...details) { console.log(`${A.red}✕${A.reset} ${message}`, ...details); }
export function warningLog(message, ...details) { console.log(`${A.yellow}▲${A.reset} ${message}`, ...details); }

function brand() {
  const w = innerWidth();
  const compact = width() < 58;
  console.log(`${A.violet}╭${"━".repeat(w)}╮${A.reset}`);
  console.log(`${A.violet}│${A.reset}${centered(`${A.bold}${A.white}🤖  P A U L O Z I N X Z _ B O T${A.reset}`, w)}${A.violet}│${A.reset}`);
  console.log(`${A.violet}│${A.reset}${centered(`${A.cyan}⚡ WhatsApp${A.reset} ${A.gray}•${A.reset} ${A.magenta}Termux${A.reset} ${A.gray}•${A.reset} ${A.white}v${pkg.version}${A.reset}`, w)}${A.violet}│${A.reset}`);
  if (!compact) {
    console.log(`${A.violet}│${A.reset}${centered(`${A.green}● ONLINE${A.reset}  ${A.gray}│${A.reset}  ${A.cyan}PREFIXO /${A.reset}  ${A.gray}│${A.reset}  ${A.yellow}SISTEMA PREMIUM${A.reset}`, w)}${A.violet}│${A.reset}`);
  }
  console.log(`${A.violet}╰${"━".repeat(w)}╯${A.reset}`);
}

async function sweep(label, color = A.cyan, duration = 420) {
  const frames = ["▰░░░░░░░░", "▰▰░░░░░░░", "▰▰▰░░░░░░", "▰▰▰▰░░░░░", "▰▰▰▰▰░░░░", "▰▰▰▰▰▰░░░", "▰▰▰▰▰▰▰░░", "▰▰▰▰▰▰▰▰░", "▰▰▰▰▰▰▰▰▰"];
  const start = Date.now();
  let i = 0;
  while (Date.now() - start < duration) {
    frameLine(`${color}◆${A.reset} ${label.padEnd(24)} ${A.white}[${frames[i++ % frames.length]}]${A.reset}`);
    await sleep(45);
  }
  frameLine(`${A.green}✓${A.reset} ${label.padEnd(24)} ${A.green}[CONCLUÍDO]${A.reset}`);
  process.stdout.write("\n");
}

async function pulse(label, color = A.magenta, duration = 360) {
  const frames = ["✦", "✧", "✦", "★", "✦", "✧"];
  const start = Date.now(); let i = 0;
  while (Date.now() - start < duration) {
    frameLine(`${color}${frames[i++ % frames.length]}${A.reset} ${label}`);
    await sleep(65);
  }
  frameLine(`${A.green}✓${A.reset} ${label}`); process.stdout.write("\n");
}

function modulePreview() {
  const count = commandCount();
  const n = Number(count);
  const blocks = Number.isFinite(n) ? Math.min(16, Math.max(4, Math.round(n / 4))) : 8;
  const bar = "▰".repeat(blocks) + `${A.gray}${"▱".repeat(16 - blocks)}${A.reset}`;
  console.log(`${A.gray}┌${"─".repeat(innerWidth())}┐${A.reset}`);
  console.log(`${A.gray}│${A.reset} ${A.cyan}MÓDULOS ATIVOS${A.reset} ${A.gray}${bar}${A.reset} ${A.bold}${A.white}${count}${A.reset}`.padEnd(innerWidth() + 9) + `${A.gray}│${A.reset}`);
  console.log(`${A.gray}│${A.reset} ${A.green}●${A.reset} Núcleo ${A.green}OK${A.reset}   ${A.blue}●${A.reset} WhatsApp ${A.green}OK${A.reset}   ${A.magenta}●${A.reset} Serviços ${A.green}OK${A.reset}`.padEnd(innerWidth() + 9) + `${A.gray}│${A.reset}`);
  console.log(`${A.gray}└${"─".repeat(innerWidth())}┘${A.reset}`);
}

export function bannerLog() {
  setTitle(`PAULOZINXZ_BOT v${pkg.version}`);
  console.log();
  brand();
  console.log(`${A.gray}  ${A.dim}MENU DINÂMICO  •  MÓDULOS AUTOMÁTICOS  •  INTERFACE NEON${A.reset}`);
}

export async function startupLog() {
  if (animationRunning) return;
  animationRunning = true;
  cursor(false);
  console.clear();
  setTitle(`PAULOZINXZ_BOT v${pkg.version}`);

  brand();
  console.log();
  console.log(`${A.magenta}✦${A.reset} ${A.white}${A.bold}Inicializando ambiente${A.reset} ${A.gray}→ PAULOZINXZ_BOT${A.reset}`);
  console.log(`${A.gray}  Uma inicialização rápida, limpa e sem poluir a tela.${A.reset}`);
  console.log();

  await sweep("Preparando núcleo", A.cyan, 300);
  await sweep("Carregando módulos", A.magenta, 380);
  await sweep("Sincronizando WhatsApp", A.blue, 340);
  await pulse("Aplicando interface premium", A.yellow, 300);

  console.log();
  modulePreview();
  console.log();
  box("⚡ PAINEL DE INICIALIZAÇÃO", [
    `${A.green}✓${A.reset} Núcleo principal       ${A.green}ONLINE${A.reset}`,
    `${A.green}✓${A.reset} Ambiente Termux        ${A.green}PRONTO${A.reset}`,
    `${A.green}✓${A.reset} Sistema de módulos     ${A.green}ATIVO${A.reset}`,
    `${A.green}✓${A.reset} Interface               ${A.cyan}NEON${A.reset}`,
  ], A.cyan);

  console.log();
  const c = commandCount();
  console.log(`${A.green}●${A.reset} ${A.bold}${A.white}SISTEMA ONLINE${A.reset}  ${A.gray}•${A.reset} ${A.cyan}${c} módulos${A.reset}  ${A.gray}•${A.reset} RAM ${memory()}  ${A.gray}•${A.reset} PID ${process.pid}`);
  console.log(`${A.magenta}✦${A.reset} ${A.gray}WhatsApp pronto para conexão e execução dos comandos.${A.reset}`);
  console.log();
  animationRunning = false;
  cursor(true);
}

export function statusLog(items = []) {
  console.log();
  const rows = items.map((item) => `${item.icon || "•"} ${item.label}: ${item.value}`);
  rows.push(`${A.green}●${A.reset} ONLINE  ${A.gray}•${A.reset} RAM ${memory()}  ${A.gray}•${A.reset} PID ${process.pid}`);
  box("📡 CENTRAL DE STATUS", rows, A.cyan);
  console.log();
}

export function connectionLog(state, detail = "") {
  const styles = {
    connecting: [A.yellow, "◌", "CONECTANDO"],
    open: [A.green, "●", "ONLINE"],
    close: [A.red, "●", "OFFLINE"],
  };
  const [color, icon, label] = styles[state] || [A.blue, "•", String(state).toUpperCase()];
  console.log(`${color}${icon} ${A.bold}${label}${A.reset}${detail ? ` ${A.gray}• ${detail}${A.reset}` : ""}`);
}

export function pairingLog(code) {
  console.log();
  box("🔐 CÓDIGO DE PAREAMENTO", [
    `${A.yellow}▸${A.reset} Código: ${A.bold}${A.white}${code}${A.reset}`,
    `${A.gray}WhatsApp → Dispositivos conectados${A.reset}`,
  ], A.magenta);
  console.log();
}

export async function reconnectLog(attempt = 1, reason = "Conexão perdida") {
  for (let i = 0; i < 9; i++) {
    const f = ["◌", "◍", "◎", "◉"][i % 4];
    frameLine(`${A.yellow}${f}${A.reset} ${A.bold}RECONECTANDO${A.reset} ${A.gray}#${attempt} • ${reason}${A.reset}`);
    await sleep(85);
  }
  frameLine(`${A.green}✓${A.reset} Reconexão preparada`);
  process.stdout.write("\n");
}
