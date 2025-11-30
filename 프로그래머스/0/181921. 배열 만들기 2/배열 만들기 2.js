function solution(l, r) {
    const regex = /^[05]+$/;
    let answer = [];
    
    for(let i = l; i <= r; i++) {
        let strNum = String(i);
        if(regex.test(strNum)) answer.push(i);
    }
    
    return (answer.length === 0) ? [-1] : answer.sort((a, b) => a - b);
}