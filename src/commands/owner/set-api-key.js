import { PREFIX } from "../../config.js";
import { InvalidParameterError } from "../../errors/index.js";
import { setLegacyApiKey } from "../../bot/config/legacy-api-keys.cjs";

export default {
  name: "set-api-key",
  description: "Configura uma chave de API usada pelos comandos legados.",
  commands: ["set-api-key", "config-api-key", "alterar-api-key"],
  usage: `${PREFIX}set-api-key NOME DA API CHAVE`,
  handle: async ({ args, sendSuccessReply }) => {
    if (args.length < 2) {
      throw new InvalidParameterError(
        `Use: ${PREFIX}set-api-key SHIZUKU sua_chave\nExemplo: ${PREFIX}set-api-key ZERO_TWO sua_chave`,
      );
    }

    const name = args.shift();
    const key = args.join(" ").trim();
    if (!key) throw new InvalidParameterError("Informe a chave da API.");

    const savedName = setLegacyApiKey(name, key);
    await sendSuccessReply(`🔐 *API configurada*\n\nServiço: *${savedName}*\nChave salva com segurança e pronta para os comandos que usam esse serviço.`);
  },
};
