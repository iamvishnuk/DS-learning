// 202. Happy Number

function isHappy(n: number): boolean {
  const seen = new Set();

  while (true) {
    let sum = 0;
    for (let digit of n.toString()) {
      sum += Number(digit) ** 2;
    }

    if (sum === 1) return true;
    if (seen.has(sum)) return false; // hit cyclic
    seen.add(sum);

    n = sum;
  }
}
