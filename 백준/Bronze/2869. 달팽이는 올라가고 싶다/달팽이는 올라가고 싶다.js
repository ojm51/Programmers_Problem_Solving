const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
    input.push(line);
}).on("close", () => {
    const [A, B, V] = input[0].split(" ").map(Number);
    
    const day = Math.ceil((V - A) / (A - B)) + 1;
    console.log(day);
    
    process.exit(0);
});