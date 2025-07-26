function solution(hp) {
    const powers = [5, 3, 1];
    let answer = 0;
    
    for(let power of powers) {
        answer += Math.trunc(hp / power);
        hp %= power;
    }
    
    return answer;
}