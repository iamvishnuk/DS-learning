import { describe, it, expect } from 'vitest';
import { arrayToLinkedList, linkedListToArray } from '../../utils/LinkedList';
import { swapNodes } from '../../../LeetCode/Medium/1721';

describe('1721. Swapping Node in a Linked List', () => {
  it('', () => {
    const input = [1, 2, 3, 4, 5];
    const k = 2;
    const expected = [1, 4, 3, 2, 5];

    const head = arrayToLinkedList(input);
    const result = swapNodes(head, k);
    expect(linkedListToArray(result)).toEqual(expected);
  });
  it('', () => {
    const input = [7, 9, 6, 6, 7, 8, 3, 0, 9, 5];
    const k = 5;
    const expected = [7, 9, 6, 6, 8, 7, 3, 0, 9, 5];

    const head = arrayToLinkedList(input);
    const result = swapNodes(head, k);
    expect(linkedListToArray(result)).toEqual(expected);
  });
});
