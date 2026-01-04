// 1721. Swapping Node in a Linked List

import { ListNode } from '../../types';

export const swapNodes = (
  head: ListNode | null,
  k: number
): ListNode | null => {
  const arr: number[] = [];

  let curr = head;
  while (curr) {
    arr.push(curr.val);
    curr = curr.next;
  }

  // the values
  const temp = arr[k - 1];
  arr[k - 1] = arr[arr.length - k];
  arr[arr.length - k] = temp;

  const dummy = new ListNode(arr[0]);
  let node = dummy;

  for (let i = 1; i < arr.length; i++) {
    node.next = new ListNode(arr[i]);
    node = node.next;
  }

  return dummy;
};
