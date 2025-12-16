import { describe, expect, it } from 'vitest';
import { buildTreeFromArray } from '../../utils';
import { sumOfLeftLeaves } from '../../../LeetCode/Easy/404';

describe('404. Sum of Left Leaves', () => {
  it('', () => {
    const input = [3, 9, 20, null, null, 15, 7];
    const root = buildTreeFromArray(input);
    const output = 24;
    expect(sumOfLeftLeaves(root)).toBe(output);
  });
  it('', () => {
    const input = [1];
    const root = buildTreeFromArray(input);
    const output = 0;
    expect(sumOfLeftLeaves(root)).toBe(output);
  });
});
