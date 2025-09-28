function solution(myStr) {
    const answer = myStr.split(/[abc]/).filter(e => e.length > 0);
    return (answer.length > 0) ? answer : ["EMPTY"];
}