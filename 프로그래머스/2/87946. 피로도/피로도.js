/*
1. 던전을 백트래킹으로 돌며
2. 방문했던 곳이 아니고, 최소 피로도를 만족하면 탐색 후 방문한 곳으로 체크
3. 아니라면 방문하지 않은 곳으로 수정
*/


function solution(k, dungeons) {
    const visited = new Array(dungeons.length).fill(false);
    let count = 0;
    let answer = 0;

    function explore(k, dungeons, visited, count) {
        answer = Math.max(answer, count);

        for(let i = 0; i < dungeons.length; i++) {
            const [need, use] = dungeons[i];
            
            if(!visited[i] && k >= need) {
                visited[i] = true;
                explore(k - use, dungeons, visited, count + 1);
                visited[i] = false;
            }
        }
    }

    explore(k, dungeons, visited, count);
    
    return answer;
}