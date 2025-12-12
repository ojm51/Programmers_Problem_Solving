const input = require("fs").readFileSync('/dev/stdin').toString().trim(); 
const n = Number(input);

const fib = (count) => {
  if(count === 1 || count === 2) return 1;
  return fib(count - 1) + fib(count - 2);
}

const recursion = fib(n);
const dp = n - 2;

console.log(recursion, dp);