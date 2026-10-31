const fs = require('node:fs');
const path = require('node:path');

const FILE = path.resolve(__dirname, '../../../assets/auth/legacy-api-keys.json');
const DEFAULTS = {
  SHIZUKU: '',
  ZERO_TWO: '',
  SYSTEMZONE: '',
  OKARUN: '',
  BRONXYS: '',
  PNSPUXADA: '',
  BLACK: '',
  SANDRO_2025: '',
  NEWSAPI: '',
  SERPER: '',
  X_API: '',
  VIDEO_API: '',
};

function read() {
  try {
    const data = JSON.parse(fs.readFileSync(FILE, 'utf8'));
    return { ...DEFAULTS, ...data };
  } catch {
    return { ...DEFAULTS };
  }
}

function getLegacyApiKey(name) {
  const envName = `PAULOZINXZ_API_${name}`;
  return String(process.env[envName] || read()[name] || '').trim();
}

function setLegacyApiKey(name, value) {
  const key = String(name || '').trim().toUpperCase().replace(/[^A-Z0-9_]/g, '_');
  if (!key) throw new Error('Nome da API inválido.');
  const clean = String(value || '').trim();
  if (!clean) throw new Error('A chave não pode ficar vazia.');
  const current = read();
  current[key] = clean;
  fs.mkdirSync(path.dirname(FILE), { recursive: true });
  fs.writeFileSync(FILE, `${JSON.stringify(current, null, 2)}\n`);
  return key;
}

function hasLegacyApiKey(name) {
  return Boolean(getLegacyApiKey(name));
}

function getLegacyApiKeyStatus() {
  const current = read();
  return Object.keys(current).map((name) => ({ name, configured: Boolean(getLegacyApiKey(name)) }));
}

module.exports = { getLegacyApiKey, setLegacyApiKey, hasLegacyApiKey, getLegacyApiKeyStatus };
