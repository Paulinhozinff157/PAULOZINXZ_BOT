import fs from "node:fs";
import path from "node:path";
import { BufferJSON, initAuthCreds } from "baileys";

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"), BufferJSON.reviver);
}

function writeJson(filePath, value) {
  const temporaryPath = `${filePath}.tmp`;
  fs.writeFileSync(temporaryPath, JSON.stringify(value, BufferJSON.replacer));
  fs.renameSync(temporaryPath, filePath);
}

function isLegacySessionFile(fileName) {
  if (fileName === "creds.json") return true;
  const legacyTypes = [
    "app-state-sync-key-",
    "app-state-sync-version-",
    "sender-key-memory-",
    "sender-key-",
    "pre-key-",
    "session-",
  ];
  return legacyTypes.some((prefix) => fileName.startsWith(prefix));
}

function cleanupLegacyFiles(legacyDirectory, currentFilePath) {
  if (!fs.existsSync(legacyDirectory)) return 0;
  let removed = 0;
  for (const fileName of fs.readdirSync(legacyDirectory)) {
    const filePath = path.join(legacyDirectory, fileName);
    if (filePath === currentFilePath || !isLegacySessionFile(fileName)) continue;
    if (!fs.statSync(filePath).isFile()) continue;
    fs.unlinkSync(filePath);
    removed++;
  }
  return removed;
}

function loadLegacyState(legacyDirectory) {
  const state = { creds: initAuthCreds(), keys: {} };
  if (!fs.existsSync(legacyDirectory)) return state;

  for (const fileName of fs.readdirSync(legacyDirectory)) {
    const filePath = path.join(legacyDirectory, fileName);
    if (!fileName.endsWith(".json") || !fs.statSync(filePath).isFile()) continue;
    if (fileName === "creds.json") {
      state.creds = readJson(filePath);
      continue;
    }

    const name = fileName.slice(0, -5);
    const knownTypes = [
      "app-state-sync-key",
      "app-state-sync-version",
      "sender-key-memory",
      "sender-key",
      "pre-key",
      "session",
    ];
    const type = knownTypes.find(
      (candidate) => name.startsWith(`${candidate}-`),
    );
    if (!type) continue;
    const id = name.slice(type.length + 1);
    if (!id) continue;
    state.keys[type] ??= {};
    state.keys[type][id] = readJson(filePath);
  }
  return state;
}

/**
 * Persistência compacta da sessão do Baileys.
 * Diferentemente de useMultiFileAuthState, grava credenciais e chaves
 * em um único JSON (auth-state.json), evitando milhares de arquivos pequenos.
 */
export async function useSingleFileAuthState(filePath, legacyDirectory) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });

  let data;
  if (fs.existsSync(filePath)) {
    data = readJson(filePath);
  } else {
    data = loadLegacyState(legacyDirectory);
    writeJson(filePath, data);
  }
  // auth-state.json já foi gravado e lido sem erro; agora é seguro remover
  // somente os arquivos de sessão legados, preservando o restante da pasta.
  cleanupLegacyFiles(legacyDirectory, filePath);

  const save = () => writeJson(filePath, data);
  const keys = {
    get: async (type, ids) => {
      const result = {};
      for (const id of ids) result[id] = data.keys?.[type]?.[id];
      return result;
    },
    set: async (updates) => {
      for (const [type, values] of Object.entries(updates)) {
        data.keys ??= {};
        data.keys[type] ??= {};
        for (const [id, value] of Object.entries(values)) {
          if (value) data.keys[type][id] = value;
          else delete data.keys[type][id];
        }
      }
      save();
    },
  };

  return {
    state: { creds: data.creds, keys },
    saveCreds: async () => save(),
  };
}
