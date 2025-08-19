function solution(arr, delete_list) {
    let answer = [...arr];
    
    for(let i = 0; i < delete_list.length; i++) {
        const index = answer.indexOf(delete_list[i]);
        const temp = answer;
        
        if(index !== -1) {
            answer = answer.slice(0, index);
            answer.push(...temp.slice(index + 1));
        }
    }
    
    return answer;
}