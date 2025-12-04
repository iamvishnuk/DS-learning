import { BinaryNode } from '../../types';

export const CompareBT = (
  a: BinaryNode<number> | null,
  b: BinaryNode<number> | null
): boolean => {
  if (a === null && b === null) {
    return true;
  }

  if (a === null || b === null) {
    return false;
  }

  if (a.value !== b.value) {
    return false;
  }

  return CompareBT(a.left, b.left) && CompareBT(a.right, b.right);
};
