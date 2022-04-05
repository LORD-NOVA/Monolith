let handler = async (m, { conn }) => {
 
  if (!global.db.data.chats[m.chat].nsfw) throw "NSFW is not active !"
  conn.sendFile(m.chat, 'https://api.xteam.xyz/randomimage/ass?APIKEY=apikeymu', '', '(◡ ꒳ ◡)', m)
  
}
// handler.help = ['ass']
handler.tags = ['anime']
handler.command = /^(ass)$/i

handler.limit = true
handler.group = true

module.exports = handler
