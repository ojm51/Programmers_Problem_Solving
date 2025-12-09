const input = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n'); 
const [N, M] = input[0].split(' ').map(Number);
const strList = new Set(input.slice(1, N + 1));
const strs = input.slice(N + 1);

let answer = 0;
strs.forEach(str => strList.has(str) ? answer++ : '');

console.log(answer);