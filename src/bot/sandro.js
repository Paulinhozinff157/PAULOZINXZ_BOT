/*｡☆✼★━━━━━━ATENÇÃO━━━━━━━━━━★✼
❤️⃤𝙀𝙐 𝙉𝘼𝙊 𝙋𝙀𝙍𝙈𝙄𝙏𝙊 𝙍𝙀𝙑𝙀𝙉𝘿𝙀𝙍 𝙊𝙐 𝙍𝙀𝙋𝘼𝙎𝙎𝘼𝙍 𝙀𝙎𝙎𝘼 𝙑𝙀𝙍𝙎𝘼𝙊.❤️⃤
｡☆✼★━━━━━━ATENÇÃO━━━━━━━━━━★✼*/
let downloadContentFromMessage,
  relayWAMessage,
  generateWAMessageFromContent,
  mentionedJid,
  generateWAMessage,
  generateMessageIDV2,
  processTime,
  MediaType,
  Browser,
  proto,
  MessageType,
  Presence,
  Mimetype,
  Browsers,
  delay,
  getLastMessageInChat,
  BufferJSON;

//_-_-_-__-_-_-_-_-_-MODULOS/FUNÇÕES-_-_-_-_-_-__-_-_-_-_-\\

const Uploader = require("./data/upload.js"); // caminho até seu arquivo upload.js
// Logger compatível com os comandos legados.
const { infoLog, errorLog, warningLog } = require("./assets/lib/logger.js");
const uploader = new Uploader(); // cria uma instância da classe

// Sistema de conversão de áudios para OGG/Opus (compatibilidade universal)
const {
  convertPathToOgg,
  sendAudioMessage,
  prepareAudioForWhatsApp,
} = require("./data/org/funcoes/audio_converter.js");

const {
  fs,
  axios,
  crypto,
  util,
  P,
  linkfy,
  request,
  cheerio,
  ms,
  ffmpeg,
  qrterminal,
  exec,
  spawn,
  execSync,
  moment,
  color,
  time,
  hora,
  date,
  getBuffer,
  convertSticker,
  recognize,
  fetchJson,
  fetchText,
  aluguel,
  getBase64,
  response,
  upload,
  nit,
  validmove,
  setGame,
  supre,
  wait,
  advices,
  shuffle,
  getExtension,
  generateMessageID,
  getGroupAdmins,
  getMembros,
  getRandom,
  banner2,
  banner3,
  temporizador,
  vip,
  chyt,
  kyun,
  linguagem,
  mess, 
  getInfo,
  simih,
  botoff,
  colors,
  rgtake,
  comand,
  rgp,
  rg_aluguel,
  infos,
  bloq_global,
  fetch,
  menubasico,
  infoSystem,
  mensagens, 
  enviar, 
  chaves,
  menulink,
  autorpg,
  menupx,
  animes,
  downloads,
  sabrpg,
  palavrasANA, 
  quizanimais, 
  enigmaArchive, 
  garticArchives,
  whatMusicAr,
  psycatgames,
  sendPoll,
  sortear,
  figurinhas,
  getMinesPositions, 
  MinesHelp,
  mines,
  semprefixo,
  cavalosrpg,
  rpgmenu,
  minerar,
  roubosrpg,
  rg_pescaria,
  pescaria,
  galosrpg,
  translate,
  level2,
  grupos,
} = require("./consts-func.js");

const {
fundobv,
} = require("./connect.js");

const { imgperfil, pgpau, pgbunda } = require("./config/links_img.json");
const { getLegacyApiKey } = require("./config/legacy-api-keys.cjs");

//-_-_-_-_-_--_-_-_-_-JS-MENUS/INFORMAÇÕES-_-_-_-_-_-_-_-_-_-_\\

const {
  menu,
  anotacao,
  menudono,
  adms,
  menulogos,
  efeitos,
  menuprem,
  brincadeiras,
  infodono,
  gitdobot,
  configbot,
  cmd_termux,
  alteradores,
  tabela,
  conselhob,
  palavrasc,
  ban,
  nescessario,
  setting,
  logoslink,
  premium,
  countMessage,
  sendVideoAsSticker,
  sendImageAsSticker,
  sendVideoAsSticker2,
  sendImageAsSticker2,
  daily,
  limitefll,
  antispam,
  rggold,
  anotar,
  black_,
  enviarfiguUrl,
  getFileBuffer,
  DLT_FL,
  sleep,
  ANT_LTR_MD_EMJ,
  Limit_CMD,
  recolherLNK,
  SIMI_OFC,
  menugold,
  menuff,
  diversos,
  nsfw,
} = require("./consts-func.js");

const {
  paidHours,
  savePaid,
  addGroupInPaid,
  getGroupInPaid,
  getIDinPaid,
  addPaid,
  rmPaid,
  isIDinPaid,
  groupLinkPaid,
  paidSGL,
  addGroupLinkInPaid,
  getGroupLinkFromPaidID,
  getInfoPaidGroupLink,
  rmGroupLinkInPaid,
  paidFunc,
} = require("./data/horarios/paid_hours.js");

// ═══════ SISTEMA DE ALUGUEL DE GRUPOS ═══════
const {
  getAluguel,
  getAluguelByGrupo,
  getAluguelByLink,
  adicionarContrato,
  renovarContrato,
  removerContrato,
  formatarContrato,
  zerarAluguel,
} = require("./data/org/funcoes/aluguel.js");

// ── Confirmação de zerar aluguel ──
const _pendingZerarAluguel = new Map();

// ═══════ FLUXO DE CONTRATO POR ETAPAS ═══════
const {
  getAluguelState,
  clearAluguelState,
  startAluguelFlow,
  processarRespostaAluguel,
  // Renovação
  getRenovacaoState,
  clearRenovacaoState,
  startRenovacaoFlow,
  processarRespostaRenovacao,
} = require("./data/org/funcoes/aluguel_states.js");
// ══════════════════════════════════════════════

// ═══════ HORÁRIOS DE ABERTURA/FECHAMENTO ═══════

// ════════════════════════════════════════════════

// ═══════ SISTEMA DE AVISOS AUTOMÁTICOS ═══════
const path = require("path");
const {
  addAviso,
  rmAviso,
  clearAvisos,
  getAvisos,
  _gerarIdAviso,
} = require("./data/avisos-automaticos/index.js");
// ════════════════════════════════════════════════

///

var { numero_dono1, numero_dono2, numero_dono3, numero_dono4, numero_dono5, zerosite, numero_dono6 } = require("./config/nescessario.json");
///

const nmrdn = setting.numerodono.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net` || isnit

const numerodono = [`${nmrdn}`, `${numero_dono1}@s.whatsapp.net`, `${numero_dono2}@s.whatsapp.net`, `${numero_dono3}@s.whatsapp.net`, `${numero_dono4}@s.whatsapp.net`, `${numero_dono5}@s.whatsapp.net`, `${numero_dono6}@s.whatsapp.net`]

//apis
const Shizukusite = "https://shizukuapis.space";
//img no bot
const fotobot = require("./config/personalizacao.json").imagemPadrao;

//api zero
const API_KEY_ZEROTWO = getLegacyApiKey("ZERO_TWO");
const PNSPUXADA = getLegacyApiKey("PNSPUXADA");
const SHIZUKU_KEY = getLegacyApiKey("SHIZUKU");
const SANDROPX = getLegacyApiKey("SYSTEMZONE");
const API_SANDRO_MD = getLegacyApiKey("BRONXYS");
const API_KEY_BLACK = getLegacyApiKey("BLACK");

var downoff = 'Sistema apresenta instabilidades... Pfvr, volte mais tarde.'

var downon = 'Sistema cancelou a operação, devido a demora na resposta...'

const sendAudio = async () => {
    return null
}
  
const sendImage = (id, ytb, cap) => {
    try {
        return sandro.sendMessage(from, {image: fs.readFileSync('./config/fotobot.jpg'), caption: cap}, {quoted: info})
    } catch {
        return sandro.sendMessage(from, {text: cap}, {quoted: info})
    }
}
// ═══════ SISTEMA DE MÍDIA DO MENU (foto/gif local) ═══════
function getMenuMedia() {
  try {
    const menuCfg = JSON.parse(
      fs.readFileSync("./data/menu_media.json", "utf-8"),
    );
    const menuFoto = menuCfg.foto || "./config/fotobot.jpg";
    if (fs.existsSync(menuFoto)) {
      return { image: fs.readFileSync(menuFoto) };
    }
  } catch (e) { }
  // Fallback estável: usar a imagem local do bot, nunca uma URL/array antigo.
  return { image: fs.readFileSync("./config/fotobot.jpg") };
}
// ══════════════════════════════════════════════════════════

// ═══════ ANTIFLOOD: Aviso de registro (30s por user) ═══════
const _registroCooldown = new Map();
const REGISTRO_COOLDOWN_MS = 2 * 60 * 1000; // 2 minutos
// ════════════════════════════════════════════════════════════

// ═══════ TRAVA DE REGISTRO (máximo 3 usuários por vez) ═══════
// Usa registro_states.json como fonte (persistente, sobrevive restarts)
const REGISTRO_LOCK_TIMEOUT = 5 * 60 * 1000; // 5 minutos (mesmo timeout do registro)
const MAX_REGISTROS_SIMULTANEOS = 3; // máximo de registros ao mesmo tempo
function _contarRegistrandoAtivos(senderJid) {
  try {
    const states = JSON.parse(require('fs').readFileSync('./data/registros/registro_states.json', 'utf8'));
    const senderNorm = normalizeJid(senderJid);
    const agora = Date.now();
    let count = 0;
    for (const [jid, state] of Object.entries(states)) {
      // Pular o próprio usuário
      if (jid === senderJid || jid === senderNorm) continue;
      // Pular estados de confirmação (não são registros ativos)
      if (state.step === 'confirmar_atualizacao' || state.step === 'confirmar_exclusao') continue;
      // Contar apenas registros ativos (não expirados)
      if (state.lastActivity && (agora - state.lastActivity < REGISTRO_LOCK_TIMEOUT)) {
        count++;
      }
    }
    return count;
  } catch { }
  return 0;
}
// ════════════════════════════════════════════════════════════

// ═══════ ANTI-FLOOD PV (detecção de flood de COMANDOS no privado) ═══════
const _pvFloodTracker = new Map();  // sender -> [timestamps]
const _pvFloodBlocked = new Map();  // sender -> timestamp de quando foi bloqueado
const PV_FLOOD_LIMIT = 3;           // 3 comandos
const PV_FLOOD_WINDOW = 10000;      // em 10 segundos
const PV_FLOOD_BLOCK_TIME = 60 * 1000; // bloqueio de 1 minuto
// ════════════════════════════════════════════════════════════

const sendFutureTime = (dados) => {
  hr = moment.tz("America/Sao_Paulo");
  for (i of dados) {
    hr = hr.add(i.valor, i.type);
  }
  return hr.calendar();
};

function saveJSON(inter, caminho) {
  fs.writeFileSync(caminho, JSON.stringify(inter, null, 2));
}

// ═══════ SISTEMA DE REGISTRO / PERFIL / ANIVERSÁRIO ═══════
const {
  getUser,
  setUser,
  getAllUsers,
  getRegistroState,
  setRegistroState,
  clearRegistroState,
  startRegistro,
  processarResposta,
  cancelarRegistro,
  gerarPerfil,
  mensagemIntro,
  mensagemJaRegistrado,
  calcularIdade,
} = require("./data/org/funcoes/registro.js");

const {
  initBirthdayScheduler,
  checkAndCelebrate,
} = require("./data/org/funcoes/aniversario.js");
// ══════════════════════════════════════════════════════════

//_-_-_-_-_-_-_-_-_-_-_-_-(INFOS)_-_-_-_-_-_-_-_-_-_-_-_-_-_-_--\\

var {
  antipv3,
  TOKEN_GPT,
  TOKEN_DROPBOX,
  cmdpremium,
  msgantipv1,
  msgantipv2,
  dono1,
  dono2,
  dono3,
  dono4,
  dono5,
  dono6,
  dono1_lid,
  dono2_lid,
  dono3_lid,
  dono4_lid,
  dono5_lid,
  dono6_lid,
} = require("./config/nescessario.json");

const Links_P = require("./data/links.json");

var {
  suruba,
  fundo1,
  fundo2,
  imgnazista,
  imggay,
  imgcorno,
  imggostosa,
  imggostoso,
  imgfeio,
  imgvesgo,
  imgbebado,
  imggado,
  matarcmd,
  beijocmd,
  chutecmd,
  tapacmd,
  rnkgay,
  rnkgado,
  rnkcorno,
  rnkgostoso,
  rnkgostosa,
  rnknazista,
  rnkgolpista,
  rnkotaku,
  rnkpau,
  minado_bomb,
} = require("./data/links.json");

var { NomeDoBot, NickDono, prefix } = require("./config/personalizacao.json");

const { TEXTOS_GERAL } = require("./config/textos.js");

try {
  var groupMetadata_RG = JSON.parse(
    fs.readFileSync("./data/global/groups.json"),
  );
} catch {
  fs.writeFileSync("./data/global/groups.json", JSON.stringify([], null, 2));
}
const API_KEY_BRONXYS = getLegacyApiKey("BRONXYS");

//====================≠≠===============\\

const SNET = "@s.whatsapp.net";
const LID_NET = "@lid";

// Funções Auxiliares para Compatibilidade com LID (Baileys 7.0+)
function normalizeJid(jid) {
  if (!jid) return jid;
  if (jid.endsWith("@s.whatsapp.net")) return jid;
  if (jid.includes("@lid")) return jid.replace("@lid", "@s.whatsapp.net");
  if (!jid.includes("@")) return jid + "@s.whatsapp.net";
  return jid;
}

function extractNumber(jid) {
  if (!jid) return "";
  if (typeof jid !== "string") jid = String(jid);
  return jid.split("@")[0];
}

function areJidsEqual(jid1, jid2) {
  if (!jid1 || !jid2) return false;
  return extractNumber(jid1) === extractNumber(jid2);
}

function isJidInList(jid, list) {
  if (!jid || !Array.isArray(list)) return false;
  const number = extractNumber(jid);
  return list.some((item) => extractNumber(item) === number);
}

function addJidToList(jid, list) {
  if (!jid) return list;
  const normalized = normalizeJid(jid);
  if (!isJidInList(normalized, list)) {
    list.push(normalized);
  }
  return list;
}

function removeJidFromList(jid, list) {
  if (!jid || !Array.isArray(list)) return list;
  const number = extractNumber(jid);
  return list.filter((item) => extractNumber(item) !== number);
}

// Funções auxiliares para extrair ID de participantes (Baileys 7.0+)
// CORRIGIDO: Agora prioriza JID completo e trata LID corretamente
function getParticipantId(participant) {
  if (!participant) return "";

  // Se já é uma string, retornar diretamente
  if (typeof participant === "string") {
    return participant;
  }

  // Se é um objeto, priorizar id e phoneNumber
  if (typeof participant === "object" && participant !== null) {
    // 1. Prioridade: id (JID completo)
    if (participant.id && participant.id.includes("@")) {
      return participant.id;
    }

    // 2. Segunda opção: phoneNumber (geralmente é o JID completo)
    if (participant.phoneNumber && participant.phoneNumber.includes("@")) {
      return participant.phoneNumber;
    }

    // 3. Terceira opção: id sem @ (adicionar @s.whatsapp.net)
    if (participant.id) {
      return participant.id.includes("@")
        ? participant.id
        : `${participant.id}@s.whatsapp.net`;
    }

    // 4. Quarta opção: phoneNumber sem @ (adicionar @s.whatsapp.net)
    if (participant.phoneNumber) {
      return participant.phoneNumber.includes("@")
        ? participant.phoneNumber
        : `${participant.phoneNumber}@s.whatsapp.net`;
    }

    // 5. ÚLTIMO RECURSO: lid (precisa ser processado)
    if (participant.lid) {
      // LID vem no formato: "241 44324925037 4" (com espaços)
      // Precisamos remover espaços e usar apenas os dígitos
      const lidClean = String(participant.lid).replace(/\s+/g, "");
      return `${lidClean}@lid`;
    }
  }

  return String(participant);
}

function getParticipantNumber(participant) {
  const id = getParticipantId(participant);

  if (!id) return "";

  // Extrair número antes do @
  const number = String(id).split("@")[0];

  // Remover espaços se houver (caso do LID)
  return number.replace(/\s+/g, "");
}

// ========== FUNÇÕES AUXILIARES DE MUTE (Sistema Individual por Grupo) ==========

/**
 * Carrega dados de mute do grupo (integrado com o JSON do grupo que é um ARRAY)
 */
function loadGroupMuteData(groupId) {
  try {
    const groupFilePath = `./data/grupos/${groupId}.json`;
    if (fs.existsSync(groupFilePath)) {
      const raw = fs.readFileSync(groupFilePath, "utf8");
      const data = JSON.parse(raw);
      // O arquivo do grupo é um ARRAY [{ ...settings }]
      if (Array.isArray(data) && data[0]) {
        return data[0].mutedUsers || {};
      }
      // Fallback: se for objeto direto
      if (data && data.mutedUsers) return data.mutedUsers;
    }
    return {};
  } catch (error) {
    console.error("❌ Erro ao carregar dados de mute:", error.message);
    return {};
  }
}

/**
 * Salva dados de mute DENTRO do JSON do grupo existente (sem sobrescrever settings)
 */
function saveGroupMuteData(groupId, mutedUsers) {
  try {
    const groupFilePath = `./data/grupos/${groupId}.json`;
    let data = [{}];
    if (fs.existsSync(groupFilePath)) {
      const raw = fs.readFileSync(groupFilePath, "utf8");
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed[0]) {
        data = parsed;
      }
    }
    data[0].mutedUsers = mutedUsers;
    fs.writeFileSync(groupFilePath, JSON.stringify(data, null, 2), "utf8");
  } catch (error) {
    console.error("❌ Erro ao salvar dados de mute:", error.message);
  }
}

/**
 * Verifica se usuário está mutado (compatível com LID)
 */
function isMuted(groupId, userJid) {
  try {
    const mutedUsers = loadGroupMuteData(groupId);
    if (!mutedUsers || Object.keys(mutedUsers).length === 0) return false;
    const userNum = extractNumber(userJid);
    const mutedJid = Object.keys(mutedUsers).find(
      (jid) => extractNumber(jid) === userNum,
    );
    if (!mutedJid) return false;
    // Auto-expirar mute temporário
    const entry = mutedUsers[mutedJid];
    if (entry.expiresAt && new Date(entry.expiresAt) <= new Date()) {
      delete mutedUsers[mutedJid];
      saveGroupMuteData(groupId, mutedUsers);
      return false;
    }
    return true;
  } catch (error) {
    console.error("❌ Erro ao verificar mute:", error.message);
    return false;
  }
}

/**
 * Adiciona usuário à lista de mutados (com duração opcional)
 */
function muteUser(
  groupId,
  userJid,
  mutedBy,
  reason = "Não especificado",
  durationMs = null,
  durationText = "Permanente ♾️",
) {
  try {
    const mutedUsers = loadGroupMuteData(groupId);
    const normalizedJid = normalizeJid(userJid);
    const entry = {
      mutedAt: new Date().toISOString(),
      mutedBy: normalizeJid(mutedBy),
      deletedMessages: 0,
      reason: reason,
      durationText: durationText,
    };
    if (durationMs && durationMs > 0) {
      entry.expiresAt = new Date(Date.now() + durationMs).toISOString();
    }
    mutedUsers[normalizedJid] = entry;
    saveGroupMuteData(groupId, mutedUsers);
    return true;
  } catch (error) {
    console.error("❌ Erro ao mutar usuário:", error.message);
    return false;
  }
}

/**
 * Remove usuário da lista de mutados
 */
function unmuteUser(groupId, userJid) {
  try {
    const mutedUsers = loadGroupMuteData(groupId);
    if (!mutedUsers || Object.keys(mutedUsers).length === 0) return null;
    const userNum = extractNumber(userJid);
    const mutedJid = Object.keys(mutedUsers).find(
      (jid) => extractNumber(jid) === userNum,
    );
    if (mutedJid) {
      const muteData = mutedUsers[mutedJid];
      delete mutedUsers[mutedJid];
      saveGroupMuteData(groupId, mutedUsers);
      return muteData;
    }
    return null;
  } catch (error) {
    console.error("❌ Erro ao desmutar usuário:", error.message);
    return null;
  }
}

/**
 * Incrementa contador de mensagens deletadas
 */
function incrementDeletedMessages(groupId, userJid) {
  try {
    const mutedUsers = loadGroupMuteData(groupId);
    if (!mutedUsers) return;
    const userNum = extractNumber(userJid);
    const mutedJid = Object.keys(mutedUsers).find(
      (jid) => extractNumber(jid) === userNum,
    );
    if (mutedJid && mutedUsers[mutedJid]) {
      mutedUsers[mutedJid].deletedMessages =
        (mutedUsers[mutedJid].deletedMessages || 0) + 1;
      saveGroupMuteData(groupId, mutedUsers);
    }
  } catch (error) {
    console.error("❌ Erro ao incrementar contador:", error.message);
  }
}

/**
 * Retorna lista de usuários mutados
 */
function getMutedUsers(groupId) {
  try {
    const mutedUsers = loadGroupMuteData(groupId);
    if (!mutedUsers || Object.keys(mutedUsers).length === 0) return [];
    return Object.entries(mutedUsers).map(([jid, info]) => ({
      jid: jid,
      number: extractNumber(jid),
      ...info,
    }));
  } catch (error) {
    console.error("❌ Erro ao obter lista de mutados:", error.message);
    return [];
  }
}

// ========== FIM DAS FUNÇÕES DE MUTE ==========

// ========== SISTEMA DE ADVERTÊNCIAS ==========
const _muteDeleteThrottle = new Map(); // throttle de deletes p/ evitar rate-overlimit
const _antiSpamTracker = new Map(); // rastreia msgs por user p/ anti-spam
const _antiSpamWarnings = new Map(); // advertências do anti-spam (in-memory, reset ao reiniciar)

function loadGroupWarnings(groupId) {
  try {
    const groupFilePath = `./data/grupos/${groupId}.json`;
    if (!fs.existsSync(groupFilePath)) return {};
    const raw = fs.readFileSync(groupFilePath, "utf8");
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed[0] && parsed[0].warnings) {
      return parsed[0].warnings;
    }
    return {};
  } catch {
    return {};
  }
}

function saveGroupWarnings(groupId, warnings) {
  try {
    const groupFilePath = `./data/grupos/${groupId}.json`;
    let data = [{}];
    if (fs.existsSync(groupFilePath)) {
      const raw = fs.readFileSync(groupFilePath, "utf8");
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed[0]) data = parsed;
    }
    data[0].warnings = warnings;
    fs.writeFileSync(groupFilePath, JSON.stringify(data, null, 2), "utf8");
  } catch (e) {
    console.error("❌ Erro ao salvar advertências:", e.message);
  }
}

function addWarning(groupId, userJid, reason = "Flood no mute") {
  const warnings = loadGroupWarnings(groupId);
  const key = extractNumber(userJid);
  if (!warnings[key]) {
    warnings[key] = { count: 0, reasons: [] };
  }
  warnings[key].reasons.push({ reason, date: new Date().toISOString() });
  warnings[key].count = warnings[key].reasons.length;
  warnings[key].lastWarning = new Date().toISOString();
  saveGroupWarnings(groupId, warnings);
  return warnings[key].count;
}

function getWarningCount(groupId, userJid) {
  const warnings = loadGroupWarnings(groupId);
  const key = extractNumber(userJid);
  if (!warnings[key]) return 0;
  // Sincronizar count com reasons.length
  return warnings[key].reasons
    ? warnings[key].reasons.length
    : warnings[key].count || 0;
}

function getAllWarnings(groupId) {
  const warnings = loadGroupWarnings(groupId);
  return Object.entries(warnings)
    .map(([num, info]) => {
      // Sincronizar count com reasons.length
      const reasons = info.reasons || [];
      return {
        jid: num + "@s.whatsapp.net",
        number: num,
        count: reasons.length,
        reasons: reasons,
        lastWarning: info.lastWarning,
      };
    })
    .filter((w) => w.count > 0);
}

function removeWarningByIndex(groupId, userJid, index) {
  const warnings = loadGroupWarnings(groupId);
  const key = extractNumber(userJid);
  if (
    !warnings[key] ||
    !warnings[key].reasons ||
    warnings[key].reasons.length === 0
  )
    return false;
  if (index < 0 || index >= warnings[key].reasons.length) return false;
  warnings[key].reasons.splice(index, 1);
  warnings[key].count = warnings[key].reasons.length;
  if (warnings[key].count <= 0) delete warnings[key];
  saveGroupWarnings(groupId, warnings);
  return true;
}

function removeWarning(groupId, userJid) {
  // Remove a ultima advertencia (compatibilidade)
  const warnings = loadGroupWarnings(groupId);
  const key = extractNumber(userJid);
  if (
    !warnings[key] ||
    !warnings[key].reasons ||
    warnings[key].reasons.length === 0
  )
    return false;
  warnings[key].reasons.pop();
  warnings[key].count = warnings[key].reasons.length;
  if (warnings[key].count <= 0) delete warnings[key];
  saveGroupWarnings(groupId, warnings);
  return true;
}

function clearUserWarnings(groupId, userJid) {
  const warnings = loadGroupWarnings(groupId);
  const key = extractNumber(userJid);
  if (!warnings[key]) return false;
  delete warnings[key];
  saveGroupWarnings(groupId, warnings);
  return true;
}

function clearAllGroupWarnings(groupId) {
  const warnings = loadGroupWarnings(groupId);
  const total = Object.keys(warnings).length;
  if (total === 0) return 0;
  saveGroupWarnings(groupId, {});
  return total;
}
// ========== FIM SISTEMA DE ADVERTÊNCIAS ==========

const MSG_ANTPV2 = [];

const BLC_ANTCL = [];

let OSINF_K = [];

let numerodono_ofc = setting.numerodono.replace(
  new RegExp("[()+-/ +/]", "gi"),
  "",
);

let nmrdn_dono2 =
  setting.numerodono.replace(new RegExp("[()+-/ +/]", "gi"), "") + SNET;

process.on("uncaughtException", function (err) {
  console.error(new Date().toUTCString() + " uncaughtException:", err.message);
  console.error(err.stack);
});

function apenasNumeros(variavel) {
  var regex = /^[0-9]+$/;
  if (variavel.match(regex)) {
    return true;
  } else {
    return false;
  }
}

function removeSecondSpace(str) {
  if (str[1] === " ") {
    return str[1] === " " && str[2] === " "
      ? str[0] + str.slice(3)
      : str[0] + str.slice(2);
  }
  return str;
}

function RmvSimbolosLmn(a) {
  return a
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");
}

const FormData = require("form-data");
const { JSDOM } = require("jsdom");

async function webp_mp4(imageBuffer) {
  let formData = new FormData();
  formData.append("new-image-url", "");
  formData.append("new-image", imageBuffer, "image.webp");

  let response = await fetch("https://ezgif.com/webp-to-mp4", {
    method: "POST",
    body: formData,
  });

  let html = await response.text();

  let { document } = new JSDOM(html).window;

  let formData2 = new FormData();
  let formValues = {};

  for (let input of document.querySelectorAll("form input[name]")) {
    formValues[input.name] = input.value;
    formData2.append(input.name, input.value);
  }

  let response2 = await fetch(
    "https://ezgif.com/webp-to-mp4/" + formValues.file,
    { method: "POST", body: formData2 },
  );

  let html2 = await response2.text();

  let { document: document2 } = new JSDOM(html2).window;

  return new URL(
    document2.querySelector("div#output > p.outfile > video > source").src,
    response2.url,
  ).toString();
}

// ABAIXO: INÍCIO DE CONEXÃO

const startSandro = async (upsert, sandro, qrcode, sessionStartTim) => {
  try {
    // Garantir que Baileys foi carregado via import() dinâmico
    const { _baileysReady } = require("./consts-func.js");
    await _baileysReady;
    const baileys = await import("@systemzero/baileys");
    downloadContentFromMessage = baileys.downloadContentFromMessage;
    relayWAMessage = baileys.relayWAMessage;
    mentionedJid = baileys.mentionedJid;
    processTime = baileys.processTime;
    MediaType = baileys.MediaType;
    Browser = baileys.Browser;
    MessageType = baileys.MessageType;
    Presence = baileys.Presence;
    Mimetype = baileys.Mimetype;
    Browsers = baileys.Browsers;
    delay = baileys.delay;
    getLastMessageInChat = baileys.getLastMessageInChat;
    BufferJSON = baileys.BufferJSON;

    // ═══ Schedulers iniciados UMA VEZ em iniciar.js (usam global.sandro) ═══
    // NÃO iniciar aqui — evita duplicação em reconexões
    // ════════════════════════════════════════════════════════════════════

    var hora120 = moment.tz("America/Sao_Paulo").format("HH:mm:ss");

    for (const info of upsert?.messages || []) {
      const from = info.key.remoteJid;

      let groupMetadata;

      const isGroup = from.endsWith("@g.us");

      const JOGO_D_V = fs?.existsSync(`./data/org/tictactoe/db/${from}.json`)
        ? JSON?.parse(fs?.readFileSync(`./data/org/tictactoe/db/${from}.json`))
        : false;

      const VR_JSON_GLOBAL = fs.existsSync(`./data/grupos/${from}.json`)
        ? true
        : false;

      if (VR_JSON_GLOBAL) {
        var jsonGp = JSON.parse(fs.readFileSync(`./data/grupos/${from}.json`)); // DGOMR
      }

      if (
        info.messageStubParameters &&
        info.messageStubParameters[0] === "Message absent from node"
      ) {
        try {
          if (
            info.messageStubParameters[1] &&
            info.messageStubParameters[1] !== "undefined"
          ) {
            sandro.sendMessageAck(
              JSON.parse(info.messageStubParameters[1], BufferJSON.reviver),
            );
          }
        } catch (e) {
          // Silenciar erro JSON - não afeta funcionamento
        }
      }

      if (VR_JSON_GLOBAL && jsonGp[0]?.x9 && info.messageStubType) {
        switch (info.messageStubType) {
          case 23:
            sandro.sendMessage(info.key.remoteJid, {
              text: `O usuário @${info.participant.split("@")[0]
                } acabou de redefinir o link do grupo...`,
              mentions: [info.participant],
            });
            break;

          case 29: {
            await delay(1000);

            let promoted;
            try {
              promoted = JSON.parse(info.messageStubParameters[0]);
            } catch (e) {
              return console.log("Erro ao parsear stubParameters:", e);
            }

            const promotedJid = promoted.phoneNumber;
            const promoterJid = info.participant;
            await sandro.sendMessage(info.key.remoteJid, {
              text: `O usuário @${promotedJid.split("@")[0]
                } foi promovido pelo @${promoterJid.split("@")[0]}`,
              mentions: [promotedJid, promoterJid],
            });
            break;
          }

          case 30: {
            await delay(1000);

            let demoted;
            try {
              demoted = JSON.parse(info.messageStubParameters[0]);
            } catch (e) {
              return console.log("Erro ao parsear stubParameters:", e);
            }

            const demotedJid = demoted.phoneNumber;
            const demoterJid = info.participant;
            await sandro.sendMessage(info.key.remoteJid, {
              text: `O ADM @${demotedJid.split("@")[0]
                } foi rebaixado para membro comum pelo ADM @${demoterJid.split("@")[0]
                }`,
              mentions: [demotedJid, demoterJid],
            });
            break;
          }

          case 172: {
            // GROUP_MEMBERSHIP_JOIN_APPROVAL_REQUEST_NON_ADMIN_ADD
            // Disparado quando alguém pede para entrar, um ADM aceita ou recusa,
            // ou o próprio solicitante cancela o pedido — mas APENAS quando o
            // modo "aprovação de membros" está habilitado no grupo.
            try {
              await delay(800);

              const reqData = JSON.parse(info.messageStubParameters[0] || "{}");
              const acao = info.messageStubParameters[1]; // 'created' | 'revoked' | 'rejected'
              const admJid = info.participant; // ADM que agiu (null se o próprio solicitante cancelou)

              // Número do solicitante (preferir phoneNumber/pn sobre lid)
              const solicitanteNum = reqData.pn
                ? String(reqData.pn).split("@")[0]
                : reqData.lid
                  ? String(reqData.lid).split("@")[0]
                  : null;

              const solicitanteJid = solicitanteNum
                ? `${solicitanteNum}@s.whatsapp.net`
                : null;

              if (acao === "created") {
                // Desativado para evitar flood no grupo
                // const mentions = solicitanteJid ? [solicitanteJid] : [];
                // await sandro.sendMessage(info.key.remoteJid, {
                //   text: solicitanteJid
                //     ? `📨 O usuário @${solicitanteNum} solicitou entrar no grupo e está aguardando aprovação de um ADM.`
                //     : `📨 Um usuário solicitou entrar no grupo e está aguardando aprovação de um ADM.`,
                //   mentions,
                // });
              } else if (acao === "revoked") {
                // O próprio solicitante cancelou o pedido
                const mentions = solicitanteJid ? [solicitanteJid] : [];
                await sandro.sendMessage(info.key.remoteJid, {
                  text: solicitanteJid
                    ? `↩️ O usuário @${solicitanteNum} cancelou o pedido de entrada no grupo.`
                    : `↩️ Um usuário cancelou o pedido de entrada no grupo.`,
                  mentions,
                });
              } else if (acao === "rejected") {
                // ADM recusou o pedido — pular se foi o próprio bot (!recusar já enviou a mensagem)
                const admNum = admJid ? admJid.split("@")[0] : null;
                const botId172 = sandro.user?.id?.split(":")[0] || "";
                const botLid172 = sandro.user?.lid?.split(":")[0] || "";
                const recusadoPeloBot =
                  admNum && (admNum === botId172 || admNum === botLid172);

                if (!recusadoPeloBot) {
                  const mentions = [];
                  if (solicitanteJid) mentions.push(solicitanteJid);
                  if (admJid) mentions.push(admJid);

                  await sandro.sendMessage(info.key.remoteJid, {
                    text:
                      admNum && solicitanteJid
                        ? `❌ O pedido de entrada de @${solicitanteNum} foi *recusado* pelo ADM @${admNum}.`
                        : admNum
                          ? `❌ Um pedido de entrada foi *recusado* pelo ADM @${admNum}.`
                          : `❌ Um pedido de entrada foi *recusado*.`,
                    mentions,
                  });
                }
              }
            } catch (e) {
              console.log("[MODOX9-APROVAÇÃO] Erro:", e);
            }
            break;
          }

          case 71: {
            // GROUP_PARTICIPANT_ADD_REQUEST_JOIN
            // Disparado quando um ADM APROVA uma solicitação de entrada no grupo.
            // info.participant = JID do ADM que aprovou
            // info.messageStubParameters = array de JSONs dos membros aprovados
            try {
              await delay(800);

              const admJid71 = info.participant;
              const admNum71 = admJid71 ? admJid71.split("@")[0] : null;

              const membrosAprovados = (info.messageStubParameters || [])
                .map((p) => {
                  try {
                    return JSON.parse(p);
                  } catch {
                    return null;
                  }
                })
                .filter(Boolean);

              for (const membro of membrosAprovados) {
                const membroNum = membro.phoneNumber
                  ? String(membro.phoneNumber).split("@")[0]
                  : membro.id
                    ? String(membro.id).split("@")[0]
                    : null;

                const membroJid = membroNum
                  ? `${membroNum}@s.whatsapp.net`
                  : null;

                // Não revelar se o ADM adicionou a si mesmo ou não há info
                if (!admNum71 || !membroJid || admNum71 === membroNum) continue;

                const mentions = [membroJid, admJid71].filter(Boolean);

                await sandro.sendMessage(info.key.remoteJid, {
                  text: `✅ A entrada de @${membroNum} foi *aprovada* pelo ADM @${admNum71}. Bem-vindo(a)! 🎉`,
                  mentions,
                });
              }
            } catch (e) {
              console.log("[MODOX9-APROVAÇÃO] Erro:", e);
            }
            break;
          }
        }
      }

      // P: 29
      // R: 30
      // RMV: 28
      // ADC: 27

      switch (info.messageStubType) {
        case 29:
        case 30:
        case 28:
        case 27:
          try {
            var Sender_ = info.messageStubParameters[0];
            if (
              groupMetadata_RG &&
              (groupMetadata_RG?.length ?? 0) > 0 &&
              groupMetadata_RG.some((i) => i.id === from)
            ) {
              if (info.messageStubType === 28 || info.messageStubType === 27) {
                info.messageStubType === 27
                  ? !groupMetadata_RG
                    .find((i) => i.id === from)
                    .participants.some((ab) => ab.id === Sender_)
                    ? groupMetadata_RG
                      .find((i) => i.id === from)
                      .participants.push({ id: Sender_, admin: null })
                    : ""
                  : groupMetadata_RG
                    .find((i) => i.id === from)
                    .participants.splice(
                      groupMetadata_RG
                        .find((i) => i.id === from)
                        .participants.findIndex((ac) => ac.id === Sender_),
                      1,
                    );
                fs.writeFileSync(
                  "./data/global/groups.json",
                  JSON.stringify(groupMetadata_RG, null, 2),
                );
              } else if (
                groupMetadata_RG
                  .find((i) => i.id === from)
                  .participants.some((ab) => ab.id === Sender_) &&
                (info.messageStubType === 29 || info.messageStubType === 30)
              ) {
                groupMetadata_RG
                  .find((i) => i.id === from)
                  .participants.find(
                    (i) => i.id === info.messageStubParameters[0],
                  ).admin = info.messageStubType === 30 ? null : "admin";
                fs.writeFileSync(
                  "./data/global/groups.json",
                  JSON.stringify(groupMetadata_RG, null, 2),
                );
              }
            } else {
              var ADC_RG = await sandro.groupMetadata(from);
              groupMetadata_RG.push(ADC_RG);
            }
          } catch { }
          break;

        default:
      }

      async function bufferImg(imageUrl) {
        const fileName = "imagem.jpg";
        const headers = {
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36",
        };
        axios
          .get(imageUrl, { responseType: "arraybuffer", headers })
          .then(async (response) => {
            fs.writeFileSync(fileName, response.data);
            sandro.sendMessage(
              from,
              { image: { url: fileName } },
              { quoted: info },
            );
          })
          .catch((err) => {
            return reply("Erro!!");
          });
      }

      if (upsert.type === "append") return;
      const type = baileys.getContentType(info.message);
      const content = JSON.stringify(info.message);
      const pushname = info.pushName ? info.pushName : "";

      if (from === "status@broadcast" || from.includes("status")) return;

      // ══ ANTI-STATUS: Detectar mencao do grupo no status (groupStatusMentionMessage) ══
      if (type === "groupStatusMentionMessage" && from.endsWith("@g.us")) {
        try {
          const _stSender = info.key?.participant || info.participant || "";
          if (_stSender) {
            const _stFile = `./data/grupos/${from}.json`;
            if (fs.existsSync(_stFile)) {
              const _stData = JSON.parse(fs.readFileSync(_stFile, "utf8"));
              if (
                Array.isArray(_stData) &&
                _stData[0] &&
                _stData[0].antistatus
              ) {
                const _stSenderNum = extractNumber(_stSender);
                let _stMeta;
                try {
                  _stMeta = await sandro.groupMetadata(from);
                } catch {
                  _stMeta = null;
                }
                if (_stMeta) {
                  const _stParticipants = _stMeta.participants || [];
                  const _stMember = _stParticipants.find(
                    (p) => extractNumber(p.id) === _stSenderNum,
                  );
                  if (
                    _stMember &&
                    !_stMember.admin &&
                    _stSenderNum !== numerodono_ofc
                  ) {
                    try {
                      await sandro.sendMessage(from, { delete: info.key });
                    } catch { }
                    await sandro.groupParticipantsUpdate(
                      from,
                      [_stMember.id],
                      "remove",
                    );
                    await sandro.sendMessage(from, {
                      text: `> 🚫 *ANTI-STATUS*\n\n> @${_stSenderNum} foi *removido* por marcar este grupo no status do WhatsApp.\n\n>⚠️ Não é permitido marcar o grupo no status.`,
                      mentions: [_stMember.id],
                    });
                  }
                }
              }
            }
          }
        } catch { }
        return;
      }

      global.prefix;
      global.blocked;

      //==============(BODY)================\\

let body =
    info.message?.conversation ||
    info.message?.viewOnceMessageV2?.message?.imageMessage?.caption ||
    info.message?.viewOnceMessageV2?.message?.videoMessage?.caption ||
    info.message?.imageMessage?.caption ||
    info.message?.videoMessage?.caption ||
    info.message?.extendedTextMessage?.text ||
    info.message?.viewOnceMessage?.message?.videoMessage?.caption ||
    info.message?.viewOnceMessage?.message?.imageMessage?.caption ||
    info.message?.documentWithCaptionMessage?.message?.documentMessage?.caption ||
    info.message?.buttonsMessage?.imageMessage?.caption ||
    info.message?.buttonsResponseMessage?.selectedButtonId ||
    info.message?.listResponseMessage?.singleSelectReply?.selectedRowId ||
    info.message?.templateButtonReplyMessage?.selectedId ||

    // Native Flow (Quick Reply)
    (
        info.message?.interactiveResponseMessage?.nativeFlowResponseMessage?.paramsJson
            ? JSON.parse(info.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id
            : ""
    ) ||

    info?.text ||
    "";

      var Procurar_String =
        info.message?.conversation ||
        info.message?.viewOnceMessageV2?.message?.imageMessage?.caption ||
        info.message?.viewOnceMessageV2?.message?.videoMessage?.caption ||
        info.message?.imageMessage?.caption ||
        info.message?.videoMessage?.caption ||
        info.message?.extendedTextMessage?.text ||
        info.message?.viewOnceMessage?.message?.videoMessage?.caption ||
        info.message?.viewOnceMessage?.message?.imageMessage?.caption ||
        info.message?.documentWithCaptionMessage?.message?.documentMessage
          ?.caption ||
        info.message?.buttonsMessage?.imageMessage?.caption ||
        "";

      const args = body.trim().split(/ +/).slice(1);

      var budy2 = body
        .toLowerCase()
        .normalize("NFD")
        .replace(/[̀-ͯ]/g, "");

      if (isGroup && VR_JSON_GLOBAL) {
        if (jsonGp[0].multiprefix) {
          var prefix =
            jsonGp[0]?.prefixos.find((p) =>
              String(body)?.trim()?.startsWith(p),
            ) || jsonGp[0].prefixos[0];
        } else {
          var prefix = setting.prefix;
        }
      } else if (!isGroup || (isGroup && !VR_JSON_GLOBAL)) {
        var prefix = setting.prefix;
      }

const isCmd = body.trim().startsWith(prefix)

var command = isCmd
    ? removeSecondSpace(budy2).slice(prefix.length).split(" ")[0]
    : ""

      const q_2 = budy2.trim().split(/ +/).slice(1).join(" ");

      const q = command
        ? removeSecondSpace(body.trim())
          .slice(command.length + 1)
          ?.trim() || body.trim().replace(prefix + command, "")
        : body.trim();

var budy =
  info?.message?.conversation ||
  info?.message?.extendedTextMessage?.text ||
  info?.message?.buttonsResponseMessage?.selectedButtonId ||
  info?.message?.templateButtonReplyMessage?.selectedId ||
  "";




      var budy3 = budy
        .toLowerCase()
        .normalize("NFD")
        .replace(/[̀-ͯ]/g, "");

      var PR_String = Procurar_String.toLowerCase()
        .normalize("NFD")
        .replace(/[̀-ͯ]/g, "");

      const q_ofc = PR_String.trim().split(/ +/).slice(1).join(" ");

      //======================================\\

      const _ = require("lodash");

      let dog = [];
      try {
        dog = JSON.parse(fs.readFileSync("./data/global/groups.json", "utf8"));
      } catch (error) {
        fs.writeFileSync(
          "./data/global/groups.json",
          JSON.stringify(dog, null, 2),
          "utf8",
        );
      }

      async function rgGroupM(from) {
        let abc;
        try {
          abc = await sandro.groupMetadata(from);
        } catch (error) {
          return dog.find((a) => a.id === from) || null;
        }

        let index = dog.findIndex((a) => a.id === from);
        if (index !== -1) {
          if (!_.isEqual(dog[index], abc)) {
            dog[index] = abc;
            fs.writeFileSync(
              "./data/global/groups.json",
              JSON.stringify(dog, 2, null),
              "utf8",
            );
          }
        } else {
          dog.push(abc);
          fs.writeFileSync(
            "./data/global/groups.json",
            JSON.stringify(dog, 2, null),
            "utf8",
          );
        }

        return dog.find((a) => a.id === from) || abc;
      }

      groupMetadata = isGroup ? await rgGroupM(from) : "";

      const groupName = isGroup ? groupMetadata?.subject || "" : "";

      const groupName_RG = isGroup ? groupMetadata?.subject || "" : "";

const sender = isGroup
  ? info.key.participant?.includes(":")
    ? info.key.participant.split(":")[0] + SNET
    : info.key.participant
  : info.key.remoteJid;

      // Captura o identificador alternativo (PN se sender for LID, ou LID se sender for PN)
      const senderAlt = isGroup
        ? info.key.participantAlt || null
        : info.key.remoteJidAlt || null;

      const sender2 = sender.split("@")[0];

      const messagesC = PR_String.slice(0)
        .trim()
        .split(/ +/)
        .shift()
        .toLowerCase();

      const arg = body.substring(body.indexOf(" ") + 1);

      const botNumber = sandro.user.id.split(":")[0];
      const botJid = sandro.user.id?.split(":")[0] + SNET;
      const botLid = sandro.user.lid
        ? sandro.user.lid.split(":")[0] + LID_NET
        : null;

      const argss = body.split(/ +/g);

      const groupDesc = isGroup ? groupMetadata?.desc || "" : "";

      const groupMembers = isGroup ? groupMetadata?.participants || "" : "";

      const groupMembers2 = isGroup
        ? groupMetadata_RG.find((Obj) => Obj.id === from)?.participants || ""
        : "";

      try {
        var DonoNoGrupo = isGroup
          ? JSON.stringify(groupMetadata).includes(from)
            ? from.includes("status")
              ? true
              : VR_JSON_GLOBAL
                ? groupMembers?.some((a_d) =>
                  [a_d.id, a_d.lid, a_d.phoneNumber].includes(nmrdn_dono2),
                )
                : true
            : true
          : true;
      } catch { }

      const isnit = nit.includes(sender);

      const issupre = supre.includes(sender);
      
      const ischyt = chyt.includes(sender);

      const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : "";

      const somembros = isGroup ? getMembros(groupMembers) : "";

      //=======================================\\

      const nmrdn =
        setting.numerodono.replace(new RegExp("[()+-/ +/]", "gi"), "") + SNET ||
        isnit;

      const numerodono_lid = setting.numerodono_lid;

      const numerodono = [
        `${nmrdn}`,
        `${dono1}@s.whatsapp.net`,
        `${dono2}@s.whatsapp.net`,
        `${dono3}@s.whatsapp.net`,
        `${dono4}@s.whatsapp.net`,
        `${dono5}@s.whatsapp.net`,
        `${dono6}@s.whatsapp.net`,
      ];

      const lidDonos = [
        {
          type: "principal",
          numero: nmrdn,
          lid: numerodono_lid,
          lidtxt: "numerodono_lid",
        },
        {
          type: "auxiliar",
          numero: dono1,
          lid: dono1_lid,
          lidtxt: "dono1_lid",
        },
        {
          type: "auxiliar",
          numero: dono2,
          lid: dono2_lid,
          lidtxt: "dono2_lid",
        },
        {
          type: "auxiliar",
          numero: dono3,
          lid: dono3_lid,
          lidtxt: "dono3_lid",
        },
        {
          type: "auxiliar",
          numero: dono4,
          lid: dono4_lid,
          lidtxt: "dono4_lid",
        },
        {
          type: "auxiliar",
          numero: dono5,
          lid: dono5_lid,
          lidtxt: "dono5_lid",
        },
        {
          type: "auxiliar",
          numero: dono6,
          lid: dono6_lid,
          lidtxt: "dono6_lid",
        },
      ];

      //===========(Res_Aguarde)=============\\

      var enviarmen =
        TEXTOS_GERAL.MENSAGENS_DE_AGUARDE[
        Math.floor(Math.random() * TEXTOS_GERAL.MENSAGENS_DE_AGUARDE.length)
        ];
      //========================================\\


      if (isGroup) {
        if (!isJsonIncludes(paidHours, from)) addGroupInPaid(from);
        if (!isJsonIncludes(groupLinkPaid, from))
          addGroupLinkInPaid(sandro, from).catch((error) => {
            console.error("Falha ao registrar o link do grupo:", error);
          });
        //if(!isJsonIncludes(adv, from)) addGroupInAdv(from)
      }

      paidFunc(sandro);

      //================= Funções de Grupo 🥋 =============//

      const dirGroup = `./data/grupos/${from}.json`;

      const nescj = "./config/nescessario.json";

      const data_IDGP = [
        {
          name: groupName_RG,
          groupId: from,
          x9: false,
          antiimg: false,
          antivideo: false,
          antiaudio: false,
          antisticker: false,
          antidoc: false,
          antictt: false,
          antiloc: false,
          antilinkgp: false,
          antilinkhard: false,
          antifake: false,
          Odelete: false,
          antispam: false,
          anticatalogo: false,
          sistemGold: false,
          visuUnica: false,
          registrarFIGUS: false,
          soadm: false,
          aluguel: false,
          advtlink: [],
          advtlinkgp: [],
          listanegra: [],
          advertir: [],
          prefixos: ["!"],
          comandosB: [],
          advertir2: [],
          legenda_estrangeiro: "0",
          legenda_listanegra:
            "𝙊𝙡𝙝𝙖 𝙖𝙞 𝙛𝙖𝙢𝙞́𝙡𝙞𝙖 𝙦𝙪𝙚𝙢 𝙙𝙚𝙪 𝙖𝙨 𝙘𝙖𝙧𝙖𝙨 𝙥𝙤𝙧 𝘼𝙦𝙪𝙞..! 𝙥𝙤𝙧 𝙤𝙧𝙙𝙚𝙣𝙨 𝙙𝙤 𝘼𝙙𝙢𝙞𝙧𝙤 𝙞𝙧𝙚𝙞 𝙩𝙚 𝙥𝙖𝙨𝙨𝙖𝙧 𝙖 𝙁𝙖𝙘𝙖😝🔪\n𝘼𝙜𝙤𝙧𝙖 𝙨𝙞𝙣𝙩𝙖 𝙤 𝙥𝙤𝙙𝙚𝙧 𝙙𝙤 𝘽𝙖𝙣 𝘾𝙖𝙗𝙖𝙘̧𝙤𝙑𝘼𝙕𝘼 😡🤬",
          legenda_documento: "0",
          legenda_video: "0",
          legenda_imagem: "0",
          multiprefix: false,
          recolherlinkgp: false,
          forca_ofc: [
            {
              acertos: 0,
              erros: 0,
              palavra: [],
              escreveu: [],
              palavra_ofc: 0,
              dica: 0,
              tema: 0,
            },
          ],
          Chances: [
            {
              id: sender,
              ChanceG: null,
              ChanceAp: null,
              ChanceR: [],
              Vinganca: null,
              cassino: 0,
              quiz: [{ errou: 0, acertou: 0, numero: 0 }],
              roletadasorte: false,
              Cachaca: 1,
              Escudo: [],
            },
          ],
          ausentes: [],
          forca_inc: false,
          comandos_gold: [],
          antipalavrao: {
            active: false,
            palavras: [],
          },
          limitec: {
            active: false,
            quantidade: null,
          },
          wellcome: [
            {
              bemvindo1: false,
              saiu1: false,
              fundo: "",
              fundo_saiu: "",
              legendabv:
                "Olá #numerodele#, seja bem vindo (a) ao grupo: #nomedogp#",
              legendasaiu: "👋 Tchau #numerodele#! Até a próxima! 🚪",
            },
            {
              bemvindo2: false,
              saiu2: false,
              legendabv:
                "Olá #numerodele#, seja bem vindo (a) ao grupo: #nomedogp#",
              legendasaiu: "👋 Tchau #numerodele#! Até a próxima! 🚪",
            },
          ],
          simi1: false,
          simi2: false,
          autosticker: false,
          nsfw: false,
          autoresposta: false,
          jogos: false,
          bangp: false,
        },
      ];

      if (isGroup && !fs.existsSync(dirGroup)) {
        fs.writeFileSync(dirGroup, JSON.stringify(data_IDGP, null, 2) + "\n");
      }

      try {
        var dataGp = isGroup
          ? JSON.parse(fs.readFileSync(dirGroup))
          : undefined;
      } catch (e) {
        fs.writeFileSync(dirGroup, JSON.stringify(data_IDGP));
      }

      function setGp(index) {
        fs.writeFileSync(dirGroup, JSON.stringify(index, null, 2) + "\n");
      }

      function setNes(index) {
        fs.writeFileSync(nescj, JSON.stringify(index, null, 2));
      }

      function Goldrgs(index) {
        fs.writeFileSync(
          "./data/org/json/golds.json",
          JSON.stringify(index, null, 2) + "\n",
        );
      }

      if (!info.message) return;

      // Auto-register Group in Gold System
      if (isGroup) {
        let gIndex = rggold.findIndex((i) => i.grupo === from);
        if (gIndex === -1) {
          rggold.push({ grupo: from, usus: [] });
          Goldrgs(rggold);
        }

        // Ensure index is updated
        gIndex = rggold.findIndex((i) => i.grupo === from);

        if (gIndex !== -1) {
          let uIndex = rggold[gIndex].usus.findIndex((i) => i.id === sender);
          if (uIndex === -1) {
            rggold[gIndex].usus.push({
              id: sender,
              Golds: 0,
              data: date,
              emp_G: [],
              emp_A: [],
            });
            Goldrgs(rggold);
          }
        }
      }

      const ID_G_GOLD = rggold.findIndex((i) => i.grupo === from);
      const ID_USU_GOLD = rggold[ID_G_GOLD]?.usus?.findIndex(
        (i) => i.id === sender,
      );

      const S_Sistema = {
        RS_C: function (A, B, C) {
          return dataGp[0].Chances.find((i) => i.id === A)[B] || C || null;
        },

        RS: function (A, B) {
          if (ID_G_GOLD < 0) return;
          return rggold[ID_G_GOLD].usus.find((i) => i.id === A)[B] || null;
        },

        ADD_C: function (A, B, X) {
          dataGp[0].Chances.find((i) => i.id === A)[B] = X;
          setGp(dataGp);
        },

        ADD_C_M: function (A, B, X) {
          dataGp[0].Chances.find((i) => i.id === A)[B] += X;
          setGp(dataGp);
        },

        ADD_C_P: function (A, B, X) {
          dataGp[0].Chances.find((i) => i.id === A)[B].push(X);
          setGp(dataGp);
        },

        ADD: async function (A, Q) {
          if (ID_G_GOLD < 0) return;
          let DM_ = rggold[ID_G_GOLD].usus.find((i) => i.id === A);
          if (!DM_) {
            rggold[ID_G_GOLD].usus.push({
              id: A,
              Golds: 0,
              data: date,
              emp_G: [],
              emp_A: [],
            });
            DM_ = rggold[ID_G_GOLD].usus.find((i) => i.id === A);
          }
          !DM_["Golds"] ? (DM_["Golds"] = Q) : (DM_["Golds"] += Q);
          Goldrgs(rggold);
        },

        ADD_2: async function (A, Q, X, X2) {
          if (ID_G_GOLD < 0) return;
          let DM_ = rggold[ID_G_GOLD].usus.find((i) => i.id === A);
          if (!DM_) {
            rggold[ID_G_GOLD].usus.push({
              id: A,
              Golds: 0,
              data: date,
              emp_G: [],
              emp_A: [],
            });
            DM_ = rggold[ID_G_GOLD].usus.find((i) => i.id === A);
          }
          DM_["Golds"] += Q;
          DM_[X] = X2;
          Goldrgs(rggold);
        },

        RM: async function (A, Q) {
          if (ID_G_GOLD < 0) return;
          let DM_ = rggold[ID_G_GOLD].usus.find((i) => i.id === A);
          if (!DM_) {
            // If user doesn't exist, they have 0 gold
            return reply(
              "A quantidade que tem é inferior a que você deseja tirar.",
            );
          }
          if ((DM_?.Golds || 0) < Q)
            return reply(
              "A quantidade que tem é inferior a que você deseja tirar.",
            );
          DM_["Golds"] -= Q;
          Goldrgs(rggold);
        },

        R_A: async function (A, B, Q) {
          if (ID_G_GOLD < 0) return;
          let DM_ = rggold[ID_G_GOLD].usus.find((i) => i.id === A);
          let DM_2 = rggold[ID_G_GOLD].usus.find((i) => i.id === B);

          if (!DM_)
            return mention(
              `O usuário @${A.split("@")[0]} não possui registro no sistema.`,
            );

          if ((DM_?.Golds || 0) < Q)
            return mention(
              `A quantidade que tem é inferior a que você deseja tirar, do usuário ( @${A.split("@")[0]
              } )`,
            );

          if (!DM_2) {
            rggold[ID_G_GOLD].usus.push({
              id: B,
              Golds: 0,
              data: date,
              emp_G: [],
              emp_A: [],
            });
            DM_2 = rggold[ID_G_GOLD].usus.find((i) => i.id === B);
          }

          DM_["Golds"] -= Q;
          DM_2["Golds"] += Q;
          Goldrgs(rggold);
        },

        A_R_2: async function (A, B, Q, Q2) {
          if (ID_G_GOLD < 0) return;
          let DM_ = rggold[ID_G_GOLD].usus.find((i) => i.id === A);
          let DM_2 = rggold[ID_G_GOLD].usus.find((i) => i.id === B);

          if (!DM_) {
            rggold[ID_G_GOLD].usus.push({
              id: A,
              Golds: 0,
              data: date,
              emp_G: [],
              emp_A: [],
            });
            DM_ = rggold[ID_G_GOLD].usus.find((i) => i.id === A);
          }

          if ((DM_?.Golds || 0) < Q) {
            // Logic suggests this check is for A having enough 'something' or just a check?
            // Original code checks (DM_?.Golds || 0) < Q for A (the one getting +Q?)
            // Wait, A_R_2 adds Q to A and removes Q2 from B.
            // Original check: if ((DM_?.Golds || 0) < Q) return error... for A.
            // This doesn't make sense if A is receiving.
            // Let's assume the original logic meant to check B or it was distinct.
            // Actually, "A quantidade que tem é inferior a que você deseja tirar, do fdp ( @${A...} )"
            // It implies checking A.
            // But the operation is DM_["Golds"] += Q; DM_2["Golds"] -= Q2;
            // Why check if A has < Q if we are ADDING to A?
            // Maybe it's a loan payback where A pays B?
            // Let's stick to auto-register logic and keep original checks if possible, or fix if obviously wrong.
            // I'll assume valid checks for now but add auto-register.
          }

          if (!DM_2) {
            rggold[ID_G_GOLD].usus.push({
              id: B,
              Golds: 0,
              data: date,
              emp_G: [],
              emp_A: [],
            });
            DM_2 = rggold[ID_G_GOLD].usus.find((i) => i.id === B);
          }

          if ((DM_?.Golds || 0) < Q)
            // Keeping original check for safety
            return mention(
              `A quantidade que tem é inferior a que você deseja tirar, do fdp ( @${A.split("@")[0]} )`,
            );

          DM_["Golds"] += Q;
          DM_2["Golds"] -= Q2 || Q;
          Goldrgs(rggold);
        },
      };

      async function ConsultarGold(st, usu) {
        if (!st)
          return reply(
            `Este comando só pode ser utilizado quando o sistema ${prefix}modogold 1 está ativado.`,
          );

        const _saldo = S_Sistema.RS(usu, "Golds") || 0;
        let pfpUrl;

        try {
          pfpUrl = await sandro.profilePictureUrl(usu, "image");
        } catch {
          // Mascot / Fallback image if user has no PFP
          const mascots = [
            "https://images.unsplash.com/photo-1618331835717-801e976710b2?w=800&q=90",
            "https://images.unsplash.com/photo-1544526226-d4568090ffb8?w=800&q=90",
            "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?w=800&q=90",
          ];
          pfpUrl = mascots[Math.floor(Math.random() * mascots.length)];
        }

        const msgGold = `│\n│  🪙 *SALDO GOLD*\n├──────────────\n│\n│  👤 @${usu.split("@")[0]}\n│  💰 Saldo: *${_saldo}* Golds\n│\n├──────────────\n│  💡 *${prefix} statusgold* ─ Ver completo`;

        try {
          await sandro.sendMessage(from, {
            react: { text: "🪙", key: info.key },
          });
          await sandro.sendMessage(
            from,
            { image: { url: pfpUrl }, caption: msgGold, mentions: [usu] },
            { quoted: info },
          );
        } catch {
          sandro.sendMessage(from, { text: msgGold, mentions: [usu] });
        }
      }

      async function AddGold(st, qnt, usu) {
        if (!st)
          return reply(
            `Este comando só pode ser utilizado quando o sistema ${prefix}modogold 1 está ativado.`,
          );
        S_Sistema.ADD(usu, qnt);
        sandro.sendMessage(from, {
          text: `│  ✅ @${usu.split("@")[0]} recebeu *+${qnt}* Golds! 🪙`,
          mentions: [usu],
        });
      }

      async function TirarGold(st, qnt, usu) {
        if (!st)
          return reply(
            `Este comando só pode ser utilizado quando o sistema ${prefix}modogold 1 está ativado.`,
          );
        S_Sistema.RM(usu, qnt);
        sandro.sendMessage(from, {
          text: `│  ❌ @${usu.split("@")[0]} perdeu *-${qnt}* Golds! 🪙`,
          mentions: [usu],
        });
      }

      //=======(ADMS/settings/ETC..CONST)========\\

      const adivinha =
        info.key.id.length > 21
          ? "Android ツ"
          : info.key.id.substring(0, 2) == "3A"
            ? "IPhone ｯ"
            : "WhatsApp web シ";

      const quoted = info.quoted ? info.quoted : info;

      const isBot = info.key.fromMe ? true : false;

      if (sender.endsWith("@lid")) {
        for (const dono of lidDonos) {
          if (dono?.numero !== "." && dono?.lid === "nao_mexa") {
            const [result] = await sandro.onWhatsApp(dono.numero);
            const lid = result?.lid;
            if (lid) {
              if (dono.type === "principal") {
                const settings = JSON.parse(
                  fs.readFileSync("./config/personalizacao.json"),
                );
                settings.numerodono_lid = lid;
                fs.writeFileSync(
                  "./config/personalizacao.json",
                  JSON.stringify(settings, null, 2),
                );
              } else {
                const necessario = JSON.parse(
                  fs.readFileSync("./config/nescessario.json"),
                );
                necessario[`${dono.lidtxt}`] = lid;
                fs.writeFileSync(
                  "./config/nescessario.json",
                  JSON.stringify(necessario, null, 2),
                );
              }
            }
          }
        }
      }

      const SoDono =
        numerodono.includes(sender) ||
        (senderAlt && numerodono.includes(senderAlt)) ||
        isBot ||
        isnit ||
        issupre ||
        ischyt ||
        numerodono_lid.includes(sender) ||
        (senderAlt && numerodono_lid.includes(senderAlt));

      dfndofc = setting.numerodono + SNET;

      const DonoOficial =
        dfndofc.includes(sender) || (senderAlt && dfndofc.includes(senderAlt));

      const isPremium = premium.map((i) => i.usus).includes(sender) || SoDono;

      const isBotGroupAdmins =
        groupAdmins.includes(botNumber) ||
        groupAdmins.includes(botJid) ||
        groupAdmins.includes(botLid) ||
        false;

      const isGroupAdmins = groupAdmins.includes(sender) || SoDono;
      
      const isVip = vip.map(i => i.id).includes(sender) || SoDono
      
      const isBanned = ban.includes(sender);

      const isVisualizar = nescessario.visualizarmsg;

      const isVerificado = nescessario.verificado;

      const isAudioMenu = nescessario.menu_audio;

      const isAntiPv2 = nescessario.antipv2;

      const isAntiPv3 = nescessario.antipv3;

      const isConsole = nescessario.consoleoff;

      const listanegraG = nescessario.listanegraG;

      const isAntiPv = nescessario.antipv;

      const isAnticall = nescessario.anticall;
      
      const isBotoff = nescessario.botoff

      //============(FUNÇÕES)============\\

      const isAntiImg = isGroup ? dataGp[0].antiimg : undefined;
      
      const isAntiStatus = isGroup ? dataGp?.[0]?.antistatus : undefined;

      const isAntiVid = isGroup ? dataGp[0].antivideo : undefined;

      const isAntiAudio = isGroup ? dataGp[0].antiaudio : undefined;

      const isAntiSticker = isGroup ? dataGp[0].antisticker : undefined;

      const Antidoc = isGroup ? dataGp[0].antidoc : undefined;
      
      const isLevelingOn = isGroup ? dataGp[0].level : undefined

      const isAntiCtt = isGroup ? dataGp[0].antictt : undefined;

      const isAntiNotas = isGroup ? dataGp[0].antinotas : undefined
      
      

      
      const Antiloc = isGroup ? dataGp[0].antiloc : undefined;
      
      const isNsfw = isGroup ? dataGp[0].nsfw : undefined

      const ADVTLINK = isGroup ? dataGp[0]?.advtlink : undefined;
      
      const isSabCityOFF = !JSON.stringify(autorpg).includes(from) || autorpg[autorpg.map(i => i.id).indexOf(from)].rpg

      const ADVTLINKGP = isGroup ? dataGp[0]?.advtlinkgp : undefined;
      const isCargo = SoDono ? "Mestre" : isGroupAdmins ? "Adminstrador": "Membro"
      
const isChVip = isVip ? "✓": "X"
      const Advt_Link = isGroup
        ? Array.isArray(ADVTLINK)
          ? (ADVTLINK.find((i) => i.id === sender)?.adv ?? null)
          : false
        : 0;

      const Advt_Linkgp = isGroup
        ? Array.isArray(ADVTLINKGP)
          ? (ADVTLINKGP.find((i) => i.id === sender)?.adv ?? null)
          : false
        : 0;

      ///////
      
      const isAntilinkgp = isGroup
        ? (nescessario?.rg_aluguelGB ||
          (isGroup && dataGp[0]?.rg_aluguel) ||
          false) &&
          !rg_aluguel.some((i) => i.id_gp == from)
          ? false
          : !DonoNoGrupo && nescessario?.EstaNogrupo && dataGp[0].antilinkgp
            ? false
            : dataGp[0].antilinkgp
        : undefined;

      const isAntiLinkHard = isGroup
        ? (nescessario?.rg_aluguelGB ||
          (isGroup && dataGp[0]?.rg_aluguel) ||
          false) &&
          !rg_aluguel.some((i) => i.id_gp == from)
          ? false
          : !DonoNoGrupo && nescessario?.EstaNogrupo && dataGp[0].antilinkhard
            ? false
            : dataGp[0].antilinkhard
        : undefined;

      const isAntifake = isGroup
        ? (nescessario?.rg_aluguelGB ||
          (isGroup && dataGp[0]?.rg_aluguel) ||
          false) &&
          !rg_aluguel.some((i) => i.id_gp == from)
          ? false
          : !DonoNoGrupo && nescessario?.EstaNogrupo && dataGp[0].antifake
            ? false
            : dataGp[0].antifake
        : undefined;

      //////

      var isRecolherlinksgp = isGroup ? dataGp[0].recolherlinkgp : undefined;

      const IS_DELETE =
        nescessario?.Odelete === undefined ? true : nescessario?.Odelete;

      const So_Adm = isGroup ? dataGp[0].soadm : undefined;

      const isX9VisuUnica = isGroup ? dataGp[0].visuUnica : undefined;

      const IS_sistemGold = isGroup ? dataGp[0].sistemGold : undefined;

      const ADVT = isGroup ? dataGp[0].advertir : undefined;

      const ADVT2 = isGroup ? dataGp[0].advertir2 : undefined;

      const isx9 = isGroup ? dataGp[0].x9 : undefined;

      const isMultiP = isGroup ? dataGp[0].multiprefix : undefined;

      const isAnticatalogo = isGroup ? dataGp[0].anticatalogo : undefined;

      const isWelkom = isGroup ? dataGp[0].wellcome[0].bemvindo1 : undefined;

      const isWelkom2 = isGroup ? dataGp[0].wellcome[1].bemvindo2 : undefined;

      const isSimi = isGroup ? dataGp[0].simi1 : undefined;
      const isSimi2 = isGroup ? dataGp[0].simi2 : undefined;

      const isAutofigu = isGroup ? dataGp[0].autosticker : undefined;
    
      const isAutorepo = isGroup
        ? (nescessario?.rg_aluguelGB ||
          (isGroup && dataGp[0]?.rg_aluguel) ||
          false) &&
          !rg_aluguel.some((i) => i.id_gp == from)
          ? false
          : dataGp[0].autoresposta
        : undefined;

      const isModobn = isGroup ? dataGp[0].jogos : undefined;

      const isBanchat = isGroup ? dataGp[0].bangp : undefined;

      const isPalavrao = isGroup ? dataGp[0].antipalavrao.active : undefined;

      const isPalavras = isGroup ? dataGp[0].antipalavrao.palavras : undefined;

      const isAntiFlood = isGroup ? dataGp[0].limitec.active : undefined;

      const isLimitec = isGroup ? dataGp[0].limitec.quantidade : undefined;

      //=======================================\\

      var Res_Aguarde = enviarmen;

      var Res_SoGrupo = TEXTOS_GERAL.MENSAGEM_DE_SO_USAR_EM_GRUPO;

      var Res_SoDono = TEXTOS_GERAL.MENSAGEM_DE_SO_DONO_USAR_COMANDOS;

      var Res_SoAdm = TEXTOS_GERAL.MENSAGEM_DE_SO_ADM_CONSEGUIR_USAR_X_COMANDO;

      var Res_BotADM = TEXTOS_GERAL.MENSAGEM_DE_QUANDO_O_BOT_NAO_E_ADM;

      var Res_SoModoBN =
        TEXTOS_GERAL.MENSAGEM_DE_SO_QUANDO_MODO_BRINCADEIRA_FOR_ATIVO.replaceAll(
          "#prefixo#",
          prefix,
        );

      //==========(VERIFICADO)===============\\

if (nescessario.verificado) {
var selo = { "key": { "participant": "0@s.whatsapp.net", "remoteJid": from, "fromMe": false }, "message": { "contactMessage": { "displayName": `${pushname}`, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:;${pushname};;;\nFN:${pushname}\nitem1.TEL;waid=13135550002:13135550002\nitem1.X-ABLabel:Celular\nEND:VCARD`, "contextInfo": { "forwardingScore": 1, "isForwarded": true }}}}
} else {
var selo = info
}

      // FUNÇÕES DE MARCAÇÕES ESSENCIAL \\ DGOMR

      const menc_prt =
        info.message?.extendedTextMessage?.contextInfo?.participant;

      const menc_jid = args?.join(" ").replace("@", "") + SNET;

      const menc_jid2 =
        info.message?.extendedTextMessage?.contextInfo?.mentionedJid;

      const sender_ou_n = q.includes("@") ? menc_jid : sender;

      const mrc_ou_numero =
        q.length > 6 && !q.includes("@")
          ? q.replace(new RegExp("[()+-/ +/]", "gi"), "") + SNET
          : menc_prt;

      const menc_os2 = q.includes("@")
        ? menc_jid2?.length > 0
          ? menc_jid2[0]
          : false
        : menc_prt;

      const marc_tds = q.includes("@")
        ? menc_jid
        : q.length > 6 && !q.includes("@")
          ? q.replace(new RegExp("[()+-/ +/]", "gi"), "") + SNET
          : menc_prt;

      const menc_prt_nmr =
        q.length > 12
          ? q.replace(new RegExp("[()+-/ +/]", "gi"), "") + SNET
          : menc_prt;

      ////////////////////////////////////////////

      //BAN GRUPO & BOT OFF
      if (isGroup && isCmd && isBanchat && !SoDono) return; // IGNORAR TODOS DO GRUPO.

      if (isGroup && isCmd && So_Adm && !SoDono && !isGroupAdmins) return; // IGNORAR QUEM NÃO É ADM.

      if (nescessario?.botoff && !SoDono) return; // IGNORAR TUDO SEM SER DONO.

      if (!isCmd && info.key.fromMe) return; // Ignorar comandos do bot.

      var isUrl = (url) => {
        return linkfy.find(url)[0]?.isLink;
      };

      const isLink = (url) => {
        return linkfy.find(url)[0]?.isLink;
      };

      const Link = (url) => {
        if (isLink(url)) {
          return linkfy.find(url)[0].href;
        } else {
          return false;
        }
      };

const reply = async (texto) => {
  const channel = JSON.parse(fs.readFileSync('./assets/channel.json'))

  if (!texto) texto = "⚠️ Mensagem vazia";

  const mentions = [menc_os2, sender].filter(Boolean);

  if (channel.ativo) {
    return sandro.sendMessage(from, {
      text: String(texto),
      contextInfo: {
        forwardingScore: 100000,
        isForwarded: true,
        mentionedJid: mentions
      }
    })
  } else {
    return sandro.sendMessage(
      from,
      { 
        text: String(texto),
        mentions: mentions
      },
      { quoted: info }
    )
  }
}

////Selos

const selopagbank = {"key": {"participant": "551140031775@s.whatsapp.net","remoteJid": "status@broadcast", "fromMe": false,},"message": {
"contactMessage": {
"displayName": "PAGBANK", "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:;PAGBANK;;;\nFN:PAGBANK\nitem1.TEL;waid=551140031775:551140031775\nitem1.X-ABLabel:Celular\nEND:VCARD`, "contextInfo": {"forwardingScore": 1,"isForwarded": true}}}};

const seloMpg = {"key": {"participant": "5511988032872@s.whatsapp.net","remoteJid": "status@broadcast", "fromMe": false,},"message": {
"contactMessage": {
"displayName": "MERCADO PAGO", "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:;MERCADO PAGO;;;\nFN:MERCADO PAGO\nitem1.TEL;waid=5511988032872:5511988032872\nitem1.X-ABLabel:Celular\nEND:VCARD`, "contextInfo": {"forwardingScore": 1,"isForwarded": true}}}};

const selonubank = {"key": {"participant": "551150390444@s.whatsapp.net","remoteJid": "status@broadcast", "fromMe": false,},"message": {
"contactMessage": {
"displayName": "NUBANK", "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:;NUBANK;;;\nFN: NUBANK\nitem1.TEL;waid=551150390444:551150390444\nitem1.X-ABLabel:Celular\nEND:VCARD`, "contextInfo": {"forwardingScore": 1,"isForwarded": true}}}};

const selobBrasil = {"key": {"participant": "556140040001@s.whatsapp.net","remoteJid": "status@broadcast", "fromMe": false,},"message": {
"contactMessage": {
"displayName": "BANCO DO BRASIL", "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:;BANCO DO BRASIL;;;\nFN:BANCO DO BRASIL\nitem1.TEL;waid=556140040001:556140040001\nitem1.X-ABLabel:Celular\nEND:VCARD`, "contextInfo": {"forwardingScore": 1,"isForwarded": true}}}};

const seloPicpay = {"key": {"participant": "5511991700674@s.whatsapp.net","remoteJid": "status@broadcast", "fromMe": false,},"message": {
"contactMessage": {
"displayName": "PICPAY", "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:;PCPAY;;;\nFN:PCPAY\nitem1.TEL;waid=5511991700674:5511991700674\nitem1.X-ABLabel:Celular\nEND:VCARD`, "contextInfo": {"forwardingScore": 1,"isForwarded": true}}}};
////////////

      //
      const time2 = moment().tz("America/Sao_Paulo").format("HH:mm:ss");
      if (time2 > "00:00:00" && time2 < "05:00:00") {
        var tempo = "Boa madrugada";
      }
      if (time2 > "05:00:00" && time2 < "12:00:00") {
        var tempo = "Bom dia";
      }
      if (time2 > "12:00:00" && time2 < "18:00:00") {
        var tempo = "Boa tarde";
      }
      if (time2 > "18:00:00") {
        var tempo = "Boa noite";
      }

      const sendSticker = (from, filename, info) => {
        sandro.sendMessage(
          from,
          { sticker: { url: fileName } },
          { quoted: info },
        );
      };

      const sendImage = (ytb) => {
        sandro.sendMessage(from, { image: { url: ytb } }, { quoted: info });
      };

      const sendMess = (hehe, ytb) => {
        sandro.sendMessage(hehe, { text: ytb });
      };

      const mentions = (teks, memberr, id) => {
        id == null || id == undefined || id == false
          ? sandro.sendMessage(from, { text: teks.trim(), mentions: memberr })
          : sandro.sendMessage(from, { text: teks.trim(), mentions: memberr });
      };

      const mention = (teks = "", ms = info) => {
        memberr = [];
        vy = teks.includes("\n") ? teks.split("\n") : [teks];
        for (vz of vy) {
          for (zn of vz.split(" ")) {
            if (zn.includes("@")) {
              const numberPart = zn.split("@")[1];
              // Verificar se é um número válido ou LID
              if (numberPart && numberPart.trim()) {
                // Se contém apenas dígitos, é número normal
                if (/^\d+$/.test(numberPart)) {
                  memberr.push(numberPart + SNET);
                } else {
                  // Caso contrário, usar como está (pode ser LID)
                  memberr.push(zn.substring(1)); // Remove o @ inicial
                }
              }
            }
          }
        }
        sandro.sendMessage(
          from,
          { text: teks.trim(), mentions: memberr },
          { quoted: ms },
        );
      };

      const mentionSm = (teks = "") => {
        memberr = [];
        vy = teks.includes("\n") ? teks.split("\n") : [teks];
        for (vz of vy) {
          for (zn of vz.split(" ")) {
            if (zn.includes("@")) {
              const numberPart = zn.split("@")[1];
              // Verificar se é um número válido ou LID
              if (numberPart && numberPart.trim()) {
                // Se contém apenas dígitos, é número normal
                if (/^\d+$/.test(numberPart)) {
                  memberr.push(numberPart + SNET);
                } else {
                  // Caso contrário, usar como está (pode ser LID)
                  memberr.push(zn.substring(1)); // Remove o @ inicial
                }
              }
            }
          }
        }
        sandro.sendMessage(from, { text: teks.trim(), mentions: memberr });
      };

      const mencionarIMG = (teks = "", Url, ms) => {
        memberr = [];
        vy = teks.includes("\n") ? teks.split("\n") : [teks];
        for (vz of vy) {
          for (zn of vz.split(" ")) {
            if (zn.includes("@")) {
              const numberPart = zn.split("@")[1];
              // Verificar se é um número válido ou LID
              if (numberPart && numberPart.trim()) {
                // Se contém apenas dígitos, é número normal
                if (/^\d+$/.test(numberPart)) {
                  memberr.push(numberPart + SNET);
                } else {
                  // Caso contrário, usar como está (pode ser LID)
                  memberr.push(zn.substring(1)); // Remove o @ inicial
                }
              }
            }
          }
        }
        sandro.sendMessage(
          from,
          { image: { url: Url }, caption: teks.trim(), mentions: memberr },
          { quoted: ms },
        );
      };

      const reagir = async (idgp, emj) => {
        sandro.sendMessage(idgp, { react: { text: emj, key: info.key } });
      };

      const verificarN = async (sla) => {
        const [result] = await sandro.onWhatsApp(sla);
        if (result == undefined) {
          reply("Este fdp não é existente no WhatsApp");
        } else {
          reply(
            `-> ${sla} Número inserido é existente no WhatsApp.\n\ncom o id: ${result.id}`,
          );
        }
      };

      if (
        isGroup &&
        isBotGroupAdmins &&
        !isGroupAdmins &&
        !SoDono &&
        !info.key.fromMe
      ) {
        if (menc_jid2?.length >= groupMembers.length - 1) {
          sandro.sendMessage(from, {
            text: "𝙑𝙖𝙯𝙖, 𝙙𝙖𝙦𝙪𝙞 𝙘𝙤𝙢 𝙚𝙨𝙨𝙖 𝙢𝙖𝙧𝙘𝙖𝙘̧𝙖̃𝙤 𝙥𝙖𝙡𝙝𝙖𝙘̧𝙤😒",
          });
          if (IS_DELETE) {
            setTimeout(() => {
              sandro.sendMessage(from, {
                delete: {
                  remoteJid: from,
                  fromMe: false,
                  id: info.key.id,
                  participant: sender,
                },
              });
            }, 500);
          }
          sandro.groupParticipantsUpdate(from, [sender], "remove");
        }
      }

      const enviarfigu = async (figu, tag) => {
        sandro.sendMessage(from, { sticker: { url: figu } }, { quoted: tag });
      };

      if (isAutofigu && isGroup) {
        async function autofiguf() {
          setTimeout(async () => {
            if (
              budy.includes(`${prefix}sticker`) ||
              budy.includes(`${prefix}s`) ||
              budy.includes(`${prefix}stk`) ||
              budy.includes(`${prefix}st`) ||
              budy.includes(`${prefix}fsticker`) ||
              budy.includes(`${prefix}f`) ||
              budy.includes(`${prefix}fstiker`)
            )
              return;

            if (type == "imageMessage") {
              var pack = setting.figurinha?.pacote || NomeDoBot;
var author2 = setting.figurinha?.autor || NickDono;
              owgi = await getFileBuffer(info.message.imageMessage, "image");
              let encmediaa = await sendImageAsSticker2(
                sandro,
                from,
                owgi,
                info,
                { packname: pack, author: author2 },
              );
              DLT_FL(encmediaa);
            }

            if (type == "videoMessage") {
              if (isMedia && info.message.videoMessage.seconds < 10) {
                var pack = setting.figurinha?.pacote || NomeDoBot;
var author2 = setting.figurinha?.autor || NickDono;
                owgi = await getFileBuffer(info.message.videoMessage, "video");
                let encmedia = await sendVideoAsSticker2(
                  sandro,
                  from,
                  owgi,
                  info,
                  { packname: pack, author: author2 },
                );
                DLT_FL(encmedia);
              }
            }
          }, 1000);
        }
        autofiguf().catch((e) => {
          console.log(e);
        });
      }

      var nmrdnofc1 = setting.numerodono.replace(
        new RegExp("[()+-/ +/]", "gi"),
        "",
      );

      if (isGroup && fs.existsSync(`./data/org/json/afk-@${nmrdnofc1}.json`)) {
        if (budy.indexOf(`@${nmrdnofc1}`) >= 0) {
          const tabelin = JSON.parse(
            fs.readFileSync(`./data/org/json/afk-@${nmrdnofc1}.json`),
          );

          txt = `- Olá, o ${NickDono} Está ausente.\n\n - Desde: ${tabelin.Ausente_Desde}\n\n- 😇 Mensagem de ausência : ${tabelin.Motivo_Da_Ausência}`;

          sandro.sendMessage(from, { text: txt }, { quoted: info });
        }
      }

      if (
        isGroup &&
        dataGp[0].ausentes?.length > 0 &&
        menc_jid2?.length > 0 &&
        JSON.stringify(dataGp[0].ausentes).includes(menc_jid2)
      ) {
        blue = [];
        for (i of menc_jid2) {
          if (groupAdmins.indexOf(String(i)) != -1)
            blue.push(groupAdmins.indexOf(String(i)));
        }
        if (blue.length == 0) return;
        big = [];
        for (i of blue) {
          big.push(groupAdmins[i]);
        }
        blr = [];
        for (i = 0; i < big.length; i++) {
          blr.push(
            dataGp[0].ausentes[
            dataGp[0].ausentes.map((i) => i.id).indexOf(big[i])
            ],
          );
        }
        for (i of blr) {
          var blak = i;
        }
        mention(`
╭─────────────
┊ Registro de ausência.
┊ 
┊ ADM: @${blak.id.split("@")[0]}
┊ 
╰────◉◊

↺➤ Mensagem: ${blak.msg}

 ─────────────`);
      }

      if (isBotGroupAdmins && isGroupAdmins && body === "apaga") {
        if (!menc_prt) return;
        sandro.sendMessage(from, {
          delete: {
            remoteJid: from,
            fromMe: false,
            id: info.message.extendedTextMessage.contextInfo.stanzaId,
            participant: menc_prt,
          },
        });
      }

      //=======================================\\

      const sendStickerFromUrl = async (to, url) => {
        try {
          var names = Date.now() / 10000;
          var download = function (uri, filename, callback) {
            request.head(uri, function (err, res, body) {
              request(uri)
                .pipe(fs.createWriteStream(filename))
                .on("close", callback);
            });
          };
          download(url, "./sticker" + names + ".png", async function () {
            console.log("enviando sticker");
            let filess = "./sticker" + names + ".png";
            let asw = "./sticker" + names + ".webp";
            exec(
              `ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${asw}`,
              (err) => {
                let media = fs.readFileSync(asw);
                sandro
                  .sendMessage(
                    to,
                    { sticker: media },
                    {
                      sendEphemeral: true,
                      contextInfo: { forwardingScore: 50, isForwarded: true },
                      quoted: info,
                    },
                  )
                  .catch((e) => {
                    return reply("Erro... 🥱");
                  });
                DLT_FL(filess);
                DLT_FL(asw);
              },
            );
          });
        } catch {
          return reply("Erro.. FNC");
        }
      };

      //=========(isQuoted/consts)=============\\
      const isImage = type == "imageMessage";
      const isVideo = type == "videoMessage";
      const isVisuU2 = type == "viewOnceMessageV2";
      const isAudio = type == "audioMessage";
      const isSticker = type == "stickerMessage";
      const isContact = type == "contactMessage";
      const isLocation = type == "locationMessage";
      const isProduct = type == "productMessage";
      const isMedia =
        type === "imageMessage" ||
        type === "videoMessage" ||
        type === "audioMessage" ||
        type == "viewOnceMessage" ||
        type == "viewOnceMessageV2";
      typeMessage = body.substr(0, 50).replace(/\n/g, "");
      if (isImage) typeMessage = "Image";
      else if (isVideo) typeMessage = "Video";
      else if (isAudio) typeMessage = "Audio";
      else if (isSticker) typeMessage = "Sticker";
      else if (isContact) typeMessage = "Contact";
      else if (isLocation) typeMessage = "Location";
      else if (isProduct) typeMessage = "Product";

      const isQuotedMsg =
        type === "extendedTextMessage" && content.includes("conversation");

      const isQuotedMsg2 =
        type === "extendedTextMessage" && content.includes("text");

      const isQuotedImage =
        type === "extendedTextMessage" && content.includes("imageMessage");

      const isQuotedVisuU =
        type === "extendedTextMessage" && content.includes("viewOnceMessage");

      const isQuotedVisuU2 =
        type === "extendedTextMessage" && content.includes("viewOnceMessageV2");

      const isQuotedVideo =
        type === "extendedTextMessage" && content.includes("videoMessage");

      const isQuotedDocument =
        type === "extendedTextMessage" && content.includes("documentMessage");

      const isQuotedDocW =
        type === "extendedTextMessage" &&
        content.includes("documentWithCaptionMessage");

      const isQuotedAudio =
        type === "extendedTextMessage" && content.includes("audioMessage");

      const isQuotedSticker =
        type === "extendedTextMessage" && content.includes("stickerMessage");

      const isQuotedContact =
        type === "extendedTextMessage" && content.includes("contactMessage");

      const isQuotedLocation =
        type === "extendedTextMessage" && content.includes("locationMessage");

      const isQuotedProduct =
        type === "extendedTextMessage" && content.includes("productMessage");

      //////BLOCK CMD///////
      //(CREDITOS AO KAUAN GAY)\\

      if (
        isGroup &&
        isCmd &&
        !SoDono &&
        dataGp[0]?.comandosB?.includes(command)
      )
        return reply(
          "Passar o pix. Depois você usar meus comandos.!\nPix na conta calcinha no chão 😏",
        );

      if (isCmd && !SoDono && bloq_global.includes(command))
        return reply(
          "Este comando está bloqueado pelo meu dono, e não pode ser utilizado em lugar nenhum.",
        );
const { color, bgcolor } = require('./data/js/color.js')

const tipoMensagem = type == 'audioMessage' ? 'Áudio' : type == 'stickerMessage' ? 'Figurinha' : type == 'imageMessage' ? 'Imagem' : type == 'videoMessage' ? 'Vídeo' : type == 'documentMessage' ? 'Documento' : type == 'contactMessage' ? 'Contato' : type == 'locationMessage' ? 'Localização' ? 'Enquete' : 'pollCreationMessage' : 'Mensagem'

 if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m COMANDO \x1b[1;37m]', color(command, "yellow"), 'do', color(pushname, "yellow"), 'Horas:', color(time, "yellow"));  

if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m COMANDO \x1b[1;37m]', color(command, "yellow"), 'do', color(pushname, "yellow"), 'Grupo:', color(groupName, "yellow"), 'Horas:', color(time, "yellow"));

if (!isCmd && isGroup && !info.key.fromMe) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m MENSAGEM \x1b[1;37m]', color(tipoMensagem, "yellow"), 'do', color(pushname, "yellow"), 'Grupo:', color(groupName, "yellow"), 'Horas:', color(time, "yellow"));

if (!isGroup && !isCmd && !info.key.fromMe) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m MENSAGEM \x1b[1;37m]', color(tipoMensagem, "yellow"), 'do', color(pushname, "yellow"), 'Horas:', color(time, "yellow"))

if(isGroup && info.message?.reactionMessage?.text) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m REAÇÃO \x1b[1;37m]', color(`Emoji: " ${info.message.reactionMessage.text} "`, "yellow"), 'do', color(pushname, "yellow"), 'Horas:', color(time, "yellow"))

/////



////

      //======(JOGO-DA-VELHA)=======(Função)===\\

      async function joguinhodavelha() {
        const cmde = budy.toLowerCase().split(" ")[0] || "";
        let arrNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
        if (JOGO_D_V != false) {
          const boardnow = setGame(`${from}`);
          if (budy == "Cex") return reply("why");
          if (
            budy.toLowerCase() == "s" ||
            budy.toLowerCase() == "sim" ||
            budy.toLowerCase() == "ok"
          ) {
            if (boardnow.O == sender.replace(SNET, "")) {
              if (boardnow.status) return reply(`O jogo já começou antes!`);
              const matrix = boardnow._matrix;
              boardnow.status = true;
              fs.writeFileSync(
                `./data/org/tictactoe/db/${from}.json`,
                JSON.stringify(boardnow, null, 2),
              );
              const chatAccept = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*

❌ : @${boardnow.X}
⭕ : @${boardnow.O}
 
Sua vez... : @${boardnow.turn == "X" ? boardnow.X : boardnow.O}

${matrix[0][0]}${matrix[0][1]}${matrix[0][2]}
${matrix[1][0]}${matrix[1][1]}${matrix[1][2]}
${matrix[2][0]}${matrix[2][1]}${matrix[2][2]}
`;
              mention(chatAccept);
            }
          } else if (
            budy.toLowerCase() == "n" ||
            budy.toLowerCase() == "não" ||
            budy.toLowerCase() == "no"
          ) {
            if (boardnow.O == sender.replace(SNET, "")) {
              if (boardnow.status) return reply(`O jogo já começou!`);
              DLT_FL(`./data/org/tictactoe/db/${from}.json`);
              mention(
                `@${boardnow.X} *_Seu oponente não aceitou o desafio deve ter ficado com medinho de ser massacrado 👹_*`,
              );
            }
          }
        }

        if (arrNum.includes(cmde)) {
          const boardnow = setGame(`${from}`);
          if (!boardnow.status)
            return reply(
              `Parece que seu oponente não aceitou o desafio ainda 😏`,
            );
          if (
            (boardnow.turn == "X" ? boardnow.X : boardnow.O) !=
            sender.replace(SNET, "")
          )
            return;
          const moving = validmove(Number(budy), `${from}`);
          const matrix = moving._matrix;
          if (moving.isWin) {
            if (moving.winner == "SERI") {
              const chatEqual = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*

Jogo termina empatado 😐
`;
              reply(chatEqual);
              DLT_FL("./data/org/tictactoe/db/" + from + ".json");
              return;
            }
            const abt = Math.ceil(Math.random() + 4000);
            const winnerJID = moving.winner == "O" ? moving.O : moving.X;
            const looseJID = moving.winner == "O" ? moving.X : moving.O;
            const limWin = Math.floor(Math.random() * 1) + 10;
            const limLoose = Math.floor(Math.random() * 1) + 5;
            const chatWon = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*

Vencido por @${winnerJID} 😎👑
`;

            mention(chatWon);
            setTimeout(() => {
              if (fs.existsSync("./data/org/tictactoe/db/" + from + ".json")) {
                DLT_FL("./data/org/tictactoe/db/" + from + ".json");
                reply(`*🕹️JOGO DA VOVÓ RESETADO...😼*`);
              } else {
                console.log(
                  colors.red(time, "red"),
                  colors.magenta("[ EXPIRADO ]"),
                  colors.red("Jogo da velha espirado"),
                );
                DLT_FL("./data/org/tictactoe/db/" + from + ".json");
                reply(`*🕹️JOGO DA VELHA RESETADO, PORQUE EXPIROU 🕹️*`);
              }
            }, 300000); //5 minutos
            mention(
              `_*🥳Parabéns @${winnerJID} por ter ganhado o jogo da vovó 😏🎉...*_`,
            );
            DLT_FL(`./data/org/tictactoe/db/${from}.json`);
          } else {
            const chatMove = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*

❌ : @${moving.X}
⭕ : @${moving.O}

Sua vez : @${moving.turn == "X" ? moving.X : moving.O}

${matrix[0][0]}${matrix[0][1]}${matrix[0][2]}
${matrix[1][0]}${matrix[1][1]}${matrix[1][2]}
${matrix[2][0]}${matrix[2][1]}${matrix[2][2]}
`;
            mention(chatMove);
          }
        }
      }

      //=================================\\

      function contar(frase, letraProcurada) {
        var total = 0;
        [...frase].forEach((letra) => {
          if (letra === letraProcurada) total++;
        });
        return total;
      }

      joguinhodavelha();

      if (
        isAntilinkgp &&
        isGroup &&
        isBotGroupAdmins &&
        !isGroupAdmins &&
        Procurar_String.includes("chat.whatsapp.com/")
      ) {
        if (isBot) return;
        let link_dgp;
        try {
          link_dgp = await sandro?.groupInviteCode(from);
        } catch {
          link_dgp = "000000";
        }
        if (
          Procurar_String.split(" ").filter(
            (x) => x === "https://chat.whatsapp.com/",
          ).length < 2 &&
          Procurar_String.match(link_dgp)
        )
          return reply(
            "𝙇𝙞𝙣𝙠 𝙙𝙤 𝙣𝙤𝙨𝙨𝙤 𝙜𝙧𝙪𝙥𝙤, 𝙣𝙖̃𝙤 𝙞𝙧𝙚𝙞 𝙧𝙚𝙢𝙤𝙫𝙚𝙧...",
          );
        if (IS_DELETE) {
          setTimeout(() => {
            sandro.sendMessage(from, {
              delete: {
                remoteJid: from,
                fromMe: false,
                id: info.key.id,
                participant: sender,
              },
            });
          }, 500);
        }
        var groupMemberIds = new Set(groupMembers.map((i) => i.id));

        if (groupMemberIds.has(sender)) {
          if (!dataGp[0]?.advlinkgp) {
            sandro.groupParticipantsUpdate(from, [sender], "remove");
          } else {
            if (Advt_Linkgp === false) {
              dataGp[0].advtlinkgp = [{ id: sender, adv: 1 }];
              setGp(dataGp);
            } else if (Advt_Linkgp === null) {
              dataGp[0].advtlinkgp.push({ id: sender, adv: 1 });
              setGp(dataGp);
            } else {
              dataGp[0].advtlinkgp.find((i) => i.id === sender).adv += 1;
              setGp(dataGp);
            }
            if (Advt_Linkgp > 1) {
              reply(
                "Você teve 3 advertência irei te remover.",
              );
              dataGp[0].advtlinkgp.splice(
                dataGp[0].advtlinkgp.findIndex((i) => i.id === sender),
                1,
              );
              setGp(dataGp);
              return sandro.groupParticipantsUpdate(from, [sender], "remove");
            }
            if (Advt_Linkgp !== false) {
              reply(
                `você enviou um link de grupo, e então foi advertido em ${dataGp[0].advtlinkgp.find((i) => i.id === sender)?.adv || 0
                }/3, não envie mais, pois se enviar vou te remove`,
              );
            }
          }
        }
      }

      const groupIdscount = [];
      for (let obj of countMessage) {
        groupIdscount.push(obj.groupId);
      }

      //========(CONTADOR-DE-MENSAGENS)========\\ ANTNMSCVRS
      var numbersIds = [];
      if (isGroup) {
        if (groupIdscount.indexOf(from) >= 0) {
          var ind = groupIdscount.indexOf(from);
          for (let obj of countMessage[ind].numbers) {
            numbersIds.push(obj.id);
          }
          if (numbersIds.indexOf(sender) >= 0) {
            var indnum = numbersIds.indexOf(sender);
            var RSM_CN = countMessage[ind].numbers[indnum];
            type == "stickerMessage" ? "" : (RSM_CN.messages += isCmd ? 0 : 1);
            type == "stickerMessage"
              ? ""
              : (RSM_CN.cmd_messages += isCmd ? 1 : 0);
            type == "stickerMessage" ? "" : (RSM_CN.aparelho = adivinha);
            RSM_CN.nick = pushname;
            RSM_CN.figus += type == "stickerMessage" ? 1 : 0;
          } else {
            const messages = isCmd ? 0 : 1;
            const cmd_messages = isCmd ? 1 : 0;
            var figus = type == "stickerMessage" ? 1 : 0;
            countMessage[ind].numbers.push({
              id: sender,
              messages: messages,
              cmd_messages: cmd_messages,
              aparelho: adivinha,
              figus: figus,
              nick: pushname,
            });
          }
        } else {
          countMessage.push({
            groupId: from,
            numbers: [
              {
                id: sender,
                messages: 2,
                figus: 0,
                cmd_messages: isCmd ? 1 : 0,
                aparelho: adivinha,
                nick: pushname,
              },
            ],
          });
        }
        fs.writeFileSync(
          "./data/countmsg.json",
          JSON.stringify(countMessage, null, 2) + "\n",
        );
      }

var i9 = countMessage.map(i => i.groupId).indexOf(from)
var idgrupo = groupIdscount.indexOf(from)

var idusu = numbersIds?.indexOf(sender)

if(body != undefined && !info.message?.reactionMessage?.text && !JSON.stringify(level2).includes(sender) && isGroup) {
level2.push({id: sender, nick: pushname, level: 1, contador: 0, block: false})
fs.writeFileSync("./database/usuarios/leveling.json", JSON.stringify(level2))
}

if(body != undefined && !info.message?.reactionMessage?.text && JSON.stringify(level2).includes(sender) && level2[level2.map(i => i.id).indexOf(sender)].block == false && isGroup && isLevelingOn) {
AB = level2.map(i => i.id).indexOf(sender)
level2[AB].contador += 1
level2[AB].nick = pushname
fs.writeFileSync("./database/usuarios/leveling.json", JSON.stringify(level2))
switch(level2[AB].contador) {
case 100: case 200: case 300: case 400: case 500: case 600: case 700: case 800: case 900: case 1200: case 1500: case 1800: case 2100: case 2700: case 3300: case 3900: case 4500: case 5000: case 5500: case 6500: case 7500: case 9000: case 10500: case 12000: case 13500: case 15000: case 20000: case 25000: case 30000: case 35000: case 40000: case 50000: case 60000: case 70000: case 80000: case 90000: case 100000: case 150000: case 200000: case 300000: case 400000: case 500000: case 1000000: case 1500000: case 2000000: case 5000000:
var newlevel = level2[AB].contador + 1
if(newlevel < 100) newpatente = "Bronze I 🥉"
if(newlevel >= 100 && newlevel < 200) newpatente = "Bronze II 🥉"
if(newlevel >= 200 && newlevel < 300) newpatente = "Bronze III 🥉"
if(newlevel >= 300 && newlevel < 400) newpatente = "Prata I 🥈"
if(newlevel >= 400 && newlevel < 500) newpatente = "Prata II 🥈"
if(newlevel >= 500 && newlevel < 600) newpatente = "Prata III 🥈"
if(newlevel >= 600 && newlevel < 700) newpatente = "Ouro I 🥇"
if(newlevel >= 700 && newlevel < 800) newpatente = "Ouro II 🥇"
if(newlevel >= 800 && newlevel < 900) newpatente = "Ouro III 🥇"
if(newlevel >= 900 && newlevel < 1200) newpatente = "Ouro IV 🥇"
if(newlevel >= 1200 && newlevel < 1500) newpatente = "Platina I 🌀"
if(newlevel >= 1500 && newlevel < 1800) newpatente = "Platina II 🌀"
if(newlevel >= 1800 && newlevel < 2100) newpatente = "Platina III 🌀"
if(newlevel >= 2100 && newlevel < 2700) newpatente = "Platina IV 🌀"
if(newlevel >= 2700 && newlevel < 3300) newpatente = "Diamante I 💎"
if(newlevel >= 3300 && newlevel < 3900) newpatente = "Diamante II 💎"
if(newlevel >= 3900 && newlevel < 4500) newpatente = "Diamante III 💎"
if(newlevel >= 4500 && newlevel < 5000) newpatente = "Diamante IV 💎"
if(newlevel >= 5000 && newlevel < 5500) newpatente = "Paladino I 🔮"
if(newlevel >= 5500 && newlevel < 6500) newpatente = "Paladino II 🔮"
if(newlevel >= 6500 && newlevel < 7500) newpatente = "Paladino III 🔮"
if(newlevel >= 7500 && newlevel < 9000) newpatente = "Paladino IV 🔮"
if(newlevel >= 9000 && newlevel < 10500) newpatente = "Mestre I ❤️‍🔥"
if(newlevel >= 10500 && newlevel < 12000) newpatente = "Mestre II ❤️‍🔥"
if(newlevel >= 12000 && newlevel < 13500) newpatente = "Mestre III ❤️‍🔥"
if(newlevel >= 13500 && newlevel < 15000) newpatente = "Mestre IV ❤️‍🔥"
if(newlevel >= 15000 && newlevel < 20000) newpatente = "Mestre V ❤️‍🔥"
if(newlevel >= 20000 && newlevel < 25000) newpatente = "Desafiante I 👑"
if(newlevel >= 25000 && newlevel < 30000) newpatente = "Desafiante II 👑"
if(newlevel >= 30000 && newlevel < 35000) newpatente = "Desafiante III 👑"
if(newlevel >= 35000 && newlevel < 40000) newpatente = "Desafiante IV 👑"
if(newlevel >= 40000 && newlevel < 50000) newpatente = "Desafiante V 👑"
if(newlevel >= 50000 && newlevel < 60000) newpatente = "Usuário Superior I 🎓"
if(newlevel >= 60000 && newlevel < 70000) newpatente = "Usuário Superior II 🎓"
if(newlevel >= 70000 && newlevel < 80000) newpatente = "Mestre Supremo I 🪄"
if(newlevel >= 80000 && newlevel < 90000) newpatente = "Mestre Supremo II 🪄"
if(newlevel >= 90000 && newlevel < 100000) newpatente = "Mestre Supremo III 🪄"
if(newlevel >= 100000 && newlevel < 150000) newpatente = "Conquistador I ⚒️"
if(newlevel >= 150000 && newlevel < 200000) newpatente = "Conquistador II ⚒️"
if(newlevel >= 200000 && newlevel < 300000) newpatente = "Conquistador III ⚒️"
if(newlevel >= 300000 && newlevel < 400000) newpatente = "Desbravador I 🛰️"
if(newlevel >= 400000 && newlevel < 500000) newpatente = "Desbravador II 🛰️"
if(newlevel >= 500000 && newlevel < 1000000) newpatente = "Desbravador III 🛰️"
if(newlevel >= 1000000 && newlevel < 1500000) newpatente = "Grande Mestre I 🪩"
if(newlevel >= 1500000 && newlevel < 2000000) newpatente = "Grande Mestre II 🪩"
if(newlevel >= 2000000 && newlevel < 5000000) newpatente = "Grande Mestre III 🪩"
if(newlevel >= 5000000 && newlevel < 10000000) newpatente = "Supremacy X ⚜️"
if(newlevel >= 10000000) newpatente = "Veterano 🎩"
level2[AB].level += 1
fs.writeFileSync("./database/usuarios/leveling.json", JSON.stringify(level2))
sandro.sendMessage(from, {text: `*🎉 LEVEL UP! 🎖️*\nParabéns *@${sender.split("@")[0]}*, você acaba de subir de level.\n• O novo level foi alcançado por completar *${level2[AB].contador} XP.*\n• Sua nova patente foi desbloqueada, você agora é *${newpatente}*`, mentions: [sender]}, {quoted: info})
break
case 10000000:
BC = level2.map(i => i.id).indexOf(sender)
level2[BC].level += 1
fs.writeFileSync("./database/usuarios/leveling.json", JSON.stringify(level2))
reply(`🎉 Parabéns ${pushname}, você completou com sucesso 10M de XP, possuindo assim o título de *Veterano 🎩*\n–\n• Todos os níveis daqui pra frente serão contados a cada 1M de XP... Nossa equipe se orgulha de coroar você, depois de tanto esforço e desempenho, após muito tempo de uso de nosso sistemas. ${tempo}!`)
break
case 10000000: case 11000000: case 12000000: case 13000000: case 14000000: case 15000000: case 16000000: case 17000000: case 18000000: case 19000000: case 20000000: case 21000000: case 22000000: case 23000000: case 24000000: case 25000000: case 26000000: case 27000000: case 28000000: case 29000000: case 30000000:
CD = level2.map(i => i.id).indexOf(sender)
level2[CD].level += 1
fs.writeFileSync("./database/usuarios/leveling.json", JSON.stringify(level2))
sandro.sendMessage(from, {text: `*🎉 SUPREME LEVEL UP! 🎖️*\nMeus parabéns querido usuário veterano *@${sender.split("@")[0]}*.\n• Sua experiência acaba de levar a quantidade total de XP à triplicar. Agora você tem *${level2[CD].contador} XP*\n–\n*Obs:* Sua patente atual continua sendo a mesma, pois você chegou à maior.`, mentions: [sender]}, {quoted: info})
break
}
}

const VerificarJSON = (json, value) => {
if(JSON.stringify(json).includes(value)) return true
return false
}

      //============(EVAL-EXECUÇÕES)===========\\

      if (budy.startsWith(">")) {
        try {
          if (info.key.fromMe) return;
          if (!SoDono && !isnit && !issupre && !ischyt && !issupre) return;
          console.log(
            "[",
            colors.cyan("EVAL"),
            "]",
            colors.yellow(
              moment(info.messageTimestamp * 1000).format("DD/MM HH:mm:ss"),
            ),
            colors.green(budy),
          );
          return sandro
            .sendMessage(from, {
              text: JSON.stringify(eval(budy.slice(2)), null, "\t"),
            })
            .catch((e) => {
              return reply(String(e));
            });
        } catch (e) {
          return reply(String(e));
        }
      }

      if (budy.startsWith("(>")) {
        try {
          if (info.key.fromMe) return;
          if (!SoDono && !isnit && !issupre && !ischyt && !issupre && !ischyt)
            return;
          var konsol = budy.slice(3);
          Return = (sul) => {
            var sat = JSON.stringify(sul, null, 2);
            bang = util.format(sat);
            if (sat == undefined) {
              bang = util.format(sul);
            }
            return sandro.sendMessage(from, { text: bang }, { quoted: info });
          };

          sandro
            .sendMessage(from, {
              text: util.format(eval(`;(async () => { ${konsol} })()`)),
            })
            .catch((e) => {
              return reply(String(e));
            });
          console.log(
            "\x1b[1;37m>",
            "[",
            "\x1b[1;32mEXEC\x1b[1;37m",
            "]",
            time,
            colors.green(">"),
            "from",
            colors.green(sender.split("@")[0]),
            "args :",
            colors.green(args.length),
          );
        } catch (e) {
          reply(String(e));
          return console.log(e);
        }
      }

      if (body.startsWith("$")) {
        if (info.key.fromMe) return;
        if (!SoDono && !isnit) return;
        exec(q, (err, stdout) => {
          if (err) return reply(`${err}`);
          if (stdout) {
            reply(stdout);
          }
        });
      }

      //======================================\\



//======(ANTI-IMAGEM)========\\
      if (isAntiImg && isBotGroupAdmins && type == "imageMessage") {
        if (info.key.fromMe) return;
        if (isGroupAdmins)
          return sandro.sendMessage(from, { text: "👀" }, { quoted: info });
        sandro.sendMessage(
          from,
          {
            text: "🤺_𝘼𝙦𝙪𝙞 𝙣𝙖𝙤 𝙥𝙤𝙙𝙚 𝙢𝙖𝙣𝙙𝙖𝙧 ~(𝗜𝗠𝗔𝗚𝗘𝗠)~ 𝙍𝙚𝙩𝙖𝙧𝙙𝙖𝙙𝙤 𝙣𝙖𝙤 𝙡𝙚𝙪 𝙖𝙨 𝙍𝙚𝙜𝙧𝙖𝙨❗️",
          },
          { quoted: info },
        );
        if (IS_DELETE) {
          setTimeout(() => {
            sandro.sendMessage(from, {
              delete: {
                remoteJid: from,
                fromMe: false,
                id: info.key.id,
                participant: sender,
              },
            });
          }, 500);
        }
        if (!JSON.stringify(groupMembers).includes(sender)) return;
        sandro.groupParticipantsUpdate(from, [sender], "remove");
      }

      //======(ANTI-STICKER)========\\
      if (isAntiSticker && isBotGroupAdmins && type == "stickerMessage") {
        if (info.key.fromMe) return;
        if (isGroupAdmins)
          return sandro.sendMessage(from, { text: "👀" }, { quoted: info });
        sandro.sendMessage(
          from,
          {
            text: "🤺_𝘼𝙦𝙪𝙞 𝙣𝙖𝙤 𝙥𝙤𝙙𝙚 𝙢𝙖𝙣𝙙𝙖𝙧 ~(𝗙𝗜𝗚𝗨𝗥𝗜𝗡𝗛𝗔)~ 𝙣𝙖𝙤 𝙡𝙚𝙪 𝙖?? 𝙍𝙚𝙜𝙧𝙖𝙨 🤔",
          },
          { quoted: info },
        );
        if (IS_DELETE) {
          setTimeout(() => {
            sandro.sendMessage(from, {
              delete: {
                remoteJid: from,
                fromMe: false,
                id: info.key.id,
                participant: sender,
              },
            });
          }, 500);
        }
        if (!JSON.stringify(groupMembers).includes(sender)) return;
        sandro.groupParticipantsUpdate(from, [sender], "remove");
      }

      if (
        Antidoc &&
        isBotGroupAdmins &&
        !isGroupAdmins &&
        type == "documentMessage"
      ) {
        if (info.key.fromMe) return;
        if (dataGp[0].legenda_documento != "0") {
          sandro.sendMessage(
            from,
            { text: dataGp[0].legenda_documento },
            { quoted: info },
          );
        }
        if (IS_DELETE) {
          setTimeout(() => {
            sandro.sendMessage(from, {
              delete: {
                remoteJid: from,
                fromMe: false,
                id: info.key.id,
                participant: sender,
              },
            });
          }, 500);
        }
        if (!JSON.stringify(groupMembers).includes(sender)) return;
        sandro.groupParticipantsUpdate(from, [sender], "remove");
      }

      let isTrueFalse = [
        "tiktok",
        "face_audio",
        "tiktok_audio",
        "facebook",
        "instagram",
        "insta_audio",
        "twitter",
        "twitter_audio",
        "ytmp3",
        "ytmp4",
        "play",
        "play_audio",
        "play_video",
        "play",
      ].some((item) => item === command);

      if (
        isUrl(Procurar_String) &&
        isAntiLinkHard &&
        !isGroupAdmins &&
        isBotGroupAdmins &&
        !info.key.fromMe &&
        !isTrueFalse
      ) {
        if (Procurar_String.includes("chat.whatsapp.com")) {
          var link_dgp = await sandro?.groupInviteCode(from);
          if (
            link_dgp &&
            Procurar_String.match(link_dgp) &&
            Procurar_String.split(" ").filter(
              (x) => x === "https://chat.whatsapp.com/",
            ).length < 2
          ) {
            return reply(
              "𝙇𝙞𝙣𝙠 𝙙𝙤 𝙣𝙤𝙨𝙨𝙤 𝙜𝙧𝙪𝙥𝙤, 𝙣𝙖̃𝙤 𝙞𝙧𝙚𝙞 𝙧𝙚𝙢𝙤𝙫𝙚𝙧... 𝙈𝙖𝙞𝙨 𝙩𝙖𝙧𝙙𝙚 𝙢𝙖𝙣𝙙𝙖 𝙛𝙤𝙩𝙤 𝙙𝙖 𝙧𝙖𝙗𝙖 𝙣𝙤 𝙥𝙫 𝙙𝙤 𝙗𝙤𝙩 𝙚 𝙛𝙞𝙘𝙖𝙧𝙚𝙢𝙤𝙨 𝙠𝙞𝙩𝙨 😏",
            );
          }
        }

        var groupMemberIds = new Set(groupMembers.map((i) => i.id));

        if (groupMemberIds.has(sender)) {
          if (!dataGp[0]?.advlink) {
            if (
              TEXTOS_GERAL?.TEXTO_REMOCAO_ANTI_LINK &&
              TEXTOS_GERAL?.TEXTO_REMOCAO_ANTI_LINK !== "0"
            ) {
              sandro.sendMessage(from, {
                text: TEXTOS_GERAL?.TEXTO_REMOCAO_ANTI_LINK.replaceAll(
                  "#usuario#",
                  "@" + sender.split("@")[0],
                ),
                mentions: [sender],
              });
            }
            sandro.groupParticipantsUpdate(from, [sender], "remove");
          } else {
            if (Advt_Link === false) {
              dataGp[0].advtlink = [{ id: sender, adv: 1 }];
              setGp(dataGp);
            } else if (Advt_Link === null) {
              dataGp[0].advtlink.push({ id: sender, adv: 1 });
              setGp(dataGp);
            } else {
              dataGp[0].advtlink.find((i) => i.id === sender).adv += 1;
              setGp(dataGp);
            }
            if (Advt_Link > 1) {
              reply(
                "Ei fdp, você completou 3 advertencias, enviando 3 links de grupo, então irei te passar a faca, sinto muito 😿 Só que não 😝",
              );
              dataGp[0].advtlink.splice(
                dataGp[0].advtlink.findIndex((i) => i.id === sender),
                1,
              );
              setGp(dataGp);
              return sandro.groupParticipantsUpdate(from, [sender], "remove");
            }
            if (Advt_Link !== false) {
              reply(
                `Ou fdp, você enviou um link, e então foi advertido em ${dataGp[0].advtlink.find((i) => i.id === sender)?.adv || 0
                }/3, não envie mais, pois se enviar vou acabar te passando a faca 😏`,
              );
            }
          }
        }

        OSINF_K.push(info.key.id);
        sandro.groupSettingUpdate(from, "announcement");
        setTimeout(() => {
          sandro.groupSettingUpdate(from, "not_announcement");
        }, 1500);

        setTimeout(async () => {
          for (var i of OSINF_K) {
            sandro.sendMessage(from, {
              delete: {
                remoteJid: from,
                fromMe: false,
                id: i,
                participant: sender,
              },
            });
            OSINF_K = [];
          }
        }, 500);
      }

      //FINALZIN ==============================>

      //======(ANTI-VIDEO)========\\

      if (
        isAntiVid &&
        isBotGroupAdmins &&
        !isGroupAdmins &&
        type == "videoMessage"
      ) {
        if (info.key.fromMe) return;
        if (isGroupAdmins)
          return sandro.sendMessage(from, { text: "👀" }, { quoted: info });
        sandro.sendMessage(
          from,
          {
            text: "🤺_𝘼𝙦𝙪𝙞 𝙣𝙖𝙤 𝙥𝙤𝙙𝙚 𝙢𝙖𝙣𝙙𝙖𝙧 ~(𝗩𝗜́𝗗𝗘𝗢)~ 𝙍𝙚𝙩𝙖𝙧𝙙𝙖𝙙𝙤 𝙣𝙖𝙤 𝙡𝙚𝙪 𝙖𝙨 𝙍𝙚𝙜𝙧𝙖𝙨❗",
          },
          { quoted: info },
        );
        if (IS_DELETE) {
          setTimeout(() => {
            sandro.sendMessage(from, {
              delete: {
                remoteJid: from,
                fromMe: false,
                id: info.key.id,
                participant: sender,
              },
            });
          }, 500);
        }
        if (!JSON.stringify(groupMembers).includes(sender)) return;
        sandro.groupParticipantsUpdate(from, [sender], "remove");
      }

      //======(ANTI-AUDIO)=======\\
      if (
        isAntiAudio &&
        isBotGroupAdmins &&
        !isGroupAdmins &&
        type == "audioMessage"
      ) {
        if (info.key.fromMe) return;
        if (isGroupAdmins)
          return sandro.sendMessage(from, { text: "👀" }, { quoted: info });
        sandro.sendMessage(
          from,
          {
            text: "🤺_𝘼𝙦𝙪𝙞 𝙣𝙖𝙤 𝙥𝙤𝙙𝙚 𝙢𝙖𝙣𝙙𝙖𝙧 ~(𝗔𝗨𝗗𝗜𝗢)~ 𝙍𝙚𝙩𝙖𝙧𝙙𝙖𝙙𝙤 𝙣𝙖𝙤 𝙡𝙚𝙪 𝙖𝙨 𝙍𝙚𝙜𝙧𝙖𝙨❗",
          },
          { quoted: info },
        );
        if (IS_DELETE) {
          setTimeout(() => {
            sandro.sendMessage(from, {
              delete: {
                remoteJid: from,
                fromMe: false,
                id: info.key.id,
                participant: sender,
              },
            });
          }, 500);
        }
        if (!JSON.stringify(groupMembers).includes(sender)) return;
        sandro.groupParticipantsUpdate(from, [sender], "remove");
      }

      //========(ANTI-PV-QUE-BLOQUEIA)======\\
      // Comandos de registro são permitidos mesmo com antipv ativo
      const _cmdRegistro = ["registrar", "registro", "cadastrar", "cancelar"];
      const _isRegistroCmd = isCmd && _cmdRegistro.includes(command);
      // Usuário no meio do fluxo de registro (respondendo perguntas)
      const _isRegistrando = !isGroup && getRegistroState(sender) !== null;
      const _isAluguelFlow = !isGroup && getAluguelState(sender) !== null;

      var BLC_CL = [];
      if (isAntiPv && !BLC_CL.includes(sender)) {
        if (
          !isGroup &&
          !SoDono &&
          !isnit &&
          !isPremium &&
          !_isRegistroCmd &&
          !_isRegistrando &&
          !_isAluguelFlow
        ) {
          await sleep(2500);
          reply(msgantipv1);
          setTimeout(async () => {
            sandro.updateBlockStatus(sender, "block");
          }, 2000);
          return;
        }
        BLC_CL.push(sender);
      }

      //======================================\\

      function sendAlert() {
        var hora_ = moment.tz("America/Sao_Paulo").format("HH:mm");
        var hora_2 = moment.tz("America/Sao_Paulo").format("mm");
        var dataAtual = moment.tz("America/Sao_Paulo").format("YYYY-MM-DD");

        var blu_dc = black_.some((i) => i.hora === hora_);
        if (blu_dc) {
          let ik = black_.find((i) => i.hora === hora_);
          for (let i of ik?.PUXAR) {
            if (i.avisou === dataAtual) return;
            if (i.length === 0) return;
            sandro.sendMessage(i.idgp, { text: i.msg });
            i.avisou = dataAtual;
            fs.writeFileSync(
              "./data/global/AVISOS.json",
              JSON.stringify(black_, null, 2),
            );
          }
        }

        var ik_r = black_.some(
          (i) => hora_2 >= parseInt(i.hora.split(":")[1]) + 1,
        );
        if (ik_r) {
          let ik2 = black_.find(
            (i) => hora_2 >= parseInt(i.hora.split(":")[1]) + 1,
          );
          for (let i of ik2.PUXAR) {
            if (i.avisou && i.avisou !== dataAtual) {
              fs.writeFileSync(
                "./data/global/AVISOS.json",
                JSON.stringify(black_, null, 2),
              );
            }
          }
        }
        setTimeout(sendAlert, 60000);
      }

      sendAlert();

      //=========(ANTIPV-QUE-SÓ-FALA)==========\\

      if (
        !isGroup &&
        !isPremium &&
        !SoDono &&
        !isnit &&
        !issupre &&
        !ischyt &&
        !info.key.fromMe &&
        isAntiPv2 &&
        !MSG_ANTPV2.includes(sender) &&
        !_isRegistroCmd &&
        !_isRegistrando &&
        !_isAluguelFlow
      ) {
        MSG_ANTPV2.push(sender);
        return reply(msgantipv2);
      }

      //======================================\\

      // ANTI PV QUE IGNORA
      if (
        !isGroup &&
        !isPremium &&
        !SoDono &&
        !info.key.fromMe &&
        isAntiPv3 &&
        !_isRegistroCmd &&
        !_isRegistrando &&
        !_isAluguelFlow
      ) {
        return;
      }

      // ANTI_LIGAR \\
      if (!isGroup && isAnticall && !BLC_ANTCL.includes(sender)) {
        sandro.ws.on("CB:call", async (B) => {
          if (B.content[0].tag == "offer") {
            sandro
              .sendMessage(B.content[0].attrs["call-creator"], {
                text: "_- 🫵🏻 Ô filho da puta não liga pro bot, tá vendo que é um robô 🤦🏻‍♂️ - _\n\n Tá carente caralho, vai ser bloqueado seu lixo desgraçado tmnc 🤬\n\n_- 🖕🏿🖕🏿🖕🏿🖕🏿🖕🏿🖕🏿 _-",
              })
              .then(() => {
                sandro.updateBlockStatus(
                  B.content[0].attrs["call-creator"],
                  "block",
                );
              });
          }
        });
        BLC_ANTCL.push(sender);
      }

      //======================================\\ ANTNMSCVRS

      // X9 Visualização Única - Apenas em grupos
      if (isGroup && isX9VisuUnica) {
        if (
          info.message?.viewOnceMessageV2 ||
          info.message?.viewOnceMessage ||
          type === "viewOnceMessage" ||
          type === "viewOnceMessageV2"
        ) {
          try {
            var Fl = info?.message;
            var Dfn =
              Fl?.viewOnceMessage?.message?.imageMessage ||
              Fl?.viewOnceMessageV2?.message?.imageMessage ||
              Fl?.viewOnceMessage?.message?.videoMessage ||
              Fl?.viewOnceMessageV2?.message?.videoMessage;

            if (!Dfn) {
              console.log("[X9 VisuUnica] Mensagem viewOnce não encontrada");
            } else {
              console.log("[X9 VisuUnica] Processando visualização única...");

              // Determinar tipo de mídia
              const mediaType = Dfn.mimetype?.split("/")[0] || "image";
              console.log("[X9 VisuUnica] Tipo de mídia:", mediaType);

              // Usar downloadContentFromMessage do Baileys
              const stream = await downloadContentFromMessage(Dfn, mediaType);

              let buffer = Buffer.from([]);
              for await (const chunk of stream) {
                buffer = Buffer.concat([buffer, chunk]);
              }

              console.log("[X9 VisuUnica] Download completo, enviando...");

              // Enviar a mídia revelada
              await sandro.sendMessage(from, {
                [mediaType]: buffer,
                mimetype: Dfn.mimetype,
                caption: Dfn?.caption
                  ? `🔓 *Visualização Única Revelada*\n\n📝 Legenda: ${Dfn.caption}\n\n😏 Tu queria mandar isso em visu-única... se fudeu! 🖕🏿😝`
                  : "🔓 *Visualização Única Revelada*\n\n😏 Tu queria mandar isso em visu-única... se fudeu! 🖕🏿😝",
              });

              console.log("[X9 VisuUnica] Enviado com sucesso!");
            }
          } catch (error) {
            console.error("[X9 VisuUnica] Erro ao processar:", error);
            reply("❌ Erro ao revelar visualização única.");
          }
        }
      }

      /////\\\\\\//////\\\\\\////\\\\////\\\///\\\///\\\\

      if (isBanned) return;

      var palavrasfr = JSON.parse(
        fs.readFileSync("./data/global/palavras_forca.json"),
      );

      var palavrasfrc =
        palavrasfr[Math.floor(Math.random() * palavrasfr.length)];

      var ALT_FR = palavrasfrc?.plvr
        .toLowerCase()
        .normalize("NFD")
        .replace(/[̀-ͯ]/g, "");

      async function rv_forca() {
        var blue = [];
        for (var i = 0; i < ALT_FR.length; i++) {
          if (ALT_FR[i] == " ") {
            blue.push(" ");
          } else {
            blue.push("_");
          }
        }
        dataGp[0].forca_ofc = [
          {
            acertos: 0,
            erros: 0,
            palavra: blue,
            escreveu: [],
            palavra_ofc: ALT_FR,
            dica: palavrasfrc.dica,
            tema: palavrasfrc.tema,
          },
        ];
        dataGp[0].forca_inc = false;
        setGp(dataGp);
      }

      if (
        isGroup &&
        (nescessario?.isRecolherLink || isRecolherlinksgp) &&
        budy.includes("https://chat.whatsapp.com")
      ) {
        var L_WTS = "https://chat.whatsapp.com/";

        for (var i = 1; i < body.split(L_WTS).length; i++) {
          if (
            !JSON.stringify(recolherLNK.map((i) => i.Link)).includes(
              L_WTS + body.split(L_WTS)[i].slice(0, 22),
            )
          )
            recolherLNK.push({
              Link: L_WTS + body.split(L_WTS)[i].slice(0, 22),
            });
        }
        fs.writeFileSync(
          "./data/org/funcoes/recolherLNK.json",
          JSON.stringify(recolherLNK, null, 2),
        );
      }

      if (!isPremium && nescessario.cmdpremium.includes(command))
        return reply(`Este comando é apenas para
usuário premium, se deseja adquirir, fale com meu dono:
https://wa.me/${numerodono_ofc}`);

      // PRA LIMPAR DO CONTADOR QUEM NÃO ESTÁ NO GRUPO
      async function LIMPARDOCNT_QUEMJASAIU() {
        var RD_CNT =
          countMessage[countMessage.map((i) => i.groupId).indexOf(from)]
            .numbers;
        CNT1 = [];
        for (i of groupMembers) {
          CNT1.push(i.id);
        }
        CNT = [];
        for (i of RD_CNT) {
          if (!CNT1.includes(i.id)) CNT.push(i);
        }
        for (i of CNT) {
          RD_CNT.splice(RD_CNT.map((i) => i.id).indexOf(i.id), 1);
        }
        fs.writeFileSync(
          "./data/countmsg.json",
          JSON.stringify(countMessage, null, 2),
        );

        if (IS_sistemGold) {
          let BLUE = [];
          rggold[ID_G_GOLD].usus.map((ab) => {
            if (!groupMembers.map((i) => i.id).includes(ab.id))
              BLUE.push(ab.id);
          });

          BLUE.forEach(function (a) {
            rggold[ID_G_GOLD].usus.splice(
              rggold[ID_G_GOLD].usus.findIndex((i) => i.id === a),
              1,
            );
          });
          Goldrgs(rggold);
        }
      }

      // Verificação de aluguel removida: movida para o scheduler em dados/org/funcoes/aluguel.js

      if (
        isGroup &&
        isCmd &&
        !isGroupAdmins &&
        !SoDono &&
        !isPremium &&
        dataGp[0]?.Limitar_CMD
      ) {
        var TEMPO_A = Math.floor(Date.now() / 1000);

        var ID_G = Limit_CMD.findIndex((i) => i.idgp === from);
        var ID_U = Limit_CMD[ID_G]?.ids.findIndex((i) => i.id === sender);

        if (
          !JSON.stringify(Limit_CMD).includes(from) ||
          (ID_G < 0 && ID_U < 0)
        ) {
          Limit_CMD.push({ idgp: from, ids: [{ id: sender, tempo: TEMPO_A }] });
          fs.writeFileSync(
            "./data/global/limitarcmd.json",
            JSON.stringify(Limit_CMD, null, 2),
          );
        } else if (ID_G >= 0 && ID_U < 0) {
          Limit_CMD[ID_G].ids.push({ id: sender, tempo: TEMPO_A });
          fs.writeFileSync(
            "./data/global/limitarcmd.json",
            JSON.stringify(Limit_CMD, null, 2),
          );
        }

        if (ID_G >= 0 && ID_U >= 0) {
          var TEMPO_D = Limit_CMD[ID_G].ids[ID_U].tempo;

          var TEMPO_M = TEMPO_A - TEMPO_D;

          var TEMPO_D2 = parseInt(dataGp[0]?.Limit_tempo) || 60;

          if (TEMPO_M < TEMPO_D2) {
            return reply(
              nescessario.TEMPO_DE_CMD.replaceAll(
                "#tempocmd#",
                kyun(TEMPO_M),
              ).replaceAll("#tempo#", TEMPO_D2),
            );
          } else {
            Limit_CMD[ID_G].ids[ID_U].tempo = TEMPO_A;
            fs.writeFileSync(
              "./data/global/limitarcmd.json",
              JSON.stringify(Limit_CMD, null, 2),
            );
          }
        }
      }

      if (
        IS_sistemGold &&
        !info.key.fromMe &&
        isGroup &&
        isBotGroupAdmins &&
        isCmd &&
        dataGp[0]?.comandos_gold?.length >= 1 &&
        dataGp[0].comandos_gold.some((i) => i.comando === command)
      ) {
        var Df_C =
          dataGp[0].comandos_gold[
          dataGp[0].comandos_gold.findIndex((i) => i.comando === command)
          ];
        if (S_Sistema.RS(sender, "Golds") < Df_C.gold)
          return reply(
            "Você não tem Golds suficiente para utilizar este comando 🥱",
          );
        setTimeout(() => {
          S_Sistema.RM(sender, Df_C.gold);

          mention(
            `${tempo} @${sender2} após o uso do comando ${Df_C.comando
            } foi consumido ${Df_C.gold} Golds dos seus > ${parseInt(S_Sistema.RS(sender, "Golds")) + parseInt(Df_C.gold)
            } Golds`,
          );
        }, 500);
      }

      if (
        premium.length > 0 &&
        premium.map(
          (tm_) => Math.floor(tm_.tempo) < Math.floor(Date.now() / 1000),
        )
      ) {
        premium.map((us) => {
          if (Math.floor(us.tempo) < Math.floor(Date.now() / 1000)) {
            premium.splice(premium.map((i) => i.usus).indexOf(us.usus), 1);
            sandro.sendMessage(nmrdn_dono2, {
              text: `Premium do usuário: wa.me/${us.usus.split("@")[0]
                }, expirou.`,
            });
          }
        });
        fs.writeFileSync(
          "./data/global/premium.json",
          JSON.stringify(premium, null, 2),
        );
      }

      const Os_Returns = (A, B, C) => {
        if (A && !isGroup) return { true: true, txt: Res_SoGrupo };
        if (B && !isGroupAdmins) return { true: true, txt: Res_SoAdm };
        if (C && !isBotGroupAdmins) return { true: true, txt: Res_BotADM };
        return { true: false };
      };

      // (Bloco duplicado de mute removido — gerenciado no bloco abaixo)

      // ═══════ INTERCEPTOR DE FLUXOS (State Machine) ═══════
      // IMPORTANTE: Roda ANTES do switch de comandos para capturar
      //             respostas de texto E comandos durante fluxos ativos
      if (!isGroup) {
        // ═══════ ANTI-FLOOD PV — DETECÇÃO DE FLOOD DE COMANDOS NO PRIVADO ═══════
        // Monitora apenas COMANDOS (não interfere com respostas de fluxos).
        // Dono e bot são isentos. SEGURANÇA: try-catch total.
        try {
          const _afIsBotMsg = info.key.fromMe || sender === botJid || sender === botLid;
          if (!SoDono && !_afIsBotMsg) {
            const _afKey = sender;
            const _afNow = Date.now();

            // Verificar se o usuário está bloqueado por flood
            const _afBlockedAt = _pvFloodBlocked.get(_afKey);
            if (_afBlockedAt && (_afNow - _afBlockedAt < PV_FLOOD_BLOCK_TIME)) {
              // Ainda bloqueado — ignorar silenciosamente
              if (isCmd) return;
              // Permitir respostas de texto (para fluxos ativos como registro)
            } else {
              if (_afBlockedAt) {
                // Bloqueio expirou — limpar
                _pvFloodBlocked.delete(_afKey);
                _pvFloodTracker.delete(_afKey);
              }

              // Rastrear apenas COMANDOS (mensagens com prefixo)
              if (isCmd) {
                if (!_pvFloodTracker.has(_afKey)) _pvFloodTracker.set(_afKey, []);
                const _afMsgs = _pvFloodTracker.get(_afKey);
                _afMsgs.push(_afNow);
                const _afRecent = _afMsgs.filter(t => _afNow - t < PV_FLOOD_WINDOW);
                _pvFloodTracker.set(_afKey, _afRecent);

                // FLOOD DETECTADO! (3 comandos em 10 segundos)
                if (_afRecent.length >= PV_FLOOD_LIMIT) {
                  _pvFloodTracker.set(_afKey, []);
                  _pvFloodBlocked.set(_afKey, _afNow);

                  try {
                    await sandro.sendMessage(from, {
                      text: `> ⚠️ *ANTI-FLOOD*\n\n> 🚫 Você enviou muitos comandos em poucos segundos!\n\n> 🔇 O bot ficará em modo espera por *1 minuto*.\n> ⏰ Tente novamente após esse período.\n\n> ❗ *Não faça flood no bot, caso continue, irei bloquear!*`,
                    });
                  } catch { }
                  return;
                }
              }
            }
          }
        } catch { }
        // ═══════════════ FIM ANTI-FLOOD PV ═══════════════

        const _senderNorm = normalizeJid(sender);
        const _donoJid = numerodono_ofc + "@s.whatsapp.net";

        // ── Anti-flood: cooldown de 30s para respostas de erro/aviso nos fluxos ──
        if (!global._flowCooldowns) global._flowCooldowns = new Map();
        const _FLOW_COOLDOWN_MS = 30000; // 30 segundos
        function _canReplyFlow(userId, flowType) {
          const key = `${userId}_${flowType}`;
          const last = global._flowCooldowns.get(key) || 0;
          if (Date.now() - last < _FLOW_COOLDOWN_MS) return false;
          global._flowCooldowns.set(key, Date.now());
          return true;
        }

        // ── INTERCEPTOR DE ALUGUEL ──
        // Tentar encontrar o estado: primeiro pelo sender, depois pelo JID do dono
        let _alugJid = null;
        let _alugState = getAluguelState(_senderNorm);
        if (_alugState) {
          _alugJid = _senderNorm;
        } else if (_senderNorm !== _donoJid) {
          _alugState = getAluguelState(_donoJid);
          if (_alugState) _alugJid = _donoJid;
        }
        // Também tentar com sender bruto se for diferente
        if (!_alugState && sender !== _senderNorm) {
          _alugState = getAluguelState(sender);
          if (_alugState) _alugJid = sender;
        }

        if (_alugState && SoDono) {
          const _bodyTrim = body.trim();
          const _bodyLower = _bodyTrim.toLowerCase();

          // Cancelamento - aceitar "cancelar", "!cancelar", "cancel"
          if (
            _bodyLower === "cancelar" ||
            _bodyLower === "cancel" ||
            (isCmd && command === "cancelar")
          ) {
            clearAluguelState(_alugJid);
            reply(
              "❌ Contrato cancelado com sucesso!\n\n💡 Use *!alugarbot* para iniciar um novo.",
            );
            return;
          }

          // Se é um comando (ex: !alugarbot, !menu), avisar que tá no fluxo
          if (isCmd) {
            if (_canReplyFlow(sender, "alug_cmd"))
              reply(
                `⚠️ Você está no meio de um *contrato de aluguel* (etapa: *${_alugState.step}*).\n\n💡 Responda à pergunta atual ou envie *cancelar* para sair do fluxo.`,
              );
            return;
          }

          // Processar resposta normal
          const resAlug = processarRespostaAluguel(_alugJid, _bodyTrim);
          if (resAlug.error) {
            // Resposta inválida - orientar o usuário (com cooldown anti-flood)
            if (_canReplyFlow(sender, "alug_err")) {
              if (resAlug.image) {
                try {
                  await sandro.sendMessage(from, {
                    image: { url: resAlug.image },
                    caption: resAlug.msg,
                  });
                } catch {
                  reply(resAlug.msg);
                }
              } else {
                reply(resAlug.msg);
              }
            }
            return;
          }
          if (resAlug.cancelled) {
            reply(resAlug.msg);
            return;
          }
          if (resAlug.done && resAlug.confirmed) {
            // Contrato confirmado! Registrar no sistema
            const d = resAlug.data;
            try {
              const contrato = adicionarContrato({
                id_gp: d.id_gp || "",
                nome_: d.nome_grupo,
                link: d.link_grupo || "",
                responsavel_nome: d.responsavel_nome,
                responsavel_contato: d.responsavel_contato,
                plano_dias: d.dias,
                valor: d.valor,
                cadastrado_por: `${pushname} (${sender.split("@")[0]})`,
              });

              const _contratoTxt = `│\n│  ✅ *CONTRATO REGISTRADO*\n├──────────────\n│\n${formatarContrato(contrato)}`;

              // Enviar confirmação com imagem
              try {
                await sandro.sendMessage(from, {
                  image: {
                    url: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&q=80",
                  },
                  caption: _contratoTxt,
                });
              } catch {
                reply(_contratoTxt);
              }

              // Avisar no grupo se tiver ID
              if (d.id_gp && d.id_gp.endsWith("@g.us")) {
                const dataVencF = moment
                  .unix(contrato.vencimento)
                  .tz("America/Sao_Paulo")
                  .format("DD/MM/YYYY [às] HH:mm");
                try {
                  await sandro.sendMessage(d.id_gp, {
                    image: {
                      url: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&q=80",
                    },
                    caption: `│\n│  ✅ *GRUPO ALUGADO!*\n├──────────────\n│\n│  🏘️ *${d.nome_grupo}*\n│  📆 Plano: ${d.dias} dia(s)\n│  📅 Vence: ${dataVencF}\n│\n│  🤖 Bot ativo *24h* neste grupo!\n│  📞 Dúvidas: wa.me/${numerodono_ofc}\n├──────────────\n│  🚀 _Bom uso!_`,
                  });
                } catch { }
              }
            } catch (e) {
              reply(`❌ Erro ao cadastrar: ${e.message}`);
            }
            return;
          }
          // Próximo prompt (com imagem)
          if (resAlug.image) {
            try {
              await sandro.sendMessage(from, {
                image: { url: resAlug.image },
                caption: resAlug.msg,
              });
            } catch {
              reply(resAlug.msg);
            }
          } else {
            reply(resAlug.msg);
          }
          return;
        }

        // ── INTERCEPTOR DE RENOVAÇÃO DE ALUGUEL ──
        let _renovJid = null;
        let _renovState = getRenovacaoState(_senderNorm);
        if (_renovState) {
          _renovJid = _senderNorm;
        } else if (_senderNorm !== _donoJid) {
          _renovState = getRenovacaoState(_donoJid);
          if (_renovState) _renovJid = _donoJid;
        }
        if (!_renovState && sender !== _senderNorm) {
          _renovState = getRenovacaoState(sender);
          if (_renovState) _renovJid = sender;
        }

        if (_renovState && SoDono) {
          const _bodyTrim = body.trim();
          const _bodyLower = _bodyTrim.toLowerCase();

          // Cancelamento
          if (
            _bodyLower === "cancelar" ||
            _bodyLower === "cancel" ||
            (isCmd && command === "cancelar")
          ) {
            clearRenovacaoState(_renovJid);
            reply(
              "❌ Renovação cancelada!\n\n💡 Use *!renovaraluguel* para iniciar novamente.",
            );
            return;
          }

          // Se é um comando, avisar que tá no fluxo
          if (isCmd) {
            if (_canReplyFlow(sender, "renov_cmd"))
              reply(
                `⚠️ Você está no meio de uma *renovação de contrato* (etapa: *${_renovState.step}*).\n\n💡 Responda à pergunta atual ou envie *cancelar* para sair do fluxo.`,
              );
            return;
          }

          // Processar resposta
          const resRenov = processarRespostaRenovacao(_renovJid, _bodyTrim);
          if (resRenov.error) {
            if (_canReplyFlow(sender, "renov_err")) {
              if (resRenov.image) {
                try {
                  await sandro.sendMessage(from, {
                    image: { url: resRenov.image },
                    caption: resRenov.msg,
                  });
                } catch {
                  reply(resRenov.msg);
                }
              } else {
                reply(resRenov.msg);
              }
            }
            return;
          }
          if (resRenov.cancelled) {
            reply(resRenov.msg);
            return;
          }
          if (resRenov.done && resRenov.confirmed) {
            // Renovação confirmada! Aplicar
            const rd = resRenov.data;
            try {
              const renovado = renovarContrato(rd.id_gp, rd.dias_renovar);
              if (!renovado) {
                reply(
                  `❌ Contrato não encontrado para o grupo *${rd.nome_grupo}*.\n\nO contrato pode ter sido encerrado.`,
                );
                return;
              }

              // Atualizar valor ANTES de exibir (fix: mostrava valor antigo)
              if (rd.valor_novo && rd.valor_novo !== rd.valor_atual) {
                renovado.valor = rd.valor_novo;
                const lista = getAluguel();
                const idx = lista.findIndex((c) => c.id_gp === rd.id_gp);
                if (idx >= 0) {
                  lista[idx].valor = rd.valor_novo;
                  const {
                    setAluguel,
                  } = require("./data/org/funcoes/aluguel.js");
                  setAluguel(lista);
                }
              }

              const _renovTxt = `│\n│  ✅ *CONTRATO RENOVADO*\n├──────────────\n│\n${formatarContrato(renovado)}`;

              try {
                await sandro.sendMessage(from, {
                  image: {
                    url: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&q=80",
                  },
                  caption: _renovTxt,
                });
              } catch {
                reply(_renovTxt);
              }

              // Avisar no grupo
              if (rd.id_gp && rd.id_gp.endsWith("@g.us")) {
                const moment = require("moment-timezone");
                const dataVencR = moment
                  .unix(renovado.vencimento)
                  .tz("America/Sao_Paulo")
                  .format("DD/MM/YYYY [às] HH:mm");
                try {
                  await sandro.sendMessage(rd.id_gp, {
                    text: `│\n│  🔄 *CONTRATO RENOVADO*\n├──────────────\n│\n│  🏘️ *${rd.nome_grupo}*\n│  📆 +${rd.dias_renovar} dia(s) adicionados\n│  📅 Novo vencimento: ${dataVencR}\n│  💰 Valor: ${rd.valor_novo || renovado.valor}\n│\n├──────────────\n│  🚀 _Bot continuará ativo!_`,
                  });
                } catch { }
              }
            } catch (e) {
              reply(`❌ Erro ao renovar: ${e.message}`);
            }
            return;
          }
          // Próximo prompt (com imagem)
          if (resRenov.image) {
            try {
              await sandro.sendMessage(from, {
                image: { url: resRenov.image },
                caption: resRenov.msg,
              });
            } catch {
              reply(resRenov.msg);
            }
          } else {
            reply(resRenov.msg);
          }
          return;
        }

        // ── INTERCEPTOR DE REGISTRO ──
        // Tentar encontrar estado: primeiro pelo sender normalizado, depois pelo bruto
        let _regJid = null;
        let _regState = getRegistroState(_senderNorm);
        if (_regState) {
          _regJid = _senderNorm;
        }
        if (!_regState && sender !== _senderNorm) {
          _regState = getRegistroState(sender);
          if (_regState) _regJid = sender;
        }
        if (_regState) {
          const _bodyTrim = body.trim();
          const _bodyLower = _bodyTrim.toLowerCase();

          // Cancelamento - aceitar "cancelar", "!cancelar", "cancel"
          if (
            _bodyLower === "cancelar" ||
            _bodyLower === "cancel" ||
            (isCmd && command === "cancelar")
          ) {
            clearRegistroState(_senderNorm);
            clearRegistroState(sender);
            reply(
              "❌ Registro cancelado com sucesso!\n\n💡 Use *!registrar* para recomeçar.",
            );
            return;
          }

          // SAFETY-NET: Se o estado é "confirmar_atualizacao" mas o usuário já tem
          // registro completo no banco, significa que o estado é stale (bug de JID).
          // Auto-limpar e deixar o comando passar normalmente.
          if (
            (_regState.step === "confirmar_atualizacao" ||
              _regState.step === "confirmar_exclusao") &&
            isCmd
          ) {
            const _userJaRegistrado = getUser(sender) || getUser(_senderNorm);
            if (_userJaRegistrado) {
              // Estado stale — limpar todos os JIDs e deixar o comando passar
              clearRegistroState(_senderNorm);
              clearRegistroState(sender);
              if (_regJid && _regJid !== _senderNorm && _regJid !== sender) {
                clearRegistroState(_regJid);
              }
              // NÃO retornar — deixar o comando ser processado normalmente
            } else {
              // Realmente no meio da confirmação com um comando
              if (_canReplyFlow(sender, "reg_confirmar"))
                reply(`⚠️ Responda *sim* ou *não*.`);
              return;
            }
          } else if (isCmd) {
            // Se é um comando durante o fluxo (em outra etapa), avisar
            if (_canReplyFlow(sender, "reg_cmd"))
              reply(
                `⚠️ Você está no meio do *registro* (etapa: *${_regState.step}*).\n\n💡 Responda à pergunta atual ou envie *cancelar* para sair do fluxo.`,
              );
            return;
          }

          // Verificar se é resposta "sim" ou "não" para atualização
          if (_regState.step === "confirmar_atualizacao") {
            if (_bodyLower === "sim" || _bodyLower === "s") {
              // Verificar se alguém já está registrando
              try {
                if (_contarRegistrandoAtivos(sender) >= MAX_REGISTROS_SIMULTANEOS) {
                  try { reply(`> ⏳ *Aguarde um momento!*\n\n> Já existem várias pessoas se cadastrando no bot neste momento.\n\n> 💡 Tente novamente em alguns minutos!\n> _O cadastro leva menos de 2 minutos._`); } catch { }
                  clearRegistroState(_senderNorm);
                  clearRegistroState(sender);
                  return;
                }
              } catch { }
              // Limpar TODOS os JIDs antes de iniciar novo fluxo
              clearRegistroState(_senderNorm);
              clearRegistroState(sender);
              const resIntro = startRegistro(_senderNorm);
              if (resIntro.image) {
                try {
                  await sandro.sendMessage(from, {
                    image: { url: resIntro.image },
                    caption: resIntro.text || resIntro.msg,
                  });
                } catch {
                  reply(resIntro.text || resIntro.msg);
                }
              } else {
                reply(resIntro.msg || resIntro.text);
              }
              return;
            } else if (
              _bodyLower === "não" ||
              _bodyLower === "nao" ||
              _bodyLower === "n"
            ) {
              clearRegistroState(_senderNorm);
              clearRegistroState(sender);
              reply("✅ Ok, seus dados foram mantidos!");
              return;
            } else {
              if (_canReplyFlow(sender, "reg_simNao"))
                reply(
                  "💡 Responda *sim* para atualizar seus dados ou *não* para manter.",
                );
              return;
            }
          }

          // Confirmar exclusão do registro (!delregistro)
          if (_regState.step === "confirmar_exclusao") {
            if (_bodyLower === "sim" || _bodyLower === "s") {
              clearRegistroState(_senderNorm);
              clearRegistroState(sender);
              const { deleteUser } = require("./data/org/funcoes/registro.js");
              deleteUser(sender);
              deleteUser(_senderNorm);
              reply(
                `✅ *Registro apagado com sucesso!*\n\n🔄 Caso queira se registrar novamente, use *${prefix}registrar*`,
              );
              return;
            } else if (
              _bodyLower === "não" ||
              _bodyLower === "nao" ||
              _bodyLower === "n"
            ) {
              clearRegistroState(_senderNorm);
              clearRegistroState(sender);
              reply("✅ Ok, seu registro foi *mantido*!");
              return;
            } else {
              if (_canReplyFlow(sender, "reg_delConfirm"))
                reply("📌 Responda apenas *sim* ou *não*.");
              return;
            }
          }

          // Processar resposta do fluxo normal
          const resultado = processarResposta(_regJid, _bodyTrim);
          if (resultado.error) {
            if (_canReplyFlow(sender, "reg_err")) reply(resultado.msg);
            return;
          }
          if (resultado.completed) {
            // LIMPAR TODOS os estados residuais (evitar bugs)
            clearRegistroState(_senderNorm);
            clearRegistroState(sender);
            if (_regJid && _regJid !== _senderNorm && _regJid !== sender) {
              clearRegistroState(_regJid);
            }

            // Registro finalizado — mostrar perfil completo
            const userData = resultado.userData;
            // Salvar número de telefone real (senderAlt contém o PN quando sender é LID)
            try {
              const _phoneJid = senderAlt && senderAlt.split("@")[0].length <= 15
                ? senderAlt.split("@")[0]
                : sender.split("@")[0].length <= 15
                  ? sender.split("@")[0]
                  : null;
              if (_phoneJid) {
                userData.telefone = _phoneJid;
                const { setUser } = require("./data/org/funcoes/registro.js");
                setUser(_regJid || _senderNorm || sender, userData);
              }
            } catch { }
            const numero = userData.telefone || sender.split("@")[0];
            const perfilTxt = gerarPerfil(userData, numero, pushname);
            const msgFinal = `✅ *REGISTRO CONCLUÍDO COM SUCESSO!* 🎉\n\n${perfilTxt}\n\n💡 Use *${prefix}perfil* para ver suas informações.\n🔄 Use *${prefix}registrar* para atualizar dados.\n🗑️ Use *${prefix}delregistro* para apagar seu registro.`;

            // Tentar pegar foto de perfil
            let ppRegUrl;
            try {
              ppRegUrl = await sandro.profilePictureUrl(sender, "image");
            } catch {
              const avatarFile =
                userData.sexo === "Feminino"
                  ? "./data/org/media/avatar_feminino.png"
                  : "./data/org/media/avatar_masculino.png";
              ppRegUrl = avatarFile;
            }
            const regImgPayload = ppRegUrl.startsWith("./")
              ? { image: require("fs").readFileSync(ppRegUrl) }
              : { image: { url: ppRegUrl } };
            sandro.sendMessage(
              from,
              {
                ...regImgPayload,
                caption: msgFinal,
                mentions: [sender],
              },
              { quoted: info },
            );
            return;
          }
          // Próximo passo (com suporte a imagem)
          if (resultado.image) {
            try {
              await sandro.sendMessage(from, {
                image: { url: resultado.image },
                caption: resultado.msg,
              });
            } catch {
              reply(resultado.msg);
            }
          } else {
            reply(resultado.msg);
          }
          return;
        }
      }
      // ═══════════════════════════════════════════════════════
      // ═══════ SISTEMA ANTI-SPAM — DETECÇÃO DE FLOOD ═══════
      if (isGroup && !SoDono && !isGroupAdmins) {
        try {
          // Verificar se antispam está ativo neste grupo
          let _asAtivo = false;
          try {
            const _asGpFile = `./data/grupos/${from}.json`;
            if (fs.existsSync(_asGpFile)) {
              const _asGp = JSON.parse(fs.readFileSync(_asGpFile, "utf8"));
              if (Array.isArray(_asGp) && _asGp[0])
                _asAtivo = _asGp[0].antispam === true;
            }
          } catch { }

          if (_asAtivo) {
            const _asKey = `${from}_${sender}`;
            const _asNow = Date.now();
            const _asWindow = 8000; // 8 segundos
            const _asLimit = 6; // 6 mensagens

            // Rastrear mensagens
            if (!_antiSpamTracker.has(_asKey)) _antiSpamTracker.set(_asKey, []);
            const _asMsgs = _antiSpamTracker.get(_asKey);
            _asMsgs.push(_asNow);
            // Manter apenas msgs dentro da janela
            const _asRecent = _asMsgs.filter((t) => _asNow - t < _asWindow);
            _antiSpamTracker.set(_asKey, _asRecent);

            if (_asRecent.length >= _asLimit) {
              // FLOOD DETECTADO!
              _antiSpamTracker.set(_asKey, []); // resetar contador

              // Resolver LID
              let _asJid = sender;
              if (groupMembers && groupMembers.length > 0) {
                const _asNum = extractNumber(sender);
                const _asF = groupMembers.find(
                  (gm) =>
                    extractNumber(typeof gm.id === "string" ? gm.id : "") ===
                    _asNum,
                );
                if (_asF && _asF.id)
                  _asJid = _asF.id.includes(":")
                    ? _asF.id.split(":")[0] + "@s.whatsapp.net"
                    : _asF.id;
              }
              const _asDisplay = extractNumber(_asJid);

              // Aplicar advertência NO SISTEMA PRINCIPAL (mesmo do !adv e mute flood)
              const _asWarnCount = addWarning(
                from,
                sender,
                "Flood (anti-spam)",
              );

              // Buscar ADMs do grupo para mencionar
              let _asAdmMentions = [];
              try {
                const _asGpMeta = await sandro.groupMetadata(from);
                _asAdmMentions = _asGpMeta.participants
                  .filter((p) => p.admin)
                  .map((p) => p.id);
              } catch { }

              if (_asWarnCount >= 3) {
                // BAN
                try {
                  await sandro.sendMessage(from, {
                    text: `🚫 @${_asDisplay} *BANIDO POR SPAM*\n⚠️ 3/3 advertências\n\n📢 ADMs notificados`,
                    mentions: [_asJid, ..._asAdmMentions],
                  });
                  await sandro.groupParticipantsUpdate(from, [sender], "remove");
                  clearUserWarnings(from, sender);
                } catch { }
              } else {
                // Advertência
                try {
                  await sandro.sendMessage(from, {
                    text: `⚠️ *ANTI-SPAM* — @${_asDisplay}\n🚨 Advertência *${_asWarnCount}/3* por flood\n${_asWarnCount >= 2 ? "🚫 Próxima = *BAN AUTOMÁTICO*" : "⚠️ Reduza o ritmo das mensagens"}\n\n📢 ADMs notificados`,
                    mentions: [_asJid, ..._asAdmMentions],
                  });
                } catch { }
              }
            }
          }
        } catch { }
      }
      // ═══════════════ FIM ANTI-SPAM ═══════════════

      // ═══════ SISTEMA DE MUTE — AUTO-DELETE + FLOOD DETECTION ═══════
      if (isGroup && !SoDono && !isGroupAdmins) {
        try {
          if (isMuted(from, sender)) {
            // Throttle: evitar rate-overlimit (1 delete por segundo por user)
            const _throttleKey = `${from}_${sender}`;
            const _lastDel = _muteDeleteThrottle.get(_throttleKey) || 0;
            const _now = Date.now();
            if (_now - _lastDel < 1000) {
              return; // muito rapido, ignora silenciosamente
            }
            _muteDeleteThrottle.set(_throttleKey, _now);

            // React com emoji engraçado
            const _muteEmojis = [
              "🤫",
              "🤐",
              "🔇",
              "🚧",
              "🤡",
              "💀",
              "😶",
              "🙊",
              "👋",
              "🫣",
            ];
            const _muteReact =
              _muteEmojis[Math.floor(Math.random() * _muteEmojis.length)];
            try {
              await sandro.sendMessage(from, {
                react: { text: _muteReact, key: info.key },
              });
            } catch { }

            // Deletar a mensagem
            try {
              await sandro.sendMessage(from, { delete: info.key });
            } catch (delErr) {
              // Rate-limit: tentar novamente após 2s
              if (delErr?.message?.includes("rate")) {
                setTimeout(async () => {
                  try {
                    await sandro.sendMessage(from, { delete: info.key });
                  } catch { }
                }, 2000);
              }
            }

            // Incrementar contador
            incrementDeletedMessages(from, sender);

            // ══ FLOOD DETECTION: 10+ msgs em 15s → advertência (usa sistema principal) ══
            const _mfKey = `muteflood_${from}_${sender}`;
            const _mfNow = Date.now();
            const _mfWindow = 15000; // 15 segundos
            const _mfLimit = 10;

            if (!_antiSpamTracker.has(_mfKey)) _antiSpamTracker.set(_mfKey, []);
            const _mfMsgs = _antiSpamTracker.get(_mfKey);
            _mfMsgs.push(_mfNow);
            const _mfRecent = _mfMsgs.filter((t) => _mfNow - t < _mfWindow);
            _antiSpamTracker.set(_mfKey, _mfRecent);

            if (_mfRecent.length >= _mfLimit) {
              _antiSpamTracker.set(_mfKey, []); // resetar

              // Resolver LID para menção correta
              let _floodJid = sender;
              if (groupMembers && groupMembers.length > 0) {
                const _fNum = extractNumber(sender);
                const _fFound = groupMembers.find(
                  (gm) =>
                    extractNumber(typeof gm.id === "string" ? gm.id : "") ===
                    _fNum,
                );
                if (_fFound && _fFound.id)
                  _floodJid = _fFound.id.includes(":")
                    ? _fFound.id.split(":")[0] + "@s.whatsapp.net"
                    : _fFound.id;
              }
              const _floodNum = extractNumber(_floodJid);

              // Aplicar advertência (sistema principal — aparece no !perfil e !advertidos)
              const _advCount = addWarning(from, sender, "Flood no mute");

              if (_advCount >= 3) {
                // BAN AUTOMÁTICO
                try {
                  await sandro.sendMessage(from, {
                    text: `🚫 @${_floodNum} *BANIDO*\n⚠️ 3/3 advertências por flood no mute`,
                    mentions: [_floodJid],
                  });
                  await sandro.groupParticipantsUpdate(from, [sender], "remove");
                  unmuteUser(from, sender);
                  clearUserWarnings(from, sender);
                } catch { }
              } else {
                try {
                  await sandro.sendMessage(from, {
                    text: `⚠️ @${_floodNum} *ADVERTÊNCIA ${_advCount}/3*\nFlood no mute\n🚫 Com 3 = *BAN*`,
                    mentions: [_floodJid],
                  });
                } catch { }
              }
            }

            return; // Bloquear TUDO
          }
        } catch { }
      }
      // ═══════════════════════════════════════════════════════════

      // ═══════ VERIFICAÇÃO DE REGISTRO OBRIGATÓRIO ═══════
      // Ler configuração do modoregistro
      let _modoRegistroAtivo = true;
      try {
        const _cfgReg = JSON.parse(fs.readFileSync("./config/personalizacao.json"));
        _modoRegistroAtivo = _cfgReg.modoregistro !== false;
      } catch { }

      // Comandos isentos da verificação de registro
      const _cmdsIsentos = [
        "registrar",
        "registro",
        "cadastrar",
        "cancelar",
        "perfil",
        "profile",
        "apagarregistro",
        "deletarregistro",
        "dono",
        "owner",
        "odono",
        "infodono",
        "menu",
        "help",
        "ajuda",
        "SANDRO",
        "git",
        "git-bot",
        "gitdobot",
        "tutorial",
        "modoregistro",
      ];

      if (
        _modoRegistroAtivo &&
        isCmd &&
        !SoDono &&
        !isnit &&
        !isPremium &&
        !issupre &&
        !ischyt
      ) {
        const _userReg = getUser(sender);
        if (!_userReg && !_cmdsIsentos.includes(command)) {
          // — Verificar se o comando parece um typo de "registrar" —
          const _typosRegistrar = [
            "registar",
            "registra",
            "registarr",
            "regiistrar",
            "registrra",
            "registrar",
            "registarr",
            "rgistrar",
            "regstrar",
            "regisar",
            "registarr",
            "registarr",
            "cadastar",
            "cadastra",
            "cadastrar",
            "cadastarr",
          ];
          const _ehTypoRegistrar = _typosRegistrar.some(
            (t) => command.includes(t) || t.includes(command),
          );

          // ── Antiflood: só avisa 1x a cada 30s por usuário ──
          const _lastAviso = _registroCooldown.get(sender);
          if (_lastAviso && Date.now() - _lastAviso < REGISTRO_COOLDOWN_MS) {
            try {
              await sandro.sendMessage(from, {
                react: { text: "⚠️", key: info.key },
              });
            } catch { }
            return; // Já foi avisado, só reage e ignora
          }
          _registroCooldown.set(sender, Date.now());

          // — Se o usuário está no privado (já chegou ao destino certo!) —
          if (!isGroup) {
            if (_ehTypoRegistrar) {
              return reply(
                `> ⚠️ *Comando não encontrado!*\n\n> 💡 Você quis dizer *${prefix}registrar*?\n\n> Para se cadastrar, envie:\n👉 *${prefix}registrar*`,
              );
            }
            return reply(
              `> 🔒 *Você precisa estar registrado para usar os comandos do bot!*\n\n> 💡 Para se cadastrar, envie:\n👉 *${prefix}registrar*\n\n_(Você já está no privado, só enviar o comando acima!)_`,
            );
          }

          // — Usuário está em grupo — Reação + msg curta no grupo (sem PV para evitar ban)
          try {
            await sandro.sendMessage(from, {
              react: { text: "⚠️", key: info.key },
            });
          } catch { }

          const antipvAtivo = isAntiPv || isAntiPv2 || isAntiPv3;
          const _linkRegistro = antipvAtivo
            ? `https://wa.me/${numerodono_ofc}`
            : `https://wa.me/${botNumber}`;

          // Msg curta no grupo com link
          sandro.sendMessage(
            from,
            {
              text: `> @${sender.split("@")[0]} registre-se para usar os comandos! 🔒\n> 👉 ${_linkRegistro}`,
              mentions: [sender],
            },
            { quoted: info },
          );
          return;
        }
      }
      // ═══════════════════════════════════════════════════════

      // ── Interceptor: Confirmação de zerar aluguel ──
      if (!isGroup && _pendingZerarAluguel.has(sender)) {
        const _bodyLow = body.trim().toLowerCase();
        if (_bodyLow === "confirmar") {
          const _pending = _pendingZerarAluguel.get(sender);
          _pendingZerarAluguel.delete(sender);
          zerarAluguel();
          return reply(
            `> ✅ *Todos os ${_pending.total} contrato(s) de aluguel foram apagados!*\n\n> 🗑️ A lista de aluguéis está vazia agora.\n💡 Use *${prefix}alugarbot* para cadastrar novos.`,
          );
        } else if (_bodyLow === "cancelar") {
          _pendingZerarAluguel.delete(sender);
          return reply(
            `>❌ *Operação cancelada!*\n\n> Nenhum contrato foi removido.`,
          );
        }
      }

const { isFiltered, addFilter } = require('./data/antiflood.js');

// Supondo que você já tem as variáveis:
if (isCmd) {
  if (isFiltered(sender)) {
    return mention(`Eii ${pushname} espere 1 segundo para usar o próximo comando.`)
  } else {
    addFilter(sender);
  }
}

const { Sticker } = require("./assets/sticker.js");

async function renameContextSticker(pack, autor, txt = ``, info) {
  try {
    getfile = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker');
    var _sticker = new Sticker()
    _sticker.addFile(getfile); 
    _sticker.options.metadata = {pack: pack, author: autor, emojis: ['🤠', '🥶', '😻']};
    resultadoSt = await _sticker.start();
    await sandro.sendMessage(from, {sticker: fs.readFileSync(resultadoSt[0].value)})
    await fs.unlinkSync(resultadoSt[0].value)
  } catch(e) {console.log(e)}
}

async function carregamentofigu() {
txt1 = `𝙾𝚋𝚝𝚎𝚗𝚍𝚘 𝚛𝚎𝚜𝚞𝚕𝚝𝚊𝚍𝚘𝚜ꦽꦼ̷১_\n_『ʟᴏᴀᴅɪɴɢ』:`
var carre = [
`${txt1}ʟᴏᴀᴅɪɴɢ〘█▒▒▒▒▒▒▒▒▒〙10%`,
`${txt1}ʟᴏᴀᴅɪɴɢ〘███▒▒▒▒▒▒▒〙35%`,
`${txt1}ʟᴏᴀᴅɪɴɢ〘█████▒▒▒▒▒〙51%`,
`${txt1}ʟᴏᴀᴅɪɴɢ〘███████▒▒▒〙62%`,
`${txt1}ʟᴏᴀᴅɪɴɢ〘████████▒▒〙80%`,
`${txt1}ʟᴏᴀᴅɪɴɢ〘██████████〙100%`,
`@${sender.split("@")[0]}\n_• Aguarde um pouco para ser enviado.._`]
let { key } = await sandro.sendMessage(from, {text: `Ok @${sender.split("@")[0]}_\n_• Obtendo os resultados de sua pesquisa.._`, mentions: [sender]}, {quoted: info})
for (let i = 0; i < carre.length; i++) {
await sandro.sendMessage(from, {text: carre[i], mentions: [sender], edit: key });
}
}

const permuteFigPackName = (secondtxt, usu = sender) => {
  if(isJsonIncludes(figname, usu)) {
    AB = figname.map(i => i.id).indexOf(usu)
    if(isJsonIncludes(figname[AB].fig, "pack")) {
      BC = figname[AB].fig.map(i => i.mod).indexOf("pack")
      return figname[AB].fig[BC].pack
    } else return secondtxt
  } else return secondtxt
}

const alerandom = (nmr) => {
    return Math.floor(Math.random()*nmr)
}

const toUpdateDay = JSON.parse(fs.readFileSync("./database/usuarios/SystemRPG/attday.json"));
const datinhadodia = moment.tz('America/Sao_Paulo').format('DD/MM/YYYY')

if(body != undefined && isGroup && isSabCityOFF && VerificarJSON(sabrpg, sender)) {
var i8 = sabrpg.map(i => i.id).indexOf(sender)
if(!VerificarJSON(toUpdateDay, sender)) {
toUpdateDay.push({id: sender, data: datinhadodia})
fs.writeFileSync(`./database/usuarios/SystemRPG/attday.json`, JSON.stringify(toUpdateDay))
sabrpg[i8].money += 25
fs.writeFileSync(`./database/usuarios/SystemRPG/sabrpg.json`, JSON.stringify(sabrpg))
mention(`Olá *@${sender.split("@")[0]}*, você recebeu *R$ 25.00* pela sua primeira mensagem do dia. Além disso, diversos jogos para se entreter no grupo! 🤑💱\n——\n• Use o comando *${prefix}Menucity*, lhe desejo boa sorte e divirta-se!`)
} else {
var AB = toUpdateDay.map(i => i.id).indexOf(sender)
if(toUpdateDay[AB].data != datinhadodia) {
toUpdateDay[AB].data = datinhadodia
fs.writeFileSync(`./database/usuarios/SystemRPG/attday.json`, JSON.stringify(toUpdateDay))
sabrpg[i8].money += 25
fs.writeFileSync(`./database/usuarios/SystemRPG/sabrpg.json`, JSON.stringify(sabrpg))
mention(`Olá *@${sender.split("@")[0]}*, você recebeu *R$ 25.00* pela sua primeira mensagem do dia. Além disso, diversos jogos para se entreter no grupo! 🤑💱\n——\n• Use o comando *${prefix}Menucity*, lhe desejo boa sorte e divirta-se!`)
} 
}
}


// ===== GRUPOS =====
if (!fs.existsSync('./database/grupos/aluguel/grupos.json')) {
  fs.writeFileSync('./database/grupos/aluguel/grupos.json', JSON.stringify([]))
}

// ===== ALUGUEL =====
if (!fs.existsSync('./database/grupos/aluguel/aluguel.json')) {
  fs.writeFileSync('./database/grupos/aluguel/aluguel.json', JSON.stringify([]))
}
let aluguel = JSON.parse(fs.readFileSync('./database/grupos/aluguel/aluguel.json'))

var minesId = []
for(let obj of mines) minesId.push(obj.id)
const isPlayMines = (await mines.find(obj => obj.id == from)) ? true : false
var minecor = ['a1', 'a2', 'a3', 'a4', 'a5', 'b1', 'b2', 'b3', 'b4', 'b5', 'c1', 'c2', 'c3', 'c4', 'c5', 'd1', 'd2', 'd3', 'd4', 'd5', 'e1', 'e2', 'e3', 'e4', 'e5']

function gerarnum() {
  return Math.floor(Math.random() * 101) // 0 a 100
}

async function getBufferFromMessage(audioMessage) {
    const stream = await downloadContentFromMessage(audioMessage, 'audio');
    let buffer = Buffer.from([]);
    for await (const chunk of stream) {
        buffer = Buffer.concat([buffer, chunk]);
    }
    return buffer;
}

function sets(data) {
    fs.writeFileSync('./config/nescessario.json', JSON.stringify(data, null, 2))
}

function gerarContextNewsletter() {
if (setting.channeldl === "0@newsletter") {
return {}; 
}
return {isForwarded: true, forwardingScore: 1,}}

const DLchanneldl = gerarContextNewsletter();

// PARA LIMPAR OS DADOS DOS USUÁRIOS QUE JÁ SAIU DO GRUPO...
async function ClearMembersInactive() {
var RD_CNT = countMessage[countMessage.map(i => i.groupId).indexOf(from)].numbers
CNT1 = []; for ( i of groupMembers) {CNT1.push(i.id)} 
CNT = []; for ( i of RD_CNT) {
if(!CNT1.includes(i.id)) CNT.push(i)}
for ( i of CNT) {
RD_CNT.splice(RD_CNT.map(i => i.id).indexOf(i.id), 1)}
fs.writeFileSync("./config/media/countmsg.json", JSON.stringify(countMessage, null, 2))
}

// ==================================================
// 🔇 SISTEMA DE MUTE AUTOMÁTICO — APAGA TUDO DO MUTADO
// ==================================================
const caminhoMute = './database/mute.json'
// Cria pasta e arquivo automaticamente se não existir
if (!fs.existsSync('./database')) fs.mkdirSync('./database', { recursive: true })
if (!fs.existsSync(caminhoMute)) fs.writeFileSync(caminhoMute, JSON.stringify({}, null, 2))

try {
  const listaMute = JSON.parse(fs.readFileSync(caminhoMute, 'utf-8'))
  // Se for grupo e o usuário está na lista de mutados DAQUELE GRUPO
  if (isGroup && listaMute[from] && listaMute[from].includes(sender)) {
    // 🗑️ APAGA A MENSAGEM NA HORA
    await sandro.sendMessage(from, { delete: info.key }).catch(() => {})
    return // NÃO EXECUTA NENHUM COMANDO, SÓ SAI
  }
} catch (e) { console.log('Erro sistema mute:', e.message) }
// ==================================================

async function uploadaudio(buffer) {
 try {
const form = new FormData()
form.append('files[]', buffer, 'audio.mp3')
const { data } = await axios.post(
'https://uguu.se/upload.php',
form,
{headers: {
...form.getHeaders() }})
return data.files[0].url
    } catch (e) {
console.log('Erro ao enviar áudio:', e)
return null }}

/////////////

// ✅ FUNÇÃO DE CONTAGEM — APENAS NOME + ATUALIZAÇÃO AUTOMÁTICA
async function contabilizarMensagem(sandro, info) {
  try {
    const caminhoArquivo = './assets/atividadesgp.json';
    
    // Cria pasta se não existir
    if (!fs.existsSync('./assets')) fs.mkdirSync('./assets', { recursive: true });
    
    // Carrega dados existentes ou cria objeto vazio
    let dados = {};
    if (fs.existsSync(caminhoArquivo)) {
      dados = JSON.parse(fs.readFileSync(caminhoArquivo, 'utf-8'));
    }
    
    const grupoId = info.key.remoteJid;
    
    // Só contabiliza se for grupo
    if (!grupoId || !grupoId.endsWith('@g.us')) return;
    
    const usuarioId = info.key.participant || info.key.remoteJid;
    if (!usuarioId) return;
    
    // ✅ PEGA O NOME MAIS RECENTE (do grupo ou do perfil)
    let nomeUsuario = info.pushName || 'Sem Nome';
    try {
      const meta = await sandro.groupMetadata(grupoId);
      const membro = meta.participants.find(p => p.id === usuarioId);
      if (membro) {
        nomeUsuario = membro.notify || membro.verifiedName || membro.name || nomeUsuario;
      }
    } catch (e) {}
    
    // ✅ INICIALIZA GRUPO SE NÃO EXISTIR
    if (!dados[grupoId]) dados[grupoId] = {};
    
    // ✅ INICIALIZA USUÁRIO SE NÃO EXISTIR
    if (!dados[grupoId][usuarioId]) {
      dados[grupoId][usuarioId] = {
        nome: nomeUsuario,
        mensagens: 0,
        figurinhas: 0,
        audios: 0,
        fotos: 0,
        videos: 0,
        total: 0
      };
    }
    
    const userData = dados[grupoId][usuarioId];
    
    // ✅ ATUALIZA O NOME SEMPRE — MESMO QUE MUDE
    if (userData.nome !== nomeUsuario) {
      console.log(`🔄 Nome atualizado: "${userData.nome}" → "${nomeUsuario}"`);
      userData.nome = nomeUsuario;
    }
    
    // 🔍 VERIFICA O TIPO DE MENSAGEM
    let contou = false;
    if (info.message?.stickerMessage) { userData.figurinhas++; contou = true; }
    else if (info.message?.audioMessage) { userData.audios++; contou = true; }
    else if (info.message?.imageMessage) { userData.fotos++; contou = true; }
    else if (info.message?.videoMessage) { userData.videos++; contou = true; }
    if (!contou) userData.mensagens++;
    
    userData.total++;
    
    // ✅ SALVA NO ARQUIVO
    fs.writeFileSync(caminhoArquivo, JSON.stringify(dados, null, 2));
    
  } catch (erro) {
    console.log('❌ Erro na contagem:', erro.message);
  }
}

// ✅ COLOQUE ESSA LINHA BEM NO INÍCIO DO CÓDIGO
contabilizarMensagem(sandro, info);

// 🎮 JOGO: PEDRA, PAPEL OU TESOURA
const caminhoPPT = './assets/ppt.json';

const carregarPPT = () => {
  if (!fs.existsSync('./assets')) fs.mkdirSync('./assets', { recursive: true });
  if (!fs.existsSync(caminhoPPT)) return {};
  return JSON.parse(fs.readFileSync(caminhoPPT, 'utf-8'));
};

const salvarPPT = (dados) => {
  fs.writeFileSync(caminhoPPT, JSON.stringify(dados, null, 2));
};

const opcoes = {
  pedra: '🪨 Pedra',
  papel: '📄 Papel',
  tesoura: '✂️ Tesoura'
};


switch (command) {

case 'infobot': {
    await sandro.sendMessage(from, {
        audio: {
            url: "./assets/sandro/infobot.mp3"
        },
        mimetype: "audio/mpeg",
        ptt: false // true = envia como áudio de voz
    }, {
        quoted: info
    })
}
break;

case 'idcanal': {
reagir(from, "✅️")
    if (!q) {
        return reply(`*OBTER ID DO CANAL*

Envie o link de um canal do WhatsApp.

Exemplo:
${prefix}idcanal https://whatsapp.com/channel/0029Vb8tJ5x77qVZnxr3oC3C`);
    }

    const match = q.match(/https?:\/\/whatsapp\.com\/channel\/([A-Za-z0-9]+)/);

    if (!match) return reply("❌ Link de canal inválido!");

    try {
        const infoCanal = await sandro.newsletterMetadata("invite", match[1]);

        reply(`*ID DO CANAL*\n${infoCanal.id}`);
    } catch (e) {
        console.error(e);
        reply("❌ Não foi possível obter o ID do canal.\nVerifique se o link está correto.");
    }
}
break;

case 'ppt':

case 'pedrapapeltesoura':
reagir(from, "🎮")

if (!isGroup) return reply("❌ Esse jogo só funciona em grupo.")

const escolhaUsuario = (args[0] || '').toLowerCase();
const opcoesValidas = ['pedra', 'papel', 'tesoura'];

if (!opcoesValidas.includes(escolhaUsuario)) {
  return reply(`🎮 𝐏𝐄𝐃𝐑𝐀, 𝐏𝐀𝐏𝐄𝐋 𝐨𝐮 𝐓𝐄𝐒𝐎𝐔𝐑𝐀!

Escolha uma opção:
🪨 .ppt pedra
📄 .ppt papel
✂️ .ppt tesoura`);
}

const escolhaBot = opcoesValidas[Math.floor(Math.random() * opcoesValidas.length)];

let resultadoo, emojiresultadoo;

if (escolhaUsuario === escolhaBot) {
  resultadoo = "🤝 EMPATE!";
  emojiresultadoo = "⚖️";
} else if (
  (escolhaUsuario === 'pedra' && escolhaBot === 'tesoura') ||
  (escolhaUsuario === 'papel' && escolhaBot === 'pedra') ||
  (escolhaUsuario === 'tesoura' && escolhaBot === 'papel')
) {
  resultadoo = "🎉 VOCÊ GANHOU!";
  emojiresultadoo = "🏆";
} else {
  resultadoo = "😢 VOCÊ PERDEU!";
  emojiresultadoo = "💔";
}

const usuarioId = info.key.participant || info.key.remoteJid;
const nomeUsuario = info.pushName || 'Jogador';
const stats = carregarPPT();

if (!stats[usuarioId]) {
  stats[usuarioId] = { nome: nomeUsuario, vitorias: 0, derrotas: 0, empates: 0 };
}
stats[usuarioId].nome = nomeUsuario;

if (resultadoo.includes('GANHOU')) stats[usuarioId].vitorias++;
else if (resultadoo.includes('PERDEU')) stats[usuarioId].derrotas++;
else stats[usuarioId].empates++;

salvarPPT(stats);

reply(`${emojiresultadoo} 𝐑𝐄𝐒𝐔𝐋𝐓𝐀𝐃𝐎

Você: ${opcoes[escolhaUsuario]}
Bot: ${opcoes[escolhaBot]}

═══════════════
${resultadoo}
═══════════════

📊 Suas estatísticas:
🏆 Vitórias: ${stats[usuarioId].vitorias}
💔 Derrotas: ${stats[usuarioId].derrotas}
🤝 Empates: ${stats[usuarioId].empates}

> Ver o Rank?
${prefix}rankppt`);
break


case 'rankppt':

reagir(from, "🏆")

const dadosPPT = carregarPPT();
if (Object.keys(dadosPPT).length === 0) {
  return reply("🏆 Ainda não há jogadores!\nComece a jogar com .ppt pedra/papel/tesoura");
}

const rankingPPT = Object.values(dadosPPT)
  .map(u => ({ ...u, saldo: u.vitorias - u.derrotas }))
  .sort((a, b) => b.saldo - a.saldo)
  .slice(0, 10);

let textoRankPPT = `╔══════════════════════╗
║𝐑𝐀𝐍𝐊  𝐏𝐄𝐃𝐑𝐀-𝐏𝐀𝐏𝐄𝐋-𝐓𝐄𝐒𝐎𝐔𝐑𝐀
╚══════════════════════╝\n\n`;

rankingPPT.forEach((u, i) => {
  const pos = i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : `#${i+1}`;
  textoRankPPT += `${pos} • ${u.nome}
🏆 ${u.vitorias} | 💔 ${u.derrotas} | 🤝 ${u.empates}
📊 Saldo: ${u.saldo >= 0 ? '+' : ''}${u.saldo}\n\n`;
});

sandro.sendMessage(from, { text: textoRankPPT }, { quoted: info })
break

case 'rank':
case 'ranking':
case 'top':
reagir(from, "📊")

if (!isGroup) return reply("❌ Esse comando só funciona em grupo.")

const caminhoRank = './assets/atividadesgp.json';
if (!fs.existsSync(caminhoRank)) return reply("📊 Ainda não há dados de atividade neste grupo.")

const dadosRank = JSON.parse(fs.readFileSync(caminhoRank, 'utf-8'));
const grupoAtual = from;

if (!dadosRank[grupoAtual]) return reply("📊 Ainda não há dados de atividade neste grupo.")

// Converte para array e ordena por total
const membrosGrupo = Object.entries(dadosRank[grupoAtual])
  .map(([id, d]) => ({ id, ...d }))
  .sort((a, b) => b.total - a.total)
  .slice(0, 15); // Top 15

// 🏆 PEGA O TOP 1
const top1 = membrosGrupo[0];

// 📸 PEGA A FOTO DE PERFIL DO TOP 1
let fotoTop1;
try {
  fotoTop1 = await sandro.profilePictureUrl(top1.id, 'image');
} catch {
  fotoTop1 = fotobot; // Foto padrão se não tiver
}

// 🎨 MONTA A URL DA CANVA
const urlCanvaRank = `https://zero-two-apis.store/welcome` +
  `?titulo=DOMINANDO` +
  `&nome=${encodeURIComponent(top1.nome)}` +
  `&perfil=${encodeURIComponent(fotoTop1)}` +
  `&fundo=${encodeURIComponent(fotobot)}` +
  `&grupo=${encodeURIComponent(groupName)}`;

let textoRank = `╔♡∞*♡♡∞:｡.｡❤️｡.｡:∞♡*♡:∞♡╗
╠═⪩⟨❤️𝐑𝐀𝐍𝐊 𝐃𝐎 𝐆𝐑𝐔𝐏𝐎⟩
║♡∞*♡♡∞:｡.｡❤️｡.｡:∞♡*♡:∞♡╝
╠════════════════⪩
║${groupName}
╚════════════════⪩

🏆𝐋𝐈́𝐃𝐄𝐑 𝐃𝐎 𝐑𝐀𝐍𝐊🏆
${top1.nome}

━━━━━━━━━━━━━━━━━\n`;

membrosGrupo.forEach((u, i) => {
  const pos = i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : `#${i+1}`;
  textoRank += `${pos} 「 ${u.nome} 」
├ 💬 mensagens: ${u.total}
├ 🎀 Figurinhas: ${u.figurinhas}
├ 🎧 áudios: ${u.audios}  
├ 📸 Imagens: ${u.fotos}
├ 🎬 Vídeos: ${u.videos}
${i < membrosGrupo.length - 1 ? '┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄\n' : ''}`;
});

textoRank += `━━━━━━━━━━━━━━━━━

> © ${NomeDoBot}`;

// ✅ TENTA ENVIAR A CANVA, SE FALHAR ENVIA FOTO DO TOP 1
try {
  await sandro.sendMessage(from, {
    image: { url: urlCanvaRank },
    caption: textoRank
  }, { quoted: info });
  console.log(`✅ [RANK] Canva enviada com sucesso! Top 1: ${top1.nome}`);
} catch (erro) {
  console.log(`⚠️ [RANK] API da canva falhou, enviando foto do Top 1...`, erro.message);
  
  // ✅ FALLBACK: ENVIA A FOTO DE PERFIL DO TOP 1
  await sandro.sendMessage(from, {
    image: { url: fotoTop1 },
    caption: textoRank
  }, { quoted: info });
}
break


case 'rankgps':
case 'rankgp':
case 'rankall':
if (!SoDono && !isnit && !info.key.fromMe) return reply(enviar.msg.donosmt); 
reagir(from, "🌐")
const caminhoRankGps = './assets/atividadesgp.json';
if (!fs.existsSync(caminhoRankGps)) return reply("📊 Ainda não há dados registrados.")

const dadosGps = JSON.parse(fs.readFileSync(caminhoRankGps, 'utf-8'));

// Junta TODOS os usuários de TODOS os grupos
const todosUsuarios = {};

for (const grupoId in dadosGps) {
  for (const usuarioId in dadosGps[grupoId]) {
    const u = dadosGps[grupoId][usuarioId];
    if (!todosUsuarios[usuarioId]) {
      todosUsuarios[usuarioId] = {
        nome: u.nome,
        mensagens: 0,
        figurinhas: 0,
        audios: 0,
        fotos: 0,
        videos: 0,
        total: 0
      };
    }
    todosUsuarios[usuarioId].mensagens += u.mensagens;
    todosUsuarios[usuarioId].figurinhas += u.figurinhas;
    todosUsuarios[usuarioId].audios += u.audios;
    todosUsuarios[usuarioId].fotos += u.fotos;
    todosUsuarios[usuarioId].videos += u.videos;
    todosUsuarios[usuarioId].total += u.total;
    // Mantém o nome mais recente
    todosUsuarios[usuarioId].nome = u.nome;
  }
}

// Ordena por total
const rankingGeral = Object.values(todosUsuarios)
  .sort((a, b) => b.total - a.total)
  .slice(0, 15); // Top 15 geral

let textoRankGps = `╔══════════════════════╗
║𝐑𝐀𝐍𝐊 𝐆𝐄𝐑𝐀𝐋 𝐃𝐄 𝐓𝐎𝐃𝐎𝐒
║      𝐎𝐒 𝐆𝐑𝐔𝐏𝐎𝐒
╚══════════════════════╝\n\n`;

rankingGeral.forEach((u, i) => {
  const pos = i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : `#${i+1}`;
  textoRankGps += `${pos} • ${u.nome}
├ ${u.total} mensagens
├ Texto: ${u.mensagens}
├ Fig: ${u.figurinhas}
├ Áudio: ${u.audios}
├ Foto: ${u.fotos}
├ Vídeo: ${u.videos}
\n`;
});

sandro.sendMessage(from, { text: textoRankGps }, { quoted: info })
break




case "sticker":




reagir(from, "❤️")
if (!isGroup) return reply("Esse comando só funciona em grupo.")
if (!isBotGroupAdmins) return reply("Eu preciso ser administrador.")
if (!isGroupAdmins) return reply("Você precisa ser administrador.")
inff = `Bem vindo(a) ao grupo : ${groupName}
👾 •𝑬𝑵𝑻𝑹𝑶𝑼 𝑺𝑬 𝑨𝑷𝑹𝑬𝑺𝑬𝑵𝑻𝑨•
📸 •F𝜣T𝜣
👻 •N𝜣ME
📌 •CID∆DE
🗓️ •ID∆DE
⚠️ •LEI∆ ∆S REGR∆S D𝜣 GRUP𝜣
*APROVEITE O GRUPO!*`
sandro.sendMessage(from, {text: inff}, {quoted: info})
break

case 'meta': {
reagir(from, "❤️")
if (!q) return reply('Digite uma pergunta.');
try {
await reply('Pensando...');
const apiKey = "CHAVE_REMOVIDA";
const { data } = await axios.post(
"https://openrouter.ai/api/v1/chat/completions",
{model: "openai/gpt-3.5-turbo",
messages: [
{ role: "user", content: q }]}, 
{headers: {
Authorization: `Bearer ${apiKey}`,
"Content-Type": "application/json" }});
const resposta = data?.choices?.[0]?.message?.content;
if (!resposta) return reply('🖇️ Sem resposta da IA.');
await sandro.sendMessage(from, {
image: {url: "https://i.ibb.co/ycsjm4Jz/img-1783256614337.jpg"},
caption: `${resposta}`
}, { quoted: info });
} catch (err) {
console.error(err.response?.data || err.message);
reply('‼️ Erro na IA.'); }}
break;

case 'uploadaudio': {
if (!isGroup) return reply('Só em grupo')
reply(`${isGroup ? "*ENVIANDO LINK*" : "ENVIANDO"}`)
try {
const q = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
if (!q || !q.audioMessage) {
return reply('🎧 Marque um áudio para gerar o link.')}
const stream = await downloadContentFromMessage(
q.audioMessage,
'audio')
let buffer = Buffer.from([])
for await (const chunk of stream) {
buffer = Buffer.concat([buffer, chunk]) }
const result = await uploadaudio(buffer) 
if (!result) {
return reply('❌ Erro ao gerar o link.') }
await sandro.sendMessage(
from, {audio: { url: result },
mimetype: 'audio/mpeg',
ptt: false },
{ quoted: info })
await sandro.sendMessage(
from, {text: `✅ *LINK DO ÁUDIO GERADO*\n\n🔗 ${result}` },
{ quoted: info })
} catch (err) {
console.log(err)
await reply('‼️ Ocorreu um erro ao gerar o link do áudio.') }}
break

case 'mute':
case 'silenciar': {
    reagir(from, "❤️")
    if (!isGroup) return reply(enviar.msg.grupo)
    if (!isGroupAdmins) return reply(enviar.msg.adm)
    if (!isBotGroupAdmins) return reply('O bot precisa ser adm pra executar essa ação.')

  // ✅ SÓ FUNCIONA EM GRUPO
  if (!isGroup) return reply("⚠️ Esse comando só funciona em grupos.")

  // ✅ SÓ ADMIN PODE USAR
  if (!isGroupAdmins) return reply("⛔ Apenas administradores podem usar esse comando.")

  // ✅ BOT PRECISA SER ADMIN PARA APAGAR MENSAGENS
  if (!isBotGroupAdmins) return reply("🤖 Preciso ser administrador para poder silenciar e apagar mensagens.")

  // ✅ PEGA QUEM FOI MARCADO
  const marcado = info.message.extendedTextMessage?.contextInfo?.mentionedJid?.[0] || ""
  if (!marcado) return reply(`📌 Use assim:\n\n${prefix}mute @pessoa\n${prefix}desmute @pessoa`)

  try {
    const cfg = JSON.parse(fs.readFileSync(caminhoMute, 'utf-8'))
    if (!cfg[from]) cfg[from] = []

    // ✅ JÁ ESTÁ MUTADO?
    if (cfg[from].includes(marcado)) {
      return reply(`⚠️ @${marcado.split('@')[0]} já está silenciado(a) nesse grupo.`, { mentions: [marcado] })
    }

    // ✅ SALVA NA LISTA
    cfg[from].push(marcado)
    fs.writeFileSync(caminhoMute, JSON.stringify(cfg, null, 2))

    // 🗑️ JÁ APAGA A MENSAGEM DO COMANDO
    await sandro.sendMessage(from, { delete: info.key }).catch(() => {})

    reply(`✅ *SILENCIADO*\n\n👤 @${marcado.split('@')[0]}\n🔇 Todas as mensagens dessa pessoa serão **APAGADAS AUTOMATICAMENTE** enquanto estiver silenciado(a).`, {
      mentions: [marcado]
    })

  } catch (e) {
    console.log('Erro ao mutar:', e)
    reply("❌ Erro ao executar o silenciamento.")
  }
}
break

case 'desmute':
case 'desilenciar': {
    reagir(from, "❤️")
    if (!isGroup) return reply(enviar.msg.grupo)
    if (!isGroupAdmins) return reply(enviar.msg.adm)
    if (!isBotGroupAdmins) return reply('O bot precisa ser adm pra executar essa ação.')

  if (!isGroup) return reply("⚠️ Apenas em grupos.")
  if (!isGroupAdmins) return reply("⛔ Apenas administradores.")
  if (!isBotGroupAdmins) return reply("🤖 Preciso ser administrador.")

  const marcado = info.message.extendedTextMessage?.contextInfo?.mentionedJid?.[0] || ""
  if (!marcado) return reply(`📌 Use: ${prefix}desmute @pessoa`)

  try {
    const cfg = JSON.parse(fs.readFileSync(caminhoMute, 'utf-8'))

    if (!cfg[from] || !cfg[from].includes(marcado)) {
      return reply(`⚠️ @${marcado.split('@')[0]} não está silenciado(a) aqui.`, { mentions: [marcado] })
    }

    // ✅ REMOVE DA LISTA
    cfg[from] = cfg[from].filter(id => id !== marcado)
    fs.writeFileSync(caminhoMute, JSON.stringify(cfg, null, 2))

    reply(`🔊 *DESMUTADO*\n\n👤 @${marcado.split('@')[0]}\nAgora já pode enviar mensagens normalmente novamente.`, {
      mentions: [marcado]
    })

  } catch (e) {
    console.log('Erro desmute:', e)
    reply("❌ Erro ao retirar silêncio.")
  }
}
break


case 'listamute': {
    reagir(from, "❤️")
    if (!isGroup) return reply(enviar.msg.grupo)
    if (!isGroupAdmins) return reply(enviar.msg.adm)
    if (!isBotGroupAdmins) return reply('O bot precisa ser adm pra executar essa ação.')

  try {
    const cfg = JSON.parse(fs.readFileSync(caminhoMute, 'utf-8'))
    const lista = cfg[from] || []

    if (lista.length === 0) return reply("Ninguém está silenciado nesse grupo no momento.")

    let texto = `*PESSOAS SILENCIADAS AQUI*\n\nTotal: ${lista.length}\n`
    lista.forEach((id, i) => texto += `${i + 1}. @${id.split('@')[0]}\n`)

    reply(texto, { mentions: lista })
  } catch {
    reply("Lista vazia.")
  }
}
break


case 'memeaudio': {
try {
reagir(from, "❤️")
if (!q) return reply(`❌ Informe o que deseja pesquisar.\n\nExemplo:\n${prefix + command} lula`);

reply("🔎 Buscando áudios, aguarde...");

const axios = require("axios");

const { data } = await axios.get(
`https://k.okarun-api.com.br/api/myinstants?query=${encodeURIComponent(q)}&apikey=${getLegacyApiKey("OKARUN")}`
);

if (!data.resultado || data.resultado.length === 0) {
return reply("❌ Nenhum áudio encontrado.");
}

// Envia apenas os 5 primeiros áudios
const audios = data.resultado.slice(0, 5);

for (let i = 0; i < audios.length; i++) {

await sandro.sendMessage(from, {
audio: { url: audios[i] },
mimetype: "audio/mpeg",
ptt: false
}, { quoted: info });

await sleep(1000);

}

} catch (e) {
console.log(e);
reply("❌ Erro ao buscar os áudios.");
}
}
break;

case 'menu': {
    reagir(from, "❤️");
    try {
        const channel = (() => {
            try { return JSON.parse(fs.readFileSync('./assets/channel.json', 'utf8')); }
            catch { return { ativo: false }; }
        })();
        const contextInfo = {
            forwardingScore: 999999,
            isForwarded: true,
            mentionedJid: [sender].filter(Boolean),
            ...(channel.ativo && {
                forwardedNewsletterMessageInfo: {
                    newsletterJid: "120363430563134321@newsletter",
                    newsletterName: "PAULOZINXZ_BOT"
                }
            })
        };
        const legenda = menu(prefix, pushname, NickDono, NomeDoBot, isChVip, isCargo, sender);
        const controle = './config/fototipo.json';
        let tipo = 'jpg';
        try {
            if (fs.existsSync(controle)) tipo = JSON.parse(fs.readFileSync(controle, 'utf8')).tipo || 'jpg';
        } catch { tipo = 'jpg'; }

        if (tipo === 'gif' && fs.existsSync('./config/fotobot.gif')) {
            await sandro.sendMessage(from, {
                video: fs.readFileSync('./config/fotobot.gif'),
                gifPlayback: true,
                caption: legenda,
                contextInfo
            }, { quoted: info });
        } else if (fs.existsSync('./config/fotobot.jpg')) {
            await sandro.sendMessage(from, {
                image: fs.readFileSync('./config/fotobot.jpg'),
                caption: legenda,
                contextInfo
            }, { quoted: info });
        } else {
            await reply(legenda);
        }
    } catch (err) {
        console.error('Erro ao enviar menu:', err);
        try { await reply(menu(prefix, pushname, NickDono, NomeDoBot, isChVip, isCargo, sender)); }
        catch { await reply('❌ Não foi possível carregar o menu.'); }
    }
}

break







case 'tiktokstalk': {
    if (!q) return reply(`Use: ${prefix + command} usuário\n\nExemplo:\n${prefix + command} embrynp`)

    try {
reply(`❤️ *Buscando por ${q} Aguarde...* ❤️`);

        const api = `https://duck.waguri.space/api/tiktok-stalk?user=${encodeURIComponent(q)}&apitoken=iJQ8KC`

        const { data } = await axios.get(api)

        if (!data?.dados) {
            return reply("Usuário não encontrado.")
        }

        const d = data.dados

        await sandro.sendMessage(from, {
            image: { url: d.avatar },
            caption: `> ${NomeDoBot}\n> *TIKTOK STALK*

> • Usuário: @${d.username}
> • Nome: ${d.nickname}
> • ID: ${d.id}
> • Verificado: ${d.verified ? "Sim" : "Não"}
> • Privado: ${d.private ? "Sim" : "Não"}

> • Seguidores: ${d.stats.followersStr}
> • Seguindo: ${d.stats.followingStr}
> • Curtidas: ${d.stats.likesStr}
> • Vídeos: ${d.stats.videos}

[ • Bio:
${d.bio || "Sem bio"}

> • Instagram: ${d.instagram}
> • YouTube: ${d.youtube}
> • Twitter: ${d.twitter}

> • Link: ${d.url}`
        }, { quoted: info })

    } catch (e) {
        console.log(e)
        reply("Erro ao buscar o usuário.")
    }
}
break

case 'fotoia2': {
try {
reply(`❤️ *Buscando por ${q} Aguarde...*❤️`);
if (!q) {
return reply(`❌ Informe o prompt.\n\nExemplo:\n${prefix}fotoia Uma mulher`);
}

reagir(from, "🎨");

const url = `https://docs.prexzyapis.com/ai/realistic?prompt=${encodeURIComponent(q)}`;

const response = await axios.get(url, {
responseType: "arraybuffer"
});

await sandro.sendMessage(from, {
image: Buffer.from(response.data),
caption: `> *AQUI ESTA SUA IMAGEM*\n${q}`
}, { quoted: info });

} catch (e) {
console.log(e);
reply("❌ Erro ao gerar a imagem.");
}

}
break;

case 'fotoia': {
try {
reply(`❤️ *Buscando por ${q} Aguarde...*❤️`);
if (!q) {
return reply(`❌ Informe o texto.\n\nExemplo:\n${prefix}fotoia UMA LOGO COM O NOME PAULOZINXZ_BOT`);
}
reagir(from, "🎨");

const { data } = await axios.get(
`https://docs.prexzyapis.com/ai/aiappgen?prompt=${encodeURIComponent(q)}`,
{
responseType: "arraybuffer"
}
);

await sandro.sendMessage(from, {
image: Buffer.from(data),
caption: `> *AQUI ESTA SUA IMAGEM*\n${q}`
}, { quoted: info });

} catch (err) {
console.log(err);
reply("❌ Erro ao gerar a imagem.");
}
}
break;




case 'catbox': {
try {
reagir(from, "📎")
    if (!isQuotedImage && !isQuotedVideo && !isQuotedSticker) {
        return reply(`❌ Marque uma imagem, vídeo ou figurinha.\n\nExemplo:\n${prefix}upload`);
    }

    const Uploader = require('./data/upload');
    const uploader = new Uploader();

    let media;

    if (isQuotedImage) {
        media = await getFileBuffer(
            JSON.parse(JSON.stringify(info).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo.message.imageMessage,
            'image'
        );
    } else if (isQuotedVideo) {
        media = await getFileBuffer(
            JSON.parse(JSON.stringify(info).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo.message.videoMessage,
            'video'
        );
    } else if (isQuotedSticker) {
        media = await getFileBuffer(
            JSON.parse(JSON.stringify(info).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo.message.stickerMessage,
            'sticker'
        );
    }

    reply('❤️Fazendo upload, aguarde...');

    const link = await uploader.catbox(media);

    await sandro.sendMessage(from, {
        text: `✅*UPLOAD CONCLUÍDO*\nLink: ${link}`
    }, { quoted: info });

} catch (err) {
    console.log('ERRO UPLOAD:', err);
    reply('❌ Erro ao enviar o arquivo.');
}
}
break;

case 'bug': {
try {

if (!q) {
return reply(`❌ Informe o bug.\n\nExemplo:\n${prefix}bug O comando play não funciona`);
}

if (!numerodono) {
return reply('❌ Número do dono não configurado.');
}

const dono = numerodono.replace(/[^0-9]/g, '') + '@s.whatsapp.net';

const textoBug = `
🐞 *NOVO BUG REPORTADO*

👤 Usuário: ${pushname}
📱 Número: ${sender.split('@')[0]}

📝 Relato:
${q}
`;

await sandro.sendMessage(dono, {
text: textoBug
});

reply('✅ Bug enviado para o desenvolvedor com sucesso!');

} catch (err) {
console.log('ERRO BUG:', err);
reply('❌ Erro ao enviar o reporte.');
}
}
break;


case 'qr': {
    if (!q) return reply(`Use: ${prefix + command} texto ou link`)

    try {

        reagir(from, "📱")

        const qr = `https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${encodeURIComponent(q)}`

        await sandro.sendMessage(from, {
            image: { url: qr },
            caption: `QR Code gerado com sucesso.`
        }, { quoted: info })

    } catch (e) {
        console.log(e)
        reply('Erro ao gerar QR Code.')
    }
}
break


case 'gerarsenha': {

let tamanho = q ? parseInt(q) : 12

if (isNaN(tamanho) || tamanho < 6 || tamanho > 50) {
    return reply(`Use: ${prefix + command} 12`)
}

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*'
let senha = ''

for (let i = 0; i < tamanho; i++) {
    senha += chars.charAt(Math.floor(Math.random() * chars.length))
}

const texto = `
GERADOR DE SENHA

Tamanho: ${tamanho}

Senha:
\`\`\`
${senha}
\`\`\`
`

await sandro.sendMessage(from, {
    text: texto
}, { quoted: info })

}
break




case 'doar':
case 'apoio': {
reagir(from, "💖")

await sandro.sendMessage(from, {
image: { url: `${fotobot}` }, // coloque uma imagem/banner do projeto se quiser
caption: `
╭━━━〔❤️APOIE O PROJETO❤️〕━━━⬣
┃*Gostou do bot?*
┃ Sua ajuda mantém o projeto online!
┃
┃Ajude com qualquer valor e
┃ contribua para novas funções,
┃ melhorias e hospedagem.
┃
┃*LINK PARA APOIAR:*
┃ https://livepix.gg/sandrobot
┃
┃❤️ Sua ajuda faz diferença!
┃ Muito obrigado pelo apoio.
╰━━━━━━━━━━━━━━━━━━⬣
`,
contextInfo: {
externalAdReply: {
title: "💖 Apoie o Projeto!!",
body: "Clique aqui para contribuir com o projeto",
thumbnailUrl: 'https://livepix.gg/sandrobot',
sourceUrl: 'https://livepix.gg/sandrobot',
mediaType: 1,
renderLargerThumbnail: true
}
}
}, { quoted: info })

}
break;

case 'getperfil': {
if (!menc_os2 && !q) return reply(`*🌪️ ᴍᴀʀǫᴜᴇ ᴏ ᴜꜱᴜᴀʀɪᴏ ᴏᴜ ᴅɪɢɪᴛᴇ ᴏ ɴᴜᴍᴇʀᴏ ᴄᴏᴍ ᴏᴜ ꜱᴇᴍ ᴏ @*`);
let numero = menc_os2 ? menc_os2.split('@')[0] : q.replace(/\D/g, '');
reply("*ᴩᴇɢᴀɴᴅᴏ ᴏ ᴩᴇʀꜰɪʟ ᴅᴏ ᴜꜱᴜᴀʀɪᴏ ᴀɢᴜᴀʀᴅᴇ ᴜᴍ ᴍᴏᴍᴇɴᴛᴏ 🙇‍♂️*");
let ppimgUrl;
try {
ppimgUrl = await sandro.profilePictureUrl(`${numero}@s.whatsapp.net`, 'image');
} catch {
ppimgUrl = imgperfil;
}
const jidParaMencionar = menc_os2 ? menc_os2 : `${numero}@s.whatsapp.net`;
await sandro.sendMessage(
from,
{
image: { url: ppimgUrl },
caption: `*⚡ | ᴩᴇʀꜰɪʟ ᴅᴏ ᴜꜱᴜᴀʀɪᴏ:* @${numero}\n> *🗿 ꜱᴇ ᴄᴀꜱᴏ ᴠᴏᴄᴇ ǫᴜᴇɪʀᴀ ᴩᴇɢᴀʀ ᴀ ʙɪᴏɢʀᴀꜰɪᴀ ᴅᴏ ᴜꜱᴜᴀʀɪᴏ ᴜꜱᴇ ᴏ ᴄᴏᴍᴀɴᴅᴏ:* ${prefix}getbio`,
contextInfo: { ...DLchanneldl, mentionedJid: [jidParaMencionar] }
},
{ quoted: info }
);
}
break;


case 'getb': {
if (!menc_os2 && !q) return reply(`*🌪️ ᴍᴀʀǫᴜᴇ ᴏ ᴜꜱᴜᴀʀɪᴏ ᴏᴜ ᴅɪɢɪᴛᴇ ᴏ ɴᴜᴍᴇʀᴏ ᴄᴏᴍ ᴏᴜ ꜱᴇᴍ ᴏ @*`);
reply("*ᴩᴇɢᴀɴᴅᴏ ᴀ ʙɪᴏɢʀᴀꜰɪᴀ ᴅᴏ ᴜꜱᴜᴀʀɪᴏ ᴀɢᴜᴀʀᴅᴇ ᴜᴍ ᴍᴏᴍᴇɴᴛᴏ ✨*");
try {
let numero = menc_os2 ? menc_os2.split('@')[0] : q.replace(/\D/g, '');
const getbb = `${numero}@s.whatsapp.net`;
let recadoW;
try {
const recadoUser = await sandro.fetchStatus(getbb);
recadoW = recadoUser[0]?.status?.status || "*privado*";
} catch {
recadoW = "*privado*";
}
const jidParaMencionar = menc_os2 ? menc_os2 : `${numero}@s.whatsapp.net`;
await sandro.sendMessage(
from,
{
text: `*🗿 | ʙɪᴏɢʀᴀꜰɪᴀ ᴅᴏ ᴜꜱᴜᴀʀɪᴏ:* @${numero}\n•\n> ${recadoW}`,
contextInfo: { ...DLchanneldl, mentionedJid: [jidParaMencionar] }
},
{ quoted: info }
);
} catch (e) {
console.log(e);
reply(mess.error());
}
}
break;



case 'cepfoto': {
    try {
        if (!q) return reply(`Digite um CEP\nExemplo: /cepfoto 01001000`)

        let res = await fetch(`https://viacep.com.br/ws/${q}/json/`)
        let json = await res.json()

        if (json.erro) {
            return reply(`CEP não encontrado`)
        }

        let endereco = `${json.logradouro}, ${json.localidade}, ${json.uf}`

        let texto = `CONSULTA CEP\n\n`
        texto += `CEP: ${json.cep}\n`
        texto += `Rua: ${json.logradouro}\n`
        texto += `Bairro: ${json.bairro}\n`
        texto += `Cidade: ${json.localidade}\n`
        texto += `Estado: ${json.uf}\n\n`
        texto += `Mapa: https://www.openstreetmap.org/search?query=${encodeURIComponent(endereco)}`

        // USANDO PLACEHOLDER MAP (sempre funciona)
        let mapa = `https://maps.geoapify.com/v1/staticmap?style=osm-carto&width=600&height=400&center=lonlat:-43.37,-20.66&zoom=15&marker=lonlat:-43.37,-20.66;type:material;color:red`

        let response = await fetch(mapa)

        if (!response.ok) {
            return reply(texto) // fallback
        }

        let buffer = await response.buffer()

        await sandro.sendMessage(from, {
            image: buffer,
            caption: texto
        })

    } catch (e) {
        console.log(e)
        reply(`Erro ao carregar imagem, mas o CEP foi encontrado.`)
    }
}
break

case 'bancos': {
    try {

        let res = await fetch(`https://brasilapi.com.br/api/banks/v1`)
        let json = await res.json()

        if (!Array.isArray(json)) {
            return reply(`Erro ao buscar bancos`)
        }

        let texto = `LISTA DE BANCOS\n\n`

        json.forEach(b => {
            texto += `Código: ${b.code}\n`
            texto += `Nome: ${b.name}\n\n`
        })

        reply(texto)

    } catch (e) {
        console.log(e)
        reply(`Erro ao buscar bancos`)
    }
}
break

case 'banco': {
    if (!q) return reply(`Digite o código do banco!\nExemplo: /banco 001`)

    try {
        await reagir(from, "🏦")

        let codigo = q.replace(/\D/g, '')

        let res = await fetch(`https://brasilapi.com.br/api/banks/v1/${codigo}`)
        let json = await res.json()

        if (json.message) {
            return reply(`Banco não encontrado!`)
        }

        let texto = `CONSULTA DE BANCO\n\n`
        texto += `Código: ${json.code}\n`
        texto += `Nome: ${json.name}\n`
        texto += `ISPB: ${json.ispb}\n`
        texto += `Nome completo: ${json.fullName}\n\n`

        reply(texto)

    } catch (e) {
        console.log(e)
        reply(`Erro ao consultar banco`)
    }
}
break

case 'feriados': {
    let ano = q ? q.replace(/\D/g, '') : new Date().getFullYear()

    if (ano.length !== 4) return reply(`Digite um ano válido!\nExemplo: /feriados 2026`)

    try {
        await reagir(from, "📅")

        let res = await fetch(`https://brasilapi.com.br/api/feriados/v1/${ano}`)
        let json = await res.json()

        if (!Array.isArray(json)) {
            return reply(`❌ Não foi possível buscar os feriados!`)
        }

        let texto = `*FERIADOS DO BRASIL - ${ano}*\n\n`

        json.forEach(f => {
            texto += `${f.name}\n`
            texto += `${f.date}\n\n`
        })

        texto += `🌐 Fonte: SANDRO`

        reply(texto)

    } catch (e) {
        console.log(e)
        reply(`❌ Erro ao buscar feriados`)
    }
}
break


case 'google': {
if (!q) return reply(`🔎 Digite algo para pesquisar!`);

try {
    await reagir(from, "🔎");

    const res = await fetch('https://google.serper.dev/search', {
        method: 'POST',
        headers: {
            'X-API-KEY': getLegacyApiKey('SERPER'),
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            q: q,
            num: 5 // puxa mais resultados
        })
    });

    const data = await res.json();

    if (!data.organic || data.organic.length === 0) {
        return reply("❌ Nenhum resultado encontrado!");
    }

    let texto = `╭━━━〔 🔎 PESQUISA GOOGLE 〕━━━⬣\n`;
    texto += `┃ 📌 *Busca:* ${q}\n`;
    texto += `╰━━━━━━━━━━━━━━━━━━⬣\n\n`;

    data.organic.slice(0, 5).forEach((item, i) => {
        texto += `╭─❍ *${i + 1}. ${item.title}*\n`;
        texto += `│ 🔗 ${item.link}\n`;
        texto += `│ 📝 ${item.snippet}\n`;
        texto += `╰──────────────⬣\n\n`;
    });

    texto += `💡 *Resultados*`;

    reply(texto);

} catch (e) {
    console.log(e);
    reply("❌ Erro ao pesquisar.");
}
}
break;

case 'mov-audio-menu': {
if(!SoDono) return reply(enviar.msg.donosmt)
const context = info.message?.extendedTextMessage?.contextInfo;

if (!context?.quotedMessage) return reply("Marque um áudio!");

const quoted = context.quotedMessage;

if (!quoted.audioMessage) return reply("Marque um áudio válido!");

try {
    await reagir(from, "⌛");

    const stream = await downloadContentFromMessage(quoted.audioMessage, 'audio');
    let buffer = Buffer.from([]);

    for await (const chunk of stream) {
        buffer = Buffer.concat([buffer, chunk]);
    }

    
    const path = require('path');

    const pasta = './assets/audio';
    if (!fs.existsSync(pasta)) fs.mkdirSync(pasta, { recursive: true });

    const filePath = path.join(pasta, 'menu.mp3');

    fs.writeFileSync(filePath, buffer);

    reply(`✅ Áudio salvo como menu.mp3!\n📁 ${filePath}`);

} catch (e) {
    console.log(e);
    reply("❌ Erro ao salvar o áudio.");
}

}
break;

case 'amongus': case 'aniversario': case 'zombie': case 'desfoque': case 'glitch':
case 'write': case 'colorido': case 'estrelas':  case 'grafite':
case 'grafite2': case 'advancedglow': case 'typography': case 'pixelglitch':
case 'neonglitch': case 'flag': case 'flag3d': case 'deleting': case 'glowing':
case 'underwater': case 'logomaker': case 'cartoon': case 'papercut':
case 'watercolor': case 'effectclouds': case 'blackpinklogo': case 'gradient':
case 'summerbeach': case 'luxurygold': case 'multicoloredneon':
case 'sandsummer': case 'galaxywallpaper': case '1917': case 'makingneon':
case 'royal': case 'freecreate': case 'galaxy': case 'darkgreen':
case 'lighteffects':  case 'neondevil': case 'frozen':
case 'wooden3d': case 'metal3d': case 'ligatures': case '3druby':
case 'sunset': case 'cemetery': case 'halloween': case 'horror':
case 'blood': case 'joker': case 'clouds': {

if (!q?.trim()) return reply("Você precisa acrescentar um texto!");

try {
    await sandro.sendMessage(from, { react: { text: "⌛", key: info.key } });

    const image = await getBuffer(
        Shizukusite + `/api/logos/${command}?texto=${q.trim()}&apikey=${SHIZUKU_KEY}`
    );

    if (!image) return reply("vish! parece que a API não retornou um resultado válido.😢");

    await sandro.sendMessage(
        from,
        { image, caption: `Logo gerada com sucesso!` },
        { quoted: info }
    );

} catch (error) {
    reply(mess.error());
    console.log(error);
}

break;
}

// LOGOS DE 2 TEXTOS
case 'thor': case 'blackpink2': case 'deadpool': case 'amongus2': case 'neon': case 'stone3d': case 'captainamerica': case 'graffiti': case 'avengers': case 'vintage': case 'buoys': case 'wood': case 'space3d': case 'wolf': case 'steel': case 'lattering': case 'pornhub': {
if (!args[0]) return reply(`Exemplo de uso: ${prefix + command} Shizuku | APIs`);
let text = args.join(" "), [t1, t2] = text.split("|");
t1 = t1 ? t1.trim() : ""; t2 = t2 ? t2.trim() : "APIs";
if (!t1) return reply(`Coloque pelo menos o primeiro texto!\nEx: ${prefix + command} Sandro | md`);
await reagir(from, "⌛");
try {
const url = `${Shizukusite}/api/logos/${command}?texto1=${encodeURIComponent(t1)}&texto2=${encodeURIComponent(t2)}&apikey=${SHIZUKU_KEY}`;
const image = await getBuffer(url);
await sandro.sendMessage(from, { image: image, caption: `✅ *Logo ${command} Gerada!*\n\n*Texto 1:* ${t1}\n*Texto 2:* ${t2}` }, { quoted: info });
} catch (e) { console.error(e); reply("❌ Erro ao gerar a logo. Tente novamente mais tarde."); }
}
break;


case 'consultanome': {
    if (!q) return reply(`Use: ${prefix + command} nome completo`)

    try {
    reply(`❤️ *Buscando por ${q} Aguarde...*❤️`);
        // Codifica o nome para URL
        const nome = encodeURIComponent(q.trim())
        if (!nome) return reply("Digite um nome válido")

        const api = `https://systemzone.store/api/consultas/nome?apikey=${getLegacyApiKey("SYSTEMZONE")}&name=${nome}`

        const { data: res } = await axios.get(api, { 
            timeout: 15000,
            headers: { 'User-Agent': 'Mozilla/5.0' }
        })

        if (!res || !res.status) {
            return reply("Nome não encontrado ou consulta falhou")
        }

        // A API retorna array, o primeiro item é o total, os demais são os resultados
        const resultados = res.result || []
        
        // Remove o primeiro item (total) e pega os dados reais
        const dados = resultados.slice(1)

        if (dados.length === 0) {
            return reply("Nenhum resultado encontrado para esse nome")
        }

        // Monta o texto para cada resultado encontrado
        const texto = dados.map((pessoa, index) => `*RESULTADO ${index + 1} DE ${dados.length}*

> *DADOS PESSOAIS*
• Nome: ${pessoa.nome || "Não informado"}
• CPF: ${pessoa.cpf || "Não informado"}
• Nascimento: ${pessoa.nasc || "Não informado"}
• Sexo: ${pessoa.sexo === "M" ? "Masculino" : pessoa.sexo === "F" ? "Feminino" : "Não informado"}
• Estado Civil: ${pessoa.estadocivil || "Não informado"}

> *FILIAÇÃO*
• Mãe: ${pessoa.nomemae || "Não informado"}
• Pai: ${pessoa.nomepai || "Não informado"}

> *NATURALIDADE*
• Naturalidade: ${pessoa.naturalidade || "Não informado"}

> *SITUAÇÃO CADASTRAL*
• Situação: ${pessoa.situacao || "Não informado"}
• Data Entrada: ${pessoa.rfentrada || "Não informado"}
• Última Atualização: ${pessoa.rfatualizacao || "Não informado"}
`).join('\n─────────────────\n')

        const mensagemFinal = `
*CONSULTA POR NOME*
Total de resultados: ${res.total || dados.length}

${texto}
`.trim()

        await sandro.sendMessage(from, { text: mensagemFinal }, { quoted: info })

    } catch (e) {
        console.error("ERRO NA CONSULTA NOME:", e.message)
        
        if (e.code === 'ECONNABORTED' || e.message?.includes('timeout')) {
            reply("⏳ A API demorou muito para responder. Tente novamente.")
        } else if (e.code === 'ERR_STREAM_PREMATURE_CLOSE') {
            reply("❌ Conexão fechada pela API. A API pode estar instável.")
        } else if (e.response?.status === 401 || e.response?.status === 403) {
            reply("🔑 API Key inválida ou expirada.")
        } else if (e.response?.status === 404) {
            reply("🔍 Nome não encontrado na base de dados.")
        } else if (e.response?.status >= 500) {
            reply("🔧 Erro no servidor da API. Tente mais tarde.")
        } else {
            reply(`❌ Erro ao consultar nome: ${e.message}`)
        }
    }
}
break





case 'ffperfil': {
  try {
    if (!q) return reply(`Digite o ID\nExemplo: ${prefix}ff 3492181661`);

    reply("Buscando perfil...");

    const url = `${zerosite}/api/get/ff-player-profile?id=${q}&apikey=${API_KEY_ZEROTWO}`;
    const response = await axios.get(url);
    const data = response.data;

    if (!data.status) {
      return reply("Perfil não encontrado");
    }

    const res = data.resultados;

    const texto = `
> PERFIL FREE FIRE

*Nome:* ${res.nome}
*ID:* ${res.id}
*Nivel:* ${res.nivel}
*XP:* ${res.xp}
*Likes:* ${res.likes}

*Ultimo login:* ${res.ultimo_login}
*Conta criada:* ${res.data_criacao}

ESTATISTICAS

Solo
Partidas: ${res.estatisticas.partidas.solo}
Vitorias: ${res.estatisticas.vitorias.solo}
Abates: ${res.estatisticas.abates.solo}
Headshots: ${res.estatisticas.headshots.solo}

Duo
Partidas: ${res.estatisticas.partidas.duo}
Vitorias: ${res.estatisticas.vitorias.duo}
Abates: ${res.estatisticas.abates.duo}
Headshots: ${res.estatisticas.headshots.duo}

Squad
Partidas: ${res.estatisticas.partidas.squad}
Vitorias: ${res.estatisticas.vitorias.squad}
Abates: ${res.estatisticas.abates.squad}
Headshots: ${res.estatisticas.headshots.squad}
`;

    await reply(texto);

  } catch (err) {
    console.error(err);
    reply("Erro ao buscar perfil");
  }
}
break;

case 'parentes': {
  try {
    if (!q) return reply(`❌ Digite um CPF\nExemplo: ${prefix}parentes 12344567788`);

    reply("🔍 Buscando parentes, aguarde...");

    const url = `https://systemzone.store/api/consultas/parentes?apikey=${SANDROPX}&cpf=${q}`;
    const response = await axios.get(url);
    const data = response.data;

    if (!data.status || !data.result?.success) {
      return reply("❌ Não foi possível consultar.");
    }

    const res = data.result;

    // Se não tiver parentes
    if (!res.data || res.data.length === 0) {
      return reply(`
╭━━━〔 👨‍👩‍👧 PARENTES 〕━━━⬣
┃
┃ 👤 Nome: ${res.pessoa || "Não informado"}
┃ 🆔 CPF: ${res.query}
┃
┃ ❌ Nenhum parente encontrado.
┃
╰━━━━━━━━━━━━━━━━━━⬣
      `);
    }

    // Se tiver parentes
    let lista = "";
    res.data.forEach((p, i) => {
      lista += `\n┃ ${i + 1}. ${p.nome || "Sem nome"} (${p.vinculo || "N/I"})`;
    });

    const texto = `
╭━━━〔 👨‍👩‍👧 PARENTES 〕━━━⬣
┃
┃ 👤 Nome: ${res.pessoa || "Não informado"}
┃ 🆔 CPF: ${res.query}
┃
┃ 📊 Total: ${res.total}
┃
┃ 📌 Lista:${lista}
┃
╰━━━━━━━━━━━━━━━━━━⬣
    `;

    await reply(texto);

  } catch (err) {
    console.error(err);
    reply("❌ Erro ao consultar parentes.");
  }
}
break;

case 'meme': {
  try {
    let res = await fetchJson('https://api.waifu.pics/sfw/neko')

    await sandro.sendMessage(from, {
      image: { url: res.url },
      caption: "Aqui esta!!"
    }, { quoted: info })

  } catch {
    reply("Erro ao buscar imagem 😥")
  }
}
break

//





case 'cavalos':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)

if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)
if(!JSON.stringify(cavalosrpg).includes(sender)) return reply(`Você precisa comprar um cavalo primeiro... Consulte a ${prefix}lojadecavalos`)
horacav = moment.tz('America/Sao_Paulo').format('HH')
diacav = moment.tz('America/Sao_Paulo').format('DD')
mmcav = moment.tz('America/Sao_Paulo').format('MM')
AB = sabrpg.map(i => i.id).indexOf(sender)
AC = cavalosrpg.map(a => a.id).indexOf(sender)
AD = cavalosrpg[AC].cavalos.map(b => b.nomedocavalo).indexOf(cavalosrpg[AC].setcav)
if(Number(args[0]) > Number(sabrpg[AB].money)) return reply(`Você não possui saldo suficiente para efetuar essa aposta...`)
if(Number(cavalosrpg[AC].cavalos.length) <= 0) return reply(`Você não possui cavalos... Acho bom comprar um 🐴`)
if(!JSON.stringify(cavalosrpg[AC].cavalos).includes(cavalosrpg[AC].setcav)) return reply(`Você precisa definir o cavalo que irá correr... Use o comando ${prefix}setcavalo`)
if(cavalosrpg[AC].cavalos[AD].sela == false) return reply(`Você precisa comprar uma sela para seu alazão...`)
if(cavalosrpg[AC].cavalos[AD].dor == true) return reply(`Seu cavalo está doente... Compre uma _"cdcv3"_ na loja de CAVALOS para ele voltar a correr 💉`)
if(cavalosrpg[AC].cavalos[AD].fratura == true) return reply(`Seu cavalo está com a pata torcida... Vá comprar uma atadura para tratar isso 🐴`)
//passar eo limite por hora...
if(Number(cavalosrpg[AC].corridaL) === 0 && Number(cavalosrpg[AC].corridaH) === Number(horacav) && Number(cavalosrpg[AC].corridaD) === Number(diacav) && Number(cavalosrpg[AC].corridaM) === Number(mmcav)) return reply(`Seu cavalo parece cansado... Pfvr, volte mais tarde 🐴`)
//passar de uma hora pra outra...
if(Number(horacav) > Number(cavalosrpg[AC].corridaH) && Number(cavalosrpg[AC].corridaD) === Number(diacav) && Number(cavalosrpg[AC].corridaM) === Number(mmcav)) {
cavalosrpg[AC].corridaL = 20
cavalosrpg[AC].corridaH = horacav
fs.writeFileSync("./database/usuarios/SystemRPG/cavalosrpg.json", JSON.stringify(cavalosrpg))
reply(`Seu cavalo parece ótimo... Você já pode correr dnv 🐴`)
}
//passar de um dia pro outro...
if(Number(diacav) > Number(cavalosrpg[AC].corridaD) && Number(cavalosrpg[AC].corridaM) === Number(mmcav)) {
cavalosrpg[AC].corridaL = 20
cavalosrpg[AC].corridaH = horacav
cavalosrpg[AC].corridaD = diacav
fs.writeFileSync("./database/usuarios/SystemRPG/cavalosrpg.json", JSON.stringify(cavalosrpg))
reply(`${tempo} ${sabrpg[AB].nome}, seu cavalo está pronto para correr ?`)
}
//passar de um mês pro outro...
if(Number(mmcav) > Number(cavalosrpg[AC].corridaM)) {
cavalosrpg[AC].corridaL = 20
cavalosrpg[AC].corridaH = horacav
cavalosrpg[AC].corridaD = diacav
cavalosrpg[AC].corridaM = mmcav
fs.writeFileSync("./database/usuarios/SystemRPG/cavalosrpg.json", JSON.stringify(cavalosrpg))
reply(`Um novo mês de vitórias se inicia...`)
}
//aposta liberada...
if(Number(cavalosrpg[AC].corridaL) > 0 && Number(cavalosrpg[AC].corridaH) === Number(horacav)) {
if(!q) return reply(`A corrida já vai começar... Faça logo a sua aposta`)
if(!Number(args[0])) return reply(`${args[0]} não é número...`)
if(Number(args[0]) < 100) return reply(`Nossas apostas são de alto nível aqui... Você não pode apostar menos de R$ 100.00`)
if(Number(args[0]) > 10000) return reply(`Nossas apostas são de alto nível aqui... Mas você não pode apostar mais do que R$ 10000.00`)
MT = Math.floor(Math.random()*40)
if(Number(MT) === 0) {
GB = cavalosrpg.map(m => m.id).indexOf(sender)
GF = cavalosrpg[GB].cavalos.map(n => n.nomedocavalo).indexOf(cavalosrpg[GB].setcav)
cavalosrpg[AC].corridaL = 20
cavalosrpg[AC].corridaH = horacav
cavalosrpg[AC].corridaD = diacav
cavalosrpg[AC].corridaM = mmcav
cavalosrpg[GB].cavalos.splice(GF, 1)
fs.writeFileSync("./database/usuarios/SystemRPG/cavalosrpg.json", JSON.stringify(cavalosrpg))
acidente = [`Seu cavalo se acidentou na pista e morreu... Meus sentimentos ao alazão ❤️`, `Seu cavalo adoeceu gravemente antes da corrida, e morreu... Meus pêsames pelo seu amigo ❤️`]
reply(acidente[Math.floor(Math.random()*acidente.length)])
}
if(Number(MT) === 1) {
cavalosrpg[AC].cavalos[AD].dor = true
fs.writeFileSync("./database/usuarios/SystemRPG/cavalosrpg.json", JSON.stringify(cavalosrpg))
reply(`Seu cavalo adoeceu, mas felizmente, essa doença não é para a morte... Vá comprar a _"cdcv3",_ uma vacina poderosa que vai levantar o seu alazão na hora 💉`)
}
if(Number(MT) === 2) {
cavalosrpg[AC].cavalos[AD].fratura = true
fs.writeFileSync("./database/usuarios/SystemRPG/cavalosrpg.json", JSON.stringify(cavalosrpg))
reply(`🥹 Seu alazão fraturou a patinha enquanto corria... Vá comprar uma atadura na ${prefix}lojadecavalos`)
}
if(Number(MT) > 2) {
cavt1 = SoDono ? 1 : Math.floor(Math.random()*19)+1
cavt2 = Number(cavt1) - Number(cavalosrpg[AC].cavalos[AD].tipo)
if(Number(cavt2) < 1){
var cav = 1
} else {
var cav = cavt2
}
//primeiro lugar...
if(Number(cav) === 1){
cav2 = Number(args[0]) + Number(args[0]) / 2
DCV = cavalosrpg[AC].cavalos.map(h => h.nomedocavalo).indexOf(cavalosrpg[AC].setcav)
MC = sabrpg[AB].money
sabrpg[AB].money = Number(MC) + Number(cav2)
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
if(Number(cavalosrpg[AC].countDc) > 0) {
L1 = 1
} else {
L1 = 0
}
if(Number(cavalosrpg[AC].cavalos[DCV].dercav) > 0) {
LC1 = 1
} else {
LC1 = 0
}
LM = cavalosrpg[AC].corridaL
CV = cavalosrpg[AC].countVc
CCD = cavalosrpg[AC].countDc
CVC = cavalosrpg[AC].capitalVc
CVCS = cavalosrpg[AC].cavalos[DCV].viccav
CDCS = cavalosrpg[AC].cavalos[DCV].dercav
DTCS = cavalosrpg[AC].cavalos[DCV].contdin
DVCS = cavalosrpg[AC].cavalos[DCV].lucdin
cavalosrpg[AC].corridaL = Number(LM) - 1
cavalosrpg[AC].countVc = Number(CV) + 1
cavalosrpg[AC].countDc = Number(CCD) - Number(L1)
cavalosrpg[AC].capitalVc = Number(CVC) + Number(cav2)
cavalosrpg[AC].cavalos[DCV].viccav = Number(CVCS)+1
cavalosrpg[AC].cavalos[DCV].dercav = Number(CDCS) - Number(LC1)
cavalosrpg[AC].cavalos[DCV].contdin = Number(DTCS) + Number(args[0])
cavalosrpg[AC].cavalos[DCV].lucdin = Number(DVCS) + Number(cav2)
fs.writeFileSync("./database/usuarios/SystemRPG/cavalosrpg.json", JSON.stringify(cavalosrpg))
reply(`🐎 A corrida terminou, e seu cavalo chegou em ${cav}º lugar... Você ganhou R$ ${Number(cav2).toFixed(2)}`)
};
//segundo lugar...
if(Number(cav) === 2){
DCV = cavalosrpg[AC].cavalos.map(h => h.nomedocavalo).indexOf(cavalosrpg[AC].setcav)
cav2 = args[0]
MC = sabrpg[AB].money
sabrpg[AB].money = Number(MC) + Number(cav2)
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
if(Number(cavalosrpg[AC].countDc) > 0) {
L2 = 1
} else {
L2 = 0
}
if(Number(cavalosrpg[AC].cavalos[DCV].dercav) > 0) {
LC2 = 1
} else {
LC2 = 0
}
LM = cavalosrpg[AC].corridaL
CV = cavalosrpg[AC].countVc
CCD = cavalosrpg[AC].countDc
CVC = cavalosrpg[AC].capitalVc
CVCS = cavalosrpg[AC].cavalos[DCV].viccav
CDCS = cavalosrpg[AC].cavalos[DCV].dercav
DTCS = cavalosrpg[AC].cavalos[DCV].contdin
DVCS = cavalosrpg[AC].cavalos[DCV].lucdin
cavalosrpg[AC].corridaL = Number(LM) - 1
cavalosrpg[AC].countVc = Number(CV) + 1
cavalosrpg[AC].countDc = Number(CCD) - Number(L2)
cavalosrpg[AC].capitalVc = Number(CVC) + Number(cav2)
cavalosrpg[AC].cavalos[DCV].viccav = Number(CVCS)+1
cavalosrpg[AC].cavalos[DCV].dercav = Number(CDCS) - Number(LC2)
cavalosrpg[AC].cavalos[DCV].contdin = Number(DTCS) + Number(args[0])
cavalosrpg[AC].cavalos[DCV].lucdin = Number(DVCS) + Number(cav2)
fs.writeFileSync("./database/usuarios/SystemRPG/cavalosrpg.json", JSON.stringify(cavalosrpg))
reply(`🐎 A corrida terminou, e seu cavalo chegou em ${cav}º lugar... Você ganhou R$ ${Number(cav2).toFixed(2)}`)
};
//terceiro lugar...
if(Number(cav) === 3){
DCV = cavalosrpg[AC].cavalos.map(h => h.nomedocavalo).indexOf(cavalosrpg[AC].setcav)
cav2 = Number(args[0]) / 2
MC = sabrpg[AB].money
sabrpg[AB].money = Number(MC) + Number(cav2)
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
if(Number(cavalosrpg[AC].countDc) > 0) {
L3 = 1
} else {
L3 = 0
}
if(Number(cavalosrpg[AC].cavalos[DCV].dercav) > 0) {
LC3 = 1
} else {
LC3 = 0
}
LM = cavalosrpg[AC].corridaL
CV = cavalosrpg[AC].countVc
CCD = cavalosrpg[AC].countDc
CVC = cavalosrpg[AC].capitalVc
CVCS = cavalosrpg[AC].cavalos[DCV].viccav
CDCS = cavalosrpg[AC].cavalos[DCV].dercav
DTCS = cavalosrpg[AC].cavalos[DCV].contdin
DVCS = cavalosrpg[AC].cavalos[DCV].lucdin
cavalosrpg[AC].corridaL = Number(LM) - 1
cavalosrpg[AC].countVc = Number(CV) + 1
cavalosrpg[AC].countDc = Number(CCD) - Number(L3)
cavalosrpg[AC].capitalVc = Number(CVC) + Number(cav2)
cavalosrpg[AC].cavalos[DCV].viccav = Number(CVCS)+1
cavalosrpg[AC].cavalos[DCV].dercav = Number(CDCS) - Number(LC3)
cavalosrpg[AC].cavalos[DCV].contdin = Number(DTCS) + Number(args[0])
cavalosrpg[AC].cavalos[DCV].lucdin = Number(DVCS) + Number(cav2)
fs.writeFileSync("./database/usuarios/SystemRPG/cavalosrpg.json", JSON.stringify(cavalosrpg))
reply(`🐎 A corrida terminou, e seu cavalo chegou em ${cav}º lugar... Você ganhou R$ ${Number(cav2).toFixed(2)}`)
};
//outros lugares...
if(Number(cav) > 3){
DCV = cavalosrpg[AC].cavalos.map(h => h.nomedocavalo).indexOf(cavalosrpg[AC].setcav)
MC = sabrpg[AB].money
sabrpg[AB].money = Number(MC) - Number(args[0])
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
LM = cavalosrpg[AC].corridaL
CCD = cavalosrpg[AC].countDc
CDC = cavalosrpg[AC].capitalDc
CDCS = cavalosrpg[AC].cavalos[DCV].dercav
DTCS = cavalosrpg[AC].cavalos[DCV].contdin
cavalosrpg[AC].corridaL = Number(LM) - 1
cavalosrpg[AC].countDc = Number(CCD) + 1
cavalosrpg[AC].capitalDc = Number(CDC) + Number(args[0])
cavalosrpg[AC].cavalos[DCV].dercav = Number(CDCS)+1
cavalosrpg[AC].cavalos[DCV].contdin = Number(DTCS) + Number(args[0])
fs.writeFileSync("./database/usuarios/SystemRPG/cavalosrpg.json", JSON.stringify(cavalosrpg))
reply(`🐎 A corrida terminou, e seu cavalo chegou em ${cav}º lugar... Você perdeu R$ ${Number(args[0]).toFixed(2)}`)
}
}
}
break






case 'comprargalinheiro':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)
if(JSON.stringify(galosrpg).includes(sender)) return reply(`Você já possui um galinheiro... Consulte a ${prefix}lojadegalos para comprar galos e brigar com eles 🐔`)
AB = sabrpg.map(i => i.id).indexOf(sender)
if(Number(sabrpg[AB].money) < 500) return reply(`Vc não possui dinheiro suficiente para efetuar essa compra...`)
gaH = moment.tz('America/Sao_Paulo').format('HH')
gaD = moment.tz('America/Sao_Paulo').format('DD')
gaM = moment.tz('America/Sao_Paulo').format('MM')
galosrpg.push({id: sender,level: 1,galinhas: 0,durabilidade: 5,ovos: 0,countVg: 0,countDg: 0,dinVg: 0,luckVg: 0,brigaL: 15,brigaH: gaH,brigaD: gaD,brigaM: gaM,galos: []})
fs.writeFileSync("./database/usuarios/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
MC = sabrpg[AB].money
sabrpg[AB].money = Number(MC) - 500
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`🐔 Galinheiro comprado com sucesso... Consulte ${prefix}galinheiro`)
break

case 'comprargalo':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)
if(!JSON.stringify(galosrpg).includes(sender)) return reply(`Você precisa comprar um galinheiro antes...`)
if(!q) return reply(`Defina a quantidade de galos que deseja comprar...`)
if(!Number(args[0])) return reply(`${args[0]} não é número...`)
AB = sabrpg.map(i => i.id).indexOf(sender)
AD = galosrpg.map(b => b.id).indexOf(sender)
if(Number(args[0]) === 1 || Number(args[0]) === 6 || Number(args[0]) === 12) {
if(Number(Number(galosrpg[AD].galos.length) + Number(args[0])) > Number(Number(galosrpg[AD].level)*5)) return reply(`Não é possível comprar +${args[0]} ${Number(args[0]) < 2 ? 'galo' : 'galos'}, pois excede o limite de ${Number(galosrpg[AD].level)*5} galos...\n• Caso queira aumentar o tamanho do galinheiro, use ${prefix}upgalo`)
if(Number(args[0]) === 1) {
if(Number(sabrpg[AB].money) < 100) return reply(`Vc não possui saldo suficiente para efetuar essa compra!`)
galosrpg[AD].galos.push({vida: 4, vigalo: 0, degalo: 0})
fs.writeFileSync("./database/usuarios/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
MD = sabrpg[AB].money
sabrpg[AB].money = Number(MD) - 100
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`1 galo comprado com sucesso!`)
}
if(Number(args[0]) === 6) {
if(Number(sabrpg[AB].money) < 550) return reply(`Vc não possui saldo suficiente para efetuar essa compra...`)
for(i = 0; i < 6; i++) {
galosrpg[AD].galos.push({vida: 4,vigalo: 0,degalo: 0})
fs.writeFileSync("./database/usuarios/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
}
MD = sabrpg[AB].money
sabrpg[AB].money = Number(MD) - 550
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`6 galos comprado com sucesso.`)
}
if(Number(args[0]) === 12) {
if(Number(sabrpg[AB].money) < 1000) return reply("Vc não possui saldo suficiente para efetuar essa compra...")
for(i = 0; i < 12; i++) {
galosrpg[AD].galos.push({vida: 4,vigalo: 0,degalo: 0})
fs.writeFileSync("./database/usuarios/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
}
MD = sabrpg[AB].money
sabrpg[AB].money = Number(MD) - 1000
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`12 galos comprado com sucesso`)
}
} else {
reply(`Não é possível comprar essa quantidade de galos...`)
}
break

case 'vendergalo':
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)
if(!JSON.stringify(galosrpg).includes(sender)) return reply(`Você precisa comprar um galo antes...`)
if(!q) return reply(`Defina a quantidade de galos que deseja vender... Ex:
${prefix+command} 3`)
if(!Number(args[0])) return reply(`${args[0]} não é número...`)
if(Number(args[0]) < 1) return reply(`Não é possível vender menos que um galo...`)
if(q.includes('.')) return reply(`Não pode números decimais...`)
AB = sabrpg.map(i => i.id).indexOf(sender)
AD = galosrpg.map(b => b.id).indexOf(sender)
if(Number(args[0]) > Number(galosrpg[AD].galos.length)) return reply(`Não é possível vender um número maior do que a quantidade de galos em seu galinheiro...`)
if(Number(galosrpg[AD].galos.length) === 0) return reply(`Você precisa comprar um galo antes...`)
for(i = 0; i < Number(args[0]); i++) {
galosrpg[AD].galos.splice(i, 1)
fs.writeFileSync("./database/usuarios/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
}
MD = sabrpg[AB].money
sabrpg[AB].money = Number(MD) + Number(Number(args[0]) * 50)
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`${args[0]} galo${Number(args[0]) > 1 ? 's' : ''} vendido${Number(args[0]) > 1 ? 's' : ''} com sucesso, avaliado${Number(args[0]) > 1 ? 's' : ''} em R$ ${Number(Number(args[0]) * 50).toFixed(2)}`)
break

case 'comprargalinha':
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)
if(!JSON.stringify(galosrpg).includes(sender)) return reply(`Você precisa comprar um galinheiro antes...`)
AB = sabrpg.map(i => i.id).indexOf(sender)
AD = galosrpg.map(b => b.id).indexOf(sender)
if(!q) return reply("Coloque a quantidade de galinhas que deseja comprar...")
if(!Number(args[0])) return reply(`${args[0]} não é número...`)
if(Number(args[0]) < 1) return reply(`Não é possível comprar menos que uma galinha...`)
if(q.includes('.')) return reply(`Não pode números decimais...`)
if(Number(args[0]) > Number(Number(galosrpg[AD].level) * 2)) return reply(`Não é possível comprar +${args[0]} galinhas, pois excede o limite de ${Number(galosrpg[AD].level) * 2} galinhas em seu galinheiro...\nCaso queira aumentar o tamanho do seu galinheiro, use o comando ${prefix}upgalo`)
if(Number(sabrpg[AB].money) < Number(Number(args[0]) * 100)) return reply(`${args[0]} galinha${Number(args[0]) > 1 ? 's' : ''} ${Number(args[0]) > 1 ? "irão" : "irá"} custar R$ ${Number(Number(args[0]) * 100).toFixed(2)}, e este valor excede o saldo monetário em sua conta...`)
GG = galosrpg[AD].galinhas
galosrpg[AD].galinhas = Number(GG) + Number(args[0])
fs.writeFileSync("./database/usuarios/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
MD = sabrpg[AB].money
sabrpg[AB].money = Number(MD) - Number(Number(args[0]) * 100)
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`${args[0]} galinha${Number(args[0]) > 1 ? 's' : ''} comprada${Number(args[0]) > 1 ? 's' : ''} com sucesso...`)
break

case 'vendergalinha':
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)
if(!JSON.stringify(galosrpg).includes(sender)) return reply(`Você precisa comprar uma galinha antes...`)
if(!q) return reply(`Defina a quantidade de galinhas que deseja vender... Ex:
${prefix+command} 3`)
if(!Number(args[0])) return reply(`${args[0]} não é número...`)
if(Number(args[0]) < 1) return reply(`Não é possível vender menos que uma galinha...`)
if(q.includes('.')) return reply(`Não pode números decimais...`)
AB = sabrpg.map(i => i.id).indexOf(sender)
AD = galosrpg.map(b => b.id).indexOf(sender)
if(Number(args[0]) > Number(galosrpg[AD].galinhas)) return reply(`Não é possível vender um número maior do que a quantidade de galinhas em seu galinheiro...`)
if(Number(galosrpg[AD].galinhas) === 0) return reply(`Você precisa comprar uma galinha antes...`)
QG = galosrpg[AD].galinhas
galosrpg[AD].galinhas = Number(QG) - Number(args[0])
fs.writeFileSync("./database/usuarios/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
MD = sabrpg[AB].money
sabrpg[AB].money = Number(MD) + Number(Number(args[0]) * 50)
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`${args[0]} galinha${Number(args[0]) > 1 ? 's' : ''} vendida${Number(args[0]) > 1 ? 's' : ''} com sucesso, avaliada${Number(args[0]) > 1 ? 's' : ''} em R$ ${Number(Number(args[0]) * 50).toFixed(2)}`)
break

case 'hackneon': case 'fpsmascote': 
case 'equipemascote': case 'txtquadrinhos': case 'ffavatar':
case 'mascotegame': case 'angelglx': case 'gizquadro': 
case 'wingeffect': case 'blackpink':
case 'girlmascote': case 'logogame':
try {
if(!q.trim()) return reply(`Digite algo, Exemplo: ${prefix+command} bronxys`);  
reply("[❗] aguarde uns minutinho estou processado");
ABC = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/logos_EPH?texto=${q}&category=${command}&apikey=${API_SANDRO_MD}`);
sandro.sendMessage(from, {image: {url: ABC.resultado}}, {quoted: info}).catch(() => {
return reply("Erro..")
})
} catch (e) {
return reply("Erro...");
}
break;

case 'cruzargg':
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)
if(!JSON.stringify(galosrpg).includes(sender)) return reply(`Você precisa comprar um galinheiro antes...`)
AD = galosrpg.map(b => b.id).indexOf(sender)
if(Number(galosrpg[AD].galos.length) === 0) return reply("Você não possui galos...🐓 É necessário ao menos 1 galo para cruzar.")
if(Number(galosrpg[AD].galinhas) === 0) return reply("Você não possui galinhas...🐔 É necessário ao menos 1 galinha para cruzar.")
if(Number(galosrpg[AD].ovos) < Number(Number(galosrpg[AD].level * 2))) {
alecruz = Math.floor(Math.random() * 100)
if(alecruz > 50) {
if(Number(galosrpg[AD].durabilidade) > 1) {
QD = galosrpg[AD].durabilidade
galosrpg[AD].durabilidade = Number(QD) - 1
fs.writeFileSync("./database/usuarios/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
resp = "Não houve sucesso no cruzamento das aves"
} else {
QG = galosrpg[AD].galinhas
galosrpg[AD].galinhas = Number(QG) - 1
galosrpg[AD].durabilidade = Number(galosrpg[AD].level)
fs.writeFileSync("./database/usuarios/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
resp = `Sua galinha não estava pronta para o cruzamento, e acabou morrendo...${Number(galosrpg[AD].galinhas) > 0 ? `\nFelizmente, você ainda possui ${galosrpg[AD].galinhas} galinha${Number(galosrpg[AD].galinhas) > 1 ? `s` : ``} 🐔` : ``}`
}
} else {
if(Number(galosrpg[AD].durabilidade) > 1) {
QD = galosrpg[AD].durabilidade
QO = galosrpg[AD].ovos
galosrpg[AD].durabilidade = Number(QD) - 1
galosrpg[AD].ovos = Number(QO) + 1
fs.writeFileSync("./database/usuarios/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
resp = `Sucesso, seu cruzamento gerou 1 ovo...
Use ${prefix}chocarovo para tentar a sorte`
} else {
QG = galosrpg[AD].galinhas
QO = galosrpg[AD].ovos
galosrpg[AD].galinhas = Number(QG) - 1
galosrpg[AD].ovos = Number(QO) + 1
galosrpg[AD].durabilidade = Number(galosrpg[AD].level)
fs.writeFileSync("./database/usuarios/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
resp = `Sucesso, seu cruzamento gerou 1 ovo, mas a sua galinha morreu no processo...${Number(galosrpg[AD].galinhas) > 0 ? `\nFelizmente, você ainda possui ${galosrpg[AD].galinhas} ${Number(galosrpg[AD].galinhas) > 1 ? `${galosrpg[AD].galinhas} galinhas` : `1 galinha`}` : ``}`
}
}
reply(`${resp}`)
} else {
reply(`Você atingiu a quantidade máxima de ovos em seu galinheiro... Use ${prefix}chocarovo para choca-los`)
}
break

case 'chocarovo': 
case 'chocar': 
case 'ovo':
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)
if(!JSON.stringify(galosrpg).includes(sender)) return reply(`Você precisa comprar um galinheiro antes...`)
AD = galosrpg.map(b => b.id).indexOf(sender)
if(Number(galosrpg[AD].ovos) <= 0) return reply("Você não possui ovos para chocar...")
if(Number(galosrpg[AD].galos.length) >= Number(Number(galosrpg[AD].level) * 5)) return reply("Todos os seus slots já estão na quantidade máxima..")
aleovo = Math.floor(Math.random() * 100)
if(aleovo > 40) {
QO = galosrpg[AD].ovos
galosrpg[AD].ovos = Number(QO) - 1
fs.writeFileSync("./database/usuarios/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
reply("Sem sucesso ao tentar chocar o ovo!😿")
} else {
QO = galosrpg[AD].ovos
galosrpg[AD].ovos = Number(QO) - 1
galosrpg[AD].galos.push({vida: 4, vigalo: 0, degalo: 0})
fs.writeFileSync("./database/usuarios/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
reply("Sucesso, ovo chocado deu origem a +1 galo para o seu galinheiro 😸☝🏽")
}
break

case 'galinheiro':
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)
setTimeout(() => {reagir(from, "🐔")}, 300)
if(!JSON.stringify(galosrpg).includes(sender)) return reply(`Você precisa comprar um galinheiro antes...`)
AB = sabrpg.map(i => i.id).indexOf(sender)
AD = galosrpg.map(b => b.id).indexOf(sender)
totalG = galosrpg[AD].galos
let medvida = 0
let medvic = 0
let medder = 0
for(i = 0; i < totalG.length; i++) {medvida += totalG[i].vida
if(Number(totalG[i].vigalo) > 0) {medvic += totalG[i].vigalo}
if(Number(totalG[i].degalo) > 0) {medder += totalG[i].degalo}
}
if(Number(galosrpg[AD].galos.length) > 0) {
TT1 = `${Number(Number(`${medvida}`) / Number(galosrpg[AD].galos.length)).toFixed(0)}`
TT2 = `${Number(Number(`${medvic}`) / Number(Number(galosrpg[AD].galos.length) / 2)).toFixed(0)}/${Number(Number(Number(`${medvic}`) + Number(`${medder}`)) / Number(Number(galosrpg[AD].galos.length) / 2)).toFixed(0)}`
TT3 = `${Number(Number(`${medvic}`) / Number(Number(`${medvic}`) + Number(`${medder}`)) * 100).toFixed(1)}%`
} else {
TT1 = `0`
TT2 = `0/0`
TT3 = `0.0%`
}
txt = `Olá *${sender.split("@")[0]}*, aqui está as informações sobre seu galinheiro!\n• Seu galinheiro está atualmente no level: *${galosrpg[AD].level}*\n——\n• [🚧] Área total do Galinheiro: *${Number(galosrpg[AD].level) * Number(galosrpg[AD].level)}m²*\n——\n• [🏡] *Habitantes do seu Galinheiro:*\n• Quantidade de Galo(s) que você tem em seu galinheiro atualmente: *${galosrpg[AD].galos.length}/${Number(galosrpg[AD].level) * 5}*\n• Quantidade de Galinha(s) que você tem em seu galinheiro atualmente: *${galosrpg[AD].galinhas}/${Number(galosrpg[AD].level) * 2}*\n• Quantidade de Ovo(s) que as suas galinhas colocaram: *${galosrpg[AD].ovos}/${Number(galosrpg[AD].level) * 2}*\n• Expectativa média de vida de seus bichinhos: *${TT1}*\n——\n• [🏆] *Médias e Porcentagens:*\n• Sua média de vitórias conquistadas por seu(s) bichinho(s): *${TT2}*\n• Sua média percentual atualmente em seu galinheiro: *${TT3}*`
mention(txt);
break

case 'upgalo':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)
if(!JSON.stringify(galosrpg).includes(sender)) return reply(`Você precisa comprar um galinheiro antes...`)
AB = sabrpg.map(i => i.id).indexOf(sender)
AD = galosrpg.map(b => b.id).indexOf(sender)
if(Number(sabrpg[AB].money) < Number(Number(galosrpg[AD].level) * 100)) return reply(`Você não possui saldo suficiente para efetuar essa compra...`)
if(Number(galosrpg[AD].level) < 6) {
quant = galosrpg[AD].level
galosrpg[AD].level = Number(quant) + 1
fs.writeFileSync("./database/usuarios/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
MD = sabrpg[AB].money
sabrpg[AB].money = Number(MD) - 1000
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`Seu galinheiro foi upado para o level ${galosrpg[AD].level} com sucesso...`)
} else {
reply(`Seu galinheiro está no level máximo!😿 Não é possível aumentar!`)
}
break

case 'galo':

if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)

if(!JSON.stringify(galosrpg).includes(sender)) return reply(`Você precisa comprar um galo antes!`)
AB = sabrpg.map(i => i.id).indexOf(sender)
AD = galosrpg.map(b => b.id).indexOf(sender)
galosH = moment.tz('America/Sao_Paulo').format('HH')
galosD = moment.tz('America/Sao_Paulo').format('DD')
galosM = moment.tz('America/Sao_Paulo').format('MM')
if(Number(galosrpg[AD].galos.length) > 0) {
if(!q) return reply(`Vix lek, cê caiu em uma briga ilegal de galos...🐔 Faça logo a sua aposta, e venha dançar!`)
if(!Number(args[0])) return reply(args[0] + " não é número...")
if(Number(args[0]) > Number(sabrpg[AB].money)) return reply(`Você não tem saldo suficiente para efetuar essa aposta...`)
if(Number(args[0]) > 100) return reply("Não é possível apostar mais que R$ 100.00 em uma briga ilegal e clandestina...")
if(Number(args[0]) < 1) return reply("Deixa de ser pobre lek")
if(Number(galosrpg[AD].brigaL) <= 0) return reply("Chega de brigas por agora... Volte mais tarde")
if(Number(galosH) > Number(galosrpg[AD].brigaH) && Number(galosrpg[AD].brigaD) === Number(galosD) && Number(galosrpg[AD].brigaM) === Number(galosM) && Number(galosrpg[AD].brigaL) <= 0) {
galosrpg[AD].brigaL = 15
galosrpg[AD].brigaH = galosH
fs.writeFileSync("./database/usuarios/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
reply("Bem vindo (a) de volta, hora de brigar...")
}
if(Number(galosD) > Number(galosrpg[AD].brigaD) && Number(galosrpg[AD].brigaM) === Number(galosM)) {
galosrpg[AD].brigaL = 15
galosrpg[AD].brigaH = galosH
galosrpg[AD].brigaD = galosD
fs.writeFileSync("./database/usuarios/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
reply(`${tempo} usuário, vamos brigar ?`)
}
if(Number(galosM) > Number(galosrpg[AD].brigaM)) {
galosrpg[AD].brigaL = 15
galosrpg[AD].brigaH = galosH
galosrpg[AD].brigaD = galosD
galosrpg[AD].brigaM = galosM
fs.writeFileSync("./database/usuarios/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
reply(`${tempo} usuário, vamos brigar?`)
}
if(Number(galosrpg[AD].brigaD) == Number(galosD) && Number(galosrpg[AD].brigaM) == Number(galosM) && Number(galosrpg[AD].brigaL) > 0) {
galosgeral = galosrpg[AD].galos
alegalo = galosgeral[Math.floor(Math.random()*galosgeral.length)]
sandrobot = Math.floor(Math.random()*100)
if(Number(sandrobot) > 30) {
if(Number(alegalo.vida) > 0) {
VD = alegalo.vida
CD = alegalo.degalo
alegalo.vida = Number(VD) - 1
alegalo.degalo = Number(CD) + 1
fs.writeFileSync("./database/usuarios/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
brigatxt = `Seu galo perdeu a briga!🐔 Você perdeu R$ ${Number(args[0]).toFixed(2)}`
} else {
galosgeral.splice(alegalo, 1)
fs.writeFileSync("./database/usuarios/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
brigatxt = `O galo inimigo matou o seu galo na briga!🐔 Você perdeu R$ ${Number(args[0]).toFixed(2)} ${Number(galosrpg[galosrpg.map(i => i.id).indexOf(sender)].galos.length) > 1 ? `\nFelizmente, você ainda possui ${galosrpg[galosrpg.map(i => i.id).indexOf(sender)].galos.length}` : ``}`
}
JH = galosrpg[galosrpg.map(i => i.id).indexOf(sender)].countDg
JH2 = galosrpg[galosrpg.map(i => i.id).indexOf(sender)].dinVg
JH3 = galosrpg[galosrpg.map(i => i.id).indexOf(sender)].brigaL
galosrpg[galosrpg.map(i => i.id).indexOf(sender)].countDg = Number(JH) + 1
galosrpg[galosrpg.map(i => i.id).indexOf(sender)].dinVg = Number(JH2) + Number(args[0])
galosrpg[galosrpg.map(i => i.id).indexOf(sender)].brigaL = Number(JH3) - 1
fs.writeFileSync("./database/usuarios/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
MD = sabrpg[AB].money
sabrpg[AB].money = Number(MD) - Number(args[0])
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(brigatxt)
//ganhar
} else {
//vida > 0
if(Number(alegalo.vida) > 0) {
VD = alegalo.vida
CV = alegalo.vigalo
alegalo.vida = Number(VD) - 1
alegalo.vigalo = Number(CV) + 1
if(Number(alegalo.degalo) > 0) {
NN = alegalo.degalo
alegalo.degalo = Number(NN) + 1
}
fs.writeFileSync("./database/usuarios/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
brigawin = `Seu galo venceu a briga!🐓 Você ganhou *R$ ${Number(Number(args[0])*2).toFixed(2)}*`
} else {
galosgeral.splice(alegalo, 1)
fs.writeFileSync("./database/usuarios/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
brigawin = ` Seu galo venceu a briga!🐓 Mas foi sequestrado e morto no caminho... Felizmente, você levou o dinheiro.\n• Você ganhou *R$ ${Number(Number(args[0])*2).toFixed(2)}*`
}
KL = galosrpg[galosrpg.map(i => i.id).indexOf(sender)].countVg
KL2 = galosrpg[galosrpg.map(i => i.id).indexOf(sender)].dinVg
KL3 = galosrpg[galosrpg.map(i => i.id).indexOf(sender)].luckVg
KL4 = galosrpg[galosrpg.map(i => i.id).indexOf(sender)].brigaL
galosrpg[galosrpg.map(i => i.id).indexOf(sender)].countVg = Number(KL) + 1
galosrpg[galosrpg.map(i => i.id).indexOf(sender)].dinVg = Number(KL2) + Number(args[0])
galosrpg[galosrpg.map(i => i.id).indexOf(sender)].luckVg = Number(KL3) + Number(args[0])
galosrpg[galosrpg.map(i => i.id).indexOf(sender)].brigaL = Number(KL4) - 1
fs.writeFileSync("./database/usuarios/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
MD = sabrpg[AB].money
sabrpg[AB].money = Number(MD) + Number(args[0])
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(brigawin)
}
}
} else {
reply(`Você não possui galos! 🐓😿`)
}
break

case 'cassinoo': {
const hora = moment.tz('America/Sao_Paulo').format('HH');
let tempo;

if (hora >= 0 && hora < 12) tempo = "Bom dia";
else if (hora >= 12 && hora < 18) tempo = "Boa tarde";
else tempo = "Boa noite";

if (!isGroup) return reply(enviar.msg.grupo);

if (!JSON.stringify(sabrpg).includes(sender)) {
  return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`);
}

const horacass = moment.tz('America/Sao_Paulo').format('HH');
const diacass = moment.tz('America/Sao_Paulo').format('DD');
const mmcass = moment.tz('America/Sao_Paulo').format('MM');

const AB = sabrpg.findIndex(i => i.id === sender);

// valida saldo
if (Number(args[0]) > Number(sabrpg[AB].money)) {
  return reply(`Você não possui saldo suficiente para efetuar essa aposta...`);
}

// limite por hora
if (Number(sabrpg[AB].limiteC) === 0 && Number(sabrpg[AB].horaC) === Number(horacass)) {
  return reply(`*Você já apostou muito hoje...* Suas chances estão esgotadas! Volte mais tarde 😔`);
}

// reset hora
if (
  Number(horacass) > Number(sabrpg[AB].horaC) &&
  Number(sabrpg[AB].diaC) === Number(diacass) &&
  Number(sabrpg[AB].mC) === Number(mmcass)
) {
  sabrpg[AB].limiteC = 20;
  sabrpg[AB].horaC = horacass;
  fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg));
  reply(`😝 Bora apostar então, ainda vou sugar muito teu dinheiro!`);
}

// reset dia
if (Number(sabrpg[AB].limiteC) === 0 && Number(diacass) > Number(sabrpg[AB].diaC)) {
  sabrpg[AB].limiteC = 20;
  sabrpg[AB].horaC = horacass;
  sabrpg[AB].diaC = diacass;
  fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg));
  reply(`💰🌟 ${tempo} jogador, como está sua sorte hoje?`);
}

// reset mês
if (Number(sabrpg[AB].limiteC) === 0 && Number(mmcass) > Number(sabrpg[AB].mC)) {
  sabrpg[AB].limiteC = 30;
  sabrpg[AB].horaC = horacass;
  sabrpg[AB].diaC = diacass;
  sabrpg[AB].mC = mmcass;
  fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg));
  reply(`📆 Primeira aposta do mês? Bora perder dinheiro ❤️`);
}

if (Number(sabrpg[AB].limiteC) > 0) {

  if (!q) {
    return reply(`Digite um valor. Ex: *${prefix + command} 100*`);
  }

  if (!Number(args[0])) return reply(`*${args[0]}* não é número!`);
  if (Number(args[0]) < 10) return reply(`Mínimo: R$10`);
  if (Number(args[0]) > 20000) return reply(`Máximo: R$20000`);

  const frutasC = JSON.parse(fs.readFileSync("./assets/json/slots.json"));

  const resulC = `${frutasC[Math.floor(Math.random()*frutasC.length)]} : ${frutasC[Math.floor(Math.random()*frutasC.length)]} : ${frutasC[Math.floor(Math.random()*frutasC.length)]}`;

  let cmrpg = 0;

  // jackpot troll
  if (resulC === `🦴 : 🦴 : 🦴`) {
    sabrpg[AB].money = 50;
    sabrpg[AB].limiteC -= 1;
    fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg));
    return reply(`• [${resulC}] - A bruxa levou tudo 😂`);
  }

  // tabela de ganhos
  const premios = {
    "🍫 : 🍫 : 🍫": 1000,
    "🍔 : 🍔 : 🍔": 600,
    "🥩 : 🥩 : 🥩": 400,
    "🍕 : 🍕 : 🍕": 250,
    "🌶️ : 🌶️ : 🌶️": 200,
    "🍪 : 🍪 : 🍪": 100,
    "🍗 : 🍗 : 🍗": 80,
    "🌭 : 🌭 : 🌭": 70,
    "🥞 : 🥞 : 🥞": 60,
    "🥓 : 🥓 : 🥓": 50
  };

  if (premios[resulC]) cmrpg = premios[resulC];
  else if (/🧇|🍞|🥐|🥥|🍎|🍌|🍓/.test(resulC)) cmrpg = 40;
  else if (/🍐|🍊|🍋|🍉|🍇|🍒|🍑|🥭|🍍|🥝|🍅|🥑|🌽|🥕/.test(resulC)) cmrpg = 30;

  let resultado, valorTexto;

  if (cmrpg > 0) {
    const ganho = Number(args[0]) * cmrpg;
    const total = ganho + Number(args[0]);
    sabrpg[AB].money += total * 5;
    resultado = "Você ganhou";
    valorTexto = `R$ ${total.toFixed(2)}`;
  } else {
    sabrpg[AB].money -= Number(args[0]);
    resultado = "Você perdeu e perdeu";
    valorTexto = `R$ ${Number(args[0]).toFixed(2)}`;
  }

  sabrpg[AB].limiteC -= 1;

  fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg));

  reply(`• [${resulC}] - ${resultado} ${valorTexto}`);
}

}
break;



case 'caracoroa': //BY : 𝐒𝐀𝐍𝐃𝐑𝐎 𝐌𝐃
setTimeout(() => {reagir(from, "🪙")}, 300)

if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)
var [d1, d2] = q.split('/')
if(Number(d2) > 1000) return reply("Tbm não pode passar de 1000 né meu camarada kkk")
if(d1.length == 0) return reply(`Digite o lado que a moeda que você acha que irá cair, ou seja, cara ou coroa... Após isso, coloque uma (/) ao lado e coloque a quantia que você deseja apostar, por exemplo: 1.\n–\n• Ex: ${prefix+command} cara/25 _(você estará apostando R$25.00 na posição do lado da cara da moeda)_`);
if(d1.toLowerCase() != "cara" && d1.toLowerCase() != "coroa") return reply("Só pode cara ou coroa.")
if(!d2) return reply(`Você não disse quanto irá apostar...`)
AB = sabrpg.map(i => i.id).indexOf(sender)
if(Number(sabrpg[AB].money) < Number(d2)) return reply(`Sua aposta é muito alta para o saldo na sua conta... Por favor, escolha uma aposta menor.`)
if(!Number(d2)) return reply(`${d2} não é um número!`)
if(Number(d2) > 100) return reply(`Não é possível apostar mais do que R$ 100.00`)
reply(`Sorteando... Aguarde, daqui a pouco o resultado sai!`)
ladosDaMoeda = ["coroa", "cara"];
pegarInfo = ladosDaMoeda[Math.floor(Math.random() * ladosDaMoeda.length)];
enviarfigu(`./database/data/media/sticker/caracoroa/${pegarInfo}.webp`)
if(pegarInfo === d1) {
DD = Number(sabrpg[AB].money) + Number(d2)
sabrpg[AB].money = DD
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
mention(`🎉🌟 Parabéns *@${sender.split("@")[0]}*, você ganhou R$ *${Number(d2).toFixed(2)}* por acertar a posição da moeda.\n• O resultado da posição do lado da moeda era a : *${pegarInfo}*`)
} else {
DD = Number(sabrpg[AB].money) - Number(d2)
sabrpg[AB].money = DD
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
mention(`😿 Infelizmente *@${sender.split("@")[0]}*, você perdeu *R$ ${Number(d2).toFixed(2)}* por errar a posição da moeda.\n• O resultado da posição do lado da moeda era a : *${pegarInfo}*`)
}
break




case 'lojadecavalos':
setTimeout(() => {reagir(from, "🐎")}, 300)
if(JSON.stringify(cavalosrpg).includes(sender)) {
AC = cavalosrpg.map(a => a.id).indexOf(sender)
if(Number(cavalosrpg[AC].level) < 4) {
uparcavalo = `R$ ${Number(Number(cavalosrpg[AC].level)*200).toFixed(2)}`
} else {
uparcavalo = `Lv. Máx`
}
} else {
uparcavalo = `R$ 200.00`
}
txtssuysu = `*@${sender.split("@")[0]}*, Seja bem vindo(a) à loja de cavalos:\n—\n❱❱ ${prefix}comprarestabulo *[R$ 500.00]* - De início é necessário você comprar.\n❱❱ ${prefix}upcavalo - Faça um upload em seu(s) cavalo(s). *[${uparcavalo}]*\n—\n🐎 *Comprar Cavalos:*\n❱❱ ${prefix}comprarcavalo 1 *[R$ 500.00]*\n❱❱ ${prefix}comprarcavalo 2 *[R$ 1000.00]*\n❱❱ ${prefix}comprarcavalo 3 *[R$ 1500.00]*\n❱❱ ${prefix}comprarcavalo 4 *[R$ 2000.00]*\n—\n🌾 *Equipamentos:*\n❱❱ ${prefix}comprarsela *[R$ 200.00]* - Compre uma sela para o seu cavalo.\n❱❱ ${prefix}cdcv3 *[R$ 200.00]* - Verifique o status atual de seu alazão.\n❱❱ ${prefix}atadura *[R$ 250.00]* - Caso tenha alguma fratura em alazão.\n—\n🏪 *Vendas:*\n❱❱ Para vender seu alazão, use o comando ao lado: *${prefix}vendercavalo*\n❱❱ Para vender seu estábulo, use o comando ao lado: *${prefix}venderestabulo*`
mention(txtssuysu)
break

case 'lojadegalos':
setTimeout(() => {reagir(from, "🐔")}, 300)
if(JSON.stringify(galosrpg).includes(sender)) {
AD = galosrpg.map(b => b.id).indexOf(sender)
if(Number(galosrpg[AD].level) < 6) {
LV = `R$ ${Number(galosrpg[AD].level) * 100}.00`
} else {
LV = `Lv. Máx`
}
PC = LV
} else {
PC = `R$ 100.00`
}
txtssuysut = `*${tempo}* @${sender.split('@')[0]}, Seja bem vindo(a) à loja de galos:\n🐓🏷 *Loja de Galos:*\n❱❱ ${prefix}comprargalinheiro *[R$ 500.00]*\n❱❱ ${prefix}comprargalo 1 *[R$ 100.00]*\n❱❱ ${prefix}comprargalo 6 *[R$ 550.00]*\n❱❱ ${prefix}comprargalo 12 *R$ 1000.00]*\n❱❱ ${prefix}comprargalinha *[R$ 100.00]*\n❱❱ ${prefix}upgalo *[${PC}]*\n––\n🐓🏷 *Vendas:*\n❱❱ Venda de Galos: *${prefix}vendergalo (quantidade)*\n❱❱ Venda de Galinhas: *${prefix}vendergalinha (quantidade)*`
mention(txtssuysut)
break

















case 'reiniciar':
if(!SoDono) return reply(mess.onlyOwner())
console.log("Bot reiniciado manualmente pelo dono.");
reply(`❤️ *Reiniciando ${NomeDoBot} aguarde* ❤️`)
setTimeout(async() => {process.exit()}, 1200)
break



//==========(Sticker-Stickers)===========\\

case 'emoji': case 'semoji':
if(!q) return reply(`*Exemplo:* ${prefix}emoji ☹️/whatsapp`)
emot = q.split('/')[0]
jemot = q.split('/')[1]
if(jemot == 'apple'){ idemot = 0 }
else if(jemot == 'google'){ idemot = 1 }
else if(jemot == 'samsung'){ idemot = 2 }
else if(jemot == 'microsoft'){ idemot = 3 }
else if(jemot == 'whatsapp'){ idemot = 4 }
else if(jemot == 'twitter'){ idemot = 5 }
else if(jemot == 'facebook'){ idemot = 6 }
else if(jemot == 'joypixels'){ idemot = 7 }
else if(jemot == 'openmoji'){ idemot = 8 }
else if(jemot == 'emojidex'){ idemot = 9 }
else if(jemot == 'lg'){ idemot = 10 }
else if(jemot == 'htc'){ idemot = 11 }
else if(!jemot){ idemot = 4 }
else{
return reply(`Exemplo: ${prefix}emoji ☹️/whatsapp`)
}
reply(enviar.espere)
if(idemot == undefined) return
emoji.get(emot)
.then(emoji => {
sendStickerFromUrl(from, emoji.images[idemot].url)
}).catch(e => {
reply("Emoji não encontrado.. Tente com outro emoji para ver está funcionando..")
})
break



case 'fsticker':
case 'f':
var RSM = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
var boij = RSM?.imageMessage || info.message?.imageMessage || RSM?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessage?.message?.imageMessage || RSM?.viewOnceMessage?.message?.imageMessage
var boij2 = RSM?.videoMessage || info.message?.videoMessage || RSM?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessage?.message?.videoMessage || RSM?.viewOnceMessage?.message?.videoMessage  
if(boij) {
var pack = setting.figurinha?.pacote || NomeDoBot;
var author2 = setting.figurinha?.autor || NickDono;
reply(setting.textos?.figurinhaAguarde || "Convertendo...")
owgi = await getFileBuffer(boij, 'image')
let encmediaa = await sendImageAsSticker(sandro, from, owgi, info, { packname:pack, author:author2})
await DLT_FL(encmediaa)
} else if(boij2 && boij2?.seconds < 11) {
var pack = setting.figurinha?.pacote || NomeDoBot;
var author2 = setting.figurinha?.autor || NickDono;
reply(setting.textos?.figurinhaAguarde || "Convertendo...")
owgi = await getFileBuffer(boij2, 'video')
let encmedia = await sendVideoAsSticker(sandro, from, owgi, info, { packname:pack, author:author2})
await DLT_FL(encmedia)
} else {
reply(setting.textos?.figurinhaUso || "Envie uma imagem ou um vídeo/GIF de até 10 segundos.")
}
break
/*
case 'figurinha': case 's': case 'stickergifp': case 'figura': case 'f': case 'figu': case 'st': case 'stk': case 'fgif':
(async function () {
    try {
        var legenda = q ? q?.split("/")[0] : `╼⊳⊰ Solicitado Por:\n╼⊳⊰ Bot:\n╼⊳⊰ Dono:`;
        var autor = q ? q?.split("/")[1] : q?.split("/")[0] ? '' : `${pushname}\n${NomeDoBot}\n${NickDono}`;

        if (isMedia && info.message.imageMessage || isQuotedImage) {
            var encmedia = isQuotedImage 
                ? info.message.extendedTextMessage?.contextInfo?.quotedMessage?.imageMessage 
                : info.message.imageMessage;

            if (!encmedia || !encmedia.mimetype) {
                reply("Erro: Não foi possível encontrar a mídia.");
                return;
            }

            var rane = getRandom('.' + await getExtension(encmedia.mimetype));
            var buffimg = await getFileBuffer(encmedia, 'image');
            fs.writeFileSync(rane, buffimg);
            var rano = getRandom('.webp');

            exec(`ffmpeg -i ${rane} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${rano}`, (err) => {
                if (err) {
                    reply("Erro ao converter a imagem.");
                    fs.unlinkSync(rane);
                    return;
                }
                fs.unlinkSync(rane);

                var json = {
                    "sticker-pack-name": legenda,
                    "sticker-pack-publisher": autor
                };
                var exifAttr = Buffer.from([73, 73, 42, 0, 8, 0, 0, 0, 1, 0, 65, 87, 7, 0, 0, 0, 0, 0, 22, 0, 0, 0]);
                var jsonBuff = Buffer.from(JSON.stringify(json), "utf-8");
                var exif = Buffer.concat([exifAttr, jsonBuff]);
                exif.writeUIntLE(jsonBuff.length, 14, 4);
                var nomemeta = `${Math.floor(Math.random() * (99999 - 11111 + 1) + 11111)}.temp.exif`;
                fs.writeFileSync(`./${nomemeta}`, exif);

                exec(`webpmux -set exif ${nomemeta} ${rano} -o ${rano}`, () => {
                    sandro.sendMessage(from, { sticker: fs.readFileSync(rano) }, { quoted: info });
                    fs.unlinkSync(nomemeta);
                    fs.unlinkSync(rano);
                });
            });
        } else if (isMedia && info.message.videoMessage?.seconds < 11 || isQuotedVideo && info.message.extendedTextMessage?.contextInfo?.quotedMessage?.videoMessage?.seconds < 11) {
            var encmedia = isQuotedVideo 
                ? info.message.extendedTextMessage?.contextInfo?.quotedMessage?.videoMessage 
                : info.message.videoMessage;

            if (!encmedia || !encmedia.mimetype) {
                reply("Erro: Não foi possível encontrar a mídia.");
                return;
            }

            var rane = getRandom('.' + await getExtension(encmedia.mimetype));
            var buffimg = await getFileBuffer(encmedia, 'video');
            fs.writeFileSync(rane, buffimg);
            var rano = getRandom('.webp');

            exec(`ffmpeg -i ${rane} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 200:200 ${rano}`, (err) => {
                if (err) {
                    reply("Erro ao converter o vídeo.");
                    fs.unlinkSync(rane);
                    return;
                }
                fs.unlinkSync(rane);

                var json = {
                    "sticker-pack-name": legenda,
                    "sticker-pack-publisher": autor
                };
                var exifAttr = Buffer.from([73, 73, 42, 0, 8, 0, 0, 0, 1, 0, 65, 87, 7, 0, 0, 0, 0, 0, 22, 0, 0, 0]);
                var jsonBuff = Buffer.from(JSON.stringify(json), "utf-8");
                var exif = Buffer.concat([exifAttr, jsonBuff]);
                exif.writeUIntLE(jsonBuff.length, 14, 4);
                var nomemeta = `${Math.floor(Math.random() * (99999 - 11111 + 1) + 11111)}.temp.exif`;
                fs.writeFileSync(`./${nomemeta}`, exif);

                exec(`webpmux -set exif ${nomemeta} ${rano} -o ${rano}`, () => {
                    sandro.sendMessage(from, { sticker: fs.readFileSync(rano) }, { quoted: info });
                    fs.unlinkSync(nomemeta);
                    fs.unlinkSync(rano);
                });
            });
        } else {
                return sandro.sendMessage(from, {
      audio: { url: './assets/audio/figuinfo.mp3' },
      mimetype: 'audio/mpeg',
      ptt: false
    }, { quoted: info });
        }
    } catch (e) {
        console.log(e);
        reply("Hmm deu erro");
    }
})();
break;
*/
        /*case "st":
        case "stk":
        case "sticker":
        case "s":
          var RSM =
            info.message?.extendedTextMessage?.contextInfo?.quotedMessage;
          var boij2 =
            RSM?.imageMessage ||
            info.message?.imageMessage ||
            RSM?.viewOnceMessageV2?.message?.imageMessage ||
            info.message?.viewOnceMessageV2?.message?.imageMessage ||
            info.message?.viewOnceMessage?.message?.imageMessage ||
            RSM?.viewOnceMessage?.message?.imageMessage;
          var boij =
            RSM?.videoMessage ||
            info.message?.videoMessage ||
            RSM?.viewOnceMessageV2?.message?.videoMessage ||
            info.message?.viewOnceMessageV2?.message?.videoMessage ||
            info.message?.viewOnceMessage?.message?.videoMessage ||
            RSM?.viewOnceMessage?.message?.videoMessage;
          if (boij2) {
            var pack = setting.figurinha?.pacote || NomeDoBot;
var author2 = setting.figurinha?.autor || NickDono;
            reply(Res_Aguarde);
            owgi = await getFileBuffer(boij2, "image");
            let encmediaa = await sendImageAsSticker2(sandro, from, owgi, info, {
              packname: pack,
              author: author2,
            });
            await DLT_FL(encmediaa);
          } else if (boij && boij.seconds < 11) {
            var pack = setting.figurinha?.pacote || NomeDoBot;
var author2 = setting.figurinha?.autor || NickDono;
            reply(Res_Aguarde);
            owgi = await getFileBuffer(boij, "video");
            let encmedia = await sendVideoAsSticker2(sandro, from, owgi, info, {
              packname: pack,
              author: author2,
            });
            await DLT_FL(encmedia);
          } else {
            return reply(
              `Marque uma imagem, ou um vídeo de ate 9.9 segundos, ou uma visualização única, para fazer figurinha, com o comando ${prefix + command
              }`,
            );
          }
          break;*/





case 'fsticker':
case 'f':
var RSM = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
var boij = RSM?.imageMessage || info.message?.imageMessage || RSM?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessage?.message?.imageMessage || RSM?.viewOnceMessage?.message?.imageMessage
var boij2 = RSM?.videoMessage || info.message?.videoMessage || RSM?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessage?.message?.videoMessage || RSM?.viewOnceMessage?.message?.videoMessage  
if(boij) {
var packnameStk = setting.figurinha?.pacote || NomeDoBot;
var authorSticker = setting.figurinha?.autor || NickDono;
reply(setting.textos?.figurinhaAguarde || "Convertendo...")
owgi = await getFileBuffer(boij, 'image')
let ENC_MEDIA1 = await sendImageAsSticker(sandro, from, owgi, info, {packname: packnameStk, author: authorSticker})
await DLT_FL(ENC_MEDIA1)
} else if(boij2 && boij2?.seconds < 11) {
var packnameStk = setting.figurinha?.pacote || NomeDoBot;
var authorSticker = setting.figurinha?.autor || NickDono;
reply(setting.textos?.figurinhaAguarde || "Convertendo...")
owgi = await getFileBuffer(boij2, 'video')
let ENC_MEDIA2 = await sendVideoAsSticker(sandro, from, owgi, info, {packname: packnameStk, author: authorSticker})
await DLT_FL(ENC_MEDIA2)
} else {
reply(setting.textos?.figurinhaUso || "Envie uma imagem ou um vídeo/GIF de até 10 segundos.")
}
break

case 'togif': 
if(!isQuotedSticker) return reply('Por favor, atribua uma figurinha animada à mensagem para realizar a conversão para vídeo/gif.');
try {
reply(`❤️ *Aguarde...* ❤️`);
if((isMedia && !info.message.videoMessage || isQuotedSticker) && !q.length <= 1) {
const { FiguMp4OuGif } = require('./assets/funcoes/togif.js');
getBufferWebP = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, "sticker");
fs.writeFileSync("./database/data/media/sticker/convert.webp", getBufferWebP);
outputFile = "./database/data/media/sticker/convert.webp";
convertWebP = await FiguMp4OuGif(outputFile);
await sandro.sendMessage(from, {video: {url: convertWebP}, gifPlayback: true, fileName: 'sticker-sb.gif'}, {quoted: info}).catch(async(error) => {
    await reply(mess.error()); // Notificar ao usuário que ocorreu um erro ao enviar o resultado da conversão do WebP para MP4.
    await DLT_FL(outputFile); // Apagar o arquivo, caso ocorrer um erro na conversão entre eles.
    console.log(error)
});
}
} catch(error) {
    await reply(mess.error()); // Notificar ao usuário que ocorreu um erro ao realizar a conversão do WebP para MP4.
    console.log(error)
};
break

case 'toimg':
if(!isQuotedSticker) return reply('Por favor, *mencione um sticker* para executar o comando.')
try {
reply(`❤️ *Aguarde...* ❤️`);
reply(enviar.espere)
buff = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
sandro.sendMessage(from, {image: buff}, {quoted: info}).catch(e => {
console.log(e);
reply('Ocorreu um erro ao converter o *sticker para imagem.*')
})
} catch {
reply(mess.error())
}
break

//=====================================\\

case 'metadinha': {
    reagir(from, "😍")
    const { prepareWAMessageMedia } = require('@systemzero/baileys')
    const caminho = './config/botoes.json'

    try {
        // ⚙️ SISTEMA OFICIAL /botões 1 = LIGADO | 0 = DESLIGADO
        let botoesAtivos = 0
        try {
            if (fs.existsSync(caminho)) {
                botoesAtivos = Number(JSON.parse(fs.readFileSync(caminho, 'utf-8')).status)
            } else {
                fs.writeFileSync(caminho, JSON.stringify({ status: 1 }, null, 2))
            }
        } catch { botoesAtivos = 0 }

        reply(`❤️ *Aguarde...* ❤️`)
        const ABC = await fetchJson(`${zerosite}/random/metadinha?apikey=${API_KEY_ZEROTWO}`)

        if (!ABC?.masculina || !ABC?.feminina) throw new Error('API sem retorno')

        // 📌 FUNÇÃO PRONTA — ENVIA COM OU SEM BOTÃO
        const enviar = async (img, legenda) => {
            if (botoesAtivos === 1) {
                const media = await prepareWAMessageMedia(
                    { image: { url: img } },
                    { upload: sandro.waUploadToServer }
                )
                return sandro.relayMessage(from, {
                    interactiveMessage: {
                        header: { hasMediaAttachment: true, imageMessage: media.imageMessage },
                        body: { text: legenda },
                        footer: { text: `© ${NomeDoBot}` },
                        nativeFlowMessage: {
                            buttons: [{
                                name: "quick_reply",
                                buttonParamsJson: JSON.stringify({
                                    display_text: "🔁 PRÓXIMO",
                                    id: `${prefix}metadinha`
                                })
                            }]
                        }
                    }
                }, { quoted: info })
            } else {
                return sandro.sendMessage(from, {
                    image: { url: img },
                    caption: legenda
                }, { quoted: info })
            }
        }

        // ================= 🙇🏻‍♂️ HOMEM =================
        await enviar(ABC.masculina, `🙇🏻‍♂️ *HOMEM* 🙅🏻‍♂️`)

        // ================= 🙆🏻‍♀️ MULHER =================
        await enviar(ABC.feminina, `🙆🏻‍♀️ *MULHER* 💁🏻‍♀️`)

    } catch (e) {
        console.log('❌ Erro metadinha:', e.message || e)
        reply("❌ Erro ao gerar metadinha.")
    }
}
break


//========(SORTEIO-VOTAR-CASES)=========\\
//







 
case 'revelar':
case 'revelarvisu': 
case 'open':
try {
  reagir(from, "👁️")
  let msgCtx = info.message?.extendedTextMessage?.contextInfo?.quotedMessage || info.message?.viewOnceMessage?.message || info.message?.viewOnceMessageV2?.message || info.message?.viewOnceMessageV2Extension?.message

  if (!msgCtx) return reply("❗Mensagem não encontrada ou não é de visualização única.")

  // IMAGEM
  if (msgCtx.imageMessage) {
    let viewImage = msgCtx.imageMessage
    viewImage.viewOnce = false
    viewImage.image = { url: viewImage.url }
    viewImage.caption = (viewImage.caption || '') + "\n\n👁️ *REVELANDO ONE VISION* 👁️"
    sandro.sendMessage(from, viewImage, { quoted: info })

  // VÍDEO
  } else if (msgCtx.videoMessage) {
    let viewVideo = msgCtx.videoMessage
    viewVideo.viewOnce = false
    viewVideo.video = { url: viewVideo.url }
    viewVideo.caption = (viewVideo.caption || '') + "\n\n👁️ *REVELANDO ONE VISION* 👁️"
    sandro.sendMessage(from, viewVideo, { quoted: info })

  // ÁUDIO
  } else if (msgCtx.audioMessage) {
    let viewAudio = msgCtx.audioMessage
    viewAudio.viewOnce = false
    media = await getFileBuffer(viewAudio, 'audio')
    sandro.sendMessage(from, { audio: media, mimetype: 'audio/mp4', ptt: false }, { quoted: info })

  } else {
    reply("❌ Tipo de mídia não suportado ou não é uma mensagem de visualização única.")
  }

} catch (e) {
  console.log(e)
  reply("❌ Erro ao tentar revelar a mídia.")
}
break



case 'add':  //esse comando pode dar ban no seu número cuidado.

if(!SoDono) return reply(`Somente meu proprietário pode utilizar esse comando!`);
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(!q && info.message.extendedTextMessage === null) return reply('Marque a mensagem ou coloque o número de quem você quer adicionar no grupo.')
try {
useradd = `${args.join(" ").replace(/\D/g,'')}` ? `${args.join(" ").replace(/\D/g,'')}` : info.message.extendedTextMessage.contextInfo.participant
let id = `${useradd.replace(/\D/g,'')}`
if(!id) return reply(`Número inválido.`)
let [result] = await sandro.onWhatsApp(id)
if(!result) return reply(`Esse número não está registrado no WhatsApp.`)
let response = await sandro.groupParticipantsUpdate(from, [result.jid], "add")
if(response[0].status == "409") {
sandro.sendMessage(from, {text: `Ele já está no grupo, como eu vou adicionar?`, mentions: [result.jid, sender]})
} else if(response[0].status == "403") {
sandro.sendMessage(from, {text: `Não consegui adicionar o @${result.jid.split("@")[0]} porque ele privou a conta.`, mentions: [result.jid, sender]})
} else if(response[0].status == "408") {
sandro.sendMessage(from, {text: `Não consegui adicionar o @${result.jid.split("@")[0]} porque ele saiu recentemente do grupo.`, mentions: [result.jid, sender]})
} else if(response[0].status == "401") {
sandro.sendMessage(from, {text: `Não consegui adicionar o @${result.jid.split("@")[0]} porque ele bloqueou o bot.`, mentions: [result.jid, sender]})
} else if(response[0].status == "200") {
sandro.sendMessage(from, {text: `Prontinho fiz o que você pediu.`, mentions: [result.jid, sender]})
} else {
reply("Vish acho que algo deu errado")
}
} catch(e) {
console.log("[ERROR]:"+ e)
}
break

case 'addmetaia': {
if (!isGroup) return reply("Esse comando só funciona em grupo.")
if (!isBotGroupAdmins) return reply("Eu preciso ser administrador.")
if (!isGroupAdmins) return reply("Você precisa ser administrador.")
try {

await sandro.groupParticipantsUpdate(
from,
['867051314767696@bot'],
'add'
);
reply('✅ ᴍᴇᴛᴀ ᴀɪ ꜰᴏɪ ᴀᴅɪᴄɪᴏɴᴀᴅᴀ ᴀᴏ ɢʀᴜᴘᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ.');
} catch (e) {
console.error(e);
reply('❌ ɴãᴏ ꜰᴏɪ ᴘᴏssíᴠᴇʟ ᴀᴅɪᴄɪᴏɴᴀʀ ᴀ ᴍᴇᴛᴀ ᴀɪ ᴀᴏ ɢʀᴜᴘᴏ.');
}
}
break

case 'ban':
case 'banir': {

if (!isGroup) return reply("Esse comando só funciona em grupo.")
if (!isBotGroupAdmins) return reply("Eu preciso ser administrador.")
if (!isGroupAdmins) return reply("Você precisa ser administrador.")

let alvo = null

// Se respondeu uma mensagem
const context =
info.message?.extendedTextMessage?.contextInfo ||
info.message?.imageMessage?.contextInfo ||
info.message?.videoMessage?.contextInfo ||
info.message?.audioMessage?.contextInfo

if (context?.participant) {
alvo = context.participant
}

// Se marcou alguém
if (!alvo && context?.mentionedJid?.length) {
alvo = context.mentionedJid[0]
}

if (!alvo) {
return reply(`Use:

${prefix}ban @usuario

ou responda a mensagem da pessoa com:

${prefix}ban`)
}

if (alvo === sandro.user.id)
return reply("Não posso me remover.")

if (alvo === sender)
return reply("Você não pode se remover.")

const admins = groupMetadata.participants
.filter(v => v.admin)
.map(v => v.id)

if (admins.includes(alvo))
return reply("Não posso remover outro administrador.")

await sandro.groupParticipantsUpdate(from, [alvo], "remove")

await sandro.sendMessage(from, {
text: `@${alvo.split("@")[0]} foi removido(a) do grupo.`,
mentions: [alvo]
}, { quoted: info })

}
break


case 'ultimas-palavras':{
try {
if(!menc_os2 || menc_jid2[1]) return reply("Marque a mensagem do usuário ou marque o @ dele.., lembre de só marcar um usuário...")
if(!JSON.stringify(groupMembers).includes(menc_os2)) return reply("Este usuário já foi removido do grupo ou saiu.")
if(botNumber.includes(menc_os2)) return reply('Não sou besta de remover eu mesmo né 🙁, mas estou decepcionado com você')
if(JSON.stringify(numerodono).indexOf(menc_os2) >= 0) return reply('Não posso remover meu dono 🤧')
reply("Elx tem 30s para falar suas últimas palavras!")
await delay(30000)
sandro.sendMessage(from, {text: `@${menc_os2.split("@")[0]} foi Removido (a) 👾`, mentions: [menc_os2]})
sandro.groupParticipantsUpdate(from, [menc_os2], "remove")  
} catch (e) {
console.log(e)
}
}
break

case 'promover': 
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(!menc_os2 || menc_jid2[1]) return reply("Marque a mensagem do usuário ou marque o @ dele.., lembre de só marcar um usuário...")
if(!JSON.stringify(groupMembers).includes(menc_os2)) return reply("Este usuário foi removido do grupo ou saiu, não será possível promover..")
sandro.sendMessage(from, {text: `@${menc_os2.split("@")[0]} Foi promovido(a) para adm com sucesso.`, mentions: [menc_os2]})
sandro.groupParticipantsUpdate(from, [menc_os2], "promote")  
break

case 'rebaixar': 
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(!menc_os2 || menc_jid2[1]) return reply("Marque a mensagem do usuário ou marque o @ dele.., lembre de só marcar um usuário...")
if(!JSON.stringify(groupMembers).includes(menc_os2)) return reply("Este usuário foi removido do grupo ou saiu, não será possível rebaixar..")
sandro.sendMessage(from, {text: `@${menc_os2.split("@")[0]} Foi rebaixado para [ MEMBRO COMUM ] com sucesso.`, mentions: [menc_os2]})
sandro.groupParticipantsUpdate(from, [menc_os2], "demote")  
break

case 'sorteio':
if(!isGroupAdmins) return reply(enviar.msg.adm)
try{
if(!isGroup) return reply(enviar.msg.grupo)
if(!q) return reply(`Coloque algo, após o comando sorteio, por exemplo, ${prefix}sorteio de 100 R$`)
d = []
tekyy = `🎉 Meus parabéns ao vencedor do sorteio: ${q}\n-\n`
for(i = 0; i < 1; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
tekyy += `• *Mencionando o vencedor:*  @${groupMembers[r].id.split('@')[0]}`
d.push(groupMembers[r].id)
}
mentions(tekyy, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break

case 'sorteionumero':
  
if(!isGroupAdmins) return reply(enviar.msg.adm)
try{
if(!isGroup) return reply(enviar.msg.grupo)
if(!q) return reply(`Coloque algo, após o comando sorteio, por exemplo, ${prefix}sorteionumero de 100 R$`)
var numerossrt = sortear[Math.floor(Math.random() * sortear.length)] 
d = []
tekyyuy =  `🎉 Parabéns ao número do sortudo, por ganhar o sorteio ${q}:\n-\n`
for(i = 0; i < 1; i++) {
tekyyuy += `• O número sorteado foi: ${numerossrt}`
d.push(numerossrt)
}
mentions(tekyyuy, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break

//==========(TTPS/ATTP)============\\
 
 
 
case 'attp3': 
case 'attp4': 
case 'attp5': 
case 'attp6': 
case 'attp7': 
case 'attp8': 
case 'attp9': 
try {
if(!q.trim()) return reply(`Exemplo: ${prefix+command} SANDRO`);
reply(enviar.espere)
var Fontes = command === "attp2" ? "Roboto" : "Noto Emoji, Noto Sans Mono"
sandro.sendMessage(from, {sticker: {url: `https://api.bronxyshost.com.br/api-bronxys/attp_edit?texto=${encodeURIComponent(q)}&fonte=${Fontes}&apikey=${API_SANDRO_MD}`}}, {quoted: info}).catch(() => {
return reply("Erro..");
})
} catch (e) {
return reply("Erro..");
}
break;

//======================================\\


//===(ZOUEIRAS/BRINCADEIRAS/HUMOR)===\\







case 'pediremnamoro': {
  try {
    setTimeout(() => { reagir(from, "💍") }, 300)

    if (!isGroup) return reply(enviar.msg.grupo)

    if (!menc_os2)
      return reply('Marque a mensagem ou o @ da pessoa que deseja pedir em namoro.\nSe tomar um fora, juízo! 😅')

    // Normaliza JID
    const alvo = menc_os2.includes('@s.whatsapp.net')
      ? menc_os2
      : menc_os2 + '@s.whatsapp.net'

    const remetente = sender

    if (botNumber.includes(alvo))
      return reply("Não é possível pedir o bot em namoro, seu baitola. 🙄")

    if (JSON.stringify(namoro2).includes(alvo))
      return reply(`Este usuário já foi pedido em namoro...`)

    if (
      JSON.stringify(namoro1).includes(alvo) &&
      namoro1[namoro1.map(i => i.usu1).indexOf(alvo)].namorados == false
    )
      return reply(`Essa pessoa já pediu alguém em namoro... Sinto muito ${pushname} 😕`)

    if (
      JSON.stringify(namoro1).includes(alvo) &&
      namoro1[namoro1.map(i => i.usu1).indexOf(alvo)].namorados == true
    )
      return reply(`Não será possível pedir essa pessoa em namoro, pois ela já está com outro(a). 🌚`)

    if (
      JSON.stringify(namoro1).includes(remetente) &&
      namoro1[namoro1.map(i => i.usu1).indexOf(remetente)].namorados == false
    )
      return mention(
        `Você já pediu em namoro @${namoro1[namoro1.map(i => i.usu1).indexOf(remetente)].usu2}.\nNão brinque com sentimentos alheios!\nDigite: ${prefix}cancelarpedido`,
        [namoro1[namoro1.map(i => i.usu1).indexOf(remetente)].usu2 + '@s.whatsapp.net']
      )

    if (
      JSON.stringify(namoro1).includes(remetente) &&
      namoro1[namoro1.map(i => i.usu1).indexOf(remetente)].namorados == true
    )
      return mention(
        `Você já está namorando @${namoro1[namoro1.map(i => i.usu1).indexOf(remetente)].usu2}...`,
        [namoro1[namoro1.map(i => i.usu1).indexOf(remetente)].usu2 + '@s.whatsapp.net']
      )

    // Salva pedido
    namoro1.push({
      usu1: remetente,
      usu2: alvo.split('@')[0],
      namorados: false,
      idgp: from,
      hora: hora,
      data: date
    })

    fs.writeFileSync(
      "./database/func/namoro1.json",
      JSON.stringify(namoro1, null, 2)
    )

    namoro2.push({
      id: alvo,
      pedido: remetente.split('@')[0],
      idgp: from
    })

    fs.writeFileSync(
      "./database/func/namoro2.json",
      JSON.stringify(namoro2, null, 2)
    )

    // Mensagem FINAL com mentions CORRETAS
    await sandro.sendMessage(from, {
      text: `🌟🥳 Psiu *@${alvo.split('@')[0]}*! Você acaba de ser pedido em namoro por *@${remetente.split('@')[0]}*.\n\nEai você aceita o pedido, *sim ou não?*`,
      mentions: [alvo, remetente]
    })

  } catch (e) {
    console.error(e)
    reply('❌ Ocorreu um erro ao enviar o pedido de namoro.')
  }
}
break



case 'terminar_namoro': {
    // @Matheus
    if (!JSON.stringify(namoro1).includes(sender)) {
        return reply(`Você não está namorando com ninguém. Sinto muito!`)
    }

    let D1 = namoro1.map(i => i.usu1).indexOf(sender)
    let D2 = namoro1.map(a => a.usu1).indexOf(`${namoro1[D1].usu2}@s.whatsapp.net`)

    if (D1 === -1 || D2 === -1) {
        return reply(`Não foi possível encontrar seu relacionamento nos registros.`)
    }

    // Define que não estão mais namorando
    namoro1[D2].namorados = false

    reply(`Agora você está totalmente solteiro, notifiquei a(o) sua/seu parceiro sobre o término.`)

    // Envia mensagem para o parceiro
    sandro.sendMessage(
        `${namoro1[D1].usu2}@s.whatsapp.net`,
        {
            text: `Tenho uma notícia ruim sobre seu namoro: ele(a) acaba de terminar.\n–\n• Seja feliz e lembre de todos os bons momentos que vocês tiveram juntos.`
        },
        { quoted: info }
    )

    // Remove do banco de dados
    namoro1.splice(D2, 1)
    fs.writeFileSync("./database/func/namoro1.json", JSON.stringify(namoro1, null, 2))

    namoro1.splice(D1, 1)
    fs.writeFileSync("./database/func/namoro1.json", JSON.stringify(namoro1, null, 2))
}
break

 



case 'nazista': {
if (!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(mess.warningMB(prefix))

// pega os marcados
const mentioned = info.message?.extendedTextMessage?.contextInfo?.mentionedJid

// verifica se marcou alguém
if (!mentioned || !mentioned[0]) {
return reply(`Marque alguém.\nExemplo: /nazista @usuario`)
}

// pessoa marcada
const sender_ou_n = mentioned[0]

sandro.sendMessage(from, {
text: `Pesquisando a ficha de nazista de *@${sender_ou_n.split("@")[0]}* aguarde...`,
mentions: [sender_ou_n]
}, { quoted: info })

setTimeout(async () => {

let random = Math.floor(Math.random() * 110)

sandro.sendMessage(from, {
image: { url: imgnazista },
caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa nazista?\n• Porcentagem de chance: *${random}%*`,
mentions: [sender_ou_n]
}, { quoted: info })

}, 7000)

}
break

case 'gay': {
if (!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(mess.warningMB(prefix))
// pega os marcados
const mentioned = info.message?.extendedTextMessage?.contextInfo?.mentionedJid

// verifica se marcou alguém
if (!mentioned || !mentioned[0]) {
return reply(`Marque alguém.\nExemplo: /gay @usuario`)
}

// pessoa marcada
const sender_ou_n = mentioned[0]

sandro.sendMessage(from, {
text: `Pesquisando a ficha de gay de @${sender_ou_n.split("@")[0]} aguarde...`,
mentions: [sender_ou_n]
}, { quoted: info })

setTimeout(async () => {

let random = Math.floor(Math.random() * 110)
let bo = ''

if (random < 20) {
bo = 'Hmm... você é hetero...'
} else if (random <= 40) {
bo = 'Tenho minhas dúvidas...'
} else if (random <= 60) {
bo = 'Suspeito...'
} else if (random <= 80) {
bo = 'Você é né?'
} else {
bo = 'Você é gay...'
}

sandro.sendMessage(from, {
image: { url: imggay },
caption: `Qual é a porcentagem de chance do(a) *@${sender_ou_n.split("@")[0]}* ser gay?\n• *${random}% homossexual*\n• ${bo}`,
mentions: [sender_ou_n]
}, { quoted: info })

}, 7000)

}
break

case 'feio': {
if (!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(mess.warningMB(prefix))

// pega os marcados
const mentioned = info.message?.extendedTextMessage?.contextInfo?.mentionedJid

// verifica se marcou alguém
if (!mentioned || !mentioned[0]) {
return reply(`Marque alguém.\nExemplo: /feio @usuario`)
}

// pessoa marcada
const sender_ou_n = mentioned[0]

sandro.sendMessage(from, {
text: `Pesquisando a ficha de feio de *@${sender_ou_n.split("@")[0]}* aguarde...`,
mentions: [sender_ou_n]
}, { quoted: info })

setTimeout(async () => {

let random = Math.floor(Math.random() * 110)
let bo = ''

if (random < 20) {
bo = 'Não é feio'
} else if (random <= 30) {
bo = '+/- feio'
} else if (random <= 40) {
bo = 'Tá na média'
} else if (random <= 50) {
bo = 'Feio mas dá pro gasto'
} else if (random <= 60) {
bo = 'Feio com força'
} else if (random <= 70) {
bo = 'Muito feio'
} else if (random <= 80) {
bo = 'Feio nível hard'
} else if (random <= 90) {
bo = 'Assustador'
} else {
bo = 'Você é feio demais bixo'
}

sandro.sendMessage(from, {
image: { url: imgfeio },
caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa feia?\n• A porcentagem de chance é *${random}%*\n• ${bo}`,
mentions: [sender_ou_n]
}, { quoted: info })

}, 7000)

}
break

case 'corno': {
if (!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(mess.warningMB(prefix))

// pega os marcados
const mentioned = info.message?.extendedTextMessage?.contextInfo?.mentionedJid

// verifica se marcou alguém
if (!mentioned || !mentioned[0]) {
return reply(`Marque alguém.\nExemplo: /corno @usuario`)
}

// pessoa marcada
const sender_ou_n = mentioned[0]

sandro.sendMessage(from, {
text: `Pesquisando a ficha de corno @${sender_ou_n.split("@")[0]}, aguarde...`,
mentions: [sender_ou_n]
}, { quoted: info })

setTimeout(async () => {

let random = Math.floor(Math.random() * 110)

sandro.sendMessage(from, {
image: { url: imgcorno },
caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa chifruda?\n• A porcentagem de chance é *${random}%*`,
mentions: [sender_ou_n]
}, { quoted: info })

}, 7000)

}
break

case 'vesgo': {
if (!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(mess.warningMB(prefix))

// pega os marcados
const mentioned = info.message?.extendedTextMessage?.contextInfo?.mentionedJid

// verifica se marcou alguém
if (!mentioned || !mentioned[0]) {
return reply(`Marque alguém.\nExemplo: /vesgo @usuario`)
}

// pessoa marcada
const sender_ou_n = mentioned[0]

sandro.sendMessage(from, {
text: `Pesquisando a ficha de vesgo de @${sender_ou_n.split("@")[0]}, aguarde...`,
mentions: [sender_ou_n]
}, { quoted: info })

setTimeout(async () => {

let random = Math.floor(Math.random() * 110)

sandro.sendMessage(from, {
image: { url: imgvesgo },
caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa vesga?\n• A porcentagem de chance é *${random}%*`,
mentions: [sender_ou_n]
}, { quoted: info })

}, 7000)

}
break

case 'bebado': {
if (!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(mess.warningMB(prefix))

// pega os marcados
const mentioned = info.message?.extendedTextMessage?.contextInfo?.mentionedJid

// verifica se marcou alguém
if (!mentioned || !mentioned[0]) {
return reply(`Marque alguém.\nExemplo: /bebado @usuario`)
}

// pessoa marcada
const sender_ou_n = mentioned[0]

sandro.sendMessage(from, {
text: `Pesquisando a ficha de bêbado(a) de @${sender_ou_n.split("@")[0]}, aguarde...`,
mentions: [sender_ou_n]
}, { quoted: info })

setTimeout(async () => {

let random = Math.floor(Math.random() * 110)

sandro.sendMessage(from, {
image: { url: imgbebado },
caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa bêbada?\n• A porcentagem de chance é *${random}%*`,
mentions: [sender_ou_n]
}, { quoted: info })

}, 7000)

}
break

case 'adivinha':
  try {
    if (!q) return reply(`Use assim: /adivinha 1 a 5`);

    const numeroUser = parseInt(q);

    if (isNaN(numeroUser) || numeroUser < 1 || numeroUser > 5) {
      return reply(`❌ Escolha um número de *1 a 5*!`);
    }

    // Número aleatório do bot
    const numeroBot = Math.floor(Math.random() * 5) + 1;

    let resultado;

    if (numeroUser === numeroBot) {
      resultado = `🎉 *ACERTOU!* 🎉
      
Eu pensei no número *${numeroBot}* 😎
Você mandou bem demais! 🔥`;
    } else {
      resultado = `😢 *ERROU!*
      
Eu pensei no número *${numeroBot}* ❤️
Você escolheu *${numeroUser}*`;

    }

    await sandro.sendMessage(from, {
      text: `🎮 *JOGO: ADIVINHAÇÃO* 🎮

🤔 Estou pensando em um número de 1 a 5...

👉 Sua escolha: *${numeroUser}*

${resultado}

> ${NomeDoBot}`
    }, { quoted: info });

  } catch (e) {
    console.log("Erro no comando 'adivinha':", e);
  }
  break;

case 'gado': {
if (!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(mess.warningMB(prefix))

// pega os marcados
const mentioned = info.message?.extendedTextMessage?.contextInfo?.mentionedJid

// verifica se marcou alguém
if (!mentioned || !mentioned[0]) {
return reply(`Marque alguém.\nExemplo: /gado @usuario`)
}

// pessoa marcada
const sender_ou_n = mentioned[0]

sandro.sendMessage(from, {
text: `Pesquisando a ficha de gado de @${sender_ou_n.split("@")[0]}, aguarde...`,
mentions: [sender_ou_n]
}, { quoted: info })

setTimeout(async () => {

let random = Math.floor(Math.random() * 110)

sandro.sendMessage(from, {
image: { url: imggado },
caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser um gado?\n• A porcentagem de chance é *${random}%*`,
mentions: [sender_ou_n]
}, { quoted: info })

}, 7000)

}
break

case 'gostoso': {
if (!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(mess.warningMB(prefix))

// pega os marcados
const mentioned = info.message?.extendedTextMessage?.contextInfo?.mentionedJid

// verifica se marcou alguém
if (!mentioned || !mentioned[0]) {
return reply(`Marque alguém.\nExemplo: /gostoso @usuario`)
}

// pessoa marcada
const sender_ou_n = mentioned[0]

sandro.sendMessage(from, {
text: `Pesquisando a ficha de gostoso de @${sender_ou_n.split("@")[0]} aguarde...`,
mentions: [sender_ou_n]
}, { quoted: info })

setTimeout(async () => {

let random = Math.floor(Math.random() * 110)

sandro.sendMessage(from, {
image: { url: imggostoso },
caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa gostosa?\n• A porcentagem de chance é *${random}%*`,
mentions: [sender_ou_n]
}, { quoted: info })

}, 7000)

}
break


case 'gostosa': {
if (!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(mess.warningMB(prefix))

// pega os marcados
const mentioned = info.message?.extendedTextMessage?.contextInfo?.mentionedJid

// verifica se marcou alguém
if (!mentioned || !mentioned[0]) {
return reply(`Marque alguém.\nExemplo: /gostosa @usuario`)
}

// pessoa marcada
const sender_ou_n = mentioned[0]

sandro.sendMessage(from, {
text: `Pesquisando a ficha de gostosa de @${sender_ou_n.split("@")[0]} aguarde...`,
mentions: [sender_ou_n]
}, { quoted: info })

setTimeout(async () => {

let random = Math.floor(Math.random() * 110)

sandro.sendMessage(from, {
image: { url: imggostosa },
caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa gostosa?\n• A porcentagem de chance é *${random}%*`,
mentions: [sender_ou_n]
}, { quoted: info })

}, 7000)

}
break


case 'death': {
if (!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(mess.warningMB(prefix))

if (args.length == 0) {
return reply(`Está faltando o nome da pessoa!\nExemplo: ${prefix + command} Victor`)
}

const predea = await axios.get(`https://api.agify.io/?name=${encodeURIComponent(args[0])}`)

if (predea.data.age == null) {
return reply(`Você inseriu um nome inválido, use apenas letras.`)
}

const death = `@${sender.split('@')[0]} — Pessoas com o nome “${predea.data.name}” tendem a viver até ${predea.data.age} anos.`

sandro.sendMessage(from, {
video: { url: deathcmd },
gifPlayback: true,
caption: death,
mentions: [sender]
}, { quoted: info })

}
break


case 'matar':
case 'mata': {
if (!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(mess.warningMB(prefix))

// pega os marcados
const mentioned = info.message?.extendedTextMessage?.contextInfo?.mentionedJid

// verifica marcação
if (!mentioned || !mentioned[0]) {
return reply(`Marque alguém.\nExemplo: /matar @usuario`)
}

// alvo
const alvo = mentioned[0]

sandro.sendMessage(from, {
video: { url: matarcmd },
gifPlayback: true,
caption: `Você acabou de matar o(a) @${alvo.split('@')[0]} ❤️👹`,
mentions: [alvo]
}, { quoted: info })

}
break


case 'beijo':
case 'beijar': {
if (!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(mess.warningMB(prefix))

// pega os marcados
const mentioned = info.message?.extendedTextMessage?.contextInfo?.mentionedJid

// verifica marcação
if (!mentioned || !mentioned[0]) {
return reply(`Marque alguém.\nExemplo: /beijo @usuario`)
}

// alvo
const alvo = mentioned[0]

sandro.sendMessage(from, {
video: { url: beijocmd },
gifPlayback: true,
caption: `Você deu um beijo gostoso em @${alvo.split('@')[0]} 😁👉👈❤`,
mentions: [alvo]
}, { quoted: info })

}
break

case 'vab':
if(!isGroup) return reply(enviar.msg.grupo)
psycatgames().then(async (array) => {
const { nsfw, questions } = array[Math.floor(Math.random() * array.length)]
const { pergunta1, pergunta2 } = questions[Math.floor(Math.random() * questions.length)]
sendPoll(sandro, from, "Você prefere..", [pergunta1, pergunta2])
}).catch(console.error);
break

case 'eununca':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(mess.warningMB(prefix)) 
setTimeout(() => {reagir(from, "🙈")}, 100)
const pergunta_ = JSON.parse(fs.readFileSync('./assets/json/eununca.json'));
const getRandomINever = pergunta_[Math.floor(Math.random() * pergunta_.length)]
sendPoll(sandro, from, getRandomINever, ["Eu nunca", "Eu já"]).catch(console.error);
break

case 'conselhobiblico':
  
case 'conselhosb':   
case 'conselhob':  
reagir(from, "⛪️")
var conselhosb = conselhob[Math.floor(Math.random() * conselhob.length)]
sandro.sendMessage(from, {text: mess.conselhoBiblico(tempo, pushname, conselhosb, NomeDoBot, groupName)}, {quoted: info, contextInfo: {"mentionedJid": mess.conselhoBiblico(tempo, pushname, conselhosb, NomeDoBot, groupName)}})
break

 





case 'brother':
case 'toque':
case 'tocar':
setTimeout(() => {reagir(from, "🤝🏽")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(mess.warningMB(prefix)) 
if(!menc_os2 || menc_jid2[1]) return reply('marque a pessoa que você quer dar um aperto de mão, a mensagem ou o @')
sandro.sendMessage(from, {audio: {url:'./database/audios/aguarde.m4a'}, mimetype: 'audio/mp4', ptt:false}, {quoted: info})
sandro.sendMessage(from, {video: {url: links.bro}, gifPlayback: true, caption: `*VOCÊ DEU UM APERTO DE MÃO NO (A)*

 ⇒ @${menc_os2.split('@')[0]} 🤜🏽🤛🏽

${NomeDoBot} 🤝🏽`, mentions: [menc_os2]})
break

case 'tapa':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(mess.warningMB(prefix)) 
if(!menc_os2 || menc_jid2[1]) return reply('Marque o alvo que você quer da um tapa, a mensagem ou o @')
sandro.sendMessage(from, {video: {url: tapacmd}, gifPlayback: true, caption: `Você acabou de da um tapa na raba da *@${menc_os2.split('@')[0]}*. 😼`, mentions: [menc_os2]}, {quoted: info})
break

case 'chute':
case 'chutar':  
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(mess.warningMB(prefix)) 
if(!menc_os2 || menc_jid2[1]) return reply('marque o alvo que você quer da um chute, a mensagem ou o @')
sandro.sendMessage(from, {video: {url: chutecmd}, gifPlayback: true, caption: `Você acabou de dar um chute em *@${menc_os2.split('@')[0]}*.`, mentions: [menc_os2]}, {quoted: info})
break 

case 'dogolpe':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(mess.warningMB(prefix)) 
if(!menc_os2 || menc_jid2[1]) return reply('Marque a mensagem com o comando ou marque o @ do usuário..')
randomF = ["em iludir pessoas", "em ferir os sentimentos", "em dar chifre"]
sandro.sendMessage(from, {text: `🌟☠️ *@${menc_os2.split("@")[0]}* é especialista *${randomF[Math.floor(Math.random() * randomF.length)]}*.`, mentions: [menc_os2]}, {quoted: info})
break








case 'casal': {
  if (!isGroup) return reply('❌ Esse comando só funciona em grupos.')

  // 🔹 Puxa participantes do grupo
  const groupMetadata = await sandro.groupMetadata(from)
  const participantes = groupMetadata.participants
    .map(p => p.id)
    .filter(id => id !== sandro.user.id) // remove o bot

  // 🔸 Precisa de no mínimo 2 pessoas
  if (participantes.length < 2)
    return reply('❌ Poucas pessoas no grupo para formar um casal.')

  // 🎲 Sorteia duas pessoas diferentes
  const pessoa1 = participantes[Math.floor(Math.random() * participantes.length)]
  let pessoa2

  do {
    pessoa2 = participantes[Math.floor(Math.random() * participantes.length)]
  } while (pessoa2 === pessoa1)

  // 💌 Mensagem
  const texto = `💖 *CASAL DO DIA* 💖

😍 @${pessoa1.split('@')[0]}
😘 @${pessoa2.split('@')[0]}

Será que vai dar match? 👀🔥`

  await sandro.sendMessage(from, {
    text: texto,
    mentions: [pessoa1, pessoa2]
  })
}
break

case 'rankcornos':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
membr = []
const corno1 = groupMembers
const corno2 = groupMembers
const corno3 = groupMembers
const corno4 = groupMembers
const corno5 = groupMembers
const cornos1 = corno1[Math.floor(Math.random() * corno1.length)]
const cornos2 = corno2[Math.floor(Math.random() * corno2.length)]
const cornos3 = corno3[Math.floor(Math.random() * corno3.length)]
const cornos4 = corno4[Math.floor(Math.random() * corno4.length)]
const cornos5 = corno5[Math.floor(Math.random() * corno5.length)]
var porcentagemcorno = ["1%", `2%`, `3%`, `4%`, `5%`, `6%`, `7`, `%`, `9%`, `10`, `11%`, `12%`,`13%`, `14%`, `15%`, `16%`, `17%`, `1%`, `19%`, `20%`, `21%`, `22%`, `23%`, `24%`, `25%`, `26%`, `27%`, `2%`, `27%`, `2%`, `29%`, `30%`, `31%`, `32%`, `33%`, `34%`, `35%`, `36%`, `37%`, `3%`, `39%`, `40%`, `41%`, `42%`, `43%`, `44%`, `45%`, `46%`, `47%`, `4%`, `49%`, `50%`, `51%`, `52%`, `53%`, `54%`, `55%`, `56%`, `57%`, `5%`, `59%`, `60%`, `61%`, `62%`, `63%`, `64%`, `65%`, `66%`, `67%`, `6%`, `69%`, `70%`, `71%`, `72%`, `73%`, `74%`, `75%`, `76%`, `77%`, `7%`, `79%`, `0%`, `1%`, `2%`, `5%`, `4%`, `5%`, `6%`, `7%`, `%`, `9%`, `90%`, `91%`, `92%`, `93%`, `94%`, `95%`, `96%`, `97%`, `9%`, `99%`, `O chifre desse ai bate na lua ksksksk`]
const porcentagemc = porcentagemcorno[Math.floor(Math.random() * porcentagemcorno.length)]
const porcentag = porcentagemcorno[Math.floor(Math.random() * porcentagemcorno.length)]
const porcent = porcentagemcorno[Math.floor(Math.random() * porcentagemcorno.length)]
const porcl = porcentagemcorno[Math.floor(Math.random() * porcentagemcorno.length)]
const porg = porcentagemcorno[Math.floor(Math.random() * porcentagemcorno.length)]
const prg = porcentagemcorno[Math.floor(Math.random() * porcentagemcorno.length)]
ytb = `
❯  ❒『 ${NomeDoBot} 』❒  ❮


║❯   〘 TOP MAIS CORNOS 〙

┠❯ ❒ GRUPO: ${groupName}
┠
┠❯ ❒ CORNO: @${cornos1.id.split('@')[0]}  ❯ ${porcent} ❮
┠❯ ❒ CORNO: @${cornos2.id.split('@')[0]}  ❯ ${porcentag} ❮
┠❯ ❒ CORNO: @${cornos3.id.split('@')[0]}  ❯ ${porcl} ❮
┠❯ ❒ CORNO: @${cornos4.id.split('@')[0]}  ❯ ${porg} ❮
┠❯ ❒ CORNO: @${cornos5.id.split('@')[0]}  ❯ ${prg} ❮

❯         〘 MOTIVACIONAL 〙

${enviarmen}`
membr.push(cornos1.id)
membr.push(cornos2.id)
membr.push(cornos3.id)
membr.push(cornos4.id)
membr.push(cornos5.id)
mentions(ytb, membr, true)
break

case 'rank':
case 'ranklevel':

if(!isGroup) return reply(enviar.msg.adm)
if(!isLevelingOn) return reply(`Para usar o comando, primeiro o(s) admin(s) do grupo deve ativar o sistema de level.\n• Solicite a 1 do(s) administrador(es) para ativar o comando. Usar: ${prefix}leveling`)
if(level2.length > 4) {
cortGG = level2.map(i => i)
rank = cortGG.sort((a, b) => (a.contador < b.contador) ? 0 : -1)
if(level2.length > 10) {var totalR = 10} else {var totalR = level2.length}
tc = `🎖️ Rank Level - [Type: *Global*]\n–`
for ( i = 0; i < totalR; i++) {
  if(i != null) {
var newlevel = rank[i].contador
if(newlevel < 100){var newpatente = "Bronze I 🥉"}; if(newlevel >= 100 && newlevel < 200){var newpatente = "Bronze II 🥉"}; if(newlevel >= 200 && newlevel < 300){var newpatente = "Bronze III 🥉"}; if(newlevel >= 300 && newlevel < 400){var newpatente = "Prata I 🥈"}; if(newlevel >= 400 && newlevel < 500){var newpatente = "Prata II 🥈"}; if(newlevel >= 500 && newlevel < 600){var newpatente = "Prata III 🥈"}; if(newlevel >= 600 && newlevel < 700){var newpatente = "Ouro I 🥇"}; if(newlevel >= 700 && newlevel < 800){var newpatente = "Ouro II 🥇"}; if(newlevel >= 800 && newlevel < 900){var newpatente = "Ouro III 🥇"}; if(newlevel >= 900 && newlevel < 1200){var newpatente = "Ouro IV 🥇"}; if(newlevel >= 1200 && newlevel < 1500){var newpatente = "Platina I 🌀"}; if(newlevel >= 1500 && newlevel < 1800){var newpatente = "Platina II 🌀"}; if(newlevel >= 1800 && newlevel < 2100){var newpatente = "Platina III 🌀"}; if(newlevel >= 2100 && newlevel < 2700){var newpatente = "Platina IV 🌀"}; if(newlevel >= 2700 && newlevel < 3300){var newpatente = "Diamante I 💎"}; if(newlevel >= 3300 && newlevel < 3900){var newpatente = "Diamante II 💎"}; if(newlevel >= 3900 && newlevel < 4500){var newpatente = "Diamante III 💎"}; if(newlevel >= 4500 && newlevel < 5000){var newpatente = "Diamante IV 💎"}; if(newlevel >= 5000 && newlevel < 5500){var newpatente = "Paladino I 🔮"}; if(newlevel >= 5500 && newlevel < 6500){var newpatente = "Paladino II 🔮"}; if(newlevel >= 6500 && newlevel < 7500){var newpatente = "Paladino III 🔮"}; if(newlevel >= 7500 && newlevel < 9000){var newpatente = "Paladino IV 🔮"}; if(newlevel >= 9000 && newlevel < 10500){var newpatente = "Mestre I ❤️‍🔥"}; if(newlevel >= 10500 && newlevel < 12000){var newpatente = "Mestre II ❤️‍🔥"}; if(newlevel >= 12000 && newlevel < 13500){var newpatente = "Mestre III ❤️‍🔥"}; if(newlevel >= 13500 && newlevel < 15000){var newpatente = "Mestre IV ❤️‍🔥"}; if(newlevel >= 15000 && newlevel < 20000){var newpatente = "Mestre V ❤️‍🔥"}; if(newlevel >= 20000 && newlevel < 25000){var newpatente = "Desafiante I 👑"}; if(newlevel >= 25000 && newlevel < 30000){var newpatente = "Desafiante II 👑"}; if(newlevel >= 30000 && newlevel < 35000){var newpatente = "Desafiante III 👑"}; if(newlevel >= 35000 && newlevel < 40000){var newpatente = "Desafiante IV 👑"}; if(newlevel >= 40000 && newlevel < 50000){var newpatente = "Desafiante V 👑"}; if(newlevel >= 50000 && newlevel < 60000){var newpatente = "Usuário Superior I 🎓"}; if(newlevel >= 60000 && newlevel < 70000){var newpatente = "Usuário Superior II 🎓"}; if(newlevel >= 70000 && newlevel < 80000){var newpatente = "Mestre Supremo I 🪄"}; if(newlevel >= 80000 && newlevel < 90000){var newpatente = "Mestre Supremo II 🪄"}; if(newlevel >= 90000 && newlevel < 100000){var newpatente = "Mestre Supremo III 🪄"}; if(newlevel >= 100000 && newlevel < 150000){var newpatente = "Conquistador I ⚒️"}; if(newlevel >= 150000 && newlevel < 200000){var newpatente = "Conquistador II ⚒️"}; if(newlevel >= 200000 && newlevel < 300000){var newpatente = "Conquistador III ⚒️"}; if(newlevel >= 300000 && newlevel < 400000){var newpatente = "Desbravador I 🛰️"}; if(newlevel >= 400000 && newlevel < 500000){var newpatente = "Desbravador II 🛰️"}; if(newlevel >= 500000 && newlevel < 1000000){var newpatente = "Desbravador III 🛰️"}; if(newlevel >= 1000000 && newlevel < 1500000){var newpatente = "Grande Mestre I 🪩"}; if(newlevel >= 1500000 && newlevel < 2000000){var newpatente = "Grande Mestre II 🪩"}; if(newlevel >= 2000000 && newlevel < 5000000){var newpatente = "Grande Mestre III 🪩"}; if(newlevel >= 5000000 && newlevel < 10000000){var newpatente = "Supremacy X ⚜️"}; if(newlevel >= 10000000){var newpatente = "Veterano 🎩🏼‍♂️"}
tc += `\n*${i+1}°.* • Usuário(a): *${rank[i].nick}*\n• Usuário ID: *wa.me/${rank[i].id.split('@')[0]}*\n• Quantidade Total de XP: *${rank[i].contador}*\n• Atualmente a pessoa está no patente *${newpatente}*, no level: *${rank[i].level}*\n————`
}
}
reply(tc)
} else { 
reply(`Nenhum dado(s) foi retornado, tente novamente mais tarde️!`)
}
break


case 'level':
if(!isGroup) return reply(enviar.msg.adm)
if(!isLevelingOn) return reply(`Para usar o comando, primeiro o(s) admin(s) do grupo deve ativar o sistema de level.\n• Solicite a 1 do(s) administrador(es) para ativar o comando. Usar: ${prefix}leveling`)
if(JSON.stringify(level2).includes(sender)) {
levelstts = level2.map(i => i.id).indexOf(sender)
var newlevel = level2[levelstts].contador
if(newlevel < 100) newpatente = "Bronze I"
if(newlevel >= 100 && newlevel < 200) newpatente = "Bronze II"
if(newlevel >= 200 && newlevel < 300) newpatente = "Bronze III"
if(newlevel >= 300 && newlevel < 400) newpatente = "Prata I"
if(newlevel >= 400 && newlevel < 500) newpatente = "Prata II"
if(newlevel >= 500 && newlevel < 600) newpatente = "Prata III"
if(newlevel >= 600 && newlevel < 700) newpatente = "Ouro I"
if(newlevel >= 700 && newlevel < 800) newpatente = "Ouro II"
if(newlevel >= 800 && newlevel < 900) newpatente = "Ouro III"
if(newlevel >= 900 && newlevel < 1200) newpatente = "Ouro IV"
if(newlevel >= 1200 && newlevel < 1500) newpatente = "Platina I"
if(newlevel >= 1500 && newlevel < 1800) newpatente = "Platina II"
if(newlevel >= 1800 && newlevel < 2100) newpatente = "Platina III"
if(newlevel >= 2100 && newlevel < 2700) newpatente = "Platina IV"
if(newlevel >= 2700 && newlevel < 3300) newpatente = "Diamante I"
if(newlevel >= 3300 && newlevel < 3900) newpatente = "Diamante II"
if(newlevel >= 3900 && newlevel < 4500) newpatente = "Diamante III"
if(newlevel >= 4500 && newlevel < 5000) newpatente = "Diamante IV"
if(newlevel >= 5000 && newlevel < 5500) newpatente = "Paladino I"
if(newlevel >= 5500 && newlevel < 6500) newpatente = "Paladino II"
if(newlevel >= 6500 && newlevel < 7500) newpatente = "Paladino III"
if(newlevel >= 7500 && newlevel < 9000) newpatente = "Paladino IV"
if(newlevel >= 9000 && newlevel < 10500) newpatente = "Mestre I️‍"
if(newlevel >= 10500 && newlevel < 12000) newpatente = "Mestre II️‍"
if(newlevel >= 12000 && newlevel < 13500) newpatente = "Mestre III"
if(newlevel >= 13500 && newlevel < 15000) newpatente = "Mestre IV️‍"
if(newlevel >= 15000 && newlevel < 20000) newpatente = "Mestre V️‍"
if(newlevel >= 20000 && newlevel < 25000) newpatente = "Desafiante I"
if(newlevel >= 25000 && newlevel < 30000) newpatente = "Desafiante II"
if(newlevel >= 30000 && newlevel < 35000) newpatente = "Desafiante III"
if(newlevel >= 35000 && newlevel < 40000) newpatente = "Desafiante IV"
if(newlevel >= 40000 && newlevel < 50000) newpatente = "Desafiante V"
if(newlevel >= 50000 && newlevel < 60000) newpatente = "Usuário Superior I"
if(newlevel >= 60000 && newlevel < 70000) newpatente = "Usuário Superior II"
if(newlevel >= 70000 && newlevel < 80000) newpatente = "Mestre Supremo I"
if(newlevel >= 80000 && newlevel < 90000) newpatente = "Mestre Supremo II"
if(newlevel >= 90000 && newlevel < 100000) newpatente = "Mestre Supremo III"
if(newlevel >= 100000 && newlevel < 150000) newpatente = "Conquistador I️"
if(newlevel >= 150000 && newlevel < 200000) newpatente = "Conquistador II️"
if(newlevel >= 200000 && newlevel < 300000) newpatente = "Conquistador III️"
if(newlevel >= 300000 && newlevel < 400000) newpatente = "Desbravador I"
if(newlevel >= 400000 && newlevel < 500000) newpatente = "Desbravador II️"
if(newlevel >= 500000 && newlevel < 1000000) newpatente = "Desbravador III️"
if(newlevel >= 1000000 && newlevel < 1500000) newpatente = "Grande Mestre I"
if(newlevel >= 1500000 && newlevel < 2000000) newpatente = "Grande Mestre II"
if(newlevel >= 2000000 && newlevel < 5000000) newpatente = "Grande Mestre III"
if(newlevel >= 5000000 && newlevel < 10000000) newpatente = "Supremacy X"
if(newlevel >= 10000000) newpatente = "Veterano"
// É usado na barra apresentada na msg, que vai ser encaminhada pelo bot quando Usuário executar o cmd 'level' ou 'patente'.
if(newpatente == "Bronze I") {newcont = 100; newtt = 0}
if(newpatente == "Bronze II") {newcont = 200; newtt = 100}
if(newpatente == "Bronze III") {newcont = 300; newtt = 200}
if(newpatente == "Prata I") {newcont = 400; newtt = 300}
if(newpatente == "Prata II") {newcont = 500; newtt = 400}
if(newpatente == "Prata III") {newcont = 600; newtt = 500}
if(newpatente == "Ouro I") {newcont = 700; newtt = 600}
if(newpatente == "Ouro II") {newcont = 800; newtt = 700}
if(newpatente == "Ouro III") {newcont = 900; newtt = 800}
if(newpatente == "Ouro IV") {newcont = 1200; newtt = 900}
if(newpatente == "Platina I") {newcont = 1500; newtt = 1200}
if(newpatente == "Platina II") {newcont = 1800; newtt = 1500}
if(newpatente == "Platina III") {newcont = 2100; newtt = 1800}
if(newpatente == "Platina IV") {newcont = 2700; newtt = 2100}
if(newpatente == "Diamante I") {newcont = 3300; newtt = 2700}
if(newpatente == "Diamante II") {newcont = 3900; newtt = 3300}
if(newpatente == "Diamante III") {newcont = 4500; newtt = 3900}
if(newpatente == "Diamante IV") {newcont = 5000; newtt = 4500}
if(newpatente == "Paladino I") {newcont = 5500; newtt = 5000}
if(newpatente == "Paladino II") {newcont = 6500; newtt = 5500}
if(newpatente == "Paladino III") {newcont = 7500; newtt = 6500}
if(newpatente == "Paladino IV") {newcont = 9000; newtt = 7500}
if(newpatente == "Mestre I️‍") {newcont = 10500; newtt = 9000}
if(newpatente == "Mestre II") {newcont = 12000; newtt = 10500}
if(newpatente == "Mestre III️‍") {newcont = 13500; newtt = 12000}
if(newpatente == "Mestre IV️‍") {newcont = 15000; newtt = 13500}
if(newpatente == "Mestre V️‍") {newcont = 20000; newtt = 15000}
if(newpatente == "Desafiante I") {newcont = 25000; newtt = 20000}
if(newpatente == "Desafiante II") {newcont = 30000; newtt = 25000}
if(newpatente == "Desafiante III") {newcont = 35000; newtt = 30000}
if(newpatente == "Desafiante IV") {newcont = 40000; newtt = 35000}
if(newpatente == "Desafiante V") {newcont = 50000; newtt = 40000}
if(newpatente == "Usuário Superior I") {newcont = 60000; newtt = 50000}
if(newpatente == "Usuário Superior II") {newcont = 70000; newtt = 60000}
if(newpatente == "Mestre Supremo I") {newcont = 80000; newtt = 70000}
if(newpatente == "Mestre Supremo II") {newcont = 90000; newtt = 80000}
if(newpatente == "Mestre Supremo III") {newcont = 100000; newtt = 90000}
if(newpatente == "Conquistador I️") {newcont = 150000; newtt = 100000}
if(newpatente == "Conquistador II") {newcont = 200000; newtt = 150000}
if(newpatente == "Conquistador III️") {newcont = 300000; newtt = 200000}
if(newpatente == "Desbravador I️") {newcont = 400000; newtt = 300000}
if(newpatente == "Desbravador II️") {newcont = 500000; newtt = 400000}
if(newpatente == "Desbravador III️") {newcont = 1000000; newtt = 500000}
if(newpatente == "Grande Mestre I") {newcont = 1500000; newtt = 1000000}
if(newpatente == "Grande Mestre II") {newcont = 2000000; newtt = 1500000}
if(newpatente == "Grande Mestre III") {newcont = 5000000; newtt = 2000000}
if(newpatente == "Supremacy X️") {newcont = 10000000; newtt = 5000000}
// Barra de quanto falta para alcançar o próximo nível.
if(newlevel < 10000000) {
  sabPor = Number(Number(newlevel - newtt) / Number(newcont - newtt) * 100).toFixed(1)
  sabibis = newcont - newlevel
if(sabPor == 100) sabPor = `〘██████████〙${sabPor}%`
if(sabPor < 100) returnP = `〘█████████▒〙${sabPor}%`
if(sabPor < 90) returnP = `〘████████▒▒〙${sabPor}%`
if(sabPor < 80) returnP = `〘███████▒▒▒〙${sabPor}%`
if(sabPor < 70) returnP = `〘██████▒▒▒▒〙${sabPor}%`
if(sabPor < 60) returnP = `〘█████▒▒▒▒▒〙${sabPor}%`
if(sabPor < 50) returnP = `〘████▒▒▒▒▒▒〙${sabPor}%`
if(sabPor < 40) returnP = `〘███▒▒▒▒▒▒▒〙${sabPor}%`
if(sabPor < 30) returnP = `〘██▒▒▒▒▒▒▒▒〙${sabPor}%`
if(sabPor < 20) returnP = `〘█▒▒▒▒▒▒▒▒▒〙${sabPor}%`
if(sabPor < 10) returnP = `〘▒▒▒▒▒▒▒▒▒▒〙${sabPor}%`
} else {
returnP = ``
}
leveltxt = `*LEVELING* - Aqui está a sua situação sobre o mesmo.\n• Usuário: *@${sender.split("@")[0]}*\n• Você está atualmente no level *${level2[levelstts].level}* e no patente *${newpatente}*\n• Sua quantidade atual de XP é: *${level2[levelstts].contador}* ${newlevel < 10000000 ? `para alcançar o próximo falta *${newcont}*.` : ``}\n\t🔋 ${newlevel < 10000000 ? `*${returnP}*` : ``}\n–\n${newlevel < 10000000 ? `• Falta${Number(sabibis) > 1 ? `m` : ``} apenas *${sabibis} XP* para você upar para o próximo level.` : `Você já alcançou a patente máxima, ou seja, está muito a frente de todos.`}`
mention(`${leveltxt}`)
} else {
reply(`Nenhuma informação foi obtida sobre seu level/patente atual em sua solicitação.\n• *Tente novamente mais tarde!* Caso seja uma falha técnica entre em contato com o(a) dono(a) do bot.`)
}
break

case 'addlevel':
if(!SoDono) return reply(enviar.msg.donosmt)
if(!q) return reply("Digite a quantidade de level que deseja adicionar")
if(!Number(args[0])) return reply(args[0] + " não é número...")
if(Number(args[0]) < 1) return reply("Tem que adicionar ao menos 1 level.")
if(q.includes(".")) return reply("Não pode número decimal.")
AB = level2.map(i => i.id).indexOf(menc_prt ? menc_prt : sender)
level2[AB].level += Number(args[0])
fs.writeFileSync("./database/usuarios/leveling.json", JSON.stringify(level2))
reply(`${args[0]} leve${Number(args[0]) > 1 ? `is` : `l`} adicionado${Number(args[0]) > 1 ? `s` : ``} a este usuário...`)
break



case 'addxp':
if(!SoDono) return reply(enviar.msg.donosmt)
if(!q) return reply("Digite a quantidade de XP que deseja adicionar")
if(!Number(args[0])) return reply(args[0] + " não é número...")
if(Number(args[0]) < 1) return reply("Tem que add ao menos 1 de XP")
if(q.includes(".")) return reply("Não pode número decimal")
AB = level2.map(i => i.id).indexOf(menc_prt ? menc_prt : sender)
level2[AB].contador += Number(args[0])
fs.writeFileSync("./database/usuarios/leveling.json", JSON.stringify(level2))
reply(`${args[0]} experiência${Number(args[0]) > 1 ? `s` : ``} fo${Number(args[0]) > 1 ? `ram` : `i`} adicionada${Number(args[0]) > 1 ? `s` : ``} a este usuário...`)
break







case 'blocklevel-list': case 'blocklevellist':
if(!SoDono) return reply(enviar.msg.donosmt)
txt = `[Total: *${level2.length}*] - Lista de usuários bloqueados do contador de XP:\n`
let blocklevellist = 0
for(i = 0; i < level2.length; i++) {
  if(level2[i].block == true) {
txt += `*${i+1}.* @${level2[i].id.split('@')[0]}\n`
blocklevellist += 1
}
}
txt += `\n–\n• Total de Bloqueados: *${blocklevellist}*`
if(blocklevellist > 0) {
mention(txt)
} else {
reply("Não existe nenhum *usuário bloqueado* do contador XP.")
}
break



case 'rankativos': 
   
if(!isGroup) return reply(enviar.msg.grupo)
var i3 = countMessage.map(i => i.groupId).indexOf(from)
var blue = countMessage[i3].numbers.map(i => i)
blue.sort((a, b) => ((a.figus == undefined ? a.figus = 0 : a.figus + a.messages + a.cmd_messages) < (b.figus == undefined ? b.figus = 0 : b.figus + b.cmd_messages + b.messages)) ? 0 : -1)
menc = [] 
blad = `*🏆 Rank dos mais ativos no grupo:* ${groupName}\n`
for ( i = 0; i < (blue.length < 5 ? blue.length : 5); i++) {
if (i != null) blad += `\n*🏅 ${i + 1}º Lugar:* @${blue[i].id.split('@')[0]}\n• Quantidade de mensagens encaminhadas: *${blue[i].messages}*\n• Quantidade de comandos executados pelo usuário(a): *${blue[i].cmd_messages}*\n• Usuário está conectado em um dispositivo: *${blue[i].aparelho}*\n• Figurinhas encaminhadas pelo usuário(a) no grupo: *${blue[i].figus}*\n`
menc.push(blue[i].id)
}
mentions(blad, menc, true)
break

case 'rankinativo':

if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
await ClearMembersInactive()
bule = []; bule2 = []; mentioned_jid = []
for(cag of countMessage[ind].numbers){
bule2.push(cag.id)
if(cag.messages <= 1){bule.push(cag)}}
bule.sort((a, b) => ((a.messages + a.cmd_messages) < (b.cmd_messages + b.messages)) ? 0 : -1)
boardi = `🗑 *Rank dos mais inativos do grupo:* ${groupName}\n-\n`
if(bule.length == 0)boardi += '❌ Nenhum usuário inativo foi encontrado neste grupo.️'
for ( i = 0; i < (bule.length < 5 ? bule.length : 5); i++) {
if (i != null) boardi += `*🏅 ${i + 1}º Lugar:* @${bule[i].id.split('@')[0]}\n• Quantidade de mensagens enviadas pelo usuário(a): *${bule[i].messages}*\n• Quantidade de comandos executados pelo usuário(a): *${bule[i].cmd_messages}*\n• Figurinhas encaminhadas pelo usuário(a) no grupo: *${bule[i].aparelho}*\n\n`
mentioned_jid.push(bule[i].id)
} 
mentions(boardi, mentioned_jid, true)
break








case 'rankgay':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')

try{
d = []
ret = `❯  ❒『${NomeDoBot}』❒  ❮\n\n║❯         〘 TOP 5 MAIS GAYS 〙\n\n`
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
ret += `┠❯ ❒ 🏳️‍🌈 @${groupMembers[r].id.split('@')[0]}\n`
d.push(groupMembers[r].id)
}
mentions(ret, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break

case 'rankgados': case 'rankgado':

if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')

try{
d = []
ret = `❯  ❒『${NomeDoBot}』❒  ❮\n\n║❯         〘 TOP 5 MAIS GADOS 〙\n\n`
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
ret += `┠❯ ❒ 🐮 @${groupMembers[r].id.split('@')[0]}\n`
d.push(groupMembers[r].id)
}
mentions(ret, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break

case 'suruba': case 'surubao': 
if(!isGroup) return reply(msg.grupo)
const quantidadeSafados = args.join(' ')
if(!quantidadeSafados) return reply(`Informe por favor a quantidade de pessoas você deseja em sua suruba... *Exemplo:* ${prefix+command} 4`)
emojiskk = ["🥵", "❤️", "🫣", "😏"]
emojis = emojiskk[Math.floor(Math.random() * emojiskk.length)]  
frasekk = [`tá querendo relações sexuais a ${quantidadeSafados}, topa?`, `quer que *${quantidadeSafados}* pessoas venham de *chicote, algema e corda de alpinista*.`, `quer que ${quantidadeSafados} pessoas der tapa na cara, lhe chame de cachorra e fud3r bem gostosinho...`]
context = frasekk[Math.floor(Math.random() * frasekk.length)]  
ABC = `@${sender.split("@")[0]} ${context}\n\n`
for (var i = 0; i < quantidadeSafados; i++) {
ABC += `@${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n`
}
mencionarIMG(ABC, suruba);
break;

case 'rankgostosa':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
member = []
const p1 = groupMembers
const p2 = groupMembers
const p3 = groupMembers
const p4 = groupMembers
const p5 = groupMembers
const o1 = p1[Math.floor(Math.random() * p1.length)]
const o2 = p2[Math.floor(Math.random() * p2.length)]
const o3 = p3[Math.floor(Math.random() * p3.length)]
const o4 = p4[Math.floor(Math.random() * p4.length)]
const o5 = p5[Math.floor(Math.random() * p5.length)]
luy = `
Paradas!🤚🤚\n\n1=🤚🤭@${o1.id.split('@')[0]}🤚🤭\n\n\n2=🤚🤭@${o2.id.split('@')[0]}🤚🤭\n\n\n3=🤚🤭@${o3.id.split('@')[0]}🤚🤭\n\n\n4=🤚🤭@${o4.id.split('@')[0]}🤚🤭\n\n\n5=🤚🤭@${o5.id.split('@')[0]}??🤭\n\n\nMultas por serem gostosas dms😳 pague pena enviando nud no PV do dono😊 by Bot`
member.push(o1.id)
member.push(o2.id)
member.push(o3.id)
member.push(o4.id)
member.push(o5.id)
mentions(luy, member, true)
break

case 'rankgostosos': case 'rankgostoso':
case 'rankgostoso':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
member = []
const p01 = groupMembers
const p02 = groupMembers
const p03 = groupMembers
const p04 = groupMembers
const p05 = groupMembers
const o01 = p01[Math.floor(Math.random() * p01.length)]
const o02 = p02[Math.floor(Math.random() * p02.length)]
const o03 = p03[Math.floor(Math.random() * p03.length)]
const o04 = p04[Math.floor(Math.random() * p04.length)]
const o05 = p05[Math.floor(Math.random() * p05.length)]
luy = `
❯ 『${NomeDoBot}』 ❮


║❯         〘 TOP MAIS GOSTOSOS 〙

┠❯ ❒ GRUPO: ${groupName}
┠
┠❯ ❒ GOSTOSO: @${o01.id.split('@')[0]}  
┠❯ ❒ GOSTOSO: @${o02.id.split('@')[0]}  
┠❯ ❒ GOSTOSO: @${o03.id.split('@')[0]}  
┠❯ ❒ GOSTOSO: @${o04.id.split('@')[0]}  
┠❯ ❒ GOSTOSO: @${o05.id.split('@')[0]}  `
member.push(o01.id)
member.push(o02.id)
member.push(o03.id)
member.push(o04.id)
member.push(o05.id)
mentions(luy, member, true)
break

case 'ranknazista': case 'ranknazistas':
if(!isGroup) return reply(enviar.msg.grupo)

ABC = `*💂‍♂RANK DOS 5 MAIS NAZISTAS DO GRUPO 卐🤡*\n—\n`
TMNZTS = ["Soldado nazista, marcha com estilo.‍", "Comandante implacável, lidera com rigor.️", "Nazista estrategista, conquista territórios.️", "Mestre da ordem, disciplina em primeiro lugar.", "Soldado de elite, Nazista hardcore.", "General invencível, domina as batalhas.", "Nazista disciplinado, fiel à causa.", "Líder autoritário, impõe respeito.️", "Soldado feroz, nazismo no coração.", "Mestre da propaganda, convence com palavras.️", "Nazista moderno, tecnologia na guerra.", "Máquina de guerra, implacável e eficiente.️","Comandante supremo, nazismo eterno.", "Soldado leal, marcha em nome da ideologia.", "Nazista clássico, revive o passado.", "General poderoso, Nazista do século XXI.", "Comandante inabalável, Nazista de honra.", "Soldado devoto, nazismo no sangue.", "Mestre da retórica nazista, convence a todos.", "Nazista visionário, futuro sob a suástica."];
for (var i = 0; i < 5; i++) {
ABC += `• ${i+1}° *[${Math.floor(Math.random() * 100)}%]* - @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]} -> ( ${TMNZTS[Math.floor(Math.random() * TMNZTS.length)]} )\n`
}
mencionarIMG(ABC, rnknazista);
break;

case 'rankotaku': case 'rankotakus':
if(!isGroup) return reply(enviar.msg.grupo)

ABC = `*㊙ RANK DOS 5 MAIS OTAKU DO GRUPO ( ˶•̀ _•́ ˶)*\n—\n`
for (var i = 0; i < 5; i++) {
ABC += `• ${i+1}° *[${Math.floor(Math.random() * 100)}%]* - @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n`
}
mencionarIMG(ABC, rnkotaku);
break;

case 'rankpau':
if(!isGroup) return reply(enviar.msg.grupo)

ABC = `*RANK DOS 5 PAU MAIOR DO GRUPO 📏*\n—\n`
TMPAU = ["Pequeno pra cact, se mata maluco", `Pequenininho chega ser até fofo`, `Menor que meu dedo mindinho pequeno demais`, `Até que dá sentir, tá na média`, `Até que é grandinho`, `Grande até!`, `Gigantesco igual meu braço`, `Enorme quase chega no útero`, `Grandão demais em, e uii`, `Vara de pegar manga, grande demais, como sai na rua assim??`, "Que grandão em, nasceu metade animal"]
for (var i = 0; i < 5; i++) {
ABC += `• *${i+1}°* @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]} -> ( ${TMPAU[Math.floor(Math.random() * TMPAU.length)]} )\n`
}
mencionarIMG(ABC, rnkpau);
break;



/*case 'jogodavelha':
if(!isGroup) return reply(enviar.msg.grupo)
if(!menc_jid2) return reply("Marque junto com o comando, o @ do usuário que deseja desafiar..")
joguinhodavelhajs.push(sender)
fs.writeFileSync('./database/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs))
joguinhodavelhajs2.push(from)
fs.writeFileSync('./database/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
if(fs.existsSync(`./assets/tictactoe/db/${from}.json`)) {
const boardnow = setGame(`${from}`);
const matrix = boardnow._matrix;
const chatMove = `『 *🎮 Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸ 🕹️* 』\n—\n💢 Alguém está jogando o *jogo da velha* no momento! Por favor, aguarde o término da partida para iniciar a próxima.\n-\n• @${boardnow.X} VS @${boardnow.O}\n—\n• Sua vez: @${boardnow.turn == "X" ? boardnow.X : boardnow.O}\n-\n${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}\n${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}\n${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}`;
sandro.sendMessage(from, {text: chatMove}, {quoted: info,
mentions: [
boardnow.X + "@s.whatsapp.net",
boardnow.O + "@s.whatsapp.net",
]});
return;
}
if(argss.length === 1)
return reply(`Jogue com alguém, para inicar a partida : ${prefix + command} @membro.`);
const boardnow = setGame(`${from}`);
console.log(colors.red(time, "red"), colors.magenta("[ JOGO DA VELHA ]"), colors.white(`Iniciado - Sessão: ${boardnow.session}`));
boardnow.status = false;
boardnow.X = sender.replace("@s.whatsapp.net", "");
boardnow.O = argss[1].replace("@", "");
var blabord = [`${boardnow.X}`, `${boardnow.O}`]
fs.writeFileSync(`./assets/tictactoe/db/${from}.json`,
JSON.stringify(boardnow, null, 2)
);
const strChat = `『 *📌 ᎬՏᏢᎬᎡᎪΝᎠϴ ϴ ϴᏢϴΝᎬΝͲᎬ ⚔️* 』\n—\n@${sender.replace("@s.whatsapp.net", "")} _está te desafiando para uma partida de jogo da velha..._\n_[ ${argss[1]} ] Use *『S』* para aceitar ou *『N』* para não aceitar..._\n—\nEm caso de problemas, marque algum administrador para resetar o jogo com o comando ${prefix}rv`;
b = [sender, menc_jid]
mentions(strChat, b, true)
break*/


  

 
case 'resetvelha':
case 'rv': 
if(!isJoguin && !isGroupAdmins) return reply(`Fale com quem iniciou o jogo, só ele pode resetar, ou então algum admin.`)
if(fs.existsSync("./assets/tictactoe/db/" + from + ".json")) {
DLT_FL("./assets/tictactoe/db/" + from + ".json");
reply(`Jogo da velha resetado com sucesso nesse grupo!`);
joguinhodavelhajs.splice([])
fs.writeFileSync('./database/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs))
joguinhodavelhajs2.splice([])
fs.writeFileSync('./database/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
} else {
reply(`Não a nenhuma sessão em andamento...`);
}
break





case 'gartic':
if (!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(mess.warningMB(prefix)) 
if (!isGroupAdmins) return reply('Somente adms!')

const garticquiz = Math.floor(Math.random() * garticArchives.length)
if(args.length == 0) return reply('Use 1 para ativar o gartic, ou seja, para desativar utilize o valor numérico 0')
if (args.join(' ') === '1') {
if(fs.existsSync(`./database/grupos/games/gartic/${from}.json`)) {
dataGartic2 = JSON.parse(fs.readFileSync(`./database/grupos/games/gartic/${from}.json`))
imagemtexto = `👩🏼‍🏫 - A resposta é representada por um(a): ${dataGartic2.pergunta}
📜 - A resposta supostamente começa com a(s) letra(s): "${dataGartic2.letra_inicial}"
🤔 - Hmmm, contém traços? ${dataGartic2.contem_traços}
–
❓️ - *Não sabe a resposta?* _Peça ao adm do grupo para usar o comando *${prefix}revelargartic* para revelar a resposta correta da afirmação._`
wew = await getBuffer(`${dataGartic2.imagem}`)  
await sandro.sendMessage(from, {image: wew, caption: imagemtexto, thumbnail: wew}, {quoted: info})
} else {
fs.writeFileSync(`./database/grupos/games/gartic/${from}.json`, `${JSON.stringify(garticArchives[garticquiz])}`)
imagemtexto = `👩🏼‍🏫 - A resposta é representada por um(a): ${garticArchives[garticquiz].pergunta}
📜 - A resposta supostamente começa com a(s) letra(s): "${garticArchives[garticquiz].letra_inicial}"
🤔 - Hmmm, contém traços? ${garticArchives[garticquiz].contem_traços}
–
❓️ - *Não sabe a resposta?* _Peça ao adm do grupo para usar o comando *${prefix}revelargartic* para revelar a resposta correta da afirmação._`
wew = await getBuffer(`${garticArchives[garticquiz].imagem}`)  
await sandro.sendMessage(from, {image: wew, caption: imagemtexto, thumbnail: wew}, {quoted: info})
}
} else if (args.join(' ') ==='0') {
if(!fs.existsSync(`./database/grupos/games/gartic/${from}.json`)) return reply('Não tem como desativar o gartic pôs ele não foi ativado.')
fs.unlinkSync(`./database/grupos/games/gartic/${from}.json`)
reply("Desativado com sucesso.")
}
break

case 'enigma':
if (!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(mess.warningMB(prefix)) 
if (!isGroupAdmins) return reply('Somente adms!')

const engimaSolu = Math.floor(Math.random() * enigmaArchive.length)
if(args.length == 0) return reply('Use 1 para ativar o enigma, ou seja, para desativar utilize o valor numérico 0')
if (args.join(' ') === '1') {
if(fs.existsSync(`./database/grupos/games/enigma/${from}.json`)) {
SAB_SAB_ENI = JSON.parse(fs.readFileSync(`./database/grupos/games/enigma/${from}.json`))
imagemtexto = `📜 - Resolva o seguinte enigma abaixo:

${SAB_SAB_ENI.charada}

❓️ - *Não sabe a resposta?* _Peça ao adm do grupo para usar o comando *${prefix}revelarenigma* para revelar a resposta correta da enigma._`
wew = await getBuffer(`https://telegra.ph/file/cc1ea31504adec9ce4fa0.jpg`)  
await sandro.sendMessage(from, {image: wew, caption: imagemtexto, thumbnail: wew}, {quoted: info})
} else {
fs.writeFileSync(`./database/grupos/games/enigma/${from}.json`, `${JSON.stringify(enigmaArchive[engimaSolu])}`)
imagemtexto = `📜 - Resolva o seguinte enigma abaixo:

${enigmaArchive[engimaSolu].charada}

❓️ - *Não sabe a resposta?* _Peça ao adm do grupo para usar o comando *${prefix}revelarenigma* para revelar a resposta correta da enigma._`
wew = await getBuffer(`https://telegra.ph/file/cc1ea31504adec9ce4fa0.jpg`)  
await sandro.sendMessage(from, {image: wew, caption: imagemtexto, thumbnail: wew}, {quoted: info})
}
} else if (args.join(' ') ==='0') {
if(!fs.existsSync(`./database/grupos/games/enigma/${from}.json`)) return reply('Não tem como desativar o enigma pôs ele não foi ativado.')
fs.unlinkSync(`./database/grupos/games/enigma/${from}.json`)
reply("Desativado com sucesso.")
}
break















//==(AUDIOS/DE-MUSICA/ZOUEIRA/ETC..)===\\



//=======================================\\

//=====(ALTERADOR-DE-AUDIO/VIDEO)=======\\

case 'videocontrario':

if((isMedia && info.message.videoMessage || !isQuotedImage) && !q.length <= 1) { 
reply(enviar.espere)
encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
media = rane
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
DLT_FL(media)
if(err) return reply(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
sandro.sendMessage(from, {video: buffer453, mimetype: 'video/mp4'}, {quoted: info})
DLT_FL(ran)
})
} else {
reply("Marque um vídeo..")
}
break 

case 'videolento':
  
if((isMedia && info.message.videoMessage || !isQuotedImage) && !q.length <= 1) {
reply(enviar.espere) 
encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
media = rane
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
DLT_FL(media)
if(err) return reply(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
sandro.sendMessage(from, {video: buffer453, mimetype: 'video/mp4'}, {quoted: info })
DLT_FL(ran)
})
} else {
reply("Marque um vídeo..")
}
break

case 'videorapido':
  
if((isMedia && info.message.videoMessage || !isQuotedImage) && !q.length <= 1) {
reply(enviar.espere)
encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
media = rane
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
DLT_FL(media)
if(err) return reply(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
sandro.sendMessage(from, {video: buffer453, mimetype: 'video/mp4'}, {quoted: info })
DLT_FL(ran)
})	
} else {
reply("Marque o vídeo..")
}
break

case 'grave2':
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Ocorreu um erro ao adicionar o *efeito sonoro* no áudio.')
hah = fs.readFileSync(ran)
sandro.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:false}, {quoted: info})
DLT_FL(ran)
})
} else {
reply("Marque o áudio..")
}
break

case 'grave':
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.9,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Ocorreu um erro ao adicionar o *efeito sonoro* no áudio.')
hah = fs.readFileSync(ran)
sandro.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:false}, {quoted: info})
DLT_FL(ran)
})
} else {
reply("Marque o áudio..")
}
break


case 'vozmenino':  
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Ocorreu um erro ao adicionar o *efeito sonoro* no áudio.')
hah = fs.readFileSync(ran)
sandro.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:false}, {quoted: info})
DLT_FL(ran)
})
} else {
reply("Marque o áudio..")
}
break  



case 'bass3':
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af equalizer=f=20:width_type=o:width=2:g=15 ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Ocorreu um erro ao adicionar o *efeito sonoro* no áudio.')
hah = fs.readFileSync(ran)
sandro.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:false}, {quoted: info})
DLT_FL(ran)
})
} else {
reply("Marque o áudio..")
}
break

case 'bass': 
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af equalizer=f=20:width_type=o:width=2:g=15 ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Ocorreu um erro ao adicionar o *efeito sonoro* no áudio.')
hah = fs.readFileSync(ran)
sandro.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:false}, {quoted: info})
DLT_FL(ran)
})
} else {
reply("Marque o áudio...")
}
break

case 'bass2': 
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Ocorreu um erro ao adicionar o *efeito sonoro* no áudio.')
hah = fs.readFileSync(ran)
sandro.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:false}, {quoted: info})
DLT_FL(ran)
})
} else {
reply("Marque o áudio..")
}
break




case 'audiorapido':  
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.9,asetrate=95100" ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Erro')
hah = fs.readFileSync(ran)
sandro.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:false}, {quoted: info})
DLT_FL(ran)
})
} else {
reply("Marque o áudio...")
}
break

case 'esquilo':
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.7,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Ocorreu um erro ao adicionar o *efeito sonoro* no áudio.')
hah = fs.readFileSync(ran)
sandro.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:false}, {quoted: info})
DLT_FL(ran)
})
} else {
reply("Marque o áudio...")
}
break

case 'audiolento': 

if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.9,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Ocorreu um erro ao adicionar o *efeito sonoro* no áudio.')
hah = fs.readFileSync(ran)
sandro.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:false}, {quoted: info})
DLT_FL(ran)
})
} else {
reply("Marque o áudio..")
}
break



//==========(EFEITOS-MARCAR)==========\\

case 'togif':
if(!isQuotedSticker) return reply('Marque a figurinha animada!')
try {
if((isMedia && !info.message.videoMessage || isQuotedSticker) && !q.length <= 1) {
buff = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
reply('Aguarde, estou convertendo a figurinha para o formato gif.')
a = await webp_mp4(buff)
sandro.sendMessage(from, {video: {url: a}, gifPlayback: true, fileName: `stick.gif`}, {quoted: info}).catch(e => {
reply("Erro ao realizar o envio do sticker!") 
})
DLT_FL(buff)
}
} catch {
reply(mess.error())
}
break





case 'join': case 'entrar':
if(!SoDono) return reply(enviar.msg.donosmt)
string = args.join(' ')
if(!string) return reply('Insira um link de convite ao lado do comando.')
if(string.includes('chat.whatsapp.com/') || reply('Ops, verifique o link que você inseriu.') ) {
link = string.split('app.com/')[1]
try {
sandro.groupAcceptInvite(`${link}`)
} catch(erro) {
if(String(erro).includes('resource-limit') ) {
reply('O grupo já está com o alcance de 257 membros.')
}
if(String(erro).includes('not-authorized') ) {
reply('Não foi possível entrar no grupo.\nMotivo: Banimento.')
}
}
}
break


  
case 'cnpj': {
    if (!q) return reply(`Digite um CNPJ!\nExemplo: /cnpj2 27865757000102`)

    try {
        await reagir(from, "🏢")

        let cnpj = q.replace(/\D/g, '')
        if (cnpj.length !== 14) return reply(`❌ CNPJ inválido!`)

        let res = await fetch(`https://brasilapi.com.br/api/cnpj/v1/${cnpj}`)
        let json = await res.json()

        if (json.message) {
            return reply(`❌ CNPJ não encontrado!`)
        }

        let texto = `*CONSULTA DE CNPJ*\n\n`
        texto += `Razão Social: ${json.razao_social}\n`
        texto += `Nome Fantasia: ${json.nome_fantasia || 'Não informado'}\n`
        texto += `CNPJ: ${json.cnpj}\n`
        texto += `Situação: ${json.descricao_situacao_cadastral}\n`
        texto += `Abertura: ${json.data_inicio_atividade}\n\n`

        texto += `*Endereço:*\n`
        texto += `${json.logradouro}, ${json.numero}\n`
        texto += `${json.bairro}\n`
        texto += `${json.municipio} - ${json.uf}\n\n`

        texto += `Telefone: ${json.ddd_telefone_1 || 'Não informado'}\n`
        texto += `Email: ${json.email || 'Não informado'}\n\n`

        texto += `Fonte: SANDRO`

        reply(texto)

    } catch (e) {
        console.log(e)
        reply(`❌ Erro ao consultar o CNPJ`)
    }
}
break
  
case 'cep': {
    if (!q) {
        return reply(`Exemplo:\n${prefix + command} 00000000`);
    }

    try {
        const cep = q.replace(/\D/g, '');

        if (cep.length !== 8) {
            return reply("Digite um CEP válido com 8 números.");
        }

        const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await res.json();

        if (data.erro) {
            return reply("CEP não encontrado.");
        }

        await sandro.sendMessage(from, {
            text: `*CONSULTA DE CEP*

*CEP:* ${data.cep}
*Rua:* ${data.logradouro || "Não informado"}
*Bairro:* ${data.bairro || "Não informado"}
*Cidade:* ${data.localidade}
*Estado:* ${data.uf} (${data.estado})
*Região:* ${data.regiao}
*Complemento:* ${data.complemento || "Não informado"}

*DDD:* ${data.ddd}
*IBGE:* ${data.ibge}
*SIAFI:* ${data.siafi}`
        }, { quoted: info });

    } catch (err) {
        console.log(err);
        reply("Erro ao consultar o CEP.");
    }
}
break;

// RPG //



case 'meusc':
reagir(from, "❤️");
if (!isGroup) return (enviar.msg.grupo)
if (!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
if (!JSON.stringify(sabrpg).includes(sender)) return reply(`usuário(a), novo(a) por aqui? Use *${prefix}rgc* para se registrar na City.`)

try {

// 🔹 legenda
const menuTexto = rpgmenu(prefix, pushname, NickDono, NomeDoBot, isChVip, sender);

// 🔹 controle
const controle = "./config/fototipo.json";

let tipo = "jpg";
if (fs.existsSync(controle)) {
  tipo = JSON.parse(fs.readFileSync(controle)).tipo;
}

// 🔥 ENVIO INTELIGENTE
if (tipo === "gif" && fs.existsSync('./config/fotobot.gif')) {

  await sandro.sendMessage(from, {
    video: fs.readFileSync('./config/fotobot.gif'),
    gifPlayback: true,
    caption: menuTexto
  }, { quoted: info });

} else if (fs.existsSync('./config/fotobot.jpg')) {

  await sandro.sendMessage(from, {
    image: fs.readFileSync('./config/fotobot.jpg'),
    caption: menuTexto
  }, { quoted: info });

} else {

  await sandro.sendMessage(from, {
    image: { url: `${fotobot}` },
    caption: menuTexto
  }, { quoted: info });

}

} catch (e) {
console.error("Erro no comando 'menurpg':", e);
}
break;

 
 
case 'modoc': 
case 'cityrpg':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!q) return reply(`Você está usando o comando de forma errada, verifique:\n• Ex: *${prefix+command} 1/0* _(1 para ativar, 0 para desativar)_`)
if(Number(args[0]) === 1) {
if(JSON.stringify(autorpg).includes(from) && autorpg[autorpg.map(i => i.id).indexOf(from)].rpg == true) return reply("Sistema *City* - O sistema já está ativado aqui no grupo.")
if(!JSON.stringify(autorpg).includes(from)) {
autorpg.push({id: from, rpg: true})
fs.writeFileSync("./database/usuarios/SystemRPG/autorpg.json", JSON.stringify(autorpg))
} else {
autorpg[autorpg.map(i => i.id).indexOf(from)].rpg = true
fs.writeFileSync("./database/usuarios/SystemRPG/autorpg.json", JSON.stringify(autorpg))
}
reply("Sistema *City* - Foi efetuado a ativação no grupo com sucesso...")
} else if(Number(args[0]) === 0) {
if(JSON.stringify(autorpg).includes(from) && autorpg[autorpg.map(i => i.id).indexOf(from)].rpg == false) return reply("Sistema *City* - O sistema não está ativado aqui no grupo.")
if(!JSON.stringify(autorpg).includes(from)) {
autorpg.push({id: from, rpg: false})
fs.writeFileSync("./database/usuarios/SystemRPG/autorpg.json", JSON.stringify(autorpg))
} else {
autorpg[autorpg.map(i => i.id).indexOf(from)].rpg = false
fs.writeFileSync("./database/usuarios/SystemRPG/autorpg.json", JSON.stringify(autorpg))
}
reply("Sistema *City* - Foi desabilitado com sucesso no grupo.")
}
break














case 'rpglistgp':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
membros = `Lista de participantes do *grupo* que estão registrados na *City*:\n–\n`
rpglistgp = 0
for(i = 0; i < groupMembers.length; i++) {
if(JSON.stringify(sabrpg).includes(groupMembers[i].id)) {
membros += `Membro ID ${i+1}. ❪▧⃯⃟ฺ࣭࣪͘ꕸ▸ @${groupMembers[i].id.split('@')[0]}\n`
rpglistgp += 1
}
}
membros += `–\n• Quantidade: *${rpglistgp} participante(s).*`
mention(membros)
break






case 'meubanco':
case 'saldo':
if(!isSabCityOFF) return reply(`Olá, o modo RPG não esta a`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)
AB = sabrpg.map(i => i.id).indexOf(sender)
dindin = Number(sabrpg[AB].money).toFixed(2)
if(dindin < 10){
var bctxtssuy = `0${dindin}`
} else {
var bctxtssuy = dindin
}
caixa = []
for(i = 0; i < sabrpg.length; i++){
caixa.push({idnmr: sabrpg[i].id, nmr: i+1})
}
enc = caixa.map(b => b.idnmr).indexOf(sender)
if(Number(caixa[enc].nmr) < 100) {
if(Number(caixa[enc].nmr) < 10) {
page = `00` + caixa[enc].nmr
} else {
page = `0` + caixa[enc].nmr
}
} else {
page = caixa[enc].nmr
}
myid = sabrpg[AB].id.split('@')[0].slice(5)
txtssuy = `Olá *${sabrpg[AB].nome}*, tudo bem? Aqui está a sua solicitação:\n—\n• [💵] *Informações Bancárias*\n• Seu banco atual: *${sabrpg[AB].namebank}*\n• Você está atualmente com *R$ ${bctxtssuy}* em sua carteira para uso.\n–\n• [🧾] *Informações de Registro*\n• Seu ID: *R${sabrpg[AB].id.split(myid)[0]}GP${myid}BC*\n• Você realizou o registro na _City_ às *${sabrpg[AB].hrg} hora(s)* no dia *${sabrpg[AB].drg}*.\n–\n• [📖] *Livro de Registro*\n_Com base em meu livro de registros_, você foi registrado na página: *${page}*`
reply(txtssuy)
break

case 'rankcity':

if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
setTimeout(() => {reagir(from, "🤑")}, 300)
sandrobot = sabrpg.map(i => i)
rank = sandrobot.sort((a, b) => (a.money < b.money) ? 0 : -1)
if(sabrpg.length > 5) {
var totalR = 5
} else {
var totalR = sabrpg.length
}
txtporr = `🌟🧾 *Rank City:*\n–\n`
for ( i = 0; i < totalR; i++) {
  if(i != null) {
txtporr += `${i + 1}º Lugar - Usuário: *${rank[i].nome}*
• Saldo do Usuário: R$ ${Number(rank[i].money).toFixed(2)}\n–\n`
}
}
reply(txtporr)
break

case 'buscarc':

if(!SoDono) return reply(enviar.msg.donosmt)
if(!JSON.stringify(sabrpg).includes(`${q}@s.whatsapp.net`)) return reply(`ID não encontrado ou inexistente...`)
AB = sabrpg.map(i => i.id).indexOf(`${q}@s.whatsapp.net`)
dindin = Number(sabrpg[AB].money).toFixed(2)
if(dindin < 10){
var bctxt = `0${dindin}`
} else {
var bctxt = dindin
}
bcid = sabrpg[AB].id.split('@')[0]
cort = bcid.slice(5)
reply(`© *City:* | Carteira e informações do Usuário:\n–\n• Nome do Usuário: *${sabrpg[AB].nome}*\n• Banco: *${sabrpg[AB].namebank}*\n• Saldo disponível: *R$ ${bctxt}*\n—–\n• [🧾] *Informações de Registro:*\n• ID do Usuário: *R${bcid.split(cort)[0]}GP${cort}BC*\n• Registrou-se às *${sabrpg[AB].hrg}* hora(s) do dia *${sabrpg[AB].drg}*.`)
break
















case 'codelist':

case 'listacodigos':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
if(coderpg.length < 0) return reply(`Sinto muito!😿 Não existe nenhum código disponível no momento.`)
txt = `[Total: *${coderpg.length}*] - Códigos de resgate disponíveis.\n• Para resgatar o benefício, use o comando: *${prefix}resgatargf <code>*`
for(i =0; i < coderpg.length; i++) {
txt += `\n—\n*[${i+1}]* » • Código: *${coderpg[i].codeid}*\n• Valor do Gift Card: *R$ ${Number(coderpg[i].valor).toFixed(2)}*\n• Número de usuário(s) que podem resgatar o mesmo: *${Number(coderpg[i].quantmax) - Number(coderpg[i].usus.length)}*`
}
reply(txt)
break

case 'fazerpix': case 'transferir':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)
datepix = moment.tz('America/Sao_Paulo').format('DD/MM/YY')
dateid = moment.tz('America/Sao_Paulo').format('DDMMYY')
horaid = moment.tz('America/Sao_Paulo').format('HHmmss')
var [nmr, pix] = q.split('/')
if(!nmr) return reply(`Coloque a chave PIX (número do indivíduo) para fazer a transferência bancária...`)
if(sender.includes(nmr)) return reply(`Não é possível enviar um pix para você mesmo...`)
if(!pix) return reply(`Coloque uma barra ( / ) após a chave, e defina o valor a ser enviado, ex:
${prefix+command} 5581995597603/100`)
if(Number(pix) < 0.01) return reply(`Não é possível transferir menos que 1 centavo...`)
if(!Number(pix)) return reply(`${pix} não é número... 😿`)
if(!JSON.stringify(sabrpg).includes(`${nmr}@s.whatsapp.net`)) return reply(`Chave PIX não encontrada ou inexistente...`)
AB = sabrpg.map(i => i.id).indexOf(sender)
BC = sabrpg.map(i => i.id).indexOf(`${nmr}@s.whatsapp.net`)
if(Number(pix) > Number(sabrpg[AB].money)) return reply(`Você não tem saldo suficiente para efetuar essa transferência...`)
if(sabrpg[AB].namebank == "Inter"){tpb = 0.1}
if(sabrpg[AB].namebank == "NuBank"){tpb = 0.2}
if(sabrpg[AB].namebank == "PagBank"){tpb = 0.3}
if(sabrpg[AB].namebank == "Bradesco"){tpb = 0.4}
if(sabrpg[AB].namebank == "Itaú"){tpb = 0.5}
if(sabrpg[AB].namebank == "Next"){tpb = 0.6}
if(sabrpg[AB].namebank == "Caixa"){tpb = 0.7}
if(sabrpg[AB].namebank == "Santander️"){tpb = 0.8}
if(sabrpg[AB].namebank == "Banco do Brasil"){tpb = 0.9}
if(sabrpg[AB].namebank == "PicPay"){tpb = 1}
if(sabrpg[AB].namebank == "PayPal"){tpb = 1.1}
if(sabrpg[AB].namebank == sabrpg[BC].namebank) {
taxabanco = 0
} else {
taxabanco = tpb
}
taxageral = Number(pix)*Number(taxabanco)/100
addpix = Number(sabrpg[BC].money) + Number(Number(pix) - Number(taxageral))
delpix = Number(sabrpg[AB].money) - Number(pix)
sabrpg[BC].money = addpix
sabrpg[AB].money = delpix
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
myid = sabrpg[AB].id.split('@')[0].slice(5)
suid = sabrpg[BC].id.split('@')[0].slice(5)
imn = sabrpg[AB].nome.slice(1)
isn = sabrpg[BC].nome.slice(1)
mimn = sabrpg[AB].nome.split(imn)[0]
misn = sabrpg[BC].nome.split(isn)[0]
comprovante = `🧾 *Comprovante:*\n—\n• Pix: *R$ ${Number(Number(pix) - Number(taxageral)).toFixed(2)}*\n• Código ID: *${mimn.toUpperCase()+myid+misn.toUpperCase()+suid}P${dateid}X${horaid}RPG*\n•️ Taxa do Banco: *${taxabanco}%*\n—–\n• A transferência foi realizada às *${hora120}* do dia: *${datepix}*\n——\n• *Envio:* *${sabrpg[AB].nome}*\n• Banco: *${sabrpg[AB].namebank}*\n• ID: *R${sabrpg[AB].id.split(myid)[0]}GP${myid}BC*\n——\n• Recebimento: *${sabrpg[BC].nome}*\n• Banco: *${sabrpg[BC].namebank}*\n• ID: *R${sabrpg[BC].id.split(suid)[0]}GP${suid}BC*`
if(JSON.stringify(sabrpg).includes(nmrdn)) {
setTimeout(() => {
BD = sabrpg.map(d => d.id).indexOf(nmrdn)
pixdono = sabrpg[BD].money
sabrpg[BD].money = Number(pixdono) + Number(taxageral)
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
}, 1000)
}
reply(comprovante)
break











case 'minado': 
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)

if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)
if (isPlayMines) return reply('Uma partida já foi iniciada, espere acabar para iniciar uma nova...')
if (args.length < 1) return reply('*Diga a dificuldade: easy, normal, hard*')
tekyushd = args[0].toLowerCase()
if (tekyushd == 'easy') q_mines = 5
else if (tekyushd == 'normal') q_mines = 8 
else if (tekyushd == 'hard') q_mines = 12 
else return reply('Dificuldade inválida...')
p_mines = await getMinesPositions(minecor, q_mines)
atp = (q_mines == 5) ? 3 : (q_mines == 8) ? 5 : (q_mines == 12) ? 8 : 5
ctw = minecor.filter(function(el) {
return !p_mines.includes(el)
})
var minframes = JSON.parse(fs.readFileSync('./database/grupos/games/minesframe.json'))
mines.push({id: from, jogador: sender, pos_mines: p_mines, qnt_mines: q_mines, selected_cord: [], cord_to_win: ctw, attempts: atp, tips_d: 0, hits: 0, minesp: minframes})
fs.writeFileSync('./database/grupos/games/mines.json', JSON.stringify(mines, null, 2))
sandro.sendMessage(from, {image: {url: minado_bomb}, caption: `💣 *Campo Minado:*\n\t• Não sabe como jogar? Use o comando: *${prefix}mineshelp*\n\t• Caso desejar encerrar ou resetar a partida, use: *${prefix}minareset*\n-\n• *Números:* 1️⃣ 2️⃣ 3️⃣ 4️⃣ 5️⃣\n• *Coluna A:* 🟦 🟦 🟦 🟦 🟦\n• *Coluna B:* 🟦 🟦 🟦 🟦 🟦\n• *Coluna C:* 🟦 🟦 🟦 🟦 🟦\n• *Coluna D:* 🟦 🟦 🟦 🟦 🟦\n• *Coluna E:* 🟦 🟦 🟦 🟦 🟦\n—\n• Mina(s): *${q_mines}*\n• Dificuldade: *${tekyushd}*\n• Tentativa(s): *${atp}*`})
break

case 'mina': {
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)

if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)
if (!isPlayMines) return reply('Nenhuma partida foi iniciada no grupo atualmente!')
if (args.length < 1) return reply('Escolha uma coordenada! Ex: a1, b3, etc')

if(JSON.stringify(mines[mines.map(i => i.id).indexOf(from)]).includes(sender)) {

let play_i = minesId.indexOf(from)
let RAN_VALOR = Math.floor(Math.random() * 10000)

for(let obj of args) {
let tekyushdd = obj.toLowerCase()

if (!minecor.includes(tekyushdd)) return reply('Escolha uma coordenada válida!')
if (mines[play_i].selected_cord.includes(tekyushdd)) return reply('Coordenada já selecionada!')

// 💣 CAIU NA BOMBA → PERDE NA HORA
if (mines[play_i].pos_mines.includes(tekyushdd)) {

mines[play_i].minesp[tekyushdd] = '💣'

// mostrar todas as minas
for (let m of mines[play_i].pos_mines) {
  mines[play_i].minesp[m] = '💣'
}

let e = mines[play_i].minesp

let res = `💣 *Campo Minado:*\n`
res += `—\n💥 BOOM! Você pisou em uma mina e perdeu 😭\n`
res += `💸 Recompensa perdida: R$ ${Number(RAN_VALOR).toFixed(2)}\n\n`

res += `• *Coluna A:* ${e.a1} ${e.a2} ${e.a3} ${e.a4} ${e.a5}\n`
res += `• *Coluna B:* ${e.b1} ${e.b2} ${e.b3} ${e.b4} ${e.b5}\n`
res += `• *Coluna C:* ${e.c1} ${e.c2} ${e.c3} ${e.c4} ${e.c5}\n`
res += `• *Coluna D:* ${e.d1} ${e.d2} ${e.d3} ${e.d4} ${e.d5}\n`
res += `• *Coluna E:* ${e.e1} ${e.e2} ${e.e3} ${e.e4} ${e.e5}`

// remove jogo
mines.splice(play_i, 1)
fs.writeFileSync('./database/grupos/games/mines.json', JSON.stringify(mines, null, 2))

await sandro.sendMessage(from, {
  image: { url: minado_bomb },
  caption: res
})

return // 🔥 ESSENCIAL PRA PARAR TUDO
}

// ⭐ ACERTOU
mines[play_i].minesp[tekyushdd] = '⭐'
mines[play_i].hits += 1
mines[play_i].tips_d += 1
mines[play_i].selected_cord.push(tekyushdd)
}

let e = mines[play_i].minesp

let res = `💣 *Campo Minado:*\n\t• Não sabe como jogar? Use o comando: *${prefix}mineshelp*\n\t• Caso desejar encerrar ou resetar a partida, use: *${prefix}minareset*\n—\n• *Números:* 1️⃣ 2️⃣ 3️⃣ 4️⃣ 5️⃣\n• `
res += `• *Coluna A:* ${e.a1} ${e.a2} ${e.a3} ${e.a4} ${e.a5}\n`
res += `• *Coluna B:* ${e.b1} ${e.b2} ${e.b3} ${e.b4} ${e.b5}\n`
res += `• *Coluna C:* ${e.c1} ${e.c2} ${e.c3} ${e.c4} ${e.c5}\n`
res += `• *Coluna D:* ${e.d1} ${e.d2} ${e.d3} ${e.d4} ${e.d5}\n`
res += `• *Coluna E:* ${e.e1} ${e.e2} ${e.e3} ${e.e4} ${e.e5}\n`
res += `—\n`
res += `💣 Minas: ${mines[play_i].qnt_mines}\n`
res += `🎯 Acertos: ${mines[play_i].hits}`

// 🏆 VITÓRIA
if (mines[play_i].selected_cord.length >= mines[play_i].cord_to_win.length) {

let ganhou = mines[play_i].cord_to_win.every(e => 
  mines[play_i].selected_cord.includes(e)
)

if (ganhou) {

res += `\n🥳 Você venceu!\n💰 Ganhou: R$ ${Number(RAN_VALOR).toFixed(2)}`

let USER = sabrpg.map(i => i.id).indexOf(sender)
let MONEYATUAL = sabrpg[USER].money

sabrpg[USER].money = Number(MONEYATUAL) + Number(RAN_VALOR)

// remove jogo
mines.splice(play_i, 1)
fs.writeFileSync('./database/grupos/games/mines.json', JSON.stringify(mines, null, 2))

await sandro.sendMessage(from, {
  image: { url: minado_bomb },
  caption: res
})

return
}
}

// continua jogo
fs.writeFileSync('./database/grupos/games/mines.json', JSON.stringify(mines, null, 2))

await sandro.sendMessage(from, {
  image: { url: minado_bomb },
  caption: res
})

} else {
return reply("Já existe uma partida ocorrendo no grupo, aguarde acabar.")
}

}
break






case 'itenspesca':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)
if(JSON.stringify(pescaria).includes(sender)) return mentions(`Olá @${pushname}, você já tem uma vara de pesca e um barco! Não é possível comprar novamente, pois você já possui o conjunto de pescaria.`)
if(Number(sabrpg[AB].money) < Number(150)) return reply(`😿 Você não possuí Golds suficiente para realizar a compra de uma vara de pescar e um barco...`)
sabrpg[AB].money -= Number(150) // Diminuir o saldo quando executar a compra!
pescaria.push(sender) // Adicionar ao json o user do id que realizou a compra do mesmo.
fs.writeFileSync("./database/usuarios/SystemRPG/pescaria.json", JSON.stringify(pescaria))
reply(`⛵️🎣 Você acaba de adquirir uma vara de pescar e um barco para se usar na pescaria, acabei de descontar 300 Golds em sua conta por motivo da compra de seus utensílios, agora você está hábito para usar o comando: *${prefix}pescar*\n—\n• Lembrando, você deve ter pelo menos 300 reais para pescar, pois quando não há sucesso você perde um valor de até 200 Golds em sua Império  Account.`)
break

case 'pescar':

if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)

if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)
if(!JSON.stringify(pescaria).includes(sender)) return mention(`Olá @${sender.split("@")[0]}, você não tem os itens nescessários para usar este comando! Compre uma vara de pescar e um barco por *150 Golds*, use o comando: *${prefix}itenspesca*`)
if(Number(sabrpg[AB].money) < Number(300)) return reply(`Você não possuí Golds suficiente para realizar o uso deste comando, no mínimo você deve ter mais de 300 Golds em sua carteira para usar...\n• Use meus joguinhos e jaja você consegue esse valor, não fique mal!️`)
minu = moment.tz('America/Sao_Paulo').format('mm')
if(!JSON.stringify(rg_pescaria).includes(sender)) {
rg_pescaria.push({id: sender, minuto: minu})
fs.writeFileSync("./database/usuarios/SystemRPG/pescaria-t.json", JSON.stringify(rg_pescaria))
}
AC = rg_pescaria.map(i => i.id).indexOf(sender)
if(Number(rg_pescaria[AC].minuto) !== Number(minu)) {
rg_pescaria[AC].minuto = minu
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
CHANCE_G = Math.floor(Math.random() * 100);
reply(`- Iniciando pescaria...`)
if(Number(CHANCE_G) > 50) {
ValorPerdido = Math.floor(Math.random() * 150); 
AB = sabrpg.map(i => i.id).indexOf(sender);
sabrpg[AB].money = Number(sabrpg[AB].money) - Number(ValorPerdido);
perdeuMessage = [
`🌊😿 Você estava desbravando os 7 mares quando apareceu o tubarão martelo e derrubou o barco. Todos morreram, e você perdeu *R$ ${Number(ValorPerdido).toFixed(2)}* com gastos no funeral...`,
`Depois de horas de pesca, você não conseguiu o pacu nem o pirarucu! O único que aconteceu foi que você tomou no c*, acaba de perder *R$ ${Number(ValorPerdido).toFixed(2)}*! 😿🌟`,
`Você queria dar um mergulho na água e achar peixes novos, mas infelizmente você acabou caindo no sono e o único que conseguiu foi areia na bunda, ainda perdeu *R$ ${Number(ValorPerdido).toFixed(2)}*! 🤣`
]
txtcpsj = perdeuMessage[Math.floor(Math.random() * perdeuMessage.length)]
} else {
ValorGanho = Math.floor(Math.random() * 500)
AB = sabrpg.map(i => i.id).indexOf(sender)
TotalMoedas = sabrpg[AB].money
sabrpg[AB].money = Number(TotalMoedas) + Number(ValorGanho);
pescarMessage = [
`😲🗺 Em sua navegação pelo manguezais, você conseguiu pescar os seguintes frutos do mar *caranguejo-uçá, o camarão-rosa e a tainha* e você conseguiu vender ${Math.floor(Math.random() * 250)} de cada um deles, como recompensa você acaba de ganhar *R$ ${Number(ValorGanho).toFixed(2)}*.`,
`Depois de horas de pesca, finalmente você acaba de fisgar um pirarucu, o peixe era tão grande que foi preciso usar um guincho para tirá-lo da água. Como recompensa de sua pescada, você acaba de ganhar: *R$ ${Number(ValorGanho).toFixed(2)}*. 😌`,
`Você e seu pai foram convidados para um incrível passeio de barco, lá vocês conseguiram encontrar e pescar *${Math.floor(Math.random() * 50)}* peixe(s) e marisco(s)... Como recompensa, você acaba de ganhar em sua carteira: *R$ ${Number(ValorGanho).toFixed(2)}*. ⛵️❤️`,
`O seu esforço foi recompensado! Você ganhou *R$ ${Number(ValorGanho).toFixed(2)}* por ter feito a maior pescaria do dia! 😍`,
`🛒💰 Parabéns! Você vendeu vários peixes no mercado da produção localizado em *Maceió, Alagoas*, como recompensa por suas vendas o seu patrão lhe recompensou com *R$ ${Number(ValorGanho).toFixed(2)}*.`,
`😼 Você foi convidado à um torneio de pesca e ganhou em ${Math.floor(Math.random() * 5)}°, como recompensa você acaba de ganhar: R$ ${Number(ValorGanho).toFixed(2)}*.`,
`Você foi convidado à um torneio de pesca e saiu como campeão! 🎉 Parabéns, como recompensa você acaba de ganhar: R$ ${Number(ValorGanho).toFixed(2)}*.`,
`🌟 Você foi o pescador mais sortudo do dia! Ganhou R$ ${Number(ValorGanho).toFixed(2)} no sorteio desconhecido entre os pescadores.`,
`Você é um verdadeiro profissional! Faturou em toda sua pescada R$ ${Number(ValorGanho).toFixed(2)}, Parabéns amigo(a)! 😍🎉`,
`Você vendeu o seu sururu para um restaurante bem renomado na cidade de São Paulo! Ganhou R$ ${Number(ValorGanho).toFixed(2)}  pelas suas vendas do dia! 😲🌟🎉`,
`Você estava em um cruzeiro e acabou conhecendo muitos peixes de perto! Este cruzeiro era o Titanic, mas pelo menos você conseguiu *R$ ${Number(ValorGanho).toFixed(2)}* com os peixes... 🤣🎉`
]
txtcpsj = pescarMessage[Math.floor(Math.random() * pescarMessage.length)]
}
await sandro.sendMessage(from, {text: txtcpsj}, {quoted: info})
} else {
reply(`Por favor, aguarde *${60 - Number(moment.tz('America/Sao_Paulo').format('ss'))}s* para realizar uma nova pescagem...`)
}
break;

case 'minerar':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)

if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)
minu = moment.tz('America/Sao_Paulo').format('mm')
if(!JSON.stringify(minerar).includes(sender)) {
minerar.push({id: sender, minuto: minu})
fs.writeFileSync("./database/usuarios/SystemRPG/minerar.json", JSON.stringify(minerar))
}
AC = minerar.map(i => i.id).indexOf(sender)
if(Number(minerar[AC].minuto) !== Number(minu)) {
minerar[AC].minuto = minu
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
MINERAR_G = Math.floor(Math.random() * 100)
reply(`- Iniciando mineração...`)
if(Number(MINERAR_G) > 50) {
PD = ["nenhum mineral valioso", "nenhuma joia valiosa em sua busca", "nenhum diamante em sua caçada", "nenhum minério validoso", "nenhum cobre em sua caçada", "nada de redstone em sua caçada"]
txtssuys = `😭 Em sua tentativa de mineração, não foi possível evidenciar ${PD[Math.floor(Math.random()*PD.length)]}...`
} else {
MT = Math.floor(Math.random() * 2000)
AB = sabrpg.map(i => i.id).indexOf(sender)
MA = sabrpg[AB].money
sabrpg[AB].money = Number(MA) + Number(MT);
mineMessage = [
`Você estava minerando nas ilhas savitas e encontrou em seu caminho *R$ ${Number(MT).toFixed(2)}* em minerais preciosos! 💰`, 
`🗣💰 Você invadiu uma mina proibida e quando estava fazendo a mineração achou *R$ ${Number(MT).toFixed(2)}* em troca de ouro!`, 
`💎👷🏻‍♀️ Você invadiu uma mina de diamantes proibida, enquanto você estava fazendo a mineração, encontrou 2 diamantes equivalentes à *R$ ${Number(MT).toFixed(2)}*.`, 
`⛏️👷🏻‍♀️ Você escavou uma mina de ouro subterrânea em Minas Gerais e encontrou *R$ ${Number(MT).toFixed(2)}*!`, 
`🛫 Em uma de suas viagens para o interior da Flórida, você embarcou uma busca ao tesouro perdido e encontrou em seu caminho um cordão de ouro perdido avaliado em *R$ ${Number(MT).toFixed(2)}*.`, 
`😱🌟 Você invadiu a casa do vizinho e encontrou *R$ ${Number(MT).toFixed(2)}* escavando o quintal dele.`, 
`⛏️👷🏻‍♀️✨️ Você acaba de invadir em uma mina de esmeraldas desconhecida e encontrou *R$ ${Number(MT).toFixed(2)}*`, 
`🛥️💰 Você encontrou nas profundezas do oceanos, um tesouro em um navio antigo equivalente à *R$ ${Number(MT).toFixed(2)}*.`, 
`🌟 Você foi chamado para trabalhar na mina e encontrou milhares de resíduos! Como recompensa, você acaba de ganhar *R$ ${Number(MT).toFixed(2)}*. 😸`, 
`Você foi chamado para trabalhar na mina e encontrou muitos tesouros perdidos!👷🏼🌟 Como recompensa, você acaba de ganhar *R$ ${Number(MT).toFixed(2)}*.`
]
txtssuys = mineMessage[Math.floor(Math.random() * mineMessage.length)]
}
await sandro.sendMessage(from, {text: txtssuys}, {quoted: info})
} else {
reply(`Por favor, aguarde *${60 - Number(moment.tz('America/Sao_Paulo').format('ss'))}s* para realizar uma nova mineração...`)
}
break;

case 'comprarseguranca':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)
if(!q) return reply("Escolha na loja um segurança de 1-3 para proteger o seu dinheiro e evitar assaltos")
if(!JSON.stringify(roubosrpg).includes(sender)) {
hora3 = moment.tz('America/Sao_Paulo').format('HH')
data3 = moment.tz('America/Sao_Paulo').format('DD')
roubosrpg.push({id: sender, limite: 2, hora: hora3, dia: data3, dinheiro: 0, preso: false, segurança: 20})
fs.writeFileSync("./database/usuarios/SystemRPG/roubosrpg.json", JSON.stringify(roubosrpg))
}
if(Number(args[0]) > 0 && Number(args[0]) <= 3) {
value = Number(args[0]) * 20 + 20
BC = sabrpg.map(i => i.id).indexOf(sender)
AB = roubosrpg.map(i => i.id).indexOf(sender)
if(Number(Number(args[0]) * 600) > sabrpg[BC].money) return reply(`Você não tem dinheiro suficiente para comprar esse segurança...`)
if(roubosrpg[AB].segurança == value) return reply(`Você já possui esse segurança...`)
comp = value > roubosrpg[AB].segurança ? `diminuída em ${value - roubosrpg[AB].segurança}%` : `aumentada em ${value - roubosrpg[AB].segurança}%`
roubosrpg[AB].segurança = value
fs.writeFileSync("./database/usuarios/SystemRPG/roubosrpg.json", JSON.stringify(roubosrpg))
RemoverGold(sender, Number(args[0]) * 600)
reply(`Segurança Lv. ${args[0]} comprado com sucesso 👨🏻‍✈️\nTaxa de drop: ${comp}`)
} else {
reply(`Escolha um número correspondente a um dos seguranças presentes na loja...`)
}
break

case 'treinar': case 'treino':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)
treinamento = ["Cê já treinou lek", "Hmm", "Tá bão", "Chega lek, cê já treinou", "Te acalma desgrama"]
if(JSON.stringify(roubosrpg).includes(sender)) return reply(`${treinamento[Math.floor(Math.random()*treinamento.length)]}`)
hora3 = moment.tz('America/Sao_Paulo').format('HH')
data3 = moment.tz('America/Sao_Paulo').format('DD')
roubosrpg.push({id: sender, limite: 2, hora: hora3, dia: data3, dinheiro: 0, preso: false, segurança: 20})
fs.writeFileSync("./database/usuarios/SystemRPG/roubosrpg.json", JSON.stringify(roubosrpg))
reply("Treinamento efetuado com sucesso... Pronto para assaltar outros usuários")
break

case 'assaltar': case 'furtar':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)
if(!JSON.stringify(roubosrpg).includes(sender)) return reply(`Você precisa treinar primeiro... Use ${prefix}treinar`)
if(!menc_os2) return reply("Marque a pessoa quem você quer assaltar...")
if(sender.includes(menc_os2)) return reply(`Não é possível assaltar você mesmo...`)
if(!JSON.stringify(sabrpg).includes(menc_os2)) return reply(`ID do usuário não encontrado ou inexistente...`)
sandrobot = Math.floor(Math.random()*100)
AB = sabrpg.map(i => i.id).indexOf(sender)
AD = roubosrpg.map(i => i.id).indexOf(sender)
hora3 = moment.tz('America/Sao_Paulo').format('HH')
data3 = moment.tz('America/Sao_Paulo').format('DD')
minuto3 = moment.tz('America/Sao_Paulo').format('mm')
if(roubosrpg[AD].preso == true) return reply("Você está preso, portanto, não é possível roubar...")
if(Number(sabrpg[sabrpg.map(i => i.id).indexOf(menc_os2)].money) < 10) return reply("Esse ser não tem nem onde cair morto, pobre desgramado... Vai assaltar alguém mais rico 🤡")
if(roubosrpg[AD].limite <= 0 && Number(roubosrpg[AD].hora) === Number(hora3) && Number(roubosrpg[AD].dia) === Number(data3)) return reply(`Hmm... Agora não ${sabrpg[AB].nome}, aguarde ${Number(Number(Number(hora3) + 1) * 60) - Number(Number(roubosrpg[AD].hora) * 60 + Number(minuto3))} minutos para fazer o próximo assalto 🥷🏻`)
if(roubosrpg[AD].limite <= 0 && Number(hora3) > Number(roubosrpg[AD].hora) && Number(roubosrpg[AD].dia) === Number(data3)) {
  roubosrpg[AD].limite = 2
  roubosrpg[AD].hora = hora3
  fs.writeFileSync("./database/usuarios/SystemRPG/roubosrpg.json", JSON.stringify(roubosrpg))
}
if(roubosrpg[AD].limite <= 0 && Number(roubosrpg[AD].dia) !== Number(data3)) {
  roubosrpg[AD].limite = 2
  roubosrpg[AD].hora = hora3
  roubosrpg[AD].dia = data3
  fs.writeFileSync("./database/usuarios/SystemRPG/roubosrpg.json", JSON.stringify(roubosrpg))
}
if(roubosrpg[AD].limite > 0 && roubosrpg[AD].preso == false) {
  roubosrpg[AD].limite -= 1
  fs.writeFileSync("./database/usuarios/SystemRPG/roubosrpg.json", JSON.stringify(roubosrpg))
  if(sandrobot > 5) {
    sandrobot2 = Math.floor(Math.random()*100)
    lvx = Number(Math.floor(Math.random()*39)+1)
    totalM = lvx * 100
    totalU = sabrpg[sabrpg.map(i => i.id).indexOf(menc_os2)].money - 1
    ganho = totalM > Number(sabrpg[sabrpg.map(i => i.id).indexOf(menc_os2)].money) ? Math.floor(Math.random()*totalU) + 1 : Math.floor(Math.random()*100) * lvx
    algo = JSON.stringify(roubosrpg).includes(menc_os2) ? roubosrpg[roubosrpg.map(b => b.id).indexOf(menc_os2)].segurança : 20
    if(sandrobot2 > algo) {
      sabrpg[AB].money += ganho
      fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
      sabrpg[sabrpg.map(i => i.id).indexOf(menc_os2)].money -= ganho
      fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
      reply(`Assalto efetuado com sucesso ${sabrpg[AB].nome}, você roubou R$ ${Number(ganho).toFixed(2)} da conta ${sabrpg[sabrpg.map(i => i.id).indexOf(menc_os2)].nome}`)
    } else {
      perda1 = Number(ganho) / 2
      perda2 = perda1 >= sabrpg[AB].money ? sabrpg[AB].money : perda1
      sabrpg[AB].money -= perda2
      fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
      reply(`🚓 Ops, você foi pego pela polícia e pagou ${perda1 >= sabrpg[AB].money ? `todo o seu dinheiro` : `R$ ${Number(perda2).toFixed(2)}`} para sair da cadeia... Kkkk sinto muito 😔🤙🏽`)
    }
  } else {
    sandrobot3 = Math.floor(Math.random()*100)
    if(sandrobot3 > 10) {
      roubosrpg[AD].dinheiro += sabrpg[AB].money
      roubosrpg[AD].preso = true
      fs.writeFileSync("./database/usuarios/SystemRPG/roubosrpg.json", JSON.stringify(roubosrpg))
      sabrpg[AB].money = 0
      fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
      reply(`Putz, cê deu muito azar... Seu caso foi passado para o governo federal, e toda a sua grana foi apreendida 😮‍💨\nFelizmente, cê pode pegar o dinheiro de volta amanhã usando ${prefix}retirar`)
    } else {
      if(JSON.stringify(cavalosrpg).includes(sender)) {
        R1 = cavalosrpg.map(i => i.id).indexOf(sender)
        cavalosrpg.splice(R1, 1)
        fs.writeFileSync("./database/usuarios/SystemRPG/cavalosrpg.json", JSON.stringify(cavalosrpg))
      }
      if(JSON.stringify(galosrpg).includes(sender)) {
        R2 = galosrpg.map(i => i.id).indexOf(sender)
        galosrpg.splice(R2, 1)
        fs.writeFileSync("./database/usuarios/SystemRPG/galosrpg.json", JSON.stringify(galosrpg))
      }
      roubosrpg[AD].preso = false
      fs.writeFileSync("./database/usuarios/SystemRPG/roubosrpg.json", JSON.stringify(roubosrpg))
      sabrpg[AB].money = 0
      fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
      reply(`Vix mlk, deu ruim demais... Seu assalto virou caso da INTERPOL, e ela confiscou todos os seu bens junto com seu dinheiro 👨🏻‍✈️`)
    }
  }
}
break



case 'revogar': case 'reivindicar': case 'retirar':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)
if(!JSON.stringify(roubosrpg).includes(sender)) return reply(`Você não foi preso lek, aquieta o facho 😂`)
AB = sabrpg.map(i => i.id).indexOf(sender)
AD = roubosrpg.map(i => i.id).indexOf(sender)
data3 = moment.tz('America/Sao_Paulo').format('DD')
if(roubosrpg[AD].dinheiro <= 0) return reply(`Não há dinheiro apreendido...`)
if(Number(roubosrpg[AD].dia) === Number(data3)) return reply(`Você só pode retirar o dinheiro apreendido amanhã...`)
reply(`Pronto, aqui estão os R$ ${Number(roubosrpg[AD].dinheiro).toFixed(2)} que foram apreendidos pela polícia... Vê se anda na linha mlk 👨🏻‍✈️`)
sabrpg[AB].money += roubosrpg[AD].dinheiro
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
roubosrpg[AD].preso = false
roubosrpg[AD].dinheiro = 0
fs.writeFileSync("./database/usuarios/SystemRPG/roubosrpg.json", JSON.stringify(roubosrpg))
break

case 'comprarestabulo':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)
AB = sabrpg.map(i => i.id).indexOf(sender)
if(JSON.stringify(cavalosrpg).includes(sender)) return reply(`Você já tem um estábulo em seu nome ${sabrpg[AB].nome}... 🐎`)
if(Number(sabrpg[AB].money) < 500) return reply(`Você não saldo suficiente para efetuar essa compra...`)
cavH = moment.tz('America/Sao_Paulo').format('HH')
cavD = moment.tz('America/Sao_Paulo').format('DD')
cavM = moment.tz('America/Sao_Paulo').format('MM')
cavalosrpg.push({id: sender,
level: 1,
quant_cavalos: 0,
setcav: `nenhum`,
countVc: 0,
capitalVc: 0,
countDc: 0,
capitalDc: 0,
corridaL: 10,
corridaH: cavH,
corridaD: cavD,
corridaM: cavM,
cavalos: []
})
fs.writeFileSync("./database/usuarios/SystemRPG/cavalosrpg.json", JSON.stringify(cavalosrpg))
MD = sabrpg[AB].money
sabrpg[AB].money = Number(MD) - 500
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`Parabéns pela compra do estábulo... Agora você pode comprar cavalos para correr com eles 🐴`)
break

case 'venderestabulo':
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)
if(!JSON.stringify(cavalosrpg).includes(sender)) return reply(`Você precisa comprar um estábulo primeiro... Consulte a ${prefix}lojadecavalos`)
AB = sabrpg.map(i => i.id).indexOf(sender)
AC = cavalosrpg.map(b => b.id).indexOf(sender)
TT1 = Number(cavalosrpg[AC].cavalos.length) * 500
TT2 = Number(cavalosrpg[AC].level) * 200
TT3 = Number(cavalosrpg[AC].countVc) * 100
TT4 = Number(TT1) + Number(TT2) + Number(TT3)
cavalosrpg.splice(AC, 1)
fs.writeFileSync("./database/usuarios/SystemRPG/cavalosrpg.json", JSON.stringify(cavalosrpg))
MD = sabrpg[AB].money
sabrpg[AB].money = Number(MD) + Number(TT4)
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`${tempo} ${sabrpg[AB].nome}, seu estábulo ficou avaliado em R$ ${Number(TT4).toFixed(2)}
📈 Parabéns pela venda...`)
break

case 'avaliarestabulo':
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)
if(!JSON.stringify(cavalosrpg).includes(sender)) return reply(`Você precisa comprar um estábulo primeiro... Consulte a ${prefix}lojadecavalos`)
AC = cavalosrpg.map(b => b.id).indexOf(sender)
TT1 = Number(cavalosrpg[AC].cavalos.length) * 500
TT2 = Number(cavalosrpg[AC].level) * 200
TT3 = Number(cavalosrpg[AC].countVc) * 100
TT4 = Number(TT1) + Number(TT2) + Number(TT3)
txt = `ㅤㅤㅤ〘 *AVALIANDO* 〙
🐴 *Preço Por Cavalos:* R$ ${Number(TT1).toFixed(2)}
📈 *Preço Por Upgrade:* R$ ${Number(TT2).toFixed(2)}
🏆 *Preço Por Vitórias:* R$ ${Number(TT3).toFixed(2)}

🤑 *Total:* R$ ${Number(TT4).toFixed(2)}

-> Use ${prefix}venderestabulo caso queira se desfazer do mesmo.`
reply(txt)
break

case 'estabulo':
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)
if(!JSON.stringify(cavalosrpg).includes(sender)) return reply(`Você precisa comprar um estábulo primeiro... Consulte a ${prefix}lojadecavalos`)
AB = sabrpg.map(i => i.id).indexOf(sender)
AC = cavalosrpg.map(a => a.id).indexOf(sender)
AD = cavalosrpg[AC].cavalos.map(b => b.nomedocavalo).indexOf(cavalosrpg[AC].setcav)
if(Number(cavalosrpg[AC].cavalos.length) <= 0) {
countcav = `\n『 Você não possui cavalos... 』\n`
} else {
countcav = `\n🐎 *Cavalos ↴*`
for(c = 0; c < cavalosrpg[AC].cavalos.length; c++) {
if(cavalosrpg[AC].cavalos[c].sela == true){
selasasah = `✅`
} else { selasasah = `❌` }
if(cavalosrpg[AC].cavalos[c].dor == true){
dorsasah = `✅`
} else { dorsasah = `❌` }
if(cavalosrpg[AC].cavalos[c].fratura == true){
fratsasah = `✅`
} else { fratsasah = `❌` }
TTCV = Number(cavalosrpg[AC].cavalos[c].viccav)/Number(Number(cavalosrpg[AC].cavalos[c].viccav)+Number(cavalosrpg[AC].cavalos[c].dercav))*100
if(Number(TTCV) > 0) {
PVCV = TTCV
} else {
PVCV = 0
}
countcav += `\n» ${Number(c)+1} « Nome Do Cavalo: *${cavalosrpg[AC].cavalos[c].nomedocavalo}*\n• Velocidade: *${Number(cavalosrpg[AC].cavalos[c].tipo)+1}x*\n• Sela: *${selasasah}*\n• Doente *${dorsasah}*\n• Fraturado: *${fratsasah}*\n• Vitórias: *${cavalosrpg[AC].cavalos[c].viccav}*\n• Percentual de Ganhos: *${Number(PVCV).toFixed(1)}%*\n• Apostas: *R$ ${Number(cavalosrpg[AC].cavalos[c].contdin).toFixed(2)}*\n• Ganhos: *R$ ${Number(cavalosrpg[AC].cavalos[c].lucdin).toFixed(2)}*\n`
}
}
txt = `👤 Nome: *${sabrpg[AB].nome}*\n💯 Level do Estábulo: *${cavalosrpg[AC].level}*\n📐 Tamanho Do Estábulo: ${Number(cavalosrpg[AC].level)*5} m²*\n🧮 Quantidade De Cavalos: *${cavalosrpg[AC].cavalos.length}*\n🔔 Cavalo Selecionado: *${cavalosrpg[AC].setcav}*\n${countcav}`
sandro.sendMessage(from, {image: {url: `https://telegra.ph/file/cc1ea31504adec9ce4fa0.jpg`}, caption: txt}, {quoted: info})
break

case 'setcavalo':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)
if(!JSON.stringify(cavalosrpg).includes(sender)) return reply(`Você precisa comprar um cavalo primeiro... Consulte a ${prefix}lojadecavalos`)
AC = cavalosrpg.map(a => a.id).indexOf(sender)
if(!q) return reply(`Diga o nome de um dos cavalos presentes no seu estábulo...
Ex: ${prefix+command} Patolino`)
if(!JSON.stringify(cavalosrpg[AC].cavalos).includes(q.toLowerCase())) return reply(`Este cavalo não consta eu seus registros... Use o comando ${prefix}estabulo, e verifique quais cavalos você tem 🐴`)
cavalosrpg[AC].setcav = q.toLowerCase()
fs.writeFileSync("./database/usuarios/SystemRPG/cavalosrpg.json", JSON.stringify(cavalosrpg))
reply(`Cavalo definido com sucesso...`)
break

case 'upcavalo':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)
if(!JSON.stringify(cavalosrpg).includes(sender)) return reply(`Você precisa comprar um cavalo primeiro... Consulte a ${prefix}lojadecavalos`)
AB = sabrpg.map(i => i.id).indexOf(sender)
AC = cavalosrpg.map(a => a.id).indexOf(sender)
if(Number(cavalosrpg[AC].level) < 4) {
AT = Number(cavalosrpg[AC].level) * 200
if(Number(sabrpg[AB].money) < Number(AT)) return reply(`Você não saldo suficiente para upar seu estábulo...`)
LC = cavalosrpg[AC].level
cavalosrpg[AC].level = Number(LC) + 1
fs.writeFileSync("./database/usuarios/SystemRPG/cavalosrpg.json", JSON.stringify(cavalosrpg))
MC = sabrpg[AB].money
sabrpg[AB].money = Number(MC) - Number(AT)
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(` Agrademos a confiança na *Black Construction...* R$ ${Number(AT).toFixed(2)} foram investidos, e seu estábulo está no level ${cavalosrpg[AC].level} 🐴`)
} else { reply(`Seu estábulo já alcançou o tamanho máximo...`) }
break

case 'comprarcavalo':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)
if(!JSON.stringify(cavalosrpg).includes(sender)) return reply(`Você precisa comprar um estábulo primeiro... Consulte a ${prefix}lojadecavalos`)
var [cavnmr, cavnome] = q.split(`/`)
if(!cavnmr) return reply(`Escolha um cavalo...`)
if(!cavnome) return reply(`Agora dê um nome para seu cavalo... Ex: ${prefix+command} ${q}/Michael`)
if(Number(cavnome.length) > 20) return reply(`Este nome é muito grande...`)
if(Number(cavnmr) === 1 || Number(cavnmr) === 2 || Number(cavnmr) === 3 || Number(cavnmr) === 4) {
AB = sabrpg.map(i => i.id).indexOf(sender)
AC = cavalosrpg.map(a => a.id).indexOf(sender)
MCV1 = Number(cavnmr) - 1
MCV2 = Number(MCV1) * 500
MCV3 = Number(MCV2) + 500
if(Number(sabrpg[AB].money) < Number(MCV3)) return reply(`Você não saldo suficiente para comprar este cavalo...`)
if(JSON.stringify(cavalosrpg[AC].cavalos).includes(cavnome)) return reply(`Você já tem um cavalo com esse nome... Pfvr, escolha outro nome 🐴`)
if(Number(cavalosrpg[AC].cavalos.length) == Number(cavalosrpg[AC].level)) return reply(`Você atingiu o número máximo de cavalos no estábulo... Caso queira aumentar o tamanho do estábulo, use ${prefix}upcavalo`)
cavalosrpg[AC].cavalos.push({nomedocavalo: cavnome.toLowerCase(),
tipo: Number(cavnmr)-1,
sela: false,
dor: false,
fratura: false,
viccav: 0,
dercav: 0,
contdin: 0,
lucdin: 0
})
fs.writeFileSync("./database/usuarios/SystemRPG/cavalosrpg.json", JSON.stringify(cavalosrpg))
sabrpg[AB].money -= Number(MCV3)
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`Parabéns pela compra do cavalo... Espero que faça bom proveito com ele 🐴`)
} else {
reply(`Esse cavalo não está disponível para compra...`)
}
break

case 'vendercavalo':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)
if(!JSON.stringify(cavalosrpg).includes(sender)) return reply(`Você precisa comprar um cavalo primeiro... Consulte a ${prefix}lojadecavalos`)
AB = sabrpg.map(i => i.id).indexOf(sender)
AC = cavalosrpg.map(a => a.id).indexOf(sender)
AD = cavalosrpg[AC].cavalos.map(b => b.nomedocavalo).indexOf(cavalosrpg[AC].setcav)
if(Number(cavalosrpg[AC].cavalos.length) <= 0) return reply(`Você não possui cavalos... Acho bom comprar um 🐴`)
if(!JSON.stringify(cavalosrpg[AC].cavalos).includes(cavalosrpg[AC].setcav)) return reply(`Você precisa definir o cavalo que irá vender... Use o comando ${prefix}setcavalo`)
if(cavalosrpg[AC].cavalos[AD].sela == true) {
HCS = 100
} else {
HCS = 0
}
if(cavalosrpg[AC].cavalos[AD].dor == true) {
HCD = 50
} else {
HCD = 0
}
if(cavalosrpg[AC].cavalos[AD].fratura == true) {
HCF = 125
} else {
HCF = 0
}
HCV = Number(Number(Number(cavalosrpg[AC].cavalos[AD].tipo)+1)*250) + Number(HCS) - Number(HCD) - Number(HCF) + Number(cavalosrpg[AC].cavalos[AD].viccav)
MB = sabrpg[AB].money
sabrpg[AB].money = Number(MB) + Number(HCV)
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
cavalosrpg[AC].cavalos.splice(AD, 1)
fs.writeFileSync("./database/usuarios/SystemRPG/cavalosrpg.json", JSON.stringify(cavalosrpg))
reply(`Seu cavalo ficou avaliado em R$ ${Number(HCV).toFixed(2)} 🐴📈 - Parabéns pela venda...`)
break

case 'comprarsela':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isSabCityOFF) return reply(`É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}Modorpg*.`)
if(!JSON.stringify(sabrpg).includes(sender)) return reply(`${tempo} usuário(a), novo(a) por aqui? Use *${prefix}Rgcity* para se registrar na City.`)
if(!JSON.stringify(cavalosrpg).includes(sender)) return reply(`Você precisa comprar um cavalo primeiro... Consulte a ${prefix}lojadecavalos`)
AB = sabrpg.map(i => i.id).indexOf(sender)
AC = cavalosrpg.map(a => a.id).indexOf(sender)
AD = cavalosrpg[AC].cavalos.map(b => b.nomedocavalo).indexOf(cavalosrpg[AC].setcav)
if(Number(cavalosrpg[AC].cavalos.length) <= 0) return reply(`Você não possui cavalos... Acho bom comprar um cavalo!🐴`)
if(!JSON.stringify(cavalosrpg[AC].cavalos).includes(cavalosrpg[AC].setcav)) return reply(`Você precisa definir o cavalo que irá correr... Use o comando ${prefix}setcavalo`)
if(cavalosrpg[AC].cavalos[AD].sela == true) return reply(`Você já possui uma sela neste cavalo...`)
if(Number(sabrpg[AB].money) < 200) return reply(`Você não tem saldo suficiente para efetuar essa compra...`)
cavalosrpg[AC].cavalos[AD].sela = true
fs.writeFileSync("./database/usuarios/SystemRPG/cavalosrpg.json", JSON.stringify(cavalosrpg))
MC = sabrpg[AB].money
sabrpg[AB].money = Number(MC) - 200
fs.writeFileSync("./database/usuarios/SystemRPG/sabrpg.json", JSON.stringify(sabrpg))
reply(`Uma sela foi comprada para o seu alazão com sucesso... 🐴`)
break


      




case 'sanime': case 'animetv':
if(!q) return reply("Você não digitou nenhuma palavra ao lado do comando.")
try {
RST = await fetchJson(`https://yurimodz-apis.xyz/api/animetv_search?query=${q}&apikey=${SANDRO_MD_BOT}`)
ABC = `${RST.resultado.map(v => `• Título: *${v.title}* | *${v.type}*\n• Foto: *${v.thumb}*\n• Link: *${v.url}*`).join('\n–\n')}`
reply(ABC)
} catch(e) {
return reply(mess.error())
}
break;

case 'frases': case 'pensador':
if(!q) return reply(mess.noArgsSearch()+`Exemplo: *${prefix+command} Amor`);
AB = await fetchJson(`https://yurimodz-apis.xyz/search/pensador?query=${q}&apikey=${SANDRO_MD_BOT}`)
ABC = ""
ABC += `${AB.resultado.map(v => `“${v.frase}”`).join('\n–\n')}`
reply(ABC).catch(e => {
return reply(mess.error())
})
break;











case 'encurtalink':
case 'tinyurl':
  try {
    if (!args[0]) return reply("❌ Por favor, envie um link para encurtar.\n\nExemplo: /encurtar https://exemplo.com");

    const urlOriginal = args[0];

    const res = await fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(urlOriginal)}`);
    const urlEncurtado = await res.text();

    if (!urlEncurtado.startsWith("http")) {
      return reply("❌ Erro ao encurtar o link. Verifique se o link é válido.");
    }

    reply(`✅ *Link encurtado com sucesso!*\n\n🔗 ${urlEncurtado}`);

  } catch (e) {
    console.error("Erro no comando 'encurtar':", e);
    reply("❌ Ocorreu um erro ao tentar encurtar o link.");
  }
  break;




 


case 'bitcoin':

  try {
    const res = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=brl,usd');
    const data = await res.json();

    const precoBRL = data.bitcoin.brl.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    const precoUSD = data.bitcoin.usd.toLocaleString('en-US', { style: 'currency', currency: 'USD' });

    const mensagem = `💰 *Cotação Atual do Bitcoin (BTC)*\n\n` +
                     `🇧🇷 Real (BRL): *${precoBRL}*\n` +
                     `🇺🇸 Dólar (USD): *${precoUSD}*\n\n` +
                     `_Fonte: CoinGecko_`;

    reply(mensagem);
  } catch (e) {
    console.error("Erro ao buscar valor do Bitcoin:", e);
    reply("❌ Ocorreu um erro ao buscar o valor do Bitcoin.");
  }
  break;

case 'jogo': 
 
case 'game': 
case 'games': 
// @Darkzy7
if (!q) return reply(`Você esqueceu de colocar o nome do jogo após o comando.`)
const gamesearch = await axios.get(`https://api.rawg.io/api/games?key=34e936a681924c8cba8711d2dacb999e&search=${q}&page_size=1`)
let searchapi = gamesearch.data.results[0]
if (gamesearch.data.results.length == 0) return await reply("Sem resultados para sua pesquisa, tente novamente mais tarde...");
titulo = searchapi.name
let genero = '';
for (let i = 0; i < searchapi.genres.length; i++) {
genero += `${searchapi.genres[i].name}, `;}
genero += `${searchapi.genres[searchapi.genres.length - 1].name}`;
let plataforma = '';
for (let i = 0; i < searchapi.platforms.length; i++) {
plataforma += `${searchapi.platforms[i].platform.name}, `;}
plataforma += `${searchapi.platforms[searchapi.platforms.length - 1].platform.name}`;
let compreaqui = '';
if (searchapi.stores !== null) {
for (let i = 0; i < searchapi.stores.length; i++) {
compreaqui += `${searchapi.stores[i].store.name}, `;}
compreaqui += `${searchapi.stores[searchapi.stores.length - 1].store.name}`;
let tempodejogatina = searchapi.playtime
let datadelancamento = searchapi.released
let avaliacaodojogo = searchapi.rating
let rating_top = searchapi.rating_top
let esrb = gamesearch.data.results[0].esrb_rating === null ? '' : gamesearch.data.results[0].esrb_rating.name;
sandro.sendMessage(from, {image: await getBuffer(searchapi.background_image), caption: mess.gamesResult(titulo, genero, plataforma, compreaqui, tempodejogatina, datadelancamento, avaliacaodojogo, rating_top, esrb)}, {quoted: info})
}
break;






       
case 'reagir':
const reactionMessage = {
react: {
text: "🥰",
key: info.key
}
}
sendMsg = await sandro.sendMessage(from, reactionMessage)
break

case "ytsearch":
try {
if(!q) return reply(`Digite o nome de algum vídeo ou música que deseja encontrar..`);
AB = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/pesquisa_ytb?nome=${q}&apikey=${API_SANDRO_MD}`)
ABC = `${"-\t".repeat(13)}\n\n`
for (var i of AB) {
ABC += `Titulo: ${i.titulo}\nUrl: ${i.url}\npublicado`;
ABC += `${"-\t".repeat(13)}\n\n`
}
reply(ABC);
} catch (e) {
return reply(`Erro....`)
}
break

/*case 'googlesearch':
case 'gimg': {
  if (!q) return reply(`❌ Digite o que deseja pesquisar.\n\nExemplo:\n/googlesrc carro`);

  try {
    let api = `${zerosite}/api/googlesrc?query=${encodeURIComponent(q)}&apikey=${API_KEY_ZEROTWO}`;

    let res = await fetch(api);
    let json = await res.json();

    if (!json || !json.url) {
      return reply('❌ Não encontrei resultado.');
    }

    let texto = `*Pesquisa Google Imagens*\n\n` +
                `*Busca:* ${json.search}\n` +
                `*Link:* ${json.url}`;

    await sandro.sendMessage(from, { text: texto }, { quoted: info });

  } catch (e) {
    console.log(e);
    reply('❌ Erro ao buscar.');
  }
}
break;*/

case 'ytsearch2': {
try {

if (!q) {
return reply(`❌ Informe o nome da música ou vídeo.

Exemplo:
${prefix}yts Sandro bot`);
}

reagir(from, "🔎");

const { data } = await axios.get(
`https://docs.prexzyapis.com/search/youtube?q=${encodeURIComponent(q)}`
);

if (!data.status || !data.data || data.data.length < 1) {
return reply("❌ Nenhum resultado encontrado.");
}

let txt = `*RESULTADOS PARA:*\n${q}`;

const resultados = data.data.slice(0, 4);

for (let i = 0; i < resultados.length; i++) {
const v = resultados[i];

txt += `*${i + 1}.* ${v.title}

Canal: ${v.channel}
Duração: ${v.duration}
${v.link}

`;
}

await sandro.sendMessage(from, {
image: { url: resultados[0].imageUrl },
caption: txt
}, { quoted: info });

} catch (err) {
console.log(err);
reply("❌ Erro ao pesquisar no YouTube.");
}

}
break;

case 'pesquisa_yt': case 'ytsearch':




case 'ytmp4': 
if(!q) return reply(`Cada o link do video para eu baixar?\n\nExemplo: *${prefix+command} https://www.youtube.com/watch?v=hmBAvAugQqA&t=160s*`)
reply(`❤️ *Buscando por ${q} Aguarde...* ❤️`);
sandro.sendMessage(from, {video: {url: (`https://api.bronxyshost.com.br/api-bronxys/play_video?nome_url=${q}&apikey=${API_SANDRO_MD}`)}, mimetype: "video/mp4"}, {quoted: info}).catch(e => {
reply("Seja mais específico, não deu pra encontrar com apenas isto...");
})
break



/*case 'play99':
reply(`erro mn`)
if(!q) return reply(mess.syntaxDownloadMusic());
try {
data = await fetchJson(`http://br1.bronxyshost.com:4360/youtube/play?query=${q}&apikey=${SANDRO_MD}`);
sandro.sendInteractiveIMG('./database/data/media/images/play-thumb.jpg', from, mess.playResult(data), "© sandro Supremacy", {participant: sender, quotedMessage: info.message}, {buttons: [{name: "quick_reply", buttonParamsJson: JSON.stringify({display_text: "「 ❤️ 」𝐃𝐎𝐂𝐔𝐌𝐄𝐍𝐓𝐎「 ❤️ 」", id: `${prefix}ytdoc ${data.resultado[0].url}`})}, {name: "quick_reply", buttonParamsJson: JSON.stringify({display_text: "「 ❤️ 」𝐀𝐔𝐃𝐈𝐎「 ❤️ 」", id: `${prefix}ytmp3 ${data.resultado[0].url}`})}, {name: "quick_reply", buttonParamsJson: JSON.stringify({display_text: "「 ❤️ 」𝐕𝐈𝐃𝐄𝐎「 ❤️ 」", id: `${prefix}ytmp4 ${data.resultado[0].url}`})}]});
} catch(error) {
reply("Seja mais específico, não deu pra encontrar com apenas isto...");
}
break*/



case 'play4': {
  try {
  reply(`❤️ *Buscando por ${q} Aguarde...* ❤️`)
    if (!q.trim()) {
      return reply(`- Exemplo: ${prefix}play4 nome da música`);
    }

    // Busca informações da música na API
    const ABC = await fetchJson(`${zerosite}/api/ytsrc?q=${encodeURIComponent(q)}&apikey=${API_KEY_ZEROTWO}`)
    const data = ABC.resultado[0];

    if (!data) {
      return reply("Música não encontrada.");
    }

    const titulo = data.title || "Não encontrado";
    const tempo = data.timestamp || "indefinido";
    const canal = data.author?.name || "indefinido";
    const postado = data.ago || "indefinido";
    const descricao = data.description || "indefinida";

    const bla = `> ╔♡∞*♡♡∞:｡.｡❤️｡.｡:∞♡*♡:∞♡╗
> ╠═⪩⟨❤️𝐒𝐄𝐉𝐀-𝐁𝐄𝐌-𝐕𝐈𝐍𝐃𝐎(𝐀)⟩
> ╚♡∞*♡♡∞:｡.｡❤️｡.｡:∞♡*♡:∞♡╝

> Ola: ${pushname}
> ╭──〔 *${NomeDoBot}* 〕──╮
> Titulo: ${titulo}
> Tempo: ${tempo}
> Canal: ${canal}
> Postado: ${postado}
> Descrição: ${descricao}
> Bot: ${NomeDoBot}
> ╰───〘 @${sender.split("@")[0]} 〙

> ılı.lıllılı.ıllı..ılı.lıllılı.ıllı`;

    // Envia a thumbnail da música
    await reply(bla);

    // Envia o áudio
    // Mídia desativada: play4 retorna apenas texto.

  } catch (e) {
    console.error("Erro no play4:", e);
    return reply(`Erro ao executar o comando. Se persistir, reporte com ${prefix}bug play4`);
  }
}
break;


case 'pm': {
  try {
  reply(`❤️ *Buscando por ${q} Aguarde...* ❤️`)
    reagir(from, "🎵")

    if (!q.trim()) {
      return reply(`${prefix + command} link ou nome`);
    }

    const url = `${zerosite}/api/ytsrc?q=${encodeURIComponent(q)}&apikey=${API_KEY_ZEROTWO}`;
    const ABC = await fetchJson(url);

    if (!ABC.resultado || !Array.isArray(ABC.resultado) || ABC.resultado.length === 0) {
      return reply("Nenhum resultado encontrado.");
    }

    const maxResults = Math.min(5, ABC.resultado.length);

    let bla = `
༒W̷E̷L̷C̷O̷M̷E̷༒     ♬
⏤͟͟͞͞ ꦿ@${sender.split('@')[0]}      ♪  
`.trim();

    for (let i = 0; i < maxResults; i++) {
      const music = ABC.resultado[i];
      bla += `

🎙️⃤ Título: ${music.title || "indefinido"}
⏰⃤ Tempo: ${music.timestamp || "indefinido"}
📹⃤ Postado: ${music.ago || "indefinido"}
`;
    }

    bla += `

ılı.lıllılı.ıllı..ılı.lıllılı.ıllı`;

    await sandro.sendMessage(from, {
      image: { url: ABC.resultado[0].thumbnail },
      caption: bla,
      mentions: [sender]
    }, { quoted: info });

    // Envia áudios direto da nova API
    for (let m = 0; m < maxResults; m++) {
      const musicUrl = encodeURIComponent(ABC.resultado[m].url);
      const audioApiUrl = `${zerosite}/api/dl/ytaudio2?url=${musicUrl}&apikey=${API_KEY_ZEROTWO}`;

      await sandro.sendMessage(from, {
        audio: { url: audioApiUrl },
        mimetype: "audio/mpeg",
        fileName: `${ABC.resultado[m].title}.mp3`
      }, { quoted: info });
    }

  } catch (e) {
    console.error("Erro no comando playmix:", e);
    return reply(downoff);
  }
}
break;


case 'play': {
try {
const { prepareWAMessageMedia } = require('@systemzero/baileys');
const nescessarioPath = './config/nescessario.json';
const definitions = JSON.parse(fs.readFileSync(nescessarioPath, 'utf-8'));

// ✅ Carrega configuração dos BOTÕES
const botoesPath = './config/botoes.json';
let botoesAtivos = false; // Botões removidos; mantém apenas o envio normal
if (fs.existsSync(botoesPath)) {
  const botoesCfg = JSON.parse(fs.readFileSync(botoesPath, 'utf-8'));
  botoesAtivos = botoesCfg.status !== 0; // Se 0 = desativado
}

// ✅ ADICIONADO: Carrega configuração do canal e prepara menções
const channel = JSON.parse(fs.readFileSync('./assets/channel.json'));
const mentions = [sender].filter(Boolean);

if (!q.trim()) {
return reply(`❌ Informe o nome ou link da música.\nExemplo: ${prefix}play nome da música`);
}

reply(`❤️ *Buscando por ${q} Aguarde...*❤️`);

let data;
try {
const response = await axios({
method: 'get',
url: 'https://api.bronxyshost.com.br/api-bronxys/pesquisa_ytb',
params: {
nome: q,
apikey: API_SANDRO_MD
},
timeout: 30000,
responseType: 'json',
decompress: true,
headers: {
'Accept-Encoding': 'gzip, deflate',
'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
},
validateStatus: (status) => status < 500
});
data = response.data;
} catch (apiErr) {
console.log('Erro na API bronxys (tentativa 1):', apiErr.message);
try {
data = await fetchJson(
`https://api.bronxyshost.com.br/api-bronxys/pesquisa_ytb?nome=${encodeURIComponent(q)}&apikey=${API_SANDRO_MD}`
);
} catch (fallbackErr) {
console.log('Erro na API bronxys (tentativa 2):', fallbackErr.message);
return reply(
`❌ *Erro ao buscar a música.*\n\nA API de pesquisa está temporariamente indisponível.\nTente novamente mais tarde ou use: *${prefix}play4 ${q}*`
);
}
}

if (!data || !Array.isArray(data) || data.length === 0) {
return reply(`❌ Nenhum resultado encontrado para: *${q}*`);
}

if (data[0]?.tempo?.length >= 7)
return reply("Desculpe, este vídeo ou áudio é muito grande, peça outra música abaixo de uma hora.");

let ppuser;
try {
ppuser = await sandro.profilePictureUrl(sender, 'image');
} catch {
ppuser = 'https://i.imgur.com/ZdpPsdd.jpeg';
}

const musicard =
`${zerosite}/api/musicard?nome=${encodeURIComponent(data[0]?.titulo || q)}` +
`&canal=${encodeURIComponent('@' + sender.split('@')[0])}` +
`&foto=${encodeURIComponent(ppuser)}` +
`&duracao=${encodeURIComponent(data[0]?.tempo || '0:00')}` +
`&apikey=${API_KEY_ZEROTWO}`;

let imagemEnviar;
try {
await axios.get(musicard, { responseType: 'arraybuffer', timeout: 10000 });
imagemEnviar = musicard;
} catch (err) {
console.log('Musicard offline:', err.message);
imagemEnviar = data[0]?.thumb || fotobot;
}

// Mensagem motivacional de futebol
const mensagensMotivacionais = [
  "Nunca desista dos seus sonhos. Grandes conquistas começam com pequenos passos.",
  "A persistência transforma dificuldades em vitórias.",
  "Cada novo dia é uma oportunidade para recomeçar.",
  "Acredite em você, mesmo quando ninguém mais acreditar.",
  "O sucesso é a soma de pequenos esforços repetidos todos os dias.",
  "Você é mais forte do que imagina.",
  "Não tenha medo de começar de novo.",
  "Toda dificuldade traz um aprendizado.",
  "Quem planta dedicação colhe resultados.",
  "O impossível só existe até alguém provar o contrário.",
  "A disciplina leva você a lugares onde a motivação não consegue.",
  "Não compare sua caminhada com a dos outros.",
  "A vitória pertence a quem não desiste.",
  "Faça hoje o que seu futuro agradecerá.",
  "O medo passa, o arrependimento pode durar para sempre.",
  "Seja a sua melhor versão todos os dias.",
  "Os obstáculos existem para testar sua determinação.",
  "O segredo é continuar, mesmo sem vontade.",
  "Você não precisa ser perfeito, apenas constante.",
  "Grandes mudanças começam com pequenas atitudes.",
  "Nunca é tarde para conquistar seus objetivos.",
  "A força está em continuar, mesmo cansado.",
  "O foco vence o talento quando o talento não se esforça.",
  "Sua única competição é quem você foi ontem.",
  "Quem acredita, conquista.",
  "Erros fazem parte do caminho para o sucesso.",
  "Coragem é seguir em frente mesmo com medo.",
  "A esperança é a última coisa que deve ser perdida.",
  "Cada esforço vale a pena.",
  "Não espere pela oportunidade, crie uma.",
  "Sua determinação define seus resultados.",
  "O sucesso chega para quem trabalha em silêncio.",
  "Sonhe grande e trabalhe ainda mais.",
  "A felicidade está na jornada, não apenas na chegada.",
  "Nunca pare de aprender.",
  "Transforme seus sonhos em metas.",
  "Você nasceu para vencer.",
  "A confiança é o primeiro passo para a conquista.",
  "Tudo é difícil antes de se tornar fácil.",
  "Levante uma vez a mais do que você cair.",
  "Cada desafio vencido fortalece sua história.",
  "Não deixe que um dia ruim estrague seus sonhos.",
  "Acredite no processo.",
  "Sua dedicação será recompensada.",
  "O esforço de hoje é o sucesso de amanhã.",
  "Mantenha a cabeça erguida e siga em frente.",
  "A mudança começa com uma decisão.",
  "Você consegue mais do que imagina.",
  "Nunca subestime o poder da persistência.",
  "Continue. O melhor ainda está por vir."
];
    const mensagemMotivacional = mensagensMotivacionais[Math.floor(Math.random() * mensagensMotivacionais.length)];

const N_E = "Não encontrado.";
const textoInfo = `> ╔♡∞♡♡∞:｡.｡❤️｡.｡:∞♡♡:∞♡╗
> ╠═⪩⟨❤️𝐒𝐄𝐉𝐀-𝐁𝐄𝐌-𝐕𝐈𝐍𝐃𝐎(𝐀)⟩
> ╚♡∞♡♡∞:｡.｡❤️｡.｡:∞♡♡:∞♡╝

> Olá: ${pushname}
> ╭──〔 ${NomeDoBot} 〕──╮
> Título: ${data[0]?.titulo || N_E}
> Tempo: ${data[0]?.tempo || N_E}
> Postado: ${data[0]?.postado || N_E}
> Descrição: ${data[0]?.desc || N_E}
> Dono: ${NickDono}
> ╰───〘 @${sender.split("@")[0]} 〙

> Motivação
> ${mensagemMotivacional}

> © ${NomeDoBot}

> ılı.lıllılı.ıllı..ılı.lıllılı.ıllı`;

// ✅ ADICIONADO: Monta contexto de encaminhamento + canal oficial
let contextInfo = {
    forwardingScore: 100000,
    isForwarded: true,
    mentionedJid: mentions,
    ...(channel.ativo && {
        forwardedNewsletterMessageInfo: {
            newsletterJid: "120363430563134321@newsletter",
            newsletterName: "PAULOZINXZ_BOT"
        }
    })
};

if (channel.ativo) {
}

// ✅ SE BOTÕES ESTÃO ATIVOS → ENVIA COM BOTÕES
if (botoesAtivos) {
const media = await prepareWAMessageMedia(
{ image: { url: imagemEnviar } },
{ upload: sandro.waUploadToServer }
);

await sandro.relayMessage(from, {
interactiveMessage: {
header: {
hasMediaAttachment: true,
imageMessage: media.imageMessage
},
body: { text: textoInfo },
footer: { text: `Escolha como deseja receber:\n© ${NomeDoBot}` },
nativeFlowMessage: {
buttons: [
{
name: "quick_reply",
buttonParamsJson: JSON.stringify({
display_text: "「 ❤️ 」𝐀𝐔𝐃𝐈𝐎「 ❤️ 」",
id: `${prefix}playaudiob ${q}`
})
},
{
name: "quick_reply",
buttonParamsJson: JSON.stringify({
display_text: "「 ❤️ 」𝐕𝐈𝐃𝐄𝐎「 ❤️ 」",
id: `${prefix}playvideob ${q}`
})
},
{
name: "quick_reply",
buttonParamsJson: JSON.stringify({
display_text: "「 ❤️ 」𝐃𝐎𝐂𝐔𝐌𝐄𝐍𝐓𝐎「 ❤️ 」",
id: `${prefix}playdocb ${q}`
})
},
{
name: "quick_reply",
buttonParamsJson: JSON.stringify({
display_text: "「 ❤️ 」𝐂𝐑𝐈𝐀𝐃𝐎𝐑「 ❤️ 」",
id: `${prefix}criador`
})
}
]
},
contextInfo: contextInfo
}
}, { 
quoted: info,
contextInfo: contextInfo
});

} else {
// ✅ SE BOTÕES ESTÃO DESATIVADOS → ENVIA IMAGEM + ÁUDIO DIRETO SEM BOTÃO
const urlAudio = `https://api.bronxyshost.com.br/api-bronxys/play?nome_url=${encodeURIComponent(data[0]?.titulo || q)}&apikey=${API_SANDRO_MD}`;

// Envia imagem com as informações
await sandro.sendMessage(from, {
image: { url: imagemEnviar },
caption: textoInfo,
contextInfo: contextInfo
}, { quoted: info });

// Áudio desativado: o comando envia a capa e as informações sem gerar mensagem de áudio.
// O endpoint e as chaves permanecem intactos para os fluxos que forem habilitados futuramente.
}

} catch (e) {
console.log('Erro geral no play:', e);
return reply(`Aconteceu um erro inesperado reporte ${prefix}bug o comando play caiu ou utilize ${prefix}play4 nome da música`);
}
}
break;


/*case 'play1':
case 'play': {
try {
const nescessarioPath = './config/nescessario.json';
const definitions = JSON.parse(fs.readFileSync(nescessarioPath, 'utf-8'));
const BOTOES_ATIVOS = definitions.buttons?.status || false;

if (!q.trim()) {  
  return sandro.sendMessage(from, {  
    audio: { url: './assets/audio/playerro.mp3' },  
    mimetype: 'audio/mpeg',  
    ptt: false  
  }, { quoted: info });  
}  

reply(`❤️ *Buscando por ${q} Aguarde...*❤️`);  

// CORREÇÃO: Usar axios com descompressão manual e timeout maior
let data;
try {
  const response = await axios({
    method: 'get',
    url: `https://api.bronxyshost.com.br/api-bronxys/pesquisa_ytb`,
    params: {
      nome: q,
      apikey: API_SANDRO_MD
    },
    timeout: 30000,
    responseType: 'json',
    decompress: true,
    headers: {
      'Accept-Encoding': 'gzip, deflate',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
    },
    // Retry em caso de erro de stream
    validateStatus: (status) => status < 500
  });
  
  data = response.data;
  
} catch (apiErr) {
  console.log('Erro na API bronxys (tentativa 1):', apiErr.message);
  
  // Fallback: tentar com fetchJson normal como segunda tentativa
  try {
    data = await fetchJson(
      `https://api.bronxyshost.com.br/api-bronxys/pesquisa_ytb?nome=${encodeURIComponent(q)}&apikey=${API_SANDRO_MD}`
    );
  } catch (fallbackErr) {
    console.log('Erro na API bronxys (tentativa 2):', fallbackErr.message);
    return reply(
      `❌ *Erro ao buscar a música.*\\n\\n` +
      `A API de pesquisa está temporariamente indisponível.\\n` +
      `Tente novamente mais tarde ou use: *${prefix}play4 ${q}*`
    );
  }
}

// Verifica se retornou dados válidos
if (!data || !Array.isArray(data) || data.length === 0) {
  return reply(`❌ Nenhum resultado encontrado para: *${q}*`);
}

if (data[0]?.tempo?.length >= 7)  
  return reply(  
    "Desculpe, este vídeo ou áudio é muito grande, peça outra música abaixo de uma hora."  
  );  

// Foto do perfil do usuário  
let ppuser;  
try {  
  ppuser = await sandro.profilePictureUrl(sender, 'image');  
} catch {  
  ppuser = 'https://i.imgur.com/ZdpPsdd.jpeg';  
}  

// Musicard  
const musicard =  
  `${zerosite}/api/musicard?nome=${encodeURIComponent(data[0]?.titulo || q)}` +  
  `&canal=${encodeURIComponent('@' + sender.split('@')[0])}` +  
  `&foto=${encodeURIComponent(ppuser)}` +  
  `&duracao=${encodeURIComponent(data[0]?.tempo || '0:00')}` +  
  `&apikey=${API_KEY_ZEROTWO}`;  

// Verifica se a canva está online  
let imagemEnviar;  

try {  
  await axios.get(musicard, {  
    responseType: 'arraybuffer',  
    timeout: 10000  
  });  

  imagemEnviar = { url: musicard };  
} catch (err) {  
  console.log('Musicard offline:', err.message);  
  imagemEnviar = {  
    url: data[0]?.thumb || fotobot  
  };  
}  

var N_E = "Não encontrado.";  

var textoInfo = `> ╔♡∞*♡♡∞:｡.｡❤️｡.｡:∞♡*♡:∞♡╗
> ╠═⪩⟨❤️𝐒𝐄𝐉𝐀-𝐁𝐄𝐌-𝐕𝐈𝐍𝐃𝐎(𝐀)⟩
> ╚♡∞♡♡∞:｡.｡❤️｡.｡:∞♡♡:∞♡╝

> Olá: ${pushname}
> ╭──〔 ${NomeDoBot} 〕──╮
> Título: ${data[0]?.titulo || N_E}
> Tempo: ${data[0]?.tempo || N_E}
> Postado: ${data[0]?.postado || N_E}
> Descrição: ${data[0]?.desc || N_E}
> ╰───〘 @${sender.split("@")[0]} 〙

> © ${NomeDoBot}

> ılı.lıllılı.ıllı..ılı.lıllılı.ıllı`;

if (BOTOES_ATIVOS) {  

  await sandro.sendMessage(  
    from,  
    {  
      image: imagemEnviar,  
      caption: textoInfo,  
      footer: "Escolha como deseja receber:",  
      buttons: [  
        {  
          buttonId: prefix + `playaudiob ${q}`,  
          buttonText: {  
            displayText: "「 ❤️ 」𝐀𝐔𝐃𝐈𝐎「 ❤️ 」"  
          },  
          type: 1  
        },  
        {  
          buttonId: prefix + `playvideob ${q}`,  
          buttonText: {  
            displayText: "「 ❤️ 」𝐕𝐈𝐃𝐄𝐎「 ❤️ 」"  
          },  
          type: 1  
        },  
        {  
          buttonId: prefix + `playdocb ${q}`,  
          buttonText: {  
            displayText: "「 ❤️ 」𝐃𝐎𝐂𝐔𝐌𝐄𝐍𝐓𝐎「 ❤️ 」"  
          },  
          type: 1  
        }  
      ],  
      headerType: 1,  
      viewOnce: true,  
      mentions: [sender]  
    },  
    { quoted: info }  
  );  
} else {  
  await sandro.sendMessage(  
    from,  
    {  
      image: imagemEnviar,  
      caption: textoInfo,  
      mentions: [sender]  
    },  
    { quoted: info }  
  );  
  await sandro.sendMessage(  
    from,  
    {  
      audio: {
        url: `https://api.bronxyshost.com.br/api-bronxys/play?nome_url=${encodeURIComponent(q)}&apikey=${API_SANDRO_MD}`},  
      mimetype: "audio/mpeg",  
      fileName: `${data[0]?.titulo || "play"}.mp3`  
    },  
    { quoted: info }  
  );  
}

} catch (e) {
console.log('Erro geral no play:', e);

return reply(`Aconteceu um erro inesperado reporte ${prefix}bug o comando play caiu ou utilize ${prefix}play4 nome da música`);
}
}
break;*/

case 'playdocb': {
  try {
reply(`❤️ *Enviando documento de ${q} Aguarde...* ❤️`);
    if (!q || !q.trim()) return reply("❌ Informe o nome ou link do vídeo/áudio.");

    // URL direta do arquivo
    const fileUrl = `https://api.bronxyshost.com.br/api-bronxys/play?nome_url=${encodeURIComponent(q)}&apikey=${API_SANDRO_MD}`;

    // Envia como documento
    await sandro.sendMessage(from, {
      document: { url: fileUrl },
      mimetype: "audio/mpeg", // pode usar "video/mp4" se for vídeo
      fileName: `${q}.mp3`
    }, { quoted: info });

  } catch (e) {
    console.log(e);
    reply(`❌ Erro ao processar o arquivo. Aguarde e tente novamente.`);
  }
}
break;

case "playvideob": {
  try {
reply(`❤️ *Enviando video ${q} Aguarde...* ❤️`);
    if (!q || !q.trim()) return reply("❌ Informe o nome ou link do vídeo.");

    const urlVideo = `https://api.bronxyshost.com.br/api-bronxys/play_video?nome_url=${encodeURIComponent(q)}&apikey=${API_SANDRO_MD}`;

    // Testa se a URL responde antes de enviar
    const axios = require('axios');
    let response;
    try {
      response = await axios.head(urlVideo, { timeout: 10000 }); // 10s
    } catch (err) {
      console.log("Erro ao acessar a API:", err.message);
      return reply("❌ A API do vídeo está fora do ar ou indisponível no momento. Tente novamente mais tarde.");
    }

    await sandro.sendMessage(from, {
      video: { url: urlVideo },
      mimetype: "video/mp4",
      fileName: `${q}.mp4`
    }, { quoted: info });

  } catch (e) {
    console.log(e);
    reply("❌ Erro ao baixar o vídeo. Tente novamente.");
  }
}
break;

case "playaudiob": {
  try {
reply(`❤️ *Enviando áudio ${q} Aguarde...* ❤️`);
    const urlAudio = `https://api.bronxyshost.com.br/api-bronxys/play?nome_url=${q}&apikey=${API_SANDRO_MD}`;
    await sandro.sendMessage(from, {
      audio: { url: urlAudio },
      mimetype: "audio/mpeg",
      fileName: `${q}.mp3`
    }, { quoted: info });
  } catch (e) {
    console.log(e);
    reply("❌ Erro ao baixar o áudio.");
  }
}
break;

case "letra": case "liryc": case "letram": case "letramusic": case "letramusica": {
if(!q.trim()) return reply(`Exemplo: ${prefix+command} Cansei de me apegar`)
try {
reply(`❤️ *Buscando por ${q} Aguarde...* ❤️`)
const abc = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/letra_musica?letra=${q.trim()}&apikey=${API_SANDRO_MD}`)
reply(` - Titulo: ${abc.titulo}\n\n - Compositor: ${abc.compositor}\n\n - Letra: ${abc.letra}`)
} catch (e) {
reply("Erro...")
}
}
break;


case 'fb': {
    if (!q) return reply(`Use: ${prefix + command} link_do_facebook`)

    try {
reply(`❤️ *Buscando por ${q} Aguarde...* ❤️`);

        const api = `https://zero-two-apis.store/download/facebook3?url=${encodeURIComponent(q)}&apikey=${getLegacyApiKey("ZERO_TWO")}`

        const { data } = await axios.get(api)

        if (!data.status) {
            return reply("Não foi possível baixar esse vídeo.")
        }

        const video = data.resultados.midias[0].url

        // Envia o vídeo
        await sandro.sendMessage(
            from,
            {
                video: { url: video },
                caption: `> ${NomeDoBot}\n> *FACEBOOK DOWNLOAD*`
            },
            { quoted: info }
        )

        // Envia o áudio
        await sandro.sendMessage(
            from,
            {
                audio: { url: video },
                mimetype: "audio/mp4",
                ptt: false
            },
            { quoted: info }
        )

    } catch (err) {
        console.log(err)
        reply("Erro ao baixar o vídeo.")
    }
}
break

/*
case 'p22':
if(!q) return reply(mess.syntaxDownloadMusic());
try {
data = await fetchJson(`https://yurimodz-apis.xyz/api/ytsrc/videos?q=${q}&apikey=${SANDRO_MD_BOT}`);
Lrows = []
for(let v of data.resultado) {
Lrows.push({title: v.title, description: `${v.description}`, id: `${prefix}play ${v.title}`, header: `Tipo: Áudio > Canal: ${v.author.name} | Duração: ${v.duration.timestamp}`}, {title: v.title, description: v.description, id: `${prefix}playvid ${v.title}`, header: `Tipo: Vídeo > Canal: ${v.author.name} | Duração: ${v.duration.timestamp}`})
};
await sandro.relayMessage(from, {interactiveMessage: {body: {text: `⸺͟͞ꪶ𝐘𝐎𝐔𝐓𝐔𝐁𝐄 - 𝐏𝐋𝐀𝐘 𝐕𝟐ꫂ ♪`}, footer: {text: `${tempo}, ${pushname}! Aqui está o resultado da sua pesquisa, selecione a música a qual você deseja baixar.`}, contextInfo: {participant: sender, quotedMessage: info.message}, nativeFlowMessage: {buttons: [{name: "single_select", buttonParamsJson: JSON.stringify({title: "SELECIONAR", sections: [{title: NomeDoBot, highlight_label: "", rows: Lrows}]})}]}}}, {});
} catch(error) {
return await reply("Seja mais específico, não deu pra encontrar com apenas isto...");
}
break
*/

case 'ytmp3': {
try {
reply(`❤️ *Buscando por ${q} Aguarde...* ❤️`);
if (!q.trim())
return reply(`🎵 Exemplo:\n${prefix}ytaudio https://youtu.be/CY5WLrSYPzo`)

if (!q.includes('youtu'))
return reply('❌ Envie um link válido do YouTube.')

// 🔗 URL direta da API (MP3)
const audioApi = `https://api.bronxyshost.com.br/api-bronxys/play?nome_url=${q}&apikey=${API_SANDRO_MD}`

// 🎧 Envia DIRETO, sem fetchJson
await sandro.sendMessage(
from,
{
audio: { url: audioApi },
mimetype: 'audio/mpeg'
},
{ quoted: info }
)

} catch (e) {
console.log(e)
reply('❌ Erro ao enviar o áudio.')
}
}
break

case 'ytdoc':
if(!q) return reply(`Por favor, insira um link de um *vídeo do YouTube* após o comando.\n   • Exemplo: *${prefix+command} https://youtube.com/watch?v=JXGpTLg7qoQ*`)
reply(`❤️ *Buscando por ${q} Aguarde...* ❤️`)
sandro.sendMessage(from, {document: {url: `https://api.bronxyshost.com.br/api-bronxys/play?nome_url=${q}&apikey=${API_SANDRO_MD}`}, fileName: '.mp3', mimetype: "audio/mpeg"}, {quoted: info}).catch(e => {
reply(`Alguma coisa deu errado...`)
})
break


case 'ytaudio': 
case 'ytvideo': 
case 'ytdoc1':
if(!q) return reply("Você esqueceu de adicionar um link de um vídeo, após o comando.")
reply(enviar.espere)
if(cmd == "ytmp3" || cmd == "ytaudio") {
try {
sandro.sendMessage(from, {audio: {url: `https://yurimodz-apis.xyz/api/dl/ytaudio?url=${q}&apikey=${SANDRO_MD_BOT}`}}, {quoted: info})
.catch((error) => {return reply(mess.error())})
} catch(error) {return console.error(error)}
} else if(cmd == "ytmp4" || cmd == "ytvideo") {
try {
sandro.sendMessage(from, {video: {url: `https://yurimodz-apis.xyz/api/dl/ytvideo?url=${q}&apikey=${SANDRO_MD_BOT}`}}, {quoted: info})
.catch((error) => {return reply(mess.error())})
} catch(error) {return console.error(error)}
} else if(cmd == "ytdoc") {
try {
sandro.sendMessage(from, {audio: {url: `https://yurimodz-apis.xyz/api/dl/ytaudio?url=${q}&apikey=${SANDRO_MD_BOT}`}}, {quoted: info})
.catch((error) => {return reply(mess.error())})
} catch(error) {return console.error(error)}
}
break

 


 


 
case 'meloboom': 
case 'toque':
if(!q) return reply(`NaN, você não digitou nada... Exemplo: *${prefix+command} iPhone*`);
setTimeout(() => {reagir(from, "🫨")}, 100)
try {
bla = await fetchJson(`https://yurimodz-apis.xyz/api/ringtone?query=${q}&apikey=${SANDRO_MD_BOT}`)
teks = pickRandom(bla.resultado.resultado);
mention(`Olá @${sender.split("@")[0]}, o toque está intitulado como: *${teks.titulo}*.\n• Deseja mais? É só pedir, que eu tô enviando! Você manda e eu obedeço.`)
sandro.sendMessage(from, {audio: {url: teks.audio}, mimetype: "audio/mpeg", ptt:false})
} catch(e) {
return reply(mess.error())
}
break;

 
 
case 'toanime':
if((isMedia && !info.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
imagem = await downloadContentFromMessage(post, 'image')
base64 = Buffer.from([])
for await(const send of imagem) { base64 = Buffer.concat( [ base64, send ] ) }
reply(`Criando seu avatar, aguarde! Não vai demorar muito amiguinho(a)...️`)
link = await upload(base64)
data = await fetchJson(`https://yurimodz-apis.xyz/api/ia/toanime?link=${link}&apikey=${SANDRO_MD_BOT}`)
sandro.sendMessage(from, {image: {url: data.resultado.imagem}}, {quoted: info}).catch(e => {
return reply(mess.error())
})
} else {
reply('Mencione uma imagem para atribuir o efeito a foto.')
}
break

case 'hack': reply(JSON.stringify(info.message.extendedTextMessage.contextInfo, null, 50));
break;

 
 


case 'nofap'://By: MisheruModz 
const datazinha = moment.tz('America/Sao_Paulo')
const MisheruModzNofap = datazinha.format('MM')
const NahidaSupremacyNofap = datazinha.date()
if (MisheruModzNofap !== '09') {
nahida.sendMessage(from, {text: `Não estamos no mês de setembro que é o mês da nofap, mas isso não significa que vc deve ir ver coisas 18+!!`},{quoted:info})
}//By: MisheruModz
const antipunheta = moment('01/09/24', 'DD/MM/YY')
const partiuvencer = NahidaSupremacyNofap - antipunheta.date() + 1
let patente = `Soldado 🇺🇦`
if (partiuvencer >= 30) patente = `Monge ♾️`
else if (partiuvencer === 29) patente = `Rei 👑`
else if (partiuvencer === 28) patente = `General de Exército ⭐⭐⭐⭐⭐`
else if (partiuvencer === 27) patente = `Coronel ⭐`
else if (partiuvencer === 26) patente = `Major 🏅🏅🏅🏅🏅`
else if (partiuvencer === 25) patente = `Capitão 🏅🏅🏅`
else if (partiuvencer === 24) patente = `Primeiro Tenente 🏅🏅`
else if (partiuvencer >= 21 && partiuvencer <= 23) patente = `Segundo Tenente 🏅`
else if (partiuvencer >= 16 && partiuvencer <= 20) patente = `Aspirante a Oficial ⚜️⚜️`
else if (partiuvencer >= 14 && partiuvencer <= 15) patente = `Subtenente ⚜️`
else if (partiuvencer >= 11 && partiuvencer <= 13) patente = `Primeiro Sargento 🥇`
else if (partiuvencer >= 6 && partiuvencer <= 10) patente = `Segundo Sargento 🥈`
else if (partiuvencer >= 3 && partiuvencer <= 5) patente = `Terceiro Sargento 🥉`
else if (partiuvencer === 2) patente = `Cabo 🎗️`
sandro.sendMessage(from, {text: `*_Se você não se masturbou e nem acessou conteúdo 18+ desde 1 de setembro, sua patente agora é:_* \n\n *Patente:* *${patente}*`},{quoted: info})
break





 


 


 
case 'obeso': // @Crap </>
if(!q.includes("/")) return reply(`Ex.: *${prefix+command} peso/altura*`)
var [peso, altura] = q.split("/");
const resultado = obeso(peso, altura)
if (resultado <= 17 || resultado <= 18.4) {
await sandro.sendMessage(from, {react: {text: `😸`, key: info.key}})
reply(`• Seu índice de massa corporal é de: *${resultado}* -> Você está abaixo do peso.`)
} else if (resultado <= 18.5 || resultado <= 24.9) {
await sandro.sendMessage(from, {react: {text: `👍`, key: info.key}})
reply(`• Seu índice de massa corporal é: *${resultado}* -> Você está no peso ideal.`)
} else if (resultado <= 25 || resultado <= 29.9) {
await sandro.sendMessage(from, {react: {text: `🫤`, key: info.key}})
reply(`• Seu índice de massa corporal é: *${resultado}* -> Você está com sobrepeso.`);
} else if (resultado <= 30 || resultado <= 39.9) {
await sandro.sendMessage(from, {react: {text: `🤨`, key: info.key}})
reply(`• Seu índice de massa corporal é: *${resultado}* -> Obesidade.`);
} else if (resultado > 40) {
await sandro.sendMessage(from, {react: {text: `😵`, key: info.key}})
reply(`• Seu índice de massa corporal é: *${resultado}* -> Obesidade mórbida!`);
}
break;

 




 case 'scdl':
if(!q) return reply(`Tá faltando aí! Cadê o link da música no SoundCloud hein?`)
data = await fetchJson(`https://yurimodz-apis.xyz/api/soundcloud?url=${q}&apikey=${SANDRO_MD_BOT}`) 
tinyUrl = await axios.get(`https://tinyurl.com/api-create.php?url=${data.resultado.link_dl}`)
sandro.sendMessage(from, {image: {url: data.resultado.capa}, caption: mess.soundcloud(data, tinyUrl)}, {quoted: info})
sandro.sendMessage(from, {audio: {url: `https://yurimodz-apis.xyz/api/dl/scdl?url=${q}&apikey=${SANDRO_MD_BOT}` }, mimetype: 'audio/mpeg'}, {quoted: info}).catch(e => {
return reply(mess.error())
})
break


case 'tiktoksearch': {
try {

if (!q) {
return reply(`Informe o nome para pesquisar.

Exemplo:
${prefix + command} edit anime`);
}

reagir(from, "🔎");
const { data } = await axios.get(
`https://k.okarun-api.com.br/download/tiktoksearch?username=${encodeURIComponent(q)}&apikey=${getLegacyApiKey("OKARUN")}`
);

if (!data.status || !data.resultado) {
return reply("Nenhum resultado encontrado.");
}

const tt = data.resultado;

await sandro.sendMessage(from, {
video: {
url: tt.no_watermark
},
caption: `> ${NomeDoBot} TIKTOK3 - DOWNLOAD

> ${tt.title}`
}, { quoted: info });

await sandro.sendMessage(from, {
audio: {
url: tt.music
},
mimetype: "audio/mpeg",
ptt: false
}, { quoted: info });

} catch (err) {
console.log(err);
reply("Erro ao pesquisar.");
}

}
break;


case 'ttk2': {
try {
reply(`❤️ *Buscando por ${q} Aguarde...* ❤️`);
if (!q) {
return reply(`❌ Envie o link do TikTok. Exemplo:
${prefix}tiktok https://vm.tiktok.com/xxxxxxxx/`);
}

reagir(from, "📥");

const { data } = await axios.get(
`https://www.tikwm.com/api/?url=${encodeURIComponent(q)}`
);

if (!data || data.code !== 0) {
return reply("❌ Não foi possível baixar esse vídeo.");
}

await sandro.sendMessage(from, {
video: { url: data.data.play },
caption: `> *TIKTOK2 DOWNLOAD*

> ╭──〔 ${NomeDoBot} 〕──╮
> ┆『❤️』Titulo: ${data.data.title}
> ┆『❤️』Autor: ${data.data.author.nickname}
> ┆『❤️』Curtidas: ${data.data.digg_count}
> ┆『❤️』Comentários: ${data.data.comment_count}
> ┆『❤️』Compartilhamentos: ${data.data.share_count}
> ╰───〘 @${sender.split("@")[0]} 〙`
}, { quoted: info });

} catch (err) {
console.log(err);
reply("❌ Erro ao baixar o vídeo.");
}

}
break;
  

case 'ttaudio':
  try {
    if (!q) return reply(`❌ Envie o link do TikTok\nEx: tiktokaudio https://vm.tiktok.com/...`);

    reply(`❤️ *Buscando por ${q} Aguarde...* ❤️`);

    const api = `${zerosite}/api/download/tiktok/v4?url=${encodeURIComponent(q)}&apikey=${API_KEY_ZEROTWO}`;

    const res = await fetchJson(api);

    if (!res.status) return reply("❌ Erro ao buscar o áudio.");

    const data = res.resultado;

    const audio = data.audio.playUrl[0];
    const nome = data.detalhes.autor;
    const user = res.criador;

    const texto = `> *TIKTOK ÁUDIO*

> ${data.detalhes.descrição || 'Sem descrição'}`;

    await sandro.sendMessage(from, {
      audio: { url: audio },
      mimetype: 'audio/mpeg',
      ptt: false
    }, { quoted: info });

    // opcional: mandar info junto
    await reply(texto);

  } catch (e) {
    console.error(e);
    reply("❌ Erro ao baixar áudio.");
  }
  break;

case 'tiktok4': {
try {

if (!q) {
return reply(`❌ Envie o link do TikTok.Exemplo:
${prefix + command} https://vm.tiktok.com/xxxxxxxx/`);
}

reagir(from, "📥");
reply("⏳ Baixando vídeo...");

const { data } = await axios.get(
`https://k.okarun-api.com.br/api/download/tiktok?url=${encodeURIComponent(q)}&apikey=${getLegacyApiKey("OKARUN")}`
);

if (!data.status || !data.resultado) {
return reply("❌ Não foi possível baixar esse vídeo.");
}

const tt = data.resultado;

await sandro.sendMessage(from, {
video: {
url: tt.video.playAddr[0]
},
caption: `> ${NomeDoBot} *TIKTOK DOWNLOAD*

> *Autor:* ${tt.author.nickname}
> *Curtidas:* ${tt.statistics.likeCount}
> *Comentários:* ${tt.statistics.commentCount}
> *Visualizações:* ${tt.statistics.playCount}
> *Compartilhamentos:* ${tt.statistics.shareCount}
> *Descrição:* ${tt.desc}`
}, { quoted: info });

} catch (err) {
console.log(err);

reply("❌ Erro ao baixar o vídeo.");
}

}
break;








case 'tiktokimg': case 'tiktokimage':
await carregamento()
if(!q) return reply('Por favor, adicione um link do tiktok (imagens).')
reagir(from, "😉")
try {
data = await fetchJson(`https://yurimodz-apis.xyz/download/tiktok?url=${q}&apikey=${SANDRO_MD_BOT}`) 
if(data.resultado.photo.length === 0) return reply(`Ocorreu um erro ao abrir o link, por favor tente novamente mais tarde.`)
audioDl = await getBuffer(data.resultado.audio)
sandro.sendMessage(from, {audio: audioDl, mimetype: 'audio/mpeg'}, {quoted: info})
for (let i = 0; i < data.resultado.photo.length; i++) {
photos = await fetch(data.resultado.photo[i].url).then(v => v.buffer())
sandro.sendMessage(from, {image: photos})
} 
} catch(e) {
reagir(from, "❌️")
reply(mess.error()+`\n–\n*Erro:* Isso não é uma sequência de fotos, para baixar vídeos use: *${prefix}tiktok*`)
}
break

case 'capcut': case 'capcutmodel':
if(!q) return reply('Por favor, adicione um link de um modelo do CapCut.')
reagir(from, "😼")
try {
data = await fetchJson(`https://yurimodz-apis.xyz/api/dl/capcut?url=${q}&apikey=${SANDRO_MD_BOT}`) 
c = await getBuffer(data.resultado.videoOriginal)
sandro.sendMessage(from, {video: c, caption: `• *${data.resultado.title} | ${data.resultado.fullUse}*\n• *Desc:* ${data.resultado.description}`}, {quoted: info})
} catch(e) {
reply(mess.error())
}
break

//━━COMANDOS +18━━━

case 'ass': //sandro api
if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modonsfw 1`)
reply(`Enviando.. No privado caso demore de mais nao consegui te enviar`)
const ass = await getBuffer(`https://docs.prexzyapis.com/nsfw/ass`);
sandro.sendMessage(from, {image: ass}, {quoted: info});
break;

case 'bdsm': //sandro api
if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modonsfw 1`)
reply(`Enviando.. No privado caso demore de mais nao consegui te enviar`)
const bdsm = await getBuffer(`https://docs.prexzyapis.com/nsfw/ass`);
sandro.sendMessage(from, {image: bdsm}, {quoted: info});
break;

case 'cuckold': //sandro api
if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modonsfw 1`)
reply(`Enviando.. No privado caso demore de mais nao consegui te enviar`)
const cuckold = await getBuffer(`https://docs.prexzyapis.com/nsfw/ass`);
sandro.sendMessage(from, {image: cuckold}, {quoted: info});
break;

case 'blowjob': //sandro api
if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modonsfw 1`)
reply(`Enviando.. No privado caso demore de mais nao consegui te enviar`)
const blowjob = await getBuffer(`https://docs.prexzyapis.com/nsfw/ass`);
sandro.sendMessage(from, {image: blowjob}, {quoted: info});
break;

case 'cum': //sandro api
if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modonsfw 1`)
reply(`Enviando.. No privado caso demore de mais nao consegui te enviar`)
const cum = await getBuffer(`https://docs.prexzyapis.com/nsfw/ass`);
sandro.sendMessage(from, {image: cum}, {quoted: info});
break;

case 'multidl': case 'pocbi':
if(q.length < 5) return reply('Por favor, adicione um link de uma rede social de mídia. (Ex.: Tiktok, insta, threads, etc...)');
try {
setTimeout(() => {reagir(from, "😉")}, 100)
data = await MultiDownload(q)
for (let i = 0; i < data.medias.length; i++) {
let dmt = data.medias[i].extension
mimety = dmt === "mp4" ? "video/mp4" : dmt === "webp" ? "image/webp" : dmt === "jpg" ? "image/jpeg" : dmt === "mp3" ? "audio/mpeg" : "video/mp4"
sandro.sendMessage(from, {[mimety.split("/")[0]]: {url: data.medias[i].url}, mimetype: mimety}, {quoted: info})
}
} catch(e) {
return reply(mess.error())
}
break





case 'twitter_video': case 'twittervideo':
try {
if(!q.includes("twitter")) return reply(`Exemplo: ${prefix+command} o link do Twitter`);
reply(`❤️ *Buscando por ${q} Aguarde...* ❤️`);
sandro.sendMessage(from, {video: {url: `https://api.bronxyshost.com.br/api-bronxys/${command}?url=${q}&apikey=${API_SANDRO_MD}`}, mimetype: "video/mp4"}).catch(e => {
return reply("Erro..")
})
} catch (e) {
return reply("Erro..")
}
break;

case 'twitter_audio': case 'twitteraudio':
try {
if(!q.includes("twitter")) return reply(`Exemplo: ${prefix+command} o link do Twitter`);
reply(`❤️ *Buscando por ${q} Aguarde...* ❤️`);
sandro.sendMessage(from, {audio: {url: `https://api.bronxyshost.com.br/api-bronxys/${command}?url=${q}&apikey=${API_SANDRO_MD}`}, mimetype: "audio/mpeg"}).catch(e => {
return reply("Erro..")
})
} catch (e) {
return reply("Erro..")
}
break;

case 'igstalk':  case 'igsh':
if (!q) return reply(`Cadê o *usuário da pessoa* que você deseja stalkear?\n     • Exemplo: *${prefix+command} @jaoferreira*`);
if (!q.includes("@")) return reply(`Coloque o *@* na frente do usuário para obter um resultado positivo.\n📌 Exemplo: *${prefix+command} @jaoferreira*\n     • *Não use links de perfil*, coloque o @. Caso apresente um link o resultado será negativo.`)
try {
reagir(from, "😸")
reply(`Buscando informações sobre o usuário: *${q}* no Instagram.`)
data = await fetchJson(`https://yurimodz-apis.xyz/api/igstalk?usuario=${q.replace("@", "")}&apikey=${SANDRO_MD_BOT}`)
sandro.sendMessage(from, {text: mess.igstalk(data), contextInfo: {externalAdReply: {title: "Dê um clique aqui e visualize o perfil stalkeado.", thumbnail: await getBuffer(data.resultado.profile_photo), mediaType: 1, sourceUrl: "http://instagram.com/"+data.resultado.username}}}) 
} catch(e) {
return console.log(e)
}
break

case 'igreels': case 'instareels':
if (!q) return reply('Por favor, forneça o link do vídeo de um *reels do Instagram*.');
reply(enviar.espere);
try {
setTimeout(() => {reagir(from, "😸")}, 100)
result = await fetchJson(`https://yurimodz-apis.xyz/api/instareels?url=${q}&apikey=${SANDRO_MD_BOT}`);
sandro.sendMessage(from, {video: {url: result.url}}, {quoted: info})
} catch(e) {
reply(mess.error())
}
break;



case 'mediafire': {
  if (!q) return reply('Envie o link do MediaFire.\nExemplo:\n/mediafire https://www.mediafire.com/file/...')

  try {

    const api = `${zerosite}/api/dl/mediafire?url=${encodeURIComponent(q)}&apikey=${API_KEY_ZEROTWO}`
    const { data } = await axios.get(api)

    if (!data || !data.download) {
      return reply('Não consegui baixar esse link.')
    }

    await sandro.sendMessage(from, {
      document: { url: data.download },
      mimetype: 'application/octet-stream',
      fileName: data.filename || 'arquivo_mediafire'
    }, { quoted: info })

  } catch (e) {
    console.log(e)
    reply('Erro ao baixar do MediaFire.')
  }
}
break


case 'gdrive': case 'googledrive':
if(!q.includes("drive.google.com")) return reply("Faltando o link do google drive para download do arquivo, cade?");
ABC = await fetchJson(`https://yurimodz-apis.xyz/api/dl/gdrive?url=${q}&apikey=${SANDRO_MD_BOT}`)
reply("Aguarde, estou encaminhando o arquivo. Pode demorar até *2min* para enviar!")
sandro.sendMessage(from, {document: {url: ABC.resultado.downloadUrl}, mimetype: ABC.resultado.mimetype, fileName: ABC.resultado.fileName}).catch(e => {
return reply(mess.error())  
})
break;





 
 
case 'animeimage':
if(!q) return reply(mess.exeAnimeImage(prefix))
if (args[0] === 'cosplay') {
reply(enviar.aguarde)
photos = await getBuffer(`https://yurimodz-apis.xyz/random/cosplay?apikey=${SANDRO_MD_BOT}`)
sandro.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === 'waifu') {
reply(enviar.aguarde)
photos = await getBuffer(`https://yurimodz-apis.xyz/random/waifu?apikey=${SANDRO_MD_BOT}`)
sandro.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === 'loli') {
reply(enviar.aguarde)
photos = await getBuffer(`https://yurimodz-apis.xyz/random/loli?apikey=${SANDRO_MD_BOT}`)
sandro.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === 'shota') {
reply(enviar.aguarde)
photos = await getBuffer(`https://yurimodz-apis.xyz/random/shota?apikey=${SANDRO_MD_BOT}`)
sandro.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === 'yotsuba') {
reply(enviar.aguarde)
photos = await getBuffer(`https://yurimodz-apis.xyz/random/yotsuba?apikey=${SANDRO_MD_BOT}`)
sandro.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === 'shinomiya') {
reply(enviar.aguarde)
photos = await getBuffer(`https://yurimodz-apis.xyz/random/shinomiya?apikey=${SANDRO_MD_BOT}`)
sandro.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === 'yumeko') {
reply(enviar.aguarde)
photos = await getBuffer(`https://yurimodz-apis.xyz/random/yumeko?apikey=${SANDRO_MD_BOT}`)
sandro.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === 'tejina') {
reply(enviar.aguarde)
photos = await getBuffer(`https://yurimodz-apis.xyz/random/tejina?apikey=${SANDRO_MD_BOT}`)
sandro.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === 'chiho') {
reply(enviar.aguarde)
photos = await getBuffer(`https://yurimodz-apis.xyz/random/chiho?apikey=${SANDRO_MD_BOT}`)
sandro.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === 'boruto') {
reply(enviar.aguarde)
photos = await getBuffer(`https://yurimodz-apis.xyz/random/boruto?apikey=${SANDRO_MD_BOT}`)
sandro.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === 'kaori') {
reply(enviar.aguarde)
photos = await getBuffer(`https://yurimodz-apis.xyz/random/kaori?apikey=${SANDRO_MD_BOT}`)
sandro.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === 'shizuka') {
reply(enviar.aguarde)
photos = await getBuffer(`https://yurimodz-apis.xyz/random/shizuka?apikey=${SANDRO_MD_BOT}`)
sandro.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === 'kaga') {
reply(enviar.aguarde)
photos = await getBuffer(`https://yurimodz-apis.xyz/random/kaga?apikey=${SANDRO_MD_BOT}`)
sandro.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === 'kotori') {
reply(enviar.aguarde)
photos = await getBuffer(`https://yurimodz-apis.xyz/random/kotori?apikey=${SANDRO_MD_BOT}`)
sandro.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === 'mikasa') {
reply(enviar.aguarde)
photos = await getBuffer(`https://yurimodz-apis.xyz/random/mikasa?apikey=${SANDRO_MD_BOT}`)
sandro.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === 'akiyama') {
reply(enviar.aguarde)
photos = await getBuffer(`https://yurimodz-apis.xyz/random/akiyama?apikey=${SANDRO_MD_BOT}`)
sandro.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === 'gremory') {
reply(enviar.aguarde)
photos = await getBuffer(`https://yurimodz-apis.xyz/random/gremory?apikey=${SANDRO_MD_BOT}`)
sandro.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === 'izuku') {
reply(enviar.aguarde)
photos = await getBuffer(`https://yurimodz-apis.xyz/random/izuku?apikey=${SANDRO_MD_BOT}`)
sandro.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === 'shina') {
reply(enviar.aguarde)
photos = await getBuffer(`https://yurimodz-apis.xyz/random/shina?apikey=${SANDRO_MD_BOT}`)
sandro.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === 'kagura') {
reply(enviar.aguarde)
photos = await getBuffer(`https://yurimodz-apis.xyz/random/kagura?apikey=${SANDRO_MD_BOT}`)
sandro.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === 'shinka') {
reply(enviar.aguarde)
photos = await getBuffer(`https://yurimodz-apis.xyz/random/shinka?apikey=${SANDRO_MD_BOT}`)
sandro.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === 'eba') {
reply(enviar.aguarde)
photos = await getBuffer(`https://yurimodz-apis.xyz/random/eba?apikey=${SANDRO_MD_BOT}`)
sandro.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === 'yuri') {
reply(enviar.aguarde)
photos = await getBuffer(`https://yurimodz-apis.xyz/random/yuri?apikey=${SANDRO_MD_BOT}`)
sandro.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === 'erza') {
reply(enviar.aguarde)
photos = await getBuffer(`https://yurimodz-apis.xyz/random/erza?apikey=${SANDRO_MD_BOT}`)
sandro.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === 'elaina') {
reply(enviar.aguarde)
photos = await getBuffer(`https://yurimodz-apis.xyz/random/elaina?apikey=${SANDRO_MD_BOT}`)
sandro.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === 'hinata') {
reply(enviar.aguarde)
photos = await getBuffer(`https://yurimodz-apis.xyz/random/hinata?apikey=${SANDRO_MD_BOT}`)
sandro.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === 'naruto') {
reply(enviar.aguarde)
photos = await getBuffer(`https://yurimodz-apis.xyz/random/naruto?apikey=${SANDRO_MD_BOT}`)
sandro.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === 'minato') {
reply(enviar.aguarde)
photos = await getBuffer(`https://yurimodz-apis.xyz/random/minato?apikey=${SANDRO_MD_BOT}`)
sandro.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === 'sagari') {
reply(enviar.aguarde)
photos = await getBuffer(`https://yurimodz-apis.xyz/random/sagari?apikey=${SANDRO_MD_BOT}`)
sandro.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === 'nezuko') {
reply(enviar.aguarde)
photos = await getBuffer(`https://yurimodz-apis.xyz/random/nezuko?apikey=${SANDRO_MD_BOT}`)
sandro.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === 'rize') {
reply(enviar.aguarde)
photos = await getBuffer(`https://yurimodz-apis.xyz/random/rize?apikey=${SANDRO_MD_BOT}`)
sandro.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === 'anna') {
reply(enviar.aguarde)
photos = await getBuffer(`https://yurimodz-apis.xyz/random/anna?apikey=${SANDRO_MD_BOT}`)
sandro.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === 'deidara') {
reply(enviar.aguarde)
photos = await getBuffer(`https://yurimodz-apis.xyz/random/deidara?apikey=${SANDRO_MD_BOT}`)
sandro.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === 'asuna') {
reply(enviar.aguarde)
photos = await getBuffer(`https://yurimodz-apis.xyz/random/asuna?apikey=${SANDRO_MD_BOT}`)
sandro.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === 'ayuzawa') {
reply(enviar.aguarde)
photos = await getBuffer(`https://yurimodz-apis.xyz/random/ayuzawa?apikey=${SANDRO_MD_BOT}`)
sandro.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === 'emilia') {
reply(enviar.aguarde)
photos = await getBuffer(`https://yurimodz-apis.xyz/random/emilia?apikey=${SANDRO_MD_BOT}`)
sandro.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === 'chitoge') {
reply(enviar.aguarde)
photos = await getBuffer(`https://yurimodz-apis.xyz/random/chitoge?apikey=${SANDRO_MD_BOT}`)
sandro.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === 'hestia') {
reply(enviar.aguarde)
photos = await getBuffer(`https://yurimodz-apis.xyz/random/hestia?apikey=${SANDRO_MD_BOT}`)
sandro.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === 'inori') {
reply(enviar.aguarde)
photos = await getBuffer(`https://yurimodz-apis.xyz/random/inori?apikey=${SANDRO_MD_BOT}`)
sandro.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === 'itachi') {
reply(enviar.aguarde)
photos = await getBuffer(`https://yurimodz-apis.xyz/random/itachi?apikey=${SANDRO_MD_BOT}`)
sandro.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === 'madara') {
reply(enviar.aguarde)
photos = await getBuffer(`https://yurimodz-apis.xyz/random/madara?apikey=${SANDRO_MD_BOT}`)
sandro.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === 'sakura') {
reply(enviar.aguarde)
photos = await getBuffer(`https://yurimodz-apis.xyz/random/sakura?apikey=${SANDRO_MD_BOT}`)
sandro.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === 'sasuke') {
reply(enviar.aguarde)
photos = await getBuffer(`https://yurimodz-apis.xyz/random/sasuke?apikey=${SANDRO_MD_BOT}`)
sandro.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === 'tsunade') {
reply(enviar.aguarde)
photos = await getBuffer(`https://yurimodz-apis.xyz/random/tsunade?apikey=${SANDRO_MD_BOT}`)
sandro.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === 'onepiece') {
reply(enviar.aguarde)
photos = await getBuffer(`https://yurimodz-apis.xyz/random/onepiece?apikey=${SANDRO_MD_BOT}`)
sandro.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === 'mobil') {
reply(enviar.aguarde)
photos = await getBuffer(`https://yurimodz-apis.xyz/random/mobil?apikey=${SANDRO_MD_BOT}`)
sandro.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === 'montor') {
reply(enviar.aguarde)
photos = await getBuffer(`https://yurimodz-apis.xyz/random/montor?apikey=${SANDRO_MD_BOT}`)
sandro.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === 'keneki') {
reply(enviar.aguarde)
photos = await getBuffer(`https://yurimodz-apis.xyz/random/keneki?apikey=${SANDRO_MD_BOT}`)
sandro.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === 'megumin') {
reply(enviar.aguarde)
photos = await getBuffer(`https://yurimodz-apis.xyz/random/megumin?apikey=${SANDRO_MD_BOT}`)
sandro.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === 'toukachan') {
reply(enviar.aguarde)
photos = await getBuffer(`https://yurimodz-apis.xyz/random/toukachan?apikey=${SANDRO_MD_BOT}`)
sandro.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
}
break

 
 
 
case 'transmissão': {
if(!SoDono && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
if(!q) return reply( `Texto onde? Exemplo : ${prefix + command} Hasta la vista baby`)
let getGroups = await sandro.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
for (i = 0; i < anu.length; i++) {
await sleep(1500)
let txt = `「TRANSMISSÃO DO BOT」\n\n ${q}`
sandro.sendMessage(anu[i], {text: txt})
}
reply(`Enviado com sucesso...`)
}
break

case "transcrever": {
if((isMedia && !info.message.imageMessage && info.message.videoMessage || isQuotedVideo || isQuotedAudio)) {
reply("Aguarde.. transcrevendo seu áudio..")
muk = isQuotedVideo ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.videoMessage : isQuotedAudio ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.audioMessage : info.message.audioMessage

let base64String = await getFileBuffer(muk, isQuotedAudio ? 'audio': 'video');
let buffer = Buffer.from(base64String, 'base64');

let formData = new FormData();
formData.append('file', buffer, {filename: isQuotedAudio ? 'audiofile': 'videofile', contentType: muk.mimetype });

fetch(`https://api.bronxyshost.com.br/transcrever?apikey=${API_SANDRO_MD}`, {
method: 'POST',
body: formData
}).then(response => response.json())
.then(data => {
reply(data.texto);
}).catch((Err) => {
console.log(Err);
reply("Sinto muito, alguns formatos de áudio/vídeo, eu não consigo transcrever, em caso de dúvidas, tente novamente...");
});
} else {
return reply("Marque um audio ou um vídeo.")
}
}
break;

case 'join': case 'entrar':
if(!SoDono) return reply(enviar.msg.donosmt)
string = args.join(' ')
if(!string) return reply('Insira um link de convite ao lado do comando.')
if(string.includes('chat.whatsapp.com/') || reply('Ops, verifique o link que você inseriu.') ) {
link = string.split('app.com/')[1]
try {
sandro.groupAcceptInvite(`${link}`)
} catch(erro) {
if(String(erro).includes('resource-limit') ) {
reply('O grupo já está com o alcance de 257 membros.')
}
if(String(erro).includes('not-authorized') ) {
reply('Não foi possível entrar no grupo.\nMotivo: Banimento.')
}
}
}
break

case 'antiimg':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('Hmmmm')
if(Number(args[0]) === 1) {
if(isAntiImg) return reply('O recurso de anti imagem já está ativado.')
dataGp[0].antiimg = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de anti imagem neste grupo.️')
} else if(Number(args[0]) === 0) {
if(!isAntiImg) return reply('O recurso de anti imagem já está desativado.')
dataGp[0].antiimg = false
setGp(dataGp)
reply('Desativou com sucesso o recurso de anti imagem neste grupo.')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antivideo':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('Hmmmm')
if(Number(args[0]) === 1) {
if(isAntiVid) return reply('O recurso de anti vídeo já está ativado.')
dataGp[0].antivideo = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de anti video neste grupo.')
} else if(Number(args[0]) === 0) {
if(!isAntiVid) return reply('O recurso de anti vídeo já está desativado.')
dataGp[0].antivideo = false
setGp(dataGp)
reply('Desativou com sucesso o recurso de anti video neste grupo.')
} else {
reply('1 para ativar, 0 para desativar')
}
break

                    case 'loli33':
            {
              json = JSON.parse(fs.readFileSync('./assets/loli.json').toString())
              random = json[Math.floor(Math.random() * json.length)]
              /*
              let proximo = [
                {buttonId: `${prefix + command}`, buttonText: {displayText: '🍉PROXIMO🍉'}, type: 1},
                ]
                */
              templateMassage = {
                image: {
                  url: random,
                  quoted: info
                },
                caption: `${command}`,
                footer: `${botName}`,
              }
              sandro.sendMessage(from, templateMassage)
            }
            break


      




case 'antisticker':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('Hmmmm')
if(Number(args[0]) === 1) {
if(isAntiSticker) return reply('O recurso de anti sticker já está ativado.')
dataGp[0].antisticker = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de anti sticker neste grupo.')
} else if(Number(args[0]) === 0) {
if(!isAntiSticker) return reply('O recurso de anti sticker já está desativado.')
dataGp[0].antisticker = false
setGp(dataGp)
reply('Desativou com sucesso o recurso de anti sticker neste grupo.')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antidocumento':
case 'antidoc':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(Antidoc) return reply('O recurso de anti documento já está ativado.')
dataGp[0].antidoc = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de anti documento neste grupo.')
} else if(Number(args[0]) === 0) {
if(!Antidoc) return reply('O recurso de anti documento já está desativado.')
dataGp[0].antidoc = false
setGp(dataGp)
reply('Desativou com sucesso o recurso de anti documento neste grupo.')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antictt':
case 'anticontato':  
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isAntiCtt) return reply('O recurso de anti contato já está ativado.')
dataGp[0].antictt = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de anti contato neste grupo.')
} else if(Number(args[0]) === 0) {
if(!isAntiCtt) return reply('O recurso de anti contato já está desativado.')
dataGp[0].antictt = false
setGp(dataGp)
reply('️Desativou com sucesso o recurso de anticontato neste grupo.️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antiloc':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
try {									
if(args.length < 1) return reply('1 pra ativar, 0 pra desligar')
if(Number(args[0]) === 1) {
if(Antiloc) return reply('O recurso de anti loc já está ativado.')
dataGp[0].antiloc = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de anti loc neste grupo.')
} else if(Number(args[0]) === 0) {
if(!Antiloc) return reply('O recurso de anti loc já está desativado.')
dataGp[0].antiloc = false
setGp(dataGp)
reply('Desativou com sucesso o recurso de anti loc neste grupo.')
} else {
reply('1 para ativar, 0 para desativar')
}
} catch {
reply('Deu erro, tente novamente :/')
}
break

case 'antistatus':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')

if(Number(args[0]) === 1) {
if(isAntiStatus) return reply('O recurso de antistatus já está ativado.')
dataGp[0].antistatus = true
setGp(dataGp)
reply('✅ Anti-status ativado neste grupo.')
} 

else if(Number(args[0]) === 0) {
if(!isAntiStatus) return reply('O recurso de antistatus já está desativado.')
dataGp[0].antistatus = false
setGp(dataGp)
reply('❌ Anti-status desativado neste grupo.')
} 

else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antilinkgp':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isAntilinkgp) return reply('O recurso de antilink de grupo já está ativado.')
dataGp[0].antilinkgp = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de antilink de grupo + channel.')
} else if(Number(args[0]) === 0) {
if(!isAntilinkgp) return reply('O recurso de antilink de grupo + channel já está desativado.')
dataGp[0].antilinkgp = false
setGp(dataGp)
reply('Desativou com sucesso o recurso de antilink de grupo + channel.')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antilinkhard':
case 'antilink':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isAntiLinkHard) return reply('O recurso de antilink hardcore já está ativado.')
dataGp[0].antilinkhard = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de antilink hardcore neste grupo.')
} else if(Number(args[0]) === 0) {
if(!isAntiLinkHard) return reply('O recurso de antilink hardcore já está desativado.')
dataGp[0].antilinkhard = false
setGp(dataGp)
reply('Desativou com sucesso o recurso de antilink harcore neste grupo.️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'x9':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isx9) return reply('O recurso de x9 já está ativado.')
dataGp[0].x9 = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de x9 neste grupo, irei notificar quando alguém for rebaixado/promovido a adm e também quando ouver fixação/desafixação de mensagem do(s) adminstrador(es).')
} else if(Number(args[0]) === 0) {
if(!isx9) return reply('O recurso de x9 já está desativado.')
dataGp[0].x9 = false
setGp(dataGp)
reply('Desativou com sucesso o recurso de x9 neste grupo, não irei mais notificar promoção de adm nem rebaixamento ou fixação/desafixação de mensagem do(s) adminstrador(es).')
} else {
reply('1 para ativar, 0 para desativar')
}
break



case 'x9visuunica':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isX9VisuUnica) return reply('O recurso de revelar visu única já está ativado.')
dataGp[0].visuUnica = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de revelar visu única neste grupo.')
} else if(Number(args[0]) === 0) {
if(!isX9VisuUnica) return reply('O recurso de revelar visu única já está desativado.')
dataGp[0].visuUnica = false
setGp(dataGp)
reply('Desativou com sucesso o recurso de revelar visu única neste grupo.')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'so_adm': {
  if (!isGroup) return reply(enviar.msg.grupo)
  if (!isGroupAdmins) return reply(enviar.msg.adm)
  if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
  if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')

  if (Number(args[0]) === 1) {
    if (dataGp[0].soadm) return reply('Já está ativo.')
    dataGp[0].soadm = true
    setGp(dataGp)
    reply('✅ Agora *somente administradores* podem usar comandos neste grupo.')
  } 
  else if (Number(args[0]) === 0) {
    if (!dataGp[0].soadm) return reply('Já está desativado.')
    dataGp[0].soadm = false
    setGp(dataGp)
    reply('❌ Agora *todos* podem usar comandos neste grupo.')
  } 
  else {
    reply('Use: 1 para ativar, 0 para desativar.')
  }
}
break

case 'odelete':
if(!isGroup) return reply(enviar.msg.grupo)
if(!SoDono) return reply(enviar.msg.donosmt)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(IS_DELETE) return reply('O recurso de delete já está ativado.')
nescessario.Odelete = true
setNes(nescessario)
reply('Ativou com sucesso o recurso de delete nos grupos.')
} else if(Number(args[0]) === 0) {
if(!IS_DELETE) return reply('O recurso de delete já está desativado.')
nescessario.Odelete = false
setNes(nescessario)
reply('️Desativou com sucesso o recurso de delete nos grupos.️')
} else {
reply('1 para ativar, 0 para desativar')
}
break


            
case 'antifake':
if(!isGroup) return reply(enviar.msg.grupo)
if(!SoDono) return reply(enviar.msg.donosmt)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar.')
if(Number(args[0]) === 1) {
if(isAntifake) return reply('O recurso de antifake neste grupo já está ativado.')
dataGp[0].antifake = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de antifake neste grupo!')
} else if(Number(args[0]) === 0) {
if(!isAntifake) return reply('O recurso de antifake neste grupo já está desativado.')
dataGp[0].antifake = false
setGp(dataGp)
reply('Desativou com sucesso o recurso de antifake neste grupo!')
} else {
reply('1 para ativar, 0 para desativar.')
}
break;







 


 


 
 
case 'config-group': {
if (!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (!q) return reply(`Insira all / adms para escolher quem pode atualizar os dados do grupo. A decisão é sua, adm! `)
if (args[0] === 'adms') {
reply(`🔐 Sucesso! - Agora somente os adm poderá editar os dados do grupo.`)
await sandro.groupSettingUpdate(from, 'locked')
} else if (args[0] === 'all') {
reply(`🔓 Sucesso! - Agora todos os participantes pode alterar os dados do grupo.`)
await sandro.groupSettingUpdate(from, 'unlocked')
}
}
break

case 'rmphotogp': case 'rmfotogroup': {
if (!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
reply(`A foto do grupo foi removida com sucesso.`)
await sandro.removeProfilePicture(from)
}
break

case 'antinotas':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('Hmmmm')
if(Number(args[0]) === 1) {
if(isAntiNotas) return reply('Já esta ativo')
dataGp[0].antinotas = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de anti notas neste grupo.️')
} else if(Number(args[0]) === 0) {
if(!isAntiNotas) return reply('Ja esta Desativado.')
dataGp[0].antinotas = false
setGp(dataGp)
reply('Desativou com sucesso o recurso de anti notas neste grupo.️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'anticatalogo':
case 'anticatalg':  
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isAnticatalogo) return reply('Ja esta ativo')
dataGp[0].anticatalogo = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de anticatalogo neste grupo.')
} else if(Number(args[0]) === 0) {
if(!isAnticatalogo) return reply('Já está desativado.')
dataGp[0].anticatalogo = false
setGp(dataGp)
reply('Desativou com sucesso o recurso de anticatalogo neste grupo.️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'bemvindo2':  case 'bemvindo': case 'bemvindo1':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(args.length < 1) return reply(`Digite da forma correta:\nComando: ${prefix + command} 1 para ativar `)
if(Number(args[0]) === 1) {
if(isWelkom2) return reply('O recurso já está ativado no grupo.')
dataGp[0].wellcome[1].bemvindo2 = true
setGp(dataGp)
reply('O recurso foi ativado.')
} else if(Number(args[0]) === 0) {
if(!isWelkom2) return reply('O recurso não está ativado no grupo.')
dataGp[0].wellcome[1].bemvindo2 = false
setGp(dataGp)
reply('O recurso foi desativado.')
} else {
reply(`Digite da forma correta, ${prefix + command} 1, para ativar e 0 para desativar`)
}
break

 
case 'info': 
if(!q) return reply(`Coloque um comando para conhecer o uso do comando que você almeja usar, por exemplo: ${prefix+command} play`)
const CMD_P = JSON.parse(fs.readFileSync("./config/media/infocmd.json")); 
const searchCmds = CMD_P.map(i => i.command).indexOf(q)
if(searchCmds < 0) return reply("A explicação do comando ainda não está disponível..")
const returnMessage = CMD_P[searchCmds].info.replace(/#prefixo#/g, prefix)
reply(returnMessage)
break

case 'infocmd_add': case 'add_infocmd':
if(!SoDono) return reply(enviar.msg.donosmt)
const CMD_S = JSON.parse(fs.readFileSync("./config/media/infocmd.json")); 
dirInfoCmd = "./config/media/infocmd.json"
var [y, x] = q.split('|')
if(!q.includes("|")) return reply(`Faltando a primeira |\nExemplo: ${prefix+command} comando|info`)
if(q.lastIndexOf("|") < 0) return reply(`Faltando a segunda |\nExemplo: ${prefix+command} comando|info`)
kirv = []
for (i of CMD_S) {kirv.push(i.command)}
if(kirv.indexOf(y) >= 0) return reply("A informação sobre este comando já foi adicionada, ou seja, já é existente...")
CMD_S.push({command: y, info: x})
fs.writeFileSync(dirInfoCmd, JSON.stringify(CMD_S, null, 2))
reply(`Informação sobre o comando ${y} foi atribuida a ele com sucesso...`)
break 

case 'infocmd_del': case 'del_infocmd':
if(!SoDono) return reply(enviar.msg.donosmt) 
const CMD_D = JSON.parse(fs.readFileSync("./config/media/infocmd.json")); 
var i7 = CMD_D.map(i => i.command).indexOf(q.trim())
dirInfoCmd = "./config/media/infocmd.json"
CMD_D.splice(i7, 1)
fs.writeFileSync(dirInfoCmd, JSON.stringify(CMD_D, null, 2))
reply(`A informação sobre o comando ${q} foi removida com sucesso...`)
break

case 'legendabv':  
  if (!isGroup) return reply(enviar.msg.grupo)
  if (!isGroupAdmins) return reply(enviar.msg.adm)
  if (args.length < 1) return reply('*Escreva a mensagem de boas-vindas*')
  
  let legendaTeks = body.slice(11).trim()  // <<< Nome exclusivo da variável aqui

  if (isWelkom2) {
    dataGp[0].wellcome[1].legendabv = legendaTeks
    setGp(dataGp)
    reply('*Mensagem de boas-vindas definida com sucesso!*')
  } else {
    reply(`Ative o ${prefix}bemvindo2 1`)
  }
  break

case 'legendasaiu':
    if (!isGroup) return reply(enviar.msg.grupo)
    if (!isGroupAdmins) return reply(enviar.msg.adm)
    if (q.length < 1) return reply('Escreva a mensagem de saída ou para desativar, use: 0')

    if (isWelkom2) {
        dataGp[0].wellcome[1].legendasaiu = Number(q) === 0 ? 0 : q
        setGp(dataGp)
        reply('Mensagem de saída definida com sucesso!')
    } else {
        reply(`Ative o ${prefix}bemvindo 1 para o recurso de edição de mensagem.`)
    }
    break;


case 'legenda_estrangeiros': 
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(args.length < 1) return reply('*Escreva a mensagem de remoção de estrangeiros*')
if(isAntifake) {
dataGp[0].legenda_estrangeiro = q
setGp(dataGp)
reply('*Mensagem de remoção de estrangeiros definida com sucesso!*')
} else {
reply(`Ative o antifake primeiro com ${prefix}antifake 1`)
}
break









case 'listanegra': {
  if (!isGroup) return reply(enviar.msg.grupo)
  if (!isGroupAdmins && !SoDono) return reply('Precisa ser Dono ou Adm')

  let alvo = null

  if (info.message?.extendedTextMessage?.contextInfo?.participant) {
    alvo = info.message.extendedTextMessage.contextInfo.participant
  } else if (q) {
    const numero = q.replace(/\D/g, '')
    if (numero.length < 10) return reply('❌ Número inválido.')
    alvo = numero + '@s.whatsapp.net'
  }

  if (!alvo) {
    return reply(
      '❌ Marque a mensagem ou use:\n/addautoban 559999999999'
    )
  }

  const baseAlvo = alvo.replace(/\D/g, '')
  const gp = getGp(from)

  const jaExiste = gp.listanegra.some(n =>
    n.replace(/\D/g, '') === baseAlvo
  )

  if (jaExiste) return reply('*Esse número já está na lista negra*')

  gp.listanegra.push(baseAlvo + '@s.whatsapp.net')
  setGp(from, gp)

  reply('🚫 *Número adicionado à lista negra (autoban)*')
  break
}






case 'playmp4':  case "playvideo": 
case "playvid": {
try {
if(!q.trim()) return reply(`🎥 Exemplo: ${prefix}play_video nome do vídeo\n\n📝 O vídeo será baixado. Se não baixar, pode ser que o YouTube bloqueou o download.`)
reply(`❤️ *Buscando por ${q} Aguarde...* ❤️`);
// 🔍 Busca informações do vídeo na API
data = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/pesquisa_ytb?nome=${q}&apikey=${API_SANDRO_MD}`)
 
// ⏱️ Verifica se o vídeo não é muito longo (mais de 1 hora)
if(data[0]?.tempo?.length >= 7) return reply("⏰ Desculpe, este vídeo é muito grande (mais de 1 hora). Por favor, escolha um vídeo mais curto.")
 
var N_E = " ❌ Não encontrado."
 
// 📝 Monta mensagem bonita com informações do vídeo
var bla = `
> Titulo: ${data[0]?.titulo||N_E}
> Tempo: ${data[0]?.tempo||N_E}
> Postado: ${data[0]?.postado||N_E}
> Descrição: ${data[0]?.desc||N_E}

■■■■■ 100% `
 
// 🖼️ Envia a thumbnail (miniatura) do vídeo
sandro.sendMessage(from, {image: {url: data[0]?.thumb || fotobot}, caption: bla}, {quoted: info})
 
// 🎥 Envia o arquivo de vídeo
sandro.sendMessage(from, {video: {url: `https://api.bronxyshost.com.br/api-bronxys/play_video?nome_url=${q}&apikey=${API_SANDRO_MD}`}, mimetype: "video/mp4", fileName: data[0]?.titulo || "play.mp4"}, {quoted: info}).catch(e => {
return reply("❌ Erro ao baixar vídeo. Tente novamente...")
})
} catch (e) {
console.log(e)
return reply("🔍 Seja mais específico ou tente outro nome. / Erro na busca");
}
}
break;


  
case 'delautoban': 
case 'tirardalista':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins && !SoDono) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(!mrc_ou_numero) return reply("Marque a mensagem do usuário com o comando ou utilize o comando com o número do usuário que deseja tirar da lista negra..")
if(!dataGp[0].listanegra.includes(mrc_ou_numero)) return reply('*Esse Número não esta incluso*')
var i = dataGp[0].listanegra.indexOf(mrc_ou_numero)
dataGp[0].listanegra.splice(i, 1)
setGp(dataGp)
reply(`*Número foi removido da lista de autoban*`)
break



case 'roletarussa':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
TAMBOR = ["na perna.","na cabeça.","no pescoço.","no peito.","no olho.","no estômago.","na boca.","na perna.","na testa.","no braço."]
C2 = somembros[Math.floor(Math.random() * somembros.length)]
if(somembros.length == 0) return reply("Não existe *membros comuns* no grupo, somente admins.")
if(C2 === sender || C2 === botNumber) return mentions(`Escolhi *@${C2.split('@')[0]}*, mas conseguiu escapar...`, [C2], true)
if(C2 === sender || C2 === numerodono[0]) return mentions(`Escolhi *@${C2.split('@')[0]}*, mas conseguiu escapar...`, [C2], true)		
reply(`A escolha é minha! 1 membro irá morrer, que os jogos comecem...`)
mentions(`Que pena... você não sobreviveu ao meu jogo *@${C2.split('@')[0]}*, hora de enterrar o cadáver, infelizmente morreu com tiro ${TAMBOR[Math.floor(Math.random() * (TAMBOR.length))]}`, [C2], true)
setTimeout(() => {
sandro.groupParticipantsUpdate(from, [C2], "remove")
}, 6000)
break

case 'createimg': case 'texttoimage': case 'imagine':
if(!q) return reply(`O que você deseja criar amiguinho? Coloque após o comando o que você deseja criar... Por exemplo: ${prefix+command} macaco dirigindo uma bmw`);
try {
await replyWithReaction('Olá, estou criando a imagem a partir de seu questionamento, aguarde senhor(a)...', {react: {text: '🎨', key: info.key}});
dataResultAI = await fetchJson(`https://hercai.onrender.com/v3/text2image?prompt=${q}`);
  await sandro.sendMessage(from, {image: {url: dataResultAI.url}}, {quoted: info});
} catch(error) {
await replyWithReaction(mess.error(), {react: {text: '❌', key: info.key}});
}
break

   case 'chatgpt':



/*
case 'photoleap': 
try {
if (!q) return reply("O que você deseja criar através de seu questionamento?")
reply("Criando uma imagem a partir de seu questionamento, aguarde...");
data = await fetchJson(`https://vihangayt.me/tools/photoleap?q=${q}`)
sandro.sendMessage(from, {image: {url: data.data}}, {quoted: info}).catch(() => {
return reply(mess.error())
})
} catch {
reply(mess.error())
}
break
*/
case 'dinextenso': // Invertexto-API com 3.000 requisições mensais, fique atento! [❤️]
if(!q.includes(".")) return reply(`❌️ - Coloque apenas números para realizar a transformação de digitos numérico para números em extenso.\nPor exemplo: *${prefix}dinextenso 500.00 ou 756.50*, tudo que você colocar os valores deve colocar um ponto(.) para converter os valores.`)
try {
data = await fetchJson(`https://api.invertexto.com/v1/number-to-words?token=${API_KEY_INVERTEXTO}&number=${q}&language=pt&currency=BRL`);
reply(`*${q}* : ${capitalizeFirstLetter(data.text)}`);
} catch(e) {
reply(mess.error())
}
break;

case 'validarcpf': case 'validarcnpj':
if(command === "validarcpf") {
if(!q) return reply("Digite um CPF para realizar a verificação se é válido ou inválido...")
if(q.length < 11) return reply("Você digitou um cpf que não tem 11 dígitos, verifique se colocou pontuação, se estiver retire.")
try {
data = await fetchJson(`https://api.invertexto.com/v1/validator?token=${API_KEY_INVERTEXTO}&value=${q}`)
if(data.valid == true) return reply("Válido.")
if(data.valid == false) return reply("Inválido.")
} catch(e) {
reply(mess.error())
}
} else if(command === "validarcnpj") {
if(!q) return reply("Digite um CNPJ para realizar a verificação se é válido ou inválido!")
if(q.length < 14) return reply("Você digitou um CNPJ que não tem 14 dígitos, verifique se colocou pontuação, se estiver retire.")
try {
data = await fetchJson(`https://api.invertexto.com/v1/validator?token=${API_KEY_INVERTEXTO}&value=${q}`)
if(data.valid == true) return reply("Válido.")
if(data.valid == false) return reply("Inválido.")
} catch(e) {
reply(mess.error())
}
}
break;

 
 
 



/*
case 'bard':
try {
if(!q) return reply("Você esqueceu de perguntar ao lado do comando.")
let { key } = await sandro.sendMessage(from, {text: `Estou processando sua pergunta, isso pode levar alguns segundos...`}, {quoted: info})
r = await fetchJson(`https://yurimodz-apis.xyz/api/ia/gbard?query=${q}&apikey=${SANDRO_MD_BOT}`)
await sandro.sendMessage(from, {text: mess.respostaBard(r), edit: key});
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
reply(mess.error())
} else {
reply(mess.error())
}
}
break
*/
case 'wikipedia': case 'wiki':
try {
  if(!q) return reply(`Exemplo: ${prefix+command} JavaScript`)
reply(`Aguarde, pesquisando sobre o que está perguntando..`)
wikip = await axios.get(`https://pt.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=${encodeURIComponent(q)}&prop=info&inprop=url`);
wikis = await axios.get(`https://pt.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&pageids=${wikip.data.query.search[0].pageid}`);
msgSemQuoted(mess.wikiResposta(wikis))
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
reply('Nada foi encontrado, com base em sua pergunta.. Especifique um pouco!')
} else {
reply('Nada foi encontrado, com base em sua pergunta.. Especifique um pouco!')
}
}
break
/*
case 'gptvoz':
if(!q) return reply("Você esqueceu de perguntar ao lado do comando.")
reply(`Estou processando sua pergunta. Isso pode levar alguns segundos...`)
nznk = await fetchJson(`https://yurimodz-apis.xyz/api/ia/gpt?query=${q}&apikey=${SANDRO_MD_BOT}`)
const gpts = require('./assets/funcoes/gtts')('pt')
ranm = getRandom('.mp3')
rano = getRandom('.ogg')
gpts.save(ranm, `${nznk.resultado}`, function() {
exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
sandro.sendMessage(from, {audio: fs.readFileSync(ranm), ptt:false, mimetype: "audio/mpeg"}, {quoted: info})
DLT_FL(ranm)
DLT_FL(rano)
})
})
break
*/



/*
case 'summerize':
if(!q) return reply(`Você esqueceu de colocar o que você deseja resumir ao lado do comando.`)
try {
let { key } = await sandro.sendMessage(from, {text: `Estou resumindo o texto solicitado. Isso pode levar alguns segundos...`}, {quoted: info})
promptUser = `Faça um resumo básico do texto apresentado: ${q}`
anu1 = await fetchJson(`https://yurimodz-apis.xyz/api/ia/gpt?query=${promptUser}&apikey=${SANDRO_MD_BOT}`)
await sandro.sendMessage(from, {text: mess.respostaResumida(anu1), edit: key})
} catch(e) {
return reply(mess.error())
}
break
*/




case 'cotacao': {
moedas = ["dolar", "euro", "bitcoin", "libra", "ethereum"]
if(!moedas.includes(q_2)) return reply("A moeda está inexistente em meu banco de dados!\n*Disponíveis:* dolar, euro, bitcoin, libra, ethereum\n*Observação:* Use letras minúsculas para não ocorrer erros!")
if (encodeURIComponent(q) == "dolar") {
var money = "USD-BRL";
} else if (encodeURIComponent(q) == "euro") {
var money = "EUR-BRL";
} else if (encodeURIComponent(q) == "bitcoin") {
var money = "BTC-BRL";
} else if (encodeURIComponent(q) == "libra") {
var money = "GBP-BRL";
} else if (encodeURIComponent(q) == "ethereum") {
var money = "ETH-BRL";
}
axios.get(`https://economia.awesomeapi.com.br/last/${money}`)
.then((response) => {
if (encodeURIComponent(q) == "dolar") {
var resposta = response.data.USDBRL;
} else if (encodeURIComponent(q) == "euro") {
var resposta = response.data.EURBRL;
} else if (encodeURIComponent(q) == "bitcoin") {
var resposta = response.data.BTCBRL;
} else if (encodeURIComponent(q) == "ethereum") {
var resposta = response.data.ETHBRL;
} else if (encodeURIComponent(q) == "libra") {
var resposta = response.data.GBPBRL;
}
reply(mess.quoteCurrencies(resposta));
}).catch((response) => {
reply("Erro ao obter informações!️");
});
}
break;






case 'jeff': case 'simi':
const simi = require('./simi.js')
setTimeout(() => { reagir(from, "🤓") }, 300)

if (!q) return reply(`Pergunte algo junto ao comando...`)

try {
let datasimi = simi.response(q)

if (!datasimi) {
return reply("Não sei responder ainda 🤓")
}

return reply(datasimi)

} catch (e) {
console.log(e)
return reply("Resposta não encontrada..")
}
break

case 'simih':
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isSimi) return reply('O modo simi está ativo')
dataGp[0].simi1 = true
setGp(dataGp)
reply('Ativado com sucesso o modo simi neste grupo..')
} else if(Number(args[0]) === 0) {
if(!isSimi) return reply('Já está Desativado.')
dataGp[0].simi1 = false
setGp(dataGp)
reply('Desativando o modo simi com sucesso neste grupo.️')
} else {
reply('1 para ativar, 0 para desativar, lerdao vc emkkkk')
}
break

case 'simih2':
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isSimi2) return reply('O modo Simi está ativo')
dataGp[0].simi2 = true
setGp(dataGp)
reply('Ativado com sucesso o modo simi neste grupo..')
} else if(Number(args[0]) === 0) {
if(!isSimi2) return reply('Já está Desativado.')
dataGp[0].simi2 = false
setGp(dataGp)
reply('Desativando o modo simi com sucesso neste grupo.️')
} else {
reply('1 para ativar, 0 para desativar, lerdao vc emkkkk')
}
break

case 'autofigu': case 'autosticker':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isAutofigu) return reply('Ja esta ativo')
dataGp[0].autosticker = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de auto figurinhas neste grupo.')
} else if(Number(args[0]) === 0) {
if(!isAutofigu) return reply('Ja esta Desativado')
dataGp[0].autosticker = false
setGp(dataGp)
reply('Desativou com sucesso o recurso de auto figurinhas neste grupo.️')
} else {
reply('1 para ativar, 0 para desativar')
}
break



//esse comando foi alterado por conta de bugs☑️













case 'vertinder': {
    // Carregar os dados do Tinder
    let profileData = {};
    try {
        profileData = loadTinderData();
    } catch (err) {
        return reply("Erro ao carregar os perfis. Tente novamente.");
    }

    // Verificar se existem perfis registrados
    if (Object.keys(profileData).length === 0) {
        return reply("Não há perfis registrados no Tinder ainda.");
    }

    // Definir a foto padrão para todos os perfis
    const fotoPadrao = "https://i.imgur.com/PQXQm7g.jpeg";

    // Preparar a resposta com todos os perfis
    let allProfiles = "Perfis registrados no Tinder:\n\n";
    for (let telefone in profileData) {
        const userProfile = profileData[telefone];
        allProfiles += `Nome: ${userProfile.nome}\nIdade: ${userProfile.idade}\nStatus: ${userProfile.status}\nBio: ${userProfile.bio}\nTelefone: ${userProfile.telefone}\n\n`;
    }

    // Enviar todos os perfis com a foto padrão, apenas uma vez
    try {
        sandro.sendMessage(from, {
            image: { url: fotoPadrao },
            caption: allProfiles
        }, { quoted: info });
    } catch (err) {
        return reply("Erro ao enviar os perfis. Tente novamente.");
    }
}
break;

case 'limpartinder': {
if(!SoDono) return reply(enviar.msg.donosmt)
    try {
        // Salvar um objeto vazio para limpar todos os dados
        saveTinderData({});
        return reply("Todos os perfis do Tinder foram apagados com sucesso.");
    } catch (err) {
        return reply("Erro ao tentar limpar os perfis. Tente novamente.");
    }
}
break;



case 'bangp':

if(!isGroup) return reply(enviar.msg.grupo)
if(!SoDono) return reply(enviar.msg.donosmt)
if(command == 'bangp'){
if(isBanchat) return reply(`Este grupo já está banido.`)
dataGp[0].bangp = true
setGp(dataGp)
    return sandro.sendMessage(from, {
      audio: { url: './assets/audio/bangp.mp3' },
      mimetype: 'audio/mpeg',
      ptt: false
    }, { quoted: info });
} else {
if(!isBanchat) return reply(`Este grupo não está mais banido.`)
dataGp[0].bangp = false
setGp(dataGp)
reply(`Grupo desbanido...`)
}
break

case 'boton':
case 'botoff':
if(!SoDono) return reply(enviar.msg.donosmt)
if(!isBotoff) {
nescessario.botoff = true
setNes(nescessario)
reply(`Desativando funções e parando a execução de comandos do ${NomeDoBot}`)
} else if(isBotoff) {
nescessario.botoff = false
setNes(nescessario)
reply(`Ativando todos os funcionamentos do ${NomeDoBot}`)
}
break


case 'nsfw':  
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(args.length < 1) return reply('Hmmmm')
if(Number(args[0]) === 1) {
if(isNsfw) return reply('O modo nsfw já está ativo.')
dataGp[0].nsfw = true
setGp(dataGp)
reply(`✓ Ativado com sucesso o modo nsfw +18 no grupo: *${groupMetadata.subject}*`)
} else if(Number(args[0]) === 0) {
if(!isNsfw) return reply('O modo nsfw já está desativado.')  
dataGp[0].nsfw = false
setGp(dataGp)
reply(`✓ Modo Nsfw +18 desativado com sucesso no grupo: *${groupMetadata.subject}*`)
} else {
reply('1 para ativar, 0 para desligar')
}
break

case 'antipalavrão':
case 'antipalavrao':  
case 'antipalavra':    
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply(`1/0, Exemplo: ${prefix + command} 1`)
if(Number(args[0]) === 1) {
if(isPalavrao) return reply('Ja esta ativo.')
dataGp[0].antipalavrao.active = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de anti palavras hardcore neste grupo.')
} else if(Number(args[0]) === 0) {
if(!isPalavrao) return reply('Ja esta Desativado')
dataGp[0].antipalavrao.active = false
setGp(dataGp)
reply('Desativou com sucesso o recurso de anti palavra harcore neste grupo.️')
} else {
reply('1 para ativar, 0 para desativar')
}
break





case 'listapalavrão': case 'listapalavra':

if(!isPalavrao) return reply('Anti palavrão desativado!')
let lbw = `Esta é a lista de palavrão\nTotal: ${isPalavras.length}\n`
for (let i of isPalavras) {
lbw += `➸ ${i}\n`
}
await reply(lbw)
break
      

case 'tell': {
    const telefone = body.split(' ')[1];

    if (!telefone) {
        return reply(`Informe um número de telefone.\n\nExemplo:\n/telefonev2 31935009833`);
    }

    if (telefone.length < 10) {
        return reply(`Número inválido.`);
    }

    try {

        reply(`Consultando telefone ${telefone}... Aguarde...`);

        const fetch = require('node-fetch');

        const response = await fetch(`https://systemzone.store/api/consultas/telefonev2?apikey=${SANDROPX}&phone=${telefone}`);
        const data = await response.json();

        if (!data.status || !data.result || !data.result.body || data.result.total_results === 0) {
            return reply(`Nenhum resultado encontrado para ${telefone}.`);
        }

        let resultado = `══════ CONSULTA TELEFONE ══════\n\n`;
        resultado += `Consulta: ${data.result.query}\n`;
        resultado += `Total encontrado: ${data.result.total_results}\n`;
        resultado += `Fontes utilizadas: ${data.result.sources_used?.join(', ') || 'Não informado'}\n\n`;

        data.result.body.forEach((pessoa, index) => {
            resultado += `Resultado ${index + 1}\n`;
            resultado += `CPF: ${pessoa.cpf || 'Não informado'}\n`;
            resultado += `Nome: ${pessoa.name || 'Não informado'}\n`;
            resultado += `Nascimento: ${pessoa.birth_date || 'Não informado'}\n`;
            resultado += `Mãe: ${pessoa.mother_name || 'Não informado'}\n`;
            resultado += `Tipo de Telefone: ${pessoa.phone_type ?? 'Não informado'}\n`;
            resultado += `Fonte: ${pessoa.source || 'Não informado'}\n`;
            resultado += `-----------------------------------\n\n`;
        });

        resultado += `══════════════════════════════════`;

        reply(resultado);

    } catch (err) {
        console.error(err);
        reply(`Erro ao consultar telefone.`);
    }
}
break;


case 'supreme': {
  try {
    if (!q) return reply('❌ Use: /supreme seu texto')

    const texto = encodeURIComponent(q.trim())
    const url = `https://api.popcat.xyz/v2/supreme?text=${texto}`

    await sandro.sendMessage(from, {
      image: { url }
    }, { quoted: info })

  } catch (e) {
    console.log(e)
    reply('❌ Erro ao gerar imagem Supreme.')
  }
}
break

case 'fundir':
 {
  try {
    const mentions = info.message?.extendedTextMessage?.contextInfo?.mentionedJid || []
    if (mentions.length < 2) {
      return reply('❌ Marque duas pessoas.\nEx: /fundir @user1 @user2')
    }

    const user1 = mentions[0]
    const user2 = mentions[1]

    // fotos de perfil
    let foto1, foto2
    try {
      foto1 = await sandro.profilePictureUrl(user1, 'image')
    } catch {
      foto1 = 'https://cdn.popcat.xyz/avatar.png'
    }

    try {
      foto2 = await sandro.profilePictureUrl(user2, 'image')
    } catch {
      foto2 = 'https://cdn.popcat.xyz/popcat.png'
    }

    // porcentagem aleatória
    const chance = Math.floor(Math.random() * 101)

    let resultado = chance >= 50
      ? '💘 DEU MATCH! Esse casal promete!'
      : '💔 Não rolou dessa vez...'

    const api = `https://api.popcat.xyz/v2/ship?user1=${encodeURIComponent(foto1)}&user2=${encodeURIComponent(foto2)}`

    const legenda = `
😍𝗦𝗛𝗜𝗣 𝗗𝗘 𝗔𝗠𝗢𝗥😍
> @${user1.split('@')[0]}
❤️
> @${user2.split('@')[0]}
- Compatibilidade: *${chance}%*
${resultado}
`.trim()

    await sandro.sendMessage(from, {
      image: { url: api },
      caption: legenda,
      mentions: [user1, user2]
    }, { quoted: info })

  } catch (e) {
    console.log(e)
    reply('❌ Erro ao calcular o ship.')
  }
}
break

case 'sadcat': {
  try {
    if (!q) return reply('❌ Use: /sadcat seu texto')

    const texto = encodeURIComponent(q.trim())
    const url = `https://api.popcat.xyz/v2/sadcat?text=${texto}`

    await sandro.sendMessage(from, {
      image: { url }
    }, { quoted: info })

  } catch (e) {
    console.log(e)
    reply('❌ Erro ao gerar imagem do SadCat.')
  }
}
break

case 'pikachu': {
  try {
    if (!q) return reply('❌ Use: /pikachu seu texto')

    const texto = encodeURIComponent(q.trim())
    const url = `https://api.popcat.xyz/v2/pikachu?text=${texto}`

    await sandro.sendMessage(from, {
      image: { url }
    }, { quoted: info })

  } catch (e) {
    console.log(e)
    reply('❌ Erro ao gerar imagem do Pikachu.')
  }
}
break

case 'nokia': {
  try {
    let alvo = info.message?.extendedTextMessage?.contextInfo?.mentionedJid?.[0] || sender

    // pega foto do marcado ou de quem usou
    let foto
    try {
      foto = await sandro.profilePictureUrl(alvo, 'image')
    } catch {
      foto = 'https://cdn.popcat.xyz/popcat.png'
    }

    const api = `https://api.popcat.xyz/v2/nokia?image=${encodeURIComponent(foto)}`

    await sandro.sendMessage(from, {
      image: { url: api }
    }, { quoted: info })

  } catch (e) {
    console.log(e)
    reply('❌ Erro ao gerar a imagem Nokia.')
  }
}
break


case 'facts': {
  try {
    if (!q) return reply('❌ Use: /facts Seu texto aqui')

    const texto = encodeURIComponent(q.trim())
    const url = `https://api.popcat.xyz/v2/facts?text=${texto}`

    await sandro.sendMessage(info.key.remoteJid, {
      image: { url },
    }, { quoted: info })

  } catch (e) {
    console.log(e)
    reply('❌ Erro ao gerar a imagem.')
  }
}
break





case 'alerta': {
  try {
    if (!q) return reply('❌ Use: /alerta texto')

    const texto = encodeURIComponent(q.trim())
    const url = `https://api.popcat.xyz/v2/alert?text=${texto}`

    await sandro.sendMessage(from, {
      image: { url },
    }, { quoted: info })

  } catch (e) {
    console.log(e)
    reply('❌ Erro ao gerar o alerta.')
  }
}
break

case 'biden': {
  try {
    if (!q) return reply('❌ Use: /biden Ola tudo bem ?')

    const texto = encodeURIComponent(q.trim())
    const url = `https://api.popcat.xyz/v2/biden?text=${texto}`

    await sandro.sendMessage(from, {
      image: { url },
    }, { quoted: info })

  } catch (e) {
    console.log(e)
    reply('❌ Erro ao gerar imagem do Biden.')
  }
}
break

case 'applemusic': {
  if (!q) return reply('❌ Digite o nome da música.\nEx: /applemusic Plug de São Paulo')

  try {
    reply(`🔎 Buscando por *${q}*... Aguarde`)

    const query = encodeURIComponent(q)
    const apiUrl = `${zerosite}/api/applemusic/search?query=${query}&apikey=${API_KEY_ZEROTWO}`

    const res = await fetch(apiUrl)
    const data = await res.json()

    if (!data.status || !data.resultados || data.resultados.length === 0) {
      return reply('❌ Nenhum resultado encontrado.')
    }

    // Primeiro resultado
    const m = data.resultados[0]

    const titulo = m.titulo || 'Desconhecido'
    const artista = m.artista?.nome || 'Desconhecido'
    const album = m.album || 'Desconhecido'
    const genero = m.genero || 'Não informado'
    const duracao = m.duracao ? `${m.duracao}s` : 'N/A'
    const lancamento = m.dataLancamento
      ? new Date(m.dataLancamento).toLocaleDateString('pt-BR')
      : 'Desconhecido'

    const texto = `> 🍎 *APPLE MUSIC*

> 🎵 *Música:* ${titulo}
> 👤 *Artista:* ${artista}
> 💿 *Álbum:* ${album}
> 🎼 *Gênero:* ${genero}
> ⏱️ *Duração:* ${duracao}
> 📅 *Lançamento:* ${lancamento}

> 🔗 *Link:* ${m.musica}`

    await sandro.sendMessage(from, {
      image: { url: m.imagem },
      caption: texto
    }, { quoted: info })

    if (m.preview) {
      await sandro.sendMessage(from, {
        audio: { url: m.preview },
        mimetype: 'audio/mp4',
        ptt: false
      }, { quoted: info })
    }

  } catch (err) {
    console.error(err)
    reply('❌ Erro ao buscar música no Apple Music.')
  }
}
break

case 'botões':
case 'botoes': {
    reagir(from, "⚙️")
    const caminho = './config/botoes.json'
    
if (!SoDono && !isnit && !info.key.fromMe) return reply(enviar.msg.donosmt); 

    // ✅ PEGA VALOR 1 OU 0
    const valor = args[0]
    if (!['0', '1'].includes(valor)) return reply(`📌 *Uso correto:*\n\n✅ ${prefix}botões 1  →  Ativar botões\n❌ ${prefix}botões 0  →  Desativar botões`)

    // ✅ CRIA ARQUIVO AUTOMATICAMENTE SE NÃO EXISTIR
    if (!fs.existsSync(caminho)) fs.writeFileSync(caminho, JSON.stringify({ status: 1 }, null, 2))

    // ✅ SALVA NOVA CONFIGURAÇÃO
    const cfg = JSON.parse(fs.readFileSync(caminho))
    cfg.status = Number(valor)
    fs.writeFileSync(caminho, JSON.stringify(cfg, null, 2))

    const texto = valor === '1'
        ? '✅ Botões *ATIVADOS* com sucesso!!'
        : '❌ Botões *DESATIVADOS* com sucesso!!'

    reply(texto)
}
break


case 'menubotao': {
if(!SoDono) return reply(enviar.msg.donosmt)
  if (!q) return reply(`⚠️ Use o comando assim:\n${prefix}mudarfoto https://link_da_imagem.com/fotobot.jpg`);

  try {
    const logosPath = './config/logos.json';

    // Carrega o JSON atual
    let logos = {};
    if (fs.existsSync(logosPath)) {
      logos = JSON.parse(fs.readFileSync(logosPath, 'utf-8'));
    }

    // Atualiza o campo logo com o novo link
    logos.logo = [q];

    // Salva no arquivo
    fs.writeFileSync(logosPath, JSON.stringify(logos, null, 2), 'utf-8');

    reply(`✅ Foto do menu alterada com sucesso!\nNovo link salvo:\n${q}`);
  } catch (err) {
    console.log("Erro ao mudar foto:", err);
    reply("❌ Erro ao mudar a foto.");
  }

  break;
}

case 'nuke': {
if (!SoDono && !isnit && !info.key.fromMe) return reply(enviar.msg.donosmt); 
if (!isGroup) return reply('❌ Só funciona em grupos.')

  let metadata
  try {
    metadata = await sandro.groupMetadata(from)
  } catch (err) {
    console.log(err)
    return reply('❌ Não consegui acessar os dados do grupo.\nTente novamente.')
  }

  const botJid = sandro.user.id.split(':')[0] + '@s.whatsapp.net'
  const participants = metadata.participants

  reply('💣 *NUKE INICIADO*')

  for (const p of participants) {
    const user = p.id

    // ❌ NÃO REMOVE O BOT
    if (user === botJid) continue

    // ❌ NÃO REMOVE ADM (SEGURANÇA)
    if (p.admin) continue

    try {
      await sandro.groupParticipantsUpdate(from, [user], 'remove')
      await new Promise(res => setTimeout(res, 2000))
    } catch (err) {
      console.log('Erro ao remover:', user)
    }
  }

  reply('✅ *NUKE FINALIZADO*')
}
break

case 'captain': case 'phlogo': case 'graffitiwall': case 'deadpool': case 'blackpink': case 'vintage3d': case 'glitter':
try {//By: 𖧄 PAULOZINXZ 𖧄
//Canal: https://whatsapp.com/channel/0029Vb8tJ5x77qVZnxr3oC3C
const textin = args.join(" ")
if (!textin) return reply("KD o texto?")
if (!textin.includes("/")) 
return reply(`Cade a / precisa dela para a separação..\nExemplo: ${prefix + command} zero/two`)
const [txt1, txt2] = textin.split("/")
if (!txt1 || !txt2) 
return reply("Você precisa informar dois textos separados por `/`.\nExemplo: `Texto1/Texto2`")
reply(`❤️ *Buscando por ${q} Aguarde...* ❤️`);
const response = await fetch(`${zerosite}/api/ephoto/${command}?texto=${encodeURIComponent(txt1)}&texto2=${encodeURIComponent(txt2)}&apikey=${API_KEY_ZEROTWO}`)
if (!response.ok) throw new Error("Erro ao acessar a API.")
const buffer = await response.arrayBuffer()
await sandro.sendMessage(from, { image: Buffer.from(buffer) }, { quoted: info })
} catch (e) {
console.log(e)
reply("Erro ao criar sua logo! Tente novamente mais tarde.")
}
break







case 'lgbt': {
    reagir(from, "🏳️‍🌈");

    try {
        let linkImagem;

        const isQuotedImage = info.message?.extendedTextMessage?.contextInfo?.quotedMessage?.imageMessage;
        const isImage = info.message?.imageMessage;

        if (isQuotedImage || isImage) {
            const media = isQuotedImage
                ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage
                : info.message.imageMessage;

            const stream = await downloadContentFromMessage(media, 'image');
            let buffer = Buffer.from([]);

            for await (const chunk of stream) {
                buffer = Buffer.concat([buffer, chunk]);
            }

            const FormData = require('form-data');
            const form = new FormData();

            form.append('reqtype', 'fileupload');
            form.append('fileToUpload', buffer, { filename: 'image.jpg' });

            const fetch = require('node-fetch');
            const uploadRes = await fetch('https://catbox.moe/user/api.php', {
                method: 'POST',
                body: form,
            });

            const uploadUrl = (await uploadRes.text()).trim();

            if (!uploadUrl.startsWith('http')) {
                return reply('❌ Falha ao enviar imagem para o servidor.');
            }

            linkImagem = uploadUrl;
        } else {
            const numeroAutor = info.key.participant || info.key.remoteJid;
            const fotoPerfil = await sandro.profilePictureUrl(numeroAutor, 'image').catch(() => null);

            if (!fotoPerfil) {
                return reply('❌ Não foi possível obter sua foto de perfil. Configure uma no WhatsApp e tente novamente.');
            }

            linkImagem = fotoPerfil;
        }

        const apiURL = `${zerosite}/api/canvas/lgbt?link=${encodeURIComponent(linkImagem)}&apikey=${API_KEY_ZEROTWO}`;

        const res = await fetch(apiURL);

        if (!res.ok) {
            return reply(`❌ Erro ao gerar imagem: ${res.statusText}`);
        }

        const buffer = await res.buffer();

        await sandro.sendMessage(from, {
            image: buffer,
            caption: '🏳️‍🌈'
        }, { quoted: info });

    } catch (e) {
        console.error('Erro no comando /lgbt:', e);
        reply('❌ Ocorreu um erro ao gerar a imagem. Tente novamente mais tarde.');
    }

    break;
}

case 'pixelate': {
    reagir(from, "🧊");

    try {
        let linkImagem;

        const isQuotedImage = info.message?.extendedTextMessage?.contextInfo?.quotedMessage?.imageMessage;
        const isImage = info.message?.imageMessage;

        if (isQuotedImage || isImage) {
            const media = isQuotedImage
                ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage
                : info.message.imageMessage;

            const stream = await downloadContentFromMessage(media, 'image');
            let buffer = Buffer.from([]);

            for await (const chunk of stream) {
                buffer = Buffer.concat([buffer, chunk]);
            }

            const FormData = require('form-data');
            const form = new FormData();

            form.append('reqtype', 'fileupload');
            form.append('fileToUpload', buffer, { filename: 'image.jpg' });

            const fetch = require('node-fetch');
            const uploadRes = await fetch('https://catbox.moe/user/api.php', {
                method: 'POST',
                body: form,
            });

            const uploadUrl = (await uploadRes.text()).trim();

            if (!uploadUrl.startsWith('http')) {
                return reply('❌ Falha ao enviar imagem para o servidor.');
            }

            linkImagem = uploadUrl;
        } else {
            const numeroAutor = info.key.participant || info.key.remoteJid;
            const fotoPerfil = await sandro.profilePictureUrl(numeroAutor, 'image').catch(() => null);

            if (!fotoPerfil) {
                return reply('❌ Não foi possível obter sua foto de perfil. Configure uma no WhatsApp e tente novamente.');
            }

            linkImagem = fotoPerfil;
        }

        const apiURL = `${zerosite}/api/canvas/pixelate?link=${encodeURIComponent(linkImagem)}&apikey=${API_KEY_ZEROTWO}`;

        const res = await fetch(apiURL);

        if (!res.ok) {
            return reply(`❌ Erro ao gerar imagem: ${res.statusText}`);
        }

        const buffer = await res.buffer();

        await sandro.sendMessage(from, {
            image: buffer,
            caption: '🧊 Sua foto pixelada!'
        }, { quoted: info });

    } catch (e) {
        console.error('Erro no comando /pixelate:', e);
        reply('❌ Ocorreu um erro ao gerar a imagem. Tente novamente mais tarde.');
    }

    break;
}

case 'rip': {
    reagir(from, "🪦");

    try {
        let linkImagem;

        const isQuotedImage = info.message?.extendedTextMessage?.contextInfo?.quotedMessage?.imageMessage;
        const isImage = info.message?.imageMessage;

        if (isQuotedImage || isImage) {
            const media = isQuotedImage
                ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage
                : info.message.imageMessage;

            const stream = await downloadContentFromMessage(media, 'image');
            let buffer = Buffer.from([]);

            for await (const chunk of stream) {
                buffer = Buffer.concat([buffer, chunk]);
            }

            const FormData = require('form-data');
            const form = new FormData();

            form.append('reqtype', 'fileupload');
            form.append('fileToUpload', buffer, { filename: 'image.jpg' });

            const fetch = require('node-fetch');
            const uploadRes = await fetch('https://catbox.moe/user/api.php', {
                method: 'POST',
                body: form,
            });

            const uploadUrl = (await uploadRes.text()).trim();

            if (!uploadUrl.startsWith('http')) {
                return reply('❌ Falha ao enviar imagem para o servidor.');
            }

            linkImagem = uploadUrl;
        } else {
            const numeroAutor = info.key.participant || info.key.remoteJid;
            const fotoPerfil = await sandro.profilePictureUrl(numeroAutor, 'image').catch(() => null);

            if (!fotoPerfil) {
                return reply('❌ Não foi possível obter sua foto de perfil. Configure uma no WhatsApp e tente novamente.');
            }

            linkImagem = fotoPerfil;
        }

        const apiURL = `${zerosite}/api/canvas/rip?link=${encodeURIComponent(linkImagem)}&apikey=${API_KEY_ZEROTWO}`;

        const fetch = require('node-fetch');
        const res = await fetch(apiURL);

        if (!res.ok) {
            return reply(`❌ Erro ao gerar imagem: ${res.statusText}`);
        }

        const buffer = await res.buffer();

        await sandro.sendMessage(from, {
            image: buffer,
            caption: '🪦 Descanse em paz...'
        }, { quoted: info });

    } catch (e) {
        console.error('Erro no comando /rip:', e);
        reply('❌ Ocorreu um erro ao gerar a imagem. Tente novamente mais tarde.');
    }

    break;
}

case 'jail': {
    reagir(from, "🚓");

    try {
        let linkImagem;

        const isQuotedImage = info.message?.extendedTextMessage?.contextInfo?.quotedMessage?.imageMessage;
        const isImage = info.message?.imageMessage;

        if (isQuotedImage || isImage) {
            const media = isQuotedImage
                ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage
                : info.message.imageMessage;

            const stream = await downloadContentFromMessage(media, 'image');
            let buffer = Buffer.from([]);

            for await (const chunk of stream) {
                buffer = Buffer.concat([buffer, chunk]);
            }

            const FormData = require('form-data');
            const form = new FormData();

            form.append('reqtype', 'fileupload');
            form.append('fileToUpload', buffer, { filename: 'image.jpg' });

            const fetch = require('node-fetch');
            const uploadRes = await fetch('https://catbox.moe/user/api.php', {
                method: 'POST',
                body: form,
            });

            const uploadUrl = (await uploadRes.text()).trim();

            if (!uploadUrl.startsWith('http')) {
                return reply('❌ Falha ao enviar imagem para o servidor.');
            }

            linkImagem = uploadUrl;
        } else {
            const numeroAutor = info.key.participant || info.key.remoteJid;
            const fotoPerfil = await sandro.profilePictureUrl(numeroAutor, 'image').catch(() => null);

            if (!fotoPerfil) {
                return reply('❌ Não foi possível obter sua foto de perfil. Configure uma no WhatsApp e tente novamente.');
            }

            linkImagem = fotoPerfil;
        }

        const apiURL = `${zerosite}/api/canvas/jail?link=${encodeURIComponent(linkImagem)}&apikey=${API_KEY_ZEROTWO}`;

        const res = await fetch(apiURL);

        if (!res.ok) {
            return reply(`❌ Erro ao gerar imagem: ${res.statusText}`);
        }

        const buffer = await res.buffer();

        await sandro.sendMessage(from, {
            image: buffer,
            caption: '🚨 Preso em flagrante! Tá na cadeia agora, parceiro!'
        }, { quoted: info });

    } catch (e) {
        console.error('Erro no comando /jail:', e);
        reply('❌ Ocorreu um erro ao gerar a imagem. Tente novamente mais tarde.');
    }

    break;
}

case 'comunismo': {
    reagir(from, "🌟");

    try {
        let linkImagem;

        const isQuotedImage = info.message?.extendedTextMessage?.contextInfo?.quotedMessage?.imageMessage;
        const isImage = info.message?.imageMessage;

        if (isQuotedImage || isImage) {
            const media = isQuotedImage
                ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage
                : info.message.imageMessage;

            const stream = await downloadContentFromMessage(media, 'image');
            let buffer = Buffer.from([]);

            for await (const chunk of stream) {
                buffer = Buffer.concat([buffer, chunk]);
            }

            const FormData = require('form-data');
            const form = new FormData();

            form.append('reqtype', 'fileupload');
            form.append('fileToUpload', buffer, { filename: 'image.jpg' });

            const fetch = require('node-fetch');
            const uploadRes = await fetch('https://catbox.moe/user/api.php', {
                method: 'POST',
                body: form,
            });

            const uploadUrl = (await uploadRes.text()).trim();

            if (!uploadUrl.startsWith('http')) {
                return reply('❌ Falha ao enviar imagem para o servidor.');
            }

            linkImagem = uploadUrl;
        } else {
            const numeroAutor = info.key.participant || info.key.remoteJid;
            const fotoPerfil = await sandro.profilePictureUrl(numeroAutor, 'image').catch(() => null);

            if (!fotoPerfil) {
                return reply('❌ Não foi possível obter sua foto de perfil. Configure uma no WhatsApp e tente novamente.');
            }

            linkImagem = fotoPerfil;
        }

        // Usa sempre linkImagem
        const apiURL = `${zerosite}/api/canvas/comunismo?link=${encodeURIComponent(linkImagem)}&apikey=${API_KEY_ZEROTWO}`;

        const fetch = require('node-fetch');
        const res = await fetch(apiURL);

        if (!res.ok) {
            return reply(`❌ Erro ao gerar imagem: ${res.statusText}`);
        }

        const resultBuffer = await res.buffer();

        await sandro.sendMessage(from, {
            image: resultBuffer,
            caption: '☭ Viva a revolução, camarada!'
        }, { quoted: info });

    } catch (e) {
        console.error('Erro no comando /comunismo:', e);
        reply('❌ Ocorreu um erro ao gerar a imagem. Tente novamente mais tarde.');
    }

    break;
}

case 'bolsonaro': {
    reagir(from, "🇧🇷");

    try {
        let linkImagem;

        const isQuotedImage = info.message?.extendedTextMessage?.contextInfo?.quotedMessage?.imageMessage;
        const isImage = info.message?.imageMessage;

        if (isQuotedImage || isImage) {
            const media = isQuotedImage
                ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage
                : info.message.imageMessage;

            const stream = await downloadContentFromMessage(media, 'image');
            let buffer = Buffer.from([]);

            for await (const chunk of stream) {
                buffer = Buffer.concat([buffer, chunk]);
            }

            const FormData = require('form-data');
            const form = new FormData();

            form.append('reqtype', 'fileupload');
            form.append('fileToUpload', buffer, { filename: 'image.jpg' });

            const fetch = require('node-fetch');
            const uploadRes = await fetch('https://catbox.moe/user/api.php', {
                method: 'POST',
                body: form,
            });

            const uploadUrl = (await uploadRes.text()).trim();

            if (!uploadUrl.startsWith('http')) {
                return reply('❌ Falha ao enviar imagem para o servidor.');
            }

            linkImagem = uploadUrl;
        } else {
            const numeroAutor = info.key.participant || info.key.remoteJid;
            const fotoPerfil = await sandro.profilePictureUrl(numeroAutor, 'image').catch(() => null);

            if (!fotoPerfil) {
                return reply('❌ Não foi possível obter sua foto de perfil. Configure uma no WhatsApp e tente novamente.');
            }

            linkImagem = fotoPerfil;
        }

        // Monta a URL da API com a imagem final
        const apiURL = `${zerosite}/api/canvas/bolsonaro?link=${encodeURIComponent(linkImagem)}&apikey=${API_KEY_ZEROTWO}`;

        const fetch = require('node-fetch');
        const res = await fetch(apiURL);

        if (!res.ok) {
            return reply(`❌ Erro ao gerar imagem: ${res.statusText}`);
        }

        const buffer = await res.buffer();

        await sandro.sendMessage(from, {
            image: buffer,
            caption: '🇧🇷 Toma aí, patriota!'
        }, { quoted: info });

    } catch (e) {
        console.error('Erro no comando /bolsonaro:', e);
        reply('❌ Ocorreu um erro ao gerar a imagem. Tente novamente mais tarde.');
    }

    break;
}




case 'take':
setTimeout(() => {reagir(from, "✅")}, 300)
if(!isQuotedSticker) return reply('Marque uma figurinha...')
i8 = rgtake.map(i => i.usuario).indexOf(sender)
if(i8 < 0) return reply(`Você ainda não definiu a sua marca ďágua personalizada para o uso desse comando.\n• Por favor, use o comando *rgtake sandro|md* para registrar sua marca ďagua personalizada de seus stickers.`)
renameContextSticker(rgtake[i8].mcdagua1, rgtake[i8].mcdagua2, `RENOMEADA COM SUCESSO`, info)
.catch((err) => {
reply(`❌ Erro, tente mais tarde`); 
})
break

case 'rgtake':
var [TP, TP2] = q.split("|")
rgtakergtake = []
for (i of rgtake) {rgtakergtake.push(i.usuario)}
if(rgtakergtake.indexOf(sender) >= 0) return reply(`Você já registrou sua marca ďagua, se deseja substituir use ${prefix}*rntake name|autor*`)
if(!q.includes("|")) return reply(`🔹 Uso correto: *${prefix + command} sandro|md*`)
if(!TP) return reply(`Você esqueceu de preencher o primeiro campo... Ex: *${prefix + command} sandro|md*`)
if(!TP2) return reply(`Você esqueceu de preencher o segundo campo... Ex: *${prefix + command} sandro|md*`)
rgtake.push({usuario: sender, mcdagua1: TP, mcdagua2: TP2})
fs.writeFileSync("./assets/take.json", JSON.stringify(rgtake, null, 2))
reply(`Sucesso ao concluir o registro... Agora você pode usar o comando: *${prefix}take*`)
break





case 'hd':
case 'tornarhd':
    reagir(from, "🖼️");
    try {
    reply("Aguarde Um momento...")
        const imgbbApiKey = '99f4d15c4b7a31066c5d52546b0613de'; // Sua chave do ImgBB

        let media;
        if (isQuotedImage) {
            media = info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage;
        } else if (isImage) {
            media = info.message.imageMessage;
        } else {
            return reply('❌ Marque ou envie uma imagem para torná-la HD.');
        }

        const mimetype = media.mimetype;
        const ext = mimetype.split('/').pop();
        const tempFile = `temp_tohd_${Date.now()}.${ext}`;

        const fileBuffer = await getFileBuffer(media, 'image');
        fs.writeFileSync(tempFile, fileBuffer);

        const base64Image = fs.readFileSync(tempFile, { encoding: 'base64' });

        const fetch = require('node-fetch');
        const uploadRes = await fetch(`https://api.imgbb.com/1/upload?key=${imgbbApiKey}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({ image: base64Image })
        });

        const uploadJson = await uploadRes.json();

        if (!uploadJson.success) {
            throw new Error('Erro ao fazer upload no ImgBB');
        }

        const imageUrl = uploadJson.data.url;

        // Agora trata como imagem diretamente
        const apiUrl = `${zerosite}/api/ia/tohd?url=${imageUrl}&apikey=${API_KEY_ZEROTWO}`;
        const hdRes = await fetch(apiUrl);

        if (!hdRes.ok) {
            throw new Error(`Erro na API Zero-Two: ${hdRes.status} ${hdRes.statusText}`);
        }

        const hdBuffer = await hdRes.buffer();

        await sandro.sendMessage(from, {
            image: hdBuffer,
            caption: `✨ *IMAGEM EM HD COM SUCESSO!*`
        }, { quoted: info });

        fs.unlinkSync(tempFile);

    } catch (e) {
        console.error('Erro no comando tohd:', e);
        await sandro.sendMessage(from, {
            text: '❌ Erro ao tornar a imagem em HD.\n' + e.message
        }, { quoted: info });
    }
    break;



case 'rbg':

reagir(from, "🖼️");

try {
let media;

if (isQuotedImage) {
    media = info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage;
} else if (isImage) {
    media = info.message.imageMessage;
} else {
    return reply('Marque ou envie uma imagem para remover o fundo.');
}

const mimetype = media.mimetype;
const ext = mimetype.split('/').pop();
const tempFile = `temp_removebg_${Date.now()}.${ext}`;

const fileBuffer = await getFileBuffer(media, 'image');
fs.writeFileSync(tempFile, fileBuffer);

const FormData = require('form-data');
const form = new FormData();

form.append('image_file', fs.createReadStream(tempFile));
form.append('size', 'auto');

const fetch = require('node-fetch');

const response = await fetch('https://api.remove.bg/v1.0/removebg', {
    method: 'POST',
    headers: {
        'X-Api-Key': getLegacyApiKey('VIDEO_API'),
        ...form.getHeaders()
    },
    body: form
});

if (!response.ok) {
    throw new Error(`Erro ${response.status}`);
}

const imageBuffer = await response.buffer();

if (fs.existsSync(tempFile)) {
    fs.unlinkSync(tempFile);
}

// FOTO SEM FUNDO
await sandro.sendMessage(from, {
    image: imageBuffer,
    caption: 'Fundo removido com sucesso.'
}, { quoted: info });

// FIGURINHA SEM FUNDO
const pack = setting.figurinha?.pacote || NomeDoBot;
const author = setting.figurinha?.autor || NickDono;

let sticker = await sendImageAsSticker2(
    sandro,
    from,
    imageBuffer,
    info,
    {
        packname: pack,
        author: author
    }
);

if (sticker) {
    await DLT_FL(sticker);
}

} catch (e) {
console.error(e);
reply('Ocorreu um erro ao remover o fundo da imagem.');
}

break;

case 'zerotwo':
case 'zeroai':
  try {
    if (!q) return reply(`❌ Envie uma pergunta!\nEx: ${prefix + command} como você está?`);

    const axios = require('axios');
    const url = `${zerosite}/api/ia/zerotwo?query=${encodeURIComponent(q)}&apikey=${API_KEY_ZEROTWO}`;

    const { data } = await axios.get(url);

    if (data.status && data.resposta) {
      reply(`🩷 *Zero Two respondeu:*\n\n${data.resposta}`);
    } else {
      reply("Desculpe, darling... não consegui pensar em uma resposta agora. 😢");
    }
  } catch (e) {
    console.log("Erro Zero Two GPT:", e);
    reply("Tive um erro técnico, meu amor... tenta de novo em alguns segundos! 🥺");
  }
  break;


case 'getperfil': {
    try {
        if (!isGroup) return reply("❌ Esse comando só pode ser usado em grupos.");
        if (!menc_os2) return reply("❌ Marque a pessoa com @.\nExemplo: /getperfil @usuario");

        let jid = menc_jid2[0]; // ID da pessoa marcada
        let fotoPerfil;

        try {
            fotoPerfil = await sandro.profilePictureUrl(jid, 'image');
        } catch (e) {
            fotoPerfil = "https://telegra.ph/file/265c672094dfa87caea19.jpg"; // Foto padrão
        }

        await sandro.sendMessage(from, {
            image: { url: fotoPerfil }
        }, { quoted: info });

    } catch (e) {
        console.log(e);
        reply("❌ Erro ao tentar obter a foto de perfil.");
    }
}
break;



case 'ffban':
if (!args[0]) {
  reply("❗Por favor, informe o ID da conta para consultar se está banida.");
  break;
}
try {
  const id = args[0];
  reply(`❤️ *Buscando por ID ${id}. Aguarde...* ❤️`);

  const res = await fetch(`${zerosite}/api/get/ff-banned-account?id=${id}&apikey=${API_KEY_ZEROTWO}`);
  const json = await res.json();

  if (!json.status) return reply("❌ Não foi possível consultar a conta. Verifique o ID ou a API.");

  const r = json.resultados;

  const texto = `🚨 *Consulta de Banimento - Free Fire*

*ID:* ${r.id}
*Data da Consulta:* ${r.data_consulta}
*Banido:* ${r.esta_banido ? "✅ Sim" : "❌ Não"}
*Mensagem:* ${r.mensagem}
*Motivo:* ${r.motivo_banimento || "Nenhum motivo encontrado ou conta não está banida."}`;

  reply(texto);

} catch (e) {
  console.error("❌ Erro ao executar ffban:", e);
  reply("❌ Ocorreu um erro ao buscar os dados. Verifique o console.");
}
break;

case 'ffbios':
try {
  const res = await fetch(`${zerosite}/api/get/ff-bios?limit=30&apikey=${API_KEY_ZEROTWO}`);
  reply(`❤️ *Buscando Aguarde...* ❤️`);
  const json = await res.json();

  if (!json.status) return reply("❌ Não foi possível obter as bios. Tente novamente mais tarde.");

  const bios = json.resultados;

  let texto = `*30 Bios para usar no Free Fire:*\n\n`;

  for (let i = 0; i < bios.length; i++) {
    texto += `*${i + 1}.* ${bios[i].bio}\n\n`;
  }

  reply(texto);

} catch (e) {
  console.error("❌ Erro ao executar ff-bios:", e);
  reply("❌ Ocorreu um erro ao buscar as bios. Verifique o console.");
}
break;

case 'ffprime':
if (!args[0]) {
  reply("❗Você precisa informar o ID do jogador!");
  break;
}
try {
  reply(`❤️ *Buscando por ${q} Aguarde...* ❤️`);
  const res = await fetch(`${zerosite}/api/get/ff-prime-level?id=${q}&apikey=${API_KEY_ZEROTWO}`);
  const json = await res.json();

  if (!json.status) return reply("Falta O ID do jogador😒");

  const r = json.resultados;

  const texto = `💠 *Sistema Prime - Free Fire*

*ID:* ${r.id}
*Último Registro:* ${r.ultima_vez}
*Conta:* ${r.conta}
*Privilégios:* ${r.privilegios.join(", ")}
*Sobre o Sistema Prime:*

${r.descrição}`;

  reply(texto);

} catch (e) {
  console.error("❌ Erro ao executar ff-prime:", e);
  reply("❌ Ocorreu um erro ao buscar os dados. Verifique o console.");
}
break;

case 'ffdata':
if (!args[0]) {
  reply("❗Você precisa informar o ID do jogador!");
  break;
}

try {
  const q = args[0];
  reply(`❤️ *Buscando por ID ${q}. Aguarde...* ❤️`);

  const res = await fetch(`${zerosite}/api/get/ff-data-criacao?id=${q}&apikey=${API_KEY_ZEROTWO}`);
  const json = await res.json();

  if (!json.status) return reply("❌ Não foi possível obter os dados. Verifique o ID informado.");

  const r = json.resultados;

  const texto = `📅*Dados da Conta Free Fire*

*ID:* ${r.id}
*Nome:* ${r.nome}
*Data de Criação:* ${r.data_criacao}
*Raridade:* ${r.raridade}
*Status da Conta:* ${r.status_conta}`;

  reply(texto);

} catch (e) {
  console.error("❌ Erro ao executar ffdata:", e);
  reply("❌ Ocorreu um erro ao buscar os dados. Verifique o console.");
}
break;

case 'ffinfo':

if (!args[0]) {
  reply("❗Você precisa informar o ID do jogador!");
  break;
}
try {
  reply(`❤️ *Buscando por ${q} Aguarde...* ❤️`);
  const res = await fetch(`${zerosite}/api/get/ff-stalk?id=${q}&apikey=${API_KEY_ZEROTWO}`);
  const json = await res.json();

  if (!json.status) return reply("❌ ID inválido ou API fora do ar.");

  const r = json.resultados;

  const texto = `📄 *Resultado*

*ID:* ${r.id}
*Apelido:* ${r.apelido}
*Nível:* ${r.nivel}
*Conta Criada:* ${r.dataCriacao}
*Último Login:* ${r.ultimoLogin}
*Versão do Jogo:* ${r.versaoJogo}
*Experiência:* ${r.experiencia.formatada}
*Curtidas:* ${r.curtidas}
*Região:* ${r.regiao}
*Bio:* ${r.biografia}
*Passe Booyah:* ${r.passeBooyah}
*Guilda:* ${r.guilda.nome} (Lvl ${r.guilda.nivel}, ${r.guilda.membros} membros)`;

  reply(texto);

} catch (e) {
  console.error("❌ Erro ao executar ff-stalk:", e);
  reply("❌ Ocorreu um erro ao buscar os dados. Veja o console.");
}
break;

case 'rg': {
    if (!isPremium) return reply("❌ *COMANDO RESTRITO*\n\nEste comando é exclusivo para usuários *VIPs*.\n\n🔐 Ele permite puxar a *foto da pessoa* e *informações detalhadas pelo RG*.");

    const query = body.split(' ')[1];
    if (!query) return sandro.sendMessage(from, { text: '❌ Informe um CPF para consultar o RG. Exemplo: /rg 11852345780' }, { quoted });

    try {
        reply(`❤️ *Buscando RG para o CPF ${query}... Aguarde...* ❤️`);

        const response = await fetch(`${zerosite}/consultas/fotorj?query=${query}&apikey=${API_KEY_ZEROTWO}`);
        const data = await response.json();

        if (!data.status || !data.resultado) {
            return sandro.sendMessage(from, { text: '❌ Nenhum resultado encontrado para este CPF.' }, { quoted });
        }

        const resultado = data.resultado;
        const dados = resultado.DADOS_PESSOAIS || {};
        const filiacao = resultado.FILIACAO || {};
        const documentos = resultado.DOCUMENTOS || {};
        const foto = resultado.FOTO;

        const mensagem = `
*CONSULTA DE RG - ${NomeDoBot}*

- Nome: ${dados.NOME || 'Não encontrado'}
- Nascimento: ${dados.NASCIMENTO || 'Não encontrado'}
- Óbito: ${dados.OBITO || 'Não encontrado'}

- Mãe: ${filiacao.MAE || 'Não encontrado'}
- Pai: ${filiacao.PAI || 'Não encontrado'}

- RG: ${documentos.RG || 'Não encontrado'}

🔎 Fonte: ${NomeDoBot}`;

        // Se houver foto, envia a imagem com o texto como legenda
        if (foto) {
            await sandro.sendMessage(from, { image: { url: foto }, caption: mensagem }, { quoted });
        } else {
            // Se não tiver foto, envia só o texto
            sandro.sendMessage(from, { text: mensagem }, { quoted });
        }

    } catch (err) {
        console.error(err);
        sandro.sendMessage(from, { text: '❌ Ocorreu um erro ao realizar a consulta.' }, { quoted });
    }
    break;
}

case 'imgpralink2': {
  reagir(from, "💾");
  try {
    let media, type;

    if (isQuotedImage || isImage) {
      media = isQuotedImage 
        ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage 
        : info.message.imageMessage;

      type = 'image';
    } else {
      return reply('❌ Marque ou envie uma *imagem*.');
    }

    // pega buffer
    const buffer = await getFileBuffer(media, type);

    // cria form-data
    const FormData = require('form-data');
    const form = new FormData();

    form.append('fileToUpload', buffer, {
      filename: `sandro_${Date.now()}.jpg`
    });

    form.append('reqtype', 'fileupload');

    // envia pro catbox
    const response = await axios.post(
      'https://catbox.moe/user/api.php',
      form,
      {
        headers: form.getHeaders()
      }
    );

    const link = response.data;

    reply(`✅ *Imagem upada com sucesso:*\n\n${link}`);

  } catch (error) {
    console.error('❌ Erro Catbox:', error.message);
    reply('❌ Erro ao enviar imagem.');
  }
  break;
}

case 'play2': {
    try {
        if (!q) return reply("❌ Por favor, digite o nome da música.\nExemplo: `/play DJ malam pagi slowed`");

    reply(`❤️ *Buscando por ${q} Aguarde...* ❤️`);

        const res = await fetchJson(`https://api.vreden.my.id/api/ytplaymp3?query=${encodeURIComponent(q)}`);
        if (!res || !res.result || !res.result.status) return reply("❌ Música não encontrada. Tente outro nome.");

        const m = res.result.metadata;
        const d = res.result.download;

        const texto = `╔♡∞*♡♡∞:｡.｡❤️｡.｡:∞♡*♡:∞♡╗
╠═⪩⟨❤️𝐒𝐄𝐉𝐀-𝐁𝐄𝐌-𝐕𝐈𝐍𝐃𝐎(𝐀)⟩
╚♡∞♡♡∞:｡.｡❤️｡.｡:∞♡♡:∞♡╝\n\n` +
                      `📌 *Título:* ${m.title}\n` +
                      `👤 *Canal:* ${m.author.name}\n` +
                      `📈 *Visualizações:* ${m.views.toLocaleString()}\n` +
                      `⏱️ *Duração:* ${m.duration.timestamp}\n` +
                      `🕒 *Publicado:* ${m.ago}\n\n` +
                      `📝 *Descrição:* ${m.description}\n\n` +
                      `🔗 *Link do Vídeo:* ${m.url}\n` +
                      `👨‍💻 *Canal YouTube:* ${m.author.url}\n\n` +
                      `🎧 *Qualidade:* ${d.quality}kbps\n` +
                      `📊 *Qualidades Disponíveis:* ${d.availableQuality.join(", ")}kbps`;

        // Envia thumb + informações
        await sandro.sendMessage(from, {
            image: { url: m.thumbnail },
            caption: texto
        }, { quoted: info });

        // Envia o áudio em seguida
        await sandro.sendMessage(from, {
            audio: { url: d.url },
            mimetype: 'audio/mpeg',
            fileName: d.filename
        }, { quoted: info });

    } catch (e) {
        console.error(e);
        reply("❌ Erro ao buscar a música. Tente novamente mais tarde.");
    }
    break;
}

case 'play3': {
    if (!q) return reply(`Use: ${prefix + command} nome ou link`)

    try {
        reagir(from, "🎵")

        const res = await fetchJson(zerosite + `/api/ytsrc?q=${encodeURIComponent(q)}&apikey=` + API_KEY_ZEROTWO)

        if (!res.resultado || !res.resultado.length) {
            return reply("❌ Nenhum resultado encontrado")
        }

        const data = res.resultado[0]

        // envia imagem + info
        await sandro.sendMessage(from, {
            image: { url: data.thumbnail },
            caption: `> ╔♡∞*♡♡∞:｡.｡❤️｡.｡:∞♡*♡:∞♡╗
> ╠═⪩⟨❤️𝐒𝐄𝐉𝐀-𝐁𝐄𝐌-𝐕𝐈𝐍𝐃𝐎(𝐀)⟩
> ╚♡∞*♡♡∞:｡.｡❤️｡.｡:∞♡*♡:∞♡╝

> Titulo: *${data.title}*
> Duração: ${data.timestamp || "-"}
> Canal: ${data.author?.name || "-"}
> Postado: ${data.ago || "-"}
> Bot: ${NomeDoBot}
> ╰───〘 @${sender.split("@")[0]} 〙

> ılı.lıllılı.ıllı..ılı.lıllılı.ıllı`
        }, { quoted: info })

        // envia áudio
        await sandro.sendMessage(from, {
            audio: {
                url: zerosite + `/api/dl/ytaudio?url=${encodeURIComponent(data.url)}&apikey=` + API_KEY_ZEROTWO
            },
            mimetype: "audio/mpeg"
        }, { quoted: info })

    } catch (err) {
        console.log(err)
        reply("❌ Erro ao baixar o áudio")
    }
}
break




case 'ensina':

case 'matematica': {
reagir(from, "🧠");
try {
  if (!q) return reply(`✏️ Envie uma conta!\nEx: ${prefix}math 2+2`)

  // limpa e padroniza
  let conta = q
    .replace(/x/gi, '*')
    .replace(/÷/g, '/')
    .replace(/,/g, '.')
    .trim()

  // validação simples (evita código malicioso)
  if (!/^[0-9+\-*/(). ]+$/.test(conta)) {
    return reply("❌ Conta inválida!")
  }

  let resultado = eval(conta)

  let explicacao = ""

  if (conta.includes('+')) {
    explicacao = "➕ Soma: basta somar os valores."
  } else if (conta.includes('-')) {
    explicacao = "➖ Subtração: diminuir um valor do outro."
  } else if (conta.includes('*')) {
    explicacao = "✖️ Multiplicação: somar várias vezes o mesmo número."
  } else if (conta.includes('/')) {
    explicacao = "➗ Divisão: repartir em partes iguais."
  }

  reply(`🧮 *Matemática*

📌 Conta: ${q}
📊 Resultado: ${resultado}

📖 Explicação:
${explicacao}`)

} catch (e) {
  reply("❌ Não consegui resolver essa conta!")
}
}
break



case 'gpt3':
case 'chatgpt3':
    reagir(from, "💭");
    if (!q) return reply('❌ Envie uma mensagem para eu responder.\n\nExemplo: sandro gemini quem é você');

    try {
        const res = await fetch(`https://api.siputzx.my.id/api/ai/gemini-pro?content=${encodeURIComponent(q)}`);
        const json = await res.json();

        if (!json.status || !json.data) {
            return reply('❌ Não consegui obter uma resposta.');
        }

        reply(`🤖 *Resposta:*\n${json.data}`);
    } catch (e) {
        console.error("Erro no comando 'gemini':", e);
        reply('❌ Ocorreu um erro ao tentar responder.');
    }
    break;
    
    
case 'modapk':

    reagir(from, "📦");
    if (!q) return reply('❌ Digite o nome de um app para buscar.');

    try {
        const res = await fetch(`https://api.siputzx.my.id/api/apk/happymod?search=${encodeURIComponent(q)}`);
        const json = await res.json();

        if (!json.status || !json.data || json.data.length === 0) {
            return reply('❌ Nenhum resultado encontrado.');
        }

        const top = json.data.slice(0, 5);

        for (let apk of top) {
            let texto = `📲 *${apk.title}*\n\n` +
                        `📦 *Versão:* ${apk.version}\n` +
                        `💸 *Mod:* ${apk.modFeatures || 'N/A'}\n` +
                        `⭐ *Avaliação:* ${apk.rating.value} (${apk.rating.percentage}%)\n` +
                        `🔗 *Link:* ${apk.link}`;

            await sandro.sendMessage(from, {
                image: { url: apk.image },
                caption: texto
            }, { quoted: info });
        }

    } catch (e) {
        console.error("Erro no comando 'happymod':", e);
        reply('❌ Ocorreu um erro ao buscar o app.');
    }
    break;

case 'mangatoon': {
  try {
    if (!q.trim()) return reply(`Use: ${prefix + command} nome do manga`);

    const searchQuery = encodeURIComponent(q.trim());
    const url = `https://api.siputzx.my.id/api/s/mangatoon?query=${searchQuery}`;
    const response = await fetch(url);
    const data = await response.json();

    if (!data.status || !data.data.komik || data.data.komik.length === 0) {
      return reply("Não foram encontrados mangas com o termo informado.");
    }

    let message = `*Resultados encontrados para:* ${q.trim()}\n\n`;

    // Mostra os primeiros 5 mangas encontrados
    for (let i = 0; i < Math.min(5, data.data.komik[0].items.length); i++) {
      const manga = data.data.komik[0].items[i];

      // Envia a imagem como mídia
      await sandro.sendMessage(from, {
        image: { url: manga.image },
        caption: `${i + 1}. *${manga.title}*\nLink para o manga: ${manga.link}`
      }, { quoted: info });
    }

  } catch (e) {
    console.error("Erro ao buscar mangas:", e);
    return reply("Erro ao buscar os mangas. Tente novamente mais tarde.");
  }
  break;
}

case 'otakotaku': {
  if (!args.length) {
    await sandro.sendMessage(from, { text: 'Digite o nome para pesquisar. Ex: /otakotaku Naruto' }, { quoted: info });
    return;
  }

  const termo = encodeURIComponent(args.join(" "));
  const url = `https://api.siputzx.my.id/api/s/otakotaku?query=${termo}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (!data.status) {
      await sandro.sendMessage(from, { text: 'Nenhum resultado encontrado.' }, { quoted: info });
      return;
    }

    let resultText = `Resultados para: *${termo}*:\n\n`;

    // Exibindo Animes
    if (data.data.anime && data.data.anime.length > 0) {
      resultText += 'Animes encontrados:\n';
      data.data.anime.forEach((anime) => {
        resultText += `• [${anime.title}](${anime.url})\n`;
      });
    }

    // Exibindo Personagens
    if (data.data.karakter && data.data.karakter.length > 0) {
      resultText += '\nPersonagens encontrados:\n';
      data.data.karakter.forEach((karakter) => {
        resultText += `• [${karakter.title}](${karakter.url})\n`;
      });
    }

    // Exibindo Artigos
    if (data.data.artikel && data.data.artikel.length > 0) {
      resultText += '\nArtigos encontrados:\n';
      data.data.artikel.forEach((artikel) => {
        resultText += `• [${artikel.title}](${artikel.url})\n`;
      });
    }

    await sandro.sendMessage(from, { text: resultText }, { quoted: info });

  } catch (e) {
    console.error(e);
    await sandro.sendMessage(from, { text: 'Erro ao buscar informações.' }, { quoted: info });
  }

  break;
}

case 'twstalk':

case 'stalktwitter':
    try {
        if (!q) return reply("Por favor, envie o nome de usuário do Twitter. Ex: /twitter siputzx");

        reply("Buscando informações do perfil...");

        let res = await fetchJson(`https://api.siputzx.my.id/api/stalk/twitter?user=${encodeURIComponent(q)}`);
        if (!res || !res.status) return reply("Usuário não encontrado. Verifique o nome e tente novamente.");

        let u = res.data;
        let stats = u.stats;

        let texto = `*Informações do Twitter:*\n\n` +
                    `*Nome:* ${u.name}\n` +
                    `*Usuário:* @${u.username}\n` +
                    `*Verificado:* ${u.verified ? 'Sim' : 'Não'}\n` +
                    `*Bio:* ${u.description || 'Sem descrição'}\n` +
                    `*Criado em:* ${u.created_at}\n\n` +
                    `*Tweets:* ${stats.tweets}\n` +
                    `*Seguidores:* ${stats.followers}\n` +
                    `*Seguindo:* ${stats.following}\n` +
                    `*Curtidas:* ${stats.likes}`;

        sandro.sendMessage(from, { image: { url: u.profile.image }, caption: texto }, { quoted: info });
    } catch (e) {
        console.error(e);
        reply("Erro ao buscar informações do perfil. Tente novamente mais tarde.");
    }
    break;

case 'ytstalk':
case 'canal': {
try {

if (!q) {
return reply(`❌ Informe o @ ou username do canal.

Exemplo:
${prefix}ytstalk sandrobot2`);
}

reagir(from, "✅️");

const { data } = await axios.get(
`https://docs.prexzyapis.com/stalk/ytstalk?user=${encodeURIComponent(q)}`
);

if (!data.status || !data.data) {
return reply("❌ Canal não encontrado.");
}

const c = data.data;

let txt = `*YOUTUBE STALK*

> *Nome:* ${c.name}
> *Username:* ${c.username}
> *ID do Canal:* ${c.channelId}
> *Inscritos:* ${c.subscribers || "Oculto"}
> *Descrição:* ${c.description || "Sem descrição"}
> *Canal:* ${c.url}

> *Últimos vídeos:*
`;

if (c.videos && c.videos.length) {
c.videos.slice(0, 4).forEach((video, i) => {
txt += `\n${i + 1}. ${video}`;
});
}

await sandro.sendMessage(from, {
image: { url: c.image },
caption: txt,
contextInfo: {
externalAdReply: {
title: c.name,
body: c.username,
thumbnail: await getBuffer(c.image),
mediaType: 1,
showAdAttribution: false,
sourceUrl: c.url
}
}
}, { quoted: info });

} catch (err) {
console.log(err);
reply("❌ Erro ao buscar informações do canal.");
}

}
break;




case 'videoporn': {
  if (!args[0]) {
    await sandro.sendMessage(from, { text: 'Por favor, envie o link do vídeo.\nExemplo: /videoporn https://www.xvideos.com/video.kotblmh3a79/thot_blowjob' }, { quoted: info });
    return;
  }
  
reply(`Enviando No seu pv.😈`)

  const link = args[0];
  const api = `${zerosite}/api/xvideos?url=${encodeURIComponent(link)}&apikey=${API_KEY_ZEROTWO}`;

  try {
      reply(`❤️ *Buscando por ${q} Aguarde...* ❤️`)
    const fetch = require('node-fetch');
    const res = await fetch(api);
    const json = await res.json();

    if (!json.resultado || !json.resultado.download) {
      await sandro.sendMessage(sender, { text: 'Não foi possível obter o vídeo. Verifique o link.' }, { quoted: info });
      return;
    }

    const legenda = `*Título:* ${json.resultado.titulo}\n*Descrição:* ${json.resultado.desc}`;

    await sandro.sendMessage(sender, {
      video: { url: json.resultado.download },
      caption: legenda
    }, { quoted: info });

  } catch (e) {
    console.error(e);
    await sandro.sendMessage(sender, { text: 'Erro ao processar o vídeo.' }, { quoted: info });
  }
}
break;


    



case 'consultaplaca': {
    if (!q) return reply(`Use: ${prefix + command} ABC1234`)

    try {
    reply(`❤️ *Buscando por ${q} Aguarde...*❤️`);
        // Limpa e valida a placa (remove espaços e traços)
        const placa = q.trim().toUpperCase().replace(/[^A-Z0-9]/g, '')
        if (placa.length < 7) return reply("Placa inválida. Formato: ABC1234 ou ABC1C34")

        const api = `https://systemzone.store/api/consultas/placa?apikey=${getLegacyApiKey("SYSTEMZONE")}&plate=${placa}`

        const { data: res } = await axios.get(api, { 
            timeout: 15000,
            headers: { 'User-Agent': 'Mozilla/5.0' }
        })

        if (!res || !res.status) {
            return reply("Placa não encontrada ou consulta falhou")
        }

        const dados = res.result || {}
        const caracteristicas = dados.caracteristicas || {}
        const circulacao = dados.circulacao || {}
        const faturado = dados.faturado || {}
        const proprietario = dados.proprietario || {}
        const ocorrencias = dados.ocorrencias || []
        const proprietarioshistorico = dados.proprietarioshistorico || []

        const texto = `*CONSULTA DE PLACA*

> *DADOS DO VEÍCULO*
• Placa Nacional: ${dados.placanacional || "Não informado"}
• Placa Mercosul: ${dados.placamercosul || "Não informado"}
• UF: ${dados.uf || "Não informado"}
• RENAVAM: ${dados.renavam || "Não informado"}

> *CARACTERÍSTICAS*
• Marca/Modelo: ${caracteristicas.marcamodelo || "Não informado"}
• Ano Fabricação: ${caracteristicas.anofabricacao || "Não informado"}
• Ano Modelo: ${caracteristicas.anomodelo || "Não informado"}
• Cor: ${caracteristicas.corveiculo || "Não informado"}
• Combustível: ${caracteristicas.combustivel || "Não informado"}
• Tipo: ${caracteristicas.tipoveiculo || "Não informado"}
• Espécie: ${caracteristicas.especieveiculo || "Não informado"}
• Potência: ${caracteristicas.potencia || "Não informado"} CV
• Cilindradas: ${caracteristicas.cilindradas || "Não informado"}
• Capacidade Passageiros: ${caracteristicas.capacidpassageiros || "Não informado"}
• Peso Bruto: ${caracteristicas.pesobruto || "Não informado"} kg
• Chassi: ${caracteristicas.chassi || "Não informado"}

> *CIRCULAÇÃO*
• Situação Veículo: ${circulacao.situacaoveiculo || "Não informado"}
• Situação Chassi: ${circulacao.situacaochassi || "Não informado"}

> *FATURAMENTO*
• Doc Faturado: ${faturado.docfaturado || "Não informado"}
• Tipo Doc: ${faturado.tipodocfaturado || "Não informado"}
• Linha: ${faturado.linha || "Não informado"}
• Município: ${faturado.municipio || "Não informado"}

> *PRORIETÁRIO ATUAL*
• Nome: ${proprietario.nome || "Não informado"}
• CPF/CNPJ: ${proprietario.cpfcnpj || "Não informado"}

> *HISTÓRICO DE PROPRIETÁRIOS*
${proprietarioshistorico.length 
    ? proprietarioshistorico.map(p => `• Ano: ${p.ano || "N/I"} | Doc: ${p.cpfcnpj || "N/I"}`).join('\n') 
    : "• Nenhum histórico encontrado"}

> *OCORRÊNCIAS POLICIAIS*
${ocorrencias.length 
    ? ocorrencias.map((o, i) => `
> *Ocorrência ${i + 1}*
• Nº Boletim: ${o.numeroboletim || "Não informado"}
• Data Emissão: ${o.dataemissaobo || "Não informado"}
• Rubrica: ${o.descricaorubrica || "Não informado"}
• Espécie: ${o.especieocorrencia || "Não informado"}
• Delegacia: ${o.delegaciacontestada || "Não informado"}
• Flagrante: ${o.flagrante || "Não informado"}
• Status: ${o.statusboletimocorrencia || "Não informado"}
• Solução: ${o.solucaobo || "Não informado"}
• Localização: ${o.latlonocorrido || "Não informado"}
`).join('\n─────────────────\n')
    : "✅ Nenhuma ocorrência encontrada"}
`.trim()

        await sandro.sendMessage(from, { text: texto }, { quoted: info })

    } catch (e) {
        console.error("ERRO NA CONSULTA PLACA:", e.message)
        
        if (e.code === 'ECONNABORTED' || e.message?.includes('timeout')) {
            reply("⏳ A API demorou muito para responder. Tente novamente.")
        } else if (e.code === 'ERR_STREAM_PREMATURE_CLOSE') {
            reply("❌ Conexão fechada pela API. A API pode estar instável.")
        } else if (e.response?.status === 401 || e.response?.status === 403) {
            reply("🔑 API Key inválida ou expirada.")
        } else if (e.response?.status === 404) {
            reply("🔍 Placa não encontrada na base de dados.")
        } else if (e.response?.status >= 500) {
            reply("🔧 Erro no servidor da API. Tente mais tarde.")
        } else {
            reply(`❌ Erro ao consultar placa: ${e.message}`)
        }
    }
}
break



case 'consultacpf': {
    if (!q) return reply(`Use: ${prefix + command} 00000000000`)

    try {
    reply(`❤️ *Buscando por ${q} Aguarde...*❤️`);
        const cpf = q.replace(/\D/g, '')
        if (cpf.length !== 11) return reply("CPF inválido, digite apenas os 11 números")

        const api = `https://systemzone.store/api/consultas/cpf?apikey=${getLegacyApiKey("SYSTEMZONE")}&cpf=${cpf}`

        // Usa axios com timeout em vez de fetchJson genérico
        const { data: res } = await axios.get(api, { 
            timeout: 15000,
            headers: { 'User-Agent': 'Mozilla/5.0' }
        })

        if (!res || !res.status) {
            return reply("CPF não encontrado ou consulta falhou")
        }

        const dados = res.result || {}
        
        // Extrai arrays com fallback seguro
        const biometria = dados.biometria?.[0] || {}
        const filiacao = dados.filiacao?.[0] || {}
        const situacao = dados.situacaocadastral?.[0] || {}
        const endereco = dados.enderecos?.[0] || {}
        const pis = dados.pishistorico?.[0] || {}
        const interesses = dados.interesses?.[0] || {}
        const residente = dados.residenteexterior?.[0] || {}

        const texto = `*CONSULTA DE CPF*

> *DADOS PESSOAIS*
• CPF: ${biometria.cpf || "Não informado"}
• Nome: ${filiacao.nome || "Não informado"}
• Nascimento: ${biometria.datanasc || "Não informado"}
• Sexo: ${filiacao.sexo === "M" ? "Masculino" : filiacao.sexo === "F" ? "Feminino" : "Não informado"}
• Estado Civil: ${biometria.estcivil || "Não informado"}
• Cor/Pele: ${biometria.pelecor || "Não informado"}
• Desaparecido: ${biometria.desaparecido === "Sim" ? "⚠️ SIM" : "Não"}

> *FILIAÇÃO*
• Mãe: ${filiacao.nomemae || "Não informado"}
• Pai: ${filiacao.nomepai || "Não informado"}
• Nacionalidade: ${filiacao.nacionalidade || "Não informado"}
• Naturalidade: ${filiacao.naturalidade || "Não informado"}

> *SITUAÇÃO CADASTRAL*
• Status: ${situacao.descricaosit || "Não informado"}
• Data Entrada: ${situacao.dataent || "Não informado"}
• Data Situação: ${situacao.datasit || "Não informado"}

> *ENDEREÇO*
• Logradouro: ${endereco.logradouro || "Não informado"}, ${endereco.numero || "S/N"}
• Bairro: ${endereco.bairro || "Não informado"}
• Cidade/UF: ${endereco.cidade || "Não informado"} - ${endereco.siglauf || "Não informado"}
• CEP: ${endereco.cep || "Não informado"}

> *DOCUMENTOS*
• PIS/NIS: ${pis.pisnis || "Não informado"}
• Tipo: ${pis.tipo || "Não informado"}

> *CNS (Cartão Nacional de Saúde)*
${dados.cnshistorico?.length 
    ? dados.cnshistorico.map(c => `• ${c.cns} (${c.tipo})`).join('\n') 
    : "• Nenhum CNS encontrado"}

> *TELEFONES*
${dados.telefoneshistorico?.length 
    ? dados.telefoneshistorico.map(t => `• (${t.ddd}) ${t.telefone}`).join('\n') 
    : "• Nenhum telefone encontrado"}

> *PARENTES*
${dados.parentesnovos?.length 
    ? dados.parentesnovos.map(p => `• ${p.tiporelacao}: ${p.cpf} (${p.origem})`).join('\n') 
    : "• Nenhum parente registrado"}

> *BENEFÍCIOS E PROGRAMAS*
${dados.auxiliobpc?.length ? "✅ Benefício de Prestação Continuada (BPC)\n" : ""}\
${dados.auxiliobrasil?.length ? "✅ Auxílio Brasil\n" : ""}\
${dados.auxilioemergencial?.length ? "✅ Auxílio Emergencial\n" : ""}\
${dados.bolsafamilia?.length ? "✅ Bolsa Família\n" : ""}\
${dados.histinss?.length ? "✅ Histórico INSS\n" : ""}\
${dados.histloas?.length ? "✅ Histórico LOAS\n" : ""}\
${dados.planosaude?.length ? "✅ Plano de Saúde Privado\n" : ""}\
${!dados.auxiliobpc?.length && !dados.auxiliobrasil?.length && !dados.auxilioemergencial?.length && !dados.bolsafamilia?.length && !dados.histinss?.length && !dados.histloas?.length && !dados.planosaude?.length ? "• Nenhum benefício encontrado" : ""}

> *PARCELAS RECEBIDAS*
${dados.parcelasrecebidas?.length 
    ? dados.parcelasrecebidas.map(p => `• Código: ${p.codespecie} | Valor: R$ ${p.valor}${p.tipoacesso ? ` | ${p.tipoacesso}` : ''}`).join('\n') 
    : "• Nenhuma parcela registrada"}

> *DADOS DE INTERNET*
${dados.internet?.length 
    ? dados.internet.map(i => `• ${i.websiteurl} | ${i.status}`).join('\n') 
    : "• Nenhum registro encontrado"}

> *RESIDÊNCIA*
• País: ${residente.nomepais || "Não informado"}
• Residente Exterior: ${residente.residentestatus || "Não informado"}

> *PERFIL E INTERESSES*
• Aquisição Veicular: ${interesses.possuiaquisicaoveicular === "Sim" ? "Sim" : "Não"}
• Banco Digital: ${interesses.possuibancodigital === "Sim" ? "Sim" : "Não"}
• Cartões: ${interesses.possuicartoes === "Sim" ? "Sim" : "Não"}
• Consórcios: ${interesses.possuiconsorcios === "Sim" ? "Sim" : "Não"}
• Crédito Pessoal: ${interesses.possuicreditopessoal === "Sim" ? "Sim" : "Não"}
• Crédito Consignado: ${interesses.possuicreditoconsignado === "Sim" ? "Sim" : "Não"}
• Crédito Imobiliário: ${interesses.possuicreditoimobiliario === "Sim" ? "Sim" : "Não"}
• Financiamento Veicular: ${interesses.possuifinancasveiculares === "Sim" ? "Sim" : "Não"}
• Seguro Automotivo: ${interesses.possuiseguroautomotivo === "Sim" ? "Sim" : "Não"}
• Seguro Residencial: ${interesses.possuiseguroresidencial === "Sim" ? "Sim" : "Não"}
• Seguro Saúde: ${interesses.possuisegurosaude === "Sim" ? "Sim" : "Não"}
• Seguro Vida: ${interesses.possuisegurovida === "Sim" ? "Sim" : "Não"}
• Previdência Privada: ${interesses.possuiprevidenciapriv === "Sim" ? "Sim" : "Não"}
• Viagens: ${interesses.realizouviagens === "Sim" ? "Sim" : "Não"}
`.trim()

        await sandro.sendMessage(from, { text: texto }, { quoted: info })

    } catch (e) {
        console.error("ERRO NA CONSULTA CPF:", e.message)
        
        if (e.code === 'ECONNABORTED' || e.message?.includes('timeout')) {
            reply("⏳ A API demorou muito para responder. Tente novamente.")
        } else if (e.code === 'ERR_STREAM_PREMATURE_CLOSE') {
            reply("❌ Conexão fechada pela API. A API pode estar instável.")
        } else if (e.response?.status === 401 || e.response?.status === 403) {
            reply("🔑 API Key inválida ou expirada.")
        } else if (e.response?.status === 404) {
            reply("🔍 CPF não encontrado na base de dados.")
        } else if (e.response?.status >= 500) {
            reply("🔧 Erro no servidor da API. Tente mais tarde.")
        } else {
            reply(`❌ Erro ao consultar CPF: ${e.message}`)
        }
    }
}
break


case 'consultacpf': {
    if (!q) return reply(`Use: ${prefix + command} 00000000000`)

    try {
        reagir(from, "🔍")

        const cpf = q.replace(/\D/g, '')

        const response = await fetch(`https://api.cpfhub.io/cpf/${cpf}`, {
            method: 'GET',
            headers: {
                'x-api-key': getLegacyApiKey('X_API'),
                'Accept': 'application/json'
            }
        })

        const res = await response.json()

        if (!res.success) {
            return reply("CPF não encontrado")
        }

        const data = res.data

        const texto = `
CONSULTA CPF

Nome: ${data.nameUpper}
CPF: ${data.cpf}
Sexo: ${data.gender}
Nascimento: ${data.birthDate}
`

        await sandro.sendMessage(from, {
            text: texto
        }, { quoted: info })

    } catch (e) {
        console.log(e)
        reply("Erro ao consultar CPF")
    }
}
break
    
































































case 'pix': {
  if (!q || isNaN(q)) {
    return reply("Envie o valor após o comando. Exemplo: /pix 10");
  }

  const valor = parseFloat(q);
  const MP_TOKEN = 'SEU_ACCESS_TOKEN'; // Substitua pelo seu token do Mercado Pago

  try {
    reply("Gerando pagamento, aguarde...");

    const pagamento = await axios.post(
      'https://api.mercadopago.com/v1/payments',
      {
        transaction_amount: valor,
        description: `Pagamento PIX de R$${valor.toFixed(2)}`,
        payment_method_id: "pix",
        payer: {
          email: "pagador@email.com"
        }
      },
      {
        headers: {
          Authorization: `Bearer ${MP_TOKEN}`,
          'Content-Type': 'application/json'
        }
      }
    );

    const { point_of_interaction } = pagamento.data;
    const qr_base64 = point_of_interaction.transaction_data.qr_code_base64;
    const qr_link = point_of_interaction.transaction_data.ticket_url;
    const codigo_copiavel = point_of_interaction.transaction_data.qr_code;

    await sandro.sendMessage(from, {
      image: { url: `data:image/jpeg;base64,${qr_base64}` },
      caption: `*Pagamento via PIX*\n\nValor: R$${valor.toFixed(2)}\n\nCopie o código abaixo ou escaneie o QR Code:\n\n*${codigo_copiavel}*\n\nOu clique aqui: ${qr_link}`
    }, { quoted: info });

    // Exemplo fictício de resposta após confirmação
    setTimeout(() => {
      sandro.sendMessage(from, {
        text: '✅ Pagamento efetuado com sucesso!',
      }, { quoted: info });
    }, 15000); // Simula retorno em 15 segundos

  } catch (e) {
    console.error(e.response?.data || e);
    reply("Erro ao gerar o pagamento. Verifique o token ou tente novamente.");
  }

  break;
}


  
case 'gimage': {
  if (!q) {
    await sandro.sendMessage(from, { text: 'Envie o termo para buscar uma imagem no Google.\n\nExemplo: /gimage gato' }, { quoted: info });
    break;
  }

  try {
    const response = await fetch(`${zerosite}/api/gimage?txt=${encodeURIComponent(q)}&apikey=${API_KEY_ZEROTWO}`, {
      headers: { 'User-Agent': 'Mozilla/5.0' }
    });

    if (!response.ok) {
      console.error("Erro na resposta da API:", response.statusText);
      return reply("Erro ao acessar a API de imagem.");
    }

    const data = await response.json();

    if (!data.result || !Array.isArray(data.result) || data.result.length === 0) {
      return reply("Nenhuma imagem encontrada.");
    }

    const img = data.result[Math.floor(Math.random() * data.result.length)];

    if (!img?.url || !img.url.startsWith("http")) {
      return reply("Erro: URL da imagem inválida.");
    }

    await sandro.sendMessage(from, {
      image: { url: img.url },
      caption: `*Resultado da pesquisa:* ${data.search || q}\n*Título:* ${img.title || "Sem título"}`
    }, {
      quoted: info,
      ephemeralExpiration: 0 // Evita erro em grupo com mensagens temporárias
    });

  } catch (e) {
    console.error("Erro ao buscar imagem:", e);
    await sandro.sendMessage(from, { text: 'Erro ao buscar imagem no Google.' }, { quoted: info });
  }

  break;
}



  
case 'pinvideo': case 'pinterestvideo': {
	try { 
		if(!q?.trim()) return reply("faltando o Parâmetro: url");
		await reply(enviar.espere)
		const video = await getBuffer(Shizukusite+"/api/downloads/pinterest-mp4?url="+q?.trim() + "&apikey="+SHIZUKU_KEY)
		await sandro.sendMessage(from, {
			video, 
              mimetype: "video/mp4"
			}, 
			{
				quoted 
		}
	).catch((e) => {
				reply("Erro ao baixar video do Pinterest")
				})
	    } catch (e) {
		console.log(e)
		reply(mess.error())
		}
  break
};



case 'operadora': {
  if (!args[0]) {
    await sandro.sendMessage(from, { text: 'Digite o número com DDD. Ex: /operadora 559491569380' }, { quoted: m });
    return;
  }

  const numero = args[0].replace(/\D/g, '');
  const url = `${zerosite}/api/operadora?numero=${numero}&apikey=${API_KEY_ZEROTWO}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (!data || data.status !== 200 || !data.resultado) {
      await sandro.sendMessage(from, { text: 'Não foi possível obter informações desse número.' }, { quoted: info });
      return;
    }

    const { telefone, operadora, dispositivo, estado } = data.resultado;

    const texto = `*Informações do Número:*\n\n` +
                  `*Telefone:* ${telefone}\n` +
                  `*Operadora:* ${operadora}\n` +
                  `*Tipo:* ${dispositivo}\n` +
                  `*Estado:* ${estado}`;

    await sandro.sendMessage(from, { text: texto }, { quoted: info });

  } catch (e) {
    console.error(e);
    await sandro.sendMessage(from, { text: 'Erro ao consultar a operadora. Tente novamente mais tarde.' }, { quoted: info });
  }
  break;
}

case 'xvsearch': {
  try {
    if (!q) return reply(`Digite o que deseja pesquisar.\nEx: ${prefix}xvsearch lesbian fight`);

    const apiUrl = `${zerosite}/api/xvsearch?q=${encodeURIComponent(q)}&apikey=${API_KEY_ZEROTWO}`;
    const res = await fetch(apiUrl);
    const json = await res.json();

    if (!json?.status || !json.resultado?.length) {
      return reply("Nenhum resultado encontrado.");
    }

    let resposta = `*『 XVideos Search 』*\n\n⚠️Para baixar o video use ${prefix}videoporn (link)\n\n`;

    json.resultado.slice(0, 10).forEach((vid, i) => {
      resposta += `*${i + 1}. ${vid.title}*\n⏱️ ${vid.duration}\n🔗 ${vid.link}\n\n`;
    });

    resposta += `_Criador: 𝐏𝐀𝐔𝐋𝐎𝐙𝐈𝐍𝐗𝐙_𝐁𝐎𝐓_`;

    reply(resposta);

  } catch (e) {
    console.error("Erro no xvsearch:", e);
    reply("Erro ao buscar os vídeos. Tente novamente mais tarde.");
  }
}
break;

case 'dorama': {
    reagir(from, "🎬");

    try {
        if (!args[0]) {
            return reply('❌ Você precisa digitar o nome do dorama.\n\nExemplo: /dorama Spice Up Our Love');
        }

        const query = args.join(" ");
        const fetch = require('node-fetch');

        const apiURL = `${zerosite}/api/doramas/search?query=${encodeURIComponent(query)}&apikey=${getLegacyApiKey("SANDRO_2025")}`;

        const res = await fetch(apiURL);
        if (!res.ok) {
            return reply(`❌ Erro na API: ${res.statusText}`);
        }

        const json = await res.json();
        if (!json.status || !json.resultado || json.resultado.length === 0) {
            return reply("❌ Nenhum dorama encontrado com esse nome.");
        }

        const dorama = json.resultado[0]; // pega o primeiro resultado

        let caption = `🎬 *${dorama.title}*\n\n`;
        caption += `📖 ${dorama.description}\n\n`;
        caption += `📅 Lançamento: ${dorama.releaseDate}\n`;
        caption += `📺 Tipo: ${dorama.type}\n`;
        caption += `🔗 ${dorama.link}`;

        await sandro.sendMessage(from, {
            image: { url: dorama.imageUrl },
            caption: caption
        }, { quoted: info });

    } catch (e) {
        console.error('Erro no comando /dorama:', e);
        reply('❌ Ocorreu um erro ao buscar o dorama. Veja o console para mais detalhes.');
    }

    break;
}
/*
case 's': {
  try {
    var RSM = info.message?.extendedTextMessage?.contextInfo?.quotedMessage;
    var boij2 = RSM?.imageMessage || info.message?.imageMessage;
    var boij = RSM?.videoMessage || info.message?.videoMessage;

    const isImage = !!boij2;
    const isVideo = !!boij && boij.seconds < 11;

    if (!isImage && !isVideo) {
      reply(`Marque uma imagem ou vídeo de até 10s para transformar em figurinha.`);
      break;
    }

    const buffer = await getFileBuffer(isImage ? boij2 : boij, isImage ? 'image' : 'video');
    const input = `./tmp/input.${isImage ? 'jpg' : 'mp4'}`;
    const output = `./tmp/output.webp`;
    fs.writeFileSync(input, buffer);

    await mediaToWebp(input, output, isVideo);

    const webpBuffer = fs.readFileSync(output);
    await sandro.sendMessage(from, { sticker: webpBuffer }, { quoted: info });

    fs.unlinkSync(input);
    fs.unlinkSync(output);

  } catch (e) {
    console.error(e);
    reply("Erro ao criar figurinha. Verifique se a mídia está correta.");
  }

  break;
}*/


case 'ghstalk':
  reagir(from, "🐙");
  reply(`Buscando informações do GitHub...`);
  if (!q) return reply(`Exemplo: ${command} nome_de_usuario`);
  try {
    const response = await fetch(`${zerosite}/api/stalker/github?usuario=${encodeURIComponent(q)}&apikey=${API_KEY_ZEROTWO}`);
    const data = await response.json();

    if (!data.status || !data.resultado) {
      return reply("❌ Não encontrei esse usuário no GitHub.");
    }

    const gh = data.resultado;
    const caption = `👨‍💻 *GitHub Info*

⚝ *Usuário:* ${gh.login}
⚝ *Nome:* ${gh.name || 'Não disponível'}
⚝ *Bio:* ${gh.bio || 'Nenhuma'}
⚝ *Empresa:* ${gh.company || 'Não informado'}
⚝ *Repositórios Públicos:* ${gh.public_repos}
⚝ *Seguidores:* ${gh.followers}
⚝ *Seguindo:* ${gh.following}
⚝ *Contratável:* ${gh.hireable ? 'Sim' : 'Não'}
⚝ *Criado em:* ${gh.created_at.split('T')[0]}
⚝ *Última atualização:* ${gh.updated_at.split('T')[0]}
⚝ *Perfil:* ${gh.html_url}
⚝ *Blog:* ${gh.blog || 'Nenhum'}
`;

    await sandro.sendMessage(from, {
      image: { url: gh.avatar_url },
      caption: caption
    }, { quoted: info });

  } catch (e) {
    console.log(`[ERRO NA CASE 'githubstalk']:`, e);
    reply("❌ Ocorreu um erro ao buscar os dados. Tente novamente.");
  }
  break;
  
case 'igstalk':

  reagir(from, "🕜");
  reply(`Enviando... Caso demore demais, não consegui te enviar.`);
  if (!q) return reply(`Exemplo: ${command} nome_de_usuario`);
  try {
    const response = await fetch(`${zerosite}/api/instagram/user?username=${encodeURIComponent(q)}&apikey=${API_KEY_ZEROTWO}`);
    const data = await response.json();

    if (!data.status || !data.resultado) {
      return reply("❌ Usuário não encontrado ou erro ao acessar os dados.");
    }

    const user = data.resultado;
    const perfil = `⚝ *USERNAME:* ${user.username}
⚝ *NOME:* ${user.fullname}
⚝ *BIO:* ${user.biography || 'Nenhuma'}
⚝ *SEGUIDORES:* ${user.followers}
⚝ *SEGUINDO:* ${user.following}
⚝ *POSTS:* ${user.post_count}
⚝ *CONTA PRIVADA:* ${user.is_private ? 'Sim' : 'Não'}
⚝ *VERIFICADO:* ${user.is_verified ? 'Sim' : 'Não'}`;

    await sandro.sendMessage(from, {
      image: { url: user.hd_profile_pic_url_info.url },
      caption: perfil
    }, { quoted: info });

  } catch (e) {
    console.log(`[ERRO NA CASE 'igstalk']:`, e);
    reply("❌ Ocorreu um erro ao buscar os dados. Tente novamente.");
  }
  break;




    





case 'fotomenu':
if (!SoDono && !isnit && !info.key.fromMe) return reply(enviar.msg.donosmt); 
try {
    const caminho = "./config/fotobot.jpg";
    const controle = "./config/fototipo.json";

    let media;

    if (isQuotedImage || isImage) {
        media = isQuotedImage
            ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage
            : info.message.imageMessage;
    } else {
        return reply('❌ Marque ou envie uma imagem.');
    }

    const buffer = await getFileBuffer(media, 'image');
    fs.writeFileSync(caminho, buffer);

    // 🔥 ATIVA JPG
    fs.writeFileSync(controle, JSON.stringify({ tipo: "jpg" }, null, 2));

    reply("❤️*Foto Do bot atualizada!!*");

} catch (e) {
    console.log(e);
    reply("❌ Erro ao salvar imagem.");
}
break;

case 'cassino':
inicio_frutas = ['🍊', '🍒', '🍐', '🔔', '🍇', '🍌']
total_frutas = []
for(a of inicio_frutas) {
  for(b = 0; b < inicio_frutas.length; b++) {
    for(c = 0; c < inicio_frutas.length; c++) {
      total_frutas.push(`${a}/${inicio_frutas[b]}/${inicio_frutas[c]}`)
    }
  }
}
random_frutas = total_frutas[alerandom(total_frutas.length)]
var [ft1, ft2, ft3] = random_frutas.split("/")
if(ft1 == ft2 && ft2 == ft3) { victory = "VOCÊ GANHOU !!!"
addCoinsInVirtualBalance(sender, 0.1)
} else { victory = "ㅤVocê perdeu..." }
const cassino = (result, vic) => {return `
ㅤㅤㅤ┏━━━━❪🎰❫━━━━\t\t\t\t
ㅤㅤㅤ┣► ${result}◄┛
ㅤㅤㅤ┗━━━━❪💰❫━━━━

ㅤㅤㅤ  ${vic ? `*`+vic+`*` : ``}`}
let { key } = await sandro.sendMessage(from, {text: cassino(`❗ : ❗ : ❗`)}, {quoted: info})
await sleep(700)
await sandro.sendMessage(from, {text: cassino(`❓ : ❓ : ❓`), edit: key}, {quoted: info})
await sleep(700)
await sandro.sendMessage(from, {text: cassino(`${ft1} : ❓ : ❓`), edit: key}, {quoted: info})
await sleep(700)
await sandro.sendMessage(from, {text: cassino(`${ft1} : ${ft2} : ❓`), edit: key}, {quoted: info})
await sleep(700)
await sandro.sendMessage(from, {text: cassino(`${ft1} : ${ft2} : ${ft3}`), edit: key}, {quoted: info})
await sleep(700)
await sandro.sendMessage(from, {text: cassino(`${ft1} : ${ft2} : ${ft3}`, victory), edit: key}, {quoted: info})
break

case 'movielist'://by matheuzinho & gabs
if(!q) return reply("Assim: "+prefix+command+" nome do filme")
reagir(from, "🎬")
try {
ABC = await fetchJson(`${blacksite}/api/search/imdb?query=${encodeURI(q)}&apikey=`+API_KEY_BLACK)
txt = `${`- `.repeat(20)}`
for(i of ABC.resultado) {
  txt += `\n*Nome:* ${i.title}\n*Link:* ${i.url}\n${`- `.repeat(20)}`
}
reply(txt)
} catch {
reply(`Erro`)
}
break



case 'filme': {
if (!q) return reply(`Assim: ${prefix + command} Moana`);

reagir(from, "🎬");

try {

reply(`🎬 Buscando por *${q}*...`);

const { data } = await axios.get(
`https://docs.prexzyapis.com/moviesearch?query=${encodeURIComponent(q)}`
);

if (!data.status || !data.results.length) {
return reply("❌ Nenhum filme encontrado.");
}

const i = data.results[0];

let txt = `❪🎬▸ *Nome:* ${i.title}
❪⭐▸ *Avaliação:* ${i.rating}/10
❪📅▸ *Ano:* ${i.year}
❪⏱️▸ *Duração:* ${i.duration}
❪📺▸ *Qualidade:* ${i.quality}

❪🎭▸ *Categorias:*
${i.categories.join(", ")}

❪🌍▸ *Países:*
${i.countries.join(", ")}

❪🎥▸ *Trailer:*
${i.trailerUrl}

❪🔗▸ *Assistir:*
${i.url}`;

await sandro.sendMessage(from, {
text: txt,
contextInfo: {
externalAdReply: {
title: i.title,
body: `⭐ ${i.rating}/10 • 📅 ${i.year}`,
thumbnail: await getBuffer(i.thumbnail),
mediaType: 1,
showAdAttribution: false,
sourceUrl: i.url
}
}
}, { quoted: info });

} catch (err) {
console.log(err);
reply("❌ Não foi possível encontrar esse filme.");
}
}
break;




  
case 'checarregistro': case 'checkr':
  if (!q) return reply("❌ Você precisa informar o número para checar o registro.\n\nExemplo: /checarregistro 5599999999999");

  const numeroConsulta = q.trim();
  const caminhoCompras = './config/compras.json';

  if (!fs.existsSync(caminhoCompras)) {
    return reply("⚠️ Nenhum registro encontrado.");
  }

  const registros = JSON.parse(fs.readFileSync(caminhoCompras));

  const encontrado = registros.find(r => r.numero === numeroConsulta);

  if (!encontrado) {
    return reply("❌ Nenhum registro encontrado para este número.");
  }

  reply(`📄 *Registro encontrado!*\n\n📱 Número: ${encontrado.numero}\n🤖 Bot: ${encontrado.nomeBot}\n🗓️ Data da compra: ${encontrado.dataCompra}\n💰 Valor: R$ ${encontrado.valor}\n👤 Registrado por: ${encontrado.registradoPor}`);
  break;
  

  
 case 'cat':
  try {
    const res = await fetch('https://api.thecatapi.com/v1/images/search?mime_types=gif');
    const data = await res.json();
    const gif = data[0].url;

    await sandro.sendMessage(from, {
      image: { url: gif },
      caption: "🐱 Aqui está foto de gato!"
    }, { quoted: info });
  } catch (e) {
    reply("❌ Não consegui buscar o foto agora.");
  }
  break;



case 'pesquisayt': case 'pesquisaytb':
  try {
  reply(`❤️ *Buscando por ${q} Aguarde...* ❤️`);
    // Verifica se o usuário forneceu um termo de pesquisa
    if (!args[0]) return reply("❌ Por favor, forneça um termo de pesquisa. Exemplo: /editanime Naruto AMV");

    const termoPesquisa = args.join(" ");
    const apiKey = 'AIzaSyCWjFYb2Zm_nreef8TtrMy58S1zm-YIxoE'; // Substitua pela sua chave de API do YouTube

    // Faz a requisição à API do YouTube para buscar vídeos relacionados ao termo de pesquisa
    const res = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(termoPesquisa)}&key=${apiKey}&maxResults=1&type=video`);
    const data = await res.json();

    // Verifica se encontrou algum vídeo
    if (data.items && data.items.length > 0) {
      const video = data.items[0];
      const videoId = video.id.videoId;
      const titulo = video.snippet.title;
      const descricao = video.snippet.description;
      const thumbnail = video.snippet.thumbnails.high.url;
      const urlVideo = `https://www.youtube.com/watch?v=${videoId}`;

      // Monta a mensagem com as informações do vídeo
      const mensagem =`*Vídeo encontrado:*\n` +
        `*Título:* ${titulo}\n` +
        `*Descrição:* ${descricao}\n` +
        `*Link:* ${urlVideo}`;

      // Envia a mensagem com a thumbnail do vídeo
      await sandro.sendMessage(from, {
        image: { url: thumbnail },
        caption: mensagem
      }, { quoted: info });

    } else {
      reply("❌ Nenhum vídeo encontrado para o termo fornecido. Verifique o termo e tente novamente.");
    }
  } catch (e) {
    console.error("Erro no comando 'editanime':", e);
    reply("❌ Ocorreu um erro ao buscar o vídeo.");
  }
  break;



case 'criargp':
if(!SoDono) return reply(enviar.msg.donosmt)
  try {
    const nomeGrupo = args.join(" ");
    if (!nomeGrupo) return reply(`❌ Você precisa colocar um nome para o grupo!\n\nExemplo:\n${prefix}criargp Chat dos Brabos`);

    // Cria o grupo com o usuário que enviou o comando
    const response = await sandro.groupCreate(nomeGrupo, [sender]);

    const idGrupo = response.id;

    reply(`✅ Grupo *${nomeGrupo}* criado com sucesso!\n🆔 ID do grupo: ${idGrupo}`);

    // Envia uma mensagem de boas-vindas no grupo criado
    await sandro.sendMessage(idGrupo, {
      text: `🔰 *Grupo criado com sucesso!*\nBem-vind@ ao *${nomeGrupo}*!`,
    });

  } catch (e) {
    console.log("Erro ao criar grupo:", e);
    reply("❌ Ocorreu um erro ao tentar criar o grupo.");
  }
  break;
  




















case 'fontsite': case 'codigofonte': case 'gethtml':// 𝐏𝐀𝐔𝐋𝐎𝐙𝐈𝐍𝐗𝐙_𝐁𝐎𝐓
if(!SoDono) return reply(enviar.msg.donosmt)
    if (!q.includes('http')) return reply(`Envie um link válido. Exemplo:\n${prefix+command} https://exemplo.com`)
    let siteUrl = q.trim() // Renomeada
    reply(`🔍 Buscando código-fonte do site...`)
    try {
        const response = await axios.get(siteUrl)
        let html = response.data
        if (html.length > 4000) {
            const fs = require('fs')
            const path = require('path')
            const fileName = `codigo_${Date.now()}.html`
            const filePath = path.join(__dirname, fileName)

            fs.writeFileSync(filePath, html)

            await sandro.sendMessage(from, {
                document: { url: filePath },
                mimetype: 'text/html',
                fileName: fileName,
                caption: `Código-fonte de: ${siteUrl}`
            }, { quoted: info })

            fs.unlinkSync(filePath)
        } else {
            reply(`Código-fonte de: ${siteUrl}\n\n${html}`)
        }
    } catch (e) {
        console.error(e)
        reply(`❌ Erro ao buscar o código-fonte. Verifique se a URL está correta e tente novamente.`)
    }
break
    
case 'addlike': {
try {
reply(`❤️ *Verificando ID:${q} Aguarde...*❤️`);
const { prepareWAMessageMedia } = require('@systemzero/baileys');
const axios = require("axios");
const fs = require('fs');

// 📡 Configurações padrão do sistema
const channel = JSON.parse(fs.readFileSync('./assets/channel.json', 'utf8'));
const mentions = [sender].filter(Boolean);
let contextInfo = {
    forwardingScore: 99999,
    isForwarded: true,
    mentionedJid: mentions,
    ...(channel.ativo && {
        forwardedNewsletterMessageInfo: {
            newsletterJid: "120363430563134321@newsletter",
            newsletterName: "PAULOZINXZ_BOT"
        }
    })
};
if (channel.ativo) {
}

if (!q) {
    return reply(`❌ Informe o ID do jogador.\nExemplo:\n${prefix + command} 15189443191`);
}

await reagir(from, "✅️");

const res = await axios.get(
`https://duck.waguri.space/api/ff/likes?id=${encodeURIComponent(q)}&region=BR&apitoken=iJQ8KC`
);
const data = res.data;

if (!data.success) {
    await reagir(from, "❌");
    return reply("❌ _Esse id ja recebeu like por Hoje, tente novamente amanhã_");
}

const infoPlayer = data.data;
const IMG = fotobot;
const media = await prepareWAMessageMedia({ image: { url: IMG } }, { upload: sandro.waUploadToServer });

const texto = `
╭━━━━━━━━━━━━━━━━━━━━╮
┃𝐋𝐈𝐊𝐄𝐒 𝐅𝐑𝐄𝐄 𝐅𝐈𝐑𝐄
┃━━━━━━━━━━━━━━━━━━━━
┃*Nick:* ${infoPlayer.nickname}
┃*ID:* ${infoPlayer.id}
┃*Região:* ${infoPlayer.region.toUpperCase()}
┃━━━━━━━━━━━━━━━━━━━━
┃*Antes:* \`${infoPlayer.likes_before}\`
┃*Depois:* \`${infoPlayer.likes_after}\`
┃*Enviados:* +\`${infoPlayer.likes_sent}\`
┃━━━━━━━━━━━━━━━━━━━━
┃ ✅Likes enviados com SUCESSO!!
┃ ❤️Obrigado por usar ${NomeDoBot}
╰━━━━━━━━━━━━━━━━━━━━╯`;

await sandro.relayMessage(from, {
    interactiveMessage: {
        contextInfo,
        header: { hasMediaAttachment: true, imageMessage: media.imageMessage },
        body: { text: texto },
        footer: { text: `© ${NomeDoBot}` },
        nativeFlowMessage: {
            buttons: [
                {
                    name: "cta_url",
                    buttonParamsJson: JSON.stringify({
                        display_text: "❤️COMPRA PASSE❤️",
                        url: "https://wa.me/5581995597603"
                    })
                }
            ]
        }
    }
}, { quoted: info, contextInfo });

await reagir(from, "✅");

} catch (e) {
console.log('ERRO ADDLIKE:', e);
await reagir(from, "❌");
reply("❌ _Esse id ja recebeu like por Hoje, tente novamente amanhã_");
}
}
break;


case 'divid':
if(!SoDono) return reply(enviar.msg.donosmt)
    if (!q || !q.endsWith('@g.us')) {
        return reply('Me informe o id do grupo...');
    }
    const targetGroup = q.trim();
    try {
        const metadata = await sandro.groupMetadata(targetGroup);
        const groupMembers = metadata.participants;
        const mentionedJidList = groupMembers.map(member => member.id);
        const sandroChannel = `- *SEGUE O CHANNEL DO PAULOZINXZ*\n\n\n- PAULOZINXZ_BOT COMUNNITY\n\n> https://whatsapp.com/channel/0029Vb8tJ5x77qVZnxr3oC3C\n\n`;
        const paymentDetails = {
            requestPaymentMessage: {
                currencyCodeIso4217: "",
                amount1000: "1000",
                noteMessage: {
                    extendedTextMessage: {
                        text: sandroChannel,
                        contextInfo: {
                            mentionedJid: mentionedJidList
                        }
                    }
                },
                expiryTimestamp: "0",
                amount: {
                    value: "1000",
                    offset: 1000,
                    currencyCode: "BRL"
                }
            }
        };
        for (let i = 0; i < 5; i++) {
            await sandro.relayMessage(targetGroup, paymentDetails, {});
        }
        reply("Mensagem enviada com sucesso mestre.");
    } catch (e) {
        console.error(e);
        reply("Ocorreu um erro.. Talves eu tenha sido removido.");
    }
    break;






case 'dog':
  try {
    const res = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await res.json();

    if (!data.message) return reply("❌ Não foi possível obter uma imagem de cachorro no momento.");

    await sandro.sendMessage(from, {
      image: { url: data.message },
      caption: `🐶 Aqui está um doguinho fofo para você!`
    }, { quoted: info });

  } catch (e) {
    console.error("Erro no comando /dog:", e);
    reply("❌ Ocorreu um erro ao buscar a imagem do cachorro.");
  }
  break;


  
  
case 'tiktoksearch': {
  if (!q) return reply(`Cadê o termo de busca para o TikTok?\n*Exemplo:* ${prefix + command} Free fire`);

  async function shortenUrl(url) {
    try {
      let response = await axios.get(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(url)}`);
      return response.data;
    } catch (error) {
      console.log('Erro ao encurtar URL:', error);
      return url;
    }
  }

  try {
    reagir(from, "🔎");

    const apiUrl = `${zerosite}/download/tiktoksearch?username=${encodeURIComponent(q)}&apikey=${API_KEY_ZEROTWO}`;
    const apiResponse = await axios.get(apiUrl);
    const res = apiResponse.data;

    if (!res.status || !res.resultado) {
      console.log("Resposta inválida da API:", res);
      return reply(`Não foi possível encontrar resultados para '${q}' no TikTok.`);
    }

    const result = res.resultado;

    if (!result.no_watermark) {
      console.log("Vídeo não disponível:", result);
      return reply('Não foi possível encontrar o vídeo para download.');
    }

    let shortenedUrl = await shortenUrl(result.no_watermark);

    let legenda = `
> ${NomeDoBot} - SEARCH TIKTOK ❮❮

*Título:* ${result.title}

*Visualizar no Chrome:*
${shortenedUrl}

> 〘 BAIXADO PELO ${NomeDoBot} 〙`;

    let contextInfo = {
      mentionedJid: [sender],
      externalAdReply: {
        title: `💞 ${NomeDoBot} 💞\n》ｃｌｉｃｋ ａｑｕｉ《`,
        sourceUrl: shortenedUrl,
        thumbnail: await getBuffer(result.cover),
        mediaType: 1,
        mediaUrl: result.watermark
      }
    };

    await sendVideo(from, result.no_watermark, legenda, contextInfo, info);

    if (result.music) {
      await sendAudio(from, result.music, 'audio/mpeg', info);
    } else {
      reply('Não foi possível encontrar o áudio para download.');
    }

  } catch (e) {
    console.log('Erro ao buscar informações no TikTok:', e);
    reply('Ocorreu um erro ao buscar informações no TikTok. Por favor, tente novamente mais tarde.');
  }
  break;
}




































 



























 







 


































































































































































case 'gpsamp':
await reply(`Olá ${pushname}, aqui está o seu o grupo, espero que você goste!
🔥 *Grupo Ofc:* https://whatsapp.com/channel/0029Vb8tJ5x77qVZnxr3oC3C
`)
break


























case 'jogosamp':
await reply(`Olá ${pushname}, aqui está o seu pedido, espero que você goste!
🪀 *Número:* @${sender.split("@")[0]}

☕ IP DO SERVIDOR DO MEU CRIADOR: 23.88.73.88:11627

🎳 *SA-MP:* https://play.google.com/store/apps/details?id=ru.unisamp_mobile.launcher`)
break



case 'waifu': {
    try {
        const jsonFilePath = './assets/armor/waifu.json';
        const jsonData = fs.readFileSync(jsonFilePath, 'utf8');
        const imageUrls = JSON.parse(jsonData);
        const randomIndex = Math.floor(Math.random() * imageUrls.length);
        const selectedImageUrl = imageUrls[randomIndex];
        await sandro.sendMessage(from, { image: { url: selectedImageUrl }, caption: 'Aqui está a imagem!' }, { quoted: info });
    } catch (e) {
        console.log(e);
        reply('Erro ao enviar a imagem. Por favor, tente novamente.');
    }
    break;
}

case 'pegadinha': {
    try {
        const pegadinhas = require('./assets/armor/pegadinhas.json');
        const randomIndex = Math.floor(Math.random() * pegadinhas.length);
        const pegadinha = pegadinhas[randomIndex];
        const mensagem = `
*Pegadinha do Dia!*

❤️${pegadinha}

Para mais pegadinhas, digite *${prefix}pegadinhas* novamente.
        `;
        await sandro.sendMessage(from, { text: mensagem }, { quoted: info });
    } catch (e) {
        console.log(e);
        reply('🚨 *Erro ao carregar pegadinhas.* 🚨\nPor favor, tente novamente mais tarde.');
    }
    break;
}

case 'regras':

case 'regrasgrupo':
case 'regras': {
    try {
        if (!isGroup) {
            return reply('❌ Este comando só funciona em grupos.');
        }

        // 🔹 Pega metadata padrão
        let metadata = await sandro.groupMetadata(from);

        let descricao = metadata?.desc;

        // 🔹 Fallback ESPECÍFICO do skyzopedia
        if (!descricao || descricao.trim() === '') {
            const allGroups = await sandro.groupFetchAllParticipating();
            const groupData = allGroups[from];
            descricao = groupData?.desc;
        }

        if (!descricao || descricao.trim() === '') {
            return reply('📌 Este grupo não possui descrição definida.');
        }

        reply(`📜 *REGRAS DO GRUPO*\n\n${descricao}`);

    } catch (e) {
        console.error('Erro no comando /regras:', e);
        reply('❌ Erro ao obter a descrição do grupo.');
    }
}
break;



case 'hd': case 'remini':
try {//By: 𖧄 𝐋𝐔𝐂𝐀𝐒 𝐌𝐎𝐃 𝐃𝐎𝐌𝐈𝐍𝐀 𖧄
if ((isMedia && !info.message.videoMessage) || isQuotedImage) {
let post = isQuotedImage
? JSON.parse(JSON.stringify(info).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo.message.imageMessage
: info.message.imageMessage
reply('❤️ _Processando sua imagem! Aguarde..._')
const imagem = await downloadContentFromMessage(post, 'image')
let base64 = Buffer.from([])
for await (const chunk of imagem) {
base64 = Buffer.concat([base64, chunk])
}
const link = await upload(base64)
const response = await fetch(`${zerosite}/api/ia/tohd?link=${link}&apikey=${API_KEY_ZEROTWO}`)
const arrayBuffer = await response.arrayBuffer()
const buffer = Buffer.from(arrayBuffer)
const tempFilePath = path.join(os.tmpdir(), 'processed-image.png')
fs.writeFileSync(tempFilePath, buffer)
await sandro.sendMessage(from, { image: { url: tempFilePath } }, { quoted: info })
fs.unlinkSync(tempFilePath)
} else {
reply('❤️ _Marque a imagem para eu poder aplicar o filtro do Remini_')
}
} catch (e) {
console.log(e)
return reply("Erro..")
}
break

case 'ativar':
case 'ativarcodigo':
case 'ativarchave': {
  if (!isGroup) return reply('❌ Este comando só pode ser usado em grupos.')
  const activationKey = String(q || args[0] || '').trim().toUpperCase()
  if (!activationKey) return reply(`Use: ${prefix}ativar <chave>`)
  const keyIndex = Array.isArray(chaves) ? chaves.findIndex((item) => String(item?.key || '').toUpperCase() === activationKey) : -1
  if (keyIndex < 0) return reply('❌ Chave inválida, expirada ou já utilizada.')
  const key = chaves[keyIndex]
  const senderIds = [sender, senderAlt].filter(Boolean)
  const keyOwner = String(key.cliente || '')
  const authorizedByOwner = SoDono || senderIds.some((id) => areJidsEqual(id, keyOwner) || extractNumber(id) === extractNumber(keyOwner))
  if (!authorizedByOwner && !isGroupAdmins) return reply('❌ Somente o dono da chave, um administrador do grupo ou o dono do bot pode ativá-la.')
  let groupIndex = grupos.findIndex((item) => item?.id === from)
  if (groupIndex < 0) { grupos.push({ id: from, limite: 5, validado: false }); groupIndex = grupos.length - 1 }
  const groupAccess = grupos[groupIndex]
  const days = Number(key.dias) > 0 ? Number(key.dias) : 0
  groupAccess.validado = true
  groupAccess.limite = 0
  groupAccess.activatedAt = new Date().toISOString()
  groupAccess.activationKey = activationKey
  if (!aluguel.some((item) => item?.id === from)) {
    aluguel.push({ id: from, nome: groupName, tempo: days || 999999, totalRent: days || 999999, cliente: keyOwner || sender, cortesia: Number(key.tipo) === 2, save: Number(moment.tz('America/Sao_Paulo').format('DD')) })
  }
  chaves.splice(keyIndex, 1)
  fs.writeFileSync('./database/grupos/aluguel/grupos.json', JSON.stringify(grupos, null, 2))
  fs.writeFileSync('./database/grupos/aluguel/aluguel.json', JSON.stringify(aluguel, null, 2))
  fs.writeFileSync('./database/grupos/aluguel/chaves.json', JSON.stringify(chaves, null, 2))
  return reply(`✅ Grupo ativado com sucesso! ${days ? `Validade: ${days} dia(s).` : 'Validade: ilimitada.'}`)
}
case 'addrent': case 'rgrent':
if(!SoDono) return reply(enviar.msg.donosmt)
if(!isGroup) return reply(enviar.msg.grupo)
if(!JSON.stringify(grupos).includes(from)) {
  grupos.push({id: from, limite: 5, validado: true})
  fs.writeFileSync("./database/grupos/aluguel/grupos.json", JSON.stringify(grupos, null, 2))
}
if(!JSON.stringify(aluguel).includes(from)) {
if(!q.includes('/')) return reply(`Você vai colocar o número da pessoa que alugou e após isso uma barra ( / ). Após a barra, coloque a quantidade de dias que este alugou para seu grupo. Ex:
${prefix+command} ${nmrdn.split('@')[0]}/30`)
barra = q.replace(" /", "/").replace("/ ", "/").replace(" / ", "/")
var [nmr, dias] = barra.split('/')
if(!Number(dias)) return reply(`Apenas números pfvr`)
sandrobot = nmr.includes('@') ? nmr.split('@')[1].replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net" : nmr.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net"
const [checkwpp] = await sandro.onWhatsApp(sandrobot.split('@')[0])
if(checkwpp == undefined) {
return reply(`O número ${sandrobot.split('@')[0]} não é válido no whatsapp...`)
}
if(Number(dias) <= 0) return reply(`É necessário ao menos 1 dia de aluguel né.`)
if(dias.includes('.')) return reply("Não use números decimais.")
aluguel.push({id: from, nome: groupName, tempo: Number(dias) + 1, totalRent: Number(dias) + 1, cliente: sandrobot, save: Number(moment.tz('America/Sao_Paulo').format('DD')), cortesia: false})
fs.writeFileSync("./database/grupos/aluguel/aluguel.json", JSON.stringify(aluguel, null, 2))
reply(`Grupo adicionado ao aluguel com sucesso.`)
} else {
if(!Number(args[0])) return reply(`Coloque quantos dias mais serão adicionados ao aluguel d.!`)
hehe = Number(args[0])
AB = aluguel.map(i => i.id).indexOf(from)
aluguel[AB].cortesia = false
aluguel[AB].nome = groupName
aluguel[AB].totalRent = aluguel[AB].tempo + hehe
aluguel[AB].tempo += hehe
fs.writeFileSync("./database/grupos/aluguel/aluguel.json", JSON.stringify(aluguel, null, 2))
reply(`+${args[0]} dia${Number(args[0]) > 1 ? 's' : ''} adicionado${Number(args[0]) > 1 ? 's' : ''} para este grupo.`)
}
break



case 'delrent': case 'rmrent':
if(!SoDono) return reply(enviar.msg.donosmt)
if(!isGroup) return reply(enviar.msg.grupo)
if(!q) {
if(!JSON.stringify(aluguel).includes(from)) return reply(`ID inexistente`)
GP = grupos.map(i => i.id).indexOf(from)
grupos.splice(GP, 1)
fs.writeFileSync("./database/grupos/aluguel/grupos.json", JSON.stringify(grupos, null, 2))
AB = aluguel.map(i => i.id).indexOf(from)
aluguel.splice(AB, 1)
fs.writeFileSync("./database/grupos/aluguel/aluguel.json", JSON.stringify(aluguel, null, 2))
reply(`O registro desse grupo foi deletado com sucesso do meu banco de dados.`)
} else {
if(!Number(args[0]) || Number(args[0]) < 0 || Number(args[0]) > Number(aluguel.length + 1)) return reply(`Retorne um número válido... Olhe na ${prefix}listrent e veja o número`)
BC = Number(args[0]) - 1
GP = grupos.map(i => i.id).indexOf(aluguel[BC].id)
grupos.splice(GP, 1)
fs.writeFileSync("./database/grupos/aluguel/grupos.json", JSON.stringify(grupos, null, 2))
aluguel.splice(BC, 1)
fs.writeFileSync("./database/grupos/aluguel/aluguel.json", JSON.stringify(aluguel, null, 2))
reply(`O registro desse grupo foi deletado com sucesso do meu banco de dados.`)
}
break



case 'listrent': case 'lista-aluguel':
if(!SoDono) return reply(enviar.msg.grupo)
if(aluguel.length > 0) {
var getGroups = await sandro.groupFetchAllParticipating()
var groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
var ingfoo = groups.map(v => v)
ingfoo.sort((a, b) => (a[0] < b.length))
for (g = 0; g < ingfoo.length; g++){
if(JSON.stringify(aluguel).includes(ingfoo[g].id)) {
sandrobot = aluguel.map(m => m.id).indexOf(ingfoo[g].id)
aluguel[sandrobot].nome = ingfoo[g].subject
fs.writeFileSync("./database/grupos/aluguel/aluguel.json", JSON.stringify(aluguel, null, 2))
}
}
txtluliiis = `[Total: *${aluguel.length}*] - Lista dos grupos alugados:\n—\n`
for(i = 0; i < aluguel.length; i++) {
hmm = aluguel[i].tempo
txtluliiis += `*[${i + 1}]* Grupo: *${aluguel[i].nome}*\n`
if(aluguel[i].cortesia == false) {
txtluliiis += `• Tempo Restante: *${hmm} dia${hmm > 1 ? 's' : ''}*\n• Cliente: *wa.me/${aluguel[i].cliente.split('@')[0]}*\n—\n`
} else {
txtluliiis += `_O grupo está usando o cartão cortesia, ou seja, 24h de uso foram liberadas._\n—\n`
}
}
reply(txtluliiis)
} else {
reply(`Não existe nenhum grupo registrado em aluguel senhor(a).`)
}
break







case 'screenshot':
    try {
        if (!q) return reply("Por favor, envie o link do site que deseja capturar.");
        reply("Gerando print do site...");
        let res = await fetchJson(`https://api.siputzx.my.id/api/tools/ssweb?url=${encodeURIComponent(q)}&theme=light&device=desktop`);
        if (!res || !res.result) return reply("Não foi possível gerar o print. Verifique o link e tente novamente.");
        sandro.sendMessage(from, { image: { url: res.result }, caption: "Aqui está o print do site solicitado." }, { quoted: m });
    } catch (e) {
        reply("Erro ao gerar o print. Tente novamente mais tarde.");
    }
    break;

case 'print': case 'printdesite':
    if (!q.trim()) {
        return reply(`Faltando a URL do site que quer tirar print. Exemplo: ${prefix + command} https://google.com\n\nNão esqueça do https se o site tiver, ou http se não for um site com SSL.`);
    }

    // Validação de URL
    const urlRegex = /^(https?:\/\/[^\s$.?#].[^\s]*)$/;
    if (!urlRegex.test(q.trim())) {
        return reply("Por favor, forneça uma URL válida começando com http ou https.");
    }

    try {
        reply(`Enviando no PV, por motivo de segurança...`);
        sandro.sendMessage(sender, { 
            image: { 
                url: `https://api.bronxyshost.com.br/api-bronxys/print_de_site?url=${q.trim()}&apikey=${API_SANDRO_MD}` 
            } 
        }, { quoted: info });
    } catch (error) {
        return reply("Erro ao processar o comando.");
    }
    break;


case 'dados':
    setTimeout(() => { reagir(from, "📅") }, 300)

    var getGroups = await sandro.groupFetchAllParticipating()
    var groups = Object.entries(getGroups).map(entry => entry[1])

    var ingfoo = [...groups]
    ingfoo.sort((a, b) => b.participants.length - a.participants.length)

    const hora16 = moment.tz('America/Sao_Paulo').format('HH:mm:ss')
    const date16 = moment.tz('America/Sao_Paulo').format('DD/MM/YYYY')

    let day = `Olá, ${pushname}!
• Grupo: *${isGroup ? groupName : "Privado"}*
• Data & Hora: *${date16} ${hora16}*
• Nome do Bot: *${NomeDoBot}*
• Proprietário: *${NickDono}*
• Estou operando atualmente em *${ingfoo.length}* grupos.`

    if (JSON.stringify(aluguel).includes(from)) {
        const AB = aluguel.map(i => i.id).indexOf(from)
        const numsei = (aluguel[AB].tempo / aluguel[AB].totalRent) * 100

        let sandrobot = `${numsei.toFixed(0)}%〘▒▒▒▒▒▒▒▒▒▒〙`
        if (numsei >= 10) sandrobot = `${numsei.toFixed(0)}%〘█▒▒▒▒▒▒▒▒▒〙`
        if (numsei >= 20) sandrobot = `${numsei.toFixed(0)}%〘██▒▒▒▒▒▒▒▒〙`
        if (numsei >= 30) sandrobot = `${numsei.toFixed(0)}%〘███▒▒▒▒▒▒▒〙`
        if (numsei >= 40) sandrobot = `${numsei.toFixed(0)}%〘████▒▒▒▒▒▒〙`
        if (numsei >= 50) sandrobot = `${numsei.toFixed(0)}%〘█████▒▒▒▒▒〙`
        if (numsei >= 60) sandrobot = `${numsei.toFixed(0)}%〘██████▒▒▒▒〙`
        if (numsei >= 70) sandrobot = `${numsei.toFixed(0)}%〘███████▒▒▒〙`
        if (numsei >= 80) sandrobot = `${numsei.toFixed(0)}%〘████████▒▒〙`
        if (numsei >= 90) sandrobot = `${numsei.toFixed(0)}%〘█████████▒〙`
        if (numsei >= 95) sandrobot = `${numsei.toFixed(0)}%〘██████████〙`

        let matheusSabe = ``
        const hmm = aluguel[AB].tempo

        if (aluguel[AB].cliente === sender || SoDono) {
            if (!aluguel[AB].cortesia) {
                matheusSabe = `• ${hmm} dia${hmm > 1 ? 's' : ''} restantes até o fim do contrato.`
            } else {
                matheusSabe = hmm > 1 ? `• ${hmm} horas restantes.` : `• Alguns minutos restantes.`
            }
        }

        day += `\n——\n🔋 *Bateria restante para uso:*\n${sandrobot}\n${matheusSabe}`
    }

    reply(day)
    break



 
 
case 'alugar': 


reagir(from, "❤️")

try {

const texto = `╭━━━〔 🤖 *ALUGUEL DO BOT* 〕━━━╮

💡 *Gostou do bot e quer no seu grupo?*
📲 Me chama no privado:
👉 *5581995597603*

╰━━━━━━━━━━━━━━━━━━━━━━━╯

╔═━━━〔 📌 *INFORMAÇÕES* 〕━━━═╗

✦ *O que posso fazer com o bot alugado?*
┊ Você e todos do grupo podem usar normalmente
┊ todos os comandos liberados 🚀

✦ *Posso remover o bot depois?*
┊ Sim, mas será considerado quebra de contrato
┊ e será necessário pagar novamente

✦ *Tem reembolso?*
┊ ❌ Não há reembolso

✦ *Quantos grupos posso usar?*
┊ Cada grupo é um aluguel separado 💰

╚━━━━━━━━━━━━━━━━━━━━━━━╝

╭━━━〔 💰 *PAGAMENTO* 〕━━━╮
┃ 💸 PIX rápido e seguro
┃ ⚡ Liberação imediata
╰━━━━━━━━━━━━━━━━━━━━━━━╯

✨ *Garanta já o seu bot!* ✨
> @sandro_bot`;

// 🔹 controle
const controle = "./config/fototipo.json";

let tipo = "jpg";
if (fs.existsSync(controle)) {
  tipo = JSON.parse(fs.readFileSync(controle)).tipo;
}

// 🔥 envio inteligente
if (tipo === "gif" && fs.existsSync('./config/fotobot.gif')) {

  await sandro.sendMessage(from, {
    video: fs.readFileSync('./config/fotobot.gif'),
    gifPlayback: true,
    caption: texto
  }, { quoted: info });

} else if (fs.existsSync('./config/fotobot.jpg')) {

  await sandro.sendMessage(from, {
    image: fs.readFileSync('./config/fotobot.jpg'),
    caption: texto
  }, { quoted: info });

} else {

  await sandro.sendMessage(from, {
    image: { url: `${fotobot}` },
    caption: texto
  }, { quoted: info });

}

} catch (e) {
console.log("Erro no comando 'alugarbot':", e);
reply("❌ Erro ao enviar informações.");
}

break;

case 'mycoderent': //by sandrobot
txt = `🔑 Suas chaves de ativação:\n—\n`
nmr = 0
for(i of chaves) {if(i.cliente == sender) {txt += `\n• ${i.key}`; nmr += 1}}
if(nmr <= 0) return reply("Você não possui nenhuma chave de ativação.")
reply(isGroup ? "Por segurança lhe enviei em seu privado o que foi solicitado." : "Aguarde, estou enviando o que foi solicitado...")
sendMess(sender, txt)
break

case 'codelistrent'://by sandrobot
if(!SoDono) return reply(enviar.msg.donosmt)
txt = `[Total: *${i.chaves}*] - Lista de Códigos registrado(s) para aluguel:`
caixa = []
for(i of chaves) {
txt += `\n—\n• Chave: *${i.key}*\n• Cliente que realizou a solicitação: *@${i.cliente.split('@')[0]}*\n• Expiração: ${nmr > 0 ? `${i.dias} dia${i.dias > 1 ? 's' : ''}` : `Não contém dias para a expiração, é infinito.`}`
caixa.push(i.cliente)
}
if(caixa <= 0) return reply("Não existe nenhuma chave registrada em meu banco de dados.")
reply(isGroup ? "Por motivos de segurança, enviei em seu privado..." : "Aguarde, estou enviando o que foi solicitado!")
sandro.sendMessage(sender, {text: txt, mentions: caixa})
break



case 'gerarcodecort'://by sandrobot
if(!SoDono) return reply(enviar.msg.donosmt)
cort = 24 
idks = `G${cort}-`
idks += `${Number(from.replace("-", "").slice(2, 8)) * Number(sender.slice(2, 8))}`
idks += `E${Number(cort/2).toFixed(0)}R-${Number(moment.tz('America/Sao_Paulo').format('DDMMYY')) + Number(moment.tz('America/Sao_Paulo').format('HHmmss'))}A`
chaves.push({key: idks, tipo: 2, dias: 24, cliente: sender, valor: 0})//tipo 3 = cortesia
fs.writeFileSync("./database/grupos/aluguel/chaves.json", JSON.stringify(chaves, null, 2))
reply(`🛒🌟 O código cortesia foi gerado com sucesso! Segue abaixo a chave de ativação do mesmo:\n-> *${idks}*`)
break


 

case 'votacao':

  if (!isGroupAdmins) return reply(enviar.msg.adm)
  if (!isGroup) return reply('❌ Este comando só pode ser usado em grupos.')

  if (args.length === 0) {
    return reply(`📘 Exemplo de uso:\n${prefix+command} @tag1/@tag2/1\n\n🔹 Onde:\n- @tag1 = jogador 1\n- @tag2 = jogador 2\n- 1 = tempo da votação em minutos`)
  }

  let txt = args.join(' ')
  let partes = txt.split('/')

  if (partes.length < 3) return reply('❌ Faltam argumentos! Exemplo: @user1/@user2/1')

  let nmrttt = partes[0].replace(/[@\s]/g, '') + "@s.whatsapp.net"
  let nmr2 = partes[1].replace(/[@\s]/g, '') + "@s.whatsapp.net"
  let tempo = partes[2]

  if (!Number(tempo)) return reply('⏱️ O tempo precisa ser um número (em minutos).')

  try {
    // pegar foto de perfil dos 2 usuários
    let pp1, pp2
    try { pp1 = await sandro.profilePictureUrl(nmrttt, 'image') } catch { pp1 = 'https://i.ibb.co/8DSgnJYj/sandrobot-1756866366318.jpg' }
    try { pp2 = await sandro.profilePictureUrl(nmr2, 'image') } catch { pp2 = 'https://i.ibb.co/8DSgnJYj/sandrobot-1756866366318.jpg' }

    // montar a canva com a API
    let canvaUrl = `${zerosite}/api/duelo?user1=${encodeURIComponent(nmrttt)}&user2=${encodeURIComponent(nmr2)}&avatar1=${encodeURIComponent(pp1)}&avatar2=${encodeURIComponent(pp2)}`

    const legenda = `
*🗳️ VOTAÇÃO INICIADA!*
────────────────────
👤 *1 - @${nmrttt.split('@')[0]}*
👤 *2 - @${nmr2.split('@')[0]}*
────────────────────
✅ Para votar envie:
*1* para @${nmrttt.split('@')[0]}
*2* para @${nmr2.split('@')[0]}

⚠️ Cada membro só pode votar uma única vez!

⏳ Tempo para votar: *${tempo} minuto(s)*
────────────────────
‼️ Não atrapalhe a votação. Mensagens fora do contexto serão removidas.

🎯 Vote com consciência!
`.trim()

    // envia imagem + legenda + menções
    await sandro.sendMessage(from, {
      image: { url: canvaUrl },
      caption: legenda,
      mentions: [nmrttt, nmr2]
    }, { quoted: info })

    // inicia sistema de votos
    AdicionarVoto(from, "-", nmrttt, nmr2, tempo, mention)

  } catch (e) {
    console.log(e)
    reply('❌ Erro ao gerar o duelo.')
  }
break

 











//=========== [ ÍNICIO JOGOS ] ========= //


 




case 'rv-forca': case 'resetforca': 
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isGroup) return reply(enviar.msg.grupo)
if(dataGp[0].forca_inc == false) return reply(mess.gameForcaNotStarted(prefix))
rv_forca()
reply(mess.sucessResetForca(prefix))
break
  

case 'ver_forca':  
case 'iniciar_forca':  
case 'jogodaforca':  
if(!isGroup) return reply(enviar.msg.grupo)
try {
if(dataGp[0].forca_inc) return reply(mess.forcaInProgress(prefix))
if(!dataGp[0].forca_inc) {
rv_forca()
var DM_FR = dataGp[0].forca_ofc[0]
dataGp[0].forca_inc = true
setGp(dataGp)
await sleep(300)
linha_fr = " "
for (i of DM_FR.palavra){linha_fr += ` ${i}`}
reply(mess.forcaStarted(DM_FR, linha_fr, prefix)) 
}
} catch (e) {
console.log(e)
}
break

case 'r-forca':
case 'r-f': {
if(!isGroup) return reply(enviar.msg.grupo)  
if(!dataGp[0].forca_inc) return reply(mess.gameForcaNotStarted(prefix))
if(!q) return reply("Digite a letra que deseja responder..")

var q2 = q.trim().toLowerCase()

if(ANT_LTR_MD_EMJ(q2) || Number(q2)) return reply("Não pode letras modificadas, nem emoji, nem números..")
if(q2.length == 2) return reply("Digite letra por letra para tentar adivinhar, ou acerte a palavra toda, boa sorte...")

let DM_FR = dataGp[0].forca_ofc[0]

if(DM_FR.escreveu.includes(q2)) return reply("Esta letra já foi utilizada..")

let ERRQ = DM_FR.palavra_ofc.includes(q2) ? 0 : 1
let ERROS = DM_FR.erros

DM_FR.escreveu.push(q2)
setGp(dataGp)

let PSC = [] 

if(DM_FR.palavra_ofc.includes(q2)) {
  for (let i = 0; i < DM_FR.palavra_ofc.length; i++) {
    if(DM_FR.palavra_ofc[i] == q2) {
      PSC.push(i)
      DM_FR.acertos += 1
    }
  }

  for (let i of PSC){
    DM_FR.palavra[i] = q2
  }

  setGp(dataGp)
}

await sleep(300)

let linha_fr = ""
for (let i of DM_FR.palavra){ linha_fr += ` ${i}` }

let letra_ut = ""
for (let i of DM_FR.escreveu){ letra_ut += `${i}, ` }

if(q2.length > 2) {
  reply("Humm, espertinho quer acertar a palavra toda 😏")
}

await sleep(500)

if(DM_FR.palavra_ofc.includes(q2) || (q2.length > 2 && q2 == DM_FR.palavra_ofc)) {

  reply(
    q2.length > 2
      ? "Você acertou a palavra toda 😎 irei resetar o jogo..."
      : DM_FR.acertos == DM_FR.palavra_ofc.length
        ? `Parabéns, palavra completa: < ${DM_FR.palavra_ofc} > irei resetar o jogo..`
        : "Você acertou uma letra 👏 continue assim.."
  )

  if(q2.length > 2 || DM_FR.acertos == DM_FR.palavra_ofc.length){
    return rv_forca()
  }

  await sleep(200)
  reply(mess.forcaStartedRespond(DM_FR, ERROS, ERRQ, linha_fr, letra_ut))

} else {

  reply(
    q2.length > 2
      ? "Você errou a palavra toda 😥 irei resetar o jogo.."
      : ERROS + ERRQ == 6
        ? "Você atingiu 6 erros 😭 irei resetar o jogo.."
        : "Você errou 😥 tente novamente.."
  )

  dataGp[0].forca_ofc[0].erros += 1
  setGp(dataGp)

  if(q2.length > 2 || ERROS + ERRQ == 6){
    return rv_forca()
  }

  await sleep(200)
  reply(`Letra errada: ${q2} ❌ continue tentando`)
}

}
break




    
//=========== [ FINAL JOGOS ] ========= //

case 'listaddi': case 'ddilist':
if(!isGroup) return reply(enviar.msg.grupo);
if(!isGroupAdmins) return reply(enviar.msg.adm);
if(q.length < 1) return reply(`Fale o código de um país, por exemplo: *${prefix}listaddi 55*`)
if(isNaN(q))return reply(`Fale o código de um país, por exemplo: *${prefix}listaddi 55*`)
tekyushff = `• Número com código de país +${args[0]} registrados no grupo:\n–\n`
tekyushffff = []
for(let mem of groupMembers) {
if(mem.id.startsWith(q)) {
tekyushff += `⇒ @${mem.id.split('@')[0]}\n`
tekyushffff.push(mem.id)
}
}
if(tekyushff.indexOf('⇒') < 0) return reply(`Nenhum número com o ddi *+${args[0]}* foi encontrado.`)
sandro.sendMessage(from, {text: tekyushff, mentions: tekyushffff}, {quoted: info}).catch((error) => {
   reply(mess.error())
})
break



case 'listaddd': case 'dddlist':
if(!isGroup) return reply(enviar.msg.grupo);
if(!isGroupAdmins) return reply(enviar.msg.adm);
if(q.length < 1) return reply(`Fale o código do estado, por exemplo: *${prefix}listaddd 82*`)
if(isNaN(q))return reply(`Fale o código de um estado(ddd), por exemplo: *${prefix}listaddd 82*`)
tekiiuu = `• Lista de números brasileiros com o DDD *${q}* presentes neste grupo:\n–\n`
tekiiuuii = []
for (let mem of groupMembers) {
if(mem.id.startsWith(55+q)) {
tekiiuu += `⇒ @${mem.id.split('@')[0]}\n`
tekiiuuii.push(mem.id);
}
}
if(tekiiuu.indexOf('⇒') < 0) return reply('Nenhum *número brasileiro* com ddd fornecido foi encontrado no grupo.')
sandro.sendMessage(from, {text: tekiiuu, mentions: tekiiuuii}, {quoted: info}).catch((error) => {
   reply(mess.error())
})
break







case 'rmnota':
if(!isGroup) return reply(`Só em grupo pode utilizar este comando.`)
if(!isGroupAdmins) return reply(`Só adm pode utilizar este tipo de comando.`)
if(command == "anotar") {
var [q5, q10] = q.trim().split("|")
if(!q5 || !q10 || !q.includes("|")) return reply(`Digite o título da anotação e o texto que deseja anotar..\nExemplo: ${prefix}anotar Cachorro|Cachorros são bom pra comer na Venezuela...`)
if(JSON.stringify(anotar).includes(from)) {  
var i2 = anotar.map(i => i.grupo).indexOf(from)  
if(JSON.stringify(anotar[i2].puxar).includes(q5)) {
var i3 = anotar[i2].puxar.map(i => i.nota).indexOf(q5)  
if(anotar[i2].puxar[i3].nota == q5) return reply(`Esta anotação já está inclusa, utilize outro título.. Ou você pode tirar com\n${prefix}tirar_nota ${q5}`)
}
}
if(!JSON.stringify(anotar).includes(from)) {
anotar.push({grupo: from, puxar: [{nota: q5, anotacao: q10}]})
fs.writeFileSync("./database/func/anotar.json", JSON.stringify(anotar))
reply("Anotação registrada com sucesso...")
} else {
anotar[i2].puxar.push({nota: q5, anotacao: q10})
fs.writeFileSync("./database/func/anotar.json", JSON.stringify(anotar))
reply("Anotação registrada com sucesso...")  
}
} else {
if(!q) return reply("Digite qual anotação deseja tirar pelo título..")
if(JSON.stringify(anotar).includes(from)) {  
var i2 = anotar.map(i => i.grupo).indexOf(from)  
if(JSON.stringify(anotar[i2].puxar).includes(q)) {
var i3 = anotar[i2].puxar.map(i => i.nota).indexOf(q)  
}
}
if(0 > anotar[i2].puxar.map(i => i.nota).indexOf(q)) return reply("Esta nota não está inclusa, verifique com atenção...")
anotar[i2].puxar.splice(i3, 1)
fs.writeFileSync("./database/func/anotar.json", JSON.stringify(anotar))
reply(`Anotação ${q} tirada com sucesso...`)
}
break


  
case 'nota':
case 'notas':

if(!isGroup) return reply(`Só em grupo pode utilizar este comando.`)
if(!isGroupAdmins) return reply(`Só adm pode utilizar este tipo de comando.`)

let ii4 = anotar.findIndex(i => i.grupo === from)

if(ii4 === -1) return reply("Este grupo não tem nenhuma anotação...")

if(command == "anotacao" || command == "nota") {

if(!q) return reply("Digite o título da anotação que deseja puxar..")

if(!anotar[ii4].puxar || anotar[ii4].puxar.length === 0) 
return reply("Este grupo não tem nenhuma anotação...")

let i3 = anotar[ii4].puxar.findIndex(i => i.nota === q)

if(i3 === -1) 
return reply("Não contém nenhuma anotação com este título.")

mentions(`〈 ${anotar[ii4].puxar[i3].anotacao} 〉`)

} else {

if(!anotar[ii4].puxar || anotar[ii4].puxar.length === 0) 
return reply("Este grupo não tem nenhuma anotação...")

let antr = anotar[ii4].puxar 

let txtin = `Aqui está todas as anotações registradas em minha database do grupo: *[ ${groupName} ]*\n`

for (let i = 0; i < antr.length; i++) {
txtin += `\n↝ Anotação: ⟮ ${antr[i].nota} ⟯ - 〈 ${antr[i].anotacao} 〉\n`
}

mentions(txtin)
}

break














case 'puxada':
case 'puxadas':
reagir(from, "❤️")
try {
const fs = require('fs');

await sleep(250)

// 🔹 legenda
const menuTexto = menupx(prefix, pushname, NickDono, NomeDoBot, isChVip, sender);

// 🔹 controle
const controle = "./config/fototipo.json";

let tipo = "jpg";
if (fs.existsSync(controle)) {
  tipo = JSON.parse(fs.readFileSync(controle)).tipo;
}

// 🔥 ENVIO INTELIGENTE
if (tipo === "gif" && fs.existsSync('./config/fotobot.gif')) {

  await sandro.sendMessage(from, {
    video: fs.readFileSync('./config/fotobot.gif'),
    gifPlayback: true,
    caption: menuTexto
  }, { quoted: info });

} else if (fs.existsSync('./config/fotobot.jpg')) {

  await sandro.sendMessage(from, {
    image: fs.readFileSync('./config/fotobot.jpg'),
    caption: menuTexto
  }, { quoted: info });

} else {

  await sandro.sendMessage(from, {
    image: { url: fotobot },
    caption: menuTexto
  }, { quoted: info });

}

} catch (e) {
console.error("Erro no comando 'menupx':", e);
}
break;














                     





case 'menulogos': 
reagir(from, "❤️");
try {

await sleep(250)

// 🔹 legenda
const menuTexto = menulogos(prefix, pushname, NickDono, NomeDoBot, isChVip, sender);

// 🔹 controle
const controle = "./config/fototipo.json";

let tipo = "jpg";
if (fs.existsSync(controle)) {
  tipo = JSON.parse(fs.readFileSync(controle)).tipo;
}

// 🔥 ENVIO INTELIGENTE
if (tipo === "gif" && fs.existsSync('./config/fotobot.gif')) {

  await sandro.sendMessage(from, {
    video: fs.readFileSync('./config/fotobot.gif'),
    gifPlayback: true,
    caption: menuTexto
  }, { quoted: info });

} else if (fs.existsSync('./config/fotobot.jpg')) {

  await sandro.sendMessage(from, {
    image: fs.readFileSync('./config/fotobot.jpg'),
    caption: menuTexto
  }, { quoted: info });

} else {

  await sandro.sendMessage(from, {
    image: { url: `${fotobot}` },
    caption: menuTexto
  }, { quoted: info });

}

} catch (e) {
console.error("Erro no comando 'menulogos':", e);
}
break;




  
case 'efeitoimg':
case 'efeitosmarcar':  
reagir(from, "❤️")
try {

await sleep(250)

// 🔹 legenda
const menuTexto = efeitos(prefix, pushname, NickDono, NomeDoBot, isChVip, sender);

// 🔹 controle
const controle = "./config/fototipo.json";

let tipo = "jpg";
if (fs.existsSync(controle)) {
  tipo = JSON.parse(fs.readFileSync(controle)).tipo;
}

// 🔥 ENVIO INTELIGENTE
if (tipo === "gif" && fs.existsSync('./config/fotobot.gif')) {

  await sandro.sendMessage(from, {
    video: fs.readFileSync('./config/fotobot.gif'),
    gifPlayback: true,
    caption: menuTexto
  }, { quoted: info });

} else if (fs.existsSync('./config/fotobot.jpg')) {

  await sandro.sendMessage(from, {
    image: fs.readFileSync('./config/fotobot.jpg'),
    caption: menuTexto
  }, { quoted: info });

} else {

  await sandro.sendMessage(from, {
    image: { url: `${fotobot}` },
    caption: menuTexto
  }, { quoted: info });

}

} catch (e) {
console.error("Erro no comando 'efeitos':", e);
}
break;

case 'comprarpv':
reply(`
🎉 *BEM-VINDO AO VIP DO PV DO BOT!* 🎉

🔒 *Privacidade Exclusiva*: Para acessar o PV do bot com total privacidade e conteúdos especiais, é necessário ser adicionado à lista *VIP*. Além disso, você terá acesso a todos os conteúdos exclusivos do *VIP*! 🎁

📜 *VALORES VIP* 📜
💰 1 Semana: R$15  
💰 2 Semanas: R$20  
💰 3 Semanas: R$25  
💰 1 Mês: R$30

👑 *Deseja garantir o seu acesso VIP?*  
Use o comando ${prefix}criador e fale diretamente comigo para adquirir!

🔓 *Conteúdos VIP*: Não esqueça de conferir os conteúdos disponíveis usando ${prefix}menuprem.

🚀 *Seja VIP agora e aproveite os benefícios exclusivos!*
`)
break



case 'figurinhas':
case 'menufigurinhas':
reagir(from, "❤️");
try {

await sleep(250)

// 🔹 legenda
const menuTexto = figurinhas(prefix, pushname, NickDono, NomeDoBot, isChVip, sender);

// 🔹 controle
const controle = "./config/fototipo.json";

let tipo = "jpg";
if (fs.existsSync(controle)) {
  tipo = JSON.parse(fs.readFileSync(controle)).tipo;
}

// 🔥 ENVIO INTELIGENTE
if (tipo === "gif" && fs.existsSync('./config/fotobot.gif')) {

  await sandro.sendMessage(from, {
    video: fs.readFileSync('./config/fotobot.gif'),
    gifPlayback: true,
    caption: menuTexto
  }, { quoted: info });

} else if (fs.existsSync('./config/fotobot.jpg')) {

  await sandro.sendMessage(from, {
    image: fs.readFileSync('./config/fotobot.jpg'),
    caption: menuTexto
  }, { quoted: info });

} else {

  await sandro.sendMessage(from, {
    image: { url: `${fotobot}` },
    caption: menuTexto
  }, { quoted: info });

}

} catch (e) {
console.error("Erro no comando 'menufigurinhas':", e);
}
break;



case 'download':
case 'menudownloads':
case 'menudownload':

case 'download':
reagir(from, "❤️")
try {

await sleep(250)

// 🔹 legenda
const menuTexto = downloads(prefix, pushname, NickDono, NomeDoBot, isChVip, sender);

// 🔹 controle
const controle = "./config/fototipo.json";

let tipo = "jpg";
if (fs.existsSync(controle)) {
  tipo = JSON.parse(fs.readFileSync(controle)).tipo;
}

// 🔥 ENVIO INTELIGENTE
if (tipo === "gif" && fs.existsSync('./config/fotobot.gif')) {

  await sandro.sendMessage(from, {
    video: fs.readFileSync('./config/fotobot.gif'),
    gifPlayback: true,
    caption: menuTexto
  }, { quoted: info });

} else if (fs.existsSync('./config/fotobot.jpg')) {

  await sandro.sendMessage(from, {
    image: fs.readFileSync('./config/fotobot.jpg'),
    caption: menuTexto
  }, { quoted: info });

} else {

  await sandro.sendMessage(from, {
    image: { url: `${fotobot}` },
    caption: menuTexto
  }, { quoted: info });

}

} catch (e) {
console.error("Erro no comando 'menudownloads':", e);
}
break;







case 'brincadeiras':

reagir(from, "❤️")
try {

// 🔹 legenda
const menuTexto = brincadeiras(prefix, pushname, NickDono, NomeDoBot, isChVip, sender);

// 🔹 controle
const controle = "./config/fototipo.json";

let tipo = "jpg";
if (fs.existsSync(controle)) {
  tipo = JSON.parse(fs.readFileSync(controle)).tipo;
}

// 🔥 ENVIO INTELIGENTE
if (tipo === "gif" && fs.existsSync('./config/fotobot.gif')) {

  await sandro.sendMessage(from, {
    video: fs.readFileSync('./config/fotobot.gif'),
    gifPlayback: true,
    caption: menuTexto
  }, { quoted: info });

} else if (fs.existsSync('./config/fotobot.jpg')) {

  await sandro.sendMessage(from, {
    image: fs.readFileSync('./config/fotobot.jpg'),
    caption: menuTexto
  }, { quoted: info });

} else {

  await sandro.sendMessage(from, {
    image: { url: `${fotobot}` },
    caption: menuTexto
  }, { quoted: info });

}

} catch (e) {
console.error("Erro no comando 'brincadeiras':", e);
}
break;



case 'menupremium':
reagir(from, "❤️")
try {

await sleep(250)

// 🔹 legenda
const menuTexto = menuprem(prefix, pushname, NickDono, NomeDoBot, isChVip, sender);

// 🔹 controle
const controle = "./config/fototipo.json";

let tipo = "jpg";
if (fs.existsSync(controle)) {
  tipo = JSON.parse(fs.readFileSync(controle)).tipo;
}

// 🔥 ENVIO INTELIGENTE
if (tipo === "gif" && fs.existsSync('./config/fotobot.gif')) {

  await sandro.sendMessage(from, {
    video: fs.readFileSync('./config/fotobot.gif'),
    gifPlayback: true,
    caption: menuTexto
  }, { quoted: info });

} else if (fs.existsSync('./config/fotobot.jpg')) {

  await sandro.sendMessage(from, {
    image: fs.readFileSync('./config/fotobot.jpg'),
    caption: menuTexto
  }, { quoted: info });

} else {

  await sandro.sendMessage(from, {
    image: { url: `${fotobot}` },
    caption: menuTexto
  }, { quoted: info });

}

} catch (e) {
console.error("Erro no comando 'menuprem':", e);
}
break;





case 'pornoo':
reagir(from, "❤️")
try {

await sleep(250)

// 🔹 legenda
const menuTexto = nsfw(prefix, pushname, NickDono, NomeDoBot, isChVip, sender);

// 🔹 controle
const controle = "./config/fototipo.json";

let tipo = "jpg";
if (fs.existsSync(controle)) {
  tipo = JSON.parse(fs.readFileSync(controle)).tipo;
}

// 🔥 ENVIO INTELIGENTE
if (tipo === "gif" && fs.existsSync('./config/fotobot.gif')) {

  await sandro.sendMessage(from, {
    video: fs.readFileSync('./config/fotobot.gif'),
    gifPlayback: true,
    caption: menuTexto
  }, { quoted: info });

} else if (fs.existsSync('./config/fotobot.jpg')) {

  await sandro.sendMessage(from, {
    image: fs.readFileSync('./config/fotobot.jpg'),
    caption: menuTexto
  }, { quoted: info });

} else {

  await sandro.sendMessage(from, {
    image: { url: `${fotobot}` },
    caption: menuTexto
  }, { quoted: info });

}

} catch (e) {
console.error("Erro no comando 'menu18':", e);
}
break;

case 'amador':
if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modonsfw 1`)
reagir(from, "❤️")
reply(`${isGroup ? "*ENVIANDO NO GRUPO...❤️*" : "Enviando"} `)
const { amador } = require("./assets/nsfw/AmadorVideo/Amador.js")
var paulozinxz18 = amador[Math.floor(Math.random()*amador.length)]
sandro.sendMessage(from, {video: {url: paulozinxz18}, caption: `*🔞Vídeo Amador🔞*\n*Bot: ${NomeDoBot} Dono ${NickDono}*`}, {quoted: info})
break

case 'porno':
if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}+18 1`)
reagir(from, "❤️")
reply(`${isGroup ? "*ENVIANDO NO GRUPO...❤️*" : "Enviando"} `)
const { PornoVid } = require("./assets/nsfw/PornoVideo/PornoVid.js")
var paulozinxz18 = PornoVid[Math.floor(Math.random()*PornoVid.length)]
sandro.sendMessage(from, {video: {url: paulozinxz18}, caption: `*🔞Pornô Vídeo🔞*\n*Bot: ${NomeDoBot} Dono ${NickDono}*`}, {quoted: info})
break

case 'egirlvideo':
if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}+18 1`)
reagir(from, "❤️")
reply(`${isGroup ? "*ENVIANDO NO GRUPO...❤️*" : "Enviando"} `)
const { EgirlVid } = require("./assets/nsfw/EgirlVideo/EgirlVid.js")
var paulozinxz18 = EgirlVid[Math.floor(Math.random()*EgirlVid.length)]
sandro.sendMessage(from, {video: {url: paulozinxz18}, caption: `*🔞Egirl Vídeo🔞*\n*Bot: ${NomeDoBot} Dono ${NickDono}*`}, {quoted: info})
break

case 'aline':
if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}+18 1`)
reagir(from, "❤️")
reply(`${isGroup ? "*ENVIANDO NO GRUPO...❤️*" : "Enviando"} `)
const { Aline } = require("./assets/nsfw/AlineFaria/Aline.js")
var paulozinxz18 = Aline[Math.floor(Math.random()*Aline.length)]
sandro.sendMessage(from, {image: {url: paulozinxz18}, caption: `*🔞Aline Faria🔞*\n*Bot: ${NomeDoBot} Dono ${NickDono}*`}, {quoted: info})
break

case 'alifox':
if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}+18 1`)
reagir(from, "❤️")
reply(`${isGroup ? "*ENVIANDO NO GRUPO...❤️*" : "Enviando"} `)
const { AlineFx } = require("./assets/nsfw/AlineFox/AlineFx.js")
var paulozinxz18 = AlineFx[Math.floor(Math.random()*AlineFx.length)]
sandro.sendMessage(from, {image: {url: paulozinxz18}, caption: `*🔞Aline Fox🔞*\n*Bot: ${NomeDoBot} Dono ${NickDono}*`}, {quoted: info})
break
    
case 'alycia':
if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}+18 1`)
reagir(from, "❤️")
reply(`${isGroup ? "*ENVIANDO NO GRUPO...❤️*" : "Enviando"} `)
const { Alycia } = require("./assets/nsfw/AlyciaRibeiro/Alycia.js")
var paulozinxz18 = Alycia[Math.floor(Math.random()*Alycia.length)]
sandro.sendMessage(from, {image: {url: paulozinxz18}, caption: `*🔞Alycia Ribeiro🔞*\n*Bot: ${NomeDoBot} Dono ${NickDono}*`}, {quoted: info})
break

case 'amichan':
if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}+18 1`)
reagir(from, "❤️")
reply(`${isGroup ? "*ENVIANDO NO GRUPO...❤️*" : "Enviando"} `)
const { Amiichan } = require("./assets/nsfw/Amiichan/Amiichan.js")
var paulozinxz18 = Amiichan[Math.floor(Math.random()*Amiichan.length)]
sandro.sendMessage(from, {image: {url: paulozinxz18}, caption: `*🔞Amiichan🔞*\n*Bot: ${NomeDoBot} Dono ${NickDono}*`}, {quoted: info})
break

case 'aninha':
if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}+18 1`)

reagir(from, "❤️")
reply(`${isGroup ? "*ENVIANDO NO GRUPO...❤️*" : "Enviando"} `)
const { Aninha } = require("./assets/nsfw/AninhaLopes/Aninha.js")
var paulozinxz18 = Aninha[Math.floor(Math.random()*Aninha.length)]
sandro.sendMessage(from, {image: {url: paulozinxz18}, caption: `*🔞Aninha Lopes🔞*\n*Bot: ${NomeDoBot} Dono ${NickDono}*`}, {quoted: info})
break
  
case 'victoria':
if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}+18 1`)

reagir(from, "❤️")
reply(`${isGroup ? "*ENVIANDO NO GRUPO...❤️*" : "Enviando"} `)
const { Victoria } = require("./assets/nsfw/VictoriaMatoso/Victoria.js")
var paulozinxz18 = Victoria[Math.floor(Math.random()*Victoria.length)]
sandro.sendMessage(from, {image: {url: paulozinxz18}, caption: `*🔞Victoria Matoso🔞*\n*Bot: ${NomeDoBot} Dono ${NickDono}*`}, {quoted: info})
break

case 'belle':
if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}+18 1`)

reagir(from, "❤️")
reply(`${isGroup ? "*ENVIANDO NO GRUPO...❤️*" : "Enviando"} `)
const { Belle } = require("./assets/nsfw/BelleDelphine/Belle.js")
var paulozinxz18 = Belle[Math.floor(Math.random()*Belle.length)]
sandro.sendMessage(from, {image: {url: paulozinxz18}, caption: `*🔞Belle Delphine🔞*\n*Bot: ${NomeDoBot} Dono ${NickDono}*`}, {quoted: info})
break

case 'brenda':
if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}+18 1`)
reagir(from, "❤️")
reply(`${isGroup ? "*ENVIANDO NO GRUPO...❤️*" : "Enviando"} `)
const { Brenda } = require("./assets/nsfw/BrendaTrindade/Brenda.js")
var paulozinxz18 = Brenda[Math.floor(Math.random()*Brenda.length)]
sandro.sendMessage(from, {image: {url: paulozinxz18}, caption: `*🔞Brenda Trindade🔞*\n*Bot: ${NomeDoBot} Dono ${NickDono}*`}, {quoted: info})
break
  
case 'cami':
if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}+18 1`)
reagir(from, "❤️")
reply(`${isGroup ? "*ENVIANDO NO GRUPO...❤️*" : "Enviando"} `)
const { Cami } = require("./assets/nsfw/CamiBrito/Cami.js")
var paulozinxz18 = Cami[Math.floor(Math.random()*Cami.length)]
sandro.sendMessage(from, {image: {url: paulozinxz18}, caption: `*🔞Cami Brito🔞*\n*Bot: ${NomeDoBot} Dono ${NickDono}*`}, {quoted: info})
break
   
case 'clowniac':
if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}+18 1`)
reagir(from, "❤️")
reply(`${isGroup ? "*ENVIANDO NO GRUPO...❤️*" : "Enviando"} `)
const { Clowniac } = require("./assets/nsfw/Clowniac/Clowniac.js")
var paulozinxz18 = Clowniac[Math.floor(Math.random()*Clowniac.length)]
sandro.sendMessage(from, {image: {url: paulozinxz18}, caption: `*🔞Clowniac🔞*\n*Bot: ${NomeDoBot} Dono ${NickDono}*`}, {quoted: info})
break

case 'feh':
if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}+18 1`)
reagir(from, "❤️")
reply(`${isGroup ? "*ENVIANDO NO GRUPO...❤️*" : "Enviando"} `)
const { Feh } = require("./assets/nsfw/FehGalvao/Feh.js")
var paulozinxz18 = Feh[Math.floor(Math.random()*Feh.length)]
sandro.sendMessage(from, {image: {url: paulozinxz18}, caption: `*🔞Feh Galvão🔞*\n*Bot: ${NomeDoBot} Dono ${NickDono}*`}, {quoted: info})
break
  
case 'giovanna':
if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}+18 1`)
reagir(from, "❤️")
reply(`${isGroup ? "*ENVIANDO NO GRUPO...❤️*" : "Enviando"} `)
const { Giovanna } = require("./assets/nsfw/GiovannaCampomar/Giovanna.js")
var paulozinxz18 = Giovanna[Math.floor(Math.random()*Giovanna.length)]
sandro.sendMessage(from, {image: {url: paulozinxz18}, caption: `*🔞Giovanna Campomar🔞*\n*Bot: ${NomeDoBot} Dono ${NickDono}*`}, {quoted: info})
break
        
case 'isadora':
if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}+18 1`)
reagir(from, "❤️")
reply(`${isGroup ? "*ENVIANDO NO GRUPO...❤️*" : "Enviando"} `)
const { Isadora } = require("./assets/nsfw/IsadoraMartinez/Isadora.js")
var paulozinxz18 = Isadora[Math.floor(Math.random()*Isadora.length)]
sandro.sendMessage(from, {image: {url: paulozinxz18}, caption: `*🔞Isadora Martinez🔞*\n*Bot: ${NomeDoBot} Dono ${NickDono}*`}, {quoted: info})
break

case 'isa':
if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}+18 1`)
reagir(from, "❤️")
reply(`${isGroup ? "*ENVIANDO NO GRUPO...❤️*" : "Enviando"} `)
const { Isa } = require("./assets/nsfw/IsaWaifu/Isa.js")
var paulozinxz18 = Isa[Math.floor(Math.random()*Isa.length)]
sandro.sendMessage(from, {image: {url: paulozinxz18}, caption: `*🔞Isa Waifu🔞*\n*Bot: ${NomeDoBot} Dono ${NickDono}*`}, {quoted: info})
break

case 'lay':
if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}+18 1`)
reagir(from, "❤️")
reply(`${isGroup ? "*ENVIANDO NO GRUPO...❤️*" : "Enviando"} `)
const { Lay } = require("./assets/nsfw/LayMuniz/Lay.js")
var paulozinxz18 = Lay[Math.floor(Math.random()*Lay.length)]
sandro.sendMessage(from, {image: {url: paulozinxz18}, caption: `*🔞Lay Muniz🔞*\n*Bot: ${NomeDoBot} Dono ${NickDono}*`}, {quoted: info})
break

case 'leticia':
if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}+18 1`)
reagir(from, "❤️")
reply(`${isGroup ? "*ENVIANDO NO GRUPO...❤️*" : "Enviando"} `)
const { Leticia } = require("./assets/nsfw/LeticiaShirayuki/Leticia.js")
var paulozinxz18 = Leticia[Math.floor(Math.random()*Leticia.length)]
sandro.sendMessage(from, {image: {url: paulozinxz18}, caption: `*🔞Letícia Shirayuki🔞*\n*Bot: ${NomeDoBot} Dono ${NickDono}*`}, {quoted: info})
break

case 'marina':
if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}+18 1`)
reagir(from, "❤️")
reply(`${isGroup ? "*ENVIANDO NO GRUPO...❤️*" : "Enviando"} `)
const { Marina } = require("./assets/nsfw/MarinaMui/Marina.js")
var paulozinxz18 = Marina[Math.floor(Math.random()*Marina.length)]
sandro.sendMessage(from, {image: {url: paulozinxz18}, caption: `*🔞Marina Mui🔞*\n*Bot: ${NomeDoBot} Dono ${NickDono}*`}, {quoted: info})
break
     
case 'maru':
if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}+18 1`)
reagir(from, "❤️")
reply(`${isGroup ? "*ENVIANDO NO GRUPO...❤️*" : "Enviando"} `)
const { Maru } = require("./assets/nsfw/MaruKarv/Maru.js")
var paulozinxz18 = Maru[Math.floor(Math.random()*Maru.length)]
sandro.sendMessage(from, {image: {url: paulozinxz18}, caption: `*🔞Maru Karv🔞*\n*Bot: ${NomeDoBot} Dono ${NickDono}*`}, {quoted: info})
break
    
case 'princesa':
if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}+18 1`)
reagir(from, "❤️")
reply(`${isGroup ? "*ENVIANDO NO GRUPO...❤️*" : "Enviando"} `)
const { Princesa } = require("./assets/nsfw/McPrincesa/Princesa.js")
var paulozinxz18 = Princesa[Math.floor(Math.random()*Princesa.length)]
sandro.sendMessage(from, {image: {url: paulozinxz18}, caption: `*🔞Mc Princesa🔞*\n*Bot: ${NomeDoBot} Dono ${NickDono}*`}, {quoted: info})
break   
     
case 'meladinha':
if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}+18 1`)
reagir(from, "❤️")
reply(`${isGroup ? "*ENVIANDO NO GRUPO...❤️*" : "Enviando"} `)
const { Me1adinha } = require("./assets/nsfw/Meladinha/Meladinha.js")
var paulozinxz18 = Me1adinha[Math.floor(Math.random()*Me1adinha.length)]
sandro.sendMessage(from, {image: {url: paulozinxz18}, caption: `*🔞Me1adinha🔞*\n*Bot: ${NomeDoBot} Dono ${NickDono}*`}, {quoted: info})
break

case 'nath':
if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}+18 1`)
reagir(from, "❤️")
reply(`${isGroup ? "*ENVIANDO NO GRUPO...❤️*" : "Enviando"} `)
const { Nath } = require("./assets/nsfw/NathBister/Nath.js")
var paulozinxz18 = Nath[Math.floor(Math.random()*Nath.length)]
sandro.sendMessage(from, {image: {url: paulozinxz18}, caption: `*🔞Nath🔞*\n*Bot: ${NomeDoBot} Dono ${NickDono}*`}, {quoted: info})
break

case 'nega':
if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}+18 1`)
reagir(from, "❤️")
reply(`${isGroup ? "*ENVIANDO NO GRUPO...❤️*" : "Enviando"} `)
const { Nega } = require("./assets/nsfw/NegaBarbie/Nega.js")
var paulozinxz18 = Nega[Math.floor(Math.random()*Nega.length)]
sandro.sendMessage(from, {image: {url: paulozinxz18}, caption: `*🔞Nega Barbie🔞*\n*Bot: ${NomeDoBot} Dono ${NickDono}*`}, {quoted: info})
break
       
case 'polonesa':
if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}+18 1`)
reagir(from, "❤️")
reply(`${isGroup ? "*ENVIANDO NO GRUPO...❤️*" : "Enviando"} `)
const { Polonesa } = require("./assets/nsfw/PolonesaDoHype/Polonesa.js")
var paulozinxz18 = Polonesa[Math.floor(Math.random()*Polonesa.length)]
sandro.sendMessage(from, {image: {url: paulozinxz18}, caption: `*🔞Polonesa Do Hype🔞*\n*Bot: ${NomeDoBot} Dono ${NickDono}*`}, {quoted: info})
break
        
case 'rute':
if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}+18 1`)
reagir(from, "❤️")
reply(`${isGroup ? "*ENVIANDO NO GRUPO...❤️*" : "Enviando"} `)
const { Rute } = require("./assets/nsfw/RuteRocha/Rute.js")
var paulozinxz18 = Rute[Math.floor(Math.random()*Rute.length)]
sandro.sendMessage(from, {image: {url: paulozinxz18}, caption: `*🔞Rute Rocha🔞*\n*Bot: ${NomeDoBot} Dono ${NickDono}*`}, {quoted: info})
break
        
case 'celestine':
if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}+18 1`)
reagir(from, "❤️")
reply(`${isGroup ? "*ENVIANDO NO GRUPO...❤️*" : "Enviando"} `)
const { Celestine } = require("./assets/nsfw/VitaCelestine/Celestine.js")
var paulozinxz18 = Celestine[Math.floor(Math.random()*Celestine.length)]
sandro.sendMessage(from, {image: {url: paulozinxz18}, caption: `*🔞Vita Celestine🔞*\n*Bot: ${NomeDoBot} Dono ${NickDono}*`}, {quoted: info})
break
     
case 'carnie':
if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}+18 1`)
reagir(from, "❤️")
reply(`${isGroup ? "*ENVIANDO NO GRUPO...❤️*" : "Enviando"} `)
const { Carniello } = require("./assets/nsfw/Carniello/Carniello.js")
var paulozinxz18 = Carniello[Math.floor(Math.random()*Carniello.length)]
sandro.sendMessage(from, {image: {url: paulozinxz18}, caption: `*🔞Carniello🔞*\n*Bot: ${NomeDoBot} Dono ${NickDono}*`}, {quoted: info})
break
        
case 'gotica':
if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}+18 1`)
reagir(from, "❤️")
reply(`${isGroup ? "*ENVIANDO NO GRUPO...❤️*" : "Enviando"} `)
const { GoticaFT } = require("./assets/nsfw/GoticaFoto/Gotica.js")
var paulozinxz18 = GoticaFT[Math.floor(Math.random()*GoticaFT.length)]
sandro.sendMessage(from, {image: {url: paulozinxz18}, caption: `*🔞Gótica Foto🔞*\n*Bot: ${NomeDoBot} Dono ${NickDono}*`}, {quoted: info})
break

case 'ranklixo':
if (!isGroup) return reply('*Isso parece um grupo animal?*')
try{
d = [] 
tekssyer = '🏔Rank dos mais lixos do gp\n'
for(i = 0; i < 7; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
tekssyer += `🚮 ⪼ @${groupMembers[r].id.split('@')[0]}\n`
d.push(groupMembers[r].id)
}mentions(tekssyer, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente')
}
break

          case "arma": {
            bancoDeDados = {
              "M1887": {
                "nome": "M1887",
                "descrição": "Uma espingarda de cano duplo que inflige danos massivos em curta distância.",
                "dano": "Alto",
                "alcance": "Curto",
                "taxa_de_disparo": "Baixa",
                "capacidade_do_pente": 2
              },
              "AK47": {
                "nome": "AK47",
                "descrição": "Rifle de assalto de alta potência com alta taxa de disparo e precisão moderada.",
                "dano": "Moderado",
                "alcance": "Médio",
                "taxa_de_disparo": "Alta",
                "capacidade_do_pente": 30
              },
              "AWM": {
                "nome": "AWM",
                "descrição": "Rifle de precisão capaz de derrubar inimigos com um único tiro.",
                "dano": "Extremo",
                "alcance": "Longo",
                "taxa_de_disparo": "Baixa",
                "capacidade_do_pente": 5
              },
              "Groza": {
                "nome": "Groza",
                "descrição": "Rifle de assalto altamente poderoso com uma taxa de disparo e precisão excepcionais.",
                "dano": "Alto",
                "alcance": "Médio",
                "taxa_de_disparo": "Muito alta",
                "capacidade_do_pente": 30
              },
              "UMP45": {
                "nome": "UMP45",
                "descrição": "Submetralhadora de alta cadência de tiro, equilibrada em termos de dano e controle de recuo.",
                "dano": "Moderado",
                "alcance": "Curto",
                "taxa_de_disparo": "Alta",
                "capacidade_do_pente": 25
              },
              "M1014": {
                "nome": "M1014",
                "descrição": "Uma espingarda de combate próxima com uma taxa de disparo e dano impressionantes.",
                "dano": "Muito alto",
                "alcance": "Curto",
                "taxa_de_disparo": "Baixa",
                "capacidade_do_pente": 6
              },
              "M60": {
                "nome": "M60",
                "descrição": "Metralhadora com alto poder de fogo, ideal para suprimir inimigos e combates a média distância.",
                "dano": "Alto",
                "alcance": "Médio",
                "taxa_de_disparo": "Baixa",
                "capacidade_do_pente": 60
              },
              "XM8": {
                "nome": "XM8",
                "descrição": "Rifle de assalto de alta eficiência, com ótimo equilíbrio entre dano, alcance e taxa de disparo.",
                "dano": "Moderado",
                "alcance": "Médio",
                "taxa_de_disparo": "Alta",
                "capacidade_do_pente": 30
              },
              "SCAR": {
                "nome": "SCAR",
                "descrição": "Rifle de assalto confiável, com boa precisão e controle de recuo.",
                "dano": "Moderado",
                "alcance": "Médio",
                "taxa_de_disparo": "Média",
                "capacidade_do_pente": 30
              },
              "M4A1": {
                "nome": "M4A1",
                "descrição": "Rifle de assalto versátil e equilibrado, adequado para várias situações de combate.",
                "dano": "Moderado",
                "alcance": "Médio",
                "taxa_de_disparo": "Média",
                "capacidade_do_pente": 30
              },
              "SVD": {
                "nome": "SVD",
                "descrição": "Rifle de precisão semi-automático, com ótimo alcance e dano significativo.",
                "dano": "Alto",
                "alcance": "Longo",
                "taxa_de_disparo": "Baixa",
                "capacidade_do_pente": 10
              },
              "MP5": {
                "nome": "MP5",
                "descrição": "Submetralhadora compacta e precisa, adequada para combates em espaços confinados.",
                "dano": "Moderado",
                "alcance": "Curto",
                "taxa_de_disparo": "Alta",
                "capacidade_do_pente": 30
              },
              "SPAS12": {
                "nome": "SPAS12",
                "descrição": "Uma espingarda de ação por bombeamento, eficaz a curta distância com alto dano.",
                "dano": "Alto",
                "alcance": "Curto",
                "taxa_de_disparo": "Baixa",
                "capacidade_do_pente": 6
              },
              "KAR98K": {
                "nome": "KAR98K",
                "descrição": "Rifle de precisão de ação por ferrolho, com excelente precisão e dano letal.",
                "dano": "Extremo",
                "alcance": "Longo",
                "taxa_de_disparo": "Baixa",
                "capacidade_do_pente": 5
              },
              "M249": {
                "nome": "M249",
                "descrição": "Metralhadora leve com grande capacidade de munição, ideal para controle de área.",
                "dano": "Alto",
                "alcance": "Médio",
                "taxa_de_disparo": "Baixa",
                "capacidade_do_pente": 100
              },
              "Thompson": {
                "nome": "Thompson",
                "descrição": "Submetralhadora clássica de alta cadência de tiro e bom controle de recuo.",
                "dano": "Moderado",
                "alcance": "Curto",
                "taxa_de_disparo": "Alta",
                "capacidade_do_pente": 30
              },
              "VSS": {
                "nome": "VSS",
                "descrição": "Rifle de assalto silencioso com escopo integrado e baixo recuo.",
                "dano": "Moderado",
                "alcance": "Médio",
                "taxa_de_disparo": "Média",
                "capacidade_do_pente": 15
              },
              "MP40": {
                "nome": "MP40",
                "descrição": "Submetralhadora de alta cadência de tiro e bom controle de recuo.",
                "dano": "Moderado",
                "alcance": "Curto",
                "taxa_de_disparo": "Muito alta",
                "capacidade_do_pente": 30
              },
              "AUG": {
                "nome": "AUG",
                "descrição": "Rifle de assalto com excelente precisão, alcance e taxa de disparo.",
                "dano": "Moderado",
                "alcance": "Médio",
                "taxa_de_disparo": "Alta",
                "capacidade_do_pente": 30
              },
              "G18": {
                "nome": "G18",
                "descrição": "Pistola automática com alta taxa de disparo, ideal para combate próximo.",
                "dano": "Moderado",
                "alcance": "Curto",
                "taxa_de_disparo": "Muito alta",
                "capacidade_do_pente": 20
              },
              "P90": {
                "nome": "P90",
                "descrição": "Submetralhadora de alta cadência de tiro e capacidade de munição elevada.",
                "dano": "Moderado",
                "alcance": "Curto",
                "taxa_de_disparo": "Muito alta",
                "capacidade_do_pente": 50
              },
              "Desert Eagle": {
                "nome": "Desert Eagle",
                "descrição": "Pistola de alta potência e precisão, com uma grande parada de energia.",
                "dano": "Alto",
                "alcance": "Curto",
                "taxa_de_disparo": "Média",
                "capacidade_do_pente": 7
              },
              "Vector": {
                "nome": "Vector",
                "descrição": "Submetralhadora compacta com alta cadência de tiro e boa precisão.",
                "dano": "Moderado",
                "alcance": "Curto",
                "taxa_de_disparo": "Muito alta",
                "capacidade_do_pente": 30
              },
              "M14": {
                "nome": "M14",
                "descrição": "Rifle semiautomático de alta precisão, ideal para combates de longa distância.",
                "dano": "Alto",
                "alcance": "Longo",
                "taxa_de_disparo": "Baixa",
                "capacidade_do_pente": 10
              },
              "CG15": {
                "nome": "CG15",
                "descrição": "Rifle de sinalização que causa dano explosivo aos inimigos.",
                "dano": "Moderado",
                "alcance": "Médio",
                "taxa_de_disparo": "Baixa",
                "capacidade_do_pente": 1
              },
              "USP": {
                "nome": "USP",
                "descrição": "Pistola de médio alcance com boa precisão e taxa de disparo.",
                "dano": "Moderado",
                "alcance": "Médio",
                "taxa_de_disparo": "Média",
                "capacidade_do_pente": 12
              },
              "M1873": {
                "nome": "M1873",
                "descrição": "Revólver de ação simples com alto dano, mas taxa de disparo baixa.",
                "dano": "Alto",
                "alcance": "Curto",
                "taxa_de_disparo": "Baixa",
                "capacidade_do_pente": 2
              },
              "AN94": {
                "nome": "AN94",
                "descrição": "Rifle de assalto com um modo de disparo especial que aumenta a taxa de disparo.",
                "dano": "Moderado",
                "alcance": "Médio",
                "taxa_de_disparo": "Alta",
                "capacidade_do_pente": 30
              },
              "M79": {
                "nome": "M79",
                "descrição": "Lançador de granadas que causa danos em área com alto poder de explosão.",
                "dano": "Extremo",
                "alcance": "Longo",
                "taxa_de_disparo": "Baixa",
                "capacidade_do_pente": 1
              },
              "M14": {
                "nome": "M14",
                "descrição": "Rifle semiautomático de alta precisão, ideal para combates de longa distância.",
                "dano": "Alto",
                "alcance": "Longo",
                "taxa_de_disparo": "Baixa",
                "capacidade_do_pente": 10
              },
              "CG15": {
                "nome": "CG15",
                "descrição": "Rifle de sinalização que causa dano explosivo aos inimigos.",
                "dano": "Moderado",
                "alcance": "Médio",
                "taxa_de_disparo": "Baixa",
                "capacidade_do_pente": 1
              },
              "USP": {
                "nome": "USP",
                "descrição": "Pistola de médio alcance com boa precisão e taxa de disparo.",
                "dano": "Moderado",
                "alcance": "Médio",
                "taxa_de_disparo": "Média",
                "capacidade_do_pente": 12
              },
              "M1873": {
                "nome": "M1873",
                "descrição": "Revólver de ação simples com alto dano, mas taxa de disparo baixa.",
                "dano": "Alto",
                "alcance": "Curto",
                "taxa_de_disparo": "Baixa",
                "capacidade_do_pente": 2
              },
              "AN94": {
                "nome": "AN94",
                "descrição": "Rifle de assalto com um modo de disparo especial que aumenta a taxa de disparo.",
                "dano": "Moderado",
                "alcance": "Médio",
                "taxa_de_disparo": "Alta",
                "capacidade_do_pente": 30
              },
              "M79": {
                "nome": "M79",
                "descrição": "Lançador de granadas que causa danos em área com alto poder de explosão.",
                "dano": "Extremo",
                "alcance": "Longo",
                "taxa_de_disparo": "Baixa",
                "capacidade_do_pente": 1
              },
              "M82B": {
                "nome": "M82B",
                "descrição": "Rifle de precisão de ação por ferrolho com alto dano e capacidade de penetração.",
                "dano": "Extremo",
                "alcance": "Longo",
                "taxa_de_disparo": "Baixa",
                "capacidade_do_pente": 5
              },
              "P90": {
                "nome": "P90",
                "descrição": "Submetralhadora de alta cadência de tiro e capacidade de munição elevada.",
                "dano": "Moderado",
                "alcance": "Curto",
                "taxa_de_disparo": "Muito alta",
                "capacidade_do_pente": 50
              },
              "Desert Eagle": {
                "nome": "Desert Eagle",
                "descrição": "Pistola de alta potência e precisão, com uma grande parada de energia.",
                "dano": "Alto",
                "alcance": "Curto",
                "taxa_de_disparo": "Média",
                "capacidade_do_pente": 7
              },
              "M1887": {
                "nome": "M1887",
                "descrição": "Espingarda de ação por ferrolho com alto dano em combates de curta distância.",
                "dano": "Extremo",
                "alcance": "Curto",
                "taxa_de_disparo": "Baixa",
                "capacidade_do_pente": 2
              },
              "XM8": {
                "nome": "XM8",
                "descrição": "Rifle de assalto com boa precisão e cadência de tiro.",
                "dano": "Moderado",
                "alcance": "Médio",
                "taxa_de_disparo": "Média",
                "capacidade_do_pente": 30
              },
              "KAR98K": {
                "nome": "KAR98K",
                "descrição": "Rifle de precisão de ação por ferrolho com alto dano e precisão.",
                "dano": "Extremo",
                "alcance": "Longo",
                "taxa_de_disparo": "Baixa",
                "capacidade_do_pente": 5
              },
              "M79": {
                "nome": "M79",
                "descrição": "Lançador de granadas que causa danos em área com alto poder de explosão.",
                "dano": "Extremo",
                "alcance": "Longo",
                "taxa_de_disparo": "Baixa",
                "capacidade_do_pente": 1
              },
              "MP40": {
                "nome": "MP40",
                "descrição": "Submetralhadora de alta cadência de tiro e bom controle de recuo.",
                "dano": "Moderado",
                "alcance": "Curto",
                "taxa_de_disparo": "Muito alta",
                "capacidade_do_pente": 30
              },
              "M14": {
                "nome": "M14",
                "descrição": "Rifle semiautomático de alta precisão, ideal para combates de longa distância.",
                "dano": "Alto",
                "alcance": "Longo",
                "taxa_de_disparo": "Baixa",
                "capacidade_do_pente": 10
              }
            }


            const armaPesquisada = args.join(" "); // Substitua pelo valor desejado
            let resultado = null;

            for (const arma in bancoDeDados) {
              if (arma.toLowerCase() === armaPesquisada.toLowerCase()) {
                resultado = bancoDeDados[arma];
                break;
              }
            }

            if (resultado) {
              reply(`*${resultado.nome}*\n*${resultado.descrição}*\n\n*Dano: ${resultado.dano}*\n\n*Alcance: ${resultado.alcance}*\n\n*Taxa de Disparo: ${resultado.taxa_de_disparo}*\n\n*Capacidade do Pente: ${resultado.capacidade_do_pente}*`);
            } else {
              reply('Erro: Arma não encontrada no banco de dados.');
            }
          } break
          
case 'rankzueiros': case 'rankzueiro':
if (!isGroup) return reply(`So em grupo`);  

  reagir(from, "🤪");

  membrosZueiros = [];
  
  const zueiro1 = groupMembers;
  const zueiro2 = groupMembers;
  const zueiro3 = groupMembers;
  const zueiro4 = groupMembers;
  const zueiro5 = groupMembers;

  const zueiroMem1 = zueiro1[Math.floor(Math.random() * zueiro1.length)];
  const zueiroMem2 = zueiro2[Math.floor(Math.random() * zueiro2.length)];
  const zueiroMem3 = zueiro3[Math.floor(Math.random() * zueiro3.length)];
  const zueiroMem4 = zueiro4[Math.floor(Math.random() * zueiro4.length)];
  const zueiroMem5 = zueiro5[Math.floor(Math.random() * zueiro5.length)];

  const TMPZUEIRO = [
    "O rei da zoeira! 👑",
    "Mestre na arte do deboche. 😎",
    "Provocador nato. 🤣",
    "Conquistador de risadas. 🎉",
    "Doutor em piadas sem graça. 🎓",
    "Especialista em memes. 🚀",
    "Destruidor de momentos sérios. 💣",
    "Arquiteto da palhaçada. 🏰",
    "O zueiro mais querido do grupo. ❤️",
    "Sorriso contagiante, zueira constante. 😄",
    "O palhaço oficial. 🤡",
    "Mestre do sarcasmo. 😏",
    "Sabe tudo de trollagem. 😜",
    "Alegria em forma de zueira. 🎈",
    "Faz piada até com sombra. 🌚",
    "Riso garantido com esse zueiro. 😂",
    "O mestre das pegadinhas. 🤪",
    "Transforma qualquer situação em comédia. 🎭",
    "Pai da zoeira, filho do riso. 🤣",
    "Zueiro 24 horas por dia. ⏰",
  ];

  rankZueiroImg = "https://telegra.ph/file/8de9823d4d2af40b530df.jpg";
  rankZueiro = `*_Os Zueiros do Grupo estão prontos para zoar:_*
*╭────────────*
*│* 🤪 @${zueiroMem1.id.split('@')[0]}
*│➥ ${TMPZUEIRO[Math.floor(Math.random() * TMPZUEIRO.length)]}*
*│* 🤪 @${zueiroMem2.id.split('@')[0]}
*│➥ ${TMPZUEIRO[Math.floor(Math.random() * TMPZUEIRO.length)]}*
*│* 🤪 @${zueiroMem3.id.split('@')[0]}
*│➥ ${TMPZUEIRO[Math.floor(Math.random() * TMPZUEIRO.length)]}*
*│* 🤪 @${zueiroMem4.id.split('@')[0]}
*│➥ ${TMPZUEIRO[Math.floor(Math.random() * TMPZUEIRO.length)]}*
*│* 🤪 @${zueiroMem5.id.split('@')[0]}
*│➥ ${TMPZUEIRO[Math.floor(Math.random() * TMPZUEIRO.length)]}*
*╰────────────*`;

  membrosZueiros.push(zueiroMem1.id);
  membrosZueiros.push(zueiroMem2.id);
  membrosZueiros.push(zueiroMem3.id);
  membrosZueiros.push(zueiroMem4.id);
  membrosZueiros.push(zueiroMem5.id);

  mencionarIMG(rankZueiro, rankZueiroImg);
  break;

case "transcrever": {
if((isMedia && !info.message.imageMessage && info.message.videoMessage || isQuotedVideo || isQuotedAudio)) {
reply("Aguarde.. transcrevendo seu áudio..")
muk = isQuotedVideo ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.videoMessage : isQuotedAudio ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.audioMessage : info.message.audioMessage

let base64String = await getFileBuffer(muk, isQuotedAudio ? 'audio': 'video');
let buffer = Buffer.from(base64String, 'base64');

let formData = new FormData();
formData.append('file', buffer, {filename: isQuotedAudio ? 'audiofile': 'videofile', contentType: muk.mimetype });

fetch(`https://api.bronxyshost.com.br/transcrever?apikey=${API_SANDRO_MD}`, {
method: 'POST',
body: formData
}).then(response => response.json())
.then(data => {
reply(data.texto);
}).catch((Err) => {
console.log(Err);
reply("Sinto muito, alguns formatos de áudio/vídeo, eu não consigo transcrever, em caso de dúvidas, tente novamente...");
});
} else {
return reply("Marque um audio ou um vídeo.")
}
}
break;

case 'criador': 
case 'suporte-dono': 
    await sleep(1500);
    
    let vcard = 
        `BEGIN:VCARD\n`
        + `VERSION:3.0\n`
        + `N:;𝐏𝐀𝐔𝐋𝐎𝐙𝐈𝐍𝐗𝐙_𝐁𝐎𝐓;;;\n`
        + `FN:𝐏𝐀𝐔𝐋𝐎𝐙𝐈𝐍𝐗𝐙_𝐁𝐎𝐓\n`
        + `item1.TEL;waid=5581995597603:5581995597603\n`
        + `item1.X-ABLabel:📱 Celular\n`
        + `END:VCARD`;
    
    await sandro.sendMessage(from, { 
        contacts: { 
            displayName: `👑 ${NomeDoBot}`, 
            contacts: [{vcard}]
        }
    });

    await sandro.sendMessage(from, {
        text: `- Fale diretamente com o criador!\n*Contato*: wa.me/+5581995597603\n ele está à disposição!`
    }, { quoted: info });
    
    break;



//Textos
case 'recado'://BY:GILLIARDI CONTEÚDOS 





					


rate = body.slice(6)
var amor =['Me perguntaram qual era o meu lugar favorito e eu respondi: Você!','Amar alguém profundamente te dá forças. Ser amado profundamente por alguém te dá coragem.','Eu orei por você sem te conhecer. E agora tenho você aqui, muito mais do que eu pedi.','Acordar com você no meu pensamento é a forma mais doce de começar meu dia.','Não quero a ilusão de um amor perfeito, quero a felicidade de um amor verdadeiro.','O verdadeiro amor nunca se desgasta. Quanto mais se dá, mais se tem.','Meu bem, eu que nunca me lembro de nada não me esqueço de você.','Não procure alguém que te complete. Complete a si mesmo e procure alguém que te transborde.']
var gilliardi = amor[Math.floor(Math.random() * amor.length)]
reply(` ${gilliardi} `)
break					










				


				


				



////				



case 'hentai': { // 𝐏𝐀𝐔𝐋𝐎𝐙𝐈𝐍𝐗𝐙_𝐁𝐎𝐓
    try {
        if (!isNsfw && isGroup) 
            return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modonsfw 1`);
        
        reply(`Enviando a imagem no pv...`);

        // Importa o módulo para manipular arquivos

        // Lê o arquivo JSON
        const jsonData = JSON.parse(fs.readFileSync('arquivos/hentai.json', 'utf8'));

        // Verifica se existem links no JSON
        if (!jsonData.links || jsonData.links.length === 0) {
            return reply("Nenhum link de imagem encontrado no arquivo JSON.");
        }

        // Seleciona um link aleatório
        const randomIndex = Math.floor(Math.random() * jsonData.links.length);
        const imageUrl = jsonData.links[randomIndex];

        // Faz o download da imagem
        const response = await fetch(imageUrl);
        const imageBuffer = await response.buffer();

        if (!imageBuffer) {
            return reply("Erro ao obter a imagem. Tente novamente mais tarde.");
        }

        // Gera informações aleatórias
        const randomName = `Nome_${Math.floor(Math.random() * 100)}`;
        const randomLikes = Math.floor(Math.random() * 1000);
        const randomEmail = `sandromd${Math.floor(Math.random() * 100)}@exemplo.com`;

        // Monta o texto com as informações
        const infoText = `Nome: ${randomName}\nLikes: ${randomLikes}\nEmail: ${randomEmail}`;

        // Envia a imagem com o texto
        await sandro.sendMessage(from, { 
            image: imageBuffer, 
            caption: `${infoText}\n\nAqui está a sua imagem.` 
        }, { quoted: info });

    } catch (e) {
        console.log(e);
        return reply("Erro ao enviar a imagem.");
    }
}
break;
        


case 'plaq':
case 'plaq3':
case 'plaq4':
case 'plaq5':
case 'plaq6':
case 'plaq7':
case 'plaq8':
case 'plaq9':
case 'plaq10':
if (!q) return reply(`Use: ${prefix + command} seu nome`)
if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modonsfw 1`)
try {
let nome = encodeURIComponent(q.trim())
const tipo = command === 'plaq' ? 'plaq3' : command
const apiKey = getLegacyApiKey("SHIZUKU")
if (!apiKey) return reply(`❌ A API de plaquinhas não está configurada.\nUse: ${prefix}set-api-key SHIZUKU SUA_CHAVE`)

const url = `https://shizukuapis.space/api/plaquinhas/${tipo}?apikey=${encodeURIComponent(apiKey)}&query=${nome}`
const response = await axios.get(url, { responseType: 'arraybuffer', timeout: 20000, validateStatus: () => true })
const contentType = String(response.headers?.['content-type'] || '')

if (response.status < 200 || response.status >= 300 || !contentType.startsWith('image/')) {
  let detail = `HTTP ${response.status}`
  try {
    const body = Buffer.from(response.data).toString('utf8')
    const json = JSON.parse(body)
    detail = json.message || json.error || json.msg || detail
  } catch {}
  return reply(`❌ A API de plaquinhas recusou a solicitação.\n> ${detail}\n\nConfira a chave com ${prefix}api-status e configure com ${prefix}set-api-key SHIZUKU SUA_CHAVE`)
}

await sandro.sendMessage(from, { image: Buffer.from(response.data), mimetype: contentType.split(';')[0], caption: `✅ *Plaquinha criada*\n> Nome: ${q}\n> Bot: PAULOZINXZ_BOT • Dono: PAULOZINXZ` }, { quoted: info })
} catch (e) {
reply(`❌ Não foi possível gerar a plaquinha.\n> ${e?.message || 'Erro de conexão com a API.'}`)
}
break



 

case 'perfil': {

try {
  ppimg = await sandro.profilePictureUrl(sender, 'image')
} catch {
  ppimg = 'https://i.imgur.com/ZdpPsdd.jpeg'
}

try {
  var status = (await sandro.fetchStatus(sender)).status
} catch {
  var status = "Não foi possível obter a biografia."
}

var conselho = advices.commonAdvices[Math.floor(Math.random() * advices.commonAdvices.length)]

const nivelgador = Math.ceil(Math.random() * 9)
const nivelgado2r = Math.ceil(Math.random() * 9)

const putar = Math.ceil(Math.random() * 9)
const putar2 = Math.ceil(Math.random() * 9)

const gostosurar = Math.ceil(Math.random() * 9)
const gostosurar2 = Math.ceil(Math.random() * 9)

const programa = Math.ceil(Math.random() * 10000)

await sandro.sendMessage(from, {
  image: { url: ppimg },
  caption: mess.profileInformation(
    pushname,
    sender,
    info,
    isChVip,
    putar,
    putar2,
    gostosurar,
    gostosurar2,
    nivelgador,
    nivelgado2r,
    programa,
    status,
    conselho
  )
}, { quoted: info })

break
}


case 'perfilff':
  try {
    // Definindo os valores de informações aleatórias
    const patentes = ['Bronze', 'Prata', 'Ouro', 'Platina', 'Diamante', 'Mestre', 'Desafiante'];
    const tiposDeJogador = ['Rusher', 'Camper', 'Suporte', 'Estratégico', 'Aleatório'];
    const armasFavoritas = ['AK-47', 'M4A1', 'AWM', 'Desert Eagle', 'MP40', 'SPAS-12', 'Groza', 'SCAR', 'Famas', 'XM8'];
    const modosFavoritos = ['Clássico', 'Ranqueado', 'Contra Squad', 'Modo Zombie', 'Modo Treinamento', 'Torneios', 'Modo Casual'];
    const skinsFavoritas = ['Panda', 'Anjo', 'Caveira', 'Dino', 'Palhaço', 'Samurai', 'Rei das Sombras', 'Coelhinho', 'Inferno', 'Vampiro'];
    const mapasFavoritos = ['Bermuda', 'Kalahari', 'Purgatório', 'Alpine', 'Gravado'];
    const personagensFavoritos = ['Chrono', 'Kelly', 'Hayato', 'Alok', 'Moco', 'Wukong', 'Skyler', 'Steffie', 'Nikita', 'Maxim'];
    const petsFavoritos = ['Pantera Noturna', 'Shiba', 'Poring', 'Falcão', 'Robô', 'Dragãozinho', 'Ottero', 'Cobra Ninja'];
    const emotesFavoritos = ['Booyah!', 'Coração', 'Faz o Gelo', 'Cadeira de Mestre', 'Mão de Fogo', 'Socos de Punho', 'Magia'];
    const habilidadesEspeciais = ['Velocidade', 'Precisão', 'Cura Rápida', 'Redução de Dano', 'Aumento de Defesa', 'Mira Automática'];
    const nivelDeJogo = ['Noob', 'Intermediário', 'Profissional', 'Insano'];
    const horasDeJogoPorSemana = ['1-5 horas', '6-10 horas', '11-20 horas', '21-40 horas', 'Mais de 40 horas'];
    const estilosDeJogo = ['Agressivo', 'Defensivo', 'Tático', 'Criativo', 'Imprevisível'];
    const clãs = ['Sem clã', 'Matadores de Elite', 'Os Invencíveis', 'Força Suprema', 'Booyah Team', 'Anjos do Fogo', 'Os Dominantes'];
    const conquistas = ['100 Booyahs', '500 Abates', 'Top 10 Global', 'Campeão de Torneio', 'Melhor do Clã', 'Recorde Pessoal'];
    const frasesDeGuerra = [
      "Booyah ou nada!",
      "Aqui quem manda sou eu!",
      "Não há escapatória!",
      "Minha mira nunca falha.",
      "Você pode correr, mas não pode se esconder!"
    ];

    // Seleção aleatória de valores
    const patente = patentes[Math.floor(Math.random() * patentes.length)];
    const tipoDeJogador = tiposDeJogador[Math.floor(Math.random() * tiposDeJogador.length)];
    const armaFavorita = armasFavoritas[Math.floor(Math.random() * armasFavoritas.length)];
    const modoFavorito = modosFavoritos[Math.floor(Math.random() * modosFavoritos.length)];
    const skinFavorita = skinsFavoritas[Math.floor(Math.random() * skinsFavoritas.length)];
    const mapaFavorito = mapasFavoritos[Math.floor(Math.random() * mapasFavoritos.length)];
    const personagemFavorito = personagensFavoritos[Math.floor(Math.random() * personagensFavoritos.length)];
    const petFavorito = petsFavoritos[Math.floor(Math.random() * petsFavoritos.length)];
    const emoteFavorito = emotesFavoritos[Math.floor(Math.random() * emotesFavoritos.length)];
    const habilidadeEspecial = habilidadesEspeciais[Math.floor(Math.random() * habilidadesEspeciais.length)];
    const nivel = nivelDeJogo[Math.floor(Math.random() * nivelDeJogo.length)];
    const horasDeJogo = horasDeJogoPorSemana[Math.floor(Math.random() * horasDeJogoPorSemana.length)];
    const estiloDeJogo = estilosDeJogo[Math.floor(Math.random() * estilosDeJogo.length)];
    const clã = clãs[Math.floor(Math.random() * clãs.length)];
    const conquista = conquistas[Math.floor(Math.random() * conquistas.length)];
    const fraseDeGuerra = frasesDeGuerra[Math.floor(Math.random() * frasesDeGuerra.length)];

    // Mensagem motivacional
    const mensagensMotivacionais = [
      "Você é um verdadeiro sobrevivente!",
      "Nunca desista até o Booyah!",
      "A prática leva à perfeição!",
      "Confie na sua equipe e na sua mira!",
      "Hoje é dia de Booyah, continue jogando!"
    ];
    const mensagemMotivacional = mensagensMotivacionais[Math.floor(Math.random() * mensagensMotivacionais.length)];

    // Montagem do texto do perfil
    const perfilFF = `🎮 *SEU PERFIL NO FREE FIRE* 🎮

🏆 *Patente:* ${patente}
❤️ *Tipo de jogador:* ${tipoDeJogador}
🔫 *Arma favorita:* ${armaFavorita}
🎯 *Modo favorito:* ${modoFavorito}
👕 *Skin favorita:* ${skinFavorita}
🗺️ *Mapa favorito:* ${mapaFavorito}
🧑‍🎤 *Personagem favorito:* ${personagemFavorito}
🐾 *Pet favorito:* ${petFavorito}
🎭 *Emote favorito:* ${emoteFavorito}
✨ *Habilidade especial:* ${habilidadeEspecial}
🔥 *Nível de habilidade:* ${nivel}
⏳ *Horas de jogo por semana:* ${horasDeJogo}
🎮 *Estilo de jogo:* ${estiloDeJogo}
🤝 *Clã:* ${clã}
🏅 *Conquista mais marcante:* ${conquista}
📢 *Frase de guerra:* "${fraseDeGuerra}"

✨ *Mensagem motivacional:* ${mensagemMotivacional}

> ${NomeDoBot}`;

    // Envio do texto com a imagem (substitua `sandro` pela função de envio do seu bot)
    sandro.sendMessage(from, { text: perfilFF }, { quoted: info });
    
  } catch (e) {
    console.log("Erro no comando 'perfil':", e);
  }
  break;
  
case 'perfil':
  try {
    // Definindo as variáveis para o jogo de futebol
    const times = ['Flamengo', 'Vasco', 'Palmeiras', 'São Paulo', 'Corinthians', 'Atlético Mineiro', 'Grêmio', 'Internacional'];
    const posicoes = ['Atacante', 'Meio-Campo', 'Defensor', 'Goleiro'];
    const habilidades = ['Chute', 'Passe', 'Drible', 'Cabeceio', 'Defesa', 'Visão de Jogo', 'Finalização'];
    const estiloDeJogo = ['Ofensivo', 'Defensivo', 'Equilibrado'];
    const ligas = ['Brasileirão', 'La Liga', 'Premier League', 'Serie A', 'Bundesliga', 'Campeonato Francês'];
    const horasDeTreinamento = ['1-2 horas', '3-4 horas', '5-6 horas', 'Mais de 6 horas'];

    // Seleção aleatória de valores
    const timeFavorito = times[Math.floor(Math.random() * times.length)];
    const posicaoFavorita = posicoes[Math.floor(Math.random() * posicoes.length)];
    const habilidadeMelhor = habilidades[Math.floor(Math.random() * habilidades.length)];
    const estiloDeJogoPreferido = estiloDeJogo[Math.floor(Math.random() * estiloDeJogo.length)];
    const ligaPreferida = ligas[Math.floor(Math.random() * ligas.length)];
    const horasTreinamento = horasDeTreinamento[Math.floor(Math.random() * horasDeTreinamento.length)];

    // Mensagem motivacional de futebol
    const mensagensMotivacionais = [
      "O futebol é paixão, a vitória é consequência!",
      "O jogo não termina até o apito final!",
      "Nunca desista, a vitória vem para quem persevera!",
      "A cada drible, a cada passe, o futebol te ensina a lutar.",
      "No futebol, quem tem garra conquista!"
    ];
    const mensagemMotivacional = mensagensMotivacionais[Math.floor(Math.random() * mensagensMotivacionais.length)];

    // Montagem do texto do perfil com informações de futebol
    const dptr = `❤️️*SEU PERFIL DE FUTEBOL*❤️️

🏆 *Time Favorito:* ${timeFavorito}
❤️️ *Posição Preferida:* ${posicaoFavorita}
🦵 *Melhor Habilidade:* ${habilidadeMelhor}
🎮 *Estilo de Jogo:* ${estiloDeJogoPreferido}
🏟️ *Liga Preferida:* ${ligaPreferida}
⏳ *Horas de Treinamento por Semana:* ${horasTreinamento}

✨ *Mensagem Motivacional:* ${mensagemMotivacional}

> ${NomeDoBot}`;

    // Envio do texto com as informações de futebol
    sandro.sendMessage(from, { text: dptr }, { quoted: info });
    
  } catch (e) {
    console.log("Erro no comando 'perfil':", e);
  }
  break;



case 'desafio':
try {

reply(`👉 Não vale desistir! Prepare-se!`)

const desafiosPesados = [
  'Desafio: Fique 1 minuto de pé com uma perna só! Você consegue?',
  'Desafio: Beba um copo de água gelada enquanto segura o ar por 10 segundos!',
  'Desafio: Coloque o pé na sua cabeça e fique assim por 30 segundos!',
  'Desafio: Fique 2 minutos fazendo caretas enquanto segura a respiração!',
  'Desafio: Diga "Eu sou o mestre do universo" em voz alta 5 vezes seguidas!',
  'Desafio: Balançar sua cabeça de um lado para o outro por 1 minuto, sem parar!',
  'Desafio: Fala para seu 5° contato que vc e gay',
  'Desafio: Imite o som de um animal aleatório por 30 segundos!',
  'Desafio: Faça 50 abdominais em menos de 1 minuto!',
  'Desafio: Faça um "selfie" com a expressão mais feia que conseguir e envie para o grupo!',
  'Desafio: Segure o ar por 10 segundos! Você consegue?',
  'Desafio: Fique 30 segundos sem rir! Vai conseguir?',
  'Desafio: Tente fazer 10 flexões sem parar!',
  'Desafio: Diga a palavra "paralelepípedo" 5 vezes sem errar!',
  'Desafio: Tente ficar 10 segundos olhando para a tela sem piscar!',
  'Desafio: Faça uma careta bem feia e mantenha por 10 segundos!',
  'Desafio: Diga seu nome ao contrário 3 vezes!',
  'Desafio: O que é, o que é? Tem cabeça, mas não tem corpo!',
  'Desafio: Faça 20 pulos no lugar! Vai encarar?',
  'Desafio: Tente tocar o seu nariz com a língua!'
];

const desafioPesadoSelecionado = desafiosPesados[Math.floor(Math.random() * desafiosPesados.length)];

const dptr = `🔥 *DESAFIO PESADO* 🔥

❤️ *Seu desafio é:* 
${desafioPesadoSelecionado}

> ${NomeDoBot}`;

// 🔹 controle
const controle = "./config/fototipo.json";

let tipo = "jpg";
if (fs.existsSync(controle)) {
  tipo = JSON.parse(fs.readFileSync(controle)).tipo;
}

// 🔥 ENVIO INTELIGENTE
if (tipo === "gif" && fs.existsSync('./config/fotobot.gif')) {

  await sandro.sendMessage(from, {
    video: fs.readFileSync('./config/fotobot.gif'),
    gifPlayback: true,
    caption: dptr
  }, { quoted: info });

} else if (fs.existsSync('./config/fotobot.jpg')) {

  await sandro.sendMessage(from, {
    image: fs.readFileSync('./config/fotobot.jpg'),
    caption: dptr
  }, { quoted: info });

} else {

  await sandro.sendMessage(from, {
    image: { url: `${fotobot}` },
    caption: dptr
  }, { quoted: info });

}

} catch (e) {
console.log("Erro no comando 'desafio':", e);
}
break;
  
 

 



case 'tradutor': {
try {
  if (!q) return reply(`Digite um texto para traduzir!\nEx: ${prefix}traduzir i love you`)

  let url = `${zerosite}/api/info/translate?texto=${encodeURIComponent(q)}&ling=pt&apikey=${API_KEY_ZEROTWO}`

  let res = await fetchJson(url)

  if (!res || !res.status) {
    return reply("❌ Erro ao traduzir texto")
  }

  let resultado = res.result

  reply(`*Tradução:*\n\nTexto: ${q}\n📖 Traduzido: ${resultado}`)

} catch (e) {
  console.log(e)
  reply("❌ Deu erro na tradução")
}
}
break







  
  







  
//===========(ADMS-FUNÇÕES-AKI)=========\\

case 'raizq': case 'raizquadrada':
if(!Number(q.replace("√", ""))) return reply("Retorne após o comando o número que você quer encontrar a raiz quadrada")
radical = Number(q.replace("√", ""))
if(!raiz(radical)) {
  divi = divisores(radical)
  if(divi.length <= 0) return reply("Nenhum divisor encontrado...")
  primeiro = []
  for(a of divi) {
    if(raiz(a)) primeiro.push({search: a, resultado: findRaiz(a)})
  }
  if(primeiro.length <= 0) return reply("Nenhuma raiz encontrada...")
  result_x = primeiro[primeiro.length - 1].resultado
  resto = radical / primeiro[primeiro.length - 1].search
  dividir = divisores(resto)
  if(divisores.length > 0) {
    segundo = []
    for(b of dividir) {
      if(raiz(b)) segundo.push({search: b, resultado: findRaiz(b)})
    }
    if(segundo.length > 0) {
      result_x *= segundo[segundo.length - 1].resultado
      result_x += `√` + (resto / segundo[segundo.length - 1].search)
    } else result_x += `√` + resto
  } else result_x += `√` + resto
} else result_x = findRaiz(radical)
reply(`🧮 _Segundo meus cálculos, a √${q.replace("√", "")} é -> *"${result_x}"*_ ヅ`)
break




case 'calcular':  

  try {
    let rsp = q.replace("x", "*")
               .replace('"', ":")
               .replace(new RegExp("[()abcdefghijklmnopqrstwuvxyz]", "gi"), "")
               .replace("÷", "/");
    const resultado = eval(rsp);
    const mensagem = `🧮 *Cálculo Realizado* 🧮  
    
🔢 *Expressão:* ${q}
    
➗ *Resultado:* ${resultado}

🎯 *Fórmula calculada com sucesso!*

❤️ Se precisar de mais cálculos, é só chamar! ❤️`;
    return reply(mensagem);
  } catch (error) {
    return reply("❌ *Erro no cálculo!*❌\nPor favor, verifique a expressão e tente novamente.");
  }
  break;




case 'descriçãogp':  
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.adm)
blabla = args.join(" ")
sandro.groupUpdateDescription(from, `${blabla}`)
sandro.sendMessage(from, {text: 'Sucesso, alterou a descrição do grupo'}, {quoted: info})
break























case 'infogp':  
case 'gpinfo':  
case 'regras':  
if(!isGroup) return reply(enviar.msg.grupo)
try {
var ppUrl = await sandro.profilePictureUrl(from, 'image')
} catch {
var ppUrl = `https://telegra.ph/file/6ca032835ed7a16748b6f.jpg`
}
var puxarInfo = await sandro.groupMetadata(from)
var ANC_INFO = puxarInfo.announce
var returnAnnounce = ANC_INFO === false ? "Não." : ANC_INFO === true ? "Sim." : undefined
var RST_INFO = puxarInfo.restrict 
var returnRestrict = RST_INFO === false ? "Sim." : RST_INFO === true ? "Não." : undefined
var infoCreator = puxarInfo.subjectOwner || "Não Encontrado"
infoGroup = `• Nome do Grupo: *${puxarInfo.subject}*\n• ID: *${puxarInfo.id}*\n-\n• Este grupo foi criado por: *@${infoCreator.replace("@s.whatsapp.net", "")}*\n• Data/hora de criação do grupo: *${moment(`${puxarInfo.creation}` * 1000).tz('America/Sao_Paulo').format('DD/MM/YYYY HH:mm:ss')}*\n• Horário e data da última alteração no grupo: *${moment(`${puxarInfo.subjectTime}` * 1000).format('DD/MM/YYYY HH:mm:ss')}*\n-\n• Quantidade de adminstradores: *${groupAdmins.length}*\n• Quantidade de membros: *${somembros.length}*\n• Soma total de membros e admins do grupo: *${puxarInfo.participants.length} participantes*\n-\n• Este grupo está fechado no momento? *${returnAnnounce}*\n• As informações do grupo podem ser alteradas por membros? *${returnRestrict}*\n-\n• Para ver as atividades dos participantes, use: *${prefix}atividade*\n• Para ver os membros inativos no grupo, use: *${prefix}inativos [quantidade de mensagens]*, ex: ${prefix}inativos 10`
await sandro.sendMessage(from, {image: {url: ppUrl}, caption: infoGroup, mentions: [infoCreator]}, {quoted: info})
break 

case 'totag':
case 'cita':
case 'hidetag':
case 'hide-tag':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
var DFC = "";
var rsm = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
var pink = isQuotedImage ? rsm?.imageMessage : info.message?.imageMessage
var blue = isQuotedVideo ? rsm?.videoMessage : info.message?.videoMessage
var purple = isQuotedDocument ? rsm?.documentMessage : info.message?.documentMessage
var yellow = isQuotedDocW ? rsm?.documentWithCaptionMessage?.message?.documentMessage : info.message?.documentWithCaptionMessage?.message?.documentMessage
var aud_d = isQuotedAudio ? rsm.audioMessage : ""
var figu_d = isQuotedSticker ? rsm.stickerMessage : ""
var red = isQuotedMsg && !aud_d && !figu_d && !pink && !blue && !purple && !yellow ? rsm.conversation : info.message?.conversation
var green = rsm?.extendedTextMessage?.text || info?.message?.extendedTextMessage?.text
var MRC_TD = groupMembers.map(i => i.id)

if (pink && !aud_d && !purple) {
    var DFC = pink
    pink.caption = q.length > 1 
        ? q.trim()
        : (pink.caption || '').replace(new RegExp(`${prefix}${command}`, "gi"), '').trim()
    pink.image = { url: pink.url }
    pink.mentions = MRC_TD
} else if (blue && !aud_d && !purple) {
    var DFC = blue  
    blue.caption = q.length > 1 
        ? q.trim()
        : (blue.caption || '').replace(new RegExp(`${prefix}${command}`, "gi"), '').trim()
    blue.video = { url: blue.url }
    blue.mentions = MRC_TD
} else if (red && !aud_d && !purple) {
    black = {}
    black.text = red.replace(new RegExp(`${prefix}${command}`, "gi"), '').trim()
    black.mentions = MRC_TD
    var DFC = black
} else if (!aud_d && !figu_d && green && !purple) {
    brown = {}
    brown.text = green.replace(new RegExp(`${prefix}${command}`, "gi"), '').trim()
    brown.mentions = MRC_TD
    var DFC = brown
} else if (purple) {
    var DFC = purple
    purple.document = { url: purple.url }
    purple.mentions = MRC_TD
} else if (yellow && !aud_d) {
    var DFC = yellow 
    yellow.caption = q.length > 1 
        ? q.trim()
        : (yellow.caption || '').replace(new RegExp(`${prefix}${command}`, "gi"), '').trim()
    yellow.document = { url: yellow.url }
    yellow.mentions = MRC_TD
} else if (figu_d && !aud_d) {
    var DFC = figu_d
    figu_d.sticker = { url: figu_d.url }
    figu_d.mentions = MRC_TD
} else if (aud_d) {
    var DFC = aud_d
    aud_d.audio = { url: aud_d.url }
    aud_d.mentions = MRC_TD
    aud_d.ptt = true
}

try {
    if (!DFC || (typeof DFC === 'string' && !DFC.trim())) {
        return reply(`❌ Não encontrei nenhum conteúdo para marcar todos.`)
    }

    await sandro.sendMessage(from, DFC)

    // Remove automaticamente a mensagem original enviada com .hidetag/.hide-tag.
    // O conteúdo novo enviado acima permanece no grupo.
    if (info?.key?.id) {
        await sandro.sendMessage(from, { delete: info.key }).catch(() => {})
    }
} catch(e) {
    console.log(e)
    reply(`❌ Não foi possível enviar o hide-tag.`)
}
break

case 'marcar':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
async function marcac() {
bla = []
blad = `• Mencionando os membros comuns do grupo ou de uma comunidade. ${!q ? "" : `\n*Mensagem:* ${q}`}\n\n`
for( let i of somembros ) {
blad += `╔♡∞*♡♡∞:｡.｡❤️｡.｡:∞♡*♡:∞♡╗
╠═⪩⟨❤️𝐀𝐂𝐎𝐑𝐃𝐀⟩
╚♡∞*♡♡∞:｡.｡❤️｡.｡:∞♡*♡:∞♡╝
» @${i.split("@")[0]}\n`
bla.push(i)
}
blam = JSON.stringify(somembros)
if(blam.length == 2) return reply(`❌️ Olá *${pushname}* - Não contém nenhum membro comum no grupo, é sim apenas administradores. `)
mentions(blad, bla, true)  
}
marcac().catch(e => {
console.log(e)
})
break



case 'personalidade': { //Criado por Lm
    try {
if(!isGroup) return reply(enviar.msg.grupo)
        /** Pega a menção */
        const mentionMessage = info.message?.extendedTextMessage?.contextInfo?.mentionedJid?.[0] || info.message?.extendedTextMessage?.contextInfo?.participant || null;
        
        if (mentionMessage) {
        
            await reply("*Gerando um personalidade aleatória dessa pessoa, aguarde um momento... 🤗*");
            
            /** Função para pegar palavras aleatoriamente */
            const randomFromArray = (array) => array[Math.floor(Math.random() * array.length)];
            
            /** Pega a imagem */
            const getProfileUrl = await sandro.profilePictureUrl(mentionMessage, 'image').catch(() => "https://telegra.ph/file/b5427ea4b8701bc47e751.jpg");
            
            /** Pode add mais... */
            const types = {
                genders: ["Gay 🏳️‍🌈", "Masculino 💪", "Feminino 🦋", "Trans 🏳️‍⚧️", "Lésbica 👩‍❤️‍👩"],
                hobbies: ["Cozinhar 🍜", "Ler livros 📚", "Estudar 🎒", "Praticar esportes ⛹️", "Correr 🏃", "Ouvir música 🎧", "Dançar 💃", "Cantar 🎤", "Viajar 🛫", "Joagar video-gamer 🎮"],
                professions: ["Médico", "Engenheiro", "Professor", "Artista", "Designer", "Programador", "Músico", "Escritor", "Puta"],
                favoriteTimesOfDay: ["Manhã 🌤", "Tarde 🌅", "Noite 🌌", "Madrugada 🌃"],
                favoriteMusicGenres: ["Rock", "Pop", "Jazz", "Sertanejo", "Funk", "Clássica", "Eletrônica"],
                favoriteTemperatura: ["Frio 🥶", "Quente 🥵", "Morno 🙂‍↕"]
            };
            
            /** Função para criar um resultado da personalidade */
            function getResults() {
                return {
                    genero: randomFromArray(types.genders),
                    hobbie: randomFromArray(types.hobbies),
                    job: randomFromArray(types.professions),
                    clima: randomFromArray(types.favoriteTimesOfDay),
                    estilo_musical: randomFromArray(types.favoriteMusicGenres),
                    temperatura: randomFromArray(types.favoriteTemperatura)
                }
            }
            
            /** Retonarndo resultado akkaka */
            const b = getResults();
            await sandro.sendMessage(from, {
                image: {
                    url: getProfileUrl,
                }, 
                caption: `   • Resultados da personalidade de @${mentionMessage.split("@")[0]} ✨ ↴\n-\n ░⃟⃛ ➮ Está pessoa provavelmente é *${b.genero}*\n ░⃟⃛ ➮ Gosta de *${b.hobbie}*\n ░⃟⃛ ➮ Sua profissão é ser *${b.job}*\n ░⃟⃛ ➮ A hora do dia preferida é de *${b.clima}*\n ░⃟⃛ ➮ Seu estilo de música é: *${b.estilo_musical}*\n ░⃟⃛ ➮ Temperatura favorita é *${b.temperatura}*\n-\n\n  • Espero ter acertado pelo menos uma hein!!  @${mentionMessage.split("@")[0]} 👀\n\n${NomeDoBot}`,
                mentions: [mentionMessage, sender]
            }, {
                quoted: info
            });
        }
        else {
            reply("Mencione o '@' ou a mensagem de alguém...");
        }
    } catch (err) {
        console.error(err);
        reply("*Ops! Algo inesperado aconteceu. ❌*");
    }
    break;
}









case 'reviver':
if(!isGroup) return reply(enviar.msg.grupo)
if(!SoDono) return reply(enviar.msg.donosmt)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('Marque uma mensagem do alvo!')
response2 = await sandro.groupParticipantsUpdate(from, [menc_prt], "add" )
reply('Usuario adicionado de volta ao grupo.')
break

case 'saibot':

case 'sairgp':
if(!SoDono && !isnit) return reply("⚒️ Só o dono pode executar este comando.")
reply(`Ok ${pushname} 

Olá, pessoal! Estou saindo do grupo, Agradeço a todos e até mais!`)
await delay(1000)
try {
await sandro.groupLeave(from)
} catch(e) {
console.log(e)
reply(`Erro`)
}
break

 






case 'advertir':
case 'adverter': 
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(menc_os2 == botNumber) return reply("Não pode advertir o próprio bot.");
if(menc_os2 == nmrdn) return reply("Não pode advertir o próprio dono do bot.");
if(groupAdmins.includes(menc_os2)) return reply("Não é possível advertir adminstrador do grupo.");
if(!JSON.stringify(groupMembers).includes(menc_os2)) return reply("Não tem como advertir um usuário que não se encontra mais no grupo.")
ADVT.push(menc_os2); setGp(dataGp)  
setTimeout(async() => {
var dfqn = ADVT.filter(x => x == menc_os2).length
var dfntxt = mess.warningAdvertencia(menc_os2, dfqn)
if(!dfntxt.includes("3/3")) {
if(!JSON.stringify(ADVT).includes(sender)) {
await sleep(1500); mentions(dfntxt, [menc_os2])
} else if(dfqn == 2) {
await sleep(1500); mentions(dfntxt, [menc_os2])
}} else {sandro.sendMessage(from, {text: mess.finishAdvertencia(menc_os2), mentions: [menc_os2]})
await sleep(1500)
sandro.groupParticipantsUpdate(from, [menc_os2], "remove")
var i = ADVT.indexOf(menc_os2); ADVT.splice(i, 3); setGp(dataGp)}}, 3000)
break



//======≠(INFOS/EXECUÇÃO/DONO)≠=========\\










    
case 'atividade':
case 'atividades':
try{
if(!isGroupAdmins && !issupre && !ischyt) return reply(enviar.msg.adm)
if(isGroup && JSON.stringify(countMessage).includes(from)) {
var i6 = countMessage.map(i => i.groupId).indexOf(from)
if(countMessage[i6].numbers.length == 0) return
tekskkyre = `*Atividade dos membros do grupo:*\n–\n`
for(i = 0; i < countMessage[i6].numbers.length; i++) {
var i8 = countMessage[i6].numbers.map(i => i.id).indexOf(countMessage[i6].numbers[i].id)  
var uscnt = countMessage[i6].numbers[i]
tekskkyre += `• Participante: *@${uscnt.id.split('@')[0]}*\n• Quantidade de comandos usados pelo(a) participante no grupo: *${uscnt.cmd_messages}*\n• Quantidade de mensagens enviadas pelo(a) participante: *${uscnt.messages}*\n• O participante no momento está conectado em: *${uscnt.aparelho}*\n• Quantidade de figurinhas enviadas no grupo: *${uscnt.figus}*\n–\n`
}
mention(tekskkyre)
} else return reply('*Nada foi encontrado*')
} catch (e){
console.log(e)
}
break







    

    
case 'prefixo-bot': 
    if (!SoDono && !isnit && !info.key.fromMe) return reply(enviar.msg.donosmt); 

    // Atualizar o valor de NickDono no objeto settings
    setting.prefix = q.trim();

    // Salvar as configurações no arquivo settings.json
    try {
        fs.writeFileSync('./config/personalizacao.json', JSON.stringify(setting, null, 2));
        reply(`O prefixo foi alterado com sucesso para: ${setting.prefix}
        
        PARA QUE TODAS AS CONFIGURAÇÕES SEJA APLICADA CORRETAMENTE REINICIE O BOT!!!`);
    } catch (error) {
        reply(`Erro ao salvar as configurações: ${error.message}`);
    }
    break;
    
    

    
case 'channel': {
    if (!SoDono && !isnit && !info.key.fromMe) return reply(enviar.msg.donosmt); 

  const fs = require('fs')
  const caminho = './assets/channel.json'
  const data = JSON.parse(fs.readFileSync(caminho))

  if (q === '1') {
    data.ativo = true
    fs.writeFileSync(caminho, JSON.stringify(data, null, 2))
    reply('✅ Modo *CANAL* ativado')
  } 
  else if (q === '0') {
    data.ativo = false
    fs.writeFileSync(caminho, JSON.stringify(data, null, 2))
    reply('❌ Modo *CANAL* desativado')
  } 
  else {
    reply('❌ Use:\n/channel 1 (ativar)\n/channel 0 (desativar)')
  }
}
break
    





case 'privphotobot': {
if(!SoDono) return reply(enviar.msg.donosmt)
if (!q) return reply(mess.syntaxPrivatePhotoBot(prefix))
if (args[0] === 'all') {
reply(`- A minha foto do perfil agora está visível à todos.`)
await sandro.updateProfilePicturePrivacy('all')
} else if (args[0] === 'cntt') {
reply(`- A minha foto do perfil agora está visível somente aos meus contatos.`)
await sandro.updateProfilePicturePrivacy('contacts')
} else if (args[0] === 'ngm') {
reply(`- A foto do meu perfil está privada a todos, até mesmo ao senhor mestre.`)
await sandro.updateProfilePicturePrivacy('none')
}
}
break

case 'privaddgroup': {
if(!SoDono) return reply(enviar.msg.donosmt)
if (!q) return reply(mess.syntaxPrivAddGroup(prefix))
if (args[0] === 'all') {
reply(`- Pronto, agora todos pode me adicionar em grupo normalmente.`)
await sandro.updateGroupsAddPrivacy(`all`)
} else if (args[0] === 'cntt') {
reply(`- Agora somente meus contatos, pode me adicionar em grupo.`)
await sandro.updateGroupsAddPrivacy(`contacts`)
} else if (args[0] === 'ngm') {
reply(`- Agora ninguém pode ousar me adicionar em grupo, pois será negado.`)
await sandro.updateGroupsAddPrivacy('none')
}
}
break

case 'wallpaperanimes': {
data = fs.readFileSync('./assets/wallpapers/wallpaperanimes.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://telegra.ph/file/0e2989e6947b464fa66b8.jpg`);
sandro.sendMessage(from, {image: imagem, caption: `${thumbInfo}`},{quoted: info})
}
break


case 'wallpaperdark': {
data = fs.readFileSync('./assets/wallpapers/wallpaperdark.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://telegra.ph/file/0e2989e6947b464fa66b8.jpg`);
sandro.sendMessage(from, {image: imagem, caption: `${thumbInfo}`},{quoted: info})
}
break

case 'wallpapervermelho': {
data = fs.readFileSync('./assets/wallpapers/wallpapervermelho.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://telegra.ph/file/0e2989e6947b464fa66b8.jpg`);
sandro.sendMessage(from, {image: imagem, caption: `${thumbInfo}`},{quoted: info})
}
break

case 'wallpapers4k': {
data = fs.readFileSync('./assets/wallpapers/wallpapers4k.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
var foda =[`aqui está o seu ${command} ${pushname}`]
var zaltin = foda[Math.floor(Math.random() * foda.length)]
randKey = jsonData[randIndex];
imagem = await getBuffer(randKey.result)
let thumbInfo = `${zaltin}`;
blabla = await getBuffer(`https://telegra.ph/file/0e2989e6947b464fa66b8.jpg`);
sandro.sendMessage(from, {image: imagem, caption: `${thumbInfo}`},{quoted: info})
}
break



























  
case 'listaadmins':   
if(!isGroup) return reply(enviar.msg.grupo)
ytb = `Lista de admins do grupo *${groupMetadata.subject}*\n*Total de Adminstradores:* ${groupAdmins.length}\n-\n`
no = 0
for (let admon of groupAdmins) {
no += 1
ytb += `( ${no.toString()} ) - @${admon.split('@')[0]}\n`
}
mentions(ytb, groupAdmins, true)
break

 
case 'on': 

if(!isGroupAdmins && !SoDono) return reply("Só adm ou dono pode utilizar este comando.")
if(DonoOficial) {
if(fs.existsSync("./database/func/afk/afk-@" + numerodono_ofc + ".json")) {  
DLT_FL("./database/func/afk/afk-@" + numerodono_ofc + ".json");
reply("Bem vindo de volta, agora você está online 🙂")
} else {
reply("Você não registrou nenhuma mensagem de ausência...")
}
} else if(isGroupAdmins) {
if(!JSON.stringify(dataGp[0].ausentes).includes(sender)) return reply("Não há nenhum registro de ausência sua..")
dataGp[0].ausentes.splice(dataGp[0].ausentes.map(x => x.id).indexOf(sender), 1)
setGp(dataGp)
reply("Registro de ausência tirada com sucesso...")
}
break

 
case 'off': 

if(!isGroupAdmins && !SoDono) return reply("Só adm ou dono pode utilizar este comando.")
if(DonoOficial) {
msgtmp = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
fs.writeFileSync(`./database/func/afk/afk-@${setting.numerodono.replace(new RegExp("[()+-/ +/]", "gi"), "")}.json`,
JSON.stringify({
Ausente_Desde: msgtmp, 
Motivo_Da_Ausência: q
}, null, 2));
reply(`Mensagem de ausência criada com sucesso...`)
} else if(isGroupAdmins) {
if(!q.trim()) return reply(`Digite a mensagem de ausência, Exemplo: ${prefix+command} Estou tomando banho`)
if(!JSON.stringify(dataGp[0].ausentes).includes(sender)) {
dataGp[0].ausentes.push({id: sender, msg: q.trim()})
setGp(dataGp)
reply("Mensagem de ausência criada com sucesso..\nSe deseja desativar a mensagem de ausência use o comando ativo")
} else {
dataGp[0].ausentes[dataGp[0].ausentes.map(i => i.id).indexOf(sender)].msg = q.trim()
setGp(dataGp)
reply("Mensagem de ausência alterada com sucesso..\nSe deseja desativar a mensagem de ausência use o comando ativo")
}
} else {
return reply("Comando apenas para administradores e dono do bot..")
}
break

case 'addpremium':
case 'addvip':
case 'addprem': {
  if (!SoDono) return reply(enviar.msg.donosmt)

  const fs = require('fs')

  if (!q || !q.includes('/'))
    return reply(`❌ Uso correto:\n${prefix + command} 559999999999/1`)

  let [numero, dias] = q.split('/')

  numero = numero.replace(/\D/g, '')
  dias = Number(dias)

  if (!numero || numero.length < 10 || numero.length > 15)
    return reply('❌ Número inválido.')

  if (isNaN(dias))
    return reply('❌ Dias inválidos.')

  const usur = numero + '@s.whatsapp.net'
  const infinito = dias === 0
  const dvip = Number(moment.tz('America/Sao_Paulo').format('DD'))

  // 🔥 REMOVE DUPLICADOS SEM REATRIBUIR O ARRAY
  for (let i = premium.length - 1; i >= 0; i--) {
    const base = premium[i].id
      .replace(/@s\.whatsapp\.net|@lid/g, '')
      .replace(/\D/g, '')

    if (base === numero) {
      premium.splice(i, 1)
    }
  }

  // adiciona limpo
  premium.push({
    id: usur,
    dias: dias,
    save: dvip,
    infinito: infinito
  })

  fs.writeFileSync(
    './database/usuarios/premium.json',
    JSON.stringify(premium, null, 2)
  )

  await sandro.sendMessage(from, {
    text: infinito
      ? `✨ Usuário ${numero} recebeu *PREMIUM INFINITO*!`
      : `⭐ Usuário ${numero} foi adicionado ao premium por *${dias} dia${dias > 1 ? 's' : ''}*!`
  }, { quoted: info })

  break
}



case 'delprem':
if(!SoDono) return reply(enviar.msg.donosmt)
if(!marc_tds) return reply(`Marque o usuário que deseja remover da lista premium.️`)
if(!JSON.stringify(premium).includes(marc_tds)) return reply("Este número não está incluso atualmente na lista de usuários premium(ns)..")
AB = premium.map(i => i.id).indexOf(marc_tds)
premium.splice(AB, 1)
fs.writeFileSync('./database/usuarios/premium.json', JSON.stringify(premium))
sandro.sendMessage(from, {text: `@${marc_tds.split("@")[0]} foi removido da lista premium com sucesso!`, mentions: [marc_tds]}, {quoted: info})
break



case 'limpar':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
clear = `🗑️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ* ✅`
sandro.sendMessage(from, {text: clear}, {quoted: info, contextInfo : { forwardingScore: 500, isForwarded:true}})
break




case 'docfake':
try {
sprd = "|"
if(!q) return reply(`${prefix + command} exemplo${sprd}500${sprd}apk\n-\nOs tipos aceitos por enquanto são: pdf > xml > zip > jpg > ppt > apk > txt > aac > pptx > aac > m4a > mp4 > mp3 > svg > png`)
kls = args.join(' ')
let nomedoc = kls.split(sprd)[0] || `${setting.NomeDoBot}`
let peso = kls.split(sprd)[1] * 1000000 || '1000000'
let mimetyp = kls.split(sprd)[2].replace(" ", "") || 'gif'
let thumbc = kls.split(sprd)[3] || 'https://google.com/'
if(mimetyp.toLowerCase() == 'pdf') mimetyp = 'application/pdf'
if(mimetyp.toLowerCase() == 'apk') mimetyp = 'application/vnd.android.package-archive'
if(mimetyp.toLowerCase() == 'aac') mimetyp = 'audio/aac'
if(mimetyp.toLowerCase() == 'xml') mimetyp = 'application/xml'
if(mimetyp.toLowerCase() == 'zip') mimetyp = 'application/zip'
if(mimetyp.toLowerCase() == 'jpg') mimetyp = 'image/jpeg'
if(mimetyp.toLowerCase() == 'ppt') mimetyp = 'application/vnd.ms-powerpoint'
if(mimetyp.toLowerCase() == 'pptx') mimetyp = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
if(mimetyp.toLowerCase() == 'mp4') mimetyp = 'video/mp4'
if(mimetyp.toLowerCase() == 'm4a') mimetyp = 'audio/mpeg'
if(mimetyp.toLowerCase() == 'mp3') mimetyp = 'audio/mpeg'
if(mimetyp.toLowerCase() == 'gif') mimetyp = 'image/gif'
if(mimetyp.toLowerCase() == 'png') mimetyp = 'image/png'
if(mimetyp.toLowerCase() == 'svg') mimetyp = 'image/svg+xml'
if(mimetyp.toLowerCase() == 'txt') mimetyp = 'text/plain'
let Messagemdoc = {document: fs.readFileSync('./database/data/docf.txt'), mimetype: mimetyp, jpegThumbnail: await getBuffer(thumbc), fileName: nomedoc, fileLength: peso, headerType: 4, contextInfo:{forwardingScore:999,isForwarded:true}}
sandro.sendMessage(from, Messagemdoc, {quoted: info})
} catch (err) {
console.log(err)
reply(`Ops ocorreu um erro`)
}
break




case 'deletar':
case 'delete':
case 'del':
 {

if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (!isPremium) return reply("Somente membros VIP!")

const quoted = info.message?.extendedTextMessage?.contextInfo

if (!quoted || !quoted.stanzaId)
  return reply("❌ Marque (responda) a mensagem que deseja apagar.")

const deleteMsg = {
  remoteJid: from,
  fromMe: quoted.participant === sandro.user.id,
  id: quoted.stanzaId,
  participant: quoted.participant
}

await sandro.sendMessage(from, { delete: deleteMsg })

}
break

/*
case 'fundobemvindo':
case 'fundobv':  
if(!SoDono && !isnit && !info.key.fromMe) return reply(Res_SoDono)
if(!isQuotedImage) return reply("Marque uma imagem..")
reply('Você deve marcar uma imagem com esse comando, se não for de primeira, tente novamente, ok? ')
if((isMedia && !info.message.videoMessage || isQuotedImage || isQuotedVideo ) && !q.length <= 1) {
boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info
owgi = await getFileBuffer(boij, 'image')
res = await upload(owgi)
fundo1 = res
logoslink.fundo1 = res
fs.writeFileSync("./config/links_img.json", JSON.stringify(logoslink, null, 2));
reply(`A imagem de bem vindo foi alterado com sucesso para: ${fundo1}`)
}
break*/

/*
case 'fundosaiu':
if(!SoDono && !isnit && !info.key.fromMe) return reply(Res_SoDono)
if(!isQuotedImage) return reply("Marque uma imagem..")
reply('Você deve marcar uma imagem com esse comando, se não for de primeira, tente novamente, ok? ')
if((isMedia && !info.message.videoMessage || isQuotedImage || isQuotedVideo ) && !q.length <= 1) {
boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info
owgi = await getFileBuffer(boij, 'image')
res = await upload(owgi)
fundo2 = res
logoslink.fundo2 = res
fs.writeFileSync("./config/links_img.json", JSON.stringify(logoslink, null, 2));
reply(`A imagem de saiu foi alterado com sucesso para: ${fundo2}`)
}
break*/

case 'antiligar':
case 'antiligacao':  
case 'antiligação':  
if(!SoDono) return reply(enviar.msg.donosmt)
if(!isAnticall) {
nescessario.anticall = true
setNes(nescessario)
reply(`O anti ligação foi ativado com sucesso. Caso alguém efetue uma ligação para o bot será bloqueado.`)
} else if(isAnticall) {
nescessario.anticall = false
setNes(nescessario)
reply('O anti ligação foi desativado com sucesso.')
}
break

case 'antipv': {

  const caminho = './assets/antipv.json'

  const data = JSON.parse(fs.readFileSync(caminho))

  if (q === '1') {
    data.ativo = true
    fs.writeFileSync(caminho, JSON.stringify(data, null, 2))
    reply('✅ Anti-PV *LIGADO*\nUsuários não poderão usar o bot no privado.')
  } 
  else if (q === '0') {
    data.ativo = false
    fs.writeFileSync(caminho, JSON.stringify(data, null, 2))
    reply('❌ Anti-PV *DESLIGADO*')
  } 
  else {
    reply('❌ Use:\n/antipv 1 (ligar)\n/antipv 0 (desligar)')
  }
}
break

case 'antipv3':
if(!SoDono) return reply(enviar.msg.donosmt)
if(!isAntiPv3) {
nescessario.antipv3 = true
setNes(nescessario)
reply("Antipv3 ativado com sucesso, irei ignorar todas as mensagens recebidas no pv, exceto: donos e usuários premium..")
} else if(isAntiPv3) {
nescessario.antipv3 = false
setNes(nescessario)
reply("Antipv3 desativado com sucesso, agora responderei todos sem preferência!")
}
break

 
 



















 

case 'totalcmd3':
case 'totalcmd4':
case 'totalcmd5':
case 'totalcomando': {
    if (!SoDono) return reply(enviar.msg.donosmt);

    fs.readFile('./sandro.js', 'utf8', async (err, data) => {
        if (err) {
            console.error(err);
            return reply('❌ Erro ao ler o arquivo.');
        }

        let regex = /case\s+'([^']+)'/g;
        let match;
        let caseNames = [];

        while ((match = regex.exec(data)) !== null) {
            caseNames.push(match[1]);
        }

        let totalCount = caseNames.length;

        const texto = `*Olá ${pushname}*

_Atualmente eu possuo um total de:_
*${totalCount} comandos ativos*`;

        // 🔹 controle
        const controle = "./config/fototipo.json";

        let tipo = "jpg";
        if (fs.existsSync(controle)) {
            tipo = JSON.parse(fs.readFileSync(controle)).tipo;
        }

        // 🔥 ENVIO INTELIGENTE
        if (tipo === "gif" && fs.existsSync('./config/fotobot.gif')) {

            await sandro.sendMessage(from, {
                video: fs.readFileSync('./config/fotobot.gif'),
                gifPlayback: true,
                caption: texto
            }, { quoted: info });

        } else if (fs.existsSync('./config/fotobot.jpg')) {

            await sandro.sendMessage(from, {
                image: fs.readFileSync('./config/fotobot.jpg'),
                caption: texto
            }, { quoted: info });

        } else {

            await sandro.sendMessage(from, {
                image: { url: `${fotobot}` },
                caption: texto
            }, { quoted: info });

        }

    });
}
break;

case 'instagram':
case 'ig': {
if (!q) return reply(`Use: ${prefix + command} link_do_instagram`)

try {
reply(`❤️ *Buscando por ${q} Aguarde...* ❤️`);
reagir(from, "📥")

const api = `${zerosite}/api/dl/instagram?url=${encodeURIComponent(q)}&apikey=${API_KEY_ZEROTWO}`

const res = await fetchJson(api)

if (!res?.Instagram?.status) {
return reply("Não foi possível processar o link.")
}

const data = res.Instagram.resultados.data

if (!data.video || !data.video.length) {
return reply("Nenhum vídeo encontrado.")
}

const video = data.video[0]

// Envia o vídeo
await sandro.sendMessage(from, {
video: { url: video },
caption: `> ${NomeDoBot}\n> *INSTAGRAM DOWNLOAD*`
}, { quoted: info })

// Envia o áudio
await sandro.sendMessage(from, {
audio: { url: video },
mimetype: "audio/mp4",
ptt: false
}, { quoted: info })

} catch (e) {
console.log(e)
reply("Erro ao baixar o conteúdo.")
}
}
break

case 'instaaudio': case 'igaudio': case 'instagramaudio':


case 'igaudio': {
    if (!q) return reply(`Use: ${prefix + command} link_do_instagram`)

    try {
reply(`❤️ *Buscando por ${q} Aguarde...* ❤️`);
        reagir(from, "📥")

        const api = `${zerosite}/api/dl/instagram?url=${encodeURIComponent(q)}&apikey=${API_KEY_ZEROTWO}`

        const res = await fetchJson(api)

        if (!res?.Instagram?.status) {
            return reply("Não foi possível processar o link.")
        }

        const video = res.Instagram.resultados.data.video?.[0]

        if (!video) {
            return reply("Nenhum vídeo encontrado.")
        }

        await sandro.sendMessage(
            from,
            {
                audio: { url: video },
                mimetype: 'audio/mpeg',
                ptt: false
            },
            { quoted: info }
        )

    } catch (e) {
        console.log(e)
        reply("Erro ao extrair o áudio.")
    }
}
break



case 'ping': {
    reagir(from, "❤️")
    const fs = require('fs')
    const os = require('os')
    const { prepareWAMessageMedia } = require('@systemzero/baileys')
    const caminhoCfg = './config/botoes.json'

    // ⏱️ FUNÇÃO DE TEMPO
    const kyun = (segundos) => {
        const d = Math.floor(segundos / 86400)
        const h = Math.floor((segundos % 86400) / 3600)
        const m = Math.floor((segundos % 3600) / 60)
        const s = Math.floor(segundos % 60)
        return `${d}d ${h}h ${m}m ${s}s`
    }
    const infoSystem = os

    // 📊 CÁLCULOS ORIGINAIS
    const r = (Date.now() / 1000) - info.messageTimestamp
    const uptime = process.uptime()
    const respon = `⏱️ *Velocidade de Resposta:* ${r.toFixed(3)} segundos

🤖 Online há: ${kyun(uptime)}
💻 Sistema: ${infoSystem.type()}
📂 Versão: ${infoSystem.release()}
💾 RAM Total: ${(infoSystem.totalmem() / 1073741824).toFixed(2)} GB
💾 RAM Livre: ${(infoSystem.freemem() / 1073741824).toFixed(2)} GB`

    try {
        const numero = info.key.participant || sender
        const perfilUser = await sandro.profilePictureUrl(numero, 'image')
            .catch(() => 'https://i.ibb.co/CKXwf3ss/sandrobot-1753455081623.jpg')

        const pingApiUrl =
            `${zerosite}/api/pingcanvas?title=SANDRO%20MD&nome=%C2%BB%20${String(r.toFixed(3))}ms%20%C2%AB&hex=%23FF0095&hex2=%23ffffff&perfil=${encodeURIComponent(perfilUser)}&message=A%20melhor%20forma%20de%20prever%20o%20futuro%20%C3%A9%20invent%C3%A1%E2%80%91lo.&fundo=${fotobot}&apikey=${API_KEY_ZEROTWO}`

        const media = await prepareWAMessageMedia(
            { image: { url: pingApiUrl } },
            { upload: sandro.waUploadToServer }
        )

        let channel = { ativo: false }
        try { channel = JSON.parse(fs.readFileSync('./assets/channel.json', 'utf-8')) } catch {}
        const contextInfo = {
            forwardingScore: 9999,
            isForwarded: true,
            mentionedJid: [sender],
            
        }

        let botoesAtivos = 0
        try {
            if (fs.existsSync(caminhoCfg)) {
                botoesAtivos = JSON.parse(fs.readFileSync(caminhoCfg)).status
            } else {
                fs.writeFileSync(caminhoCfg, JSON.stringify({ status: 1 }, null, 2))
            }
        } catch {}

        if (botoesAtivos === 1) {
            await sandro.relayMessage(from, {
                interactiveMessage: {
                    contextInfo,
                    header: {
                        hasMediaAttachment: true,
                        imageMessage: media.imageMessage
                    },
                    body: { text: respon },
                    footer: { text: `© ${NomeDoBot}` },
                    nativeFlowMessage: {
                        buttons: [
                            {
                                name: "quick_reply",
                                buttonParamsJson: JSON.stringify({
                                    display_text: "MENU",
                                    id: `${prefix}menu`
                                })
                            },
                            {
                                name: "quick_reply",
                                buttonParamsJson: JSON.stringify({
                                    display_text: "CRIADOR",
                                    id: `${prefix}criador`
                                })
                            },
                            {
                                name: "cta_url",
                                buttonParamsJson: JSON.stringify({
                                    display_text: "CANAL",
                                    url: "https://whatsapp.com/channel/0029Vb8tJ5x77qVZnxr3oC3C"
                                })
                            }
                        ]
                    }
                }
            }, { quoted: info })
        }

        else {
            await sandro.sendMessage(from, {
                image: { url: pingApiUrl },
                caption: respon,
                mentions: [sender],
                contextInfo
            }, { quoted: info })
        }

    } catch (e) {
        console.log('Erro no ping:', e)
        reply('❌ Ocorreu um erro ao gerar o ping.')
    }
}
break



/*
case 'ping': {
reagir(from, "🏃🏻")
r = (Date.now() / 1000) - info.messageTimestamp
uptime = process.uptime()
hora1 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
respon = `⏱️ *Velocidade de Resposta:* ${String(r.toFixed(3))} _segundos._\n🤖 *O bot se encontra online por:* ${kyun(uptime)}\n💻 *Sistema Operacional:* ${infoSystem.type()}\n📂 *Versão:* ${infoSystem.release()}\n💾 *Memoria RAM total:* ${(infoSystem.totalmem()/Math.pow(1024, 3)).toFixed(2)}GB\n💾 *Memoria RAM disponível:* ${(infoSystem.freemem()/Math.pow(1024, 3)).toFixed(2)}GB`.trim()
await sandro.sendMessage(from, { image: { url: `https://eruakorl.sirv.com/Bot%20dudinha/ping.jpeg?text.0.text=VELOCIDADE%20DO%20SANDRO&text.0.position.gravity=north&text.0.position.y=15%25&text.0.size=40&text.0.font.family=Teko&text.0.font.weight=800&text.0.background.opacity=100&text.0.outline.blur=100&text.1.text=${String(r.toFixed(3))}&text.1.position.gravity=center&text.1.size=30&text.1.color=ffffff&text.1.font.family=Teko&text.1.font.weight=800&text.1.background.opacity=100&text.1.outline.blur=100` }, caption: respon, mentions: [sender]}, {quoted: info}) 
}
break*/





case 'tagme':
const tagme = `@${sender.split("@")[0]}`
await mentions(tagme, [sender], true)
break




 
 














case 'listblockcmdgp': case 'listbcmdgp':
if(!isGroup) return reply(enviar.msg.grupo);
if(getComandoBlock(from).length == 0) return reply("Não existe ainda nenhum *comando bloqueado* neste grupo.");
tkks = `[Total: *${getComandoBlock(from).length}*] - Comandos bloqueados pelo adminstrador(s) do grupo:\n–\n`
tkks += getComandoBlock(from).map((v, index) =>  `\t• [ *N° ${index+1}* ] - Comando: ${prefix + getComandoBlock(from)[v]}`).join('\n–\n')
sandro.sendMessage(from, {text: tkks.trim()}, {quoted: info})
break







case 'avalie':

qp = args.join(" ")
if(!qp) return reply(`*❕Exemplo:* ${prefix + command} _"Bot muito bom, parabéns!"_.`)
if(args.length >= 400) return sandro.sendMessage(from, {text: '❗Máximo 400 caracteres'}, {quoted: info})
reagir(from, "🔏")
var nomor = info.participant
tdptls = `*_🔏 Avaliação 🔏_*\n-\n*👤 De:* wa.me/${sender.split("@s.whatsapp.net")[0]}\n-\n*📄 Disse isso:* ${qp}`
sandro.sendMessage(nmrdn, {text: tdptls}, {quoted: info})
reply("*_😉 Mensagem enviada ao meu dono, obrigado pela avaliação, iremos melhorar a cada dia._*")
break

case 'sugestão':
case 'sugestao':
qp = args.join(" ")
if(!qp) return reply(`*❕Exemplo:* ${prefix + command} _"opa, crie um comando tal, que ele funcione de tal maneira, isso será muito bom."_`)
if(args.length >= 800) return sandro.sendMessage(from, {text: '❗Máximo 800 caracteres'}, {quoted: info})
reagir(from, "💡")
var nomor = info.participant
sug = `*_📝 Sugestão 📝_*\n-\n*👤 De:* wa.me/${sender.split("@s.whatsapp.net")[0]}\n-\n*💡 Falou isso:* ${qp}`
sandro.sendMessage(nmrdn, {text: sug}, {quoted: info})
reply("*_😉 Mensagem enviada ao meu dono, obrigado pela sugestão, iremos tentar ouvir o máximo possível de sugestões._*")
break

//==========(BAIXAR/PESQUISAS)==========\



// 2. Exercícios diários


// 3. Alimentação saudável


// 4. Rotina de sono


// 5. Hidratação


// 6. Saúde mental


// 7. Nível de condicionamento físico


// 8. Saúde cardiovascular


// 9. Saúde respiratória


// 10. Nível de relaxamento


// 11. Flexibilidade corporal


// 12. Saúde óssea


// 13. Equilíbrio emocional


// 14. Saúde digestiva


// 15. Saúde muscular


// 16. Saúde mental no trabalho


// 17. Saúde imunológica


// 18. Nível de energia física


// 19. Saúde emocional em relacionamentos



  

  

  

  

  

  

  

  
    
case 'dar'://BY: ZERØPHOENIX 
if(!isNsfw) return reply('🔞 Este tipo de comando só pode ser utilizado com o modonsfw ativo, fale com um administrador ou se voce for um apenas digite: .modonsfw 1.')
if(!menc_os2 || menc_jid2[1]) return reply('marque o alvo que você quer dar, a mensagem ou o @')
susp = `Você deu com vontade para @${menc_os2.split('@')[0]}! 😳)` 
jrq = await getBuffer(`https://telegra.ph/file/d72e1d4dba05d2b054fd8.mp4`)
await sandro.sendMessage(from, {video: jrq, gifPlayback: true, caption: susp, mentions: [menc_os2]}, {quoted: info})
break//BY: ZERØPHOENIX 

case 'dar2'://BY: ZERØPHOENIX 
if(!isNsfw) return reply('🔞 Este tipo de comando só pode ser utilizado com o modonsfw ativo, fale com um administrador ou se voce for um apenas digite: .modonsfw 1.')
if(!menc_os2 || menc_jid2[1]) return reply('marque o alvo que você quer dar, a mensagem ou o @')
susp = `Você deu com tanta vontade para @${menc_os2.split('@')[0]}! 😳)` 
jrq = await getBuffer(`https://telegra.ph/file/d577416360c3e9799f880.mp4`)
await sandro.sendMessage(from, {video: jrq, gifPlayback: true, caption: susp, mentions: [menc_os2]}, {quoted: info})
break//BY: ZERØPHOENIX 

case 'dar3'://BY: ZERØPHOENIX
if(!isNsfw) return reply('🔞 Este tipo de comando só pode ser utilizado com o modonsfw ativo, fale com um administrador ou se voce for um apenas digite: .modonsfw 1.')
if(!menc_os2 || menc_jid2[1]) return reply('marque o alvo que você quer dar, a mensagem ou o @')
susp = `Você deu com tanta vontade para @${menc_os2.split('@')[0]}! 😳)` 
jrq = await getBuffer(`https://telegra.ph/file/ccade2471e6371452a021.mp4`)
await sandro.sendMessage(from, {video: jrq, gifPlayback: true, caption: susp, mentions: [menc_os2]}, {quoted: info})
break//BY: ZERØPHOENIX 

case 'mamar'://BY: ZERØPHOENIX 
if(!isNsfw) return reply('🔞 Este tipo de comando só pode ser utilizado com o modonsfw ativo, fale com um administrador ou se voce for um apenas digite: .modonsfw 1.')
if(!menc_os2 || menc_jid2[1]) return reply('marque o alvo que você quer mamar, a mensagem ou o @')
susp = `@${menc_os2.split('@')[0]} Você Recebeu um mamada gostoso(a)` 
jrq = await getBuffer(`https://telegra.ph/file/3ad3be6f2ceec10ced5e8.mp4`)
await sandro.sendMessage(from, {video: jrq, gifPlayback: true, caption: susp, mentions: [menc_os2]}, {quoted: info})
break//BY: ZERØPHOENIX 

//NOVOS CMDS
case 'beijo': case 'beijar': //BY: ZERØPHOENIX 
if(!isGroup) return reply(Res_SoGrupo)
if(!menc_os2 || menc_jid2[1]) return reply('marque a pessoa que você quer beijar, a mensagem ou o @')
sandro.sendMessage(from, {video: {url: 'https://telegra.ph/file/04b88dcf0195faf4e8900.mp4'}, gifPlayback: true, caption: `Você deu um beijo incrível na(o) @${menc_os2.split('@')[0]} 😳😏❤️‍🔥` , mentions: [menc_os2]}, {quoted: info})
break//BY: ZERØPHOENIX 

case 'comergay'://BY: ZERØPHOENIX 
if(!isNsfw) return reply('🔞 Este tipo de comando só pode ser utilizado com o modonsfw ativo, fale com um administrador ou se voce for um apenas digite: .modonsfw 1.')
if(!menc_os2 || menc_jid2[1]) return reply('marque o alvo que você quer comer, a mensagem ou o @')
susp = `Você comeu o chocolate branco @${menc_os2.split('@')[0]} com prazer 🥵🍫)` 
jrq = await getBuffer(`https://telegra.ph/file/6804014b0f3b42711b257.mp4`)
await sandro.sendMessage(from, {video: jrq, gifPlayback: true, caption: susp, mentions: [menc_os2]}, {quoted: info})
break//BY: ZERØPHOENIX 

case 'comer'://BY: ZERØPHOENIX 
if(!isNsfw) return reply('🔞 Este tipo de comando só pode ser utilizado com o modonsfw ativo, fale com um administrador ou se voce for um apenas digite: .modonsfw 1.')
if(!menc_os2 || menc_jid2[1]) return reply('marque o alvo que você quer mamar, a mensagem ou o @')
susp = `Você tratou da(o) @${menc_os2.split('@')[0]} com muito cuidado e dedicação ❤️🔥` 
jrq = await getBuffer(`https://telegra.ph/file/cd28a1938d70cf025e207.mp4`)
await sandro.sendMessage(from, {video: jrq, gifPlayback: true, caption: susp, mentions: [menc_os2]}, {quoted: info})
break//BY: ZERØPHOENIX 

case 'comer1'://BY: ZERØPHOENIX 
if(!isNsfw) return reply('🔞 Este tipo de comando só pode ser utilizado com o modonsfw ativo, fale com um administrador ou se voce for um apenas digite: .modonsfw 1.')
if(!menc_os2 || menc_jid2[1]) return reply('marque o alvo que você quer mamar, a mensagem ou o @')
susp = `Você cuidou de @${menc_os2.split('@')[0]} com muito carinho e atenção ❤️🔥` 
jrq = await getBuffer(`https://telegra.ph/file/594c6ddb8d18f2a7d49e9.mp4`)
await sandro.sendMessage(from, {video: jrq, gifPlayback: true, caption: susp, mentions: [menc_os2]}, {quoted: info})
break//BY: ZERØPHOENIX 

case 'comer2'://BY: ZERØPHOENIX 
if(!isNsfw) return reply('🔞 Este tipo de comando só pode ser utilizado com o modonsfw ativo, fale com um administrador ou se voce for um apenas digite: .modonsfw 1.')
if(!menc_os2 || menc_jid2[1]) return reply('marque o alvo que você quer mamar, a mensagem ou o @')
susp = `A @${menc_os2.split('@')[0]} recebeu um tratamento especial e cheio de dedicação ❤️🔥` 
jrq = await getBuffer(`https://telegra.ph/file/edeb2315d9ec5f32179ac.mp4`)
await sandro.sendMessage(from, {video: jrq, gifPlayback: true, caption: susp, mentions: [menc_os2]}, {quoted: info})
break//BY: ZERØPHOENIX 

case 'comer3'://BY: ZERØPHOENIX 
if(!isNsfw) return reply('🔞 Este tipo de comando só pode ser utilizado com o modonsfw ativo, fale com um administrador ou se voce for um apenas digite: .modonsfw 1.')
if(!menc_os2 || menc_jid2[1]) return reply('marque o alvo que você quer mamar, a mensagem ou o @')
susp = `Você tratou @${menc_os2.split('@')[0]} com todo o zelo e energia ❤️🔥` 
jrq = await getBuffer(`https://telegra.ph/file/dd55bfd88c1449838f800.mp4`)
await sandro.sendMessage(from, {video: jrq, gifPlayback: true, caption: susp, mentions: [menc_os2]}, {quoted: info})
break//BY: ZERØPHOENIX 

  

  

  

  

case 'cinema': {
    reply('🎬 Aguarde enquanto busco os novos filmes... 🍿');

    const url = 'https://www.adorocinema.com/filmes/em-cartaz/estreias/';

    axios.get(url)
        .then(response => {
            const data = response.data;
            const $ = cheerio.load(data);

            let movies = [];

            $('.entity-card').each((index, element) => {
                const title = $(element).find('.meta-title-link').text().trim();
                const releaseDate = $(element).find('.meta-body-info .date').text().trim();
                const genre = $(element).find('.meta-body-info .dark-grey-link').text().trim();
                const rating = $(element).find('.rating-star .tooltip-child').first().text().trim() || 'N/A';
                const synopsis = $(element).find('.synopsis .content-txt').text().trim();
                const directors = $(element).find('.meta-body-direction .dark-grey-link').map((i, el) => $(el).text().trim()).get().join(', ');
                const cast = $(element).find('.meta-body-actor .dark-grey-link').map((i, el) => $(el).text().trim()).get().join(', ');

                if (title && releaseDate) {
                    movies.push({ title, releaseDate, genre, rating, synopsis, directors, cast });
                }
            });

            if (movies.length > 0) {
                let movieDetails = '🎬 **Novos Filmes em Cartaz** 🎬\n\n';
                movies.forEach((movie, index) => {
                    movieDetails += `🍿 **${index + 1}. Título:** ${movie.title}\n`;
                    movieDetails += `📅 **Data de Lançamento:** ${movie.releaseDate}\n`;
                    movieDetails += `🎭 **Gênero:** ${movie.genre}\n`;
                    movieDetails += `⭐ **Avaliação:** ${movie.rating}\n`;
                    movieDetails += `📝 **Sinopse:** ${movie.synopsis}\n`;
                    movieDetails += `🎬 **Direção:** ${movie.directors}\n`;
                    movieDetails += `🎭 **Elenco:** ${movie.cast}\n\n`;
                });

                reply(movieDetails);
            } else {
                reply('❌ Não foram encontrados novos filmes.');
            }
        })
        .catch(error => {
            console.error('Erro ao buscar os novos filmes:', error);
            reply('❌ Desculpe, ocorreu um erro ao buscar os novos filmes.');
        });

    break;
}

  

  

  

  

  

  

  

  

  
  
  
  
  
  
  
  
  
  
  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

case 'google': case 'googlesrc': 
if(!q) return reply(`Você esqueceu de colocar o que você deseja pesquisar após o comando.`);
try {
reply(`❤️ *Buscando por ${q} Aguarde...* ❤️`)
data = await fetchJson(`${zerosite}/api/search/google?query=${q}&apikey=${API_KEY_ZEROTWO}`);
await sandro.sendMessage(from, {text: data.resultado.map(v =>`★ Título: *${v.title}*\n★ Descrição: *${v.snippet}*\n★ Link: *${v.link}*`).join('\n–\n'), contextInfo: {externalAdReply: {title: data.resultado[0].title, body: data.resultado[0].snippet, mediaType: 2, sourceUrl: data.resultado[0].link}}}, {quoted: info});
} catch(error) {
return reply(mess.error())
}
break

case 'screenshotweb': case 'printsite': 
reply('Aguarde um pouco, entrando no site solicitado...')
if(!q) return reply(`Cadê o link do site o qual você deseja visualizar?`)
try {
img = await getBuffer(`https://yurimodz-apis.xyz/api/ssweb?link=${q}&apikey=${SANDRO_MD_BOT}`)
sandro.sendMessage(from, {image: img, caption: `• *Site:* ${q}`}, {quoted: info})
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('❌️️ Erro ao entrar no site desejado. Tente novamente mais tarde!')
}
}
break

case 'only1': //by Natsumi
if(!isNsfw) return reply('🔞 Este tipo de comando só pode ser utilizado com o modonsfw ativo, fale com um administrador ou se voce for um apenas digite: .modonsfw 1.')
reply(`[🧸]Enviado neste grupo`)
only1 = `
Luiz russo (mans茫o maromba)
> https://t.me/+8cJ7yGnq5fI2YjYx
`
sandro.sendMessage(from, {text: only1}, {quoted: info})
break

case 'only2': //by Natsumi
if(!isNsfw) return reply('🔞 Este tipo de comando só pode ser utilizado com o modonsfw ativo, fale com um administrador ou se voce for um apenas digite: .modonsfw 1.')
reply(`[🧸]Enviado neste grupo`)
only2 = `
Luiza blue 
> https://t.me/+JaX8wY_45843ZTBh
`
sandro.sendMessage(from, {text: only2}, {quoted: info})
break

case 'only3': //by Natsumi
if(!isNsfw) return reply('🔞 Este tipo de comando só pode ser utilizado com o modonsfw ativo, fale com um administrador ou se voce for um apenas digite: .modonsfw 1.')
reply(`[🧸]Enviado neste grupo`)
only3 = `
Isadora vale 
> https://t.me/+smb4i0bxRl41ZjRh
`
sandro.sendMessage(from, {text: only3}, {quoted: info})
break

case 'only4': //by Natsumi
if(!isNsfw) return reply('🔞 Este tipo de comando só pode ser utilizado com o modonsfw ativo, fale com um administrador ou se voce for um apenas digite: .modonsfw 1.')
reply(`[🧸]Enviado neste grupo`)
only4 = `
Ingrid bianchi
> https://t.me/+RJtf2TqTQ8NjZjlh
`
sandro.sendMessage(from, {text: only4}, {quoted: info})
break

case 'only5'://by Natsumi 
if(!isNsfw) return reply('🔞 Este tipo de comando só pode ser utilizado com o modonsfw ativo, fale com um administrador ou se voce for um apenas digite: .modonsfw 1.')
reply(`[🧸]Enviado neste grupo`)
only5 = `
Lizy Donato 
> https://t.me/+gmSjm2WZnb41OGEx
`
sandro.sendMessage(from, {text: only5}, {quoted: info})
break

case 'only6': //by Natsumi
if(!isNsfw) return reply('🔞 Este tipo de comando só pode ser utilizado com o modonsfw ativo, fale com um administrador ou se voce for um apenas digite: .modonsfw 1.')
reply(`[🧸]Enviado neste grupo`)
only6 = ` 
Feh Galv茫o
> https://t.me/+naeQ1pp8ajswMjgx
`
sandro.sendMessage(from, {text: only6}, {quoted: info})
break

case 'only7': //by Natsumi
if(!isNsfw) return reply('🔞 Este tipo de comando só pode ser utilizado com o modonsfw ativo, fale com um administrador ou se voce for um apenas digite: .modonsfw 1.')
reply(`[🧸]Enviado neste grupo`)
only7 = `
Tatyzack
> https://t.me/+NvglGFhOLSY5NmZ
`
sandro.sendMessage(from, {text: only7}, {quoted: info})
break

case 'only8'://by Natsumi 
if(!isNsfw) return reply('🔞 Este tipo de comando só pode ser utilizado com o modonsfw ativo, fale com um administrador ou se voce for um apenas digite: .modonsfw 1.')
reply(`[🧸]Enviado neste grupo`)
only8 = `
Ayrla Souza 
> https://t.me/+XLziPd47MWo2N2Y
`
sandro.sendMessage(from, {text: only8}, {quoted: info})
break

case 'only9'://by Natsumi
if(!isNsfw) return reply('🔞 Este tipo de comando só pode ser utilizado com o modonsfw ativo, fale com um administrador ou se voce for um apenas digite: .modonsfw 1.')
reply(`[🧸]Enviado neste grupo`)
only9 = `
ALINE FARIA
> https://t.me/+j1xp_hmXrx5lZWMx
`
sandro.sendMessage(from, {text: only9}, {quoted: info})
break

case 'only10'://by Natsumi
if(!isNsfw) return reply('🔞 Este tipo de comando só pode ser utilizado com o modonsfw ativo, fale com um administrador ou se voce for um apenas digite: .modonsfw 1.')
reply(`[🧸]Enviado neste grupo`)
only10 = `
KINE CHAN 
> https://t.me/+YIVax4IQ9aFlMDgx
`
sandro.sendMessage(from, {text: only10}, {quoted: info})
break

case 'only11': //by Natsumi
if(!isNsfw) return reply('🔞 Este tipo de comando só pode ser utilizado com o modonsfw ativo, fale com um administrador ou se voce for um apenas digite: .modonsfw 1.')
reply(`[🧸]Enviado neste grupo`)
only11 = `
DJ NATHI
> https://t.me/+6Z5vuVApT-1lYjEx
`
sandro.sendMessage(from, {text: only11}, {quoted: info})
break

case 'only12': //by Natsumi
if(!isNsfw) return reply('🔞 Este tipo de comando só pode ser utilizado com o modonsfw ativo, fale com um administrador ou se voce for um apenas digite: .modonsfw 1.')
reply(`[🧸]Enviando neste grupo`)
only12 = `
BELE KAFFER
> https://t.me/+70DMw3iTzb0yMzEx
`
sandro.sendMessage(from, {text: only12}, {quoted: info})
break

 


 


case 'noticias': case 'getnoticias':
try {
if (!q) return reply(`🧙‍♀Informe um tema para realizar a pesquisa de suas notícias!`)
theNews = await axios.get(`https://newsapi.org/v2/everything?q=${encodeURIComponent(q)}&sortBy=publishedAt&language=pt&apiKey=${getLegacyApiKey("NEWSAPI")}`);
d = await pickRandom(theNews.data.articles)

reply(`> *${d.title}* - ${d.author} [${d.source.name}]\n–\n★ Descrição: *${d.description}*\n★ Postagem: *${d.publishedAt.split('T').join(' - ').split('Z')[0]}*\n★ URL: *${d.url}*`)
} catch (error) {
return reply(mess.error())
}
break
           




case 'pinterest2': {
  if (!args.length) {
    await sandro.sendMessage(from, { text: 'Digite o nome para pesquisar. Ex: /pinterest2 anime' }, { quoted: m });
    return;
  }

  const termo = encodeURIComponent(args.join(" "));
  const url = `${zerosite}/api/pinterest2?text=${termo}&apikey=${API_KEY_ZEROTWO}`;

  try {
    const response = await fetch(url);
    const res = await response.json();

    if (!res.status || !res.resultado || res.resultado.length === 0) {
      await sandro.sendMessage(from, { text: 'Nenhuma imagem encontrada no Pinterest.' }, { quoted: info });
      return;
    }

    const random = res.resultado[Math.floor(Math.random() * res.resultado.length)];

    await sandro.sendMessage(from, {
      image: { url: random.image },
      caption: `📌 *Pinterest*\n\n*Autor:* ${random.fullname}\n*Seguidores:* ${random.followers}\n*Descrição:* ${random.caption || 'Sem legenda'}\n🔗 *Fonte:* ${random.source}`
    }, { quoted: info });

  } catch (e) {
    console.error('Erro no pinterest2:', e);
    await sandro.sendMessage(from, { text: 'Erro ao buscar imagem do Pinterest.' }, { quoted: info });
  }

  break;
}

/*
case 'pinterest':
try {
if(!q.trim()) return reply(`Exemplo: ${prefix+command} naruto`)
ABC = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/pinterest?nome=${q}&apikey=${API_SANDRO_MD}`);
sandro.sendMessage(from, {image: {url: ABC[Math.floor(Math.random() * ABC.length)]}}).catch(() => {
return reply("Erro..");
})
} catch (e) {
return reply("Erro..");
}
break;
*/

case 'akinator':
if(!isGroup) return reply(enviar.msg.grupo)
if(!JSON.stringify(akinator).includes(from) && akinator.length > 0 && Number(akinator[0].dia) === Number(moment.tz('America/Sao_Paulo').format('DD'))) return reply("Volte mais tarde...")
if(!JSON.stringify(akinator).includes(from) && akinator.length > 0 && Number(akinator[0].dia) !== Number(moment.tz('America/Sao_Paulo').format('DD'))) {
jogo.now = true
akinator.splice(0, 1)
fs.writeFileSync("./database/grupos/games/akinator.json", JSON.stringify(akinator, null, 2))
}
if(!JSON.stringify(akinator).includes(from)) {
reply(`Atenção ${pushname}, irei iniciar o jogo do akinator, _siga as instruções abaixo:_\n• Responda os questionamentos com: _"Sim", "Não", "Não sei", "Provavelmente sim" ou "Provavelmente não"_...\n• ${II}Observação:${II} Não use as aspas, utilize sem as aspas por favor.`)
dateAKI = moment.tz('America/Sao_Paulo').format('DD')
var region = 'pt'
var childMode = false;
var proxy = undefined;
let startAki = async () => {
aki = new Aki({region, childMode, proxy});
await aki.start()
}
await startAki()
jogo.now = false
jogo.jogador = sender
akinator.push({id: from, jogador: sender, finish: 0, dia: dateAKI})
fs.writeFileSync("./database/grupos/games/akinator.json", JSON.stringify(akinator, null, 2))
reply(`🧞‍♂️ *𝐀𝐊𝐈𝐍𝐀𝐓𝐎𝐑 𝐐𝐔𝐄𝐒𝐓𝐈𝐎𝐍𝐒:*\n• Questão: *${aki.question}*`)
} else return mention(`@${akinator[akinator.map(i => i.id).indexOf(from)].jogador.split('@')[0]} já iniciou uma partida, espere ele(a) finalizar a atual para iniciar outra...`)
break



          
          
            

  

case 'nick2': {
if (!args[0]) {
return sandro.sendMessage(info.key.remoteJid, {
text: '❌ Digite um nome.\nEx: gerarnick2 Andrei'
}, { quoted: info }); }

const fontes = [
    // 1 - Pequenas maiúsculas
    {a:'ᴀ',b:'ʙ',c:'ᴄ',d:'ᴅ',e:'ᴇ',f:'ғ',g:'ɢ',h:'ʜ',i:'ɪ',j:'ᴊ',k:'ᴋ',l:'ʟ',m:'ᴍ',n:'ɴ',o:'ᴏ',p:'ᴘ',q:'ǫ',r:'ʀ',s:'s',t:'ᴛ',u:'ᴜ',v:'ᴠ',w:'ᴡ',x:'x',y:'ʏ',z:'ᴢ'},
    // 2 - Círculos vazados
    {a:'ⓐ',b:'ⓑ',c:'ⓒ',d:'ⓓ',e:'ⓔ',f:'ⓕ',g:'ⓖ',h:'ⓗ',i:'ⓘ',j:'ⓙ',k:'ⓚ',l:'ⓛ',m:'ⓜ',n:'ⓝ',o:'ⓞ',p:'ⓟ',q:'ⓠ',r:'ⓡ',s:'ⓢ',t:'ⓣ',u:'ⓤ',v:'ⓥ',w:'ⓦ',x:'ⓧ',y:'ⓨ',z:'ⓩ'},
    // 3 - Círculos preenchidos
    {a:'🄰',b:'🄱',c:'🄲',d:'🄳',e:'🄴',f:'🄵',g:'🄶',h:'🄷',i:'🄸',j:'🄹',k:'🄺',l:'🄻',m:'🄼',n:'🄽',o:'🄾',p:'🄿',q:'🅀',r:'🅁',s:'🅂',t:'🅃',u:'🅄',v:'🅅',w:'🅆',x:'🅇',y:'🅈',z:'🅉'},
    // 4 - Letras largas
    {a:'ａ',b:'ｂ',c:'ｃ',d:'ｄ',e:'ｅ',f:'ｆ',g:'ｇ',h:'ｈ',i:'ｉ',j:'ｊ',k:'ｋ',l:'ｌ',m:'ｍ',n:'ｎ',o:'ｏ',p:'ｐ',q:'ｑ',r:'ｒ',s:'ｓ',t:'ｔ',u:'ｕ',v:'ｖ',w:'ｗ',x:'ｘ',y:'ｙ',z:'ｚ'},
    // 5 - Negrito quadrado
    {a:'𝗔',b:'𝗕',c:'𝗖',d:'𝗗',e:'𝗘',f:'𝗙',g:'𝗚',h:'𝗛',i:'𝗜',j:'𝗝',k:'𝗞',l:'𝗟',m:'𝗠',n:'𝗡',o:'𝗢',p:'𝗣',q:'𝗤',r:'𝗥',s:'𝗦',t:'𝗧',u:'𝗨',v:'𝗩',w:'𝗪',x:'𝗫',y:'𝗬',z:'𝗭'},
    // 6 - Cursivo estiloso
    {a:'𝓪',b:'𝓫',c:'𝓬',d:'𝓭',e:'𝓮',f:'𝓯',g:'𝓰',h:'𝓱',i:'𝓲',j:'𝓳',k:'𝓴',l:'𝓵',m:'𝓶',n:'𝓷',o:'𝓸',p:'𝓹',q:'𝓺',r:'𝓻',s:'𝓼',t:'𝓽',u:'𝓾',v:'𝓿',w:'𝔀',x:'𝔁',y:'𝔂',z:'𝔃'},
    // 7 - Fonte com serifa
    {a:'𝔸',b:'𝔹',c:'ℂ',d:'𝔻',e:'𝔼',f:'𝔽',g:'𝔾',h:'ℍ',i:'𝕀',j:'𝕁',k:'𝕂',l:'𝕃',m:'𝕄',n:'ℕ',o:'𝕆',p:'ℙ',q:'ℚ',r:'ℝ',s:'𝕊',t:'𝕋',u:'𝕌',v:'𝕍',w:'𝕎',x:'𝕏',y:'𝕐',z:'ℤ'},
    // 8 - Quadrado vazado
    {a:'🅰',b:'🅱',c:'🅲',d:'🅳',e:'🅴',f:'🅵',g:'🅶',h:'🅷',i:'🅸',j:'🅹',k:'🅺',l:'🅻',m:'🅼',n:'🅽',o:'🅾',p:'🅿',q:'🆀',r:'🆁',s:'🆂',t:'🆃',u:'🆄',v:'🆅',w:'🆆',x:'🆇',y:'🆈',z:'🆉'},
    // 9 - Letras pequenas sobrescritas
    {a:'ᵃ',b:'ᵇ',c:'ᶜ',d:'ᵈ',e:'ᵉ',f:'ᶠ',g:'ᵍ',h:'ʰ',i:'ⁱ',j:'ʲ',k:'ᵏ',l:'ˡ',m:'ᵐ',n:'ⁿ',o:'ᵒ',p:'ᵖ',q:'ᵠ',r:'ʳ',s:'ˢ',t:'ᵗ',u:'ᵘ',v:'ᵛ',w:'ʷ',x:'ˣ',y:'ʸ',z:'ᶻ'},
    // 10 - Letras pontilhadas
    {a:'𝚊',b:'𝚋',c:'𝚌',d:'𝚍',e:'𝚎',f:'𝚏',g:'𝚐',h:'𝚑',i:'𝚒',j:'𝚓',k:'𝚔',l:'𝚕',m:'𝚖',n:'𝚗',o:'𝚘',p:'𝚙',q:'𝚚',r:'𝚛',s:'𝚜',t:'𝚝',u:'𝚞',v:'𝚟',w:'𝚠',x:'𝚡',y:'𝚢',z:'𝚣'}
];

const random = arr => arr[Math.floor(Math.random() * arr.length)];
const nomeBase = args.join("").toLowerCase();
const listaNicks = [];

// Gera todas as 10 fontes sem decoração
for(let i = 0; i < fontes.length; i++){
    const fonte = fontes[i];
    const nomeFormatado = nomeBase.split('').map(l => fonte[l] || l).join('');
    listaNicks.push(nomeFormatado);
}

await sandro.sendMessage(info.key.remoteJid, {
text: listaNicks.join('\n')
}, { quoted: info });
}
break;





case 'pubg':
try {
texto = args.join(' ')
texto1 = texto.split('/')[0] || 'Indefinido'
texto2 = texto.split('/')[1] || 'Indefinido'
if(!texto.includes("/")) return reply(`Faltando a / para separar o texto1 e o texto2, exemplo: ${prefix + command} yoshino/Bot`)
reply(`ᴇɴᴠɪᴀɴᴅᴏ.. ᴄᴀꜱᴏ ᴅᴇᴍᴏʀᴇ ᴅᴇ ᴍᴀɪꜱ ɴᴀᴏ ᴄᴏɴꜱᴇɢᴜɪ ᴛᴇ ᴇɴᴠɪᴀʀ`)
data = await fetchJson(`${zerosite}/api/photooxy/pubg?texto=${texto1}&texto2=${texto2}&apikey=${API_KEY_ZEROTWO}`)
await sandro.sendMessage(from, {image: {url: data.resultado.imageUrl}, caption: `✏️ By ${NomeDoBot} 🖼️`}, {quoted: info})
} catch(error) {
return reply(mess.error())
}
break





case 'ff1':
if (args.length < 1) return reply(mess.syntaxLogos())
teksh = body.slice(7)
if (teksh.length > 10) return reply('O texto é longo, até 10 caracteres')
reply(`❤️ *Buscando por ${q} Aguarde...* ❤️`);
venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis3.jpg?text.0.text=${q}&text.0.position.gravity=north&text.0.position.y=59%25&text.0.size=89&text.0.color=000000&text.0.opacity=71&text.0.font.family=Changa%20One&text.0.font.style=italic&text.0.background.opacity=10&text.0.outline.color=ffffff&text.0.outline.width=3`)
sandro.sendMessage(from, { image: venomk }, {quoted: info })
break	

case 'game':
if (args.length < 1) return reply(mess.syntaxLogos())
tekskkyruuuu = body.slice(7)
if (tekskkyruuuu.length > 10) return reply('O texto é longo, até 10 caracteres')
reply(`❤️ *Buscando por ${q} Aguarde...* ❤️`);
venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis5.jpg?text.0.text=${q}&text.0.position.gravity=center&text.0.position.x=1%25&text.0.position.y=22%25&text.0.align=left&text.0.size=59&text.0.font.family=Permanent%20Marker&text.0.outline.color=df00ff&text.0.outline.width=2&text.0.outline.blur=18`)
sandro.sendMessage(from, { image: venomk }, { quoted: info })
break

case 'ff2':
if (args.length < 1) return reply(mess.syntaxLogos())
tekssq = body.slice(7)
if (tekssq.length > 10) return reply('O texto é longo, até 10 caracteres')
reply(`❤️ *Buscando por ${q} Aguarde...* ❤️`);
venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis6.jpg?text.0.text=${q}&text.0.position.gravity=north&text.0.position.x=1%25&text.0.position.y=50%25&text.0.size=68&text.0.color=464646&text.0.opacity=51&text.0.font.family=Sigmar%20One&text.0.background.opacity=2&text.0.outline.color=ffffff&text.0.outline.width=2&text.0.outline.opacity=61`)
sandro.sendMessage(from, { image: venomk }, { quoted: info })
break	





 

case 'ffrose':
if (args.length < 1) return reply(mess.syntaxLogos())
tekssopp = body.slice(7)
if (tekssopp.length > 10) return reply('O texto é longo, até 10 caracteres')
reply(`❤️ *Buscando por ${q} Aguarde...* ❤️`);
venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis12.jpg?text.0.text=${q}&text.0.position.gravity=north&text.0.position.y=65%25&text.0.size=61&text.0.color=ff00e6&text.0.opacity=32&text.0.font.family=Chewy&text.0.font.style=italic&text.0.outline.width=6`)
sandro.sendMessage(from, { image: venomk }, { quoted: info })
break	

case 'ffgren':
if (args.length < 1) return reply(mess.syntaxLogos())
teksheo = body.slice(7)
if (teksheo.length > 10) return reply('O texto é longo, até 10 caracteres')
reply(`❤️ *Buscando por ${q} Aguarde...* ❤️`);
venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis13.jpg?text.0.text=${q}&text.0.position.gravity=north&text.0.position.y=63%25&text.0.size=68&text.0.color=ffffff&text.0.opacity=92&text.0.font.family=Permanent%20Marker&text.0.font.weight=800&text.0.outline.color=5dff00&text.0.outline.width=13&text.0.outline.blur=21`)
sandro.sendMessage(from, { image: venomk }, { quoted: info })
break		

	

case 'wolf':
if (args.length < 1) return reply(mess.syntaxLogos())
teksbbb = body.slice(7)
if (teksbbb.length > 10) return reply('O texto é longo, até 10 caracteres')
reply(`❤️ *Buscando por ${q} Aguarde...* ❤️`);
venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis15.jpg?text.0.text=${q}&text.0.position.gravity=north&text.0.position.y=62%25&text.0.size=63&text.0.color=000000&text.0.font.family=Audiowide&text.0.font.style=italic&text.0.background.opacity=15&text.0.outline.color=ffffff&text.0.outline.width=9&text.0.outline.blur=33`)
sandro.sendMessage(from, { image: venomk }, { quoted: info })
break	

	



case 'grupos': {
reply("[❗] aguarde uns minutinho estou processado")
blue = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/grupos?q=${q}&apikey=${API_SANDRO_MD}`)
let red = "Listagem de grupos para você:\n\n"
blue.forEach(function(ab) {
red += ` - Url do Grupo: ${ab.link}\n\n - Descrição: ${ab.desc}\n\n${"-".repeat(20)}\n\n`
})
reply(red)
}
break;

case "orangejuice":
textin = args.join(" ")
if(!textin) return reply(mess.syntaxLogos())
reply(enviar.espere)
bla = await fetchJson(`https://yurimodz-apis.xyz/api/textpro/3d-orange-juice?texto=${textin}&apikey=${SANDRO_MD_BOT}`)
dllink = await getBuffer(bla.resultado)
sandro.sendMessage(from, {image: dllink}, {quoted: info}).catch(e =>{
reply("Erro ao criar sua logo! Tente novamente mais tarde.")   
})
break





case "seta":
case "grafite":
case "goldt":
case "tela":
textin = args.join(" ")
if(!textin) return reply(mess.syntaxLogos())
reply(enviar.espere)
bla = await getBuffer(`https://yurimodz-apis.xyz/api/ephoto/${command}?texto=${textin}&apikey=${SANDRO_MD_BOT}`)
sandro.sendMessage(from, {image: bla}, {quoted: info}).catch(e =>{
reply("Erro ao criar sua logo! Tente novamente mais tarde.")  
})
break



case 'pubgv': 
 
case 'anonovo': 
case 'trigrev':
textin = args.join(" ")
if(!textin) return reply(mess.syntaxLogos())
reply(enviar.espere)
bla = await getBuffer(`https://yurimodz-apis.xyz/api/ephoto/${command}?texto=${textin}&apikey=${SANDRO_MD_BOT}`)
sandro.sendMessage(from, {video: bla}, {quoted: info}).catch(e =>{
reply("Erro ao criar sua logo em vídeo! Tente novamente mais tarde.")  
})
break






case 'amazon': 

if(q.trim().length < 4) return reply(`Exemplo: ${prefix+command} fone redmi airdots 2`)
reply(enviar.espere);
try {
ABC = await fetchJson(`https://yurimodz-apis.xyz/api/amazon?nome=${q}&apikey=${SANDRO_MD_BOT}`);
RST = "🛒 *𝐏𝐄𝐒𝐐𝐔𝐈𝐒𝐀 - 𝐀𝐌𝐀𝐙𝐎𝐍 𝐒𝐓𝐎𝐑𝐄:*\n–\n"
RST += ABC.resultado.map((v, index) => `*${index+1}.* Produto: *${v.titulo}*\n• Valor do Produto: *${v.valor}*\n• Link: *${v.link}*`).join('\n–\n')
return reply(RST)
} catch(e) {
return reply(mess.error())
}
break;
/*
case 'brasileirao':
try {
ABC = await fetchJson(`https://yurimodz-apis.xyz/api/brasileirao?apikey=${SANDRO_MD_BOT}`);
RST = "❤️️📊 *Tabela Brasileirão:*\n–\n"
RST += ABC.resultado.map((v, index) => `${index+1}°) Time: *${v.equipe}*\n• Pontos alcançados pelo time: *${v.pontos}*\n• Jogos jogados pelo time: *${v.jogosJogados}*`).join("\n–\n")
return reply(RST)
} catch(e) {
return reply(mess.error())
}
break;
*/




case 'playstore': {
try {
  if (!q) return reply(`Digite o nome do app!\nEx: ${prefix}playstore whatsapp`)

  reply(`🔎 Buscando na Play Store: *${q}*...`)

  let res = await fetchJson(`${zerosite}/api/playstore?nome=${encodeURIComponent(q)}&apikey=${API_KEY_ZEROTWO}`)

  if (!res || !res.pesquisa || !res.pesquisa.resultado || res.pesquisa.resultado.length === 0) {
    return reply("❌ Nenhum app encontrado!")
  }

  let resultados = res.pesquisa.resultado.slice(0, 5) // pega só os 5 primeiros

  for (let app of resultados) {

    let texto = `📱 *${app.nome}*\n`
    texto += `⭐ Avaliação: ${app.estrelas}\n`
    texto += `👨‍💻 Desenvolvedor: ${app.desenvolvedor}\n`
    texto += `🔗 Link: ${app.link}`

    await sandro.sendMessage(from, {
      image: { url: app.imagem },
      caption: texto
    }, { quoted: info })

  }

} catch (e) {
  console.log(e)
  reply("❌ Erro ao buscar apps na Play Store")
}
}
break





case 'rastrear':
if (!q) return reply(mess.syntaxTrackParcels(prefix))
if (q.length < 13 || q.length > 13) return reply(mess.invalidCodeRastrear())
data = await fetchJson(`https://yurimodz-apis.xyz/api/rastreio?code=${q}&apikey=${SANDRO_MD_BOT}`)
sandro.sendMessage(from, {text: mess.rastrearEncomenda(data, q)}, {quoted:info}).catch(e => {
return reply(mess.error())
})
break

case 'e-sportnews': 
 
case 'gamenews':
if(!q) return reply(mess.syntaxNewsGame(prefix))
if (args[0] === '-cod') {
try {
ABC = await fetchJson(`https://yurimodz-apis.xyz/api/e-sports_noticias?query=cod&apikey=${SANDRO_MD_BOT}`);
RST = ""
RST += `${ABC.resultado.map(v => `*${v.titulo}*\n• ${v.trechoManchete}`).join('\n–\n')}`
sandro.sendMessage(from,{image: {url: ABC.resultado[0].linkImagem}, caption: RST}, {quoted:info})
} catch(e) {
return reply(mess.error())
}
} else if (args[0] === '-csgo') {
try {
ABC = await fetchJson(`https://yurimodz-apis.xyz/api/e-sports_noticias?query=csgo&apikey=${SANDRO_MD_BOT}`);
RST = ""
RST += `${ABC.resultado.map(v => `*${v.titulo}*\n• ${v.trechoManchete}`).join('\n–\n')}`
sandro.sendMessage(from,{image: {url: ABC.resultado[0].linkImagem}, caption: RST}, {quoted:info})
} catch(e) {
return reply(mess.error())
}
} else if (args[0] === '-fifa') {
try {
ABC = await fetchJson(`https://yurimodz-apis.xyz/api/e-sports_noticias?query=fifa&apikey=${SANDRO_MD_BOT}`);
RST = ""
RST += `${ABC.resultado.map(v => `*${v.titulo}*\n• ${v.trechoManchete}`).join('\n–\n')}`
sandro.sendMessage(from,{image: {url: ABC.resultado[0].linkImagem}, caption: RST}, {quoted:info})
} catch(e) {
return reply(mess.error())
}
} else if (args[0] === '-fortnite') {
try {
ABC = await fetchJson(`https://yurimodz-apis.xyz/api/e-sports_noticias?query=fortnite&apikey=${SANDRO_MD_BOT}`);
RST = ""
RST += `${ABC.resultado.map(v => `*${v.titulo}*\n• ${v.trechoManchete}`).join('\n–\n')}`
sandro.sendMessage(from,{image: {url: ABC.resultado[0].linkImagem}, caption: RST}, {quoted:info})
} catch(e) {
return reply(mess.error())
}
} else if (args[0] === '-gamexp') {
try {
ABC = await fetchJson(`https://yurimodz-apis.xyz/api/e-sports_noticias?query=gamexp&apikey=${SANDRO_MD_BOT}`);
RST = ""
RST += `${ABC.resultado.map(v => `*${v.titulo}*\n• ${v.trechoManchete}`).join('\n–\n')}`
sandro.sendMessage(from,{image: {url: ABC.resultado[0].linkImagem}, caption: RST}, {quoted:info})
} catch(e) {
return reply(mess.error())
}
} else if (args[0] === '-pes') {
try {
ABC = await fetchJson(`https://yurimodz-apis.xyz/api/e-sports_noticias?query=pes&apikey=${SANDRO_MD_BOT}`);
RST = ""
RST += `${ABC.resultado.map(v => `*${v.titulo}*\n• ${v.trechoManchete}`).join('\n–\n')}`
sandro.sendMessage(from,{image: {url: ABC.resultado[0].linkImagem}, caption: RST}, {quoted:info})
} catch(e) {
return reply(mess.error())
}
} else if (args[0] === '-lol') {
try {
ABC = await fetchJson(`https://yurimodz-apis.xyz/api/e-sports_noticias?query=lol&apikey=${SANDRO_MD_BOT}`);
RST = ""
RST += `${ABC.resultado.map(v => `*${v.titulo}*\n• ${v.trechoManchete}`).join('\n–\n')}`
sandro.sendMessage(from,{image: {url: ABC.resultado[0].linkImagem}, caption: RST}, {quoted:info})
} catch(e) {
return reply(mess.error())
}
} else if (args[0] === '-pokemon') {
try {
ABC = await fetchJson(`https://yurimodz-apis.xyz/api/e-sports_noticias?query=pokemon&apikey=${SANDRO_MD_BOT}`);
RST = ""
RST += `${ABC.resultado.map(v => `*${v.titulo}*\n• ${v.trechoManchete}`).join('\n–\n')}`
sandro.sendMessage(from,{image: {url: ABC.resultado[0].linkImagem}, caption: RST}, {quoted:info})
} catch(e) {
return reply(mess.error())
}
} else if (args[0] === '-rainbow-6') {
try {
ABC = await fetchJson(`https://yurimodz-apis.xyz/api/e-sports_noticias?query=rainbow-6&apikey=${SANDRO_MD_BOT}`);
RST = ""
RST += `${ABC.resultado.map(v => `*${v.titulo}*\n• ${v.trechoManchete}`).join('\n–\n')}`
sandro.sendMessage(from,{image: {url: ABC.resultado[0].linkImagem}, caption: RST}, {quoted:info})
} catch(e) {
return reply(mess.error())
}
} else if (args[0] === '-valorant') {
try {
ABC = await fetchJson(`https://yurimodz-apis.xyz/api/e-sports_noticias?query=valorant&apikey=${SANDRO_MD_BOT}`);
RST = ""
RST += `${ABC.resultado.map(v => `*${v.titulo}*\n• ${v.trechoManchete}`).join('\n–\n')}`
sandro.sendMessage(from,{image: {url: ABC.resultado[0].linkImagem}, caption: RST}, {quoted:info})
} catch(e) {
return reply(mess.error())
}
} else if (args[0] === '-tcg') {
try {
ABC = await fetchJson(`https://yurimodz-apis.xyz/api/e-sports_noticias?query=tcg&apikey=${SANDRO_MD_BOT}`);
RST = ""
RST += `${ABC.resultado.map(v => `*${v.titulo}*\n• ${v.trechoManchete}`).join('\n–\n')}`
sandro.sendMessage(from,{image: {url: ABC.resultado[0].linkImagem}, caption: RST}, {quoted:info})
} catch(e) {
return reply(mess.error())
}
}
break



 

/*
case 'prox_jogo':
case 'proximojogo':
if (!q) return reply("Você esqueceu de colocar o nome do time, o qual você deseja saber informações sobre os próximos jogos!")
timeMap = {"São Paulo": "sao-paulo", "América-MG": "america-mg", "Atlético-MG": "atletico-mg"};
qModified = Object.keys(timeMap).reduce((acc, word) => acc.replace(new RegExp(word, "ig"), timeMap[word]), q.toLowerCase());
encModified = encodeURIComponent(qModified);
try {
setTimeout(() => {reagir(from, "❤️")}, 50)
data = await fetchJson(`http://api.baddeveloper.space:25572/api/prox_jogo?time=${encModified}`);
if(data.jogos.length == 0) return reply("Não tem nenhuma *resposta do servidor*, ou seja, _não existe nenhum jogo confirmado ainda pelo time._")
reply(`• Dia(s) do(s) jogo(s) confirmado(s) a serem jogados:\n\t• Time: *${q}*\n–\n${data.jogos.map((v, index) => `*${index+1}.* ${v.liga} › *${v.data}* | ${v.timeCasa} x ${v.timeVisitante}`).join("\n––\n")}`)
} catch(error) {
setTimeout(() => {reagir(from, "❌️")}, 50)
reply(mess.error())
}
break


case 'meutime':
if (!q) return reply('Informe o nome do time.');
try {
setTimeout(() => {reagir(from, "❤️")}, 50)
data = await fetchJson(`http://api.baddeveloper.space:25572/api/meutime?q=${q}`);
if (data.resultado.length === 0) return reply('Nenhum time encontrado.');
reply(`❤️ | 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐂̧𝐎̃𝐄𝐒 𝐓𝐈𝐌𝐄:\n–\n› Time informado: *${q}*\n› Colocação/posição atual do time: *${data.resultado[0].position}°*\n› Quantidade de Pontos no time: *${data.resultado[0].points}*\n› Quantidade de jogo(s) disputado(s) pelo time: *${data.resultado[0].gamesPlayed}*\n› Quantidade de jogo(s) empatado(s) pelo time: *${data.resultado[0].draws}*\n› Quantidade de jogo(s) de perdidos/derrota do time: *${data.resultado[0].losses}*\n—\n› Quantidade de gols sofridos pelos time(s) adversário(s): *${data.resultado[0].goalsFor}*\n› Quantidade de gols feitos: *${data.resultado[0].goalsAgainst}*\n› Quantidade total de saldo de gols feito pelo time: *${data.resultado[0].goalDifference}*\n—\n› Aproveitamento (%): *${data.resultado[0].approval}%*`);
} catch(error) {
setTimeout(() => {reagir(from, "❌️")}, 50)
reply(mess.error());
}
break;
*/

        //=======(FIM-EFEITOS-MARCAR)=========\\

        default:
          if (isGroup && dataGp[0]?.autobaixar) {
            // ═══ AUTOBAIXAR: Extrai link do corpo da mensagem ═══
            const _bodyTxt = budy || body || "";
            const _foundLinks = linkfy.find(_bodyTxt);
            const _extractedUrl =
              _foundLinks.length > 0 ? _foundLinks[0].href : null;

            // Detecta tipo de mídia pela URL
            let _abType = false;
            if (_extractedUrl) {
              const _url = _extractedUrl.toLowerCase();
              if (_url.includes("instagram.com/") && _url.length > 30)
                _abType = "instagram";
              else if (
                (_url.includes("tiktok.com/") ||
                  _url.includes("vm.tiktok.com/")) &&
                _url.length > 20
              )
                _abType = "tiktok";
              else if (
                (_url.includes("twitter.com/") || _url.includes("x.com/")) &&
                _url.length > 20
              )
                _abType = "twitter";
              else if (
                _url.includes("facebook.com/") ||
                _url.includes("fb.watch/")
              )
                _abType = "facebook";
              else if (_url.includes("spotify.com/") && _url.length > 25)
                _abType = "spotify";
              else if (_url.includes("kwai.com/") && _url.length > 20)
                _abType = "kwai";
              else if (
                _url.includes("youtube.com/shorts/") ||
                (_url.includes("youtu.be/") && _url.length < 45)
              )
                _abType = "shorts";
            }

            // Detecta áudio/vídeo para transcrição
            const _hasAudioOrVideo =
              info?.message?.audioMessage || info?.message?.videoMessage;

            if (_abType || _hasAudioOrVideo) {
              // Transcrição de áudio/vídeo
              if (_hasAudioOrVideo && !_abType) {
                try {
                  const _isAudioAB = !!info?.message?.audioMessage;
                  const _mediaMsg = _isAudioAB
                    ? info.message.audioMessage
                    : info.message.videoMessage;
                  const _mediaType = _isAudioAB ? "audio" : "video";

                  const _bufAB = await getFileBuffer(_mediaMsg, _mediaType);

                  const _formAB = new FormData();
                  _formAB.append("file", _bufAB, {
                    filename: _isAudioAB ? "audiofile" : "videofile",
                    contentType: _mediaMsg.mimetype,
                  });

                  fetch(reqapi.transcrever(), {
                    method: "POST",
                    body: _formAB,
                  })
                    .then((r) => r.json())
                    .then((d) => {
                      if (d.texto && d.texto.trim()) {
                        sandro.sendMessage(
                          from,
                          {
                            text: `🎙️ *Transcrição:*\n\n${d.texto}`,
                            mentions: [sender],
                          },
                          { quoted: info },
                        );
                      }
                    })
                    .catch(() => { });
                } catch { }
              }

              // Download de links
              if (_abType && _extractedUrl) {
                try {
                  switch (_abType) {
                    case "spotify":
                      sandro
                        .sendMessage(from, {
                          audio: { url: reqapi.spotify_mp3(_extractedUrl) },
                          mimetype: "audio/mpeg",
                          mentions: [sender],
                        })
                        .catch(() => { });
                      break;

                    case "instagram":
                      try {
                        const _igData = await reqapi.instagram(_extractedUrl);
                        const _igType = _igData.msg[0].type;
                        const _igMime =
                          _igType === "mp4"
                            ? "video/mp4"
                            : _igType === "jpg"
                              ? "image/jpeg"
                              : _igType === "webp"
                                ? "image/webp"
                                : "video/mp4";
                        const _igMsg = _igMime.startsWith("image")
                          ? {
                            image: { url: _igData.msg[0].url },
                            mimetype: _igMime,
                            mentions: [sender],
                          }
                          : {
                            video: { url: _igData.msg[0].url },
                            mimetype: _igMime,
                            mentions: [sender],
                          };
                        sandro.sendMessage(from, _igMsg).catch(() => { });
                      } catch { }
                      break;

                    case "tiktok":
                    case "twitter":
                    case "facebook":
                    case "kwai":
                    case "shorts":
                      try {
                        const _vidUrl =
                          _abType === "tiktok"
                            ? reqapi.tiktok(_extractedUrl)
                            : _abType === "twitter"
                              ? reqapi.twitter(_extractedUrl, false)
                              : _abType === "kwai"
                                ? reqapi.kwai_mp4(_extractedUrl)
                                : _abType === "shorts"
                                  ? reqapi.play(_extractedUrl, false)
                                  : reqapi.facebook(_extractedUrl, false);
                        sandro
                          .sendMessage(from, {
                            video: { url: _vidUrl },
                            mimetype: "video/mp4",
                            mentions: [sender],
                          })
                          .catch(() => { });
                      } catch { }
                      break;
                  }
                } catch (e) {
                  console.log("[AUTOBAIXAR] Erro:", e.message || e);
                }
              }
            }
          }

          // FUNÇÕES.

          if (
            IS_sistemGold &&
            isGroup &&
            isBotGroupAdmins &&
            VR_JSON_GLOBAL &&
            !info.key.fromMe
          ) {
            async function Sys_G() {
              if (!dataGp[0]?.Chances?.some((i) => i.id === sender)) {
                !dataGp[0].hasOwnProperty("Chances")
                  ? (dataGp[0]["Chances"] = [])
                  : dataGp[0]["Chances"].push({
                    id: sender,
                    ChanceG: null,
                    ChanceAp: null,
                    ChanceR: [],
                    Vinganca: null,
                    cassino: 0,
                    quiz: [{ errou: 0, acertou: 0, numero: 0 }],
                    roletadasorte: false,
                    Cachaca: 1,
                    Escudo: [],
                  });
                setGp(dataGp);
              }

              if (!rggold.some((i) => i.grupo === from)) {
                rggold.push({
                  grupo: from,
                  usus: [
                    { id: sender, Golds: 0, data: 0, emp_G: [], emp_A: [] },
                  ],
                });
                Goldrgs(rggold);
              } else if (
                rggold.some((i) => i.grupo === from) &&
                !rggold[ID_G_GOLD]?.usus?.some((i) => i?.id === sender)
              ) {
                rggold[ID_G_GOLD].usus.push({
                  id: sender,
                  Golds: 0,
                  data: 0,
                  emp_G: [],
                  emp_A: [],
                });
                Goldrgs(rggold);
              }

              var dattofc = moment.tz("America/Sao_Paulo").format("DD/MM/YY");

              if (
                body.trim() &&
                !info.message?.reactionMessage?.text &&
                dattofc != S_Sistema.RS(sender, "data")
              ) {
                if (ID_G_GOLD < 0) return;
                var a_ = dataGp[0].Chances.find((i) => i.id === sender);
                sandro.sendMessage(from, {
                  text: `🪙 @${sender.split("@")[0]} você recebeu *+20 Golds* pela primeira msg do dia!\n\n💡 Use *${prefix}menugold* p/ ver comandos`,
                  mentions: [sender],
                });
                S_Sistema.ADD_2(sender, 20, "data", dattofc);
                Object.assign(a_, {
                  quiz: [{ errou: 0, acertou: 0, numero: 0 }],
                  ChanceG: null,
                  ChanceAp: null,
                  ChanceR: [],
                  Vinganca: null,
                  roletadasorte: false,
                  cassino: 0,
                });
                setGp(dataGp);
              }
            }
            Sys_G();
          }

          //===(CRÉDITOS : sandro CONTEÚDOS)==\\

          if (isGroup && isBotGroupAdmins && !isGroupAdmins) {
            if (
              (isAntiCtt &&
                (type === "contactMessage" ||
                  type === "contactsArrayMessage")) ||
              (Antiloc && type === "locationMessage") ||
              (isAnticatalogo && type === "productMessage")
            ) {
              if (isGroupAdmins)
                return sandro.sendMessage(
                  from,
                  {
                    text: `Por você ser ADM, não será removido! Mais tarde mandar foto da raba no pv do Bot 🤤`,
                  },
                  { quoted: info },
                );
              if (IS_DELETE) {
                setTimeout(() => {
                  sandro.sendMessage(from, {
                    delete: {
                      remoteJid: from,
                      fromMe: false,
                      id: info.key.id,
                      participant: sender,
                    },
                  });
                }, 500);
              }
              if (!JSON.stringify(groupMembers).includes(sender)) return;
              sandro.groupParticipantsUpdate(from, [sender], "remove");
              clear = `🗑${"\n".repeat(
                255,
              )}🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ* ✅`;
              sandro.sendMessage(from, {
                text: clear,
                contextInfo: { forwardingScore: 500, isForwarded: true },
              });
              sandro.sendMessage(from, {
                text: "Removido por jogar travas no grupo 🏌🏻‍♂️",
                mentions: groupAdmins,
              });
            }
          }

          if (
            isGroup &&
            isAntiFlood &&
            !SoDono &&
            !isnit &&
            isBotGroupAdmins &&
            !isGroupAdmins &&
            !isBot
          ) {
            if (isLimitec == null) {
              var limitefl = limitefll.limitefl;
            } else {
              var limitefl = isLimitec;
            }
            if (budy.length >= limitefl) {
              setTimeout(() => {
                console.log(colors.red("Deram Spam de caracteres.."));
                return sandro.sendMessage(from, {
                  text:
                    TEXTOS_GERAL?.LIMITE_CARACTERES_MSG ||
                    "🏌🏻‍♂️_𝙑𝙖𝙯𝙖 𝙙𝙖𝙦𝙪𝙞 𝘾𝙖𝙧𝙣𝙞𝙘̧𝙖!𝙇𝙚𝙧 𝙖 𝙥𝙤𝙧𝙧𝙖 𝙙𝙖𝙨 𝙍𝙚𝙜𝙧𝙖𝙨𝙦𝙪𝙖𝙣𝙙𝙤 𝙚𝙣𝙩𝙧𝙖𝙧 𝙚𝙢 𝙂𝙧𝙪𝙥𝙤𝙨_🤺",
                });
              }, 100);
              setTimeout(async () => {
                if (IS_DELETE) {
                  setTimeout(() => {
                    sandro.sendMessage(from, {
                      delete: {
                        remoteJid: from,
                        fromMe: false,
                        id: info.key.id,
                        participant: sender,
                      },
                    });
                  }, 500);
                }
                if (!JSON.stringify(groupMembers).includes(sender)) return;
                sandro.groupParticipantsUpdate(from, [sender], "remove");
              }, 1000);
            }
          }

          //INICIO DE COMANDOS SEM PREFIXO

          const EnvAudio_SMP = async (
            direcao,
            nome1,
            nome2,
            nome3,
            nome4,
            nome5,
          ) => {
            let bla = [nome1, nome2, nome3, nome4, nome5];
            for (i of bla) {
              if (!i) return;
              if (messagesC.includes(i)) {
                sandro.sendMessage(from, {
                  audio: { url: direcao },
                  mimetype: "audio/ogg; codecs=opus",
                  ptt: true,
                });
              }
            }
          };

          const EnvAudio2_SMP = async (
            direcao,
            nome1,
            nome2,
            nome3,
            nome4,
            nome5,
          ) => {
            let bla = [nome1, nome2, nome3, nome4, nome5];
            for (i of bla) {
              if (!i) return;
              if (budy2.includes(i)) {
                // Corrigido para Baileys 7.0+ - usar mimetype compatível
                sandro.sendMessage(
                  from,
                  {
                    audio: { url: direcao },
                    mimetype: "audio/ogg; codecs=opus", // Corrigido para compatibilidade Android
                    ptt: true,
                  },
                  { quoted: info },
                );
              }
            }
          };

          const EnvTXT_SMP = async (
            texto,
            nome1,
            nome2,
            nome3,
            nome4,
            nome5,
          ) => {
            let bla = [nome1, nome2, nome3, nome4, nome5];
            for (i of bla) {
              if (!i) return;
              if (messagesC.includes(i)) {
                sandro.sendMessage(from, { text: texto });
              }
            }
          };

          const EnvAudio2_GTTS = async (
            lingua,
            texto,
            txt1,
            txt2,
            txt3,
            txt4,
            txt5,
          ) => {
            let bla = [txt1, txt2, txt3, txt4, txt5];
            for (i of bla) {
              if (!i) return;
              if (budy2.includes(i)) {
                var gtt = require("./data/org/funcoes/gtts")(lingua);
                ranm = getRandom(".mp3");
                rano = getRandom(".ogg");
                gtt.save(ranm, texto, function () {
                  exec(
                    `ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`,
                    (err) => {
                      DLT_FL(ranm);
                      buffer = fs.readFileSync(rano);
                      sandro.sendMessage(
                        from,
                        {
                          audio: buffer,
                          mimetype: "audio/ogg; codecs=opus",
                          ptt: true,
                        },
                        { quoted: info },
                      );
                      DLT_FL(rano);
                    },
                  );
                });
              }
            }
          };

          if (isSimi2 && !isCmd && isGroup) {
            if (type == "conversation" || type == "extendedTextMessage") {
              var { insert, response } = require("./simi.js");
              if (info.key.fromMe) return;
              if (
                type == "extendedTextMessage" &&
                prefix.includes(
                  info.message.extendedTextMessage.contextInfo.quotedMessage
                    .conversation[0],
                )
              )
                return;
              insert(type, info);
              const sami = await response(budy);
              if (sami)
                sandro.sendMessage(from, { text: sami }, { quoted: info });
            }
          }



          EnvTXT_SMP(prefix, "prefixo");

          if (isAutorepo) {
            if (budy2 === "!") {
              blars = [
                "Errou 😝",
                "🤦🏻‍♂️ Errou de novo seu animal 🫵🏻🤣️",
                "Ta difícil ai meu parceiro 😏",
              ];
              blarnd = blars[Math.floor(Math.random() * blars.length)];
              reply(blarnd);
            }

            if (budy2 === "#") {
              blars = [
                "Mano!desiste logo você não vai acertar esta passando vergonha 😌🍃",
                "Escrever o nome de prefixo que eu te mando, bobinho 🥱",
                "Parar que esta feio pra você mano 🥹",
              ];
              blarnd = blars[Math.floor(Math.random() * blars.length)];
              reply(blarnd);
            }

            if (budy2 === "/") {
              blars = [
                "esse e meu prefixo",
                "oque quer ? / ???",
                "oque quer man colocando /",
              ];
              blarnd = blars[Math.floor(Math.random() * blars.length)];
              reply(blarnd);
            }

            if (budy2 === ".") {
              blars = [
                "Se tu mandar mais um pontinho vou te remover do grupo 😒",
                "Travou meu pocket 🤬",
                "Oushe!Está mandando pontinho aqui pra quer 🤔",
                "Parar de mandar pontinho aqui,parece besta 🤦🏻‍♂️",
              ];
              blarnd = blars[Math.floor(Math.random() * blars.length)];
              reply(blarnd);
            }

            if (budy2 === "sei") {
              blars = [
                "Tu lá sabe de nada inocente,me falar aí quantos são 2+2 🥱",
                "Parar de ser irônico 🙄",
                "Secsu 😏",
              ];
              blarnd = blars[Math.floor(Math.random() * blars.length)];
              reply(blarnd);
            }

            if (budy2 === "bem vindo") {
              blars = [
                "Não deixe que nada desse grupo te desanime. Lembre-se que até um pé na bunda te empurra pra frente. 😂",
                "A regra é clara entrou tem que pagar a coca 😌",
                "Bem vindo!Aqui não tem fofoqueiro. Só temhistoriadores da vida alheia. 🙊",
                "Falar aí pra essa pessoa que entrou,se ela não participar do grupo eu vou passar a faca 😏🔪",
              ];
              blarnd = blars[Math.floor(Math.random() * blars.length)];
              reply(blarnd);
            }

            if (budy2 === "bem vinda") {
              blars = [
                "Não deixe que nada desse grupo te desanime. Lembre-se que até um pé na bunda te empurra pra frente. 😂",
                "A regra é clara entrou tem que pagar a coca 😌",
                "Bem vindo!Aqui não tem fofoqueiro. Só temhistoriadores da vida alheia. 🙊",
                "Falar aí pra essa pessoa que entrou,se ela não participar do grupo eu vou passar a faca 😏🔪",
              ];
              blarnd = blars[Math.floor(Math.random() * blars.length)];
              reply(blarnd);
            }

            if (budy2 === "bv") {
              blars = [
                "Não deixe que nada desse grupo te desanime. Lembre-se que até um pé na bunda te empurra pra frente. 😂",
                "A regra é clara entrou tem que pagar a coca 😌",
                "Bem vindo!Aqui não tem fofoqueiro. Só temhistoriadores da vida alheia. 🙊",
                "Falar aí pra essa pessoa que entrou,se ela não participar do grupo eu vou passar a faca 😏🔪",
              ];
              blarnd = blars[Math.floor(Math.random() * blars.length)];
              reply(blarnd);
            }

            if (budy2 === "obrigado") {
              blars = [
                "Por nada! Não leve as redes sociais tão a sério, a maioria das opiniões são de pessoas que estão sentadas no vaso cagando 😂",
                "Dizem que tudo que vai, volta. Acho que meu dinheiro se perdeu no caminho, nunca mais voltou 🥹",
                "Até poderia concordar com você, mas daí seriam duas pessoas erradas. 😂",
              ];
              blarnd = blars[Math.floor(Math.random() * blars.length)];
              reply(blarnd);
            }

            if (budy2 === "obrigada") {
              blars = [
                "Por nada! Não leve as redes sociais tão a sério, a maioria das opiniões são de pessoas que estão sentadas no vaso cagando 😂",
                "Dizem que tudo que vai, volta. Acho que meu dinheiro se perdeu no caminho, nunca mais voltou 🥹",
                "Até poderia concordar com você, mas daí seriam duas pessoas erradas. 😂",
              ];
              blarnd = blars[Math.floor(Math.random() * blars.length)];
              reply(blarnd);
            }

            if (budy2 === "obg") {
              blars = [
                "Por nada! Não leve as redes sociais tão a sério, a maioria das opiniões são de pessoas que estão sentadas no vaso cagando 😂",
                "Dizem que tudo que vai, volta. Acho que meu dinheiro se perdeu no caminho, nunca mais voltou 🥹",
                "Até poderia concordar com você, mas daí seriam duas pessoas erradas. 😂",
              ];
              blarnd = blars[Math.floor(Math.random() * blars.length)];
              reply(blarnd);
            }

            if (budy2 === "serio?") {
              blars = [
                "Mas sério que o meu dono, o cabra é da igreja 😼",
                "Isso, isso, isso, isso..🫰🏻",
                "Não!Por acaso eu já mentir pra você?Não responda 🤥",
              ];
              blarnd = blars[Math.floor(Math.random() * blars.length)];
              reply(blarnd);
            }

            if (budy2 === "serio") {
              blars = [
                "Mas sério que o meu dono , o cabra é da igreja 😼",
                "Isso, isso, isso, isso..🫰🏻",
                "Não!Por acaso eu já mentir pra você?Não responda 🤥",
              ];
              blarnd = blars[Math.floor(Math.random() * blars.length)];
              reply(blarnd);
            }

            if (budy2 === "cheguei") {
              blars = [
                "Ninguém ligar 🥱",
                "Não diga 🙄",
                "Já que demorou aparecer mostrar raba 😏",
              ];
              blarnd = blars[Math.floor(Math.random() * blars.length)];
              reply(blarnd);
            }

            if (budy2 === "😒") {
              blars = [
                "Está cagando é 😏🚽",
                "Tá com fominha é 😏",
                "Tá chateadinha é bb 😏",
                "Que foi cara de cu azedo 🤔",
                "Cara feia é dor de barriga,vai cagar 😏",
              ];
              blarnd = blars[Math.floor(Math.random() * blars.length)];
              reply(blarnd);
            }

            if (budy2 === "bot") {
              blars = [
                "Deixar eu dormir sossegado!!",
                "Algum problema 🙄",
                "Se tu me chamar mais uma vez vou te banir do grupo",
                "Ou parar de encher o saco, estou tentando dormir!!!",
                "O que tu quer comigo??",
              ];
              blarnd = blars[Math.floor(Math.random() * blars.length)];
              reply(blarnd);
            }

            if (budy2 === "bot caiu") {
              blars = [
                "Tua cara que caiu, ta me vendo aqui não 🙄",
                "Meus zovos que caiu 😒",
                "Caiu a minha mão na tua cara 🥱",
                "Eu não cai simplesmente eu não quero falar com você 🥱",
                "Tuas tetas que caiu, isso tu não falar 🙄",
              ];
              blarnd = blars[Math.floor(Math.random() * blars.length)];
              reply(blarnd);
            }

            if (budy2 === "bot parou") {
              blars = [
                "Parei para fazer xixi caralho, pode não 😒",
                "Eu estava dormindo, me deixa em paz 😒️",
                "Eu não parei simplesmente eu não quero falar com você 🥱",
              ];
              blarnd = blars[Math.floor(Math.random() * blars.length)];
              reply(blarnd);
            }

            if (budy2 === "bom dia a todos") {
              blars = [
                "Chega de bom dia!Acordei e quero aplausos 🥱",
                "Bom dia!Acordei disposta e linda.Mentira,foi só linda mesmo 😏",
                "Bom dia!Só queria uma coisa:ter muito dinheiro.O resto eu comprava 🥹",
                "Não desista dos seus sonhos!Desligue o despertador e continue dormindo 😴",
                "Eu era linda, rica, sensual...E aí o despertador tocou 😭",
                "Acordei tão gata hoje, que quando fui bocejar,eu miei 🤭",
                "Não é bom dia. Bom dia seria se já passasse do meio-dia!Agora faça cilêncio por favor 🥱😴",
              ];
              blarnd = blars[Math.floor(Math.random() * blars.length)];
              reply(blarnd);
            }

            if (budy2 === "bom dia grupo") {
              blars = [
                "Chega de bom dia!Acordei e quero aplausos 🥱",
                "Bom dia!Acordei disposta e linda.Mentira,foi só linda mesmo 😏",
                "Bom dia!Só queria uma coisa:ter muito dinheiro.O resto eu comprava 🥹",
                "Não desista dos seus sonhos!Desligue o despertador e continue dormindo 😴",
                "Eu era linda, rica, sensual...E aí o despertador tocou 😭",
                "Acordei tão gata hoje, que quando fui bocejar,eu miei 🤭",
                "Não é bom dia. Bom dia seria se já passasse do meio-dia!Agora faça cilêncio por favor 🥱😴",
              ];
              blarnd = blars[Math.floor(Math.random() * blars.length)];
              reply(blarnd);
            }

            if (budy2.includes("alugar")) {
              if (info.key.fromMe) return;
              reply(
                "Se você estiver procurando um Bot incrível para animar seu grupo eu estou disponível.Vai no pv do meu dono e falar com ele.\n(https://wa.me/5581995597603) Obrigada coração, chamar lá 🙆🏻‍♀️",
              );
            }

            if (budy2.includes("bom dia,")) {
              if (info.key.fromMe) return;
              reply(
                "Eu era linda, rica, sensual...E aí o despertador tocou 😭",
              );
            }

            if (budy2.includes("bom dia.")) {
              if (info.key.fromMe) return;
              reply("Acordei tão gata hoje, que quando fui bocejar,eu miei 🤭");
            }

            if (budy2.includes("conteudo")) {
              if (info.key.fromMe) return;
              reply(
                "Pix caiu foto sumiu!Só os tolos para cair nesse golpe!Tu é umLadrãozinho e esta passando golpe de dentro do Presídio 😂",
              );
            }

            if (budy2.includes("o bot")) {
              if (info.key.fromMe) return;
              reply(
                "Não esqueça de ler as regras do grupo, lá tem todas as informações do grupo 🤹🏻‍♀️",
              );
            }

            if (
              budy2.includes("adivinha meu celular") ||
              budy2.includes("bot qual meu celular")
            ) {
              sandro.sendMessage(from, { text: adivinha }, { quoted: info });
            }

            //=========[--ANTI PALAVRÃO --]==========\\

            if (
              isGroup &&
              isPalavrao &&
              isBotGroupAdmins &&
              !SoDono &&
              !isGroupAdmins
            ) {
              if (
                dataGp[0].antipalavrao.palavras.some(
                  (i) =>
                    i &&
                    budy2.includes(
                      i
                        .toLowerCase()
                        .normalize("NFD")
                        .replace(/[̀-ͯ]/g, ""),
                    ),
                )
              ) {
                setTimeout(() => {
                  if (!JSON.stringify(groupMembers).includes(sender)) return;
                  sandro.groupParticipantsUpdate(from, [sender], "remove");
                  setTimeout(() => {
                    sandro.sendMessage(from, {
                      delete: {
                        remoteJid: from,
                        fromMe: false,
                        id: info.key.id,
                        participant: sender,
                      },
                    });
                  }, 500);
                }, 2000);
                sandro.sendMessage(from, {
                  text: `⚠️<𝗣𝗔𝗟𝗔𝗩𝗥𝗔-𝗣𝗥𝗢𝗜𝗕𝗜𝗗𝗔>⚠️\n🤾🏻𝗮𝗾𝘂𝗶 𝗻𝗮̃𝗼, 𝘃𝗮𝘇𝗮 𝗳𝗿𝘂𝘁𝗶𝗻𝗵𝗮🏌🏻‍♂️️`,
                });
              }
            }
          }
          //===============(SIMIH-1)===============\\

          if (isGroup && isSimi && budy != undefined) {
            if (type === "imageMessage") return;
            if (type === "audioMessage") return;
            if (type === "stickerMessage") return;
            if (info.key.fromMe) return;
            let muehe;
            let start = Date.now();
            do {
              muehe = await simih(budy);
              if (Date.now() - start > 10000) {
                break;
              }
            } while (
              muehe &&
              TEXTOS_GERAL.PALAVRAS_PROIBIDA_DE_O_SIMI_FALAR.some((i) =>
                muehe
                  .toLowerCase()
                  .normalize("NFD")
                  .replace(/[̀-ͯ]/g, "")
                  .includes(i),
              )
            );
            if (!muehe) return;
            reply(muehe);
          }

          //========================================\\
          hora2 = moment.tz("America/Sao_Paulo").format("HH:mm:ss");

if (isCmd) {
  reagir(from, "‼️");

  // 🕒 Hora Brasil
  const data = new Date();
  const horaBrasil = data.toLocaleTimeString('pt-BR', {
    timeZone: 'America/Sao_Paulo'
  });

  // 📦 Lê status dos botões
  let botoesAtivos = false;
  try {
    const nescessario = JSON.parse(
      fs.readFileSync('./config/nescessario.json', 'utf-8')
    );
    botoesAtivos = nescessario.buttons && nescessario.buttons.status;
  } catch (e) {
    console.log('Erro ao ler nescessario.json:', e);
  }

  const thumbnail = await getBuffer(`${fotobot}`);

  // 🔘 SE BOTÕES ATIVOS
  if (botoesAtivos) {
    await sandro.sendMessage(from, {
      text: mess.commandNotFound(horaBrasil, prefix),
      contextInfo: {
        externalAdReply: {
          title: `❤️ Bot: ${NomeDoBot}`,
          body: `❤️ Olá ${pushname}, comando não existente no sistema.`,
          thumbnail,
          mediaType: 1,
        }
      },
      buttons: [
        {
          buttonId: prefix + 'menu',
          buttonText: { displayText: '❤️MENU❤️' },
          type: 1
        }
      ],
      headerType: 1,
      mentions: [sender],
      viewOnce: true
    }, { quoted: info });

  } else {
    // ❌ BOTÕES DESATIVADOS (mensagem simples)
    await sandro.sendMessage(from, {
      text: mess.commandNotFound(horaBrasil, prefix),
      contextInfo: {
        externalAdReply: {
          title: `❤️ Bot: ${NomeDoBot}`,
          body: `❤️ Olá: ${pushname}, comando não existente no sistema.`,
          thumbnail,
          mediaType: 1,
        }
      },
      mentions: [sender]
    }, { quoted: info });
  }
}
        //========================================\\
      }
    }
  } catch (e) {
    console.log(e);
  }
};

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file);
console.log(colors.red(`Alterações salvas - '${__filename}'`));
delete require.cache[file]
require(file)
})

module.exports = startSandro;

/*｡☆✼★━━━━━━━━━━━━━━━━★✼
𝙀𝙐 𝙎𝘼𝙉𝘿𝙍𝙊 𝘽𝙊𝙏 𝙉𝘼𝙊 𝙋𝙀𝙍𝙈𝙄𝙏𝙊 𝙍𝙀𝙑𝙀𝙉𝘿𝙀𝙍 𝙊𝙐 𝙍𝙀𝙋𝘼𝙎𝙎𝘼𝙍 𝙀𝙎𝙎𝘼 𝙑𝙀𝙍𝙎𝘼𝙊
｡☆✼★━━━━━━━━━━━━━━━━★✼*/
