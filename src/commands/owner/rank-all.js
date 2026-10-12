import { PREFIX } from "../../bot/config/index.mjs";
import { getGlobalActivity } from "../../utils/database.js";

export default {
  name: "rank-all",
  description: "Mostra o ranking geral de atividade entre grupos.",
  commands: ["rank-all", "rankgp", "rankgps"],
  usage: `${PREFIX}rank-all`,
  handle: async ({ sendReply }) => {
    const groups = getGlobalActivity();
    const totals = {};
    for (const members of Object.values(groups)) {
      for (const [id, user] of Object.entries(members || {})) {
        totals[id] ||= { ...user, total: 0 };
        totals[id].total += Number(user.total || 0);
      }
    }
    const rows = Object.values(totals).sort((a, b) => b.total - a.total).slice(0, 10);
    if (!rows.length) return sendReply("🏆 Ainda não há atividade registrada.");
    await sendReply([
      "╭────────────────────────╮",
      "│   🌐 *RANKING GERAL*     │",
      "╰────────────────────────╯",
      "",
      ...rows.map((u, i) => `${i + 1}. *${u.nome || "Sem nome"}* — ${u.total} mensagens`),
      "",
      `_Atualizado automaticamente._`,
    ].join("\n"));
  },
};
