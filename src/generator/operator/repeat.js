export function repeat(n) {
  const generator = this;
  return function * repeat() {
    let i = 0;
    while (i < n) {
      yield * generator();
      i += 1;
    }
  };
}
