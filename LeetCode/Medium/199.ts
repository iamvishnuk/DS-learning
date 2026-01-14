// 199. Binary Tree Right Side View

import { TreeNode } from '../../types';

export const rightSideView = (root: TreeNode | null): number[] => {
  if (!root) return [];

  const arr: number[] = [];
  const queue = [root];

  while (queue.length) {
    const temp = [];
    let levelLength = queue.length;

    while (levelLength) {
      const node = queue.shift();

      if (node?.left) queue.push(node.left);
      if (node?.right) queue.push(node.right);

      if (node) {
        temp.push(node.val);
      }
      levelLength--;
    }

    arr.push(temp[temp.length - 1]);
  }

  return arr;
};
