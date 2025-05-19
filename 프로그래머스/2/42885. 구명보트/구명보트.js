/*
1. 주어진 배열을 오름차순으로 정렬
2. 가장 무거운 사람 탑승 후
3. 가능하면 가장 가벼운 사람도 함께 탑승(최대 2명까지만 가능)
4. 위의 과정을 반복하며 구명보트 사용 횟수 카운트
*/

function solution(people, limit) {
    let count = 0;
    
    let sorted = people.sort((a, b) => a - b);
    let right = sorted.length - 1;
    let left = 0;
    
    while(left <= right) {
        if(sorted[right] + sorted[left] <= limit) left++;
        right--;
        count++;
    }
    
    return count;
}