// 최소공배수 
function solution(n) {
    let i = 1;
    while(true) {
        if(i * 6 % n === 0) return i;
        i++;
    }
}