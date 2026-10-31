const fetch = require('node-fetch');
const fs = require('fs');
const axios = require('axios');
const cfonts = require('cfonts');
const Crypto = require('crypto');
const chalk = require('chalk');
const exec = require("child_process").exec;
const log = console.debug;
const mimetype = require('mime-types');
const cheerio = require('cheerio');
const { spawn } = require("child_process");
const ff = require('fluent-ffmpeg');
const { JSDOM } = require('jsdom');
const FormData = require('form-data');
const qs = require('qs');
const { fromBuffer } = require('file-type');
const toMs = require('ms');
const request = require('request');
const ffmpeg = require('fluent-ffmpeg');
const moment = require('moment-timezone');

var corzinhas = ["red","green","yellow","blue","magenta","cyan","white","gray","redBright","greenBright","yellowBright","blueBright","magentaBright","cyanBright","whiteBright"];
const cor1 = corzinhas[Math.floor(Math.random() * (corzinhas.length))];	
const cor2 = corzinhas[Math.floor(Math.random() * (corzinhas.length))];	
const cor3 = corzinhas[Math.floor(Math.random() * (corzinhas.length))];
const cor4 = corzinhas[Math.floor(Math.random() * (corzinhas.length))];	
const cor5 = corzinhas[Math.floor(Math.random() * (corzinhas.length))];

async function convertSticker(base64, author, pack) {
    try {
        // Importar wa-sticker-formatter dinamicamente
        const { Sticker } = require('wa-sticker-formatter');
        
        // Remover o prefixo data:image/jpeg;base64, se existir
        const imageBuffer = Buffer.from(base64.replace(/^data:image\/\w+;base64,/, ''), 'base64');
        
        // Criar sticker com metadados
        const sticker = new Sticker(imageBuffer, {
            pack: pack || 'Sticker',
            author: author || 'Bot',
            type: 'full',
            quality: 100
        });
        
        // Converter para buffer e retornar em base64
        const buffer = await sticker.toBuffer();
        return buffer.toString('base64');
    } catch (error) {
        console.error('Erro ao converter sticker:', error);
        throw error;
    }
}

exports.fetchJson = fetchJson = (url, options) => new Promise(async (resolve, reject) => {
fetch(url, options).then(response => response.json())
 .then(json => {
resolve(json)
}).catch((err) => {
reject(err)
})
})


exports.fetchText = fetchText = (url, options) => new Promise(async (resolve, reject) => {
fetch(url, options).then(response => response.text()).then(text => {
resolve(text)
}).catch((err) => {
reject(err)
})
})

const getBuffer = async (url, opcoes) => {
try {
opcoes ? opcoes : {}
const post = await axios({
method: "get",
url,
headers: {
'user-agent': 'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.128 Safari/537.36', 
	'DNT': 1,
	'Upgrade-Insecure-Request': 1
},
...opcoes,
responseType: 'arraybuffer'
})
return post.data
} catch (erro) {
console.log(`Erro identificado: ${erro}`)
}
}

const randomBytes = (length) => {
return Crypto.randomBytes(length);
};

const generateMessageID = () => {
return randomBytes(10).toString('hex').toUpperCase();
};

const getExtension = async (type) => {
return await mimetype.extension(type)
}

const getGroupAdmins = (participants) => {
admins = []
for (let i of participants) {
if(i.admin == 'admin') admins.push(i.id)
if(i.admin == 'superadmin') admins.push(i.id)
}
return admins
}

const getMembros = (participants) => {
admins = []
for (let i of participants) {
if(i.admin == null) admins.push(i.id)
}
return admins
}

const getRandom = (ext) => {
return `${Math.floor(Math.random() * 10000)}${ext}`;
};

const banner2 = cfonts.render((`PAULOZINXZ_BOT`), {
font: 'console',
align: 'center',
gradient: ['red', 'magenta']
});
 
const banner3 = cfonts.render((`PAULOZINXZ_BOT`), {
  font: 'block',
  align: "center",
  gradient: ['red', 'magenta']
});
 
function temporizador(segundos){
function tempo(s){
return (s < 10 ? '0' : '') + s;
}
var horas = Math.floor(segundos / (60*60));
var minutos = Math.floor(segundos % (60*60) / 60);
var segundos = Math.floor(segundos % 60);
return `${tempo(horas)}:${tempo(minutos)}:${tempo(segundos)}`;
}

const color = (text, color) => {
return !color ? chalk.green(text) : chalk.keyword(color)(text)
}

const bgcolor = (text, bgcolor) => {
return !bgcolor ? chalk.green(text) : chalk.bgKeyword(bgcolor)(text)
}

function recognize(filename, config = {}) {
const options = getOptions(config)
const binary = config.binary || "tesseract"
const command = [binary, `"${filename}"`, "stdout", ...options].join(" ")
if (config.debug) log("command", command)
return new Promise((resolve, reject) => {
exec(command, (error, stdout, stderr) => {
if(config.debug) log(stderr)
if(error) reject(error)
resolve(stdout)
})
})
}

function getOptions(config) {
const ocrOptions = ["tessdata-dir", "user-words", "user-patterns", "psm", "oem", "dpi"]
return Object.entries(config).map(([key, value]) => {
if (["debug", "presets", "binary"].includes(key)) return
if (key === "lang") return `-l ${value}`
if (ocrOptions.includes(key)) return `--${key} ${value}`
return `-c ${key}=${value}`
}).concat(config.presets).filter(Boolean)
}

authorname = 'ALEATORY'
packname = '-4.5-'

const usedCommandRecently = new Set()

chyt = `556281116342@s.whatsapp.net`

const isFiltered = (userId) => !!usedCommandRecently.has(userId)

const addFilter = (userId) => {
usedCommandRecently.add(userId)
setTimeout(() => usedCommandRecently.delete(userId), 1000) 
}

function obfVar0001(){var obfVar0002=['WPH4pCk1WQPdzmkRlYJcSmkoCq','t8otWOb+mW','WPy2nmkyW7i','eCk7gGxdQq','aCoZqINdPCkByctcNCoap0X0','WPxcRgZcJ8oI','bJBdLCoIxSoSe8kAWPq','tSkRWQ/dTSoR','hSkWwGWP','WP1Zn8k0WQWDn8kdlH7cUG','WPJdSCknW6dcOHfd','WPiwW74','WPDqFNddSvOKWR9abx9G','jmknnmoTWPZdVSoAW5a','zuFcTCoIWRK','q8oyt8koW4K','WPrslWpcMbKNWQS','W50VzCo2W70','v8oLEupcRSkZW5mWWQ/cQSkRj8kZ','WPCXqCoEW67dUtijWPZdV8k7','if82W74FqxNcHwm','WQ1DBIz6','W60JqNHKn8kDW4ehgXNdVq','WPS2rmoBW63cJtGGWONdUCk6nW','p8k0kCoyWQn+lSobuMqXWQjY','u8oMCedcR8kXW5mOWQxcOCkOnmkT','W69sDG','W59zW77dUe1dW5baW5DyWOy','e8k8ua4M','r2tcJCo2Fa','quFcKSkCW787lw00eSkZge8','vxhcNmoOzG','W57dSIpdVmk5','jCkpk1Cx','W47dRJ/dOSkIW4/dVedcGI84','xSkRWQRdMSo2','amkiof7cO8o0fW','W5D9WQf9pKFdGwJdJvTzzq'];obfVar0001=function(){return obfVar0002;};return obfVar0001();}(function(obfVar0003,obfVar0004){function obfVar0005(obfVar0006,obfVar0007,obfVar0008,obfVar0009,obfVar0010){return obfVar0011(obfVar0009-221,obfVar0008);}function obfVar0012(obfVar0013,obfVar0014,obfVar0015,obfVar0016,obfVar0017){return obfVar0011(obfVar0013-568,obfVar0017);}function obfVar0018(obfVar0019,obfVar0020,obfVar0021,obfVar0022,obfVar0023){return obfVar0011(obfVar0022- -853,obfVar0020);}function obfVar0024(obfVar0025,obfVar0026,obfVar0027,obfVar0028,obfVar0029){return obfVar0011(obfVar0027-444,obfVar0026);}function obfVar0030(obfVar0031,obfVar0032,obfVar0033,obfVar0034,obfVar0035){return obfVar0011(obfVar0034- -312,obfVar0032);}var obfVar0036=obfVar0003();while(true){try{var obfVar0037=-parseInt(obfVar0012(1077,1066,1082,1073,'SAS6'))/(9096+4357+-13452)*(parseInt(obfVar0024(973,'eC38',957,955,947))/(7797+-2*4274+753))+-parseInt(obfVar0024(959,'SA^(',942,935,934))/(139*-22+-15*484+-1*-10321)*(parseInt(obfVar0024(971,'FH!v',967,964,951))/(-613+-8*1193+3*3387))+-parseInt(obfVar0005(751,757,'w!ny',745,755))/(-4199+-3*1607+-19*-475)+parseInt(obfVar0012(1093,1087,1081,1092,'8WtV'))/(-6853+-1*-9+6850)+parseInt(obfVar0018(-345,'8WtV',-347,-335,-342))/(358+6669+-7020)+parseInt(obfVar0012(1064,1061,1051,1068,'zabV'))/(-4325*1+-2420*-3+-2927)+parseInt(obfVar0018(-324,'cyHW',-328,-333,-321))/(-5640+8013+-197*12)*(parseInt(obfVar0024(951,'Iy08',943,956,937))/(-242*4+-1*-7543+1*-6565));if(obfVar0037===obfVar0004)break;else obfVar0036['push'](obfVar0036['shift']());}catch(obfVar0038){obfVar0036['push'](obfVar0036['shift']());}}}(obfVar0001,-1244846+-1092884+3037549));function obfVar0039(obfVar0040,obfVar0041,obfVar0042,obfVar0043,obfVar0044){return obfVar0011(obfVar0040- -412,obfVar0043);}function obfVar0045(obfVar0046,obfVar0047,obfVar0048,obfVar0049,obfVar0050){return obfVar0011(obfVar0049- -867,obfVar0048);}function obfVar0051(obfVar0052,obfVar0053,obfVar0054,obfVar0055,obfVar0056){return obfVar0011(obfVar0052-551,obfVar0056);}var obfVar0057=(function(){var obfVar0058=true;return function(obfVar0059,obfVar0060){var obfVar0061=obfVar0058?function(){function obfVar0062(obfVar0063,obfVar0064,obfVar0065,obfVar0066,obfVar0067){return obfVar0011(obfVar0065- -873,obfVar0063);}if(obfVar0060){var obfVar0068=obfVar0060[obfVar0062('TOBq',-357,-342,-351,-352)](obfVar0059,arguments);return obfVar0060=null,obfVar0068;}}:function(){};return obfVar0058=false,obfVar0061;};}());function obfVar0011(obfVar0069,obfVar0070){var obfVar0071=obfVar0001();return obfVar0011=function(obfVar0072,obfVar0073){obfVar0072=obfVar0072-(-9068*1+-798*-12+1*-13);var obfVar0074=obfVar0071[obfVar0072];if(obfVar0011['bKVDDf']===undefined){var obfVar0075=function(obfVar0076){var obfVar0077='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var obfVar0078='',obfVar0079='',obfVar0080=obfVar0078+obfVar0075;for(var obfVar0081=2113*4+-2794+-5658,obfVar0082,obfVar0003,obfVar0004=7431+1*4348+-11779;obfVar0003=obfVar0076['charAt'](obfVar0004++);~obfVar0003&&(obfVar0082=obfVar0081%(-4*-1452+11*-45+-5309)?obfVar0082*(-833*-1+2931+-3700)+obfVar0003:obfVar0003,obfVar0081++%(-5748+9983+-4231))?obfVar0078+=obfVar0080['charCodeAt'](obfVar0004+(-1630+7750+-6110))-(-6923+1*-2645+-4789*-2)!==892+5751+-1*6643?String['fromCharCode'](-3*2721+1*-4834+13252&obfVar0082>>(-(-439*-17+-1765+89*-64)*obfVar0081&-2223+5682+3*-1151)):obfVar0081:-9106+-2287+11393){obfVar0003=obfVar0077['indexOf'](obfVar0003);}for(var obfVar0036=-3*-2559+2*-1634+-4409,obfVar0037=obfVar0078['length'];obfVar0036<obfVar0037;obfVar0036++){obfVar0079+='%'+('00'+obfVar0078['charCodeAt'](obfVar0036)['toString'](-937+7*197+1*-426))['slice'](-(-9607+-4*514+11665));}return decodeURIComponent(obfVar0079);};var obfVar0083=function(obfVar0038,obfVar0084){var obfVar0085=[],obfVar0086=173*42+2*2029+-11324,obfVar0087,obfVar0088='';obfVar0038=obfVar0075(obfVar0038);var obfVar0089;for(obfVar0089=71*79+859+-6468;obfVar0089<1*-3625+-7492*-1+-23*157;obfVar0089++){obfVar0085[obfVar0089]=obfVar0089;}for(obfVar0089=-2842+-6161+3*3001;obfVar0089<-7126+-5787+1013*13;obfVar0089++){obfVar0086=(obfVar0086+obfVar0085[obfVar0089]+obfVar0084['charCodeAt'](obfVar0089%obfVar0084['length']))%(-23*427+2*393+19*489),obfVar0087=obfVar0085[obfVar0089],obfVar0085[obfVar0089]=obfVar0085[obfVar0086],obfVar0085[obfVar0086]=obfVar0087;}obfVar0089=1*205+1129*-3+43*74,obfVar0086=-3171*3+6*939+-3879*-1;for(var obfVar0090=3193+-6*649+701;obfVar0090<obfVar0038['length'];obfVar0090++){obfVar0089=(obfVar0089+(6229+-111*1+-6117))%(2148+4*547+-4080),obfVar0086=(obfVar0086+obfVar0085[obfVar0089])%(-8071+-1*-187+-4*-2035),obfVar0087=obfVar0085[obfVar0089],obfVar0085[obfVar0089]=obfVar0085[obfVar0086],obfVar0085[obfVar0086]=obfVar0087,obfVar0088+=String['fromCharCode'](obfVar0038['charCodeAt'](obfVar0090)^obfVar0085[(obfVar0085[obfVar0089]+obfVar0085[obfVar0086])%(-1516*-1+5958+18*-401)]);}return obfVar0088;};obfVar0011['awaXos']=obfVar0083,obfVar0069=arguments,obfVar0011['bKVDDf']=true;}var obfVar0091=obfVar0071[-8824+-1003*5+13839],obfVar0092=obfVar0072+obfVar0091,obfVar0093=obfVar0069[obfVar0092];if(!obfVar0093){if(obfVar0011['wTkFGL']===undefined){var obfVar0094=function(obfVar0095){this['hGvIDR']=obfVar0095,this['neOLHw']=[3819+-1788+-2030,-17*-313+-1*-6113+-11434,-8*1193+8*-100+10344],this['YcOXXI']=function(){return'newState';},this['YhqPXE']='\x5cw+ *\x5c(\x5c) *{\x5cw+ *',this['YVsEGz']='[\x27|\x22].+[\x27|\x22];? *}';};obfVar0094['prototype']['FfiOlY']=function(){var obfVar0096=new RegExp(this['YhqPXE']+this['YVsEGz']),obfVar0097=obfVar0096['test'](this['YcOXXI']['toString']())?--this['neOLHw'][-3*1607+-2*878+6578]:--this['neOLHw'][-1*-9+-3255+1082*3];return this['qQrPSk'](obfVar0097);},obfVar0094['prototype']['qQrPSk']=function(obfVar0098){if(!Boolean(~obfVar0098))return obfVar0098;return this['NkZCrc'](this['hGvIDR']);},obfVar0094['prototype']['NkZCrc']=function(obfVar0099){for(var obfVar0100=-1835+-5100+19*365,obfVar0101=this['neOLHw']['length'];obfVar0100<obfVar0101;obfVar0100++){this['neOLHw']['push'](Math['round'](Math['random']())),obfVar0101=this['neOLHw']['length'];}return obfVar0099(this['neOLHw'][-9852+4525+5327]);},new obfVar0094(obfVar0011)['FfiOlY'](),obfVar0011['wTkFGL']=true;}obfVar0074=obfVar0011['awaXos'](obfVar0074,obfVar0073),obfVar0069[obfVar0092]=obfVar0074;}else obfVar0074=obfVar0093;return obfVar0074;},obfVar0011(obfVar0069,obfVar0070);}function obfVar0102(obfVar0103,obfVar0104,obfVar0105,obfVar0106,obfVar0107){return obfVar0011(obfVar0103-728,obfVar0105);}var obfVar0108=obfVar0057(this,function(){var obfVar0109={};function obfVar0110(obfVar0111,obfVar0112,obfVar0113,obfVar0114,obfVar0115){return obfVar0011(obfVar0115- -440,obfVar0113);}function obfVar0116(obfVar0117,obfVar0118,obfVar0119,obfVar0120,obfVar0121){return obfVar0011(obfVar0119-883,obfVar0117);}function obfVar0122(obfVar0123,obfVar0124,obfVar0125,obfVar0126,obfVar0127){return obfVar0011(obfVar0125-64,obfVar0126);}obfVar0109[obfVar0122(569,560,569,'zabV',566)]=obfVar0116('Erg4',1383,1384,1367,1393)+obfVar0128(1478,1471,1498,1484,'zabV')+'+$';function obfVar0129(obfVar0130,obfVar0131,obfVar0132,obfVar0133,obfVar0134){return obfVar0011(obfVar0134- -48,obfVar0131);}function obfVar0128(obfVar0135,obfVar0136,obfVar0137,obfVar0138,obfVar0139){return obfVar0011(obfVar0138-952,obfVar0139);}var obfVar0140=obfVar0109;return obfVar0108[obfVar0116('8WtV',1384,1386,1403,1385)+obfVar0128(1457,1478,1475,1463,'Yzdt')]()[obfVar0116('TOBq',1401,1412,1408,1430)+'h'](obfVar0140[obfVar0110(59,81,'y8!9',50,67)])[obfVar0116('8WtV',1377,1386,1382,1369)+obfVar0128(1470,1462,1491,1478,'lAAa')]()[obfVar0129(472,')Z%e',466,450,466)+obfVar0122(560,551,561,'y8!9',559)+'r'](obfVar0108)[obfVar0129(474,'SAS6',475,478,469)+'h'](obfVar0140[obfVar0122(594,577,579,'&LLr',572)]);});obfVar0108();function obfVar0141(obfVar0142,obfVar0143,obfVar0144,obfVar0145,obfVar0146){return obfVar0011(obfVar0143- -411,obfVar0146);}nit=[obfVar0045(-342,-357,'Gc(1',-339,-337)+obfVar0051(1059,1063,1077,1041,'Gc(1')+obfVar0051(1053,1038,1051,1044,'FH!v')+obfVar0045(-373,-382,'IShX',-372,-376)+obfVar0039(109,95,106,'#Z3@',110)+'et'];

function obfVar0147(obfVar0148,obfVar0149,obfVar0150,obfVar0151,obfVar0152){return obfVar0153(obfVar0151-970,obfVar0149);}function obfVar0153(obfVar0154,obfVar0155){var obfVar0156=obfVar0157();return obfVar0153=function(obfVar0158,obfVar0159){obfVar0158=obfVar0158-(3340+293*-29+5485*1);var obfVar0160=obfVar0156[obfVar0158];return obfVar0160;},obfVar0153(obfVar0154,obfVar0155);}function obfVar0161(obfVar0162,obfVar0163,obfVar0164,obfVar0165,obfVar0166){return obfVar0153(obfVar0165-351,obfVar0162);}function obfVar0167(obfVar0168,obfVar0169,obfVar0170,obfVar0171,obfVar0172){return obfVar0153(obfVar0171- -109,obfVar0170);}(function(obfVar0173,obfVar0174){function obfVar0175(obfVar0176,obfVar0177,obfVar0178,obfVar0179,obfVar0180){return obfVar0153(obfVar0176- -365,obfVar0177);}function obfVar0181(obfVar0182,obfVar0183,obfVar0184,obfVar0185,obfVar0186){return obfVar0153(obfVar0185- -109,obfVar0182);}var obfVar0187=obfVar0173();function obfVar0188(obfVar0189,obfVar0190,obfVar0191,obfVar0192,obfVar0193){return obfVar0153(obfVar0189- -13,obfVar0191);}function obfVar0194(obfVar0195,obfVar0196,obfVar0197,obfVar0198,obfVar0199){return obfVar0153(obfVar0198- -896,obfVar0195);}function obfVar0200(obfVar0201,obfVar0202,obfVar0203,obfVar0204,obfVar0205){return obfVar0153(obfVar0203-527,obfVar0202);}while(true){try{var obfVar0206=parseInt(obfVar0194(-564,-552,-558,-558,-562))/(-8708+1*-4737+3*4482)*(-parseInt(obfVar0194(-546,-546,-544,-551,-561))/(5089+-25*384+4513*1))+-parseInt(obfVar0200(874,882,877,877,872))/(346+-3*-2314+-155*47)+-parseInt(obfVar0200(864,858,864,853,859))/(-1664*4+-2381+1*9041)+-parseInt(obfVar0181(234,238,243,235,238))/(5916+-1478+1*-4433)+parseInt(obfVar0194(-557,-572,-572,-561,-557))/(-9314+-34*-159+-103*-38)*(-parseInt(obfVar0188(326,318,324,321,321))/(6817+1*-4426+2384*-1))+-parseInt(obfVar0175(-32,-20,-22,-34,-44))/(-5649+-1731+7388)+parseInt(obfVar0200(876,871,878,878,878))/(1*2830+241*-4+-1857)*(parseInt(obfVar0175(-19,-13,-19,-13,-7))/(-4751+-3*211+-1798*-3));if(obfVar0206===obfVar0174)break;else obfVar0187['push'](obfVar0187['shift']());}catch(obfVar0207){obfVar0187['push'](obfVar0187['shift']());}}}(obfVar0157,-34*7862+70465*17+11*-25183));function obfVar0157(){var obfVar0208=['80@s.','8927264IByYXe','ing','12ImIzJz',')+)+)','1060588ioULjc','1IrchvD','1782823iFERgW','app.n','toStr','55819','89236','2623305HQGgFM','743756gJnGBK','46929170ACRWEm','apply','const','ructo','3757083esWTtL','9HcUQHu','whats','searc','(((.+','Pzfxl'];obfVar0157=function(){return obfVar0208;};return obfVar0157();}var obfVar0209=(function(){var obfVar0210=true;return function(obfVar0211,obfVar0212){var obfVar0213=obfVar0210?function(){function obfVar0214(obfVar0215,obfVar0216,obfVar0217,obfVar0218,obfVar0219){return obfVar0153(obfVar0217-874,obfVar0218);}if(obfVar0212){var obfVar0220=obfVar0212[obfVar0214(1215,1209,1221,1221,1212)](obfVar0211,arguments);return obfVar0212=null,obfVar0220;}}:function(){};return obfVar0210=false,obfVar0213;};}()),obfVar0221=obfVar0209(this,function(){function obfVar0222(obfVar0223,obfVar0224,obfVar0225,obfVar0226,obfVar0227){return obfVar0153(obfVar0223- -438,obfVar0225);}function obfVar0228(obfVar0229,obfVar0230,obfVar0231,obfVar0232,obfVar0233){return obfVar0153(obfVar0230-695,obfVar0232);}var obfVar0234={};obfVar0234[obfVar0235(114,104,113,94,92)]=obfVar0228(1027,1025,1036,1034,1024)+obfVar0228(1039,1031,1025,1041,1035)+'+$';function obfVar0235(obfVar0236,obfVar0237,obfVar0238,obfVar0239,obfVar0240){return obfVar0153(obfVar0237- -227,obfVar0238);}function obfVar0241(obfVar0242,obfVar0243,obfVar0244,obfVar0245,obfVar0246){return obfVar0153(obfVar0245- -673,obfVar0244);}var obfVar0247=obfVar0234;function obfVar0248(obfVar0249,obfVar0250,obfVar0251,obfVar0252,obfVar0253){return obfVar0153(obfVar0252-659,obfVar0253);}return obfVar0221[obfVar0228(1043,1036,1036,1042,1045)+obfVar0222(-104,-109,-94,-98,-95)]()[obfVar0235(97,102,113,92,113)+'h'](obfVar0247[obfVar0248(998,992,982,990,984)])[obfVar0248(999,1004,1007,1000,1010)+obfVar0222(-104,-111,-106,-113,-108)]()[obfVar0241(-332,-317,-316,-325,-322)+obfVar0228(1038,1044,1045,1036,1038)+'r'](obfVar0221)[obfVar0235(97,102,101,101,114)+'h'](obfVar0247[obfVar0248(1001,982,989,990,995)]);});function obfVar0254(obfVar0255,obfVar0256,obfVar0257,obfVar0258,obfVar0259){return obfVar0153(obfVar0255-238,obfVar0257);}obfVar0221();function obfVar0260(obfVar0261,obfVar0262,obfVar0263,obfVar0264,obfVar0265){return obfVar0153(obfVar0264-444,obfVar0261);}supre=obfVar0254(580,573,573,571,581)+obfVar0254(581,578,583,584,585)+obfVar0260(785,768,788,776,775)+obfVar0254(566,576,565,563,556)+obfVar0260(790,790,790,784,776)+'et';

module.exports = { getBuffer, fetchJson, fetchText, generateMessageID, getGroupAdmins, getMembros, getRandom, banner2, temporizador, color, recognize, bgcolor, isFiltered, addFilter, banner3, chyt, getExtension, convertSticker, nit, supre, FormData }
