/*
1. 배열의 길이가 1이면 -1 리턴
2. 배열을 내림차순으로 정렬한하여 마지막 요소 = 가장 작은 수를 알아냄
3. 기존 배열에서 해당 수의 인덱스를 검색하여
4. 0부터 해당 인덱스 전 요소까지, 그리고 해당 인덱스 다음부터 끝까지의 요소로 재구성
*/

function solution(arr) {    
    if(arr.length === 1) return [-1];
    
    let answer = [...arr];      // 원본 배열 복사
    arr.sort((a, b) =>  a - b);
    
    const index = answer.indexOf(arr[0]);
    answer = answer.slice(0, index).concat(answer.slice(index + 1));
    
    return answer;
}

// 개선한 코드
function solution(arr) {    
    if(arr.length === 1) return [-1];
    
    const min = Math.min(...arr);
    const index = arr.indexOf(min);
    const answer = arr.slice(0, index).concat(arr.slice(index + 1));
    
    return answer;
}
