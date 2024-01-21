// 2578. Split With Minimum Sum

/**
 * @param {number} num
 * @return {number}
 */
var splitNum = function (num) {
    const n = num
        .toString()
        .split("")
        .sort((a, b) => a - b)
        .join("");
    let num1 = "";
    let num2 = "";
    for (let i = 0; i < n.length; i++) {
        if (i % 2 === 0) {
            num1 += n[i];
        } else {
            num2 += n[i];
        }
    }
    return Number(num1) + Number(num2);
};

const num = 687;
console.log(splitNum(num));
