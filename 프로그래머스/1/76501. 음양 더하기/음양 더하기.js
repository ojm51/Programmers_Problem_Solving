/*
1. for문을 돌며 signs 배열값이 참이면 그냥 더하고
2. signs 배열값이 거짓이면 -1을 곱해 더함
*/

function solution(absolutes, signs) {
    return absolutes.reduce((acc, val, i) => acc + (signs[i] ? val : -val), 0);
}