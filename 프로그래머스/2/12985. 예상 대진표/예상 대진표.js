/*
1. n번째 참가자는 다음 라운드에서 Math.ceil(n/2)번째 참가자가 됨
2. 따라서 주어진 두 수를 Math.ceil()하며 같은 번호가 될 때까지
3. 거친 횟수를 반환
*/

function solution(n,a,b) {
    var answer = 0;

    while(a !== b) {
        a = Math.ceil(a/2);
        b = Math.ceil(b/2);
        answer++;
    }

    return answer;
}