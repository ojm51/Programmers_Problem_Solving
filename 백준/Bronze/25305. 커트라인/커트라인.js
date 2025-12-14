const input = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n'); 
const [N, k] = input[0].split(' ').map(Number);
const candidate = input[1].split(' ').map(Number).sort((a, b) => b - a);

console.log(candidate[k - 1]);