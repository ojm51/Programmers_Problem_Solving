function solution(emergency) {
    var answer = [];
    const map = new Map();
    
    emergency.forEach(ele => map.set(ele, 0));
    emergency.sort((a, b) => b - a);
    emergency.forEach((ele, idx) => map.set(ele, idx + 1));
    answer = [...map.values()];
    
    return answer;
}