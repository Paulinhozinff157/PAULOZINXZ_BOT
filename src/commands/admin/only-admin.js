import { PREFIX } from "../../config.js";
import { InvalidParameterError, WarningError } from "../../errors/index.js";
import {
  activateOnlyAdmins,
  deactivateOnlyAdmins,
  isActiveOnlyAdmins,
} from "../../utils/database.js";
import { isFalse, isTrue } from "../../utils/index.js";
import { isBotOwner } from "../../middlewares/index.js";

export default {
  name: "only-admin",
  description: "Permite que só administradores utilizem meus comandos.",
  commands: [
    "only-admin",
    "only-adm",
    "only-administrator",
    "only-administrators",
    "only-admins",
    "so-adm",
    "so-admin",
    "so-administrador",
    "so-administradores",
    "so-admins",
  ],
  usage: `${PREFIX}only-admin 1`,
  /**
   * @param {CommandHandleProps} props
   */
  handle: async ({ args, sendReply, sendSuccessReact, remoteJid, userLid, userPhone }) => {
    if (!isBotOwner({ userLid, userPhone })) {
      throw new WarningError("Apenas o dono pode alterar o modo somente administradores.");
    }
    if (!args.length) {
      throw new InvalidParameterError(
        "Você precisa digitar 1 ou 0 (ligar ou desligar)!",
      );
    }
    const onlyAdminOn = isTrue(args[0]);
    const onlyAdminOff = isFalse(args[0]);
    if (!onlyAdminOn && !onlyAdminOff) {
      throw new InvalidParameterError(
        "Você precisa digitar 1 ou 0 (ligar ou desligar)!",
      );
    }
    const hasActive = onlyAdminOn && isActiveOnlyAdmins(remoteJid);
    const hasInactive = onlyAdminOff && !isActiveOnlyAdmins(remoteJid);
    if (hasActive || hasInactive) {
      throw new WarningError(
        `O recurso de somente admins usarem meus comandos já está ${
          onlyAdminOn ? "ativado" : "desativado"
        }!`,
      );
    }
    if (onlyAdminOn) {
      activateOnlyAdmins(remoteJid);
    } else {
      deactivateOnlyAdmins(remoteJid);
    }
    await sendSuccessReact();
    const context = onlyAdminOn ? "ativado" : "desativado";
    await sendReply(
      `Recurso de somente admins usarem meus comandos ${context} com sucesso!`,
    );
  },
};
