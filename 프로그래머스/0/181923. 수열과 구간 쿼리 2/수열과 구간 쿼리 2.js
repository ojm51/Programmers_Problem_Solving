function solution(arr, queries) {
    let answer = [];
    
    queries.forEach(([start, end, k]) => {
        const slicedArr = arr.slice(start, end + 1);
        const biggerNums = slicedArr.filter(e => e > k);
        answer.push((biggerNums.length === 0) ? -1 : Math.min(...biggerNums));
    });
    
    return answer;
}