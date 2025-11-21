// 최소 힙으로 풀이

function solution(scoville, K) {
    const heap = [];
    
    // 힙에 새로운 값 삽입
    function heap_push(value) {
        heap.push(value);
        
        let index = heap.length - 1;
        while(index > 0) {
            const parent_index = Math.floor((index - 1) / 2);
            
            if(heap[parent_index] <= heap[index]) break;
            [heap[parent_index], heap[index]] = [heap[index], heap[parent_index]];
            index = parent_index;
        }
    }
    
    // 힙 최솟값 삭제
    function heap_pop() {
        if(heap.length === 0) return undefined;
        if(heap.length === 1) return heap.pop();
        
        const top = heap[0];
        heap[0] = heap.pop();
        
        let index = 0;
        while(true) {
            const left_index = index * 2 + 1;
            const right_index = index * 2 + 2;
            let min_index = index;
            
            if(left_index < heap.length && heap[left_index] < heap[min_index]) min_index = left_index;
            if(right_index < heap.length && heap[right_index] < heap[min_index]) min_index = right_index;
            if(min_index === index) break;
            
            [heap[index], heap[min_index]] = [heap[min_index], heap[index]];
            index = min_index;
        }
        
        return top;
    }
    
    // 힙 최솟값 조회
    function heap_peek() {
        return heap[0];
    }
    
    let answer = 0;
    
    for(let s of scoville) {
        heap_push(s);
    }
    
    while(heap.length >= 2 && heap_peek() < K) {
        const first_min = heap_pop();
        const second_min = heap_pop();
        heap_push(first_min + second_min * 2);
        answer++;
    }
    
    return heap_peek() >= K ? answer : -1;
}

/*
효율성 테스트 실패
1. 음식을 오름차순으로 정렬
2. 지수가 가장 낮은 음식이 K보다 작은지 비교
3. 크다면 정답 반환
4. 작다면 정답+1하고 새로운 스코빌 지수를 계산
5. 위 과정 반복
*/

// function solution(scoville, K) {
//     const sorted_sco = [...scoville].sort((a, b) => a - b);
//     let answer = 0;
    
//     while (sorted_sco.length > 0) {
//         if (sorted_sco[0] >= K) return answer;
//         if (sorted_sco.length === 1) return -1;

//         const first = sorted_sco.shift();
//         const second = sorted_sco.shift();
//         const new_sco = first + second * 2;

//         sorted_sco.push(new_sco);
//         sorted_sco.sort((a, b) => a - b);

//         answer++;
//     }
// }