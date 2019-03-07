/*
 * returns a list of items that should
 * be rendered in the component.
 *
 */
export default function getCanvasItems({ phase, experiment }) {
  const items = phase.byId[phase.selected].canvas;
  return items.reduce((pre, cur) =>
    experiment.byId[cur].selected
      .reduce((p, c) => [...p, experiment.byId[cur].byId[c]], [])
  , []);
}
