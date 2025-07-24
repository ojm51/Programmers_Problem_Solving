function solution(array) {
    const sortedArr = array.sort((a, b) => a - b);
    const index = Math.trunc(array.length / 2);
    
    return array[index];
}