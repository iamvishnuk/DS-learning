import { ListNode } from '../../types';

export const swapPairs = (head: ListNode | null): ListNode | null => {
  if (!head || !head.next) return head;

  const dummy = new ListNode(0, head);
  let prev = dummy;

  while (prev.next && prev.next.next) {
    const first = prev.next;
    const second = first.next!;

    // swap
    first.next = second.next;
    second.next = first;
    prev.next = second;

    // move prev forward
    prev = first;
  }

  return dummy.next;
};
