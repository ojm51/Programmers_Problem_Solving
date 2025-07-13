function solution(n) {
    const sqrt = Math.sqrt(n);
    let answer = 0;
    
    for(let i = 1; i <= sqrt; i++) {
        if(n % i === 0) answer++; 
    }
    answer = answer * 2;
    
    if(Number.isInteger(sqrt)) answer--;
    
    return answer;
}