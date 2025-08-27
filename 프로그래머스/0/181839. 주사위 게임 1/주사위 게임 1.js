function solution(a, b) {
    const isAOdd = a % 2 === 1;
    const isBOdd = b % 2 === 1;
    
    if(isAOdd && isBOdd) return a**2 + b**2;
    if(isAOdd || isBOdd) return 2 * (a + b);
    return Math.abs(a - b);
}