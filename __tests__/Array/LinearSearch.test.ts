import { describe, it, expect } from 'vitest'
import { LinearSearch } from '../../typescript/Array/LinearSearch';

describe('Linear Search', () => {
  const foo = [1, 3, 4, 69, 71, 81, 90, 99, 420, 1337, 69420];
  it("Should return true when target exists", () => {
    expect(LinearSearch(foo, 69)).toEqual(true);
    expect(LinearSearch(foo, 69420)).toEqual(true);
    expect(LinearSearch(foo, 1)).toEqual(true);
    expect(LinearSearch(foo, 69421)).toEqual(false);
    expect(LinearSearch(foo, 1336)).toEqual(false);
    expect(LinearSearch(foo, 0)).toEqual(false);
  })
  it("should return false when traget does not exists ", () => {
    expect(LinearSearch(foo, 69421)).toEqual(false);
    expect(LinearSearch(foo, 1336)).toEqual(false);
    expect(LinearSearch(foo, 0)).toEqual(false);
  })
})
