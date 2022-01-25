const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr = Array.from(expr.match(/(\d{10}|\*{10})/gm))
    return arr.map((elem) => {        
        let result = ''
        for (let i = 0; i < elem.length; i += 2) {
            //console.log(elem.slice(i, i+2))
            if (elem.slice(i, i+2) == '10') result += '.'
            if (elem.slice(i, i+2) == '11') result += '-'
        }
        return result
    }).map((elem) => MORSE_TABLE[elem] || ' ').join('')
}

module.exports = {
    decode
}