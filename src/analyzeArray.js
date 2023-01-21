export default function analyzeArray(array) {
  return {
    average: average(array),
    min: findMin(array),
    max: findMax(array),
    length: array.length
  };
}

function average(array) {
  if(array.length === 0) return;
  return array.reduce((total, value) => total + value) / array.length;
}

function findMin(array) {
  if (array.length === 0) return;
  let min = Infinity;
  array.forEach((value) => {
    if (value < min) min = value;
  });
  return min;
}

function  findMax(array) {
  if (array.length === 0) return;
  let max = -Infinity;
  array.forEach(value => max = value > max ? value : max);
  return max;
}
