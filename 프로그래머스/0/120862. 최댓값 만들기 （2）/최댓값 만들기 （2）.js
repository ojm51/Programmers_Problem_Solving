function solution(numbers) {
    const len = numbers.length;
    numbers.sort((a, b) => a - b);
    return Math.max(numbers[0] * numbers[1], numbers[len - 1] * numbers[len - 2]);
}