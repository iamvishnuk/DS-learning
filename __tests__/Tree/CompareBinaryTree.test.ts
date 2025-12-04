import { describe, it, expect } from 'vitest';
import { CompareBT } from '../../typescript/Tree/CompareBinaryTree';
import { tree, tree2 } from '../utils/Tree';

describe('Compare Binary Tree', () => {
  it('', () => {
    expect(CompareBT(tree, tree)).toEqual(true);
    expect(CompareBT(tree, tree2)).toEqual(false);
  });
});
