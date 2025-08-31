function solution(str) {
    const answer = [];
    let word = '';
    
    str = str.trim();
    for(let i = 0; i < str.length; i++) {
        if(str[i] === ' ') continue;
        
        word += str[i];
        if(str[i + 1] === ' ' || i === str.length - 1) {
            answer.push(word);
            word = '';
        }
    }
    
    return answer;
}

// 개선한 코드
// 빈 문자열은 Falsy (<-> 빈 객체, 빈 배열은 Truthy)
const solution = (str) => str.split(" ").filter(char => char);
