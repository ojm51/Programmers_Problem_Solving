/*
1. 배열에서 맨 앞 요소를 unshift
2. 꺼낸 요소가 다른 요소들보다 크거나 같으면 실행
3. 작다면 큐의 맨 뒤로 보냄
4. 이 과정에서 타겟 프로세스의 인덱스 값도 업데이트
 4-1. 과정이 진행될 때마다 인덱스-1
 4-2. 인덱스가 0이라면 다시 맨 뒤로
5. 위의 과정 반복
*/

function solution(priorities, location) {
    let answer = 0;
    
    while(priorities.length > 0) {
        const LEN = priorities.length;
        let first = priorities.shift();
        
        if(first >= Math.max(...priorities)) {
            answer++;
            if(location === 0) break;
        }
        else priorities.push(first);
        
        location = (location + LEN - 1) % LEN;
    }
    
    return answer;
}