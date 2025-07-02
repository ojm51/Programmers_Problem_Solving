function solution(numbers) {
    let answer = 0;
    
    for(let number of numbers) answer += number;
    answer /= numbers.length;
    
    return answer;
}

// 개선한 코드
function solution(numbers) {
    return numbers.reduce((acc, curr) => acc + curr) / numbers.length;
}
