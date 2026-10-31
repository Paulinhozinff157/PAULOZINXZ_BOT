import { isActiveGroupRestriction } from "./database.js";

export const ANTI_RULES = {
  "anti-fake": /(?:número|numero|conta|perfil).{0,18}(?:fake|falso|falsa)|\+?\d{8,}/i,
  "anti-scam": /(?:golpe|scam|fraude|fraudulento|pix\s+falso|falso\s+suporte)/i,
  "anti-arquivo": /(?:\.exe|\.scr|\.bat|\.cmd|\.msi|\.apk|\.zip|\.rar|arquivo\s+(?:perigoso|malicioso))/i,
  "anti-pedido": /(?:me\s+manda|mande|envi[ae]|empresta|preciso\s+de).{0,30}(?:pix|dinheiro|r\$|reais)/i,
  "anti-fraude": /(?:fraude|fraud|comprovante\s+falso|falso\s+comprovante)/i,
  "anti-phishing": /(?:phishing|confirme\s+(?:sua|a)\s+conta|senha|login).{0,30}(?:link|site|clique)/i,
  "anti-jogo": /(?:aposta|cassino|bet|jogo\s+de\s+azar|roleta)/i,
  "anti-venda": /(?:vendo|venda|compro|compramos|oferta|promoção|promocao|produto\s+disponível)/i,
  "anti-anuncio": /(?:anúncio|anuncio|propaganda|divulga[çc][ãa]o|marketing|acesse|siga\s+me)/i,
  "anti-envia-canal": /(?:via\s+canal|postado\s+como\s+canal|newsletter)/i,
  "anti-spam-jogo": /(?:free\s*fire|bet|casino|cassino|aposte|aposta).{0,60}(?:ganhe|ganhar|bônus|bonus)/i,
  "anti-spam-cripto": /(?:bitcoin|ethereum|cripto|crypto|usdt|binance|token|memecoin)/i,
  "anti-doacao": /(?:doa[çc][ãa]o|vaquinha|ajude[m]?|contribua|arrecada[çc][ãa]o)/i,
  "anti-pedido-dados": /(?:mande|envie|informe|passe).{0,30}(?:cpf|senha|documento|rg|dados\s+pessoais)/i,
};

export const ALL_ANTI_RULES = Object.keys(ANTI_RULES);

export function messageText(webMessage) {
  const result = [];
  const walk = (value, depth = 0) => {
    if (!value || depth > 6 || typeof value !== "object") return;
    for (const [key, child] of Object.entries(value)) {
      if (typeof child === "string" && /text|caption|conversation/i.test(key)) {
        result.push(child);
      } else if (typeof child === "object") walk(child, depth + 1);
    }
  };
  walk(webMessage?.message);
  return result.join("\n");
}

export function activeAntiRule(groupId, text) {
  const allActive = isActiveGroupRestriction(groupId, "anti-tudo");
  for (const [rule, pattern] of Object.entries(ANTI_RULES)) {
    if ((allActive || isActiveGroupRestriction(groupId, rule)) && pattern.test(text)) return rule;
  }
  return null;
}
