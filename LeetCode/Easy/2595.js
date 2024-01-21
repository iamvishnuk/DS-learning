// 2595. Number of Even and Odd Bits
/**
 * @param {number} n
 * @return {number[]}
 */
var evenOddBit = function (n) {
    let even = 0;
    let odd = 0;
    const bit = n.toString(2).split("").reverse();
    for (let i = 0; i < bit.length; i++) {
        if (bit[i] === "1") {
            if (i % 2 === 0) {
                even++;
            } else {
                odd++;
            }
        }
    }
    return [even, odd]
};

console.log(evenOddBit(17))
