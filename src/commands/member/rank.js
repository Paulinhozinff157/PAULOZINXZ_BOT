import { PREFIX } from "../../bot/config/index.mjs";
import { getGroupActivity } from "../../utils/database.js";
import { WarningError } from "../../errors/index.js";

export default {
  name: "rank",
  description: "Mostra o ranking de atividade do grupo.",
  commands: ["ranking", "top"],
  usage: `${PREFIX}rank`,
  handle: async ({ remoteJid, isGroup, sendReply }) => {
    if (!isGroup) throw new WarningError("Este comando só funciona em grupos.");
    const members = Object.values(getGroupActivity(remoteJid))
      .sort((a, b) => b.total - a.total)
      .slice(0, 10);

    if (!members.length) return sendReply("🏆 Ainda não há atividade suficiente para montar o ranking.");

    const medals = ["🥇", "🥈", "🥉"];
    const rows = members.map((user, i) =>
      `${medals[i] || `${i + 1}.`} *${user.nome || "Sem nome"}* — ${user.total} mensagens`,
    );

    await sendReply([
      "╭────────────────────────╮",
      "│     🏆 *RANK DO GRUPO*   │",
      "╰────────────────────────╯",
      "",
      ...rows,
      "",
      `💡 Use *${PREFIX}atividade* para ver os detalhes.`,
    ].join("\n"));
  },
};
