// 563. Binary Tree Tilt

import { TreeNode } from '../../types';

// Solution 1.
function inOrderSum(node: TreeNode | null, sum: number) {
  if (!node) return sum;

  sum = inOrderSum(node.left, sum);
  sum += node.val;
  sum = inOrderSum(node.right, sum);

  return sum;
}

export const findTilt = (root: TreeNode | null): number => {
  let sum = 0;

  function inOrder(node: TreeNode | null) {
    if (!node) return;

    sum += Math.abs(inOrderSum(node.left, 0) - inOrderSum(node.right, 0));

    inOrder(node.left);
    inOrder(node.right);
  }

  inOrder(root);

  return sum;
};

// Solution 2.
function _findTilt(root: TreeNode | null): number {
  let tilt = 0;

  function dfs(node: TreeNode | null): number {
    if (!node) return 0;

    let leftSum = dfs(node.left);
    let rightSum = dfs(node.right);

    tilt += Math.abs(leftSum - rightSum);

    return leftSum + rightSum + node.val;
  }
  dfs(root);
  return tilt;
}
