function solution(before, after) {
    const sorted_before = [...before].sort().join("");
    const sorted_after = [...after].sort().join("");
    return (sorted_before === sorted_after) ? 1 : 0;
}