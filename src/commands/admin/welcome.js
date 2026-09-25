import { PREFIX } from "../../config.js";
import { InvalidParameterError, WarningError } from "../../errors/index.js";
import {
  activateWelcomeGroup,
  deactivateWelcomeGroup,
  isActiveWelcomeGroup,
} from "../../utils/database.js";
import { isFalse, isTrue } from "../../utils/index.js";

export default {
  name: "welcome",
  description: "Ativa ou desativa boas-vindas em texto.",
  commands: ["welcome", "bemvindo", "boasvindas", "boasvinda"],
  usage: `${PREFIX}welcome (1/0)`,
  handle: async ({ args, sendReply, sendSuccessReact, remoteJid }) => {
    if (!args.length || (!isTrue(args[0]) && !isFalse(args[0]))) {
      throw new InvalidParameterError(
        "Você precisa digitar 1 ou 0 (ligar ou desligar)!",
      );
    }

    const welcome = isTrue(args[0]);
    const isAlreadyConfigured = welcome
      ? isActiveWelcomeGroup(remoteJid)
      : !isActiveWelcomeGroup(remoteJid);

    if (isAlreadyConfigured) {
      throw new WarningError(
        `O recurso de boas-vindas já está ${welcome ? "ativado" : "desativado"}!`,
      );
    }

    if (welcome) {
      activateWelcomeGroup(remoteJid);
    } else {
      deactivateWelcomeGroup(remoteJid);
    }

    await sendSuccessReact();
    await sendReply(
      `Recurso de boas-vindas em texto ${welcome ? "ativado" : "desativado"} com sucesso!`,
    );
  },
};
