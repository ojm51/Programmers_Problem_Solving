const input = require("fs").readFileSync('/dev/stdin').toString().trim(); 
const N = Number(input);

let count = N;
for(let numFive = Math.floor(N / 5); numFive >= 0; numFive--) {
  if((N - numFive * 5) % 3 === 0) {
    const numThree = (N - numFive * 5) / 3;
    count = Math.min(count, numFive + numThree);
  }
}

console.log((count === N) ? -1 : count);