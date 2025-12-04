// 783. Minimum Distance Between BST Nodes
import { TreeNode } from '../../types';

const inOrder = (curr: TreeNode | null, num: number[]) => {
  if (curr === null) return;

  inOrder(curr.left, num);
  num.push(curr.val);
  inOrder(curr.right, num);
};

export function minDiffInBST(root: TreeNode | null): number {
  const num: number[] = [];
  let minDiff: number = Number.MAX_VALUE;

  inOrder(root, num);

  for (let i = 1; i < num.length; i++) {
    minDiff = Math.min(minDiff, num[i] - num[i - 1]);
  }

  return minDiff;
}
