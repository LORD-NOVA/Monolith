let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let user = global.db.data.users[who]
    m.reply(`*${user.limit}* Limit✨\n\n*${user.exp}* XP🎴\n\n🎐Level *${user.level}*\n\n🧧Role *${user.role}*`)
}
handler.help = ['my [@user]' , 'level [@user]']
handler.tags = ['xp']
handler.command = /^(my|limit|level)$/i
module.exports = handler
