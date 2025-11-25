/*
(참고)
dp[행][열] = dp[row][col]
입력 좌표 = [x, y] = [col, row]
*/

function solution(m, n, puddles) {
    const MOD = 1000000007;
    
    // 해당 지점까지 갈 수 있는 경로의 개수
    let dp = Array.from({ length: n }, () => Array(m).fill(0));
    dp[0][0] = 1;   // 시작점(집)은 1로 초기화
    
    // 웅덩이 위치
    let isPuddle = Array.from({ length: n }, () => Array(m).fill(false));
    puddles.forEach(([col, row]) => isPuddle[row - 1][col - 1] = true);
    
    for(let row = 0; row < n; row++) {
        for(let col = 0; col < m; col++) {
            if(isPuddle[row][col]) {
                dp[row][col] = 0;
                continue;
            }
            if(row === 0 && col === 0) continue;
            
            const top = (row > 0) ? dp[row - 1][col] : 0;
            const left = (col > 0) ? dp[row][col - 1] : 0;
            
            dp[row][col] = (left + top) % MOD;
        }
    }
    
    return dp[n - 1][m - 1];
}