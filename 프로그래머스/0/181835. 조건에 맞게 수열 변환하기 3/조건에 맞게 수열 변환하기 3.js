function solution(arr, k) {
    const answer = [];
    
    if(k % 2 !== 0) {
        for(let ele of arr) {
            answer.push(ele * k);
        }
    }
    else {
        for(let ele of arr) {
            answer.push(ele + k);
        }
    }
    
    return answer;
}

// 개선한 코드
const solution = (arr, k) => arr.map(ele => (k % 2 !== 0) ? ele * k : ele + k);
