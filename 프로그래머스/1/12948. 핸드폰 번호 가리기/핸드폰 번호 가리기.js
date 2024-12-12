/*
1. 배열 길이가 4라면 그대로 리턴
2. 문자열을 split을 이용하여 배열로 해체
3. 0부터 (배열 길이 - 4)한 값 이전까지 *로 치환
4. join을 이용하여 다시 하나의 문자열로 만듦
*/

function solution(phone_number) {
    const length = phone_number.length;
    
    if(length === 4) return phone_number;
    
    let arr = phone_number.split('');
    // let arr = [...phone_number];
    for(let i = 0; i < length - 4; i++) {
        arr[i] = '*';
    }
    
    return arr.join('');
}
