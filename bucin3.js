let handler = async (m, { conn, usedPrefix, command }) => {
  await conn.sendButton(m.chat, `“${pickRandom(global.bucin)}”`, watermark, 'Quotes', `${usedPrefix + command}`)
}
handler.help = ['lifequotes']
handler.tags = ['quotes']
handler.command = /^(lifequotes)$/i
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

global.bucin = [
  "The greatest glory in living lies not in never falling, but in rising every time we fall.\n           -Nelson Mandela",
  "The way to get started is to quit talking and begin doing.\n           -Walt Disney",
  "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.\n        -Steve Jobs",
  "If life were predictable it would cease to be life, and be without flavor.\n        -Eleanor Roosevelt",
  "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.\n        -Oprah Winfrey",
  "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.\n        -James Cameron",
  "Spread love everywhere you go. Let no one ever come to you without leaving happier.\n        -Mother Teresa",
  "When you reach the end of your rope, tie a knot in it and hang on.\n        -Franklin D. Roosevelt",
  "Always remember that you are absolutely unique. Just like everyone else.\n        -Margaret Mead",
  "Don't judge each day by the harvest you reap but by the seeds that you plant.\n        -Robert Louis Stevenson",
  "The future belongs to those who believe in the beauty of their dreams.\n        -Eleanor Roosevelt",
  "The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart.\n        -Helen Keller",
  "It is during our darkest moments that we must focus to see the light.\n        -Aristotle",
  "Do not go where the path may lead, go instead where there is no path and leave a trail.\n          -Ralph Waldo Emerson",
  "You will face many defeats in life, but never let yourself be defeated.\n        -Maya Angelou",
  "The greatest glory in living lies not in never falling, but in rising every time we fall.\n        -Nelson Mandela",
  "In the end, it's not the years in your life that count. It's the life in your years.\n        -Abraham Lincoln",
  "Never let the fear of striking out keep you from playing the game.\n        -Babe Ruth",
  "Life is either a daring adventure or nothing at all.\n        -Helen Keller",
  "Many of life's failures are people who did not realize how close they were to success when they gave up.\n        -Thomas A. Edison",
  "The secret of success is to do the common thing uncommonly well. -John D. Rockefeller Jr.",
  "Keep smiling, because life is a beautiful thing and there's so much to smile about.\n           -Marilyn Monroe",
  "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.\n         -Dr. Seuss",
  "Life is made of ever so many partings welded together.\n        -Charles Dickens",
  "Success is not final; failure is not fatal: It is the courage to continue that counts.\n         -Winston S. Churchill",
  "The real test is not whether you avoid this failure, because you won't. It's whether you let it harden or shame you into inaction, or whether you learn from it; whether you choose to persevere.\n        -Barack Obama",
  "The only person you are destined to become is the person you decide to be.\n        -Ralph Waldo Emerson",
  "When we strive to become better than we are, everything around us becomes better too.\n       -Paulo Coelho",
  "There are three things you can do with your life: You can waste it, you can spend it, or you can invest it. The best use of your life is to invest it in something that will last longer than your time on Earth.\n       -Rick Warren",
  "You only pass through this life once, you don't come back for an encore.\n       -Elvis Presley",
  "The greatest glory in living lies not in never falling, but in rising every time we fall.\n           -Nelson Mandela",
  "The way to get started is to quit talking and begin doing.\n           -Walt Disney",
  "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.\n        -Steve Jobs",
  "If life were predictable it would cease to be life, and be without flavor.\n        -Eleanor Roosevelt",
  "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.\n        -Oprah Winfrey",
  "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.\n        -James Cameron",
  "Spread love everywhere you go. Let no one ever come to you without leaving happier.\n        -Mother Teresa",
  "When you reach the end of your rope, tie a knot in it and hang on.\n        -Franklin D. Roosevelt",
  "Always remember that you are absolutely unique. Just like everyone else.\n        -Margaret Mead",
  "Don't judge each day by the harvest you reap but by the seeds that you plant.\n        -Robert Louis Stevenson",
  "The future belongs to those who believe in the beauty of their dreams.\n        -Eleanor Roosevelt",
  "The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart.\n        -Helen Keller",
  "It is during our darkest moments that we must focus to see the light.\n        -Aristotle",
  "Do not go where the path may lead, go instead where there is no path and leave a trail.\n          -Ralph Waldo Emerson",
  "You will face many defeats in life, but never let yourself be defeated.\n        -Maya Angelou",
  "The greatest glory in living lies not in never falling, but in rising every time we fall.\n        -Nelson Mandela",
  "In the end, it's not the years in your life that count. It's the life in your years.\n        -Abraham Lincoln",
  "Never let the fear of striking out keep you from playing the game.\n        -Babe Ruth",
  "Life is either a daring adventure or nothing at all.\n        -Helen Keller",
  "Many of life's failures are people who did not realize how close they were to success when they gave up.\n        -Thomas A. Edison",
  "The secret of success is to do the common thing uncommonly well. -John D. Rockefeller Jr.",
  "Keep smiling, because life is a beautiful thing and there's so much to smile about.\n           -Marilyn Monroe",
  "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.\n         -Dr. Seuss",
  "Life is made of ever so many partings welded together.\n        -Charles Dickens",
  "Success is not final; failure is not fatal: It is the courage to continue that counts.\n         -Winston S. Churchill",
  "The real test is not whether you avoid this failure, because you won't. It's whether you let it harden or shame you into inaction, or whether you learn from it; whether you choose to persevere.\n        -Barack Obama",
  "The only person you are destined to become is the person you decide to be.\n        -Ralph Waldo Emerson",
  "When we strive to become better than we are, everything around us becomes better too.\n       -Paulo Coelho",
  "There are three things you can do with your life: You can waste it, you can spend it, or you can invest it. The best use of your life is to invest it in something that will last longer than your time on Earth.\n       -Rick Warren",
  "You only pass through this life once, you don't come back for an encore.\n       -Elvis Presley",
]
