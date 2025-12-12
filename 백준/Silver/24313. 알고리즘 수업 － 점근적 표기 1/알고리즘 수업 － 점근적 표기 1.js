const input = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n'); 
const [a1, a0] = input[0].split(' ').map(Number);
const c = Number(input[1]);
const n0 = Number(input[2]);

const fn = (a1 * n0) + a0;
const gn = n0;

console.log((a1 <= c && fn <= c * gn) ? 1 : 0);