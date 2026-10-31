import { PREFIX } from "../../config.js";
import { InvalidParameterError } from "../../errors/index.js";
import { updateIsActiveGroupRestriction } from "../../utils/database.js";
import { isFalse, isTrue } from "../../utils/index.js";
import { ALL_ANTI_RULES } from "../../utils/antiPolicy.js";

export default {
  name: "anti-protecoes",
  description: "Ativa ou desativa todas as proteções anti.",
  commands: [
    "anti-fake", "anti-scam", "anti-arquivo", "anti-pedido", "anti-fraude",
    "anti-phishing", "anti-jogo", "anti-venda", "anti-anuncio", "anti-tudo",
    "anti-envia-canal", "anti-spam-jogo", "anti-spam-cripto", "anti-doacao",
    "anti-pedido-dados",
  ],
  usage: `${PREFIX}anti-nome 1/0`,
  handle: async ({ commandName, args, remoteJid, sendReply, sendSuccessReact }) => {
    if (!args.length || (!isTrue(args[0]) && !isFalse(args[0]))) {
      throw new InvalidParameterError("Use 1 para ativar ou 0 para desativar.");
    }
    const active = isTrue(args[0]);
    const isAll = commandName === "anti-tudo";
    const names = isAll ? ["anti-tudo", ...ALL_ANTI_RULES] : [commandName];
    for (const name of names) updateIsActiveGroupRestriction(remoteJid, name, active);
    await sendSuccessReact();
    await sendReply(`${isAll ? "Todas as proteções" : commandName} ${active ? "ativada" : "desativada"} com sucesso!`);
  },
};
