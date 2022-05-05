let PhoneNumber = require('awesome-phonenumber')
let levelling = require('../lib/levelling')
let handler = async (m, { conn, usedPrefix }) => {
  let pp = './src/avatar_contact.png'
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  try {
    pp = await conn.getProfilePicture(who)
  } catch (e) {

  } finally {
    let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
    if (typeof global.db.data.users[who] == "undefined") {
      global.db.data.users[who] = {
        exp: 0,
        limit: 10,
        lastclaim: 0,
        registered: false,
        name: conn.getName(m.sender),
        age: -1,
        regTime: -1,
        afk: -1,
        afkReason: '',
        banned: false,
        level: 0,
        call: 0,
        role: 'Warrior V',
        autolevelup: false,
        pc: 0,
      }
    }
    let { name, limit, exp, lastclaim, registered, regTime, age, level, role, banned } = global.db.data.users[who]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let username = conn.getName(who)
    let math = max - xp
    let str = `
⚔️Name: ${username} ${registered ? '(' + name + ') ' : ''}(@${who.replace(/@.+/, '')})${about != 401 ? '\n\n⚜️Info: ' + about : ''}

🎴Number: ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}

🏮Link: https://wa.me/${who.split`@`[0]}${registered ? '\n\n🔐Age: ' + age : ''}

🎐Premium: ${prems.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) ? 'Yes' : 'No'}

🔐Registered: ${registered ? 'Ya (' + new Date(regTime).toLocaleString() + ')' : 'Registered'}${lastclaim > 0 ? '\n\n🎐Last Claim: ' + new Date(lastclaim).toLocaleString() : ''}

💠Limit: 10

🚫Banned: No

🔮Role: Warrior V
`.trim()
    let mentionedJid = [who]
    conn.sendFile(m.chat, pp, 'pp.jpg', banned ? 'if you get banned' : str, m, false, { contextInfo: { mentionedJid } })
  }
}
handler.help = ['profile [@user]', 'alive']
handler.tags = ['tools']
handler.command = /^profile|alive?$/i
module.exports = handler
