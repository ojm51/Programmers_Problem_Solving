const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];

rl.on('line', (line) => {
  input.push(line); 	
}).on('close', () => {
  const [a, b, c] = input.map(Number);
  
  console.log(a + b - c);
  console.log(String(a) + String(b) - c);
  
  process.exit(0);
});