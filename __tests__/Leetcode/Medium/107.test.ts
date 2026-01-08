import { describe, expect, it } from 'vitest';
import { buildTreeFromArray } from '../../utils';
import { levelOrderBottom } from '../../../LeetCode/Medium/107';

describe('107. Binary Tree Level Order Traversal II', () => {
  it('', () => {
    const input: Array<number | null> = [3, 9, 20, null, null, 15, 7];
    const expected: number[][] = [[15, 7], [9, 20], [3]];

    const root = buildTreeFromArray(input);

    expect(levelOrderBottom(root)).toEqual(expected);
  });
  const input: Array<number | null> = [1];
  it('', () => {
    const expected: number[][] = [[1]];

    const root = buildTreeFromArray(input);

    expect(levelOrderBottom(root)).toEqual(expected);
  });
  it('', () => {
    const input: Array<number | null> = [];
    const expected: number[][] = [];

    const root = buildTreeFromArray(input);

    expect(levelOrderBottom(root)).toEqual(expected);
  });
});
