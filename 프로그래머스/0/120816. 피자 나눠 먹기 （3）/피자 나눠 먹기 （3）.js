function solution(slice, n) {
    let answer = 1;
    
    while(true) {
        if(Math.trunc(answer * slice / n) > 0) break;
        answer++;
    }
    
    return answer;
}