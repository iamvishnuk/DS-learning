// 653. Two Sum IV - input is a BST

import { TreeNode } from '../../types';

export const findTarget = (root: TreeNode | null, k: number): boolean => {
  const set = new Set<number>();

  function inOrder(node: TreeNode | null): boolean {
    if (!node) return false;

    if (inOrder(node.left)) {
      return true;
    }

    const diff = k - node.val;
    if (set.has(diff)) {
      return true;
    }
    set.add(node.val);

    if (inOrder(node.right)) {
      return true;
    }

    return false;
  }

  return inOrder(root);
};
