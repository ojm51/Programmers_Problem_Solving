/*
1. 배열을 하나씩 돌며
2. 현재 요소를 기준으로 다음 요소들을 비교
3. 정답+1 하다가 현재 요소보다 작은 요소가 나오면 +1 중단
4. 위의 과정 반복
*/

function solution(prices) {
    const answer = new Array(prices.length).fill(0);
    
    for(let i = 0; i < prices.length - 1; i++) {
        for(let j = i + 1; j < prices.length; j++) {
            answer[i]++;
            if(prices[i] > prices[j]) break;
        }
    }
    
    return answer;
}