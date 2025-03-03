/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function (nums, pivot) {
  const left = [];
  const right = [];
  const mid = [];

  for (let num of nums) {
    if (num > pivot) {
      right.push(num);
    } else if (num === pivot) {
      mid.push(num);
    } else {
      left.push(num);
    }
  }
  return [...left, ...mid, ...right];
};

const nums = [9, 12, 5, 10, 14, 3, 10];
const pivot = 10;
console.log(pivotArray(nums, pivot)); // [9,5,3,10,10,12,14]
