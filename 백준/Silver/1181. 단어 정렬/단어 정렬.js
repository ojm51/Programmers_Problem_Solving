const fs = require("fs");
const filePath = (process.platform === 'linux') ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n'); 

const words = new Set(input.slice(1));
const answer = [...words].sort((a, b) => {
    if(a.length === b.length) return a.localeCompare(b);
    return a.length - b.length;
});

console.log(answer.join('\n'));