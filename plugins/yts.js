let yts = require('yt-search')
let handler = async (m, { text, usedPrefix, command }) => {
  if (!text) throw `Example:\n${usedPrefix + command} Rosses`
  let results = await yts(text)
  let teks = results.all.map(v => {
    switch (v.type) {
      case 'video': return `
*${v.title}* (${v.url})
π³πππ°ππΈπΎπ½: ${v.timestamp}
ππΏπ»πΎπ°π³π΄π³: ${v.ago}
${v.views} ππΈπ΄ππ΄ππ
      `.trim()
      case 'channel': return `
*${v.name}* (${v.url})
_${v.subCountLabel} (${v.subCount}) πππ±ππ²ππΈπ±π΄ππ_
${v.videoCount} ππΈπ³π΄πΎπ
`.trim()
    }
  }).filter(v => v).join('\n========================\n')
  m.reply(teks)
}
handler.help = ['', 'earch'].map(v => 'yts' + v + ' <query>')
handler.tags = ['internet']
handler.command = /^yts(earch)?$/i

module.exports = handler
