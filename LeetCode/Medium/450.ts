// 450. Delete Node in a BST;

import { TreeNode } from '../../types';

const findSmallest = (node: TreeNode): TreeNode => {
  while (node.left) {
    node = node.left;
  }
  return node;
};

function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
  if (!root) return null;

  if (root.val > key) root.left = deleteNode(root.left, key);

  if (root.val < key) root.right = deleteNode(root.right, key);

  if (root.val === key) {
    if (!root.left && !root.right) {
      return null;
    }

    if (!root.left) return root.right;
    else if (!root.right) return root.left;
    else {
      const mindNode = findSmallest(root.right);
      mindNode.left = root.left;
      return root.right;
    }
  }

  return root;
}
