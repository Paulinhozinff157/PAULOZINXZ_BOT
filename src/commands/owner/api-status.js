import { getLegacyApiKeyStatus } from "../../bot/config/legacy-api-keys.cjs";

export default {
  name: "api-status",
  description: "Mostra quais integrações de API estão configuradas, sem revelar as chaves.",
  commands: ["api-status", "status-api", "apis"],
  handle: async ({ sendReply }) => {
    const lines = getLegacyApiKeyStatus().map(({ name, configured }) =>
      `${configured ? "🟢" : "🔴"} ${name}: ${configured ? "configurada" : "não configurada"}`,
    );
    await sendReply(`🔐 *STATUS DAS APIs*\n\n${lines.join("\n")}\n\nUse *.set-api-key NOME CHAVE* para alterar uma chave.`);
  },
};
