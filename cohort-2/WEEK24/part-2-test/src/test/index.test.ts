import {sum } from '../index'
import {describe, expect, it } from "@jest/globals";


describe('sum', () => {
  it('should return the sum of two numbers', () => {
    expect(sum(1, 2)).toBe(3);
  });
});