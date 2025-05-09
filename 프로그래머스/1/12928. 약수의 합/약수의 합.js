/*
1. i를 1부터 n까지 하나씩 늘려가며
2. i로 n을 나눴을 때, 나누어 떨어지는 i를 모두 더함
*/

function solution(n) {
    var answer = 0;
    
    for(let i = 1; i <= n; i++) {
        if(n % i === 0) answer += i;
    }
    
    return answer;
}