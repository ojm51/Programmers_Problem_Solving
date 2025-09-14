function solution(my_string) {
    for(let i = 0; i < my_string.length - 1; i++) {
        if(my_string.indexOf(my_string[i], i + 1) !== -1) {
            // 현재 문자 잠시 저장
            const temp = my_string[i];
            // 중복되는 모든 문자를 .으로 치환
            my_string = my_string.replaceAll(temp, ".");
            // 첫 중복 문자만 원래 문자로 변환
            my_string = my_string.slice(0, i) + temp + my_string.slice(i + 1);
        }
    }
    
    return my_string.split(".").join("");
} 

// 개선된 코드
const solution = (my_string) => [...new Set(my_string)].join("");
