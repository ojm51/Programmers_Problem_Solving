function solution(order) {
    let answer = 0;
    
    [...String(order)].forEach(item => {
        if(Number(item) !== 0 && Number(item) % 3 === 0) answer++
    });
    
    return answer;
}