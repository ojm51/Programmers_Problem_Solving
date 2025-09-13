function solution(n) {
    function isPrime(num) {
        for (let i = 2; i * i <= num; i++) {
            if (num % i === 0) return false;
        }
        return true;
    }
    
    let countPrime = 0;
    for (let i = 2; i <= n; i++) {  
        if (isPrime(i)) countPrime++;
    }
    
    return n - 1 - countPrime;  
}

// 에라토스테네스의 체
function solution(n) {
    const isPrime = new Array(n + 1).fill(true);
    isPrime[0] = isPrime[1] = false;
    
    for(let i = 2; i * i <= n; i++) {
        if(isPrime[i]) {
            for(let j = i * i; j <= n; j += i) {
                // 자신의 배수들은 모두 not 소수
                isPrime[j] = false;
            }
        }
    }
        
    let countPrime = isPrime.filter(e => e).length;
    
    return n - 1 - countPrime;
}
