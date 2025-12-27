const input = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n'); 
const [A, B] = input.map(Number);
console.log(A * B);