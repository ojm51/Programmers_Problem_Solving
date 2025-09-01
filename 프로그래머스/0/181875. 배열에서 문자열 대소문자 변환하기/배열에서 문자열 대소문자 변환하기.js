function solution(strArr) {
    const answer = [];
    
    for(let i = 0; i < strArr.length; i++) {
        answer[i] = ((i % 2 === 0) ? strArr[i].toLowerCase() : strArr[i].toUpperCase());
    }
    
    return answer;
}

// 개선한 코드
const solution = (strArr) => strArr.map((str, idx) => (idx % 2 === 0) ? strArr[idx].toLowerCase() : strArr[idx].toUpperCase());
