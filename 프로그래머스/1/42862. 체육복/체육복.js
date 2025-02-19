/*
1. 체육복의 수대로 학생들의 번호를 배열에 나열
2. 도난 당한 학생의 번호는 삭제
3. 체육복이 없는 학생일 때, 앞뒤 차례대로 2벌을 가진 학생이 있는지 확인
4. 체육복을 1-2벌 가진 학생수를 반환
한 벌, 한 벌인데 도난(0), 두 벌인데 도난(1), 두 벌
*/

function solution(n, lost, reserve) {
    var answer = 0;
    let clothes = Array(n).fill(1);
    
    // 여벌 체육복 및 도난 체육복 처리
    for(let i = 0; i < n; i++) {
        if(reserve.indexOf(i + 1) !== -1) clothes[i]++;
        if(lost.indexOf(i + 1) !== -1) clothes[i]--;
    }
    
    // 체육복 대여 처리
    for(let i = 0; i < n; i++) {
        if(clothes[i] === 0) {
            if(i > 0 && clothes[i - 1] === 2) {
                clothes[i]++;
                clothes[i - 1]--;
            }
            else if(i < n - 1 && clothes[i + 1] === 2) {
                clothes[i]++;
                clothes[i + 1]--;
            }
        }
    }
    
    answer = clothes.filter(count => count > 0).length;
    
    return answer;
}