import {takeUntil as _takeUntil} from '../../iterator/operator/takeUntil';

export function takeUntil(predicate) {
  return () => _takeUntil.call(this(), predicate);
}
