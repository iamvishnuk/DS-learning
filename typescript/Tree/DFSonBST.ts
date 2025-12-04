import { BinaryNode } from '../../types';

const serach = (curr: BinaryNode<number> | null, target: number): boolean => {
  if (!curr) {
    return false;
  }

  if (curr.value === target) {
    return true;
  }

  if (curr.value < target && curr.right) {
    return DFS(curr.right, target);
  }

  if (curr.left) {
    return DFS(curr.left, target);
  }
  return false;
};

export const DFS = (head: BinaryNode<number>, target: number): boolean => {
  return serach(head, target);
};
