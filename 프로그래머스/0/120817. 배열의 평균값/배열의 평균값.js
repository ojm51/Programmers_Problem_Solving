function solution(numbers) {
    let answer = 0;
    
    for(let number of numbers) answer += number;
    answer /= numbers.length;
    
    return answer;
}