function solution(myString) {
    let answer = [...myString.toLowerCase()];
    
    for(let i = 0; i < answer.length; i++) {
        if(answer[i] === "a") answer[i] = answer[i].toUpperCase();
    }
    
    return answer.join("");
}