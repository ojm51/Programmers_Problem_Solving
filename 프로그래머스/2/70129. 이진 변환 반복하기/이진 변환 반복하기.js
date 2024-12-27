/*
1. 문자열을 배열로 변환
2. 0인 요소의 수를 세어 정답 배열[1]에 저장 후 해당 요소 제거
3. 0인 요소를 제거한 배열의 길이를 이진수로 변환
4. 위의 과정을 한 번 거칠 때마다 정답 배열[0]에 +1하며
5. 변환 결과값이 1이 될 때까지 반복

function solution(s) {
    var answer = [0, 0];  
    
    while(true) {
        if(s === '1') break;
        
        let strArr = [...s];
        while(true) {
            const indexOfZero = strArr.indexOf('0');
            
            if(indexOfZero === -1) break;
            
            answer[1]++;
            strArr = strArr.slice(0, indexOfZero).concat(strArr.slice(indexOfZero + 1));
        }
                
        const nextLength = strArr.length;
        s = nextLength.toString(2);
        answer[0]++;
    }
  
    return answer;
}
*/

function solution(s) {
    let transformCount = 0;
    let zeroCount = 0;
    
    while(s !== '1') {
        const removeZero = s.split('0').join('');        
        zeroCount += s.length - removeZero.length;        
        s = removeZero.length.toString(2);
        
        transformCount++;
    }
  
    return [transformCount, zeroCount];
}