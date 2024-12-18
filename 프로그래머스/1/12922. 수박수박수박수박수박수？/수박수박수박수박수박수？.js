/*
1. i가 1부터 n까지
2. i가 홀수면 "수"를
3. i가 짝수면 "박"을 문자열에 이어붙임
*/

function solution(n) {
    let answer = '';
    
    for(let i = 1; i <= n; i++) {
        const alpha = (i % 2 === 1) ? "수" : "박";
        answer += alpha;
    }
    
    return answer;
}