export function range(i = Infinity, n, step = 1) {
  return function * () {
    if (!n) {
      n = i;
      i = 0;
    }
    while (i < n) {
      yield i;
      i += step;
    }
  };
}
