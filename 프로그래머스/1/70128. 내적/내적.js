/*
1. for문을 돌며 인덱스 0부터 (길이 - 1)까지 
2. a[i] 값과 b[i] 값을 곱해서 answer에 더함
*/

function solution(a, b) {
    let answer = 0;
    const length = a.length;
    
    for(let i = 0; i < length; i++) {
        answer += a[i] * b[i];
    }
    
    return answer;
}

// 개선한 코드
function solution(a, b) {
    return a.reduce((acc, cur, index) => acc += cur * b[index], 0);
}
