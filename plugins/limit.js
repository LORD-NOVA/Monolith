let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let user = global.db.data.users[who]
    m.reply(`*${user.limit}* 𝙻𝙸𝙼𝙸𝚃𝚂🧧\n\n*${user.exp}* 𝚇𝙿🎴\n\n⚔️𝙻𝙴𝚅𝙴𝙻 *${user.level}*\n\n🔮𝚁𝙾𝙻𝙴: *${user.role}*\n\n\n*ᴅᴏɴᴛ ғᴏʀɢᴇᴛ ᴛᴏ ᴄʟᴀɪᴍ ʏᴏᴜʀ ᴅᴀɪʟʏ*`)
}
handler.help = ['my [@user]' , 'level [@user]']
handler.tags = ['xp']
handler.command = /^(my|limit|level)$/i
module.exports = handler
