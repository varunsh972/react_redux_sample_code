/**
 * getCurrentlistItem -
 * Gets the current list of items for the listItems component.
 *
 *
 * @param  Object options.phase      The phase reducer
 * @param  Object options.experiment The experiment reducer
 * @return Array  A list of items to draw the list.
 */
import getListItems from './get-list-items.js';

export default function getCurrentlistItem({ phase, experiment }) {
  const currentPhase = phase.byId[phase.selected];
  const type = currentPhase.draglist[0];
  const items = getListItems(experiment, currentPhase, 0);
  const disabledItems = getListItems(experiment, currentPhase, 1);
  return { items, disabledItems, type };
}