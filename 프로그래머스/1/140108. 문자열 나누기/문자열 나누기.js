/*
1. 문자열을 한 글자씩 비교
2. 같은 글자수와 다른 글자수가 같아지면 문자열을 분리
3. 앞 문자열은 정답 배열에 삽입, 뒷 문자열로 다시 위 과정 반복
4. 문자열의 길이가 0이 되기 전까지 반복
*/

function solution(s) {
    const splited_strs = [];
    let str = [...s];
    
    while(str.length > 0) {
        const first_char = str[0];
        let count_same = 1;
        let count_diff = 0;
        
        // 각 문자 비교
        for(let i = 1; i <= str.length; i++) {
            if(count_same === count_diff || i === str.length) {
                splited_strs.push(str.slice(0, i));
                str = str.slice(i);
                break;
            }
            (str[i] === first_char) ? count_same++ : count_diff++;
        }
    }
    
    return splited_strs.length;
}