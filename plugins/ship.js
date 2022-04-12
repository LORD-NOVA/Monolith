const dir = [
  "https://c.tenor.com/Eg138Ow2kNEAAAAM/anime-fight.gif",
  "https://c.tenor.com/jACzsM2_6YAAAAAC/argue-anime.gif",
  "https://c.tenor.com/a904vqCDuvkAAAAM/anime-mad.gif",
  "https://c.tenor.com/Z1CUclMb9QoAAAAC/yaharioreno-seishun.gif",
  "https://c.tenor.com/qXhDrF9rpMkAAAAM/hayase-nagatoro-hachioji-naoto.gif",
  "https://c.tenor.com/OwhK0bb5_c0AAAAC/illya-awkward.gif",
  "https://c.tenor.com/mtPSIF0gPuIAAAAM/ao-haru-ride-tv-show.gif",
  "https://c.tenor.com/Nu-KpcmyS98AAAAC/anime-armpit-chitose-chitose-armpit.gif",
  "https://c.tenor.com/3xh4VVaI2EwAAAAC/anime-cuddle.gif",
  "https://c.tenor.com/ey9_MxcN9jgAAAAM/anime-tv-show.gif",
  "https://c.tenor.com/q0Me9HdTcuAAAAAM/blushing-couple.gif",
  "https://c.tenor.com/gu6BB0thSOYAAAAM/oh-yeah-lets.gif",
  "https://c.tenor.com/i50gylGKwksAAAAM/cat-kitten.gif",
  "https://c.tenor.com/c4UDLP-NA-cAAAAM/adorable-inlove.gif",
  "https://c.tenor.com/71Cux-aY4G4AAAAM/anime-hug.gif",
  "https://c.tenor.com/8gXGvTZc4ucAAAAM/anime-hug-hug.gif",
  "https://c.tenor.com/JioZKGpv6fAAAAAM/hyouka-chitanda-eru.gif",
  "https://c.tenor.com/gGz2mfM0fRcAAAAM/tokyo-ghoul-kaneki.gif",
  "https://c.tenor.com/3OYmSePDSVUAAAAM/black-clover-licht.gif",
  "https://c.tenor.com/uYNjEbCbrOYAAAAM/tonikawa-tonikaku-kawaii.gif",
  "https://c.tenor.com/RiwO7Sj0B-YAAAAd/keisuke-baji-chifuyu-matsuno.gif",
];

let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, dir[Math.floor(Math.random() * dir.length)], 'ship.gif', '', m)
}
handler.help = ['ship']
handler.tags = ['anime']
handler.command = /^ship$/i

module.exports = handler
