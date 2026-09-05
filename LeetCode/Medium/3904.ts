// 3904. Smallest Stable Index II
/*
 * Array
 * Prefix Sum
 */

function firstStableIndex(nums: number[], k: number): number {
  let n = nums.length;
  const suffixMin = new Array<number>(n);
  let prefixMax = 0;

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
