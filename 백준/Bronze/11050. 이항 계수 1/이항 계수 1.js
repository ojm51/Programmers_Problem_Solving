const input = require("fs").readFileSync('/dev/stdin').toString().trim(); 
const [N, K] = input.split(' ').map(Number);

const factorialN = Array(N + 1).fill(1);
for(let i = 2; i <= N; i++) {
  factorialN[i] = factorialN[i - 1] * i;
}
const answer = factorialN[N] / (factorialN[K] * factorialN[N - K]);

console.log(answer);