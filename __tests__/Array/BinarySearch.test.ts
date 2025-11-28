import { describe, it, expect } from 'vitest';
import { BinarySearch } from '../../typescript/Array/BinarySearch';

describe('Binary Search', () => {
  const foo = [1, 3, 4, 69, 71, 81, 90, 99, 420, 1337, 69420];
  it('Should return true when target exists', () => {
    expect(BinarySearch(foo, 69)).toEqual(true);
    expect(BinarySearch(foo, 69420)).toEqual(true);
    expect(BinarySearch(foo, 1)).toEqual(true);
    expect(BinarySearch(foo, 69421)).toEqual(false);
    expect(BinarySearch(foo, 1336)).toEqual(false);
    expect(BinarySearch(foo, 0)).toEqual(false);
  });
  it('should return false when traget does not exists ', () => {
    expect(BinarySearch(foo, 69421)).toEqual(false);
    expect(BinarySearch(foo, 1336)).toEqual(false);
    expect(BinarySearch(foo, 0)).toEqual(false);
  });
});
