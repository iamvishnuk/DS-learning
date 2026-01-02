import { WeightedAdjacencyList } from '../../types';

const walk = (
  graph: WeightedAdjacencyList,
  curr: number,
  target: number,
  seen: boolean[],
  path: number[]
): boolean => {
  if (seen[curr]) return false;
  seen[curr] = true;

  path.push(curr);

  if (curr === target) return true;

  const list = graph[curr];
  for (let i = 0; i < list.length; i++) {
    const edge = list[i];
    if (walk(graph, edge.to, target, seen, path)) {
      return true;
    }
  }

  path.pop();

  return false;
};

export const DFSGraphList = (
  graph: WeightedAdjacencyList,
  source: number,
  target: number
): number[] | null => {
  const seen: boolean[] = new Array(graph.length).fill(false);
  const path: number[] = [];

  walk(graph, source, target, seen, path);

  if (path.length === 0) {
    return null;
  }

  return path;
};
