const translate = require('translate-google-api')
const defaultLang = 'en'
const tld = 'cn'

let handler = async (m, { args, usedPrefix, command }) => {
    let err = `
Use:
${usedPrefix + command} <language> [text]

Example :
${usedPrefix + command} en Nous aimons tous Nova

List of supported languages:
${bahasa.map(v => `${v.code} : ${v.country}`).join`\n`}
`.trim()

    let lang = args[0]
    let text = args.slice(1).join(' ')
    if ((args[0] || '').length !== 2) {
        lang = defaultLang
        text = args.join(' ')
    }
    if (!text && m.quoted && m.quoted.text) text = m.quoted.text

    let result
    try {
        result = await translate(text, {
            tld,
            to: lang,
        })
    } catch (e) {
        result = await translate(text, {
            tld,
            to: defaultLang,
        })
        throw err
    } finally {
        if (result) m.reply(result[0])
    }
}
handler.help = ['translate'].map(v => v + ' <lang> <text>')
handler.tags = ['tools']
handler.command = /^(tr(anslate)?)$/i

module.exports = handler

global.bahasa = [
    { code: 'af', country: 'Afrikaans' },
    { code: 'sq', country: 'Albanian' },
    { code: 'ar', country: 'Arabic' },
    { code: 'hy', country: 'Armenian' },
    { code: 'ca', country: 'Catalan' },
    { code: 'zh', country: 'Chinese' },
    { code: 'zh-cn', country: 'Chinese (Mandarin/China)' },
    { code: 'zh-tw', country: 'Chinese (Mandarin/Taiwan)' },
    { code: 'zh-yue', country: 'Cantonese' },
    { code: 'hr', country: 'Croatian' },
    { code: 'cs', country: 'Czech' },
    { code: 'da', country: 'Danish' },
    { code: 'nl', country: 'Dutch' },
    { code: 'en', country: 'English' },
    { code: 'en-au', country: 'English (Australia)' },
    { code: 'en-uk', country: 'English (United Kingdom)' },
    { code: 'en-us', country: 'English (United States)' },
    { code: 'eo', country: 'Esperanto' },
    { code: 'fi', country: 'Finnish' },
    { code: 'fr', country: 'French' },
    { code: 'de', country: 'German' },
    { code: 'el', country: 'Greek' },
    { code: 'ht', country: 'Haitian Creole' },
    { code: 'hi', country: 'Hindi' },
    { code: 'hu', country: 'Hungarian' },
    { code: 'is', country: 'Icelandic' },
    { code: 'id', country: 'Indonesian' },
    { code: 'it', country: 'Italian' },
    { code: 'ja', country: 'Japanese' },
    { code: 'ko', country: 'Korean' },
    { code: 'la', country: 'Latin' },
    { code: 'lv', country: 'Latvian' },
    { code: 'mk', country: 'Macedonian' },
    { code: 'no', country: 'Norwegian' },
    { code: 'po', country: 'Polish' },
    { code: 'pt', country: 'Portuguese' },
    { code: 'pt-br', country: 'Portuguese (Brazil)' },
    { code: 'ro', country: 'Romanian' },
    { code: 'ru', country: 'Russian' },
    { code: 'sr', country: 'Serbian' },
    { code: 'sk', country: 'Slovak' },
    { code: 'es', country: 'Spanish' },
    { code: 'es-es', country: 'Spanish (Spain)' },
    { code: 'es-us', country: 'Spanish (United States)' },
    { code: 'sw', country: 'Swahili' },
    { code: 'sv', country: 'Swedish' },
    { code: 'ta', country: 'Tamil' },
    { code: 'th', country: 'Thai' },
    { code: 'tr', country: 'Turkish' },
    { code: 'vi', country: 'Vietnamese' },
    { code: 'cy', country: 'Welsh' }
]
