export function * skip(n) {
  let i = 0;
  for (const value of this) {
    if (i < n) {
      i += 1;
    } else {
      yield value;
    }
  }
}
