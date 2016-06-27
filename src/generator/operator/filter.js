import {filter as _filter} from '../../iterator/operator/filter';

export function filter(predicate) {
  return () => _filter.call(this(), predicate);
}
