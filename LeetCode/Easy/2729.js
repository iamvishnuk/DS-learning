// 2729. Check if The Number is Fascinating

/**
 * @param {number} n
 * @return {boolean}
 */
var isFascinating = function (n) {
    const twoTime = n * 2;
    const treeTime = n * 3;
    const number = "" + n + twoTime + treeTime;
    const set = new Set();
    
    if (number.length > 9) return false;

    for (let i = 0; i < number.length; i++) {
        if (set.has(number[i]) || number[i] === "0") {
            return false;
        }
        set.add(number[i]);
    }
    return true;
};

const n = 267;
console.log(isFascinating(n));
