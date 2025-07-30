function solution(my_string) {
    var answer = 0;
    
    for(let char of my_string) {
        const num = parseInt(char);
        if(!isNaN(num)) answer += num;
    }
    
    return answer;
}