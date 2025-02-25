// 1525. Number of Sub-array With Odd Sum

/**
 * @param {number[]} arr
 * @return {number}
 */
var numOfSubarrays = function (arr) {
  let MOD = 1e9 + 7;

  let oddCount = 0;
  let evenCount = 1;
  let totalCount = 0;
  let currentSum = 0;

  for (let num of arr) {
    currentSum += num;

    if (currentSum % 2 === 0) {
      totalCount = (totalCount + oddCount) % MOD;
      evenCount++;
    } else {
      totalCount = (totalCount + evenCount) % MOD;
      oddCount++;
    }
  }
  return totalCount;
};

const arr = [1, 2, 3, 4, 5, 6, 7];

console.log(numOfSubarrays(arr));
