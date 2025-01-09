/*
1. 숫자 목록을 객체로 생성
2. 주어진 문자열에서 객체에 들어있는 각 숫자 문자열을 탐색
3. 반환된 인덱스부터 숫자 문자열의 길이만큼을 숫자(키값)로 변환
4. 마지막 객체 값까지 반복 후 최종 문자열을 숫자로 변환하여 반환
*/

function solution(s) {
    const NUMS = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
    }
    
    for(let key in NUMS) {
        while(true) {
            const index = s.indexOf(NUMS[key]);
            if(index === -1) break;
            
            s = s.substr(0, index) + key + s.substr(index + NUMS[key].length)
        }
    }
    
    return s * 1;
}