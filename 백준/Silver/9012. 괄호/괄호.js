const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];

rl.on('line', (line) => {
  input.push(line); 	
}).on('close', () => {
  const T = input[0];
  
  for(let i = 1; i <= T; i++) {
    const stack = [];
    let isValid = true;
    
    for(let str of input[i]) {
      if(str === '(') stack.push(str);
      else {
        if(stack.length === 0) {
          isValid = false;
          break;
        }
        else stack.pop();
      } 
    }
    if(stack.length !== 0) isValid = false;
    
    console.log(isValid ? 'YES' : 'NO');
  }

  process.exit(0);
});