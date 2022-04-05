function handler(m) {
  this.reply(m.chat, '🎀💮𝕁𝕠𝕚𝕟 𝕠𝕦𝕣 𝕊𝕦𝕡𝕡𝕠𝕣𝕥 𝔾𝕣𝕠𝕦𝕡 : https://chat.whatsapp.com/DZxT7UGm9DZG3HKqAbymrB 🎀💮', m)
}
handler.help = ['support']
handler.tags = ['tools']

handler.command = /^(Support|support)$/i

module.exports = handler
