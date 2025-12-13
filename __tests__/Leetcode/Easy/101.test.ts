import { describe, expect, it } from 'vitest';
import { buildTreeFromArray } from '../../utils';
import { isSymmetric } from '../../../LeetCode/Easy/101';

describe('101. Symmetric Tree', () => {
  it('', () => {
    const root = buildTreeFromArray([1, 2, 2, 3, 4, 4, 3]);
    expect(isSymmetric(root)).toBeTruthy();
  });
  it('', () => {
    const root = buildTreeFromArray([1, 2, 2, null, 3, null, 3]);
    expect(isSymmetric(root)).toBeFalsy();
  });
  it('', () => {
    const root = buildTreeFromArray([1]);
    expect(isSymmetric(root)).toBeTruthy();
  });
  it('', () => {
    const root = buildTreeFromArray([1, 2, 2]);
    expect(isSymmetric(root)).toBeTruthy();
  });
});
