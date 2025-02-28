// 2389. Longest Subsequence With Limited Sum

/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var answerQueries = function (nums, queries) {
  nums.sort((a, b) => a - b);

  const prefixSum = [nums[0]];

  for (let i = 1; i < nums.length; i++) {
    prefixSum.push(prefixSum[i - 1] + nums[i]);
  }

  const result = [];

  for (let i = 0; i < queries.length; i++) {
    const target = queries[i];
    const index = binarySearch(prefixSum, target);
    result.push(index);
  }

  return result;
};

const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) return mid + 1;
    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
};

const nums = [2, 3, 4, 5];
const queries = [1];

console.log(answerQueries(nums, queries));
