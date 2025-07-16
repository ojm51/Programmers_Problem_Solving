function solution(money) {
    const price = 5500;
    const cups = Math.trunc(money / price);
    const changes = money % price;
    
    return [cups, changes];
}