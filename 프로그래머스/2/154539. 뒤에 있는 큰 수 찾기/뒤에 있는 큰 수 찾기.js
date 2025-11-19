/*
뒷 큰수: 뒤에 있는 숫자 중, 자신보다 크면서 가장 가까이 있는 수
1. 배열을 차례로 돌며
2. 현재 수의 뒷 큰수를 구함
3. 마지막 수 전까지 위의 과정 반복
4. 마지막 수는 뒷 큰수가 없으므로 무조건 -1
현재 수의 뒷 큰수를 찾는 게 아니라 
현재 수가 스택에 들어있는 인덱스를 가진 요소의 뒷 큰수인지 찾아나감
= 현재 수가 아닌 스택에 들어있는 요소를 기준으로 뒷 큰수를 찾음
*/

function solution(numbers) {
    var answer = Array(numbers.length).fill(-1);
    let idxStack = [];
    
    for(let i = 0; i < numbers.length; i++) {
        while(idxStack.length > 0) {
            // numbers 배열에서 idxStack에 저장된 마지막 인덱스를 가진 요소와 현재 number를 비교
            const lastStackVal = idxStack[idxStack.length - 1];
            
            if(numbers[lastStackVal] < numbers[i]) {
                const prevIdx = idxStack.pop();
                answer[prevIdx] = numbers[i];
            }
            else break;
        }
        idxStack.push(i);
    }
    
    return answer;
}

// function solution(numbers) {
//     var answer = [];
    
//     for(let i = 0; i < numbers.length - 1; i++) {
//         let isExist = false;
        
//         for(let j = i + 1; j < numbers.length; j++) {
//             if(numbers[i] < numbers[j]) {
//                 isExist = true;
//                 answer.push(numbers[j]);
//                 break;
//             }
//         }
//         if(!isExist) answer.push(-1);
//     }
//     answer.push(-1);
    
//     return answer;
// }