// 1464. Maximum Product of Two Elements in an Array
/*
 * Array
 * Sorting
 * Heap (Priority Queue)
 */

function maxProduct(nums: number[]): number {
  let largest = 0;
  let secondLargest = 0;

  for (const num of nums) {
    if (num > largest) {
      secondLargest = largest;
      largest = num;
    } else {
      secondLargest = Math.max(secondLargest, num);
    }
  }

  return (largest - 1) * (secondLargest - 1);
}
