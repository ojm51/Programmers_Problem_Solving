const input = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n'); 

const members = input.slice(1);
const answer = members.sort((a, b) => {
    const [ageA, nameA] = a.split(' ');
    const [ageB, nameB] = b.split(' ');
    return ageA - ageB;
});

console.log(answer.join('\n'));