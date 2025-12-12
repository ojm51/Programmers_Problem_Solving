const input = require("fs").readFileSync('/dev/stdin').toString().trim(); 

console.log((input - 1) * input / 2);
console.log(2);