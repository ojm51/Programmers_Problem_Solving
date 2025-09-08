function solution(numbers, direction) {
    const len = numbers.length;
    const answer = Array(len);
    
    if(direction === 'right') {
        numbers.forEach((num, i) => {
            if(i + 1 === len) answer[0] = num;
            else answer[i + 1] = num;
        });
    }
    else {
        numbers.forEach((num, i) => {
            if(i - 1 === -1) answer[len - 1] = num;
            else answer[i - 1] = num;
        });
    }
    
    return answer;
}

// 개선한 코드
function solution(numbers, direction) {
    const answer = [...numbers];
    
    if(direction === 'right') answer.unshift(answer.pop());
    else answer.push(answer.shift());
    
    return answer;
}
