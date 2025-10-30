function solution(maps) {
    const n = maps.length;       // 행 길이
    const m = maps[0].length;    // 열 길이
  
    // 방향 벡터(상, 하, 좌, 우)
    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];
    
    const queue = [[0, 0, 1]]; // [x, y, 이동거리]
    const visited = Array.from({ length: n }, () => Array(m).fill(false));
    visited[0][0] = true;  // 방문 처리

    while (queue.length) {
        const [x, y, dist] = queue.shift();

        // 상대 팀 진영 도달
        if (x === n - 1 && y === m - 1) return dist;

        // 상하좌우 탐색
        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];

            // 지도 범위 내
            if ((nx >= 0 && ny >= 0) && (nx < n && ny < m)) {
                // 벽이 아니고, 방문하지 않은 곳
                if (maps[nx][ny] === 1 && !visited[nx][ny]) {
                    visited[nx][ny] = true;
                    queue.push([nx, ny, dist + 1]);
                }
            }
        }
    }

  return -1;
}
