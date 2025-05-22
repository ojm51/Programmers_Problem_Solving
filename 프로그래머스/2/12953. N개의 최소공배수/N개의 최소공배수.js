/*
1. 2개씩 차례대로 최소공배수를 구함
2. 첫 번째는 0, 1인덱스 값을 비교, 세 번째 수부터는 앞 쌍의 최소공배수와 비교
3. 만약 큰 수가 작은 수로 나눠 떨어진다면 큰 수가 최소공배수
4. 그렇지 않다면 큰 수에 2, 3, ...을 곱해 앞 쌍의 최소공배수로 나눠 떨어지는 수가 최소공배수
5. 주어진 배열의 마지막까지 위 과정 반복

유클리드 호제법: 최소공배수lcm = a * b / 최대공약수gcm
*/

function solution(arr) {
    var answer = 0;
    let small = 0;
    let big = 0;
    
    for(let i = 1; i < arr.length; i++) {
        if(i === 1) {
            small = arr[i - 1];
            big = arr[i];
        }
        else {
            big = (arr[i] > answer) ? 
                (small = answer, arr[i]) : (small = arr[i], answer);
        }
        
        // 큰 수가 작은 수로 나눠 떨어지는 경우
        if(big % small === 0) {
            answer = big;
            continue;
        }
        
        // 큰 수가 작은 수로 나눠 떨어지지 않는 경우
        for(let j = 2; ; j++) {
            if((big * j) % small === 0) {
                answer = big * j;
                break;
            }
        }
    }
    
    return answer;
}

// 개선한 코드
function solution(arr) {
    var answer = 0;
    
    const gcm = (a, b) => {
        while(b !== 0) {
            [a, b] = [b, a % b];
        }
        return a;
    }
    
    const lcm = (a, b) => (a * b) / gcm(a, b);
    
    answer = arr[0];
    for(let i = 1; i < arr.length; i++) {
        answer = lcm(arr[i], answer);
    }
    
    return answer;
}
