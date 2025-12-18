const input = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n'); 
const [N, M, R] = input[0].split(' ').map(Number);

const edges = Array.from({ length: N + 1 }, () => []);
// 무방향 그래프이므로 u, v 두 정점 모두에 간선을 추가
for(let i = 1; i <= M; i++) {
  const [u, v] = input[i].split(' ').map(Number);
  edges[u].push(v);
  edges[v].push(u);
}
// 정점을 돌며 이어진 간선을 오름차순으로 정렬
for(let i = 1; i <= N; i++) {
  edges[i].sort((a, b) => a - b);
}

const visited = Array(N + 1).fill(false);
const order = Array(N + 1).fill(0);
let count = 1;

const dfs = (node) => {
  visited[node] = true;
  order[node] = count++;
  
  for(let nextNode of edges[node]) {
    if(!visited[nextNode]) dfs(nextNode);
  }
}

dfs(R);

console.log(order.slice(1).join('\n'));