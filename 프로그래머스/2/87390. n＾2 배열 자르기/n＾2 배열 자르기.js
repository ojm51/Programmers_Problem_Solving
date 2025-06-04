/*
필요로 하는 left ~ right의 값만 구하기
1. 특정 인덱스의 행은 i를 n으로 나눴을 때의 몫
2. 특정 인덱스의 열은 i를 n으로 나눴을 때의 나머지
3. 특정 인덱스의 값은 (max(행, 열) + 1)한 값
*/

function solution(n, left, right) {
    var answer = [];
    
    for(let index = left; index < right + 1; index++) {
        let row = Math.floor(index / n);
        let col = index % n;
        let val = Math.max(row, col) + 1;
        
        answer.push(val);
    }
    
    return answer;
}