/*
1. 배열을 돌며 Map에 포켓몬 종류를 저장
2. 키의 개수가 N/2보다 크면 N/2 반환
3. 작으면 키의 개수 반환
*/

function solution(nums) {
    const MAX = Math.floor(nums.length / 2);
    const pokemon = new Set(nums);
    
    let answer = (pokemon.size >= MAX) ? MAX : pokemon.size;
    
    return answer;
}