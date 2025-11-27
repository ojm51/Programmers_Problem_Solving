function solution(code) {
    let answer = '';
    let mode = 0;
    
    [...code].map((c, idx) => {
        if(mode === 1) {
            if(c === '1') mode = 0;
            else answer += (idx % 2 !== 0) ? c : '';
        }
        else {
            if(c === '1') mode = 1;
            else answer += (idx % 2 === 0) ? c : '';
        }
    });
    
    return answer.length === 0 ? 'EMPTY' : answer;
}