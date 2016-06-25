export function * range(i = Infinity, n, step = 1) {
  if (typeof n !== 'number') {
    n = i;
    i = 0;
  }
  while (i < n) {
    yield i;
    i += step;
  }
}
