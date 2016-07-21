import {skipWhile as f} from '../../iterator/operator/skip-while';

export function skipWhile(predicate) {
  return () => f.call(this(), predicate);
}
