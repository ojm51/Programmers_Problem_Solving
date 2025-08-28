const solution = (myString) => myString.split("x").reduce((answer, str) => [...answer, str.length], []);

// 개선한 코드
const solution = (myString) => myString.split("x").map(str => str.length);
