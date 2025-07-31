function solution(my_string) {
    let answer = '';
    
    for(let char of my_string) {
        answer += (char.toUpperCase() === char) ? char.toLowerCase() : char.toUpperCase();
    }
    
    return answer;
}