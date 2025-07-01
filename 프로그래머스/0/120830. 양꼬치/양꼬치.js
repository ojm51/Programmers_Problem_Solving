function solution(n, k) {
    let lamb = n * 12000;
    let drink = (k - Math.trunc(n / 10)) * 2000;
    let total = lamb + drink;
    
    return total;
}