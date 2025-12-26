const input = require("fs").readFileSync('/dev/stdin').toString().trim(); 
const [N, K] = input.split(' ').map(Number);
const MAX = 100000;

const queue = [];
const time = Array(MAX + 1).fill(-1);
queue.push(N);
time[N] = 0;

let head = 0;
while(head < queue.length) {
  const current = queue[head++]; // 현위치
  
  if(current === K) {
    console.log(time[current]);
    break;
  }
  
  for(let next of [current - 1, current + 1, current * 2]) {
    if(next < 0 || next > MAX) continue;
    if(time[next] !== -1) continue;
    
    queue.push(next);
    time[next] = time[current] + 1;
  }
}