/*
1. 항상 가로 > 세로가 되도록 정렬
2. 각각의 최댓값을 구함
3. 너비를 반환
*/

function solution(sizes) {
    var answer = 0;
    
    const rotated = sizes.map(([w, h]) => [Math.max(w, h), Math.min(w, h)]);
    const maxWidth = Math.max(...rotated.map(([w, _]) => w));
    const maxHeight = Math.max(...rotated.map(([_, h]) => h));
    answer = maxWidth * maxHeight;
    
    return answer;
}