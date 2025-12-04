import { describe, it, expect } from 'vitest';
import { tree } from '../utils/Tree';
import { BFS } from '../../typescript/Tree/BTBFS';

describe('Binary Tree Breadth-First Search', () => {
  it('', () => {
    expect(BFS(tree, 45)).toEqual(true);
    expect(BFS(tree, 7)).toEqual(true);
    expect(BFS(tree, 69)).toEqual(false);
  });
});
