export function take(n) {
  const generator = this;
  return function * () {
    let i = 0;
    const iterator = generator();
    while (i < n) {
      yield iterator.next();
      i += 1;
    }
  }
}
