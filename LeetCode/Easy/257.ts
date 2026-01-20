// 257. Binary Tree Paths

import { TreeNode } from '../../types';

function binaryTreePaths(root: TreeNode | null): string[] {
  const result: string[] = [];

  function levelOrder(node: TreeNode | null, path: number[]) {
    if (!node) return;

    path.push(node.val);

    if (!node.left && !node.right) {
      result.push(path.join('->'));
    } else {
      levelOrder(node.left, path);
      levelOrder(node.right, path);
    }

    path.pop();
  }

  levelOrder(root, []);

  return result;
}
