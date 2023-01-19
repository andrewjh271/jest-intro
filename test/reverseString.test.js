import reverseString from '../src/reverseString';

test('reverses a string', () => {
  expect(reverseString('abcde')).toBe('edcba');
});

test('works with a sentence', () => {
  expect(
    reverseString('The brown fox jumps over the polka dot sandwich.')
  ).toBe('.hciwdnas tod aklop eht revo spmuj xof nworb ehT');
});
