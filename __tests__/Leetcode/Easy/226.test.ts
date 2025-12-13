import { describe, expect, it } from 'vitest';
import { buildTreeFromArray, treeToArrayLevelOrder } from '../../utils';
import { invertTree } from '../../../LeetCode/Easy/226';

describe('226. Invert Binary Tree', () => {
  it('', () => {
    const root = buildTreeFromArray([4, 2, 7, 1, 3, 6, 9]);
    const output = [4, 7, 2, 9, 6, 3, 1];

    const invertedTree = invertTree(root);
    expect(treeToArrayLevelOrder(invertedTree)).toEqual(output);
  });
  it('', () => {
    const root = buildTreeFromArray([2, 1, 3]);
    const output = [2, 3, 1];

    const invertedTree = invertTree(root);
    expect(treeToArrayLevelOrder(invertedTree)).toEqual(output);
  });
  it('', () => {
    const root = buildTreeFromArray([]);
    const output: any = [];

    const invertedTree = invertTree(root);
    expect(treeToArrayLevelOrder(invertedTree)).toEqual(output);
  });
});
