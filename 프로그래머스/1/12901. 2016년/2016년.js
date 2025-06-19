/*
윤년: 2월 29일이 있는 달
1. 각 요일과 한 달이 며칠로 이루어져 있는지에 대한 정보를 상수로 정의
2. a월 b일이 1월 1일로부터 며칠이 지났는지 계산
*/

function solution(a, b) {
    const DAYS = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const MONTH_DAYS = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let answer = '';
    
    let dayPassed = 0;
    for(let i = 0; i < a - 1; i++) {
        dayPassed += MONTH_DAYS[i];
    }
    dayPassed += b;
    answer = DAYS[(dayPassed + 4) % 7];
    
    return answer;
}