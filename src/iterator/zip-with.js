import {zip} from './zip';
import {map} from './operator/map';

export function zipWith(ii, project) {
  return map.call(zip(ii), project);
}
