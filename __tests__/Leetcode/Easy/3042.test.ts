import { describe, expect, it } from 'vitest';
import { countPrefixSuffixPairs } from '../../../LeetCode/Easy/3042';

describe('3042. Count Prefix and Suffix Pairs', () => {
  it('', () => {
    const words = ['a', 'aba', 'ababa', 'aa'];
    const output = 4;
    expect(countPrefixSuffixPairs(words)).toBe(output);
  });

  it('', () => {
    const words = ['pa', 'papa', 'ma', 'mama'];
    const output = 2;
    expect(countPrefixSuffixPairs(words)).toBe(output);
  });

  it('', () => {
    const words = ['abab', 'ab'];
    const output = 0;
    expect(countPrefixSuffixPairs(words)).toBe(output);
  });
});
