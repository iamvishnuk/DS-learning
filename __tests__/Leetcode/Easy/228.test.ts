import { describe, expect, it } from 'vitest';
import { summaryRanges } from '../../../LeetCode/Easy/228';

describe('228. Summary Ranges', () => {
  it('', () => {
    const nums = [0, 1, 2, 4, 5, 7];
    const output = ['0->2', '4->5', '7'];
    expect(summaryRanges(nums)).toEqual(output);
  });
  it('', () => {
    const nums = [0, 2, 3, 4, 6, 8, 9];
    const output = ['0', '2->4', '6', '8->9'];
    expect(summaryRanges(nums)).toEqual(output);
  });
});
