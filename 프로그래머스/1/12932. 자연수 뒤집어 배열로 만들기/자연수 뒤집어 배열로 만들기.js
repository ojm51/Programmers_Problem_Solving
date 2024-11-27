/*
1. 주어진 수를 10으로 나눈 나머지를 배열에 삽입
2. 주어진 수를 10으로 나눈 몫을 다음 수로 두고
3. 몫이 0보다 큰 경우에 위의 과정을 반복
*/

function solution(n) {
    var answer = [];
    while(n > 0) {
        answer.push(Math.floor(n % 10));
        n = Math.floor(n / 10);
    }
    return answer;
}