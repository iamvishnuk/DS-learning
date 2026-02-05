// 3379. Transformed Array

function constructTransformedArray(nums: number[]): number[] {
  const n = nums.length;
  const result = new Array(n);

  for (let i = 0; i < n; i++) {
    result[i] = nums[(((i + nums[i]) % n) + n) % n];
  }

  return result;
}

console.log(constructTransformedArray([3, -2, 1, 1]));
