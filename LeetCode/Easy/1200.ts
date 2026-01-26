// 1200. Minimum Absolute Difference.

function minimumAbsDifference(arr: number[]): number[][] {
  arr.sort((a, b) => a - b);

  let diff = Number.MAX_SAFE_INTEGER;
  let output: number[][] = [];

  for (let i = 0; i < arr.length - 1; i++) {
    let currentDiff = Math.abs(arr[i] - arr[i + 1]);

    if (currentDiff < diff) {
      diff = currentDiff;
      output = [];
      output = [[arr[i], arr[i + 1]]];
    } else if (diff === currentDiff) {
      output.push([arr[i], arr[i + 1]]);
    }
  }

  return output;
}
