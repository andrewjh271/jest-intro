import analyzeArray from "../src/analyzeArray";

test('finds the average', () => {
  expect(analyzeArray([2, 3,  4, 5, 6, 7, 1]).average).toBe(4);
});

test('finds the average with decimals', () => {
  expect(analyzeArray([1, 2, 3, 4]).average).toBe(2.5);
})

test('finds the min', () => {
  expect(analyzeArray([1, 2, 3, 4, 5]).min).toBe(1);
})

test('finds the  min  out of order', () => {
  expect(analyzeArray([5, 4, 3, 2, 1]).min).toBe(1);
})

test('finds the max', () => {
  expect(analyzeArray([1, 2, 3, 4, 5]).max).toBe(5);
})

test('finds the length', () => {
  expect(analyzeArray([1, 2, 3, 4, 4, 3, 2]).length).toBe(7);
})

test('does it all', () => {
  expect(analyzeArray([1, 2, 3, 4])).toEqual({
    average: 2.5,
    min: 1,
    max: 4,
    length: 4
  });
})

test('works with empty array', () => {
  expect(analyzeArray([])).toEqual({
    average: undefined,
    min: undefined,
    max: undefined,
    length: 0
  });
})