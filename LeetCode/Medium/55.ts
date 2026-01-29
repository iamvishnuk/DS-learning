// 55. Jump Game

function canJump(nums: number[]): boolean {
  let goal = nums.length - 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    let jumpValue = nums[i];

    if (i + jumpValue >= goal) {
      goal = i;
    }
  }

  return goal === 0;
}
