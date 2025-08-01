function solution(n) {
    const answer = [];
    
    for(let i = 1; i <= Math.sqrt(n); i++) {
        if(n % i === 0) {
            if(i ** 2 === n) {
                answer.push(i);
                continue;
            }
            answer.push(i, Math.trunc(n / i));
        }
    }
    
    return answer.sort((a, b) => a - b);
}