// 501. Find Mode in Binary Search Tree

import { TreeNode } from '../../types';

export const findMode = (root: TreeNode | null): number[] => {
  let mode: number[] = [];
  let maxCount = 0;
  let count = 0;
  let prev = -1;

  const inOrder = (node: TreeNode | null) => {
    if (node === null) {
      return;
    }

    inOrder(node.left);

    if (prev === -1) {
      prev = node.val;
      count = 1;
    } else if (prev === node.val) {
      count++;
    } else {
      prev = node.val;
      count = 1;
    }

    if (count > maxCount) {
      maxCount = count;
      mode = [node.val];
    } else if (count === maxCount) {
      mode.push(node.val);
    }
    inOrder(node.right);
  };

  inOrder(root);

  return mode;
};
