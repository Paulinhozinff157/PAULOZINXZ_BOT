import assert from "node:assert/strict";
import fs from "node:fs";
import { copyFile, mkdir, mkdtemp, rm, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import test from "node:test";
import hideTag from "./commands/admin/hide-tag.js";
import { InvalidParameterError } from "./errors/index.js";
import { menuMessage } from "./menu.js";

const remoteJid = "12345-67890@g.us";
const mentions = ["111@s.whatsapp.net", "222@s.whatsapp.net"];
const commandsRoot = fileURLToPath(new URL("./commands", import.meta.url));

function makeProps({ fullArgs = "", quotedMessage = null } = {}) {
  const sent = [];
  const socket = {
    groupMetadata: async () => ({ participants: mentions.map((id) => ({ id })) }),
    sendMessage: async (jid, payload) => {
      sent.push({ jid, payload });
      return { key: { id: `sent-${sent.length}` } };
    },
  };
  const webMessage = {
    key: { id: "command-message", remoteJid, fromMe: false },
    message: quotedMessage
      ? { extendedTextMessage: { contextInfo: { quotedMessage } } }
      : { conversation: `/hidetag ${fullArgs}` },
  };

  return {
    props: {
      fullArgs,
      socket,
      remoteJid,
      webMessage,
      sendReact: async () => {},
    },
    sent,
  };
}

function countCommandFiles(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).reduce((count, entry) => {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) return count + countCommandFiles(fullPath);
    if (
      entry.isFile() &&
      !entry.name.startsWith("_") &&
      (entry.name.endsWith(".js") || entry.name.endsWith(".ts"))
    ) return count + 1;
    return count;
  }, 0);
}

test("hidetag sends the mention and then deletes only the command", async () => {
  const { props, sent } = makeProps({ fullArgs: "Aviso importante" });
  await hideTag.handle(props);

  assert.equal(sent.length, 2);
  assert.match(sent[0].payload.text, /Aviso importante/);
  assert.deepEqual(sent[0].payload.mentions, mentions);
  assert.deepEqual(sent[1].payload.delete, props.webMessage.key);
});

test("hidetag keeps the new message if WhatsApp refuses to delete the command", async () => {
  const { props, sent } = makeProps({ fullArgs: "Aviso importante" });
  const sendMessage = props.socket.sendMessage;
  props.socket.sendMessage = async (jid, payload) => {
    if (payload.delete) throw new Error("permissão insuficiente");
    return sendMessage(jid, payload);
  };

  const originalWarn = console.warn;
  console.warn = () => {};
  try {
    await hideTag.handle(props);
  } finally {
    console.warn = originalWarn;
  }

  assert.equal(sent.length, 1);
  assert.match(sent[0].payload.text, /Aviso importante/);
});

test("hidetag reuses text from the quoted message", async () => {
  const { props, sent } = makeProps({
    quotedMessage: { conversation: "Reunião às 18h" },
  });
  await hideTag.handle(props);

  assert.match(sent[0].payload.text, /Reunião às 18h/);
  assert.deepEqual(sent[0].payload.mentions, mentions);
  assert.deepEqual(sent[1].payload.delete, props.webMessage.key);
});

test("hidetag refuses an empty message", async () => {
  const { props } = makeProps();
  await assert.rejects(hideTag.handle(props), InvalidParameterError);
});

test("mute works on a fresh, empty database", async () => {
  const temporaryRoot = await mkdtemp(path.join(os.tmpdir(), "paulozinxz-db-"));
  try {
    const utilsDirectory = path.join(temporaryRoot, "src", "utils");
    await mkdir(utilsDirectory, { recursive: true });
    await writeFile(path.join(temporaryRoot, "package.json"), '{"type":"module"}\n');
    await writeFile(
      path.join(temporaryRoot, "src", "config.js"),
      'export const PREFIX = ".";\nexport const SPIDER_API_TOKEN = "";\n',
    );
    const databaseFile = path.join(utilsDirectory, "database.js");
    await copyFile(new URL("./utils/database.js", import.meta.url), databaseFile);

    const database = await import(pathToFileURL(databaseFile).href);
    const groupId = "test-group@g.us";
    const userId = "test-user@lid";

    assert.equal(database.checkIfMemberIsMuted(groupId, userId), false);
    database.muteMember(groupId, userId);
    assert.equal(database.checkIfMemberIsMuted(groupId, userId), true);
    database.unmuteMember(groupId, userId);
    assert.equal(database.checkIfMemberIsMuted(groupId, userId), false);
  } finally {
    await rm(temporaryRoot, { recursive: true, force: true });
  }
});

test("all command modules load and specific handlers override the legacy fallback", async () => {
  const { findCommandImport, readCommandImports } = await import("./utils/index.js");
  const modules = await readCommandImports({ force: true });
  const loadedCount = Object.values(modules).reduce((total, commands) => total + commands.length, 0);

  assert.equal(loadedCount, countCommandFiles(commandsRoot));

  const directAliases = new Map();
  const conflicts = [];
  for (const [category, commands] of Object.entries(modules)) {
    for (const command of commands) {
      if (command.name === "legacy-catalog") continue;
      for (const alias of command.commands || []) {
        const normalized = String(alias).trim().toLowerCase().replace(/[^a-z0-9]/g, "");
        if (!normalized) continue;
        const previous = directAliases.get(normalized);
        if (previous && previous.command !== command) {
          conflicts.push({ alias, first: `${previous.category}/${previous.command.name}`, next: `${category}/${command.name}` });
        } else {
          directAliases.set(normalized, { category, command });
        }
      }
    }
  }
  assert.deepEqual(conflicts, []);

  for (const [category, commands] of Object.entries(modules)) {
    for (const command of commands) {
      for (const alias of command.commands || []) {
        const resolved = await findCommandImport(alias);
        assert.ok(resolved.command, `Alias sem handler: ${category}/${command.name} -> ${alias}`);
        if (command.name !== "legacy-catalog") {
          assert.equal(resolved.command, command, `Alias apontou para outro handler: ${alias}`);
        }
      }
    }
  }

  const hidetag = await findCommandImport("hidetag");
  assert.equal(hidetag.type, "admin");
  assert.equal(hidetag.command.name, "hide-tag");

  const fallback = await findCommandImport("gamenews");
  assert.equal(fallback.command.name, "legacy-catalog");
});

test("menu uses the requested prefix and includes nested modules only", () => {
  const menu = menuMessage(remoteJid, "!!");
  assert.match(menu, /Prefixo: !!/);
  assert.match(menu, /!!alifox/);
  assert.doesNotMatch(menu, /!!legacy-catalog/);
  assert.ok(menu.length < 4096);
});

test("connection module imports without opening a WhatsApp session", async () => {
  const { connect } = await import("./connection.js");
  assert.equal(typeof connect, "function");
});
