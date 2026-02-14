// 930. Binary Subarray With Sum

function numSubarraysWithSum(nums: number[], goal: number): number {
  let totalCount = 0;
  let currentSum = 0;

  const freq = new Map<number, number>()

  for (const num of nums) {
    currentSum += num

    if (currentSum === goal) {
      totalCount++
    }

    // currentSum - previousePrefixcurrentSum === goal
    // previousPrefixcurrentSum === currentSum - goal
    if (freq.has(currentSum - goal)) {
      totalCount += freq.get(currentSum - goal)!
    }

    freq.set(currentSum, (freq.get(currentSum) ?? 0) + 1)
  }

  return totalCount

};
