/*
1. 문자열을 배열에 저장
2. 문자를 하나씩 읽어나가며
3. 인덱스가 현재-1부터 0보다 클 때까지의 요소 중 같은 문자가 있는지 비교
4. 없다면 정답 배열에 -1을 저장
5. 있다면 정답 배열에 가장 가까운 요소까지의 거리를 저장
6. 위의 과정을 배열의 마지막까지 반복
*/

function solution(s) {
    let answer = [];
    let index = 0;
    
    const str = [...s];
    for(let i = 0; i < str.length; i++) {
        answer[index] = -1;
        for(let j = i - 1; j >= 0; j--) {
            if(str[i] === str[j]) {
                answer[index] = i - j;
                break;
            }
        }
        index++;
    }
    
    return answer;
}

// 개선한 코드
function solution(s) {
    let answer = [];
    
    const str = [...s];
    for(let i = 0; i < str.length; i++) {
        const lastIndex = s.slice(0, i).lastIndexOf(str[i]);
        if(lastIndex !== -1) {
            answer.push(i - lastIndex);
            continue;
        }
        answer.push(-1);
    }
    
    return answer;
}

// gpt 개선 코드
function solution(s) {
    let answer = [];
    let lastIndexMap = {};
    
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (lastIndexMap[char] !== undefined) {
            answer.push(i - lastIndexMap[char]);
        } else {
            answer.push(-1);
        }
        lastIndexMap[char] = i;
    }
    
    return answer;
}
