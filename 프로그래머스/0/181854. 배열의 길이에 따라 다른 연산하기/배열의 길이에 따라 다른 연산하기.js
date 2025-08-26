function solution(arr, n) {
    const len = arr.length;
    let answer = [...arr];
    
    for(let i = len % 2 === 0 ? 1 : 0; i < len; i += 2) {
        answer[i] = arr[i] + n;
    }
    
    return answer;
}