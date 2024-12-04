/* 
1. 주어진 수가 1인 경우에는 0을 리턴
2. 아니라면 1-1,2 과정을 결과가 1이 될 때까지 반복
3. 그 사이 작업 횟수가 500이 된다면 -1을 리턴
*/

function solution(num) {
    var answer = 0;
    if(num === 1) return answer;
    
    while(true) {
        if(answer === 500) {
            answer = -1;
            break;
        }        
        answer++;
        num = (num % 2) ? (num * 3 + 1) : (num / 2);
        if(num === 1) break;
    }
    
    return answer;
}

// 개선한 코드
function solution(num) {
    var answer = 0;
    
    while(answer < 500) {
        if(num === 1) return answer;
        answer++;
        num = (num % 2 === 0) ? (num / 2) : (num * 3 + 1);
    }
    
    return -1;
}
