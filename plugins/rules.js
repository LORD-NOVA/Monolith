let fetch = require ('node-fetch')
let handler = async (m, { conn }) => {
    let haruno = `┌ 「 ʀᴜʟᴇs 」
│『☞︎︎︎ These are the rules ☜︎︎︎』
│『☞︎︎︎ Please Comply ☜︎︎︎』
│ 
│ Rules can be changed at anytime
│for convenience
└────
│1. Please DON'T spam bot
│ commands
│2. Don't send virtex, bug,
│ trojan, etc to bot number
│3. Insulting the owner will be
│ picked up directly at their respective homes
│4. The bot/owner is not
│ responsible for what the user
│ does with the bot commands
│5. Don't call / vc bot numbers
│6. EXP/Limit/Level cheats are
│ prohibited
│7. If the bot doesn't respond,
│ it means it's off or under │maintenance
│8. Please report any bugs via
│ !report
└────

 「 ᴄᴏɴsᴇǫᴜᴇɴᴄᴇs 」
│1. If you violate rule number 5
│ (calling) you will be blocked
│2. If you violate the rules
│ number 1, 2, 3 then you will get
│ banned from using my bots
│4. If you violate rule number 3
│ (insulting) then it will be
│ directed to your homes 
└────
『You can send a message to the owner to add bot to your groups via !owner』
`.trim()
    conn.fakeReply(m.chat, '*「 ⚠️ 」ʟᴏᴀᴅɪɴɢ...*', '0@s.whatsapp.net', '*RULES*')
    await conn.send2ButtonLoc(m.chat, await (await fetch("https://camo.githubusercontent.com/5ab725ad8a78684cb30dcce25a65c41c5137d9ffe959809f82f5c79e8cf93f51/68747470733a2f2f74656c656772612e70682f66696c652f6237356530303133363937386464643161613535382e6a7067?raw=true")).buffer(), haruno, '© ᴍᴏɴᴏʟɪᴛʜ', 'ᴍᴇɴᴜ', '.menu', 'ᴏᴡɴᴇʀ', '.owner', m)
}
handler.tags = ['main']
handler.help = ['rules']
handler.command = /^(rule)$/i
module.exports = handler
