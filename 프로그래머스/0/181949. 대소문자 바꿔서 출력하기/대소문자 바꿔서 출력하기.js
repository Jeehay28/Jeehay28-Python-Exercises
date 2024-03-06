const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    
    const answer = [...str].map(item => item.charCodeAt() >= 65 && item.charCodeAt() <= 90 ? 
                item.toLowerCase() : item.toUpperCase()).join("");
    
    console.log(answer)
});
