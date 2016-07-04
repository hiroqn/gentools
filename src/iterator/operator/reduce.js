export function reduce(accumulator, seed) {
  const iterator = this[Symbol.iterator]();
  if (typeof seed === 'undefined') {
    const {value, done} = iterator.next();
    if (done) {
      return;
    }
    seed = value;
  }
  for (const value of iterator) {
    seed = accumulator(seed, value);
  }
  return seed;
}
