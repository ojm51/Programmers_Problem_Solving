const input = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n'); 
const n = Number(input[0]);

let answer = 0;

if(n !== 0) {
  const levels = input.slice(1).map(Number).sort((a, b) => a - b);
  const cutNum = Math.round(n * 0.15);
  const cutLevels = levels.slice(cutNum, n - cutNum);
  
  answer = Math.round(cutLevels.reduce((acc, cur) => acc + cur, 0) / cutLevels.length);
}

console.log(answer);