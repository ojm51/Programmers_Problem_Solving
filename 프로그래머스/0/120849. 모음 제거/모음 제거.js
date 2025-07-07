function solution(my_string) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let answer = my_string;
    
    for(let vowel of vowels) {
        answer = answer.split(vowel).join("");
    }
    
    return answer;
}