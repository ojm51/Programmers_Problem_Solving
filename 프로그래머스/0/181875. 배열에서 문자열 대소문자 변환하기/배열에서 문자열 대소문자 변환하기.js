function solution(strArr) {
    const answer = [];
    
    for(let i = 0; i < strArr.length; i++) {
        answer[i] = ((i % 2 === 0) ? strArr[i].toLowerCase() : strArr[i].toUpperCase());
    }
    
    return answer;
}