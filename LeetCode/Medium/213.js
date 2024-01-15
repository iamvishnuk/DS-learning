/*
    https://leetcode.com/problems/house-robber-ii/
    213. House Robber II
 */

var rob = function (nums) {
    if (nums.length === 1) return nums[0];
    if (nums.length === 2) return Math.max(nums[0], nums[1]);

    let dp1 = Array(nums.length).fill(0);
    let dp2 = Array(nums.length).fill(0);

    dp1[0] = nums[0];
    dp1[1] = Math.max(nums[0], nums[1]);

    dp2[1] = nums[1];
    dp2[2] = Math.max(nums[1], nums[2]);

    for (let i = 2; i < nums.length - 1; i++) {
        dp1[i] = Math.max(nums[i] + dp1[i - 2], dp1[i - 1]);
    }

    for (let i = 3; i < nums.length; i++) {
        dp2[i] = Math.max(nums[i] + dp2[i - 2], dp2[i - 1]);
    }

    return Math.max(dp1[dp1.length - 2], dp2[dp2.length - 1]);
};

const nums = [1, 2, 3];

console.log(rob(nums));
