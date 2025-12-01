function solution(a, b, c, d) {
    let nums = new Map();
    [a, b, c, d].forEach(char => nums.set(char, (nums.get(char) ?? 0) + 1));
    
    const [p, q, r] = [...nums.keys()].sort((a, b) => nums.get(b) - nums.get(a));
    if(nums.size === 1) return 1111 * p;
    if(nums.size === 2) return (nums.get(p) === 3) ? Math.pow(10 * p + q, 2) : (p + q) * Math.abs(p - q);
    if(nums.size === 3) return q * r;
    return Math.min(...[...nums.keys()]);
}