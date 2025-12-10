const input = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n'); 
const nums = input.slice(1).map(Number);

let stack = [];
nums.forEach(num => num === 0 ? stack.pop() : stack.push(num));

console.log(stack.reduce((acc, cur) => acc + cur, 0));