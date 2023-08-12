// 2696. Minimum String Length After Removing Substrings

var minLength = function (s) {
    const stack = [];
    for (let c of s) {
        if (
            (stack.length && stack[stack.length - 1] === "A" && c === "B") ||
            (stack[stack.length - 1] === "C" && c === "D")
        ) {
            stack.pop();
        } else {
            stack.push(c);
        }
    }
    return stack.length;
};

const s = "ABFCACDB";

console.log(minLength(s));
