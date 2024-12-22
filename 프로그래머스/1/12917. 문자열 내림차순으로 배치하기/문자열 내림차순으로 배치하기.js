/*
1. 주어진 문자열을 아스키 코드로 변환
2. 내림차순으로 정렬
3. 아스키 코드를 다시 문자로 변환
4. 각 문자를 join하여 반환
*/

function solution(s) {
    let str = [...s];
    for(let i = 0; i < s.length; i++) {
        str[i] = str[i].charCodeAt();
    }
    
    str.sort((a, b) =>  b - a);
    for(let i = 0; i < s.length; i++) {
        str[i] = String.fromCharCode(str[i]);
    }
    
    // join()은 각 요소를 합친 결과를 반환(기존 것은 그대로 유지)
    return str.join('');
}

// 개선한 코드
function solution(s) {
    return s.split('').sort().reverse().join('');
}
