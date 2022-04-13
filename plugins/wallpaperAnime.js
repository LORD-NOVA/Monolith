const fetch = require('node-fetch')

let handler = async (m, { conn }) => {
    try {
        let res = await fetch(global.API('xteam', '/randomimage/wpmobile', {}, 'APIKEY'))
        if (res.status != 200) throw await res.text()
        let img = await res.buffer()
        conn.sendFile(m.chat, img, '', '*© ᴍᴏɴᴏʟɪᴛʜ ʙʏ ɴᴏᴠᴀ*', m, false, { thumbnail: Buffer.alloc(0) })
    } catch (e) {
        throw `_*𝙴𝚛𝚛𝚘𝚛*_!`
    }
}
handler.help = ['wallpaperanime/wpanime']
handler.tags = ['anime']
handler.command = /^(wallpaper|wp)anime$/i
handler.limit = true

module.exports = handler
