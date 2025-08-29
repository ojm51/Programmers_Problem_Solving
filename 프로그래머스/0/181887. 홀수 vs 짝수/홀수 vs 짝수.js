function solution(num_list) {
    let sum_odd = 0;
    let sum_even = 0;
    
    for(let i = 0; i < num_list.length; i++) {
        if(i % 2 === 0) sum_even += num_list[i];
        else sum_odd += num_list[i];
    }
    
    return sum_odd < sum_even ? sum_even : sum_odd;
}