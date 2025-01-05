/*
1. 주어진 수를 toString(3)을 활용하여 3진법으로 변환
2. 변환한 수를 배열로 만들어 reverse()
3. 이어붙여 다시 10진법으로 변환
*/

function solution(n) {
    let trinary = n.toString(3).split('').reverse().join('');
    return parseInt(trinary, 3);
}