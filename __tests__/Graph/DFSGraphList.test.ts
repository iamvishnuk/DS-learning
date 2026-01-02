import { describe, it, expect } from 'vitest';
import { DFSGraphList } from '../../typescript/Graph/DFSGraphList';
import { list2 } from '../utils/graph';

describe('BFSGraphMatrix', () => {
  it('', () => {
    expect(DFSGraphList(list2, 0, 6)).toEqual([0, 1, 4, 5, 6]);
    expect(DFSGraphList(list2, 6, 0)).toEqual(null);
  });
});
