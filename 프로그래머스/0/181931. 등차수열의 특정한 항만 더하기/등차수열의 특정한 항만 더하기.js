function solution(a, d, included) {
    let answer = 0;
    
    included.map((ele, idx) => {
        if(ele) answer += a + (d * idx);
    });
    
    return answer;
}