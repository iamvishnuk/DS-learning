// 1441. Build an Array With Stack Operations

var buildArray = function (target, n) {
    const stack = [];
    const output = [];
    let i = 1;
    let k = 0;
    while (i <= n) {
        stack.push(i);
        output.push("push");
        if (stack[stack.length - 1] !== target[k]) {
            stack.pop();
            output.push("pop");
        } else {
            k++;
        }
        i++;
        if (stack.length === target.length) break;
    }
    console.log(stack);
    return output;
};

const target = [1, 2],
    n = 3;

console.log(buildArray(target, n));
