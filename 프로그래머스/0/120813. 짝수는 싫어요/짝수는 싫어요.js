function solution(n) {
    const answer = [];
    
    for(let i = 1; i <= n; i++) {
        if(i % 2 === 1) answer.push(i);
    }
    
    return answer;
}