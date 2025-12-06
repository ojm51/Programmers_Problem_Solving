const fs = require("fs");
const filePath = (process.platform === 'linux') ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n'); 

const nums = input.slice(1).map(Number).sort((a, b) => a - b);
console.log(nums.join('\n'));