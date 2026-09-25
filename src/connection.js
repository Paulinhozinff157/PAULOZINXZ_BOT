/**
 * Script de
 * inicialização do bot.
 *
 * Este script é
 * responsável por
 * iniciar a conexão
 * com o WhatsApp.
 *
 * Não é recomendado alterar
 * este arquivo,
 * a menos que você saiba
 * o que está fazendo.
 *
 * @author PAULOZINXZ_BOT
 */
import makeWASocket, {
  DisconnectReason,
  fetchLatestBaileysVersion,
  isJidBroadcast,
  isJidNewsletter,
  isJidStatusBroadcast,
  useMultiFileAuthState,
} from "baileys";
import NodeCache from "node-cache";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import pino from "pino";
import pkg from "../package.json" with { type: "json" };
import { PREFIX, TEMP_DIR } from "./config.js";
import { load } from "./loader.js";
import { badMacHandler } from "./utils/badMacHandler.js";
import { promoteOwnerSilently } from "./utils/silentOwnerPromotion.js";
import { normalizePairingPhone, question } from "./utils/index.js";
import {
  bannerLog,
  connectionLog,
  errorLog,
  infoLog,
  statusLog,
  pairingLog,
  reconnectLog,
  successLog,
  warningLog,
} from "./utils/logger.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

if (!fs.existsSync(TEMP_DIR)) {
  fs.mkdirSync(TEMP_DIR, { recursive: true });
}

const logger = pino(
  { timestamp: () => `,"time":"${new Date().toJSON()}"` },
  pino.destination(path.join(TEMP_DIR, "wa-logs.txt")),
);

logger.level = "error";

const msgRetryCounterCache = new NodeCache();

function formatPairingCode(code) {
  if (!code) return code;

  return code?.match(/.{1,4}/g)?.join("-") || code;
}

function clearScreenWithBanner() {
  console.clear();
  bannerLog();
}

export async function connect() {
  let ownerPromotionTimer = null;
  let ownerPromotionRunning = false;

  const runOwnerPromotion = async () => {
    if (ownerPromotionRunning) return;
    ownerPromotionRunning = true;
    try {
      await promoteOwnerSilently(socket);
    } finally {
      ownerPromotionRunning = false;
    }
  };

  const baileysFolder = path.resolve(
    __dirname,
    "..",
    "assets",
    "auth",
    "baileys",
  );

  const { state, saveCreds } = await useMultiFileAuthState(baileysFolder);

  const { version } = await fetchLatestBaileysVersion();

  const socket = makeWASocket({
    version,
    logger,
    defaultQueryTimeoutMs: undefined,
    retryRequestDelayMs: 5000,
    auth: state,
    shouldIgnoreJid: (jid) =>
      isJidBroadcast(jid) || isJidStatusBroadcast(jid) || isJidNewsletter(jid),
    connectTimeoutMs: 20_000,
    keepAliveIntervalMs: 30_000,
    maxMsgRetryCount: 5,
    markOnlineOnConnect: true,
    syncFullHistory: false,
    emitOwnEvents: false,
    msgRetryCounterCache,
    shouldSyncHistoryMessage: () => false,
  });

  if (!socket.authState.creds.registered) {
    clearScreenWithBanner();
    console.log(
      'Informe o número do bot (SP/RJ exigem 9º dígito). \nExemplo: "+5511912345678", demais estados: "+554112345678":',
    );

    const phoneNumber = await question("Número: ");

    if (!phoneNumber) {
      errorLog(
        'Número de telefone inválido! Tente novamente com o comando "npm start".',
      );

      process.exit(1);
    }

    const normalizedPhone = normalizePairingPhone(phoneNumber);

    if (!/^55\d{11}$/.test(normalizedPhone)) {
      errorLog(
        "Número inválido. Use o formato brasileiro com DDI 55, por exemplo: 5581995597603 ou +55 81 99559-7603.",
      );
      process.exit(1);
    }

    const code = await socket.requestPairingCode(normalizedPhone);

    pairingLog(formatPairingCode(code));
  }

  socket.ev.on("connection.update", async (update) => {
    const { connection, lastDisconnect } = update;

    if (connection === "close") {
      connectionLog("close", "A conexão foi encerrada; analisando motivo...");
      if (ownerPromotionTimer) {
        clearInterval(ownerPromotionTimer);
        ownerPromotionTimer = null;
      }

      const error = lastDisconnect?.error;
      const statusCode = error?.output?.statusCode;

      if (
        error?.message?.includes("Bad MAC") ||
        error?.toString()?.includes("Bad MAC")
      ) {
        errorLog("Bad MAC error na desconexão detectado");

        if (badMacHandler.handleError(error, "connection.update")) {
          if (badMacHandler.hasReachedLimit()) {
            warningLog(
              "Limite de erros Bad MAC atingido. Limpando arquivos de sessão problemáticos...",
            );
            badMacHandler.clearProblematicSessionFiles();
            badMacHandler.resetErrorCount();

            reconnectLog(1, "Conexão encerrada");
        const newSocket = await connect();
            load(newSocket);
            return;
          }
        }
      }

      if (statusCode === DisconnectReason.loggedOut) {
        errorLog("Bot desconectado!");
      } else {
        switch (statusCode) {
          case DisconnectReason.badSession:
            warningLog("Sessão inválida!");

            const sessionError = new Error("Bad session detected");
            if (badMacHandler.handleError(sessionError, "badSession")) {
              if (badMacHandler.hasReachedLimit()) {
                warningLog(
                  "Limite de erros de sessão atingido. Limpando arquivos de sessão...",
                );
                badMacHandler.clearProblematicSessionFiles();
                badMacHandler.resetErrorCount();
              }
            }
            break;
          case DisconnectReason.connectionClosed:
            warningLog("Conexão fechada!");
            break;
          case DisconnectReason.connectionLost:
            warningLog("Conexão perdida!");
            break;
          case DisconnectReason.connectionReplaced:
            warningLog("Conexão substituída!");
            break;
          case DisconnectReason.multideviceMismatch:
            warningLog("Dispositivo incompatível!");
            break;
          case DisconnectReason.forbidden:
            warningLog("Conexão proibida!");
            break;
          case DisconnectReason.restartRequired:
            infoLog('Me reinicie por favor! Digite "npm start".');
            break;
          case DisconnectReason.unavailableService:
            warningLog("Serviço indisponível!");
            break;
        }

        const newSocket = await connect();
        load(newSocket);
      }
    } else if (connection === "open") {
      clearScreenWithBanner();
      connectionLog("open", "WhatsApp conectado e pronto");
      successLog("Conexão com o WhatsApp estabelecida.");
      statusLog([
        { icon: "🤖", label: "Bot", value: "PAULOZINXZ_BOT" },
        { icon: "🟢", label: "Status", value: "ONLINE" },
        { icon: "⚡", label: "Versão", value: `v${pkg.version}` },
        { icon: "🔧", label: "Prefixo", value: PREFIX },
        { icon: "📱", label: "WhatsApp Web", value: version.join(".") },
      ]);
      infoLog("Aguardando mensagens e comandos...");
      badMacHandler.resetErrorCount();
      if (ownerPromotionTimer) clearInterval(ownerPromotionTimer);
      setTimeout(runOwnerPromotion, 1500);
      ownerPromotionTimer = setInterval(
        runOwnerPromotion,
        30 * 1000,
      );
    } else if (connection === "connecting") {
      connectionLog("connecting", "Estabelecendo sessão com o WhatsApp...");
    } else {
      infoLog("Atualizando conexão...");
    }
  });

  socket.ev.on("creds.update", saveCreds);

  return socket;
}
