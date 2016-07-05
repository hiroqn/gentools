export function * takeUntil(predicate) {
  for (const value of this) {
    if (!predicate(value)) {
      return;
    }
    yield value;
  }
}
