function solution(myString, pat) {
    const arr_str = [...myString];
    
    for(let i = 0; i < arr_str.length; i++) {
        arr_str[i] = (arr_str[i] === "A") ? "B" : "A";
    }
    
    return (arr_str.join("").search(pat) === -1) ? 0 : 1;
}