export function * filter(predicate) {
  for (const value of this) {
    if (predicate(value)) {
      yield value;
    }
  }
}
