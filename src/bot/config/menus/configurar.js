const configbot = (prefixo) => {
  return [
    `⚙️ *CONFIGURAÇÃO • PAULOZINXZ_BOT*`,
    `👑 *Dono atual:* PAULOZINXZ`,
    `⚡ *Prefixo:* ${prefixo}`,
    "",
    "🔑 *DONO*",
    `• ${prefixo}numero-dono <número>`,
    "  Defina o número que terá acesso de dono.",
    `• Exemplo: ${prefixo}numero-dono 5581995597603`,
    "  Use somente números, com DDI.",
    "",
    "👥 *SUB-DONOS*",
    `• ${prefixo}dono2 <número>`,
    `• ${prefixo}dono3 <número>`,
    "  Sub-donos recebem acesso administrativo, sem substituir o dono principal.",
    "",
    "✏️ *PERSONALIZAÇÃO*",
    `• ${prefixo}nome-bot <nome>`,
    `• ${prefixo}nick-dono <nome>`,
    `• ${prefixo}prefixo-bot <símbolo>`,
    `• ${prefixo}fotomenu`,
    "",
    "🔧 *MÓDULOS*",
    `• ${prefixo}modoregistro`,
    `• ${prefixo}aniversario`,
    `• ${prefixo}modogold`,
    `• ${prefixo}status`,
    "",
    "💡 *Dica:* personalize nome, dono, prefixo e imagem para deixar o bot com sua identidade.",
  ].join("\n");
};

exports.configbot = configbot;
