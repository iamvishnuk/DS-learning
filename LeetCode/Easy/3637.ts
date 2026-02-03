// 3637. Trionic Array 1.

function isIncreasing(start: number, end: number, nums: number[]): boolean {
  for (let i = start; i < end; i++) {
    if (nums[i] >= nums[i + 1]) {
      return false;
    }
  }

  return true;
}

function isDecreasing(start: number, end: number, nums: number[]): boolean {
  for (let i = start; i < end; i++) {
    if (nums[i] <= nums[i + 1]) {
      return false;
    }
  }

  return true;
}

function isTrionic(nums: number[]): boolean {
  const n = nums.length;

  for (let p = 1; p <= n - 2; p++) {
    for (let q = p + 1; q <= n - 2; q++) {
      if (
        isIncreasing(0, p, nums) &&
        isDecreasing(p, q, nums) &&
        isIncreasing(q, n - 1, nums)
      ) {
        return true;
      }
    }
  }

  return false;
}

console.log(isTrionic([1, 3, 5, 4, 2, 6]));
console.log(isTrionic([2, 1, 3]));
