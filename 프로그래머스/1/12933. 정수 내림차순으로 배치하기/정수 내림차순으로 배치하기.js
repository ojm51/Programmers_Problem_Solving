/*
1. 주어진 수를 10으로 나눈 나머지를 배열에 삽입
2. 주어진 수를 10으로 나눈 몫이 0보다 클 때까지 반복
3. 각 자릿수를 저장한 배열을 sort 함수로 내림차순 정렬
4. 정렬된 배열을 순회하며 각 요소에 10의 n제곱을 곱하고 모두 더한 값을 반환
*/

function solution(n) {
    var answer = 0;
    let nums = [];
    while(n > 0) {
        nums.push(Math.floor(n % 10));
        n = Math.floor(n / 10);
    }
    
    nums.sort((a, b) => {
        return b - a;
    });
    
    let index = 0;
    for(let i = nums.length - 1; i >= 0; i--) {
        answer += nums[index] * Math.pow(10, i);
        index++;
    }
    return answer;
}