import { WeightedAdjacencyMatrix } from '../../types';

export const BFSGraphMatrix = (
  graph: WeightedAdjacencyMatrix,
  source: number,
  target: number
): number[] | null => {
  const seen = new Array(graph.length).fill(false);
  const prev = new Array(graph.length).fill(-1);

  seen[source] = true;
  const queue: number[] = [source];

  do {
    const curr = queue.shift() as number;
    if (curr === target) {
      break;
    }

    const adjs = graph[curr];

    for (let i = 0; i < adjs.length; i++) {
      if (adjs[i] === 0) continue;
      if (seen[i]) continue;

      seen[i] = true;
      prev[i] = curr;

      queue.push(i);
    }
    seen[curr] = true;
  } while (queue.length);

  if (prev[target] === -1) {
    return null;
  }

  // Build it backwards
  let curr = target;
  const out: number[] = [];

  while (prev[curr] !== -1) {
    out.push(curr);
    curr = prev[curr];
  }

  return [source].concat(out.reverse());
};
