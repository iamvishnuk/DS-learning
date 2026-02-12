// 3833. Count Dominant Indices

function dominantIndices(nums: number[]): number {
  const n = nums.length;
  let sum = nums.reduce((acc, curr) => acc += curr, 0)
  let index = 0


  for (let i = 0; i < n - 1; i++) {
    sum = sum - nums[i]
    let remainingLength = n - (i + 1)
    let remainingAvg = sum / remainingLength

    if (nums[i] > remainingAvg) {
      index++
    }
  }

  return index;

};
