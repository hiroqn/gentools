export function * concat(iterable) {
  for (const iterator of iterable) {
    yield * iterator;
  }
}
