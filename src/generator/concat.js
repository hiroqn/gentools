export function concat(iterable) {
  return function * concat() {
    for (const generator of iterable) {
      yield * generator();
    }
  };
}
