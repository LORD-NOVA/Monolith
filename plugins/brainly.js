const Brainly = require('brainly-scraper-v2')
const brain = new Brainly('id')

let handler = async function (m, { text, usedPrefix, command }) {
  if (!text) throw `Usage:\n${usedPrefix + command} <question>\n\nExample:\n${usedPrefix + command} what is javascript?`
  brain.search('id', text).then(res => {
    let json = JSON.parse(JSON.stringify(res))
    let answer = json.map((v, i) => `_*QUESTION TO ${i + 1}*_\n${v.question.content}\n${v.answers.map((v, i) => `*ANSWER TO ${i + 1}*\n${v.content.replace(/<\/?p>|<\/?strong>|<\/?u>|<\/ ?h[1-3]>|<\/?span>/g, '').replace(/<br ?(\/|\\)?>/g, '\n')}`).join ('\n')}`).join('\n\n•------------•\n\n')
    m.reply(answer)
  })
}
handler.help = ['brainly <question>']
handler.tags = ['fun']

handler.command = /^brainly$/i

module.exports = handler
