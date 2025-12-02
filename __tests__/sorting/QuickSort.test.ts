import { describe, it, expect } from 'vitest';
import { QuickSort } from '../../typescript/sorting/QuickSort';

describe('Quick Sort', () => {
  it('', () => {
    const arr = [9, 3, 7, 4, 69, 420, 42];

    debugger;
    QuickSort(arr);
    expect(arr).toEqual([3, 4, 7, 9, 42, 69, 420]);
  });
});
