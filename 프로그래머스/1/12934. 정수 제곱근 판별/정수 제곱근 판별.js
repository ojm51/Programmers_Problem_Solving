/*
1. Math.sqrt 함수로 제곱근을 구해 정수인지 판별 후
2. 1 이상의 값이 나오면 x+1의 제곱을 반환
3. 아니라면 -1을 반환시킴
*/

function solution(n) {
    var answer = 0;
    const sqrt = (Math.sqrt(n) % 1 === 0) ? Math.sqrt(n) : -1;
    answer = (sqrt >= 1) ? Math.pow(sqrt + 1, 2) : -1;
    
    return answer;
}