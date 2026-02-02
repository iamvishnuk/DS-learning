import { describe, expect, it } from 'vitest';
import { buildBSTFromArray } from '../../utils';
import { findTarget } from '../../../LeetCode/Easy/653';

describe('653. Two Sum IV - Input is a BST', () => {
  it('', () => {
    const input = [5, 3, 6, 2, 4, null, 7];
    const k = 9;
    const root = buildBSTFromArray(input);

    expect(findTarget(root, k)).toBeTruthy();
  });

  it('', () => {
    const input = [5, 3, 6, 2, 4, null, 7];
    const k = 28;
    const root = buildBSTFromArray(input);

    expect(findTarget(root, k)).toBeFalsy();
  });

  it('', () => {
    const input = [2, 1, 3];
    const k = 4;
    const root = buildBSTFromArray(input);

    expect(findTarget(root, k)).toBeTruthy();
  });
});
