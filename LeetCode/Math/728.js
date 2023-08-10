// 728. Self Dividing Numbers

var selfDividingNumbers = function (left, right) {
    const output = [];
    for (let i = left; i <= right; i++) {
        let number = String(i);
        let isDivisible = true;
        for (let j = 0; j < number.length; j++) {
            if (Number(number) % Number(number[j]) !== 0) {
                isDivisible = false;
            }
        }
        if (isDivisible) output.push(i);
    }
    return output;
};

const left = 47,
    right = 85;

console.log(selfDividingNumbers(left, right));
