/*
알파벳
1. 각 자리에 올바른 알파벳을 만들기 위해 필요한 조작수를 구함
2. 차례로 움직일 때 드는 조작수와 역으로 움직일 때 드는 조작수를 비교해 최소값을 선택
커서
3. 커서는 한번에 끝까지 가는 방법, 연속된 A를 피해 오른쪽으로 갔다가 다시 왼쪽으로, 왼쪽으로 갔다가 다시 오른쪽으로 되돌아오는 방법 존재
4. 위의 방법 중 최소값을 선택
*/

function solution(name) {
    const codeA = 'A'.charCodeAt(0);
    const codeZ = 'Z'.charCodeAt(0);
    let answer = 0;
    
    // 알파벳 조작수
    for(let i = 0; i < name.length; i++) {
        let alphaMoves = Math.min(
            name.charCodeAt(i) - codeA, 
            codeZ - name.charCodeAt(i) + 1
        );
        answer += alphaMoves;
    }
    
    // 커서 조작수
    let cursorMoves = name.length - 1;
    for(let i = 0; i < name.length; i++) {
        let next = i + 1;
        
        while(next < name.length && name[next] === 'A') next++;
        
        cursorMoves = Math.min(
            cursorMoves, 
            i * 2 + name.length - next,
            i + (name.length - next) * 2
        );
    }
    answer += cursorMoves;
    
    return answer;
}