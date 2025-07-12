function solution(dot) {
    const isXPositive = dot[0] > 0 ? true : false;
    const isYPositive = dot[1] > 0 ? true : false;
    
    if(isXPositive) {
        if(isYPositive) return 1;
        return 4;
    }
    
    if(isYPositive) return 2;
    return 3;
}