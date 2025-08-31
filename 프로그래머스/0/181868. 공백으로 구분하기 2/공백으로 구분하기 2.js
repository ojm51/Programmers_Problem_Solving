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