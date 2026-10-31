const fs = require('fs-extra');
const stickerBrand = require('../config/personalizacao.json').figurinha || {};
const {
imageToWebp,
videoToWebp,
writeExifImg,
writeExifVid
} = require('./exif');
const {
getBuffer
} = require('../funcoes/functions.js');

const sendImageAsSticker = async (conn, jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0);
 let buffer;
 const stickerOptions = { packname: stickerBrand.pacote, author: stickerBrand.autor, ...options };
 if (stickerOptions.packname || stickerOptions.author) {
buffer = await writeExifImg(buff, stickerOptions);
} else {
buffer = await imageToWebp(buff);
}

await conn.sendMessage(jid, {sticker: {url: buffer}, ...options}, {quoted})
return buffer;
};



const sendVideoAsSticker = async (conn, jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0);
 let buffer;
 const stickerOptions = { packname: stickerBrand.pacote, author: stickerBrand.autor, ...options };
 if (stickerOptions.packname || stickerOptions.author) {
buffer = await writeExifVid(buff, stickerOptions);
} else {
buffer = await videoToWebp(buff);
}

await conn.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer;
}

module.exports = {
sendVideoAsSticker,
sendImageAsSticker
};