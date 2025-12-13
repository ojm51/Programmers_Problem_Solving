const input = require("fs").readFileSync('/dev/stdin').toString().trim(); 
const [N, K] = input.split(' ').map(Number);

const circle = Array.from({ length: N }, (_, idx) => idx + 1);
const answer = [];

while(circle.length) {
  for(let i = 0; i < K - 1; i++) {
    circle.push(circle.shift());
  }
  answer.push(circle.shift());
}

console.log(`<${answer.join(', ')}>`);