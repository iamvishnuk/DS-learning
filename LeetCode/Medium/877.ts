// 877. Stone Game
/*
 * Array
 * Math
 * Dynamic Programming
 * Minimax
 * Game Theory
 * Zero-Sum Game
 */

function stoneGame(piles: number[]): boolean {
  let oddSum: number = 0;
  let evenSum: number = 0;

  for (let i = 0; i < piles.length; i++) {
    if (i % 2 === 0) {
      evenSum += piles[i];
    } else {
      oddSum += piles[i];
    }
  }

  return oddSum !== evenSum;
}

function stoneGame1(piles: number[]): boolean {
  return true;
}
