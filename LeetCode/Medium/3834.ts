// 3834. Merge Adjacent Equal Elements

function mergeAdjacent(nums: number[]): number[] {
  const n = nums.length;
  const stack = new Array(n)
  let stackSize = 0;

  for (let i = 0; i < n; i++) {
    let currValue = nums[i]
    stack[stackSize++] = currValue

    while (stackSize >= 0 && stack[stackSize - 1] === stack[stackSize - 2]) {
      stack[stackSize - 2] = stack[stackSize - 2] * 2
      stackSize--
    }
  }

  return stack.slice(0, stackSize)

};
