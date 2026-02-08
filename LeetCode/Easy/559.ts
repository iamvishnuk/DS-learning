// 559. Maximum Depth of N-ary Tree

import { _Node } from '../../types';

function maxDepth(root: _Node | null): number {
  if (root === null) return 0;
  if (root.children.length === 0) return 1;

  return 1 + Math.max(...root.children.map((node) => maxDepth(node)));
}
