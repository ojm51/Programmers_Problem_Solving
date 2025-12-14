const input = require("fs").readFileSync('/dev/stdin').toString().trim();
const [N, M] = input.split(' ').map(Number);

const visited = new Array(N + 1).fill(false);
const seq = [];
const answer = [];

const dfs = (depth) => {
  if(depth === M) {
    answer.push(seq.join(' '));
    return;
  }
  
  for(let i = 1; i <= N; i++) {
    if(visited[i]) continue;
    
    visited[i] = true;
    seq.push(i);
    
    dfs(depth + 1);
    
    visited[i] = false;
    seq.pop();
  }
}

dfs(0);
console.log(answer.join('\n'));