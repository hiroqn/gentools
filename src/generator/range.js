export function range(i, n) {
  return function * () {
    if (!n) {
      n = i;
      i = 0;
    }
    while (i < n) {
      yield i;
      i += 1;
    }
  }
}
