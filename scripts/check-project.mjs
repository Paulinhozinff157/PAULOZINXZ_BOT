import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const files = [];

function collect(directory) {
  const directoryRelative = path.relative(root, directory);
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    if (
      entry.isDirectory() &&
      (entry.name === ".git" ||
        entry.name === "node_modules" ||
        (directoryRelative === "" && ["assets", "database"].includes(entry.name)))
    ) continue;
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) collect(fullPath);
    else if (entry.isFile()) files.push(fullPath);
  }
}

collect(root);
const failures = [];
let checkedCode = 0;
let checkedJson = 0;
const textExtensions = new Set([".js", ".mjs", ".cjs", ".json", ".md", ".yml", ".yaml"]);

for (const file of files) {
  const relative = path.relative(root, file);
  const extension = path.extname(file).toLowerCase();

  if ([".js", ".mjs", ".cjs"].includes(extension)) {
    const result = spawnSync(process.execPath, ["--check", file], {
      cwd: root,
      encoding: "utf8",
    });
    checkedCode += 1;
    if (result.status !== 0) {
      failures.push(`${relative}: ${result.stderr || result.stdout || "erro de sintaxe"}`);
    }
  }

  if (extension === ".json") {
    checkedJson += 1;
    try {
      JSON.parse(fs.readFileSync(file, "utf8"));
    } catch (error) {
      failures.push(`${relative}: JSON inválido (${error.message})`);
    }
  }

  if (textExtensions.has(extension) || file.endsWith(".env.example")) {
    const contents = fs.readFileSync(file, "utf8");
    if (/^(?:<<<<<<<|=======|>>>>>>>).*$/m.test(contents)) {
      failures.push(`${relative}: marcador de conflito encontrado`);
    }
  }
}

const packageJson = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));
const lockJson = JSON.parse(fs.readFileSync(path.join(root, "package-lock.json"), "utf8"));
const manifestDependencies = packageJson.dependencies || {};
const lockDependencies = lockJson.packages?.[""]?.dependencies || {};
if (JSON.stringify(Object.entries(manifestDependencies).sort()) !== JSON.stringify(Object.entries(lockDependencies).sort())) {
  failures.push("package.json e package-lock.json têm dependências divergentes");
}

if (failures.length) {
  console.error(failures.join("\n"));
  process.exitCode = 1;
} else {
  console.log(`Sintaxe OK: ${checkedCode} arquivos; JSON OK: ${checkedJson}; sem marcadores de conflito.`);
  const tests = spawnSync(process.execPath, ["--test", "./src/test.js"], {
    cwd: root,
    stdio: "inherit",
  });
  if (tests.status !== 0) process.exitCode = tests.status || 1;
}
