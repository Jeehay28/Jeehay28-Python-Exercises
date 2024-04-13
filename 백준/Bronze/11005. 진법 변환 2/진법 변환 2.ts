let input11005 = require('fs').readFileSync(0, 'utf-8').toString().trim().split("\n");
let num: number = input11005[0].split(" ")[0];
let system: number = input11005[0].split(" ")[1];
let result11005: string = "";
let objNew: {[key: number] : string} = {
    '10': 'A',
    '11': 'B',
    '12': 'C',
    '13': 'D',
    '14': 'E',
    '15': 'F',
    '16': 'G',
    '17': 'H',
    '18': 'I',
    '19': 'J',
    '20': 'K',
    '21': 'L',
    '22': 'M',
    '23': 'N',
    '24': 'O',
    '25': 'P',
    '26': 'Q',
    '27': 'R',
    '28': 'S',
    '29': 'T',
    '30': 'U',
    '31': 'V',
    '32': 'W',
    '33': 'X',
    '34': 'Y',
    '35': 'Z'
  };

if (num === 0) {
    result11005 = "0";
}

while (num > 0) {
    result11005 += objNew[num % system] || num % system
    num = Math.floor(num / system)
}

result11005 = result11005.split("").reverse().join("")

console.log(result11005);