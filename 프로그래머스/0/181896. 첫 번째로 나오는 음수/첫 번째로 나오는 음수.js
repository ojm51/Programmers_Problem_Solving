function solution(num_list) {
    for(let i = 0; i < num_list.length; i++) {
        if(num_list[i] < 0) return i;
    }
    return -1;
}

// 개선한 코드
const solution = (num_list) => num_list.findIndex(num => num < 0);
