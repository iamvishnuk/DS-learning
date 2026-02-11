// 594. Longest Harmonious Subsequence

function findLHS(nums: number[]): number {
  const map = new Map<number, number>();
  let len = 0;

  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], (map.get(nums[i]) ?? 0) + 1);
  }

  for (const key of map.keys()) {
    if (map.has(key + 1)) {
      const curr = map.get(key)!;
      const next = map.get(key + 1)!;
      len = Math.max(len, curr + next);
    }
  }

  return len;
}

console.log(findLHS([1, 3, 2, 2, 5, 2, 3, 7]))
