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