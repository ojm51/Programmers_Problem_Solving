const input = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n'); 
const [N, M, V] = input[0].split(' ').map(Number);
const answer = [];

const edges = Array.from({ length: N + 1 }, () => []);
for(let i = 1; i <= M; i++) {
  const [u, v] = input[i].split(' ').map(Number);
  edges[u].push(v);
  edges[v].push(u);
}
for(let edge of edges) {
  edge.sort((a, b) => a - b);
}

let visited = Array(N + 1).fill(false);

// ------------- DFS --------------
const resultDFS = [];
const dfs = (node) => {
  if(visited[node]) return;
  
  visited[node] = true;
  resultDFS.push(node);
  
  for(let nextNode of edges[node]) {
    dfs(nextNode);
  }
}
dfs(V);
answer.push(resultDFS.join(' '));

visited = visited.map(() => false);

// ------------- BFS --------------
const queue = [];
let head = 0;

queue.push(V);
visited[V] = true;

while(head < queue.length) {
  const node = queue[head++];
  
  for(let nextNode of edges[node]) {
    if(visited[nextNode]) continue;
    visited[nextNode] = true;
    queue.push(nextNode);
  }
}
const resultBFS = [...queue];
answer.push(resultBFS.join(' '));

console.log(answer.join('\n'));