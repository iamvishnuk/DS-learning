// 3731. Find Missing Elements
/*
 * Array
 * Hash Table
 * Sorting
 */

function findMissingElements(nums: number[]): number[] {
  const map = new Set<number>();
  const res: number[] = [];
  let max = nums[0];
  let min = nums[0];

  for (const num of nums) {
    map.add(num);

    if (num < min) min = num;
    if (num > max) max = num;
  }

  for (let i = min; i <= max; i++) {
    if (!map.has(i)) {
      res.push(i);
    }
  }

  return res;
}
