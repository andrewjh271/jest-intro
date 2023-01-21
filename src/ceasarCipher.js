export default function ceasarCipher(string, shift) {
  return string
    .split('')
    .map((char) => shiftLetter(char, shift))
    .join('');
}

function shiftLetter(char, shift = 0) {
  let code = char.charCodeAt(0);
  if (code >= 97 && code <= 122) { // lowercase
    return String.fromCharCode(shiftInRange(code, shift, 97));
  }
  if (code >= 65 && code <= 90) { // uppercase
    return String.fromCharCode(shiftInRange(code, shift, 65));
  }
  return char;
}

function shiftInRange(num, shift, start) {
  const simpleShift = (num - start + shift) % 26;
  return simpleShift < 0 ? start + simpleShift + 26 : start + simpleShift;
}
