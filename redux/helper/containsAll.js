function inArray(elem, array) {
  if (array.indexOf) {
    return array.indexOf(elem);
  }
  array.map((obj, index) => {
    if (obj === elem) {
      return index;
    }
  });
  return -1;
}

export function containsAll(needles, haystack) {
  let returnVal = true;
  needles.map((obj) => {
    if (inArray(obj, haystack) === -1) {
      returnVal = false;
    }
  });
  return returnVal;
}