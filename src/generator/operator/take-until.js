import {takeUntil as _takeUntil} from '../../iterator/operator/take-until';

export function takeUntil(predicate) {
  return () => _takeUntil.call(this(), predicate);
}
