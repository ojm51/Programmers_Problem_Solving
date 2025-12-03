const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
    input.push(line);
}).on("close", () => {
    const [N, M] = input[0].split(" ").map(Number);
    let basket = Array(N).fill(1).map((e, idx) => e + idx);

    for(let i = 1; i <= M; i++) {
        const [start, end] = input[i].split(" ").map(e => Number(e) - 1);
        const reversed = basket.slice(start, end + 1).reverse();
        basket = [...basket.slice(0, start), ...reversed, ...basket.slice(end + 1)];
    }
    
    console.log(basket.join(" "));
    
    process.exit(0);
});