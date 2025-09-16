function solution(intStrs, k, s, l) {
    const answer = [];
    
    intStrs.map(str => {
        const temp = Number([...str].slice(s, s + l).join(""));
        if(temp > k) answer.push(temp);
    });
    
    return answer;
}