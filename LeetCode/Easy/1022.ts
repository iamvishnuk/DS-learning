// 1022. Sum of Root To Leaf Binary Number

import { TreeNode } from '../../types';

export const sumRootToLeaf = (root: TreeNode | null): number => {
  let sum = 0;

  function levelOrder(node: TreeNode | null, path: number[]) {
    if (!node) return;

    path.push(node.val);

    if (!node.left && !node.right) {
      sum += parseInt(path.join(''), 2);
    } else {
      levelOrder(node.left, path);
      levelOrder(node.right, path);
    }

    path.pop();
  }

  levelOrder(root, []);

  return sum;
};
