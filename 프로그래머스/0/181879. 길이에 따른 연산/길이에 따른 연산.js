function solution(num_list) {
    const plus = () => num_list.reduce((acc, cur) => acc + cur, 0);
    const multi = () => num_list.reduce((acc, cur) => acc * cur, 1);
    
    return (num_list.length >= 11) ? plus() : multi();
}