function solution(my_string, is_suffix) {
    const mystr_len = my_string.length;
    const suffix_len = is_suffix.length;
    const sliced_str = my_string.slice(mystr_len - suffix_len);
    
    return sliced_str === is_suffix ? 1 : 0;
}