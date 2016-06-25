export function * map(project) {
  for (const value of this) {
    yield project(value);
  }
}
