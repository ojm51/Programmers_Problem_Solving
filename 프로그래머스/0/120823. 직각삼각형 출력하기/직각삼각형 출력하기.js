const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = 0;

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    for(let i = 0; i < input; i++) {
        let line = '';
        for(let j = 0; j <= i; j++) {
            line += '*';
        }
        console.log(line);
    }
});