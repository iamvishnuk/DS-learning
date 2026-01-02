import { describe, expect, it } from 'vitest';
import { DijkstraList } from '../../typescript/Graph/DijkstraList';
import { list1 } from '../utils/graph';

describe('DijkstraList', () => {
  it('', () => {
    expect(DijkstraList(0, 6, list1)).toEqual([0, 1, 4, 5, 6]);
  });
});
