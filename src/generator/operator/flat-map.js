import {flatMap as f} from '../../iterator/operator/flat-map';

export function flatMap(project) {
  return () => f.call(this(), project);
}
