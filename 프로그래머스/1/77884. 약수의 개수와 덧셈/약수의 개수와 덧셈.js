/*
1. 주어진 수의 범위 안에서 각 수의 약수 개수를 구함
2. 약수의 개수가 짝수인 수는 더하고, 
3. 약수의 개수가 홀수인 수는 뺌
*/

function solution(left, right) {
    var answer = 0;
    
    for(let i = left; i <= right; i++) {
        let countDivisor = 0;
        
        for(let j = 1; j <= i; j++) {
            if(i % j === 0) countDivisor++;
        }
        
        answer += (countDivisor % 2 === 0) ? i : -i;
    }
    
    return answer;
}

// 개선한 코드
// +) 제곱근이 정수면, 약수의 개수가 홀수다
function solution(left, right) {
    var answer = 0;
    
    for(let i = left; i <= right; i++) {
        answer += Number.isInteger(Math.sqrt(i)) ? -i : i;
    }
    
    return answer;
}
