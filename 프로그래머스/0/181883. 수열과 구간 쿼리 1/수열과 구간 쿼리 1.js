function solution(arr, queries) {
    queries.map(query => {
        const [s, e] = query;
        for(let i = s; i <= e; i++) {
            arr[i]++;
        }
    });
    
    return arr;
}