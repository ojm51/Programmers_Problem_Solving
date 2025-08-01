function solution(my_string, num1, num2) {
    const arr = [...my_string];
    const temp = arr[num1];
    
    arr[num1] = arr[num2];
    arr[num2] = temp;
    
    return arr.join("");
}

// 개선한 코드
function solution(my_string, num1, num2) {
    const arr = [...my_string];
    
    [arr[num1], arr[num2]] = [arr[num2], arr[num1]];
    
    return arr.join("");
}
