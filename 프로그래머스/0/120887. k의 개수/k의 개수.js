function solution(i, j, k) {
    const str_k = String(k);
    let answer = 0;
    
    for(let num = i; num <= j; num++) {
        const str_num = String(num);
        const new_num = str_num.split(str_k).join("");
        answer += str_num.length - new_num.length;
    }
    
    return answer;
}