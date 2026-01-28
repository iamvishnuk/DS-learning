// 70. Climbing Stairs

function climbStairs(n: number): number {
  if (n <= 2) return n;

  let prev1 = 1;
  let prev2 = 2;

  for (let i = 3; i <= n; i++) {
    let curr = prev1 + prev2;
    prev1 = prev2;
    prev2 = curr;
  }

  return prev2;
}

/**
 * if step = 1 -> 1
 * if step = 2 -> 2
 * if step = 3 -> 3
 * if step = 4 -> 5
 * if step = n -> step(n - 1) + step(n - 2)
 * */
