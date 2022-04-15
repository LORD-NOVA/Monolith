let fetch = require('node-fetch')
let handler = async (m, { msg }) => {
  let res = await fetch(global.API('https://api.brainshop.ai', '/get?bid=164410&key=ctTB3IBU2TLXGflz&uid=[uid]&msg=', { msg: encodeURIComponent(msg) }, ''))
  let json = await res.json()
  if (json.success) m.reply(json.success)
  else throw json
}
handler.help = ['bot'].map(v => v + ' <text>')
handler.tags = ['fun']
handler.command = /^(bot|simi)$/i

module.exports = handler

