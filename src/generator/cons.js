import {cons as _cons} from '../iterator/cons';

export function cons(car, cdr) {
  return () => _cons(car, cdr());
}
