let fetch = require('node-fetch')
let handler = async (m, { text }) => {
  let res = await fetch(global.API('https://api-sv2.simsimi.net', '/v2/', { text: encodeURIComponent(text), lc: "en" }, ''))
  let json = await res.json()
  if (json.success) m.reply(json.success)
  else throw json
}
handler.help = ['bot'].map(v => v + ' <teks>')
handler.tags = ['fun']
handler.command = /^(bot|monolith)$/i

module.exports = handler
