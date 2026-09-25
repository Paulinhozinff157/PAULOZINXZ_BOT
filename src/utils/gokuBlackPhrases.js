/**
 * Estilo opcional do bot.
 * Somente o comando nuke recebe uma frase especial; os demais comandos
 * devolvem apenas a mensagem original do próprio comando.
 */
const NUKE_PHRASES = [
  "A misericórdia foi removida desta dimensão. O que restou será apagado pelo frio da justiça.",
  "Contemplem o silêncio absoluto: a sujeira desta linha do tempo acaba de ser condenada ao esquecimento.",
  "Não há negociação, fuga ou segunda chance. A purificação começou — e o vazio será a última coisa que verão.",
  "O caos pediu abrigo, mas encontrou julgamento. Esta dimensão será limpa sem remorso e sem testemunhas.",
  "A lâmina da justiça desceu. Seus nomes serão apagados como se jamais tivessem merecido existir aqui.",
  "O frio chegou antes do fim. Agora cada intruso será reduzido a uma lembrança congelada no nada.",
  "A sentença foi dada: nenhuma presença indigna permanecerá diante da minha perfeição.",
  "A paz não será negociada. Esta dimensão será silenciada até que o último vestígio do caos desapareça.",
  "Vocês confundiram tolerância com fraqueza. O resultado será uma limpeza brutal, fria e definitiva.",
  "A justiça não grita, não corre e não falha. Ela apenas chega — e deixa o vazio no lugar dos indignos.",
];

const usedNukePhrases = new Set();

function nextNukePhrase() {
  let available = NUKE_PHRASES.filter((phrase) => !usedNukePhrases.has(phrase));
  if (!available.length) {
    usedNukePhrases.clear();
    available = [...NUKE_PHRASES];
  }
  const phrase = available[Math.floor(Math.random() * available.length)];
  usedNukePhrases.add(phrase);
  return phrase;
}

export function addGokuBlackPhrase(text, commandName, isOwner = false) {
  if (text === undefined || text === null || commandName !== "nuke") return text;
  const phrase = isOwner
    ? "Senhor, a purificação foi executada conforme sua ordem."
    : nextNukePhrase();
  return `🖤 ${phrase}\n\n${text}`;
}

/** Envolve respostas sem mudar nenhum comando individual. */
export function withGokuBlackCommandStyle(params, commandName) {
  const responseMethods = [
    "sendText",
    "sendReply",
    "sendEditedText",
    "sendEditedReply",
    "sendSuccessReply",
    "sendWaitReply",
    "sendWarningReply",
    "sendErrorReply",
  ];
  const styled = { ...params };
  const isOwner = Boolean(params.isBotOwner);
  for (const method of responseMethods) {
    if (typeof params[method] !== "function") continue;
    styled[method] = (text, ...rest) =>
      params[method](addGokuBlackPhrase(text, commandName, isOwner), ...rest);
  }
  return styled;
}

export default NUKE_PHRASES;
