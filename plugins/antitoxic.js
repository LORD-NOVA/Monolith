let handler = async (m, { conn, text }) => {
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]

  conn.reply(m.chat, `
*「 ANTI TOXIC 」*
Sender : ${name.vnmae || name.notify || name.name || ('+' + name.jid.split`@`[0])}
Message : ${m.text}
Get used to it, don't be toxic! :)
`.trim(), m)
    let mentionedJid = [m.sender]
}
handler.customPrefix = /bitch|fuck|nude|fucker|myre|pussy|kunna|andi|poori|nigga|damn|crazy|mad|stupid|poor/i
handler.command = new RegExp

module.exports = handler
