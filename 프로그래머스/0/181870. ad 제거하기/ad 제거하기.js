function solution(strArr) {
    const answer = [];
    
    for(let str of strArr) {
        if(str.includes("ad")) continue;
        answer.push(str);
    }
    
    return answer;
}

// 개선한 코드
const solution = (strArr) => strArr.filter(str => !str.includes('ad'));
