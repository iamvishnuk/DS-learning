// 3719. Longest Balanced Subarray I

function longestBalanced(nums: number[]): number {
  let len: number = 0

  for (let i = 0; i < nums.length; i++) {
    let odd = new Map<number, number>()
    let even = new Map<number, number>()

    for (let j = i; j < nums.length; j++) {
      if (nums[j] % 2 === 0) {
        even.set(nums[j], (even.get(nums[j]) ?? 0) + 1)
      } else {
        odd.set(nums[j], (odd.get(nums[j]) ?? 0) + 1)
      }

      if (odd.size == even.size) {
        len = Math.max(len, j - i + 1)
      }
    }
  }

  return len
};

console.log('4 ->', longestBalanced([2, 5, 4, 3]))
console.log('5 -', longestBalanced([3, 2, 2, 5, 4]))
console.log('3 -', longestBalanced([1, 2, 3, 2]))
