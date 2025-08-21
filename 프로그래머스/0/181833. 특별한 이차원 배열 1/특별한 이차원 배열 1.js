function solution(n) {
    const answer = [];
    
    for(let i = 0; i < n; i++) {
        const row = new Array(n).fill(0);
        answer.push(row);
    }
    
    for(let i = 0; i < n; i++) {
        answer[i][i] = 1;
    }
    
    return answer;
}