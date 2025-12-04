import { BinaryNode } from '../../types';

const pso = (curr: BinaryNode<number> | null, path: number[]): number[] => {
  if (!curr) {
    return path;
  }

  path.push(curr.value);

  pso(curr.left, path);
  pso(curr.right, path);

  return path;
};

export const PreOrderSearch = (head: BinaryNode<number>): number[] => {
  return pso(head, []);
};
