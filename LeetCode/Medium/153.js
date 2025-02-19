// 153. Find the Minimum in Rotated Sorted Array

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  if (nums[0] <= nums[nums.length - 1]) {
    return nums[0];
  }

  // find the pivot or the minimum element
  const pivot = findPivot(nums);
  return nums[pivot + 1];
};

const findPivot = (nums) => {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (mid < end && nums[mid] > nums[mid + 1]) {
      return mid;
    }
    if (mid > start && nums[mid] < nums[mid - 1]) {
      return mid - 1;
    }

    if (nums[mid] <= nums[start]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
};

const nums = [3, 4, 5, 1, 2];

console.log(findMin(nums));
