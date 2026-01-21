import { describe, expect, it } from 'vitest';
import { buildTreeFromArray } from '../../utils';
import { findTilt } from '../../../LeetCode/Easy/563';

describe('563. Binary Tree Tilt', () => {
  it('', () => {
    const input = [1, 2, 3];
    const expected = 1;
    const root = buildTreeFromArray(input);

    expect(findTilt(root)).toEqual(expected);
  });
  it('', () => {
    const input = [4, 2, 9, 3, 5, null, 7];
    const expected = 15;
    const root = buildTreeFromArray(input);

    expect(findTilt(root)).toEqual(expected);
  });
  it('', () => {
    const input = [21, 7, 14, 1, 1, 2, 2, 3, 3];
    const expected = 9;
    const root = buildTreeFromArray(input);

    expect(findTilt(root)).toEqual(expected);
  });
});
