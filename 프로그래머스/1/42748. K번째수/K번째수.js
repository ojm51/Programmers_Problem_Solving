/*
1. slice를 활용하여 i번째 숫자부터 j번째 숫자까지 자르고
2. 자른 배열을 정렬한 뒤
3. k번째에 있는 수를 정답 배열에 추가
4. commands 안에 있는 모든 조건에 대해 위의 과정을 반복
*/

function solution(array, commands) {
    let answer = [];
    
    const i = 0, j = 1, k = 2;
    for(let command of commands) {
        let slicedArr = array.slice(command[i] - 1, command[j]);
        slicedArr.sort((a, b) => a - b);
        
        let num = slicedArr[command[k] - 1] ?? slicedArr[0];
        answer.push(num);
    }
    
    return answer;
}