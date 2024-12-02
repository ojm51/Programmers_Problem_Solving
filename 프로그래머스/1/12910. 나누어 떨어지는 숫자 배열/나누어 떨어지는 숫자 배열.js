/*
1. 배열을 돌며 디바이서로 나누어 떨어지는 수를 배열에 삽입
2. 배열을 끝까지 돈 뒤에 만약 배열의 길이가 0이면 -1을 삽입
3. sort 함수를 이용해 오름차순으로 정렬 후 반환
*/

function solution(arr, divisor) {
    var answer = [];
    for (let element of arr) {
        if(!(element % divisor)) {
            answer.push(element);
        }
    }
    
    if(!answer.length) {
        answer.push(-1)
    }
    
    answer.sort((a, b) => {
        return a - b;
    });
    
    return answer;
}

// 개선한 코드
function solution(arr, divisor) {
    var answer = [];
    for (let element of arr) {
        if(!(element % divisor)) {
            answer.push(element);
        }
    }
        
    return answer.length ? (answer.sort((a, b) => a - b)) : [-1];
}
