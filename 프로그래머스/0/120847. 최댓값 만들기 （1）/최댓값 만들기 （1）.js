function solution(numbers) {
    const sorted_numbers = numbers.sort((a, b) => b - a);
    const answer = sorted_numbers[0] * sorted_numbers[1];
    
    return answer;
}