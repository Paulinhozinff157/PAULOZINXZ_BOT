const settings = require("../../config/personalizacao.json");

function format(template, values) {
  return String(template || "").replace(/\{(\w+)\}/g, (_, key) => String(values[key] ?? `{${key}}`));
}

function shortMenu(title, prefix, owner, bot) {
  const values = {
    bot: bot || settings.NomeDoBot || "PAULOZINXZ_BOT",
    owner: owner || settings.NickDono || "PAULOZINXZ",
    dono: owner || settings.NickDono || "PAULOZINXZ",
    prefix: prefix || settings.prefix || ".",
  };
  const help = format(settings.textos?.menuAjuda || "💡 Use {prefix}menu para ver o menu principal.", values);
  return [
    `🤖 *${values.bot}*`,
    `👑 *Dono:* ${values.owner}   ⚡ *Prefixo:* ${values.prefix}`,
    title ? `\n✦ *${title.toUpperCase()}*` : "",
    "",
    help,
    "",
    format(settings.textos?.assinatura || "🤖 *{bot}*  •  👑 *{owner}*", values),
  ].filter(Boolean).join("\n");
}

exports.menu = (prefix, pushname, NickDono, NomeDoBot) => shortMenu("", prefix, NickDono, NomeDoBot);
exports.diversos = (prefix, pushname, NickDono, NomeDoBot) => shortMenu("Utilidades", prefix, NickDono, NomeDoBot);
exports.menuff = (prefix, pushname, NickDono, NomeDoBot) => shortMenu("Free Fire", prefix, NickDono, NomeDoBot);
exports.menubasico = (prefix, pushname, NickDono, NomeDoBot) => shortMenu("Básicos", prefix, NickDono, NomeDoBot);
exports.adms = (prefix, pushname, NickDono, NomeDoBot) => shortMenu("Administração", prefix, NickDono, NomeDoBot);
exports.menudono = (prefix, pushname, NickDono, NomeDoBot) => shortMenu("Dono", prefix, NickDono, NomeDoBot);
exports.menulogos = (prefix, pushname, NickDono, NomeDoBot) => shortMenu("Figurinhas e logos", prefix, NickDono, NomeDoBot);
exports.alteradores = (prefix, pushname, NickDono, NomeDoBot) => shortMenu("Alteradores", prefix, NickDono, NomeDoBot);
exports.menupx = (prefix, pushname, NickDono, NomeDoBot) => shortMenu("Personalização", prefix, NickDono, NomeDoBot);
exports.menuprem = (prefix, pushname, NickDono, NomeDoBot) => shortMenu("Premium", prefix, NickDono, NomeDoBot);
exports.brincadeiras = (prefix, pushname, NickDono, NomeDoBot) => shortMenu("Brincadeiras", prefix, NickDono, NomeDoBot);
exports.rpgmenu = (prefix, pushname, NickDono, NomeDoBot) => shortMenu("RPG", prefix, NickDono, NomeDoBot);
exports.efeitos = (prefix, pushname, NickDono, NomeDoBot) => shortMenu("Efeitos", prefix, NickDono, NomeDoBot);
exports.animes = (prefix, pushname, NickDono, NomeDoBot) => shortMenu("Animes", prefix, NickDono, NomeDoBot);
exports.infodono = (prefix, pushname, NickDono, NomeDoBot) => shortMenu("Dono", prefix, NickDono, NomeDoBot);
exports.figurinhas = (prefix, pushname, NickDono, NomeDoBot) => shortMenu("Figurinhas", prefix, NickDono, NomeDoBot);
exports.downloads = (prefix, pushname, NickDono, NomeDoBot) => shortMenu("Downloads", prefix, NickDono, NomeDoBot);
exports.nsfw = (prefix, pushname, NickDono, NomeDoBot) => shortMenu("Conteúdo adulto", prefix, NickDono, NomeDoBot);
exports.semprefixo = (prefix, pushname, NickDono, NomeDoBot) => NomeDoBot || settings.NomeDoBot || "PAULOZINXZ_BOT";
exports.menulink = (prefix, pushname, NickDono, NomeDoBot) => shortMenu("Links", prefix, NickDono, NomeDoBot);
