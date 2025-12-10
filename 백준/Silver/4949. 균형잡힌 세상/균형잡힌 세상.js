const input = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n'); 
const strs = input.slice(0, - 1);
const answer = [];

for(let str of strs) {
  let stack = [];
  let isPair = true;
  
  for(let char of str) {
    if(char === '(' || char === '[') stack.push(char);
    else if(char === ')') {
      if(stack.pop() !== '(') {
        isPair = false;
        break;
      }
    }
    else if(char === ']') {
      if(stack.pop() !== '[') {
        isPair = false;
        break;
      }
    }
  }
  
  answer.push(isPair && stack.length === 0 ? 'yes' : 'no');
}

console.log(answer.join('\n'));