// Add to Array - Form of Interger

const num = [1, 2, 6, 3, 0, 7, 1, 7, 1, 9, 7, 5, 6, 6, 4, 4, 0, 0, 6, 3]
let k = 516

var addToArrayForm = function (num, k) {
    const output = []
    let index = num.length - 1
    let carray = 0
    while (index >= 0 || carray > 0 || k > 0) {
        let sum = (index >= 0 ? num[index] : 0) + (k % 10) + carray
        output.unshift(sum % 10)
        carray = Math.floor(sum / 10)
        index--
        k = Math.floor(k / 10)
    }
    return output
};

console.log(addToArrayForm(num, k))