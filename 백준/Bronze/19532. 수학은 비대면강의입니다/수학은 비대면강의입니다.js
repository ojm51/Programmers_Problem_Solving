const input = require("fs").readFileSync('/dev/stdin').toString().trim(); 
const [a, b, c, d, e, f] = input.split(' ').map(Number);

for(let x = -999; x < 1000; x++) {
  for(let y = -999; y < 1000; y++) {
    const isFunc1 = (a * x + b * y === c);
    const isFunc2 = (d * x + e * y === f);
    
    if(isFunc1 && isFunc2) {
      console.log(x, y);
      return;
    }
  }
}