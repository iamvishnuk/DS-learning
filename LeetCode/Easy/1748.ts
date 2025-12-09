// 1748. Sum of Unique Elements
export const sumOfUnique = (nums: number[]): number => {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1);
    } else {
      map.set(nums[i], 1);
    }
  }

  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i]) && map.get(nums[i]) === 1) {
      sum += nums[i];
    }
  }

  return sum;
};
