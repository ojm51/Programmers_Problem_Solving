function solution(num_list, n) {
    const answer = [];
    for(let i = 0; i < num_list.length; i += n) {
        answer.push(num_list[i]);
    }
    return answer;
}