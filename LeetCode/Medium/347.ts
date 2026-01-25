// 347. Top K Frequent Elements

function topKFrequent(nums: number[], k: number): number[] {
  const freq = new Map<number, number>();

  for (let num of nums) {
    freq.set(num, (freq.get(num) || 0) + 1);
  }

  const bucket: number[][] = Array(nums.length + 1)
    .fill(null)
    .map(() => []);

  for (const [num, count] of freq.entries()) {
    bucket[count].push(num);
  }

  const result: number[] = [];

  for (let i = bucket.length - 1; i >= 0 && result.length < k; i--) {
    for (const num of bucket[i]) {
      result.push(num);
      if (result.length === k) break;
    }
  }

  return result;
}

topKFrequent([1, 2, 1, 2, 1, 2, 3, 1, 3, 2], 2);
