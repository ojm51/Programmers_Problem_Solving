/*
1. for문을 돌며 signs 배열값이 참이면 그냥 더하고
2. signs 배열값이 거짓이면 -1을 곱해 더함
*/

function solution(absolutes, signs) {
    var answer = 0;
    const length = absolutes.length;
    for(let i = 0; i < length; i++) {
        if(signs[i]) {
            answer += absolutes[i];
            continue;
        }
        answer += (absolutes[i] * (-1));
    }
    return answer;
}

// 개선한 코드 1
function solution(absolutes, signs) {
    var answer = 0;
    const length = absolutes.length;
    for(let i = 0; i < length; i++) {
        answer += signs[i] ? absolutes[i] : -absolutes[i];
    }
    return answer;
}

// 개선한 코드 2
function solution(absolutes, signs) {
    return absolutes.reduce((acc, val, i) => acc + (signs[i] ? val : -val), 0);
}
