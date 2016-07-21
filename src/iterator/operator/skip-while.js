export function * skipWhile(predicate) {
  for (const value of this) {
    if (!predicate(value)) {
      yield value;
      yield * this;
      return;
    }
  }
}
