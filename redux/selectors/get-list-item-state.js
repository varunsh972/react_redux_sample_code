import { getValidItemsList } from './all-valid-selected.js';
import compareArrays from './utils/compare-arrays.js';

function getItems(state) {
  const { phase, experiment } = state;
  const list = phase.byId[phase.selected].draglist[0];
  return experiment.byId[list];
}

// Check that selected are valid
function isValid(items) {
  return items.selected.every(item => {
    if (!!items.byId[item]) {
      return items.byId[item].valid === true;
    }
  });
}

// TO BE IMPLEMENTED
function audioNotPlaying() {
  return true;
}

function validNotSelected(state) {
  const items = getItems(state);
  const validItems = getValidItemsList(items);
  return !compareArrays(validItems, items.selected);
}

export default function getListItemState(state) {
  const items = getItems(state);
  if (isValid(items) && audioNotPlaying(state) && validNotSelected(state)) {
    return true;
  }
  return false;
}