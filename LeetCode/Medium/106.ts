// 106. Construct Binary Tree from Inorder and Postorder Traversal

import { TreeNode } from '../../types';

function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
  const map = new Map();
  inorder.forEach((v, i) => map.set(v, i));

  function recurse(
    pStart: number,
    pEnd: number,
    inStart: number,
    inEnd: number
  ): TreeNode | null {
    if (pStart > pEnd || inStart > inEnd) return null;

    let rootValue = postorder[pEnd];
    let inIndex = map.get(rootValue);
    let numOfLeftNode = inIndex - inStart;

    let root = new TreeNode(rootValue);

    root.left = recurse(
      pStart,
      pStart + numOfLeftNode - 1,
      inStart,
      inIndex - 1
    );
    root.right = recurse(pStart + numOfLeftNode, pEnd - 1, inIndex + 1, inEnd);

    return root;
  }

  return recurse(0, postorder.length - 1, 0, inorder.length - 1);
}
