let yts = require('yt-search')
let handler = async (m, { text, usedPrefix, command }) => {
  if (!text) throw `Example:\n${usedPrefix + command} Rosses`
  let results = await yts(text)
  let teks = results.all.map(v => {
    switch (v.type) {
      case 'video': return `
*${v.title}* (${v.url})
𝙳𝚄𝚁𝙰𝚃𝙸𝙾𝙽: ${v.timestamp}
𝚄𝙿𝙻𝙾𝙰𝙳𝙴𝙳: ${v.ago}
${v.views} 𝚅𝙸𝙴𝚆𝙴𝚁𝚂
      `.trim()
      case 'channel': return `
*${v.name}* (${v.url})
_${v.subCountLabel} (${v.subCount}) 𝚂𝚄𝙱𝚂𝙲𝚁𝙸𝙱𝙴𝚁𝚂_
${v.videoCount} 𝚅𝙸𝙳𝙴𝙾𝚂
`.trim()
    }
  }).filter(v => v).join('\n========================\n')
  m.reply(teks)
}
handler.help = ['', 'earch'].map(v => 'yts' + v + ' <query>')
handler.tags = ['internet']
handler.command = /^yts(earch)?$/i

module.exports = handler
