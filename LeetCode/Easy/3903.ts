// 3903. Smallest Stable Index I
/*
 * Array
 * Prefix Sum
 */

function firstStableIndex(nums: number[], k: number): number {
  let n = nums.length;
  let prefixMax = 0;

  const suffixMin = new Array<number>(n);

  suffixMin[n - 1] = nums[n - 1];

  for (let i = n - 2; i >= 0; i--) {
    suffixMin[i] = Math.min(suffixMin[i + 1], nums[i]);
  }

  for (let i = 0; i < n; i++) {
    prefixMax = Math.max(prefixMax, nums[i]);

    if (prefixMax - suffixMin[i] <= k) {
      return i;
    }
  }

  return -1;
}
