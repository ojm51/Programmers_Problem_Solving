function solution(num_list) {
    let add = 0;
    let odd = 0;
    
    for(let num of num_list) {
        (num % 2 === 0) ? add++ : odd++;
    }
    
    return [add, odd];
}