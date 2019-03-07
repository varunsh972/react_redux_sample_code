export const SELECT_ITEM = 'experiment-actions/select-item';
export const RESET_ITEM = 'experiment-actions/reset-item';
export const RESET_ALL_ITEMS = 'experiment-actions/reset_all_items_in_phase';


export function resetAllItems() {
  return (dispatch, getState) => {
    const { phase } = getState();
    const resetElements = phase.byId[phase.selected].draglist[0];
    dispatch({
      type: RESET_ALL_ITEMS,
      payload: {
        resetElements
      }
    })
  }
}


export function selectItem(item, type) {
  return (dispatch, getState) => {
    const { experiment } = getState();
    const resetSelection = [...experiment.byId[type].selected]
      .filter(i => experiment.byId[type].byId[i].valid);

    const multipleitemTest = !experiment.byId[type].selected.includes(item.id);
    if (multipleitemTest) {
      if (!item.valid) {
        // get the current selected item - rebuild it and resend
        setTimeout(
          () => {
            dispatch({
              type: RESET_ITEM,
              payload: {
                selection: resetSelection,
                type
              }
            });
          }, 2000);
      }
      const selection = [...experiment.byId[type].selected, item.id];
      dispatch({
        type: SELECT_ITEM,
        payload: {
          selection,
          type
        }
      });
    }
  };
}


