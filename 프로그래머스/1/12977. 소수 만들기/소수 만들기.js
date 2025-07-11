function solution(nums) {
    let answer = 0;
    
    for(let i = 0; i < nums.length - 2; i++) {
        for(let j = i + 1; j < nums.length - 1; j++) {
            for(let k = j + 1; k < nums.length; k++) {
                const num = nums[i] + nums[j] + nums[k];
                let isPrime = true;
                
                for(let l = 2; l * l <= num; l++) {
                    if(num % l === 0) {
                        isPrime = false;
                        break; 
                    }
                }
                
                if(isPrime) answer++;
                else isPrime = true;
            }
        }
    }
    
    return answer;
}