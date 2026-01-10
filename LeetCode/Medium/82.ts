// 82. Remove Duplicate from Sorted List II

import { ListNode } from '../../types';

export const deleteDuplicates = (head: ListNode | null): ListNode | null => {
  const dummy = new ListNode(0, head);
  let curr = dummy;

  while (head) {
    if (head.next && head.val === head.next.val) {
      // iterate until we have duplicate
      while (head.next && head.val === head.next.val) {
        head = head.next;
      }

      curr.next = head.next;
    } else {
      curr = curr.next!;
    }

    head = head.next;
  }

  return dummy.next;
};
