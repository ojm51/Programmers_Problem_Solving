function solution(s) {
    const arr = s.split(" ");
    const nums = [arr[0]];
    var answer = 0;
    
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] === 'Z') nums.pop();
        else nums.push(arr[i]);
    }
    
    answer = nums.reduce((acc, cur) => Number.parseInt(acc) + Number.parseInt(cur), 0);
    
    return answer;
}