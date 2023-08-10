// 2520. Count the Digits That Divide a Number

var countDigits = function (num) {
    let number = String(num);
    let count = 0;
    for (let i = 0; i < number.length; i++) {
        if (number % number[i] === 0) count++;
    }
    return count;
};

const num = 1248;

console.log(countDigits(num));
