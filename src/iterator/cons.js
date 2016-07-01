export function * cons(car, cdr) {
  yield car;
  yield * cdr;
}
