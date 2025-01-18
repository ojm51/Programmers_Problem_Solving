/*
1. 빈 병 개수를 주어야 하는 병 개수로 나누어 그 몫을 정답에 더함
2. 이전 빈 병 개수와 몫을 뺀 병 개수, 그리고 몫을 더한 값을 다시 기준 빈 병 개수로 설정
3. 위의 과정을 결과값이 주어야 하는 병 개수보다 작거나 같을 때까지 반복
*/

function solution(give, get, myBottles) {
    let answer = 0;
    let bottles = myBottles;
    
    while (bottles >= give) {
        let cola = Math.floor(bottles / give) * get;
        answer += cola;
        bottles = (bottles % give) + cola;
    } 
    
    return answer;
}