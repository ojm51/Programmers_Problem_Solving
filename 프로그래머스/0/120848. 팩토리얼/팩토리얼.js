function solution(n) {
    let answer = 1;
    let result = 1;
    
    while(result <= n) {
        answer++;
        result *= answer;
    }
    
    return answer - 1;
}