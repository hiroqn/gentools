import {range as _range} from '../generator/range';

export function range(i, n, step) {
  return _range.bind(this, i, n, step);
}
