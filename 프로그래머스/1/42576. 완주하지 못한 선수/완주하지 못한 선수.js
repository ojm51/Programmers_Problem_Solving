/*
1. 완주자 명단으로 객체 생성
2. 참가자 명단을 돌며 완주자 객체의 값을 -1
3. 객체에 저장된 값이 -1이 되거나 해당하는 키가 없는 경우 이름을 반환
*/

function solution(participant, completion) {
    let compleCount = {};
    
    completion.forEach(name => compleCount[name] = (compleCount[name] || 0) + 1);
    
    for(let name of participant) {
        if(!compleCount[name]) return name;
        compleCount[name]--;
    }
}

/*
1. 참가자 명단을 돌며 완주자 명단에 해당 이름이 있는지 탐색
2. indexOf의 값이 -1이라면(완주못함) 해당 이름을 반환
3. indexOf의 값이 -1이 아니라면(완주함) 해당 인덱스의 이름을 빈 문자열로 바꿈
4. -1이 나올 때까지 반복

function solution(participant, completion) {
    var answer = '';
    
    for(let i = 0; i < participant.length; i++) {
        let idxOfCompletion = completion.indexOf(participant[i]);
        
        if(idxOfCompletion == -1) {
            answer = participant[i];
            break;
        }
        
        completion[idxOfCompletion] = '';
    }
    
    return answer;
}
*/