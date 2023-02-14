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
 let s2='';
    function decoder(str){
        let s1='';
        let s2=''
        while (str.length!=0){
            if (str.slice(0,2).localeCompare('10')==0) s1+='.';
            if (str.slice(0,2).localeCompare('11')==0) s1+='-';
            str=str.substr(2,str.length);}
        for (key in MORSE_TABLE )
            if (s1.localeCompare(key)==0) s2+=MORSE_TABLE [key];
           return s2;} 
           
    while (expr.length!=0) {
        if (expr.slice(0,10).localeCompare('**********')==0) { 
            s2+=' ';  
            expr=expr.substr(10,expr.length);}
        else {
        s2+=decoder(expr.slice(0,10));
        expr=expr.substr(10,expr.length);}}
        return s2;  
}

module.exports = {
    decode
}
