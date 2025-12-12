const input = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n'); 
const nums = input.slice(1).map(Number).sort((a, b) => a - b);

console.log(nums.join('\n'));