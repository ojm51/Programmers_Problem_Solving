function solution(my_string) {
    const arr = [...my_string];
    const answer = [];
    
    for (let ele of arr) {
        const num = Number.parseInt(ele);
        if (!Number.isNaN(num)) answer.push(num);
    }
    answer.sort((a, b) => a - b);
    
    return answer;
}
