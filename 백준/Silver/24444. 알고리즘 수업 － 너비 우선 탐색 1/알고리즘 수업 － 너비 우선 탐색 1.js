const input = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n'); 
const [N, M, R] = input[0].split(' ').map(Number);

const edges = Array.from({ length: N + 1 }, () => []);
for(let i = 1; i <= M; i++) {
  const [u, v] = input[i].split(' ').map(Number);
  edges[u].push(v);
  edges[v].push(u);
}
for(let edge of edges) {
  edge.sort((a, b) => a - b);
}

const order = Array(N + 1).fill(0);
let count = 1;

const queue = [];
order[R] = count++;
queue.push(R);

while(queue.length > 0) {
  const node = queue.shift();
  
  for(let nextNode of edges[node]) {
    if(order[nextNode] === 0) {
      order[nextNode] = count++;
      queue.push(nextNode);
    }
  }
}

console.log(order.slice(1).join('\n'));