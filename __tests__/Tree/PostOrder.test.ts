import { describe, it, expect } from 'vitest';
import { tree } from '../utils/Tree';
import { PostOrder } from '../../typescript/Tree/PostOrder';

describe('PreOrderSearch', () => {
  it('', () => {
    expect(PostOrder(tree)).toEqual([7, 5, 15, 10, 29, 45, 30, 100, 50, 20]);
  });
});
