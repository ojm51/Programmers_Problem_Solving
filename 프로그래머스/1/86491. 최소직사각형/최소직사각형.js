/*
1. 항상 가로 > 세로가 되도록 정렬
2. 각각의 최댓값을 구함
3. 너비를 반환
*/

function solution(sizes) {
    var answer = 0;
    
    let widths = [];
    let heights = [];
    for(let i = 0; i < sizes.length; i++) {
        if(sizes[i][0] < sizes[i][1]) {
            widths.push(sizes[i][1]);
            heights.push(sizes[i][0]);
            continue;
        }
        widths.push(sizes[i][0]);
        heights.push(sizes[i][1]);
    }
    
    const maxWidth = Math.max(...widths);
    const maxHeight = Math.max(...heights);
    answer = maxWidth * maxHeight;
    
    return answer;
}

// 개선한 코드
function solution(sizes) {
    var answer = 0;
    
    const rotated = sizes.map(([w, h]) => [Math.max(w, h), Math.min(w, h)]);
    const maxWidth = Math.max(...rotated.map(([w, _]) => w));
    const maxHeight = Math.max(...rotated.map(([_, h]) => h));
    answer = maxWidth * maxHeight;
    
    return answer;
}
