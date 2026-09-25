# PAULOZINXZ_BOT — Layout e organização

## Estrutura visual
- Proprietário primeiro
- Administração em seguida
- Membros depois
- Acesso rápido no final

## Comandos
O menu é montado automaticamente a partir dos arquivos `.js` dentro de:
- `src/commands/owner`
- `src/commands/admin`
- `src/commands/member`

Isso evita listar comandos que não existem no projeto.

## Textos
Os textos-base ficam em `src/texts/` para facilitar futuras alterações sem espalhar mensagens pelo projeto.

## Regra de manutenção
Ao adicionar um novo comando, crie o arquivo na categoria correta. O menu reconhecerá o arquivo automaticamente na próxima inicialização.
