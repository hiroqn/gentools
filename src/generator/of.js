export function of() {
  const arg = arguments;
  return function * () {
    for (const value of arg) {
      yield value;
    }
  };
}
