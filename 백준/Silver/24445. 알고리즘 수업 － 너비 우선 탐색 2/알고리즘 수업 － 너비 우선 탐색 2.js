const input = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n'); 
const [N, M, R] = input[0].split(' ').map(Number);

const graph = Array.from({ length: N + 1 }, () => []);
for(let i = 1; i <= M; i++) {
  const [u, v] = input[i].split(' ').map(Number);
  graph[u].push(v);
  graph[v].push(u);
}
for(let i = 1; i <= N; i++) {
  graph[i].sort((a, b) => b - a);
}

const order = Array(N + 1).fill(0);
const queue = [];
let count = 1;

order[R] = count++;
queue.push(R);

let head = 0;
while(head < queue.length) {
  const node = queue[head++];
  
  for(let nextNode of graph[node]) {
    if(order[nextNode] === 0) {
      order[nextNode] = count++;
      queue.push(nextNode);
    }
  }
}

console.log(order.slice(1).join('\n'));