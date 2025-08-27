function solution(strArr) {
    const answer = [];
    
    for(let str of strArr) {
        if(str.includes("ad")) continue;
        answer.push(str);
    }
    
    return answer;
}