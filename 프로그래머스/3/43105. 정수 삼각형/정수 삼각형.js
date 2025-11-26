/*
1. 현재 노드에 부모 노드를 더한 값을 각각 구해
2. 두 개의 값 중 더 큰 값을 누적합에 저장
3. 가리키는 값이 undefined라면 0으로 취급하거나 건너뜀
4. 삼각형을 처음부터 끝까지 돌며 위의 과정 반복
5. 누적합 삼각형의 마지막 줄에 모든 누적합이 모이므로 해당 줄에서 최댓값을 찾아 반환
*/

function solution(triangle) {
    const height = triangle.length;
    
    let dp = triangle.map(row => Array(row.length).fill(0));
    dp[0][0] = triangle[0][0];
    
    for(let row = 1; row < height; row++) {
        for(let col = 0; col < triangle[row].length; col++) {
            const fromTop = dp[row - 1][col] ?? 0;
            const fromLeftTop = dp[row - 1][col - 1] ?? 0;
            
            dp[row][col] = triangle[row][col] + Math.max(fromTop, fromLeftTop);
        }
    }
    
    return Math.max(...dp[height - 1]);
}