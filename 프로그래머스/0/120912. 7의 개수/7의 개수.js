function solution(array) {
    const str = array.reduce((acc, cur) => acc += cur, "");
    const split_str = str.split("7").join("");
    return str.length - split_str.length;
}