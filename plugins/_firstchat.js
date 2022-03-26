let moment = require('moment-timezone')
let handler = m => m

handler.all = async function (m) {

    if (m.chat.endsWith('broadcast')) return
    if (m.fromMe) return
    if (m.isGroup) return
    if (db.data.settings.groupOnly) return
    let user = global.db.data.users[m.sender]
    if (new Date - user.pc < 86400000) return // setiap 24 jam sekali
    await this.sendButton(m.chat, `
Hi, ${ucapan()}
${user.banned ? 'you are banned' : 'I am monolith, please dont spam/call/ask to save to this number. Can I help you?, Type .menu To Get Bot Menu}
`.trim(), watermark, user.banned ? 'Bot Owner' : 'Menu', user.banned ? '.owner' : '.?', m)
    user.pc = new Date * 1
}

module.exports = handler
function ucapan() {
    const time = moment.tz('Africa/Lagos').format('HH')
    res = "Good morning"
    if (time >= 5) {
        res = "Good morning"
    }
    if (time > 12) {
        res = "Good afternoon"
    }
    if (time >= 18) {
        res = "Good afternoon"
    }
    if (time >= 20) {
        res = "Good night"
    }
    return res
}
