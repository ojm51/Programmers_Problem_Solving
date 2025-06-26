/*
1. 길이 순으로 오름차순 정렬
2. 길이가 가장 짧은 번호부터 해당 번호를 담은 번호가 있는지 탐색
3. 하나라도 발견하면 탐색 종료 후 false 반환
*/

function solution(phone_book) {
    let answer = true;
    
    const sorted_phone = phone_book.sort();
    for(let i = 0; i < sorted_phone.length - 1; i++) {
        let tempStr = sorted_phone[i + 1].slice(0, sorted_phone[i].length);
            
        if(sorted_phone[i] === tempStr) return false;
    }
    
    return answer;
}