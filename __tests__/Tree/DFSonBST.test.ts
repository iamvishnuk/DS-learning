import { describe, expect, it } from 'vitest';
import { DFS } from '../../typescript/Tree/DFSonBST';
import { tree } from '../utils/Tree';

describe('DFS on BST', () => {
  it('', () => {
    expect(DFS(tree, 45)).toEqual(true);
    expect(DFS(tree, 7)).toEqual(true);
    expect(DFS(tree, 69)).toEqual(false);
  });
});
