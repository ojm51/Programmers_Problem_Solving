/*
1. 시작 원소부터 n개(1~길이)의 원소를 더해 
2. 만들 수 있는 수를 Set에 저장
3. 오름차순 정렬 후 반환
*/

function solution(elements) {
    let seqSet = new Set();
    const N = elements.length;
    let answer = 0;
    
    // 기준 설정1: 수열의 길이(더할 원소 개수)
    for(let i = 1; i <= N; i++) {
        
        // 기준 설정2: 시작 원소
        for(let j = 0; j < N; j++) {
            let seq = 0;
            
            // 실제 더하기: 시작 원소에서 수열의 길이만큼
            for(let k = 0; k < i; k++) {
                seq += elements[(j + k) % N];
            }
            seqSet.add(seq);
        }
    }
    answer = seqSet.size;
    
    return answer;
}

// 개선한 코드
function solution(elements) {
    const seqSet = new Set();
    const N = elements.length;
    const extended = elements.concat(elements);
    
    // 기준 설정1: 수열의 길이(더할 원소 개수)
    for(let len = 1; len <= N; len++) {
        let seq = 0;
        
        // 기준 설정2: 시작 원소
        for(let start = 0; start < N; start++) {
            if(start === 0) {
                // 첫 번째 윈도우는 직접 계산
                for(let i = 0; i < len; i++) {
                    seq += extended[i];
                }
            }
            else {
                // 슬라이딩 윈도우: 앞에 하나 빼고, 뒤에 하나 더함
                seq = seq - extended[start - 1] + extended[start + len - 1];
            }
            
            seqSet.add(seq);
        }
    }
    
    return seqSet.size;
}
