import { PREFIX } from "../../config.js";
import { getGroupActivity } from "../../utils/database.js";
import { WarningError } from "../../errors/index.js";

export default {
  name: "atividade",
  description: "Mostra a atividade dos participantes do grupo.",
  commands: ["atividade", "atividades"],
  usage: `${PREFIX}atividade`,
  handle: async ({ remoteJid, isGroup, sendReply }) => {
    if (!isGroup) throw new WarningError("Este comando só funciona em grupos.");
    const data = getGroupActivity(remoteJid);
    const members = Object.entries(data)
      .map(([id, value]) => ({ id, ...value }))
      .sort((a, b) => b.total - a.total);

    if (!members.length) {
      return sendReply("📊 *ATIVIDADE DO GRUPO*\n\nAinda não há dados registrados.");
    }

    const lines = members.slice(0, 15).map((user, index) =>
      `${index + 1}. *${user.nome || "Sem nome"}*\n   💬 ${user.mensagens}  •  ⚡ ${user.comandos} comandos  •  🎭 ${user.figurinhas}`,
    );

    await sendReply([
      "╭────────────────────────╮",
      "│  📊 *ATIVIDADE DO GRUPO* │",
      "╰────────────────────────╯",
      "",
      ...lines,
      "",
      `_Mostrando os ${Math.min(15, members.length)} participantes mais ativos._`,
    ].join("\n"));
  },
};
