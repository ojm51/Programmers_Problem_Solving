/*
1. is_prefix의 길이를 구해
2. my_string을 처음부터 1번의 길이까지 자르고
3. 두 문자열을 비교
*/

const solution = (my_string, is_prefix) => (my_string.slice(0, is_prefix.length) === is_prefix) ? 1 : 0;