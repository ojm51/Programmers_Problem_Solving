const input = require("fs").readFileSync('/dev/stdin').toString().trim(); 
const LEN = input.length;

let substrings = new Set();

for(let start = 0; start < LEN; start++) {
  for(let size = 1; size <= LEN - start; size++) {
    substrings.add(input.slice(start, start + size));
  }
}

console.log(substrings.size);