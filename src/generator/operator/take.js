import {take as _take} from '../../iterator/operator/take';

export function take(n) {
  return () => _take.call(this(), n);
}
