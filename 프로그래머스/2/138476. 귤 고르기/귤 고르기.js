/*
1. 각 크기에 해당하는 귤이 몇 개씩 있는지 카운트
2. 크기별 귤 개수를 내림차순으로 정렬
3. 합이 k보다 커질 때까지 앞에서부터 차례대로 더함
4. 몇 종류의 귤이 필요한지 반환
*/

function solution(k, tangerine) {
    var answer = 0;
    let sizes = Array.from({length: Math.max(...tangerine)}, (undefined, i) => 0);
    // let sizes = Array(Math.max(...tangerine)).fill(0);
    
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

// 개선한 코드
function solution(k, tangerine) {
    var answer = 0;
    let sizeCount = new Map();
    
    for(let size of tangerine) {
        // sizeCount.set(size, 새로운 개수)
        // get: 존재하지 않으면 undefined 반환
        sizeCount.set(size, (sizeCount.get(size) || 0) + 1); 
    }
    
    let sortedCounts = [...sizeCount.values()].sort((a, b) => b - a);
    
    let sum = 0;
    for(let count of sortedCounts) {
        if(sum >= k) break;
        sum += count;
        answer++;
    }
    
    return answer;
}
