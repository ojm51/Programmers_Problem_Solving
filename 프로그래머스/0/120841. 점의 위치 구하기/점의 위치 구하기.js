function solution(dot) {
    const [x, y] = dot;
    const isXPositive = x > 0 ? true : false;
    const isYPositive = y > 0 ? true : false;
    
    if(isXPositive) {
        if(isYPositive) return 1;
        return 4;
    }
    
    if(isYPositive) return 2;
    return 3;
}