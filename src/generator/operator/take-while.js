import {takeWhile as _takeWhile} from '../../iterator/operator/take-while';

export function takeWhile(predicate) {
  return () => _takeWhile.call(this(), predicate);
}
