// 3010. Divide an Array Into Subarrays With Minimum Cost I

function minimumCost(nums: number[]): number {
  const sortedArr = [nums[0], ...nums.slice(1).sort((a, b) => a - b)];
  return sortedArr[0] + sortedArr[1] + sortedArr[2];
}

console.log(minimumCost([1, 2, 3, 12]));
console.log(minimumCost([5, 4, 3]));
console.log(minimumCost([10, 3, 1, 1]));
