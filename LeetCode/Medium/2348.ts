// 2348. Number of Zero-Filled Subarrays

function zeroFilledSubarray(nums: number[]): number {
  let res: number = 0;
  let count: number = 0;

  for (const num of nums) {
    if (num === 0) {
      count++
    } else if (count > 0 && num !== 0) {
      res += (count) * (count + 1) / 2
      count = 0;
    }
  }

  return count > 0 ? res += (count) * (count + 1) / 2 : res

};
