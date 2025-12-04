// 700. Search in a Binary Search Tree

import { TreeNode } from '../../types';

export function searchBST(root: TreeNode | null, val: number): TreeNode | null {
  if (!root) return null;

  // check if the root.value === value
  if (root.val == val) return root;

  if (root.val < val) {
    return searchBST(root.right, val);
  }

  return searchBST(root.left, val);
}
