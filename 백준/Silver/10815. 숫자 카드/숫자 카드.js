const input = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n'); 
const myCards = new Set(input[1].split(' ').map(Number));
const cardList = input[3].split(' ').map(Number);

let answer = cardList.map(card => myCards.has(card) ? 1 : 0);

console.log(answer.join(' '));