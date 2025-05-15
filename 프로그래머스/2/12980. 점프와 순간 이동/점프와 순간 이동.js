/*
역으로 생각해보기
1. 짝수면 공짜 순간이동 사용 -> 짝수 / 2
2. 홀수면 배터리 사용하여 점프 -> 홀수 - 1
3. 0이 될 때까지 반복하며 홀수였던 횟수를 반환
*/

function solution(n) {
    var ans = 0;
    
    while(n > 0) {
        if(n % 2 === 0) n /= 2;
        else {
            n -= 1;
            ans++;
        }
    }

    return ans;
}