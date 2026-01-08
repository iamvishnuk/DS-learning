// 107. Binary Tree level Order Traversal II

import { TreeNode } from '../../types';

export const levelOrderBottom = (root: TreeNode | null): number[][] => {
  if (!root) return [];

  const res: number[][] = [];
  const queue = [root];
  let level = 1;

  while (queue.length) {
    const arr: number[] = [];
    let levelSize = queue.length;

    while (levelSize) {
      let curr = queue.shift();

      if (curr?.left) queue.push(curr.left);
      if (curr?.right) queue.push(curr.right);

      if (curr) {
        arr.push(curr.val);
      }
      levelSize--;
    }
    res.unshift(arr);
    level++;
  }

  return res;
};
