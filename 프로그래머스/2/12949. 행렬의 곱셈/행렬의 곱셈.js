/*
[a1, a2] [b1, b3]
[a3, a4] [b2, b4] 일 때, 행렬의 곱은
[(a1 * b1) + (a2 * b2), (a1 * b3) + (a2 * b4)] 이런 식으로 진행됨
1. 1번 배열은 가로로, 2번 배열은 세로로 읽으며
2. 서로 대응되는 값을 곱하고 더해 배열로 만들어
3. 최종 배열에 모아 반환
*/

function solution(arr1, arr2) {
    let answer = [];
    
    // n 번째 행
    for(let row = 0; row < arr1.length; row++) {
        let resultRow = [];
        
        // n 번째 열
        for(let col = 0; col < arr2[0].length; col++) {
            let sum = 0;
            
            // 공통 축
            for(let standard = 0; standard < arr2.length; standard++) {
                // arr1 행은 왼->오, arr2 열은 위->아래로
                sum += (arr1[row][standard] * arr2[standard][col]);   
            }
            
            resultRow.push(sum);
        }
        
        answer.push(resultRow);
    }
    
    return answer;
}