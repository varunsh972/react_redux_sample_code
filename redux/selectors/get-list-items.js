/**
 * getItems
 * Helper function that builds a list of items to display
 * in the item list - it also adds a property to each item
 * 'selected'.
 */
export default function getListItems(experiment, currentPhase, index) {
  const list = experiment.byId[currentPhase.draglist[index]];
  if (!!list) {
    return list.items.map(i => {
      const item = { ...list.byId[i] };
      item.selected = list.selected.includes(i);
      return item;
    });
  }
  return [];
}