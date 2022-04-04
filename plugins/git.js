let fetch = require ('node-fetch')
let handler = async (m, { conn }) => {
    let devil = `ㅤ
`.trim()
    await conn.send2ButtonLoc(m.chat, await (await fetch("https://camo.githubusercontent.com/ad4f876641ba323e1cfa0d19188b2c4427349951aad37afba96bb6f56ed997db/68747470733a2f2f692e6962622e636f2f576e35716e6a772f494d472d32303232303430312d5741303035362e6a7067?raw=true")).buffer(), devil, 'ᴍᴏɴᴏʟɪᴛʜ ʙʏ ɴᴏᴠᴀ\n\╔╗╔╗╔══╗╔══╗\n\║╚╝║║╔╗║╚║║╝\n\║╔╗║║╠╣║╔║║╗\n\╚╝╚╝╚╝╚╝╚══╝ \n\n\ https://instagram.com/gideon_triumph \n\n\ © ī.am ꪶᴍᴏɴᴏʟɪᴛʜꫂ⁩⁴⁰⁴⁩' , '💠ᴏᴡɴᴇʀ💠', '.owner', '💠ᴄʀᴇᴅɪᴛs💠', ',credit')
}
handler.tags = ['main']
handler.help = ['git']
handler.command = /^(git)$/i
module.exports = handler
