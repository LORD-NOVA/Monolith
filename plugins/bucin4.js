let handler = async (m, { conn, usedPrefix, command }) => {
  await conn.sendButton(m.chat, `“${pickRandom(global.bucin4)}”`, watermark, 'Good Night', `${usedPrefix + command}`)
}
handler.help = ['goodnight', 'gn']
handler.tags = ['quotes']
handler.command = /^(goodnight|gn)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.bucin4 = [
  "😘𝙂𝙤𝙤𝙙 🙈𝙣𝙞𝙜𝙝𝙩 💫✨",
  "🤗𝓖𝓸𝓸𝓭 🧚‍♀𝓷𝓲𝓰𝓱𝓽 ❄️✨",
  "🌌❡០០ᖱ 🌙⩎ɨ❡ϦƬ 🌎",
  "😘ցօօժ ⭐️ղíցհԵ 💝",
  "🌃Ꮐᝪᝪᗞ 🙈ᑎᏆᏀᕼᎢ 💫✨",
]
