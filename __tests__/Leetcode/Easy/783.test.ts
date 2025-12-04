import { describe, it, expect } from 'vitest';
import { minDiffInBST } from '../../../LeetCode/Easy/783';
import { TreeNode } from '../../../types';

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

describe('minDiffInBST', () => {
  it('should return 1 for tree [4,2,6,1,3]', () => {
    const root = buildTree([4, 2, 6, 1, 3]);
    expect(minDiffInBST(root)).toBe(1);
  });

  it('should return 1 for tree [1,0,48,null,null,12,49]', () => {
    const root = buildTree([1, 0, 48, null, null, 12, 49]);
    expect(minDiffInBST(root)).toBe(1);
  });
});
