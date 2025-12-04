const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

/*
1. 문자열을 돌며 다이얼 문자에 맞는 숫자 탐색
2. 숫자+1로 누르는데 걸리는 시간을 계산
3. 걸리는 시간의 합을 출력
*/
const input = [];
rl.on("line", (line) => {
    input.push(line);
}).on("close", () => {
    const str = input[0];
    let answer = 0;
    
    [...str].forEach(char => {
        let num = 0;
        switch(char) {
            case 'A':
            case 'B':
            case 'C':
                num = 2;
                break;
            case 'D':
            case 'E':
            case 'F':
                num = 3;
                break;
            case 'G':
            case 'H':
            case 'I':
                num = 4;
                break;
            case 'J':
            case 'K':
            case 'L':
                num = 5;
                break;
            case 'M':
            case 'N':
            case 'O':
                num = 6;
                break;
            case 'P':
            case 'Q':
            case 'R':
            case 'S':
                num = 7;
                break;
            case 'T':
            case 'U':
            case 'V':
                num = 8;
                break;
            case 'W':
            case 'X':
            case 'Y':
            case 'Z':
                num = 9;
                break;
            default:
                break;
        }
        answer += (num + 1);
    });
        
    console.log(answer);
});