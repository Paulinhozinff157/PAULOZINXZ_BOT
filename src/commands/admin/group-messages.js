import { PREFIX } from "../../config.js";
import { InvalidParameterError } from "../../errors/index.js";
import { setCustomGroupMessage } from "../../utils/database.js";

export default {
  name: "mensagem-saida",
  description: "Define a mensagem quando alguém sai e a mensagem de entrada.",
  commands: ["mensagem-saida", "definir-boasvindas"],
  usage: `${PREFIX}mensagem-saida sua mensagem\n${PREFIX}definir-boasvindas sua mensagem\nUse @member para mencionar a pessoa.`,
  handle: async ({ commandName, fullArgs, remoteJid, sendReply, sendSuccessReact }) => {
    if (!fullArgs.trim()) throw new InvalidParameterError("Informe o texto da mensagem. Use @member para mencionar.");
    const type = commandName === "definir-boasvindas" ? "welcome" : "exit";
    setCustomGroupMessage(remoteJid, type, fullArgs);
    await sendSuccessReact();
    await sendReply(`Mensagem de ${type === "welcome" ? "boas-vindas" : "saída"} atualizada!`);
  },
};
