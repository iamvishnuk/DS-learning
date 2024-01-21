// 2600. K items With the Maximum Sum
/**
 * @param {number} numOnes
 * @param {number} numZeros
 * @param {number} numNegOnes
 * @param {number} k
 * @return {number}
 */
var kItemsWithMaximumSum = function (numOnes, numZeros, numNegOnes, k) {
    if (k <= numOnes) return k;
    if (k <= numOnes + numZeros) return numOnes;
    const diff = k - (numOnes + numZeros);
    return numOnes - diff
};

const numOnes = 3;
const numZeros = 2;
const numNegOnes = 2;
const k = 7;

console.log(kItemsWithMaximumSum(numOnes, numZeros, numNegOnes, k));
