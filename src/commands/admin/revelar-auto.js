import { PREFIX } from "../../config.js";
import { InvalidParameterError, WarningError } from "../../errors/index.js";
import {
  activateAutoRevealGroup,
  deactivateAutoRevealGroup,
  isActiveAutoRevealGroup,
} from "../../utils/database.js";
import { isFalse, isTrue } from "../../utils/index.js";

export default {
  name: "revelar-auto",
  description: "Revela automaticamente fotos e vídeos de visualização única.",
  commands: ["revelar-auto"],
  usage: `${PREFIX}revelar-auto 1/0`,
  handle: async ({ args, remoteJid, sendReply, sendSuccessReact }) => {
    if (!args.length || (!isTrue(args[0]) && !isFalse(args[0]))) {
      throw new InvalidParameterError(
        `Use ${PREFIX}revelar-auto 1 para ativar ou 0 para desativar.`,
      );
    }

    const shouldActivate = isTrue(args[0]);
    const alreadyConfigured = shouldActivate
      ? isActiveAutoRevealGroup(remoteJid)
      : !isActiveAutoRevealGroup(remoteJid);

    if (alreadyConfigured) {
      throw new WarningError(
        `O revelar automático já está ${shouldActivate ? "ativado" : "desativado"}!`,
      );
    }

    if (shouldActivate) {
      activateAutoRevealGroup(remoteJid);
    } else {
      deactivateAutoRevealGroup(remoteJid);
    }

    await sendSuccessReact();
    await sendReply(
      `Revelar automático ${shouldActivate ? "ativado" : "desativado"} com sucesso!`,
    );
  },
};
