/*
에라토스테네스의 체
*/

function solution(n) {
    const isPrime = new Array(n + 1).fill(true);
    isPrime[0] = false;
    isPrime[1] = false;
    
    for(let i = 2; i <= Math.sqrt(n); i++) {
        if(isPrime[i]) {
            for(let j = i * i; j <= n; j += i) {
                isPrime[j] = false;
            }
        }
    }
    
    return isPrime.filter(v => v).length;
}

/*
효율성 테스트 실패
1. 2부터 n까지 
2. 1과 자기 자신으로만 나누어지는 수인지 판단
3. 소수의 개수를 반환
*/

// function solution(n) {
//     let answer = 0;
    
//     for(let i = 2; i <= n; i++) {
//         let isPrime = true;
        
//         for(let j = 2; j <= Math.sqrt(i); j++) {
//             if(i % j === 0) {
//                 isPrime = false;
//                 break;
//             }
//         }
        
//         if(isPrime) answer++;
//     }
    
//     return answer;
// }