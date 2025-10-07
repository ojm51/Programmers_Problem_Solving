function solution(arr) {
    function isPowerOfTwo(num) {
        return Number.isInteger(Math.log2(num));
    }
    
    const length = arr.length;
    
    if(isPowerOfTwo(length)) return arr;
    
    let zeros = 1;
    while(!isPowerOfTwo(length + zeros)) zeros++;
    
    return [...arr, ...Array(zeros).fill(0)];
}

// 개선한 코드
function solution(arr) {
    const n = arr.length;
    let target = 1;
    
    while (target < n) target *= 2;  

    const zeros = target - n;
    return [...arr, ...Array(zeros).fill(0)];
}
