function solution(my_string, indices) {
    const answer = [...my_string];
    indices.map(index => answer.splice(index, 1, ""));
    return answer.join("");
}