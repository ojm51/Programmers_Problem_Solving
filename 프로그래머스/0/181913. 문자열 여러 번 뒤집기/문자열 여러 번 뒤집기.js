function solution(my_string, queries) {
    let answer = my_string;
    
    for(const [start, end] of queries) {
        const forward = answer.slice(0, start);
        const target = answer.slice(start, end + 1);
        const backward = answer.slice(end + 1);
        
        const reversed = [...target].reverse().join("");
        
        answer = forward + reversed + backward;
    }
    
    return answer;
}