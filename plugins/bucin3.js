let handler = async (m, { conn, usedPrefix, command }) => {
  await conn.sendButton(m.chat, `“${pickRandom(global.bucin3)}”`, watermark, 'Good Morning', `${usedPrefix + command}`)
}
handler.help = ['goodmorning|gm']
handler.tags = ['quotes']
handler.command = /^(goodmorning|gm)$/i
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
  "❀🍃Good❀ ❀morning❀🥰❀",
  "☘️𝐺𝑜𝑜𝑑 🌅𝑚𝑜𝑟𝑛𝑖𝑛𝑔 💐",
  "🍃𝙶𝚘𝚘𝚍 🌻𝚖𝚘𝚛𝚗𝚒𝚗𝚐 🥰",
  "🍀𝗚𝗼𝗼𝗱 😘𝗺𝗼𝗿𝗻𝗶𝗻𝗴 🌸",
  "🌻𝓖𝓸𝓸𝓭 𝓶𝓸𝓻𝓷𝓲𝓷𝓰 💞",
  "🌼🅖🅞🅞🅓 🅜🅞🅡🅝🅘🅝🅖 🐶",
  "🍃Ⓖⓞⓞⓓ 🌈ⓜⓞⓡⓝⓘⓝⓖ 🥰",
]
