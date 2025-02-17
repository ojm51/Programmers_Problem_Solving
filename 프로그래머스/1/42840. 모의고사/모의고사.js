/*
1번: 1, 2, 3, 4, 5
2번: 2, 1, 2, 3, 2, 4, 2, 5
3번: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5

1. 정답 배열의 인덱스를 수포자별로 반복되는 번호의 개수로 나누고,
2. 그 나머지를 인덱스로 생각하여 해당 인덱스의 찍기 번호와 비교
3. 수포자별로 맞힌 문제수를 구함
4. 가장 많이 맞힌 수포자를 배열로 반환
*/

function solution(answers) {
    var answer = [];
    
    const firstAnswers = [1, 2, 3, 4, 5];
    const secondAnswers = [2, 1, 2, 3, 2, 4, 2, 5];
    const thirdAnswers = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    let correct = [0, 0, 0];
    
    for(let i = 0; i < answers.length; i++) {
        if(answers[i] === firstAnswers[i % firstAnswers.length]) correct[0]++;
        if(answers[i] === secondAnswers[i % secondAnswers.length]) correct[1]++;
        if(answers[i] === thirdAnswers[i % thirdAnswers.length]) correct[2]++;
    }
    
    let maxCorrect = Math.max(...correct);
    for(let i = 0; i < correct.length; i++) {
        if(maxCorrect === correct[i]) answer.push(i + 1);
    }
    
    return answer;
}