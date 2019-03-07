import compareArrays from './utils/compare-arrays.js';

export function getValidItemsList(elementList) {
  return elementList.items.filter(item =>
    elementList.byId[item].valid === true
  );
}

export default function allValidSelected(itemID, experiment) {
  const elementList = experiment.byId[itemID];
  const validList = getValidItemsList(elementList);
  return compareArrays(validList, elementList.selected);
}