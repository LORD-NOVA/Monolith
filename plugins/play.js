const { servers, yta, ytv } = require('../lib/y2mate')
let yts = require('yt-search')
let fetch = require('node-fetch')
let handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `uhm.. what are you looking for?\n\nExample:\n${usedPrefix + command} Come to Life`
  let chat = global.db.data.chats[m.chat]
  let results = await yts(text)
  let vid = results.all.find(video => video.seconds < 3600)
  if (!vid) throw 'π²πΎπ½ππ΄π½π π½πΎπ π΅πΎππ½π³'
  let isVideo = /2$/.test(command)
  let yt = false
  let yt2 = false
  let usedServer = servers[0]
  for (let i in servers) {
    let server = servers[i]
    try {
      yt = await yta(vid.url, server)
      yt2 = await ytv(vid.url, server)
      usedServer = server
      break
    } catch (e) {
      m.reply(`ππ΄πππ΄π ${server} π΄πππΎπ!${servers.length >= i + 1 ? '' : '\nπππ π°πΆπ°πΈπ½...'}`)
    }
  }
  let { dl_link, thumb, title, filesize, filesizeF } = yt
  await conn.send2ButtonLoc(m.chat, await (await fetch(thumb)).buffer(), `
*ππΈππ»π΄:* ${title}
*π°ππ³πΈπΎ π΅πΈπ»π΄ ππΈππ΄:* ${filesizeF}
*ππΈπ³π΄πΎ π΅πΈπ»π΄ ππΈππ΄:* ${yt2.filesizeF}

*ππΏπ»π°π π³πΎπ΄π π½πΎπ ππΎππΊ πΈπ½ π³πΈππ°πΏπΏπ΄π°ππΈπ½πΆ πΌπΎπ³π΄*
`.trim(), watermark, 'π΅α΄α΄α΄Ιͺα΄', `.yta ${vid.url}`, 'π₯α΄ Ιͺα΄α΄α΄', `.yt ${vid.url}`)
}
handler.help = ['song','play'].map(v => v + ' <query>')
handler.tags = ['downloader']
handler.command = /^(play|song|music)$/i

handler.exp = 0

module.exports = handler

