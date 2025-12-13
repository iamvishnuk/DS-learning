// 101. Symmetric Tree

import { TreeNode } from '../../types';

const isSame = (
  leftRoot: TreeNode | null,
  rightRoot: TreeNode | null
): boolean => {
  if (!leftRoot && !rightRoot) return true;

  if (!leftRoot || !rightRoot || leftRoot.val !== rightRoot.val) return false;

  return (
    isSame(leftRoot.left, rightRoot.right) &&
    isSame(leftRoot.right, rightRoot.left)
  );
};

export const isSymmetric = (root: TreeNode | null): boolean => {
  if (!root) return true;
  return isSame(root.left, root.right);
};
