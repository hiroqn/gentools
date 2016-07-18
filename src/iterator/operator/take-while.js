export function * takeWhile(predicate) {
  for (const value of this) {
    if (!predicate(value)) {
      return;
    }
    yield value;
  }
}
