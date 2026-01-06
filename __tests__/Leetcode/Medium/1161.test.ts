import { describe, expect, it } from 'vitest';
import { buildTreeFromArray } from '../../utils';
import { maxLevelSum } from '../../../LeetCode/Medium/1161';

describe('1161. Maximum Level Sum of a Binary Tree', () => {
  it('', () => {
    const input = [1, 7, 0, 7, -8, null, null];
    const expected = 2;

    const root = buildTreeFromArray(input);

    expect(maxLevelSum(root)).toEqual(expected);
  });

  it('', () => {
    const input = [989, null, 10250, 98693, -89388, null, null, null, -32127];
    const expected = 2;

    const root = buildTreeFromArray(input);

    expect(maxLevelSum(root)).toEqual(expected);
  });
});
