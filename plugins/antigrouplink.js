
let handler = m => m

let linkRegex = /chat.whatsapp.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i
handler.before = function (m, { isAdmin, isBotAdmin }) {
  if (m.isBaileys && m.fromMe) return true
  let chat = global.DATABASE.data.chats[m.chat]
  let sender = global.DATABASE.data.chats[m.sender]
  let isGroupLink = linkRegex.exec(m.text)

  if (chat.antiGroupLink && isGroupLink) {
    if (global.opts) {
      if (isAdmin || !isBotAdmin){		  
	  }else{
		m.reply('delete!!\nGroup link detected\nᴼʰ ᴹʸ ᴮᵉˡᵒᵛᵉᵈ ˢᵒⁿ ᴸᵒᵒᵏ ᵂʰᵃᵗ ʸᵒᵘ ᴰⁱᵈ\nʸᵒᵘ ᴮʳᵒᵏᵉ ᵀʰᵉ ᴿᵘˡᵉˢ ᴺᵒʷ ᴵ ᴴᵃᵛᵉ ᵀᵒ ᴷⁱᶜᵏ ʸᵒᵘ ˢᵒⁿ\nᵖˡᵉᵃˢᵉ ᶠᵒʳᵍⁱᵛᵉ ʸᵒᵘʳ ᶠᵃᵗʰᵉʳ ᶠᵒʳ ᵀʰⁱˢ \nᴿᵉᵍᵃʳᵈˢ: ʸᵒᵘʳ ᴮᵉˡᵒᵛᵉᵈ ᶠᵃᵗʰᵉʳ' )
		this.groupRemove(m.chat, [m.sender])
		}return true
	}
  }
  return true
}

module.exports = handler
