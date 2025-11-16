function solution(my_string) {
    const ascii_a = 'a'.charCodeAt(0);
    const ascii_A = 'A'.charCodeAt(0);
    const answer = Array(52).fill(0);
    
    [...my_string].forEach(str => {
        const ascii_str = str.charCodeAt(0);
        
        if(ascii_str < ascii_a) answer[ascii_str - ascii_A]++;
        else answer[ascii_str - ascii_a + 26]++;
    });
    
    return answer;
}