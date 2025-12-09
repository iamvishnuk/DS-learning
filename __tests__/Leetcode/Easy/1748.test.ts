import { describe, expect, it } from 'vitest';
import { sumOfUnique } from '../../../LeetCode/Easy/1748';

describe('1748. Sum of Unique Elements', () => {
  it('', () => {
    const nums = [1, 2, 3, 2];
    const output = 4;
    expect(sumOfUnique(nums)).toBe(output);
  });
  it('', () => {
    const nums = [1, 1, 1, 1, 1];
    const output = 0;
    expect(sumOfUnique(nums)).toBe(output);
  });
  it('', () => {
    const nums = [1, 2, 3, 4, 5];
    const output = 15;
    expect(sumOfUnique(nums)).toBe(output);
  });
});
