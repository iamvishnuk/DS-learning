import { describe, expect, it } from 'vitest';
import { findContentChildren } from '../../../LeetCode/Easy/455';

describe('455. Assign Cookies', () => {
  it('', () => {
    const g = [1, 2, 3];
    const s = [1, 1];
    const output = 1;
    expect(findContentChildren(g, s)).toBe(output);
  });
  it('', () => {
    const g = [1, 2];
    const s = [1, 2, 3];
    const output = 2;
    expect(findContentChildren(g, s)).toBe(output);
  });
});
