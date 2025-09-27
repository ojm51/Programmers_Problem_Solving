function solution(strArr) {
    const group = {};
    let answer = 0;
    
    strArr.forEach(str => {
        const length = str.length;
        const prev = group[`${length}`] || [];
        group[`${length}`] = [...prev, str];
    });
    
    for(let key in group) {
        answer = Math.max(answer, group[key].length);
    }
    
    return answer;
}

// 개선한 코드
function solution(strArr) {
    const group = {};
    let answer = 0;
    
    strArr.forEach(str => {
        const length = str.length;
        group[`${length}`] = (group[`${length}`] || 0) + 1;
    });
    
    
    return Math.max(...Object.values(group));
}

