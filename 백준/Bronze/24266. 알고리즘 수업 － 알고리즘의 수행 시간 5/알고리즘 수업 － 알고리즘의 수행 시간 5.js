const input = require("fs").readFileSync('/dev/stdin').toString().trim(); 
const n = BigInt(input);

console.log((n ** 3n).toString());
console.log(3);