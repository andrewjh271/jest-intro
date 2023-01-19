import { add, subtract, divide, multiply } from '../src/calculator.js';

test('adds two numbers', () => {
  expect(add(3, 4)).toBe(7);
});

test('subtracts two numbers', () => {
  expect(subtract(3, 4)).toBe(-1);
});

test('divides two numbers', () => {
  expect(divide(1, 3)).toBeCloseTo(0.33333);
});

test('multiplies two numbers', () => {
  expect(multiply(6, 7)).toBe(42);
});
