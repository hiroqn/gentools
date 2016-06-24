export function * take(n) {
  if (n <= 0) {
    return;
  }
  let i = 0;
  for (const value of this) {
    if (i >= n) {
      return;
    }
    yield value;
    i += 1;
  }
}
