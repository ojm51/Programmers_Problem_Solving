function solution(s) {
    let answer = '';
    const chars = new Map();
    
    [...s].forEach(ele => chars.set(ele, (chars.get(ele) || 0) + 1));
    
    for(let key of chars.keys()) {
        if(chars.get(key) === 1) answer += key;
    }
    
    return [...answer].sort().join('');
}