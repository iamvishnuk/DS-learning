export const BinarySearch = (arr: number[], target: number): boolean => {
  let start = 0;
  let end = arr.length;

  do {
    let mid = Math.floor(start + (end - start) / 2);
    let value = arr[mid];

    if (value === target) {
      return true;
    } else if (value > target) {
      end = mid;
    } else {
      start = mid + 1;
    }
  } while (start < end);

  return false;
};
