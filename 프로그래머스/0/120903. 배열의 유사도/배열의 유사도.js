function solution(s1, s2) {
    let answer = 0;
    
    for(let element of s1) {
        if(s2.includes(element)) answer++;
    }
    return answer;
}