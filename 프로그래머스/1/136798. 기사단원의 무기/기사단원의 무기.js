/*
power = 제한 공격력보다 오버된 공격력을 가진 무기를 필요로 하는 기사가 쓸 대체 공격력 
1. 1부터 number까지 각 수의 약수 개수를 구함
2. 만약 제한 공격력보다 큰 공격력을 필요로 한다면 제한 공격력으로 대체
3. 필요한 철 무게의 합을 반환
+) 약수는 짝으로 존재(주어진 수의 제곱근까지만 검사)
*/

function solution(number, limit, power) {
    let answer = 0;
    
    // 모든 수
    for(let i = 1; i <= number; i++) {
        
        // 각 수의 약수
        let count = 0;
        for(let j = 1; j * j <= i; j++) {
            if(i % j === 0) {
                count++;
                if(j !== Math.floor(i / j)) count++;
            }
        }
        
        answer += (count > limit) ? power : count;
    }
    
    return answer;
}