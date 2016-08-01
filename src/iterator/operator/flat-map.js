export function * flatMap(project) {
  for (const value of this) {
    yield * project(value);
  }
}
