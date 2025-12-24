const input = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n'); 
const [N, M] = input[0].split(' ').map(Number);
const maze = input.slice(1).map(line => line.split('').map(Number));

const dist = Array.from({ length: N }, () => Array(M).fill(0));
const queue = [];
dist[0][0] = 1;
queue.push([0, 0]);

const directions = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1]
];
let head = 0;
while(head < queue.length) {
  const [x, y] = queue[head++];
  
  if(x === N - 1 && y === M - 1) {
    console.log(dist[x][y]);
    break;
  }
  
  for(let [dx, dy] of directions) {
    const nx = x + dx;
    const ny = y + dy;
    
    if(nx < 0 || ny < 0 || nx >= N || ny >= M) continue;
    if(maze[nx][ny] === 0) continue;  // 이동 불가 칸
    if(dist[nx][ny] !== 0) continue;  // 이미 방문 칸
    
    queue.push([nx, ny]);
    dist[nx][ny] = dist[x][y] + 1;
  }
}