// 3345. Smallest Divisible Digit Product I
/*
 * Math
 * Enumeration
 */

function smallestNumber(n: number, t: number): number {
  while (n) {
    let product = 1;

    for (let digit of n.toString()) {
      product *= Number(digit);
    }

    if (product % t === 0) {
      return n;
    }

    n++;
  }

  return n;
}
