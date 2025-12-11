const input = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n'); 
const lines = input.slice(1);
const answer = [];

const gcd = (a, b) => {
  while(b !== 0) {
    let temp = a % b;
    a = b;
    b = temp;
  }
  return a;
}

lines.forEach(line => {
  const [num1, num2] = line.split(' ').map(Number);
  const lcm = num1 * num2 / gcd(num1, num2);
  answer.push(lcm);
});

console.log(answer.join('\n'));