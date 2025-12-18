const input = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n'); 
const [N, M, R] = input[0].split(' ').map(Number);

const edges = Array.from({ length: N + 1 }, () => []);
for(let i = 1; i <= M; i++) {
  const [u, v] = input[i].split(' ').map(Number);
  edges[u].push(v);
  edges[v].push(u);
}
for(let edge of edges) {
  edge.sort((a, b) => b - a);
}

const visited = Array(N + 1).fill(false);
const order = Array(N + 1).fill(0);
let count = 1;

const dfs = (node) => {
  visited[node] = true;
  order[node] = count;
  count++;
  
  for(let nextNode of edges[node]) {
    if(!visited[nextNode]) dfs(nextNode);
  }
}

dfs(R);
console.log(order.slice(1).join('\n'));