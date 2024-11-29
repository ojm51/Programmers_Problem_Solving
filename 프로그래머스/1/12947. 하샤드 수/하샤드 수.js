/*
1. 주어진 수를 10으로 나눈 나머지를 더함
2. 위의 과정을 주어진 수를 10으로 나눈 몫이 0보다 클 때까지 반복
3. 주어진 수를 합으로 나누었을 때 나머지가 0이면 하샤드 수
*/

function solution(x) {
    var answer = true;
    let number = x;
    let sum = 0;
    while(number > 0) {
        sum += number % 10;
        number = Math.floor(number / 10);
    }
    answer = (x % sum === 0) ? true : false;
    return answer;
}