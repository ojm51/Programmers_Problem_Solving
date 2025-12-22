const input = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n'); 
const N = Number(input[0]);
const houses = input.slice(1).map(e => e.split('').map(Number));

const visited = Array.from({ length: N }, () => Array(N).fill(false));
const apartment = [];

const dfs = (row, col) => {  
  if(row < 0 || col < 0 || row >= N || col >= N) return 0;
  if(houses[row][col] === 0 || visited[row][col]) return 0;
  
  visited[row][col] = true;
  
  let count = 1;
  count += dfs(row + 1, col);
  count += dfs(row - 1, col);
  count += dfs(row, col + 1);
  count += dfs(row, col - 1);
  
  return count;
}

for(let row = 0; row < N; row++) {
  for(let col = 0; col < N; col++) {
    if(houses[row][col] === 1 && !visited[row][col]) {
      const size = dfs(row, col);
      apartment.push(size);
    }
  }
}
apartment.sort((a, b) => a - b);

console.log(apartment.length);
console.log(apartment.join('\n'));