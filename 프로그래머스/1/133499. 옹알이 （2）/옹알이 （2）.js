/*
1. 발음이 연속된 경우가 있는지 먼저 체크
2. 있다면 다음 단어로 건너뜀
3. 없다면 원래 발음을 돌며 단어에서 현재 발음 부분을 제외
4. 최종 단어의 길이가 0이면 정답+1
5. 위의 과정 반복
*/

function solution(babbling) {
    const sounds = ["aya", "ye", "woo", "ma"];
    const impossible_sounds = ["ayaaya", "yeye", "woowoo", "mama"];
    
    let answer = 0;
    
    for(let word of babbling) {
        let new_word = word;
        
        // 연속 발음 체크
        if(impossible_sounds.some(s => word.includes(s))) continue;
        
        // 발음 치환
        for(let sound of sounds) {
            new_word = new_word.replaceAll(sound, " ");
        }
        
        if(new_word.trim().length === 0) answer++;
    }
    
    return answer;
}