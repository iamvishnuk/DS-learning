// 103. Binary Tree Zigzag Level Order Traversal
import { TreeNode } from '../../types';

export const zigzagLevelOrder = (root: TreeNode | null): number[][] => {
  if (!root) return [];

  const res: number[][] = [];
  const queue: TreeNode[] = [root];
  let leftToRight = true;

  while (queue.length) {
    let levelSize = queue.length;
    const level: number[] = new Array(levelSize);

    for (let i = 0; i < levelSize; i++) {
      let curr = queue.shift()!;

      let index = leftToRight ? i : levelSize - 1 - i;
      level[index] = curr?.val;

      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);
    }
    res.push(level);
    leftToRight = !leftToRight;
  }

  return res;
};
