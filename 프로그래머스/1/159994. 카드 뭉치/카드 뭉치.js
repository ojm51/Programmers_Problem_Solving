/*
1. 카드 뭉치의 첫 번째 단어를 번갈아 가며 목표 단어 배열과 비교
2. 일치하는 것이 있다면 해당 단어를 삭제
3. 일치하는 것이 없다면 반복을 멈추고 'No' 반환
4. 목표 단어 배열의 끝까지 위의 과정을 반복
*/

function solution(cards1, cards2, goal) {
    var answer = 'Yes';
    
    while(goal.length > 0) {
        if(goal[0] === cards1[0]) cards1.shift();
        else if(goal[0] === cards2[0]) cards2.shift();
        else {
            answer = 'No';
            break;
        }
        goal.shift();        
    }
    
    return answer;
}