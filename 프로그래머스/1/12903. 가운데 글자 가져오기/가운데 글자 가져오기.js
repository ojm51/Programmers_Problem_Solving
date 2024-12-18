/*
1. 문자열을 배열로 저장
2. 길이가 홀수면 2로 나누어 내림한 인덱스에 해당하는 문자 반환
3. 길이가 짝수면 2로 나눈 값과 -1한 인덱스에 해당하는 문자을 이어붙인 문자열 반환 
*/

function solution(s) {
    const strArr = [...s];
    const length = strArr.length;
    if(length % 2) {
        return strArr[Math.floor(length / 2)];
    }
    return strArr[length / 2 - 1] + strArr[length / 2];
}