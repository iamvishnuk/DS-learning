// 530. Minimun Absolute Difference in BST

import { TreeNode } from '../../types';

function getMinimumDifference(root: TreeNode | null): number {
  let prev: number | null = null;
  let minDiff = Infinity;

  function inOrder(node: TreeNode | null) {
    if (!node) return;
    inOrder(node.left);
    if (prev !== null) {
      minDiff = Math.min(minDiff, node.val - prev);
    }
    prev = node.val;
    inOrder(node.right);
  }

  inOrder(root);

  return minDiff;
}
