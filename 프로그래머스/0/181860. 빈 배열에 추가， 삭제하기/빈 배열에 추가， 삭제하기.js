function solution(arr, flag) {
    const answer = [];
    
    arr.map((ele, i) => {
        if(flag[i]) answer.push(...Array(ele * 2).fill(ele));
        else answer.splice(-ele);
    });
    
    return answer;
}