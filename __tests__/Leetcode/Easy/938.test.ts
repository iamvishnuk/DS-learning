import { describe, expect, it } from 'vitest';
import { TreeNode } from '../../../types';
import { rangeSumBST } from '../../../LeetCode/Easy/938';

function buildTree(arr: Array<number | null>): TreeNode | null {
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
}

describe('938. Range Sum of BST', () => {
  it('should return 32', () => {
    const root = buildTree([10, 5, 15, 3, 7, null, 18]);
    const low = 7;
    const high = 15;
    expect(rangeSumBST(root, low, high)).toBe(32);
  });
  it('should return 23', () => {
    const root = buildTree([10, 5, 15, 3, 7, 13, 18, 1, null, 6]);
    const low = 6;
    const high = 10;
    expect(rangeSumBST(root, low, high)).toBe(23);
  });
});
