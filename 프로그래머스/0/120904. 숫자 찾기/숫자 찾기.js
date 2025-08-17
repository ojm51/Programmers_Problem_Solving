function solution(num, k) {
    const index = num.toString().indexOf(k.toString());
    return (index === -1) ? index : index + 1;
}