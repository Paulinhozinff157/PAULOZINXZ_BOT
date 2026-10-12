const readline = require('readline');
const { exec } = require('child_process');
const { promisify } = require('util');

const execPromise = promisify(exec);
const colors = {
  reset: '\x1b[0m', bold: '\x1b[1m', dim: '\x1b[2m',
  green: '\x1b[38;5;78m', brightGreen: '\x1b[38;5;120m',
  blue: '\x1b[38;5;75m', brightBlue: '\x1b[38;5;117m',
  cyan: '\x1b[38;5;87m', brightCyan: '\x1b[38;5;123m',
  yellow: '\x1b[38;5;222m', brightYellow: '\x1b[38;5;228m',
  red: '\x1b[38;5;210m', brightRed: '\x1b[38;5;217m',
  magenta: '\x1b[38;5;177m', brightMagenta: '\x1b[38;5;219m',
  white: '\x1b[37m', brightWhite: '\x1b[97m', gray: '\x1b[38;5;245m',
  bgWhite: '\x1b[107m', black: '\x1b[30m'
};
const symbols = { check: '✓', cross: '✗', warning: '⚠', arrow: '➤', bullet: '▸', dot: '•' };

function clearScreen() { process.stdout.write('\x1Bc'); }
function showBanner() { console.log(`\n${colors.blue}${colors.bold}PAULOZINXZ_BOT${colors.reset}\n`); }

async function showSystemInfo() {
  console.log(`${colors.brightBlue}${colors.bold}INFORMAÇÕES DO SISTEMA${colors.reset}`);
  console.log(`${colors.gray}${'─'.repeat(72)}${colors.reset}\n`);
  console.log(`  ${colors.green}${symbols.check}${colors.reset} Node.js: ${colors.brightWhite}${process.version}${colors.reset}`);
  try {
    const { stdout } = await execPromise('npm --version');
    console.log(`  ${colors.green}${symbols.check}${colors.reset} npm: ${colors.brightWhite}v${stdout.trim()}${colors.reset}`);
  } catch { console.log(`  ${colors.red}${symbols.cross}${colors.reset} npm: ${colors.red}Não encontrado${colors.reset}`); }
  try {
    await execPromise('ffmpeg -version 2>&1 | head -n 1');
    console.log(`  ${colors.green}${symbols.check}${colors.reset} FFmpeg: ${colors.brightWhite}Instalado${colors.reset}`);
  } catch { console.log(`  ${colors.yellow}${symbols.warning}${colors.reset} FFmpeg: ${colors.yellow}Não encontrado${colors.reset}`); }
  try {
    await import('@systemzero/baileys');
    console.log(`  ${colors.green}${symbols.check}${colors.reset} Baileys: ${colors.brightWhite}Instalado${colors.reset}`);
  } catch { console.log(`  ${colors.red}${symbols.cross}${colors.reset} Baileys: ${colors.red}Não instalado${colors.reset}`); }
  console.log();
}

function showMenu() {
  console.log(`${colors.brightCyan}${colors.bold}🔌 ESCOLHA O MÉTODO DE CONEXÃO${colors.reset}`);
  console.log(`${colors.gray}${'─'.repeat(72)}${colors.reset}\n`);
  console.log(`  ${colors.brightWhite}1.${colors.reset} ${colors.brightBlue}Conectar via Código de Pareamento${colors.reset}`);
  console.log(`     ${colors.gray}${symbols.bullet} Ideal para conectar sem outro dispositivo${colors.reset}`);
  console.log(`     ${colors.gray}${symbols.bullet} Receba um código de 8 dígitos${colors.reset}\n`);
  console.log(`  ${colors.brightWhite}2.${colors.reset} ${colors.brightGreen}📷 Conectar via QR Code${colors.reset}`);
  console.log(`     ${colors.gray}${symbols.bullet} Método tradicional e rápido${colors.reset}`);
  console.log(`     ${colors.gray}${symbols.bullet} Escaneie com seu WhatsApp${colors.reset}\n`);
  console.log(`  ${colors.brightWhite}3.${colors.reset} ${colors.red}Sair${colors.reset}\n`);
}

function showPairingInstructions() {
  console.log(`\n${colors.brightBlue}${colors.bold}INSTRUÇÕES - CÓDIGO DE PAREAMENTO${colors.reset}`);
  console.log(`${colors.gray}${'─'.repeat(72)}${colors.reset}\n`);
  console.log(`  ${colors.brightWhite}1.${colors.reset} Abra o WhatsApp que será o bot`);
  console.log(`  ${colors.brightWhite}2.${colors.reset} Toque em ${colors.cyan}'Mais opções'${colors.reset} (⋮) ou ${colors.cyan}'Configurações'${colors.reset}`);
  console.log(`  ${colors.brightWhite}3.${colors.reset} Selecione ${colors.cyan}'Aparelhos conectados'${colors.reset}`);
  console.log(`  ${colors.brightWhite}4.${colors.reset} Toque em ${colors.cyan}'Conectar um aparelho'${colors.reset}`);
  console.log(`  ${colors.brightWhite}5.${colors.reset} Na parte inferior, toque em ${colors.cyan}'Conectar com número'${colors.reset}`);
  console.log(`  ${colors.brightWhite}6.${colors.reset} Digite o código de 8 dígitos que será exibido\n`);
}

function showQRInstructions() {
  console.log(`\n${colors.brightGreen}${colors.bold}INSTRUÇÕES - QR CODE${colors.reset}`);
  console.log(`${colors.gray}${'─'.repeat(72)}${colors.reset}\n`);
  console.log(`  ${colors.brightWhite}1.${colors.reset} Abra o WhatsApp que será o bot`);
  console.log(`  ${colors.brightWhite}2.${colors.reset} Toque em ${colors.cyan}'Mais opções'${colors.reset} (⋮) ou ${colors.cyan}'Configurações'${colors.reset}`);
  console.log(`  ${colors.brightWhite}3.${colors.reset} Selecione ${colors.cyan}'Aparelhos conectados'${colors.reset}`);
  console.log(`  ${colors.brightWhite}4.${colors.reset} Toque em ${colors.cyan}'Conectar um aparelho'${colors.reset}`);
  console.log(`  ${colors.brightWhite}5.${colors.reset} Aponte a câmera para o QR Code abaixo\n`);
}

function askQuestion(question) {
  return new Promise((resolve) => {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    rl.question(`${colors.brightCyan}${symbols.arrow}${colors.reset} ${question} `, (answer) => { rl.close(); resolve(answer.trim()); });
  });
}
function showLoading(message) {
  const frames = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];
  let index = 0;
  process.stdout.write(`\n${colors.brightBlue}${frames[0]}${colors.reset} ${message}`);
  return setInterval(() => { index = (index + 1) % frames.length; process.stdout.write(`\r${colors.brightBlue}${frames[index]}${colors.reset} ${message}`); }, 80);
}
function stopLoading(timer, message = '') { clearInterval(timer); process.stdout.write('\r\x1b[K'); if (message) console.log(`${colors.green}${symbols.check}${colors.reset} ${message}`); }
function showSuccess(message) { console.log(`\n${colors.green}${symbols.check}${colors.reset} ${colors.brightGreen}${message}${colors.reset}\n`); }
function showError(message) { console.log(`\n${colors.red}${symbols.cross}${colors.reset} ${colors.brightRed}${message}${colors.reset}\n`); }
function showWarning(message) { console.log(`\n${colors.yellow}${symbols.warning}${colors.reset} ${colors.brightYellow}${message}${colors.reset}\n`); }
async function showWelcomeScreen() { clearScreen(); showBanner(); await showSystemInfo(); showMenu(); }

module.exports = { clearScreen, showBanner, showSystemInfo, showMenu, showWelcomeScreen, showPairingInstructions, showQRInstructions, askQuestion, showLoading, stopLoading, showSuccess, showError, showWarning, colors, symbols };
