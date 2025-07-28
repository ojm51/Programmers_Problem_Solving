function solution(rsp) {
    const win = {
        "0": "5",
        "2": "0",
        "5": "2",
    };
    const arr = rsp.split("");
    let answer = '';
    
    for(let ele of arr) {
        answer += win[ele];
    }
    
    return answer;
}