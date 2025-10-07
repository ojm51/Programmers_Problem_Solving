function solution(arr) {
    function isSquare(num) {
        return Number.isInteger(Math.log2(num));
    }
    
    const answer = arr;
    const length = arr.length;
    
    if(isSquare(length)) return answer;
    
    let i = 1;
    while(!isSquare(length + i)) i++;
    
    return [...answer, ...Array(i).fill(0)];
}