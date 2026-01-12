import { describe, expect, it } from 'vitest';
import { buildTreeFromArray } from '../../utils';
import { findSecondMinimumValue } from '../../../LeetCode/Easy/671';

describe('671. Second Minimu Node in a Binary Tree', () => {
  it('', () => {
    const input = [2, 2, 5, null, null, 5, 7];
    const root = buildTreeFromArray(input);

    expect(findSecondMinimumValue(root)).toEqual(5);
  });
  it('', () => {
    const input = [2, 2, 2];
    const root = buildTreeFromArray(input);

    expect(findSecondMinimumValue(root)).toEqual(-1);
  });
});
