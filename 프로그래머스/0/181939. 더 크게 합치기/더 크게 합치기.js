function solution(a, b) {
    const ab = String(a) + String(b);
    const ba = String(b) + String(a);
    
    return (ab >= ba) ? Number(ab) : Number(ba);
}

// 개선한 코드
const solution = (a, b) => Math.max(`${a}${b}`, `${b}${a}`);
