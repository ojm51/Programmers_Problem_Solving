/*
1. 배열 요소를 3개씩 묶어가며
2. 해당 요소가 소수인지 판단
*/

function checkPrime(num) {
    let isPrime = true;
                
    for(let i = 2; i * i <= num; i++) {
        if(num % i === 0) {
            isPrime = false;
            break; 
        }
    }
    
    return isPrime;
}

function solution(nums) {
    let answer = 0;
    
    for(let i = 0; i < nums.length - 2; i++) {
        for(let j = i + 1; j < nums.length - 1; j++) {
            for(let k = j + 1; k < nums.length; k++) {
                const num = nums[i] + nums[j] + nums[k];
                const isPrime = checkPrime(num);
                
                if(isPrime) answer++;
            }
        }
    }
    
    return answer;
}
