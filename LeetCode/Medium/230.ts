// 230. Kth Smallest Element in a BST

import { TreeNode } from '../../types';

const inOrder = (root: TreeNode | null, arr: number[]) => {
  if (root?.left) inOrder(root.left, arr);
  if (root !== null) {
    arr.push(root?.val);
  }
  if (root?.right) inOrder(root.right, arr);
  return arr;
};

export const kthSmallest = (root: TreeNode | null, k: number): number => {
  const out = inOrder(root, []);
  return out[k - 1];
};
