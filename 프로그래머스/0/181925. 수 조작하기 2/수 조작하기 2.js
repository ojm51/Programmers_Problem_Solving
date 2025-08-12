function solution(numLog) {
    const control = {
        "1": "w",
        "-1" : "s",
        "10" : "d",
        "-10" : "a",
    };
    let answer = '';
    
    for(let i = 1; i < numLog.length; i++) {
        const diff = (numLog[i] - numLog[i - 1]).toString();
        answer += control[diff];
    }
    
    return answer;
}