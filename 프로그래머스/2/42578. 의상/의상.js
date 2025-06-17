/*
1. 각 의상들의 개수를 종류별로 Map 저장
2. 각 의상을 입거나 안 입는 경우를 포함하여 (개수 + 1)한 값들의 곱을 구하고
3. 아무것도 입지 않은 경우를 제외(-1)하여 반환
*/

function solution(clothes) {
    const clothMap = new Map();
    for(let [item, type] of clothes) {
        clothMap.set(type, (clothMap.get(type) || 0) + 1);
    }
    
    let answer = 1;
    for(let val of clothMap.values()) {
        answer *= (val + 1);
    }
    
    return answer - 1;
}