function solution(a, b, c) {
    const num_set = new Set([a, b, c]);
    if(num_set.size === 1) return (a + b + c) * (a ** 2 + b ** 2 + c ** 2) * (a ** 3 + b ** 3 + c ** 3);
    if(num_set.size === 2) return (a + b + c) * (a ** 2 + b ** 2 + c ** 2);
    return (a + b + c);
}