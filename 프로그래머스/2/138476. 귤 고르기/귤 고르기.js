/*
1. 각 크기에 해당하는 귤이 몇 개씩 있는지 카운트
2. 크기별 귤 개수를 내림차순으로 정렬
3. 합이 k보다 커질 때까지 앞에서부터 차례대로 더함
4. 몇 종류의 귤이 필요한지 반환
*/

function solution(k, tangerine) {
    var answer = 0;
    
    let sizes = Array.from({length: Math.max(...tangerine)}, (undefined, i) => 0);
    for(let item of tangerine) {
        sizes[item - 1]++;
    }
    sizes.sort((a, b) => b - a);
    
    let sum = 0;
    for(let size of sizes) {
        if(sum >= k) break;
        sum += size;
        answer++;
    }
    
    return answer;
}