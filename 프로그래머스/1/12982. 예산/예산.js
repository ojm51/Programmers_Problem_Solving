/*
1. 신청 금액 배열을 오름차순으로 정렬한 뒤
2. 앞에서부터 차례대로 예산보다 작을 때까지 더함
3. 지원 가능 부서의 개수를 반환
*/

function solution(d, budget) {
    var answer = 0;
    let sum = 0;
    
    d.sort((a, b) => a - b);
    
    while(sum <= budget) {
        sum += d[answer];
        answer++;
    }
    
    return answer - 1;
}