import { describe, expect, it } from 'vitest';
import { buildBSTFromArray } from '../../utils';
import { kthSmallest } from '../../../LeetCode/Medium/230';

describe('230. Kth Smallest Element in a BST', () => {
  it('', () => {
    const input = [3, 1, 4, null, 2];
    const k = 1;

    const root = buildBSTFromArray(input);
    expect(kthSmallest(root, k)).toEqual(1);
  });
  it('', () => {
    const input = [5, 3, 6, 2, 4, null, null, 1];
    const k = 3;

    const root = buildBSTFromArray(input);
    expect(kthSmallest(root, k)).toEqual(3);
  });
  it('', () => {
    const input = [
      41,
      37,
      44,
      24,
      39,
      42,
      48,
      1,
      35,
      38,
      40,
      null,
      43,
      46,
      49,
      0,
      2,
      30,
      36,
      null,
      null,
      null,
      null,
      null,
      null,
      45,
      47,
      null,
      null,
      null,
      null,
      null,
      4,
      29,
      32,
      null,
      null,
      null,
      null,
      null,
      null,
      3,
      9,
      26,
      null,
      31,
      34,
      null,
      null,
      7,
      11,
      25,
      27,
      null,
      null,
      33,
      null,
      6,
      8,
      10,
      16,
      null,
      null,
      null,
      28,
      null,
      null,
      5,
      null,
      null,
      null,
      null,
      null,
      15,
      19,
      null,
      null,
      null,
      null,
      12,
      null,
      18,
      20,
      null,
      13,
      17,
      null,
      null,
      22,
      null,
      14,
      null,
      null,
      21,
      23
    ];
    const k = 25;

    const root = buildBSTFromArray(input);
    expect(kthSmallest(root, k)).toEqual(24);
  });
});
