import { describe, it, expect } from 'vitest';
import { BFSGraphMatrix } from '../../typescript/Graph/BFSGraphMatrix';
import { matrix2 } from '../utils/graph';

describe('BFSGraphMatrix', () => {
  it('', () => {
    expect(BFSGraphMatrix(matrix2, 0, 6)).toEqual([0, 1, 4, 5, 6]);
    expect(BFSGraphMatrix(matrix2, 6, 0)).toEqual(null);
  });
});
