/*
1. strings[i][n]의 알파벳을 각 단어의 맨 앞에 임시로 붙임
2. 1번 과정을 거친 단어들을 사전순으로 정렬
3. 임시로 붙인 맨 앞의 알파벳을 제거 후 반환
*/

function solution(strings, n) {
    let answer = strings;
    let i = 0;
    const length = answer.length;
    
    for(i = 0; i < length; i++) {
        answer[i] = answer[i][n] + answer[i];
    }
    
    answer.sort();
    
    for(i = 0; i < length; i++) {
        answer[i] = answer[i].slice(1, answer[i].length);
    }
    
    return answer;
}