/*
1. 주어진 수를 문자열로 변환
2. 사전순으로 내림차순 정렬
3. 모든 수를 이어붙여 반환
*/

function solution(numbers) {
    const strNums = numbers.map(num => String(num));
    
    strNums.sort((a, b) => {
        if(`${a}${b}` > `${b}${a}`) return -1;
        if(`${a}${b}` < `${b}${a}`) return 1;
        return 0;
    });
    
    return strNums[0] === "0" ? "0" : strNums.join("");
}