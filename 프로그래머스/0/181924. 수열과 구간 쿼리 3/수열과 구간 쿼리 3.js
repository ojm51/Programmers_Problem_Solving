function solution(arr, queries) {
    queries.map(([i, j]) => {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    });
    
    return arr;
}