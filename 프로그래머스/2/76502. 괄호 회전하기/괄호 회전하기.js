/*
1. slice로 회전시킨 새로운 문자열을 만듦
2. 스택을 활용하여 열린 괄호가 나오면 푸시, 닫힌 괄호가 나오면 팝
3. 현재 괄호가 스택에서 팝한 괄호와 짝을 이루면 +1
4. 문자열의 길이만큼 반복
*/

function solution(s) {
    let answer = 0;
    const len = s.length;
    const bracket = {
        ')': '(',
        '}': '{',
        ']': '['
    }
    
    for(let i = 0 ; i < len; i++) {
        let rotated = s.slice(i) + s.slice(0, i);
        let stack = [];
        let isValid = true;
        
        for(let j = 0; j < len; j++) {
            // 열린 괄호가 나온 경우 
            if(rotated[j] === '(' || rotated[j] === '{' || rotated[j] === '[') {
                stack.push(rotated[j]);
                continue;
            }
            
            // 닫힌 괄호가 나온 경우 
            if(stack.pop() !== bracket[rotated[j]]) {
                isValid = false;
                break;
            }
        }
        
        if(isValid && stack.length === 0) answer++;
    }
    
    return answer;
}