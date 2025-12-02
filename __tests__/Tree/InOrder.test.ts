import { describe, it, expect } from 'vitest';
import { tree } from '../utils/Tree';
import { InOrder } from '../../typescript/Tree/InOrder';

describe('PreOrderSearch', () => {
  it('', () => {
    expect(InOrder(tree)).toEqual([5, 7, 10, 15, 20, 29, 30, 45, 50, 100]);
  });
});
