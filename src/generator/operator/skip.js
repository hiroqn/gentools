import {skip as _skip} from '../../iterator/operator/skip';

export function skip(n) {
  return () => _skip.call(this(), n);
}
