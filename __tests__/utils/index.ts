import { TreeNode } from '../../types';

export const treeToArrayLevelOrder = (root: TreeNode | null): number[] => {
  if (!root) return [];

  const result: number[] = [];
  const queue: TreeNode[] = [root];

  while (queue.length) {
    const node = queue.shift()!;
    result.push(node.val);

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }

  return result;
};

export const buildTreeFromArray = (
  arr: Array<number | null>
): TreeNode | null => {
  if (!arr.length || arr[0] === null) return null;

  const nodes = arr.map((v) => (v === null ? null : new TreeNode(v)));

  for (let i = 0; i < nodes.length; i++) {
    if (!nodes[i]) continue;

    const left = 2 * i + 1;
    const right = 2 * i + 2;

    if (left < nodes.length) nodes[i]!.left = nodes[left];
    if (right < nodes.length) nodes[i]!.right = nodes[right];
  }

  return nodes[0];
};
