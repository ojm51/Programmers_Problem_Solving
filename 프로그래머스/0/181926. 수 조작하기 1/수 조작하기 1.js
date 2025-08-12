function solution(n, control) {
    const response = {
        "w" : 1,
        "s" : -1,
        "d" : 10,
        "a" : -10,
    };
    let answer = n;
    
    for(let char of control.split("")) {
        answer += response[char];
    }
    
    return answer;
}