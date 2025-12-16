const input = require("fs").readFileSync('/dev/stdin').toString().trim(); 
const N = Number(input);

let count = N;
for(let numFive = 0; numFive <= N / 5; numFive++) {
  for(let numThree = 0; numThree <= N / 3; numThree++) {
    if(numFive * 5 + numThree * 3 > N) break;
    if(numFive * 5 + numThree * 3 === N) count = Math.min(count, numFive + numThree);
  }
}

console.log((count === N) ? -1 : count);