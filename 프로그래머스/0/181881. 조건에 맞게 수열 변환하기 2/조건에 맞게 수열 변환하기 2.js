function solution(arr) {
    let answer = 0;
    let isSame = false;
    let prevArr = [...arr];
    
    while(!isSame) {
        for(let i = 0; i < arr.length; i++) {
            if(arr[i] >= 50 && arr[i] % 2 === 0) arr[i] /= 2;
            else if(arr[i] < 50 && arr[i] % 2 !== 0) arr[i] = arr[i] * 2 + 1;
        }
        answer++;
        
        if(JSON.stringify(prevArr) === JSON.stringify(arr)) isSame = true;
        prevArr = [...arr];
    }
    
    return answer - 1;
}