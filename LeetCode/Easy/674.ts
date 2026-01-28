// 674. Longest Continuous Increasing Subsequence

function findLengthOfLCIS(nums: number[]): number {
  let longest = 1;
  let count = 1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < nums[i + 1]) {
      count++;
    } else {
      if (count > longest) longest = count;
      count = 1;
    }
  }

  return longest;
}

console.log(findLengthOfLCIS([1, 3, 5, 4, 7]));
console.log(findLengthOfLCIS([2, 2, 2, 2, 2]));
console.log(findLengthOfLCIS([1, 3, 5, 4, 2, 3, 4, 5]));
