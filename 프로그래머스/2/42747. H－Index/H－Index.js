/*
1. 인용 횟수을 내림차순으로 정렬
2. 논문의 길이를 hIdx로 두고 
3. 현재 hIdx 값과, 현재 hIdx 값보다 인용 횟수가 큰 논문들의 개수가 같은 경우를 찾으면
4. 해당 hIdx 값을 반환
5. 논문의 길이가 0보다 클 때까지 반복
*/

function solution(citations) {
    var answer = 0;
    
    citations.sort((a, b) => b - a);
    
    for(let hIdx = citations.length; hIdx > 0; hIdx--) {
        let count = 0;
        
        for(let i = 0; i < citations.length; i++) {
            if(hIdx <= citations[i]) count++;
            else break;
        }
        
        if(hIdx <= count) {
            answer = hIdx;
            break;
        }
    }
    
    return answer;
}