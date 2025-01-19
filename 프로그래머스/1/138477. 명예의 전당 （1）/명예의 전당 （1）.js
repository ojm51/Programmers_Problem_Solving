/*
1. 주어지는 점수를 배열의 마지막에 붙이고
2. 배열을 내림차순으로 정렬한 다음
3. k개로 자름
4. 그 중 가장 작은 점수를 정답 배열에 추가
5. 위의 과정을 반복
*/

function solution(k, scores) {
    let answer = [];
    let topK = [];
    
    for(let score of scores) {
        topK.push(score);
        topK.sort((a, b) => b - a);
        topK = topK.slice(0, k);
        answer.push(topK[topK.length - 1]);
    }
    
    return answer;
}