/*
1. 첫 기능부터 차례로 배포에 걸리는 시간을 계산
2. 앞 기능 개발에 걸리는 시간 안에 다음 기능을 완료할 수 있으면 배포 기능수+1
3. 완료할 수 없다면 전 것까지만 배포
4. 위의 과정을 반복
*/

function solution(progresses, speeds) {
    const answer = [];
    let prevDays = Math.ceil((100 - progresses[0]) / speeds[0]);
    let done = 1;
    
    for(let i = 1; i < progresses.length; i++) {
        let currDays = Math.ceil((100 - progresses[i]) / speeds[i]);
        
        if(currDays <= prevDays) done++;
        else {
            answer.push(done);
            done = 1;
            prevDays = currDays; 
        }
    }
    answer.push(done);
    
    return answer;
}

// 개선한 코드
function solution(progresses, speeds) {
    const answer = [];
    const days = progresses.map((progress, idx) => Math.ceil((100 - progress) / speeds[idx]));
    
    let prev = days[0];
    let done = 1;
    
    for(let i = 1; i < days.length; i++) {
        if(days[i] <= prev) done++;
        else {
            answer.push(done);
            prev = days[i]; 
            done = 1;
        }
    }
    answer.push(done);
    
    return answer;
}
