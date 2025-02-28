// 2529. Maximum Count of Positive Integer and Negative Integer

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function (nums) {
  return Math.max(findMaxNegative(nums), findMinPositive(nums));
};

const findMaxNegative = (nums) => {
  if (nums[0] >= 0) return 0;
  let start = 0;
  let end = nums.length - 1;

  while (start < end) {
    const mid = Math.ceil((start + end) / 2);
    if (nums[mid] < 0) start = mid;
    else end = mid - 1;
  }
  return start + 1;
};

const findMinPositive = (nums) => {
  if (nums[nums.length - 1] <= 0) return 0;
  let start = 0;
  let end = nums.length - 1;

  while (start < end) {
    const mid = Math.floor((start + end) / 2);
    if (nums[mid] > 0) end = mid;
    else start = mid + 1;
  }
  return nums.length - start;
};
