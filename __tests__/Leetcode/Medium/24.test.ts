import { describe, expect, it } from 'vitest';
import { arrayToLinkedList, linkedListToArray } from '../../utils/LinkedList';
import { swapPairs } from '../../../LeetCode/Medium/24';

describe('24. Swap Nodes in Pairs', () => {
  it('', () => {
    const input: number[] = [1, 2, 3, 4];
    const expected: number[] = [2, 1, 4, 3];

    const head = arrayToLinkedList(input);
    const result = swapPairs(head);

    expect(linkedListToArray(result)).toEqual(expected);
  });
  it('', () => {
    const input: number[] = [];
    const expected: number[] = [];

    const head = arrayToLinkedList(input);
    const result = swapPairs(head);

    expect(linkedListToArray(result)).toEqual(expected);
  });
  it('', () => {
    const input: number[] = [1];
    const expected: number[] = [1];

    const head = arrayToLinkedList(input);
    const result = swapPairs(head);

    expect(linkedListToArray(result)).toEqual(expected);
  });
  it('', () => {
    const input: number[] = [1, 2, 3];
    const expected: number[] = [2, 1, 3];

    const head = arrayToLinkedList(input);
    const result = swapPairs(head);

    expect(linkedListToArray(result)).toEqual(expected);
  });
});
