// 3640. Trionic Array II

function maxSumTrionic(nums: number[]): number {
  const n = nums.length;
  let p: number, q: number, j: number;
  let maxSum: number, sum: number, res: number;
  let ans: number = -Infinity;

  for (let i = 0; i < n; i++) {
    j = i + 1;
    res = 0;

    // First Segment
    for (; j < n && nums[j - 1] < nums[j]; j++);
    p = j - 1;

    if (p === i) {
      continue;
    }

    //Second Segment
    res += nums[p] + nums[p - 1];

    for (; j < n && nums[j - 1] > nums[j]; j++) {
      res += nums[j];
    }
    q = j - 1;

    if (p === q || q === n - 1 || (j < n && nums[j] <= nums[q])) {
      i = q;
      continue;
    }

    // Third segment;
    res += nums[q + 1];

    // find the maximum sum of third segment;
    maxSum = 0;
    sum = 0;
    for (let k = q + 2; k < n && nums[k] > nums[k - 1]; k++) {
      sum += nums[k];
      maxSum = Math.max(maxSum, sum);
    }

    res += maxSum;

    // find the maximum sum of first segment;
    maxSum = 0;
    sum = 0;
    for (let k = p - 2; k >= i; k--) {
      sum += nums[k];
      maxSum = Math.max(sum, maxSum);
    }
    res += maxSum;

    ans = Math.max(res, ans);
    i = q - 1;
  }

  return ans;
}
