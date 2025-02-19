// 33. Search and Rotate Sorted Array

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  const pivot = findPivot(nums);
  // if pivot is -1, then the array is not rotated
  if (pivot === -1) {
    return binarySearch(0, nums.length - 1, nums, target);
  }

  // if the pivot is the target
  if (nums[pivot] === target) {
    return pivot;
  }

  // if the target is greater than the first element, then the target is in the first half
  const firstHalf = binarySearch(0, pivot, nums, target);

  // if the target is not in the first half, then it must be in the second half
  if (firstHalf !== -1) {
    return firstHalf;
  } else {
    // if the target is not in the first half, then it must be in the second half
    return binarySearch(pivot + 1, nums.length - 1, nums, target);
  }
};

var findPivot = function (nums) {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    if (mid < end && nums[mid] > nums[mid + 1]) {
      return mid;
    }
    if (mid > start && nums[mid] < nums[mid - 1]) {
      return mid;
    }

    if (nums[mid] <= nums[start]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
};

var binarySearch = function (start, end, nums, target) {
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (nums[mid] === target) {
      return mid;
    }

    if (nums[mid] <= target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
};

let nums = [4, 5, 6, 7, 0, 1, 2];
let target = 3;

console.log(search(nums, target)); // 3
