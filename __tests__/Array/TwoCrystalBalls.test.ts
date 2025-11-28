import { describe, expect, it } from 'vitest';
import { TwoCrystalBalls } from '../../typescript/Array/TwoCrystalBalls';

describe('Two Crystal Balls', () => {
  let idx = Math.floor(Math.random() * 10000);
  const data = new Array(10000).fill(false);

  for (let i = idx; i < 10000; ++i) {
    data[i] = true;
  }

  it('should pass', () => {
    expect(TwoCrystalBalls(data)).toEqual(idx);
    expect(TwoCrystalBalls(new Array(821).fill(false))).toEqual(-1);
  });
});
