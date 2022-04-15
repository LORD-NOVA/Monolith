let fs = require('fs')
global.owner = ['2347042930688'] // Letakan nomor kamu disini
global.mods = ['2347042930688'] // Moderator?
global.prems = JSON.parse(fs.readFileSync('./src/premium.json')) // Pengguna premium tidak memerlukan limit
global.APIs = { // API Prefix
  // nama: 'https://website'
  bx: 'https://bx-hunter.herokuapp.com',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  jonaz: 'https://jonaz-api-v2.herokuapp.com',
  neoxr: 'https://neoxr-api.herokuapp.com',
  nrtm: 'https://nurutomo.herokuapp.com',
  pencarikode: 'https://pencarikode.xyz',
  xteam: 'https://api.xteam.xyz',
  fxc7: 'https://fxc7-api.herokuapp.com',
  l0lhuman: 'https://api.lolhuman.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zekais: 'http://zekais-api.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  brainshop: 'http://api.brainshop.ai',
}
global.APIKeys = { // APIKey nya disini
  // 'https://website': 'apikey'
  'https://bx-hunter.herokuapp.com': 'Ikyy69',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://fxc7-api.herokuapp.com':'pnj8NAJb',
  'https://pencarikode.xyz': 'pais',
  'https://api.xteam.xyz': 'FuzBot1',
  'https://api.lolhuman.xyz': 'sdz8VotwEnDd4HvdIUfy1e4qTDx',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'apivinz',
  'https://api.brainshop.ai': 'ctTB3lBU2TLXGflz',
}

// Sticker WM
global.packname = '『☞︎︎︎ᴍᴏɴᴏʟɪᴛʜ☜︎︎︎』'
global.author = 'ғʏ ɴᴏᴠᴀ 2ᴋ'

global.wait = '_*✨𝙱𝚄𝙵𝙵𝙴𝚁𝙸𝙽𝙶...✨*_'
global.eror = '_*𝚂𝙴𝚁𝚅𝙴𝚁 𝙴𝚁𝚁𝙾𝚁*_'
global.fla = 'https://camo.githubusercontent.com/5ab725ad8a78684cb30dcce25a65c41c5137d9ffe959809f82f5c79e8cf93f51/68747470733a2f2f74656c656772612e70682f66696c652f6237356530303133363937386464643161613535382e6a7067?raw=true'

global.watermark = '© ᴍᴏɴᴏʟɪᴛʜ ʙʏ ɴᴏᴠᴀ ×፝֟͜×'

global.multiplier = 69 // Semakin tinggi, semakin sulit naik level

let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
