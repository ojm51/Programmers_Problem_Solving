const input = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n'); 
const [N, M] = input.slice(0, 2).map(Number);

const graph = Array.from({ length: N + 1 }, () => []);
for(let i = 2; i <= M + 1; i++) {
  const [u, v] = input[i].split(' ').map(Number);
  graph[u].push(v);
  graph[v].push(u);
}

const visited = Array(N + 1).fill(false);
const dfs = (node) => {
  visited[node] = true;
  for(let nextNode of graph[node]) {
    if(visited[nextNode]) continue;
    dfs(nextNode);
  }
};

dfs(1);
console.log(visited.filter(e => e).length - 1);