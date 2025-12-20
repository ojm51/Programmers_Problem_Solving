const input = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n'); 
const answer = [];

for(let line of input) {
  const [a, b, c] = line.split(' ').map(Number).sort((a, b) => a - b);
  if(a === 0 && b === 0 && c === 0) break;
  
  answer.push((a ** 2 + b ** 2 === c ** 2) ? 'right' : 'wrong');
}

console.log(answer.join('\n'));