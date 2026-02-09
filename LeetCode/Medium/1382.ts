// 1382. Balance a Binary Search Tree

import { TreeNode } from "../../types";

function balanceBST(root: TreeNode | null): TreeNode | null {

  const inOrderList: number[] = []

  function inOrder(node: TreeNode | null) {
    if (!node) return;

    inOrder(node.left)
    inOrderList.push(node.val)
    inOrder(node.right)
  }

  function createBST(arr: number[], start: number, end: number): TreeNode | null {
    if (start > end) return null

    let mid = Math.floor(start + (end - start) / 2)

    let leftSubtree = createBST(arr, start, mid - 1)
    let rightSubtee = createBST(arr, mid + 1, end)

    let node = new TreeNode(arr[mid], leftSubtree, rightSubtee)

    return node

  }

  inOrder(root)

  return createBST(inOrderList, 0, inOrderList.length - 1)
};
