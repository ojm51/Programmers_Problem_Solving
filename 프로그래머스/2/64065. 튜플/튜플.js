/*
1. 특정 튜플을 표현하는 집합에 담긴 문자열을 살펴봤을 때
2. 모든 문자열에 포함된 문자가 튜플의 첫 번째 값
3. 이전보다 하나 적은 개수로 포함된 문자가 두 번째 값이 되며
4. 마지막에 가장 많이 나온 문자 순서대로 튜플을 만들어 반환
*/

function solution(s) {
    const strs = s.slice(2, s.length - 2).split("},{");
    const charMap = new Map();
    let answer = [];
    
    for(let str of strs) {
        const arr = str.split(",");
        
        for(let char of arr) {
            const num = Number.parseInt(char);
            charMap.set(num, (charMap.get(num) || 0) + 1);
        }
    }
    
    const sortedMap = new Map([...charMap].sort((a, b) => b[1] - a[1]));
    
    for(let item of sortedMap.keys()) answer.push(item);
    
    return answer;
}