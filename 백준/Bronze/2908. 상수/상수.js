const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
    input.push(line);
}).on("close", () => {
    const [A, B] = input[0].split(" ");
    const reversedA = Number([...A].reverse().join(""));
    const reversedB = Number([...B].reverse().join(""));
    
    console.log(Math.max(reversedA, reversedB));
    
    process.exit(0);
});