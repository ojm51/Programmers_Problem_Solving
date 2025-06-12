/*
1. 주어진 배열의 각 값을 이진수로 만들고
2. 0을 채워 n자리 수로 변환
3. 두 배열을 돌며, 각 값을 | 연산하여 0->공백, 1->"#"로 대응
4. 결과를 문자열 배열로 만들어 반환
*/

function toBinary(n, array) {
    let result = [];
    
    for(let ele of array) {
        let temp = ele.toString(2);
        
        if(temp.length < n) {
            temp = '0'.repeat(n - temp.length) + temp;
        }
        
        result.push(temp);
    }
    
    return result;
}

function solution(n, arr1, arr2) {
    var answer = [];
    
    let binaryArr1 = toBinary(n, arr1);
    let binaryArr2 = toBinary(n, arr2);
    
    for(let i = 0; i < n; i++) {
        let row = "";
        for(let j = 0; j < n; j++) {
            if(binaryArr1[i][j] === "1" | binaryArr2[i][j] === "1") row += "#";
            else row += " ";
        }
        answer.push(row);
    }
    
    return answer;
}
