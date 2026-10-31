# 🤖 PAULOZINXZ_BOT

Bot de WhatsApp enxuto, rápido e organizado para Termux.

Requer Node.js `>=22.8.0`.

## 🚀 Instalação

```bash
npm install
npm run check
npm start
```

O bot usa os valores padrão de `src/config.js` e não precisa de um arquivo `.env`. Variáveis definidas diretamente no ambiente do processo continuam sendo aceitas. A autenticação do WhatsApp fica em `assets/auth/baileys`.

Configure APIs legadas pelo comando de proprietário `/set-api-key NOME sua_chave`; a chave fica em `assets/auth/legacy-api-keys.json`, fora do controle do Git.

## Hidetag

- `/hidetag texto` envia uma nova mensagem marcando os membros do grupo.
- Responda a uma mídia com `/hidetag` para reenviá-la com as marcações.
- O bot envia a nova mensagem e depois tenta apagar a mensagem que contém o comando. Para apagar mensagens de outros participantes, o bot precisa ser administrador do grupo.

## Organização

- `src/commands/owner` — comandos do proprietário
- `src/commands/admin` — comandos de administração
- `src/commands/member` — comandos para membros
- `src/texts` — textos-base e mensagens
- `docs` — documentação do layout e manutenção
- `database` — dados persistentes do bot

## 📚 Menu automático

O `/menu` lê os módulos em `src/commands`, incluindo subpastas, oculta o roteador interno e usa o prefixo configurado para o grupo. Novos comandos entram no menu sem editar uma lista manual. Rode `npm run check` para verificar sintaxe, JSON, conflitos e carregamento de todos os comandos antes de iniciar.

## 🎨 Visual

A interface do Termux usa ANSI, sem dependências visuais extras. O layout é mantido centralizado em `src/utils/logger.js`.

## ⚠️ Requisito

Node.js `>=22.8.0`.
