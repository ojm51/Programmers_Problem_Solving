function solution(arr) {
    const answer = [];
    
    for(let a of arr) {
        const newArr = Array(a).fill(a);
        answer.push(...newArr);
    }
    
    return answer;
}