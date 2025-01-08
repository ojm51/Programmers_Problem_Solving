/*
1. 아스키 코드를 활용
2. 공백이라면 건너뜀
3. 알파벳이 대문자이고 Z보다 크면 -A, 작으면 그대로
4. 알파벳이 소문자이고 z보다 크면 -a, 작으면 그대로
*/

function solution(s, n) {
    let answer = [...s];
    
    for(let i = 0; i < s.length; i++) {
        if(s[i] === ' ') continue;
        
        let ascii = s[i].charCodeAt();
        let encoded = ascii + n;
        if(ascii <= 'Z'.charCodeAt()) {
            if(encoded > 'Z'.charCodeAt()) encoded += 'A'.charCodeAt() - 'Z'.charCodeAt() - 1;
        }
        else {
            if(encoded > 'z'.charCodeAt()) encoded += 'a'.charCodeAt() - 'z'.charCodeAt() - 1;
        }
        
        answer[i] = String.fromCharCode(encoded);
    }
    
    return answer.join("");
}