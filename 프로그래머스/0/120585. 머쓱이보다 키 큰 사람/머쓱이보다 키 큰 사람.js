function solution(array, height) {
    let answer = 0;
    
    const taller = array.filter((ele) => ele > height);
    answer = taller.length;
    
    return answer;
}