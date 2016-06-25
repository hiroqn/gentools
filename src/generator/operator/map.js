import {map as _map} from '../../iterator/operator/map';

export function map(project) {
  return () => _map.call(this(), project);
}
