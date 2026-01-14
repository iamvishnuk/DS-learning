import { describe, expect, it } from 'vitest';
import { buildTreeFromArray } from '../../utils';
import { rightSideView } from '../../../LeetCode/Medium/199';

describe('199. Binary Tree Right Side View', () => {
  it('', () => {
    const input = [1, 2, 3, null, 5, null, 4];
    const expected = [1, 3, 4];
    const root = buildTreeFromArray(input);

    expect(rightSideView(root)).toEqual(expected);
  });
  it('', () => {
    const input = [1, 2, 3, 4, null, null, null, 5];
    const expected = [1, 3, 4, 5];
    const root = buildTreeFromArray(input);

    expect(rightSideView(root)).toEqual(expected);
  });
  it('', () => {
    const input = [1, null, 3];
    const expected = [1, 3];
    const root = buildTreeFromArray(input);

    expect(rightSideView(root)).toEqual(expected);
  });
  it('', () => {
    const input: number[] = [];
    const expected: number[] = [];
    const root = buildTreeFromArray(input);

    expect(rightSideView(root)).toEqual(expected);
  });
});
