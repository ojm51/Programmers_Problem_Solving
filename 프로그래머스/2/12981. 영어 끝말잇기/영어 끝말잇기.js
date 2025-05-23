/*
1. 단어를 돌며 객체를 만들어 저장
2. 만약 이미 존재하는 단어이거나 이전 단어[단어 길이 - 1] != 단어[단어 길이 - 1]라면
3. (인덱스 % 사람수 + 1)로 몇 번이, (인덱스 / 사람수 + 1)로 몇 차례에 탈락인지 리턴
*/

function solution(n, words) {
    const used = new Set();
    used.add(words[0]);

    for (let i = 1; i < words.length; i++) {
        const prev = words[i - 1];
        const curr = words[i];

        if (used.has(curr) || prev.at(-1) !== curr[0]) {
            return [i % n + 1, Math.floor(i / n) + 1];
        }

        used.add(curr);
    }

    return [0, 0];
}