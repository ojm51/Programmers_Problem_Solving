const input = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n'); 
const N = Number(input[0]);
const M = Number(input[2]);
const set = new Set(input[1].split(' ').map(Number));
const nums = (input[3].split(' ').map(Number));

const answer = [];
nums.forEach(num => answer.push(set.has(num) ? 1 : 0));

console.log(answer.join('\n'));