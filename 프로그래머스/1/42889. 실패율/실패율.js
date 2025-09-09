/*
1. 각 스테이지를 돌며 실패율을 계산
2. 실패율 내림차순에 따라 스테이지 번호를 정렬
3. 실패율이 같다면 스테이지 번호가 작은 순으로 정렬
*/

function solution(N, stages) {
    const answer = [];
    const failures = {};
    
    // 스테이지별 실패율 계산
    for(let i = 1; i <= N; i++) {
        const all_users = stages.filter(stage => stage >= i).length;
        const unclear_users = stages.filter(stage => stage === i).length;
        const failure = unclear_users / all_users;
        failures[i] = failure;
    }
    
    // 실패율을 기준으로 내림차순 정렬
    const sorted_failures = Object.entries(failures).sort((a, b) => b[1] - a[1]);
    
    // 정렬된 실패율을 기준으로 스테이지 번호 정렬
    for(let element of sorted_failures) {
        answer.push(Number(element[0]));
    }
    
    return answer;
}