/*
1. 주어진 음식의 개수를 2로 나누어 내림한 수만큼
2. 해당 인덱스의 음식으로 정답 문자열을 채움
3. 1번에서 구한 수까지 도달했다면 문자열에 0(물)을 이어붙이고
4. 그 뒤에 2번에서 구한 문자열을 거꾸로 이어붙임
*/

function solution(food) {
    let answer = '';
    
    for(let i = 1; i < food.length; i++) {
        for(let j = 0; j < Math.floor(food[i] / 2); j++) {
            answer += i;
        }
    }
    
    let arr = [...answer].reverse();
    answer += 0 + arr.join('');
    
    return answer;
}