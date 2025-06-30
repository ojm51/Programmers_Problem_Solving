function solution(angle) {
    var answer = 0;
    
    if(0 < angle && angle < 90) answer = 1;
    else if(angle === 90) answer = 2;
    else if(90 < angle && angle < 180) answer = 3;
    else answer = 4;
    
    return answer;
}

// 개선한 코드
function solution(angle) {
    if(angle < 90) return 1;
    if(angle === 90) return 2;
    if(angle < 180) return 3;
    return 4;
}
