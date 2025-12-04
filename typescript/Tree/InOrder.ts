import { BinaryNode } from '../../types';

const search = (curr: BinaryNode<number> | null, path: number[]): number[] => {
  if (!curr) {
    return path;
  }

  search(curr.left, path);

  path.push(curr.value);

  search(curr.right, path);

  return path;
};

export const InOrder = (head: BinaryNode<number>): number[] => {
  return search(head, []);
};
