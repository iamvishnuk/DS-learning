// 3633. Earliest Finish Time for Land and Water Rides I
/*
 * Array
 * Two Pointer
 * Binary Search
 * Greedy
 * Sorting
 */

function earliestFinishTime(
  landStartTime: number[],
  landDuration: number[],
  waterStartTime: number[],
  waterDuration: number[]
): number {
  const n: number = landStartTime.length;
  const m: number = waterStartTime.length;

  let res: number = Infinity;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      const land = landStartTime[i] + landDuration[i];
      const landWater = Math.max(land, waterStartTime[j]) + waterDuration[j];

      const water = waterStartTime[j] + waterDuration[j];
      const waterLand = Math.max(water, landStartTime[i]) + landDuration[i];

      res = Math.min(res, landWater, waterLand);
    }
  }

  return res;
}

function earliestFinishTime1(
  landStartTime: number[],
  landDuration: number[],
  waterStartTime: number[],
  waterDuration: number[]
): number {
  let earliestLandFinish = Infinity;

  for (let i = 0; i < landStartTime.length; i++) {
    const finish = landStartTime[i] + landDuration[i];

    earliestLandFinish = Math.min(earliestLandFinish, finish);
  }

  let landThenWater = Infinity;

  for (let i = 0; i < waterStartTime.length; i++) {
    const finish =
      Math.max(earliestLandFinish, waterStartTime[i]) + waterDuration[i];

    landThenWater = Math.min(landThenWater, finish);
  }

  let earliestWaterFinish = Infinity;

  for (let i = 0; i < waterStartTime.length; i++) {
    const finish = waterStartTime[i] + waterDuration[i];

    earliestWaterFinish = Math.min(earliestWaterFinish, finish);
  }

  let waterThenLand = Infinity;

  for (let i = 0; i < landStartTime.length; i++) {
    const finish =
      Math.max(earliestWaterFinish, landStartTime[i]) + landDuration[i];

    waterThenLand = Math.min(waterThenLand, finish);
  }

  return Math.min(landThenWater, waterThenLand);
}
