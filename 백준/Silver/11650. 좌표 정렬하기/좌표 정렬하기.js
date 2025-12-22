const input = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n'); 
const coords = input.slice(1).map(coord => coord.split(' ').map(Number));

coords.sort((a, b) => {
  if(a[0] > b[0]) return 1;
  if(a[0] < b[0]) return -1;
  return a[1] - b[1];
});

const answer = coords.map(([x, y]) => `${x} ${y}`);
console.log(answer.join('\n'));