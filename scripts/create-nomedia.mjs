import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const marker = ".nomedia";

function markDirectories(directory) {
  fs.writeFileSync(path.join(directory, marker), "");
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    if (!entry.isDirectory() || entry.name === ".git") continue;
    markDirectories(path.join(directory, entry.name));
  }
}

markDirectories(projectRoot);
console.log("[create-nomedia] .nomedia criado/atualizado em todas as pastas.");
