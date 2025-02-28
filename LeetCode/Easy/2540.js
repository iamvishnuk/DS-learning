// 2540. Find Common Value

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

// solution 1 using binary search
var getCommon = function (nums1, nums2) {
  for (let i = 0; i < nums1.length; i++) {
    let output = binarySearch(nums2, nums1[i]);
    if (output !== -1) return output;
  }
  return -1;
};

const binarySearch = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) return arr[mid];
    if (arr[mid] < target) start = mid + 1;
    else end = mid - 1;
  }
  return -1;
};

// solution 2 using set
var getCommon = function (nums1, nums2) {
  let set = new Set(nums2);

  for (let i = 0; i < nums1.length; i++) {
    if (set.has(nums1[i])) {
      return nums1[i];
    }
  }
  return -1;
};
