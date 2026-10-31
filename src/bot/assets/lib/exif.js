"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exif = void 0;
exports.exif = function ({ exif, pack, author, emojis = ["Drip fldp 🥶"], options = {} }) {
	return new Promise(async (resolve, reject) => {
		if (exif && exif.endsWith('.exif') && this.existsSync(exif)) return this.exec(`webpmux -set exif ${exif} ${this.file} -o ${this.file}`, (err, stdout, stderr) => {
			resolve(this.file)
		})
			
		const json = {
			'sticker-pack-id': "https://github.com/SabrinaConteudos",
			...(pack ? { 'sticker-pack-name': pack } : {}),
			...(author ? { 'sticker-pack-publisher': author } : {}),
			'emojis': emojis,
			...options
		};
		const webpMux = require("node-webpmux")
		const img = new webpMux.Image()
		const exifAttr = Buffer.from([73, 73, 42, 0, 8, 0, 0, 0, 1, 0, 65, 87, 7, 0, 0, 0, 0, 0, 22, 0, 0, 0])
		const jsonBuff = Buffer.from(JSON.stringify(json), "utf-8")
		const exifBuffer = Buffer.concat([exifAttr, jsonBuff])
		exifBuffer.writeUIntLE(jsonBuff.length, 14, 4)
		await img.load(this.file)
		this.unlinkSync(this.file)
		img.exif = exifBuffer
		await img.save(this.file)
		resolve(this.file)
	})
}