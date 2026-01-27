import { describe, expect, it } from 'vitest';
import { myAtoi } from '../../../LeetCode/Medium/8';

describe('8. String to Integer (atoi)', () => {
  it('', () => {
    const input = '42';
    const expected = 42;
    expect(myAtoi(input)).toEqual(expected);
  });
  it('', () => {
    const input = ' -042';
    const expected = -42;
    expect(myAtoi(input)).toEqual(expected);
  });
  it('', () => {
    const input = '1337c0d3';
    const expected = 1337;
    expect(myAtoi(input)).toEqual(expected);
  });
  it('', () => {
    const input = '0-1';
    const expected = 0;
    expect(myAtoi(input)).toEqual(expected);
  });
  it('', () => {
    const input = 'words and 987';
    const expected = 0;
    expect(myAtoi(input)).toEqual(expected);
  });
  it('', () => {
    const input = '4193 with words';
    const expected = 4193;
    expect(myAtoi(input)).toEqual(expected);
  });
  it('', () => {
    const input = '+1';
    const expected = 1;
    expect(myAtoi(input)).toEqual(expected);
  });
});
