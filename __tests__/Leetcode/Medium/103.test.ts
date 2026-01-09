import { describe, it, expect } from 'vitest';
import { buildTreeFromArray } from '../../utils';
import { zigzagLevelOrder } from '../../../LeetCode/Medium/103';

describe('107. Binary Tree Level Order Traversal II', () => {
  it('', () => {
    const input: Array<number | null> = [3, 9, 20, null, null, 15, 7];
    const expected: number[][] = [[3], [20, 9], [15, 7]];

    const root = buildTreeFromArray(input);

    expect(zigzagLevelOrder(root)).toEqual(expected);
  });

  const input: Array<number | null> = [1];
  it('', () => {
    const expected: number[][] = [[1]];

    const root = buildTreeFromArray(input);

    expect(zigzagLevelOrder(root)).toEqual(expected);
  });

  it('', () => {
    const input: Array<number | null> = [];
    const expected: number[][] = [];

    const root = buildTreeFromArray(input);

    expect(zigzagLevelOrder(root)).toEqual(expected);
  });

  it('', () => {
    const input: Array<number | null> = [1, 2, 3, 4, null, null, 5];
    const expected: number[][] = [[1], [3, 2], [4, 5]];

    const root = buildTreeFromArray(input);

    expect(zigzagLevelOrder(root)).toEqual(expected);
  });
});
