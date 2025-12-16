import { describe, expect, it } from 'vitest';
import { buildTreeFromArray } from '../../utils';
import { findMode } from '../../../LeetCode/Easy/501';

describe('501. Find Mode in Binary Search Tree', () => {
  it('', () => {
    const input = [1, null, 2, 2];
    const root = buildTreeFromArray(input);
    const output = [2];
    expect(findMode(root)).toEqual(output);
  });
  it('', () => {
    const input = [0];
    const root = buildTreeFromArray(input);
    const output = [0];
    expect(findMode(root)).toEqual(output);
  });
  it('', () => {
    const input = [-1, -1, -1];
    const root = buildTreeFromArray(input);
    const output = [-1];
    expect(findMode(root)).toEqual(output);
  });
});
