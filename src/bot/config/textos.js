// As frases editáveis ficam em personalizacao.json.
const personalizacao = require("./personalizacao.json");
const TEXTOS_GERAL = personalizacao.frases || {};
exports.TEXTOS_GERAL = TEXTOS_GERAL;
