/*
1. 주어진 수를 이진수로 변환
2. '1'로 split하고 다시 join하여 1을 없앰
3. 기존 문자열에서 1을 없앤 문자열의 길이를 빼 1의 개수를 구함
4. 주어진 수에서부터 +1해가며 해당 수의 1의 개수를 구해
5. 주어진 수와 개수가 같다면 해당 수 반환
*/

function solution(n) {
    let transNum = n.toString(2);
    let removeZero = transNum.split('1').join('');
    const countOne = transNum.length - removeZero.length;
    
    let nextBigNum = n + 1;
    while(true) {
        transNum = nextBigNum.toString(2);
        removeZero = transNum.split('1').join('');
        const ones = transNum.length - removeZero.length;
        
        if(ones === countOne) break;
        
        nextBigNum++;
    }
    
    return nextBigNum;
}