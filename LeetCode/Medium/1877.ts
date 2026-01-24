// 1877. Minimize Maximum Pair Sum in Array

function minPairSum(nums: number[]): number {
  let maxSum = 0;

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length / 2; i++) {
    let sum = nums[i] + nums[nums.length - 1 - i];
    maxSum = Math.max(maxSum, sum);
  }

  return maxSum;
}

console.log(minPairSum([3, 5, 2, 3]));
console.log(minPairSum([3, 5, 4, 2, 4, 6]));
