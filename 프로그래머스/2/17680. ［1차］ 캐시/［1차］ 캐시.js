/*
1. 도시를 차례로 돌며 대문자로 통일 및 캐시에 존재하는지 확인
2. 존재하면 해당 도시를 잘라내고 +1
3. 존재하지 않으면 마지막 요소를 잘라내고 +5
4. 현재 도시를 맨 앞에 추가
5. 위의 과정 반복
*/

function solution(cacheSize, cities) {
    let answer = 0;
    const cache = [];
    
    for(let city of cities) {
        city = city.toUpperCase();
        
        const idx = cache.indexOf(city);
        
        // hit
        if(idx !== -1) {
            answer += 1;
            cache.splice(idx, 1);
        }
        // miss
        else {
            answer += 5;
            if(cache.length >= cacheSize) cache.pop();
        }
        
        if(cacheSize > 0) cache.unshift(city);
    }
    return answer;
}