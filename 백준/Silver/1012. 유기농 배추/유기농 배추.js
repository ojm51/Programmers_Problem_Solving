const input = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n'); 
const T = Number(input[0]);

const answer = [];

let idx = 1;
for(let t = 0; t < T; t++) {
  const [M, N, K] = input[idx++].split(' ').map(Number);
  
  const field = Array.from({ length: M }, () => Array(N).fill(0));
  for(let i = 0; i < K; i++) {
    const [x, y] = input[idx++].split(' ').map(Number);
    field[x][y] = 1;
  }
  
  const visited = Array.from({ length: M }, () => Array(N).fill(false));
  
  const dfs = (row, col) => {
    if(row < 0 || col < 0 || row >= M || col >= N) return;
    if(field[row][col] === 0) return;;
    if(visited[row][col]) return;
    
    visited[row][col] = true;
    
    dfs(row + 1, col);
    dfs(row - 1, col);
    dfs(row, col + 1);
    dfs(row, col - 1);
  };
  
  let worm = 0;
  for(let i = 0; i < M; i++) {
    for(let j = 0; j < N; j++) {
      if(field[i][j] === 1 && !visited[i][j]) {
        dfs(i, j);
        worm++;
      }
    }
  }
  
  answer.push(worm);
}

console.log(answer.join('\n'));