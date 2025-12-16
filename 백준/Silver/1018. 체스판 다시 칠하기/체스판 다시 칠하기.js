const input = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n'); 
const [N, M] = input[0].split(' ').map(Number);
const board = input.slice(1);

let recolorCount = N * M;

for(let startRow = 0; startRow <= N - 8; startRow++) {
  for(let startCol = 0; startCol <= M - 8; startCol++) {
    let startWithWhite = 0;
    let startWithBlack = 0;

    for(let i = 0; i < 8; i++) {
      for(let j = 0; j < 8; j++) {
        if(((startRow + i) + (startCol + j)) % 2 === 0) {
          if(board[startRow + i][startCol + j] !== 'W') startWithWhite++;
          if(board[startRow + i][startCol + j] !== 'B') startWithBlack++;
        }
        else {
          if(board[startRow + i][startCol + j] !== 'B') startWithWhite++;
          if(board[startRow + i][startCol + j] !== 'W') startWithBlack++;
        }
      }
    }
    
    recolorCount = Math.min(recolorCount, startWithWhite, startWithBlack);
  }
}

console.log(recolorCount);