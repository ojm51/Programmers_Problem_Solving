function solution(array, n) {
    const new_arr = [...array, n].sort((a, b) => a - b);
    const index = new_arr.indexOf(n);
    
    if(index === 0) return new_arr[index + 1];
    if(index === new_arr.length - 1) return new_arr[index - 1];
    return ((new_arr[index + 1] - new_arr[index]) < (new_arr[index] - new_arr[index - 1])) ? new_arr[index + 1] : new_arr[index - 1];
}