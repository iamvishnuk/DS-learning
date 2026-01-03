import { ListNode } from '../../types';

export const arrayToLinkedList = (arr: number[]): ListNode | null => {
  if (arr.length === 0) return null;

  const head = new ListNode(arr[0]);
  let curr = head;

  for (let i = 1; i < arr.length; i++) {
    curr.next = new ListNode(arr[i]);
    curr = curr.next;
  }

  return head;
};

export const linkedListToArray = (head: ListNode | null): number[] => {
  const result: number[] = [];
  let curr = head;

  while (curr) {
    result.push(curr.val);
    curr = curr.next;
  }

  return result;
};
