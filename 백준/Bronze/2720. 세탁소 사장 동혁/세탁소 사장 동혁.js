const fs = require("fs");
const filePath = (process.platform === 'linux') ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n'); 

const T = Number(input[0]);
const coins = [25, 10, 5, 1];

for(let i = 1; i <= T; i++) {
    let change = Number(input[i]);
    let answer = [];
    
    coins.forEach(coin => {
        answer.push(Math.floor(change / coin));
        change %= coin;
    });
    
    console.log(answer.join(' '));
}