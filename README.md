# 🤖 PAULOZINXZ_BOT

Bot de WhatsApp enxuto, rápido e organizado para Termux.

## 🚀 Instalação

```bash
npm install
npm start
```

## 📁 Organização

- `src/commands/owner` — comandos do proprietário
- `src/commands/admin` — comandos de administração
- `src/commands/member` — comandos para membros
- `src/texts` — textos-base e mensagens
- `docs` — documentação do layout e manutenção
- `database` — dados persistentes do bot

## 📚 Menu automático

O `/menu` lê os módulos existentes em `src/commands` e monta o layout automaticamente. Assim, novos comandos entram no menu sem precisar editar uma lista manual.

## 🎨 Visual

A interface do Termux usa ANSI, sem dependências visuais extras. O layout é mantido centralizado em `src/utils/logger.js`.

## ⚠️ Requisito

Node.js `>=22.8.0`.
