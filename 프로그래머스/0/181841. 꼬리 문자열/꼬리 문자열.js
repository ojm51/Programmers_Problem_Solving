function solution(str_list, ex) {
    let answer = '';
    
    for(let str of str_list) {
        if(str.includes(ex)) continue;
        answer += str;
    }
    
    return answer;
}