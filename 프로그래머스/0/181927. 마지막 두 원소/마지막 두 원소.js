function solution(num_list) {
    const len = num_list.length;
    const last = num_list[len - 1];
    const beforeLast = num_list[len - 2];
    const answer = [...num_list];
    
    answer.push((last > beforeLast) ? last - beforeLast : last * 2);
    
    return answer;
}