// 2206. Divide Array Into Equal Pairs

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function (nums) {
  const map = new Map();

  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  for (let value of map.values(map)) {
    if (value % 2 !== 0) return false;
  }
  return true;
};

const nums1 = [3, 2, 3, 2, 2, 2];
const nums2 = [1, 2, 3, 4];

console.log("output --> true", divideArray(nums1));
console.log("output --> false", divideArray(nums2));
