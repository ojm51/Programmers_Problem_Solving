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