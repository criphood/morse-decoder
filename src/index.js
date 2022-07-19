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
    let numbers = [],
        symbols = [];

    for (let i = 0; i < expr.length; i += 10) {
        numbers.push(expr.slice(i, i + 10));
    }

    numbers.forEach(number => {
        symbols.push(
            number.replace(/11/g, '-')
                  .replace(/10/g, '.')
                  .replace(/00/g, '')
                  .replace('**********', ' ')
        );
    });

    for (let i = 0; i < symbols.length; i++) {
        for (let key in MORSE_TABLE) {
            if (symbols[i] == key) {
                symbols[i] = MORSE_TABLE[key];
            }
        }
    }

    return symbols.join('');
}


module.exports = {
    decode
}