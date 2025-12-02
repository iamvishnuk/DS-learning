type BinaryNode<T> = {
  value: T;
  left: BinaryNode<T> | null;
  right: BinaryNode<T> | null;
};

const search = (curr: BinaryNode<number> | null, path: number[]): number[] => {
  if (!curr) {
    return path;
  }

  search(curr.left, path);
  search(curr.right, path);

  path.push(curr.value);

  return path;
};

export const PostOrder = (head: BinaryNode<number>): number[] => {
  return search(head, []);
};
