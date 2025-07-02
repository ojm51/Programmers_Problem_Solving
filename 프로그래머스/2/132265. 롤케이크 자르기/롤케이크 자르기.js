/*
1. 왼쪽 사람이 모든 토핑을 가지고 있다고 가정하고 맵 생성
2. 토핑을 배열 순서대로 하나씩 오른쪽으로 옮기며 
3. 양쪽 사람이 가진 토핑수를 비교
4. 토핑수가 같으면 정답+1
*/

function solution(topping) {
    let answer = 0;
    
    const left = new Map();
    const right = new Map();
    
    for(let item of topping) {
        left.set(item, (left.get(item) || 0) + 1);
    }
    
    for(let item of topping) {
        // 왼쪽의 토핑을 오른쪽으로 이동
        right.set(item, (right.get(item) || 0) + 1);
        
        // 왼쪽의 토핑을 제거
        left.set(item, left.get(item) - 1); 
        if (left.get(item) === 0) left.delete(item);
        
        // 토핑 종류 수 비교
        if(left.size === right.size) answer++;
    }
    
    return answer;
}
