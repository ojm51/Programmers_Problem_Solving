const input = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n'); 
const lines = input.slice(1);
const answer = [];

lines.forEach(line => {
  const [num1, num2] = line.split(' ').map(Number).sort((a, b) => a - b);
  
  for(let i = 1; i <= num2; i++) {
    const candidate = num2 * i;
    if(candidate % num1 === 0) {
      answer.push(candidate);
      break;
    }
  }
});

console.log(answer.join('\n'));