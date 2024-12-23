/*
1. 첫 번째 for문은 i가 0부터 배열의 길이-2까지 돌고
2. 두 번째 for문은 j가 i+1부터 배열의 길이-1까지 돌며
3. 세 번째 for문은 k가 j+1부터 배열의 길이까지 돌며
4. 각 인덱스에 담긴 요소를 더했을 때 0이 되면 answer+1을 함
*/

function solution(number) {
    let answer = 0;
    
    const length = number.length;
    for(let i = 0; i < length - 2; i++) {
        for(let j = i + 1; j < length - 1; j++) {
            for(let k = j + 1; k < length; k++) {
                if(number[i] + number[j] + number[k] === 0) answer++;
            }
        }
    }
    
    return answer;
}