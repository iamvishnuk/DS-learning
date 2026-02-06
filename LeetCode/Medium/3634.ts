// 3634. Minimum Removals to Balance Array

function minRemoval(nums: number[], k: number): number {
  nums.sort((a, b) => a - b);

  let max = 0;
  let n = nums.length;
  let ans = n;

  for (let min = 0; min < n; min++) {
    while (max < n && nums[max] <= nums[min] * k) {
      max++;
    }

    ans = Math.min(ans, n - (max - min));
  }

  return ans;
}

console.log(minRemoval([1, 6, 2, 9], 3));
