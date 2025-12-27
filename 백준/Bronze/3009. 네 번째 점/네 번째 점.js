const input = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n'); 

const xMap = new Map();
const yMap = new Map();
for(let line of input) {
  const [x, y] = line.split(' ').map(Number);
  xMap.set(x, (xMap.get(x) ?? 0) + 1);
  yMap.set(y, (yMap.get(y) ?? 0) + 1);
}

let missingX = 0;
for(let [key, value] of xMap) {
  if(value === 1) missingX = key;
}

let missingY = 0;
for(let [key, value] of yMap) {
  if(value === 1) missingY = key;
}

console.log(missingX, missingY);