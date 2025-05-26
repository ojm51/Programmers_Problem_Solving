/*
1. 사진 속 인물을 한 명씩 돌며 
2. 이름 배열에서 해당하는 이름의 인덱스를 찾고
3. 점수 배열에서 해당하는 인덱스에 맞는 점수를 가져와
4. 합산하여 반환
*/

function solution(name, yearning, photo) {
    var answer = [];
    
    for(let picture of photo) {
        let score = 0;
        let index = 0;
        
        for(let i = 0; i < picture.length; i++) {
            index = name.indexOf(picture[i]);
            
            if(index === -1) continue;
            score += yearning[index];
        }
        answer.push(score);
    }
    
    return answer;
}

// 개선한 코드
function solution(name, yearning, photo) {
    let yearningMap = {};
    for(let i = 0; i < name.length; i++) {
        yearningMap[name[i]] = yearning[i];
    }
    
    let answer = [];
    for(let element of photo) {
        let score = 0;
        
        for(let person of element) {
            if(yearningMap[person] !== undefined) score += yearningMap[person]
        }
        answer.push(score);
    }
    
    return answer;
}
