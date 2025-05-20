/*
n번째 칸까지 가는 방법의 수 
= (n-1)칸까지 가는 방법 + (n-2)칸까지 가는 방법
= 피보나치 수열
*/

function solution(n) {
    if(n < 3) return n;
    
    var answer = 0;
    let sum = 0;
    let last1 = 1;
    let last2 = 2;
    
    for(let i = 3; i <= n; i++) {
        sum = (last1 + last2) % 1234567; // 오버플로우 방지
        last1 = last2;
        last2 = sum;
    }
    answer = sum;
    
    return answer;
}