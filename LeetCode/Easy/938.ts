// 938. Range Sum of BST

import { TreeNode } from '../../types';

const inOrder = (curr: TreeNode | null, num: number[]) => {
  if (curr === null) return;

  inOrder(curr.left, num);
  num.push(curr.val);
  inOrder(curr.right, num);
};

const InOrderSum = (
  curr: TreeNode | null,
  sum: number,
  low: number,
  high: number
): number => {
  if (curr === null) {
    return sum;
  }
  sum = InOrderSum(curr.left, sum, low, high);
  if (curr.val >= low && curr.val <= high) {
    sum += curr.val;
  }
  sum = InOrderSum(curr.right, sum, low, high);

  return sum;
};

export const rangeSumBST = (
  root: TreeNode | null,
  low: number,
  high: number
): number => {
  // const num: number[] = [];
  // inOrder(root, num);

  // return num.reduce((acc, val) => {
  //   return val >= low && val <= high ? acc + val : acc;
  // }, 0);
  //
  return InOrderSum(root, 0, low, high);
};
