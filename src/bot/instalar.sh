#!/data/data/com.termux/files/usr/bin/bash
set -e

clear 2>/dev/null || true
printf '\n==============================================\n'
printf '  PAULOZINXZ_BOT - instalação no Termux\n'
printf '==============================================\n\n'

command -v pkg >/dev/null 2>&1 || {
  echo 'Erro: este instalador deve ser executado dentro do Termux.'
  exit 1
}

pkg update -y
pkg upgrade -y
pkg install -y nodejs-lts ffmpeg git wget

if [ ! -f package.json ]; then
  echo 'Erro: execute este script dentro da pasta do PAULOZINXZ_BOT.'
  exit 1
fi

npm install
chmod +x instalar.sh
printf '\nInstalação concluída. Para iniciar o bot, use:\n  npm start\n\n'
