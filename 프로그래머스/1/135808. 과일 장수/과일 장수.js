/*
1. 사과 배열을 내림차순으로 정렬
2. 앞에서부터 m개씩 잘라 한 상자를 만들고
3. 그중에서 최저 사과 점수를 찾아내(마지막 사과 점수) 점수를 계산
4. 위의 과정 반복
*/

function solution(k, m, score) {
    let sorted_score = score.sort((a, b) => b - a);
    let answer = 0;
    
    for(let i = 0; i <= sorted_score.length - m; i += m) {
        const lowest_score = sorted_score[i + m - 1];
        answer += (lowest_score * m * 1);
    }
    
    return answer;
}