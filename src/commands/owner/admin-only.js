import { PREFIX } from "../../config.js";
import { InvalidParameterError, WarningError } from "../../errors/index.js";
import {
  activateOnlyAdmins,
  deactivateOnlyAdmins,
  isActiveOnlyAdmins,
} from "../../utils/database.js";
import { isFalse, isTrue } from "../../utils/index.js";

export default {
  name: "admin-only",
  description: "Permite ao dono deixar somente administradores usando os comandos do bot.",
  commands: [
    "admin-only",
    "somente-admin",
    "somente-administradores",
    "modo-admin",
    "so-adm-dono",
  ],
  usage: `${PREFIX}admin-only 1|0`,
  /**
   * 1 liga o bloqueio para membros; 0 libera os comandos novamente.
   * @param {CommandHandleProps} props
   */
  handle: async ({ args, remoteJid, sendSuccessReact, sendReply }) => {
    if (!args.length || (!isTrue(args[0]) && !isFalse(args[0]))) {
      throw new InvalidParameterError(
        `Use ${PREFIX}admin-only 1 para bloquear membros ou ${PREFIX}admin-only 0 para liberar.`,
      );
    }

    const enable = isTrue(args[0]);
    const alreadyConfigured = enable === isActiveOnlyAdmins(remoteJid);
    if (alreadyConfigured) {
      throw new WarningError(
        `O modo somente administradores já está ${enable ? "ativado" : "desativado"}.`,
      );
    }

    if (enable) {
      activateOnlyAdmins(remoteJid);
    } else {
      deactivateOnlyAdmins(remoteJid);
    }

    await sendSuccessReact();
    await sendReply(
      enable
        ? "Modo somente administradores ativado. Membros comuns podem contemplar o menu, mas executar comando já é privilégio de quem tem cargo."
        : "Modo somente administradores desativado. Os mortais receberam autorização para voltar a brincar com os comandos.",
    );
  },
};
