const input = require("fs").readFileSync('/dev/stdin').toString().trim(); 
const n = BigInt(input);

console.log((n * (n - 1n) * (n - 2n) / 6n).toString());
console.log(3);