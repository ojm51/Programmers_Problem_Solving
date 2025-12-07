const input = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n'); 

const orders = input.slice(1);
const stack = [];
const answer = [];

orders.forEach(order => {
    const [cmd, val] = order.split(' ');
    
    switch(cmd) {
        case '1':
            stack.push(val);
            break;
        case '2':
            answer.push(stack.length === 0 ? -1 : stack.pop());
            break;
        case '3':
            answer.push(stack.length);
            break;
        case '4':
            answer.push(stack.length === 0 ? 1 : 0);
            break;
        case '5':
            answer.push(stack.length === 0 ? -1 : stack[stack.length - 1]);
            break;
    }
});

console.log(answer.join('\n'));
