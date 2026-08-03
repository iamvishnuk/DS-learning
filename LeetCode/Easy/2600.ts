// 2600. K items With the Maximum Sum
/*
 * Math
 * Greedy
 */

function kItemsWithMaximumSum(
  numOnes: number,
  numZeros: number,
  numNegOnes: number,
  k: number
): number {
  if (k <= numOnes) return k;
  if (k <= numOnes + numZeros) return numOnes;

  const diff = k - (numOnes + numZeros);
  return numOnes - diff;
}

const numOnes = 3;
const numZeros = 2;
const numNegOnes = 2;
const k = 7;

console.log(kItemsWithMaximumSum(numOnes, numZeros, numNegOnes, k));
