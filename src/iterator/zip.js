export function * zip(ii) {
  const iteratorArray = [...ii].map(i => i[Symbol.iterator]());
  let resultArray = iteratorArray.map(i => i.next());
  while (!resultArray.some(result => result.done)) {
    yield resultArray.map(result => result.value);
    resultArray = iteratorArray.map(i => i.next());
  }
}
