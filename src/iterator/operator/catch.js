export function * _catch(catcher) {
  try {
    yield * this;
  } catch (e) {
    yield * catcher(e);
  }
}
