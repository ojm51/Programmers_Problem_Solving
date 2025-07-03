function solution(n) {
    const sqrt = Math.sqrt(n);
    
    if(sqrt < Math.ceil(sqrt)) return 2;
    return 1;
}