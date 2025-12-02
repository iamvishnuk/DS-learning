const qs = (arr: number[], lo: number, hi: number): void => {
  if (lo >= hi) {
    return;
  }

  const pivotIndex = partition(arr, lo, hi);

  qs(arr, lo, pivotIndex - 1);
  qs(arr, pivotIndex + 1, hi);
};

const partition = (arr: number[], lo: number, hi: number): number => {
  const pivot = arr[hi];

  let idx = lo - 1;

  for (let i = lo; i < hi; i++) {
    if (arr[i] < pivot) {
      idx++;
      const temp = arr[i];
      arr[i] = arr[idx];
      arr[idx] = temp;
    }
  }

  idx++;
  arr[hi] = arr[idx];
  arr[idx] = pivot;

  return idx;
};

export const QuickSort = (arr: number[]): void => {
  qs(arr, 0, arr.length - 1);
};
