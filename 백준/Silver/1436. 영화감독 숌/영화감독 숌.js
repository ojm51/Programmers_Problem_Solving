const input = require("fs").readFileSync('/dev/stdin').toString().trim();
const N = Number(input);

let answer = 666;
let count = 0;

while(true) {
  if(String(answer).includes('666')) count++;
  if(count === N) break;
  answer++;
}

console.log(answer);