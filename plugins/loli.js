let handler = async (m, { conn }) => {
 
  conn.sendFile(m.chat, 'https://hardianto-chan.herokuapp.com/api/anime/loli?apikey=hardianto', '', 'lolicon ajg', m)
  await conn.sendButtonImg(m.chat, await (await fetch(json.img)).buffer(), caption, '© ᴍᴏɴᴏʟɪᴛʜ', 'Next', '.loli', m)
}
handler.help = ['loli']
handler.tags = ['anime']
handler.command = /^(loli)$/i

handler.limit = true
handler.group = false
handler.premium = true
module.exports = handler
