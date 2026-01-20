import { describe, expect, it } from 'vitest';
import { buildTreeFromArray } from '../../utils';
import { sumRootToLeaf } from '../../../LeetCode/Easy/1022';

describe('1022. Sum of Root To Leaf Binary Number', () => {
  it('', () => {
    const input = [1, 0, 1, 0, 1, 0, 1];
    const output = 22;

    const root = buildTreeFromArray(input);

    expect(sumRootToLeaf(root)).toEqual(output);
  });
  it('', () => {
    const input = [0];
    const output = 0;

    const root = buildTreeFromArray(input);

    expect(sumRootToLeaf(root)).toEqual(output);
  });
});
