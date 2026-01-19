// 897. Incresing Order Search Tree

import { TreeNode } from '../../types';

function increasingBST(root: TreeNode | null): TreeNode | null {
  const dummy = new TreeNode(0);
  let curr = dummy;

  function inOrder(node: TreeNode | null) {
    if (!node) return;

    inOrder(node.left);

    node.left = null;
    curr.right = node;
    curr = node;

    inOrder(node.right);
  }

  inOrder(root);

  return dummy.right;
}
