// 1304 Find N unique Integers Sum up to Zero

var sumZero = function (n) {
    if (n == 1) return [0]
    let output = []
    for (let i = 0; i < Math.floor(n / 2); i++) {
        output.push(0 + 1 + i)
        output.push(0 - i - 1)
    }
    if (n % 2 !== 0) {
        output.push(0)
    }
    return output
};

let n = 10

console.log(sumZero(n))