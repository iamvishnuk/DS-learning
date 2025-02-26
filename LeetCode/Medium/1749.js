// 1749. Maximum Absolute Sum of Any Subarray

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAbsoluteSum = function (nums) {
  let maxSum = findMaxSum(nums);
  let minSum = findMinSum(nums);

  return Math.max(Math.abs(maxSum), Math.abs(minSum));
};

const findMaxSum = (nums) => {
  let maxSum = nums[0];
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sum > maxSum) {
      maxSum = sum;
    }
    if (sum < 0) {
      sum = 0;
    }
  }
  return maxSum;
};

const findMinSum = (nums) => {
  let minSum = nums[0];
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sum < minSum) {
      minSum = sum;
    }
    if (sum > 0) {
      sum = 0;
    }
  }
  return minSum;
};

const nums = [2, -5, 1, -4, 3, -2];

console.log(maxAbsoluteSum(nums));
