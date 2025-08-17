function solution(myString) {
    const code = "l".charCodeAt();
    const answer = [...myString];
    
    for(let i = 0; i < myString.length; i++) {
        if(myString.charCodeAt(i) < code) answer[i] = "l";
    }
    
    return answer.join("");
}