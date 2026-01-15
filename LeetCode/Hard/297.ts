// 297. Serialize and Deserialize Binary Tree

import { TreeNode } from '../../types';

/*
 * Encodes a tree to a single string.
 */
function serialize(root: TreeNode | null): string {
  if (!root) return '';

  const out = [];
  const queue: Array<TreeNode | null> = [root];

  while (queue.length) {
    const node = queue.shift();

    if (!node) {
      out.push('#');
    } else {
      out.push(node.val);
      queue.push(node.left);
      queue.push(node.right);
    }
  }

  return out.join(',');
}

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode | null {
  if (!data) return null;

  const arr = data.split(',');
  const root = new TreeNode(Number(arr[0]));

  const queue: Array<TreeNode> = [root];

  for (let i = 1; i < arr.length; i++) {
    const node = queue.shift();

    if (arr[i] !== '#' && node) {
      node.left = new TreeNode(Number(arr[i]));
      queue.push(node.left);
    }
    i++;

    if (arr[i] !== '#' && node) {
      node.right = new TreeNode(Number(arr[i]));
      queue.push(node.right);
    }
  }

  return root;
}
