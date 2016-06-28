export function * take(n) {
  if (n <= 0) {
    return;
  }
  let i = 0;
  for (const value of this) {
    yield value;
    i += 1;
    if (i >= n) {
      return;
    }
  }
}
