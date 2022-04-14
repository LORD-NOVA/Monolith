let handler = async (m, { conn, usedPrefix, command }) => {
  await conn.sendButton(m.chat, `“${pickRandom(global.bucin5)}”`, watermark, 'Dark Joke', `${usedPrefix + command}`)
}
handler.help = ['darkjoke']
handler.tags = ['quotes']
handler.command = /^(darkjoke)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.bucin5 = [ 
  "I was digging a hole in the garden when I found some gold coins. I was about to run and tell my wife, when I remembered why I was digging a hole in the garden",
  "I thought opening a door for a lady was good manners, but she just screamed and flew out of the plane",
  "I was raised as an only child, which I think was hard for my brother",
  "I bought my blind friend a cheese grater for his birthday. He later told me it was the most violent book he’d ever read",
  "My girlfriend dumped me, so I stole her wheelchair. Guess who came crawling back?",
  "'You the bomb. ‘No, you the bomb.’ A compliment in the US, an argument in the Middle East",
  "Man: How do you prepare your chicken? Waiter: Nothing special, we just tell them they’re going to die",
  "My wife left a note on the fridge saying, “this is not working”. I don’t know what she’s talking about, the fridge is working fine", 
  "Option 1: Let’s eat grandma. Option 2: Let’s eat, grandma. There you have it. Proof that punctuation saves lives",
  "Son: Dad, if I told you I was gay, would you still love me? Dad: Don’t be silly son, you were an accident. I never loved you in the first place",
  "My girlfriend’s dog died, so I bought her another, identical one. She just screamed at me and said: “What am I meant to do with two dead dogs?!?”",
  "Son: How do stars die? Dad: An overdose, usually",
  "Wife: I’m pregnant. Husband: Hi pregnant, I’m dad. Wife: No, you’re not.",
  "My therapist said time heals all wounds. So I stabbed her.",
  "Every time my grandmother and I were at a wedding she’d say: “you’re next”. So I started saying the same thing to her at funerals.",
  "I went to visit my childhood home, but the people who lived there wouldn’t let me in. My parents are the worst.",
  "Jokes about ISIS are all about the execution.",
  "Welcome to Plastic Surgery Anonymous. Nice to see so many new faces",
  "Sex is like air. It only matters if you aren’t getting any.",
  "If you think I would joke about Alzheimer’s, forget it.",
  "Stop elephant poaching. Everyone knows the best way to eat an elephant is grilled.",
  "I tried to warn my son about playing Russian roulette. It went in one ear and out the other.",
  "I’ll never forget my dad’s last words. “Erase my search history, son.”",
  "Doctor: “You’ll be at peace soon” Man: “Am I dying? ”Doctor: “No, your wife is”",
  "If someone burns to death, do they get a discount at the crematorium?",
  "My wife says sex is even better on holiday. I wish she didn’t tell me via email.",
  "I just came across my wife’s Tinder profile and I’m so angry about her lies. She is not “fun to be around”.",
  "Top tip: If your wife says: “what would you most like to do to my body?”, “identify it” is the wrong answer.",
  "Did you hear the joke about the baby with cancer? It never gets old",
  "Life is like a box of chocolates. It doesn’t last long for fat people.",
  "One man’s trash is another man’s treasure. Lovely saying. Terrible way to find out you’re adopted.",
  "I read a book about an immortal dog. It was impossible to put down.",
  "You don’t need a parachute to go skydiving. You need a parachute to go skydiving more than once.",
  "In 1980, I fell off my bike, twisted my foot, and hurt my knee. I am telling you this now because there was no social media in the ‘80s.",
]
