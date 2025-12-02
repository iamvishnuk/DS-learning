import { describe, it, expect } from 'vitest';
import { tree } from '../utils/Tree';
import { PreOrderSearch } from '../../typescript/Tree/PreOrderSearch';

describe('PreOrderSearch', () => {
  it('', () => {
    expect(PreOrderSearch(tree)).toEqual([
      20, 10, 5, 7, 15, 50, 30, 29, 45, 100
    ]);
  });
});
