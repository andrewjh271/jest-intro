import ceasarCipher from '../src/ceasarCipher';

test('performs basic shift', () => {
  expect(ceasarCipher('hello world', 3)).toBe('khoor zruog');
});

test('performs basic negative shift', () => {
  expect(ceasarCipher('hijklmnop', -4)).toBe('defghijkl');
});

test('works with capitals', () => {
  expect(ceasarCipher('AbCdEFG', 2)).toBe('CdEfGHI');
})

test('wraps', () => {
  expect(ceasarCipher('wxyz', 2)).toBe('yzab');
})

test('negative wraps', () => {
  expect(ceasarCipher('abcd', -5)).toBe('vwxy');
})

test('works for large numbers', () => {
  expect(ceasarCipher('hello, world', 3513)).toBe('khoor, zruog');
})

test('works for large negative numbers', () => {
  expect(ceasarCipher('abcdEFG', -171553)).toBe('vwxyZAB');
})

test('ignores punctuation', () => {
  expect(ceasarCipher('Hello, World!! 3987@($*(09a297L', 3)).toBe('Khoor, Zruog!! 3987@($*(09d297O')
})