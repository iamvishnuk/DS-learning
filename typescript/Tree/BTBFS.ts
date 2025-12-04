import { BinaryNode } from '../../types';

// Binary Tree Breadth-First-Search
export const BFS = (head: BinaryNode<number>, target: number): boolean => {
  const queue: (BinaryNode<number> | null)[] = [head];

  while (queue.length) {
    const curr = queue.shift() as BinaryNode<number> | undefined | null;

    if (!curr) {
      continue;
    }

    if (curr?.value === target) {
      return true;
    }

    queue.push(curr.left);
    queue.push(curr.right);
  }

  return false;
};
