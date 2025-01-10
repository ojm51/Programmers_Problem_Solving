/*
1. 노랑의 가로 길이가 가장 긴 경우부터 0까지 -1하며
2. ((전체 노랑 개수 - 가로 길이) / 가로 길이)가 나누어 떨어지고(=직사각형),
3. 위에서 구한 넓이값에서 노랑 개수을 뺀 값이 갈색 개수와 같다면 
4. 해당 가로, 세로 길이를 반환
*/
function solution(brown, yellow) {
    let width = 0;
    let height = 0;
    let numOfBrown = 0;
    
    for(let currWidth = yellow; currWidth > 0; currWidth--) {
        let isSquare = ((yellow - currWidth) % currWidth === 0);
        if(!isSquare) continue;
        
        width = currWidth + 2;
        height = yellow / currWidth + 2;        
        numOfBrown = (width * height) - yellow;
        
        if(numOfBrown === brown) break;
    }    
    
    return [width, height];
}