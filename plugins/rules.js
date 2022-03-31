let fetch = require ('node-fetch')
let handler = async (m, { conn }) => {
    let haruno = `┌ 「 ʀᴜʟᴇs 」
│『☞︎︎︎ These are the rules ☜︎︎︎』
│『☞︎︎︎ Please Comply ☜︎︎︎』
│ 
│ Rules can be changed at anytime
│for convenience
└────
1. Please don't spam bot commands
2. Don't send virtex, bug, trojan, etc to bot number
3. Insulting the owner will be picked up directly at their respective homes
4. The bot/owner is not responsible for what the user does to the command bot
5. Don't call / vc to bot numbers
6. EXP/Limit/Level cheats are prohibited
7. If the bot doesn't respond, it means it's off/fixed a bug
8. Please report any bugs via *!report*


 「 ᴄᴏɴsᴇǫᴜᴇɴᴄᴇs 」
1. If you violate rule number 5 (calling / vc) you will be blocked
2. If you violate the rules number 1, 2, 3 then you can get banned from bots
4. If you violate rule number 3 (insulting) then you will be picked up at your respective homes
『You can send a message to the owner to add bot to your groups ᴠɪᴀ !owner』
`.trim()
    conn.fakeReply(m.chat, '*「 ⚠️ 」ʟᴏᴀᴅɪɴɢ...*', '0@s.whatsapp.net', '*RULES*')
    await conn.send2ButtonLoc(m.chat, await (await fetch("https://camo.githubusercontent.com/5ab725ad8a78684cb30dcce25a65c41c5137d9ffe959809f82f5c79e8cf93f51/68747470733a2f2f74656c656772612e70682f66696c652f6237356530303133363937386464643161613535382e6a7067?raw=true")).buffer(), haruno, '© ᴍᴏɴᴏʟɪᴛʜ', 'ᴍᴇɴᴜ', '.menu', 'ᴏᴡɴᴇʀ', '.owner', m)
}
handler.tags = ['main']
handler.help = ['rules']
handler.command = /^(rule)$/i
module.exports = handler
