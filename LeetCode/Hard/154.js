// 154. Find Minimum in Rotated Sorted Array II

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  if (nums[0] < nums[nums.length - 1]) {
    return nums[0];
  }

  let start = 0;
  let end = nums.length - 1;
  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    if (nums[mid] > nums[end]) {
      start = mid + 1;
    } else if (nums[mid] < nums[end]) {
      end = mid;
    } else {
      end--;
    }
  }

  return nums[end];
};

const nums = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 0, 1, 1, 1, 1, 1, 1];
console.log(findMin(nums));
