const fs = require("fs");
const filePath = (process.platform === 'linux') ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n'); 

const T = Number(input[0]);
for(let i = 1; i <= T; i++) {
    console.log(`${input[i][0]}${input[i].slice(-1)}`);
}
