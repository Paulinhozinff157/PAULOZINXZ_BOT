const fs = require('node:fs');
const path = require('node:path');

const FILE = path.join(__dirname, 'legacy-api-keys.json');
const DEFAULTS = {
  SHIZUKU: 'SANDRO_MD_API12',
  ZERO_TWO: 'SANDRO_MD_2005',
  SYSTEMZONE: 'SANDRO_MD6080',
  OKARUN: 'sandro_bot12',
  BRONXYS: 'SANDRO_FREE',
  PNSPUXADA: 'SANDRO_PX2025',
  BLACK: 'SANDROMD_2025_LUANA',
  SANDRO_2025: 'SANDRO2025L',
  NEWSAPI: '9dc1dde158804756ae9b33dd8d71f7a1',
  SERPER: '2a93d72e039b4a1c66d73b0469664440f7b1ec84',
  X_API: '01c268bbae213008dba5912c3ee1b2f90029e9f255154112acb839cb3e56022c',
  VIDEO_API: 'Sg7pQZoiscPFcW3LyreM7Kpm',
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
