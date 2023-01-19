import capitalize from "../src/capitalize";

test('capitalizes a string', () => {
  expect(capitalize('hello')).toBe('Hello');
})

test('works for a string in all caps', () => {
  expect(capitalize('HELLO')).toBe('HELLO');
})