const input = require("fs").readFileSync('/dev/stdin').toString().trim(); 
const str = [...input].map(Number).sort((a, b) => b - a).join('');
console.log(str);