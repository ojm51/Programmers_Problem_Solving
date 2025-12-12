const input = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n'); 
const nums = input.map(Number).sort((a, b) => a - b);

let avg = nums.reduce((acc, cur) => acc + cur, 0) / nums.length;
let mid = nums[Math.floor(nums.length / 2)];
const answer = [avg, mid];

console.log(answer.join('\n'));