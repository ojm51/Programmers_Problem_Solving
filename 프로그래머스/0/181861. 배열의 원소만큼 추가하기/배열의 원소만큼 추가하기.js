function solution(arr) {
    const answer = [];
    
    for(let a of arr) {
        const newArr = Array(a).fill(a);
        answer.push(...newArr);
    }
    
    return answer;
}

// 개선한 코드
const solution = (arr) => arr.reduce((answer, a) => [...answer, ...Array(a).fill(a)], []);
