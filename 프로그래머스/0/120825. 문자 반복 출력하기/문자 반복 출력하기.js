function solution(my_string, n) {
    let answer = '';
    [...my_string].map(str => answer += str.repeat(n));
    return answer;
}