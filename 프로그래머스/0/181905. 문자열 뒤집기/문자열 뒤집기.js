function solution(my_string, s, e) {
    const answer = [...my_string];
    const reversed_string = answer.slice(s, e + 1).reverse();
    
    for(let i = 0; i < e - s + 1; i++) {
        answer.splice(s + i, 1, reversed_string[i]);
    }
    
    return answer.join("");
}