const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [...line];
}).on('close',function(){
    input.forEach((e, idx) => {
        if(e.charAt() >= 'a') input[idx] = e.toUpperCase();
        else input[idx] = e.toLowerCase();
    });
    console.log(input.join(""));
});