import allValidSelected from './all-valid-selected.js';

export default function nextPhase({ phase, experiment }) {
  const cp = phase.byId[phase.selected];
  return allValidSelected(cp.draglist[0], experiment);
}
