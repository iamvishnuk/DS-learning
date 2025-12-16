// 404. Sum of Left Leaves

import { TreeNode } from '../../types';

const isLeafNode = (node: TreeNode): boolean => {
  return !node.left && !node.right;
};

const preOrder = (node: TreeNode | null, isLeft: boolean): number => {
  let sum = 0;
  if (node && isLeafNode(node) && isLeft) {
    sum = sum + node.val;
  }

  if (node?.left) {
    sum += preOrder(node.left, true);
  }
  if (node?.right) {
    sum += preOrder(node.right, false);
  }

  return sum;
};

export const sumOfLeftLeaves = (root: TreeNode | null): number => {
  if (!root) return 0;
  return preOrder(root, false);
};
