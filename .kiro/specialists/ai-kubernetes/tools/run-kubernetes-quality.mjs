import { access, readFile } from "node:fs/promises";
import { join } from "node:path";
import { spawnSync } from "node:child_process";

const root = process.cwd();
async function exists(path) { try { await access(path); return true; } catch { return false; } }
if (process.env.AISDLC_SKIP_KUBERNETES_QUALITY === "1") { console.log("Kubernetes quality gate ignorado por AISDLC_SKIP_KUBERNETES_QUALITY=1."); process.exit(0); }
const config = JSON.parse(await readFile(join(root, ".kiro", "specialists", "ai-kubernetes", "quality.json"), "utf8"));
const steps = [];
const packagePath = join(root, "package.json");
if (await exists(packagePath)) {
  const pkg = JSON.parse(await readFile(packagePath, "utf8"));
  let runner = "npm"; let prefix = ["run"];
  if (await exists(join(root, "pnpm-lock.yaml"))) runner = "pnpm";
  else if (await exists(join(root, "yarn.lock"))) { runner = "yarn"; prefix = []; }
  else if (await exists(join(root, "bun.lock")) || await exists(join(root, "bun.lockb"))) runner = "bun";
  for (const script of config.packageScripts ?? []) if (pkg.scripts?.[script]) steps.push({ command: runner, args: [...prefix, script] });
}
for (const item of config.commands ?? []) if (item?.command && Array.isArray(item.args)) steps.push(item);
for (const step of steps) {
  console.log(`Executando quality gate Kubernetes: ${step.command} ${step.args.join(" ")}`);
  const result = spawnSync(step.command, step.args, { cwd: root, stdio: "inherit", shell: process.platform === "win32", env: { ...process.env, ...config.environment } });
  if (result.error || result.status !== 0) { console.error(result.error?.message ?? `Quality gate Kubernetes falhou com código ${result.status}.`); process.exit(result.status ?? 1); }
}
const terraformRunner = join(root, ".kiro", "specialists", "ai-terraform", "tools", "run-terraform-quality.mjs");
if (config.runTerraformCompanion && process.env.AISDLC_SKIP_TERRAFORM_COMPANION !== "1" && await exists(terraformRunner)) {
  console.log("Executando quality gate companion ai-terraform.");
  const result = spawnSync(process.execPath, [terraformRunner], { cwd: root, stdio: "inherit", env: process.env });
  if (result.error || result.status !== 0) { console.error(result.error?.message ?? `Companion Terraform falhou com código ${result.status}.`); process.exit(result.status ?? 1); }
}
if (!steps.length && !await exists(terraformRunner)) console.log("WARN: nenhum quality gate Kubernetes foi configurado no projeto.");
else console.log("Quality gate Kubernetes concluído com sucesso.");

