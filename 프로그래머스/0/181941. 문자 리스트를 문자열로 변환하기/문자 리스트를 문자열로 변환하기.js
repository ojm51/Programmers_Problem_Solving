function solution(arr) {
    let answer = '';
    
    for(let char of arr) {
        answer += char;
    }
    
    return answer;
}

// 개선한 코드
const solution = (arr) => arr.join("");
