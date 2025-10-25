/*
n = 1미터 단위
1. 전체 영역 중 재색칠해야 하는 첫 번째 영역부터 롤러의 길이만큼 색칠
2. 횟수+1 하고 롤러 길이만큼 영역을 뛰어넘음
3. 남은 영역에서 재색칠 영역이 없을 때까지 위의 과정 반복
*/

function solution(n, m, section) {
    const len = section.length;
    let answer = 0;
    let paintedEnd = -1;
    
    for(let i = 0; i < len; i++) {
        if(section[i] <= paintedEnd) continue;
        answer++;
        paintedEnd = section[i] + m - 1;
    }
    
    return answer;
}