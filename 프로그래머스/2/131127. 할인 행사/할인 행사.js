/*
1. 할인 품목 배열을 돌며 10일치 할인 품목이 각각 몇 개인지 맵으로 카운트(슬라이딩 윈도우 활용)
2. 원하는 품목 맵과 10일치 할인 품목 맵이 같은지 확인
3. 같았던 횟수를 반환
*/

function solution(want, number, discount) {
    let answer = 0;
    
    // 원하는 품목을 카운트
    const wantMap = new Map();
    for(let i = 0; i < want.length; i++) {
        wantMap.set(want[i], number[i]);
    }
    
    // 10일치씩 잘라서 과정 수행
    for(let i = 0; i <= discount.length - 10; i++) {
        const sliced = discount.slice(i, i + 10);
        
        // 10일치 할인 품목 카운트
        const countMap = new Map();
        for(let item of sliced) {
            countMap.set(item, (countMap.get(item) || 0) + 1);
        }

        // 원하는 품목과 할인 품목이 일치하는지 확인
        let isMatch = true;
        for(let [key, value] of wantMap) {
            if(value !== countMap.get(key)) {
                isMatch = false; 
                break;
            }
        }

        if(isMatch) answer++;
    } 
    
    return answer;
}

// 개선한 코드 
function solution(want, number, discount) {
    let answer = 0;

    // 객체로 선언
    const wantObj = {};
    for(let i = 0; i < want.length; i++) {
        wantObj[want[i]] = number[i];
    }
    
    for(let i = 0; i <= discount.length - 10; i++) {
        const sliced = discount.slice(i, i + 10);
        
        const countObj = {};
        for(let item of sliced) {
            countObj[item] = (countObj[item] || 0) + 1;
        }

        let isMatch = true;
        for(let key in wantObj) {
            if(wantObj[key] !== countObj[key]) {
                isMatch = false; 
                break;
            }
        }

        if(isMatch) answer++;
    } 
    
    return answer;
}
