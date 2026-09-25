# PAULOZINXZ_BOT — otimizações aplicadas

Esta versão mantém os comandos existentes e foca em estabilidade, desempenho e menor uso desnecessário do terminal.

## Alterações principais

- Cache dos módulos de comandos: os arquivos de `src/commands` são importados uma vez e reutilizados.
- Índice rápido de comandos: a procura deixou de varrer todos os comandos a cada mensagem.
- Cache dos arquivos JSON do banco em memória.
- Escrita do banco com arquivo temporário + rename para reduzir risco de JSON corrompido.
- Cache de metadados de grupos com validade e limite de entradas.
- Remoção de listeners globais duplicados no loader, evitando vazamento de listeners e avisos de MaxListeners.
- Limite normal de listeners do processo em vez de mascarar vazamentos com 1500 listeners.
- Download de mídia usando lista de chunks, evitando `Buffer.concat()` repetitivo e custo quadrático de memória.
- Execução do ffmpeg com `spawn()` e argumentos separados, evitando shell desnecessário e problemas com nomes de arquivos.
- Redução do atraso artificial de presença de 500 ms para 150 ms para respostas mais rápidas.
- Mantidos os 49 arquivos de comandos existentes.
- Mantidos os sistemas de conexão, reconexão, banco, proteção e interface do Termux.

## Instalação no Termux

```bash
cd /storage/emulated/0/Download/PAULOZINXZ_BOT
npm install
npm start
```

Se a pasta antiga ainda estiver sendo usada, substitua o projeto antigo por esta versão antes de iniciar.
