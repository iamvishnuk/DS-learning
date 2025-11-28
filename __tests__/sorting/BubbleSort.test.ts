import { describe, expect, it } from 'vitest';
import { BubbleSort } from '../../typescript/sorting/BubbleSort';

describe('Bubble Sort', () => {
  it('Bubble Sort', () => {
    const arr = [9, 3, 7, 4, 69, 420, 42];

    debugger;
    BubbleSort(arr);
    expect(arr).toEqual([3, 4, 7, 9, 42, 69, 420]);
  });
});
