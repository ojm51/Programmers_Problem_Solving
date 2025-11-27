/*
1. 장르별 전체 재생 횟수 계산
2. 재생 횟수를 기준으로 장르 내림차순 정렬
3. 장르별 노래 재생 횟수 내림차순 정렬
4. 상위 2개 노래의 인덱스 번호를 정답 배열에 저장
*/

function solution(genres, plays) {
    let answer = [];
    
    // 장르별 전체 재생 횟수
    const playByGenre = new Map();
    for(let i = 0; i < genres.length; i++) {
        playByGenre.set(genres[i], plays[i] + (playByGenre.get(genres[i]) ?? 0));
    }
    const sortedPlayByGenre = [...playByGenre].sort((a, b) => b[1] - a[1]);
    
    // 장르별 노래 재생 횟수
    const songByGenre = new Map();
    for(let i = 0; i < genres.length; i++) {
        const genre = genres[i];
        const play = plays[i];
        
        if(!songByGenre.has(genre)) songByGenre.set(genre, []);
        songByGenre.get(genre).push({ idx: i, play });
    }
    songByGenre.forEach((songs) => {
        songs.sort((a, b) => {
            if(b.play === a.play) return a.idx - b.idx;
            return b.play - a.play;
        });
    });
    
    // 상위 2개 노래의 인덱스
    sortedPlayByGenre.forEach(([genre, _]) => {
        const topSongs = [...songByGenre.get(genre)].slice(0, 2);
        topSongs.forEach(song => answer.push(song.idx));
    });
    
    return answer;
}