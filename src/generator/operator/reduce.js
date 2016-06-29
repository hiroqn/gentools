import {reduce as _reduce} from '../../iterator/operator/reduce';

export function reduce(accumulator, seed) {
  return _reduce.call(this(), accumulator, seed);
}
