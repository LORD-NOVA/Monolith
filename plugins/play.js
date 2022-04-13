const { servers, yta, ytv } = require('../lib/y2mate')
let yts = require('yt-search')
let fetch = require('node-fetch')
let handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `uhm.. what are you looking for?\n\nexample:\n${usedPrefix + command} 𝙴𝙻 𝚂𝙰𝙻𝚅𝙰𝙳𝙾𝚁 𝙱𝚈 𝚂𝙴𝚀𝚄𝙾𝙸𝙰`
  let chat = global.db.data.chats[m.chat]
  let results = await yts(text)
  let vid = results.all.find(video => video.seconds < 3600)
  if (!vid) throw '𝙲𝙾𝙽𝚃𝙴𝙽𝚃 𝙽𝙾𝚃 𝙵𝙾𝚄𝙽𝙳'
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
      m.reply(`𝚂𝙴𝚁𝚅𝙴𝚁 ${server} 𝙴𝚁𝚁𝙾𝚁!${servers.length >= i + 1 ? '' : '\n𝚃𝚁𝚈 𝙰𝙶𝙰𝙸𝙽...'}`)
    }
  }
  let { dl_link, thumb, title, filesize, filesizeF } = yt
  await conn.send2ButtonLoc(m.chat, await (await fetch(thumb)).buffer(), `
*𝚃𝙸𝚃𝙻𝙴:* ${title}
*𝙰𝚄𝙳𝙸𝙾 𝙵𝙸𝙻𝙴 𝚂𝙸𝚉𝙴:* ${filesizeF}
*𝚅𝙸𝙳𝙴𝙾 𝙵𝙸𝙻𝙴 𝚂𝙸𝚉𝙴:* ${yt2.filesizeF}

*🔇𝙿𝙻𝙰𝚈 𝙳𝙾𝙴𝚂 𝙽𝙾𝚃 𝚆𝙾𝚁𝙺 𝙸𝙽 𝙳𝙸𝚂𝙰𝙿𝙿𝙴𝙰𝚁𝙸𝙽𝙶 𝙼𝙾𝙳𝙴*
`.trim(), watermark, '🎵ᴀᴜᴅɪᴏ', `.yta ${vid.url}`, '🎥ᴠɪᴅᴇᴏ', `.yt ${vid.url}`)
}
handler.help = ['song','play'].map(v => v + ' <query>')
handler.tags = ['downloader']
handler.command = /^(play|song|music)$/i

handler.exp = 0

module.exports = handler

