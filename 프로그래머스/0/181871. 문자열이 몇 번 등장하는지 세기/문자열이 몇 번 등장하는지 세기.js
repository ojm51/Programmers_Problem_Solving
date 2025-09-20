function solution(myString, pat) {
    let answer = 0;
    let index = 0;
    
    while(true) {
        index = myString.indexOf(pat);
        if(index === -1) break;
        
        answer++;
        myString = myString.slice(index + 1);
    }
    
    return answer;
}