export function take(n) {
  const generator = this;
  return function * () {
    let i = 0;
    for (value of generator()) {
      if (i < n) {
        break;
      }
      yield value;
      i += 1;
    }
  }
}
