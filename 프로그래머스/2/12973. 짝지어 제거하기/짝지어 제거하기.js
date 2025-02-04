/*
1. 문자열을 하나씩 돌며 다음 알파벳과 일치하는지 비교
2. 일치한다면 해당 알파벳을 제거
3. 제거한 문자열로 위의 과정을 반복
4. 문자열의 마지막에 도달한다면 0을 리턴
5. 문자열의 길이가 0이라면 1을 리턴
*/

function solution(s) {
    let stack = [];
    let index = 1;
    
    stack.push(s[0]);
    while(true) {
        if(index === s.length && stack.length === 0) return 1;
        if(index === s.length && stack.length !== 0) return 0;
        
        if(stack[stack.length - 1] === s[index]) {
            stack.pop();
            index++;
            continue;
        }
        stack.push(s[index]);
        index++;
    }
}

// function solution(s) {
//     let index = 0;
    
//     while(true) {
//         if(s.length === 0) return 1;
//         if(index === s.length - 1) return 0;
        
//         if(s[index] === s[index + 1]) {
//             s = s.slice(0, index) + s.slice(index + 2);
//             index = 0;
//             continue;
//         }        
//         index++;
//     }
// }