export function reduce(accumulator, seed) {
  if (typeof seed === 'undefined') {
    const {value, done} = this.next();
    if (done) {
      return;
    }
    seed = value;
  }
  for (const value of this) {
    seed = accumulator(seed, value);
  }
  return seed;
}
