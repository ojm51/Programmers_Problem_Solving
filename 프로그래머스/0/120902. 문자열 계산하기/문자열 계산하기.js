function solution(my_string) {
    let array = my_string.split(" ");
    let stack = [];
    
    array.forEach(e => {
        // 배열 길이가 짝수일 때 연산
        if(stack.length !== 0 && stack.length % 2 === 0) {
            const operator = stack.pop();
            const num1 = Number(stack.pop());
            const num2 = Number(e);
            stack.push(operator === '+' ? num1 + num2 : num1 - num2);
        }
        // 아니라면 스택에 저장
        else stack.push(e);
    });
    
    return stack[0];
}