export function * repeat(n) {
  if (n === 0) {
    return;
  }

  const cache = [];
  for (const value of this) {
    yield value;
    cache.push(value);
  }

  n -= 1;
  while (n > 0) {
    yield * cache;
    n -= 1;
  }
}
