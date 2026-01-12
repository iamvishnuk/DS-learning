// 671. Second Minimum Node in a Binary Tree

import { TreeNode } from '../../types';

export const findSecondMinimumValue = (root: TreeNode | null): number => {
  let smallest = Infinity;
  let secondSmallest = Infinity;

  const inOrder = (root: TreeNode | null) => {
    if (root?.left) inOrder(root.left);
    if (root) {
      if (root.val < smallest) {
        secondSmallest = smallest;
        smallest = root.val;
      } else if (root.val > smallest && root.val < secondSmallest) {
        secondSmallest = root.val;
      }
    }
    if (root?.right) inOrder(root.right);
  };

  inOrder(root);

  if (secondSmallest !== Infinity) {
    return secondSmallest;
  }

  return -1;
};
