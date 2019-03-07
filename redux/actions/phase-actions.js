export const SELECT_PHASE = 'phase_actions/select_phase';
export const RESET_PHASE = 'phase_actions/reset_phase';

export function selectPhase() {
  return (dispatch, getState) => {
    const { phase } = getState();
    const { selected } = phase;
    const phaseIndex = phase.items.indexOf(selected);
    const newPhase = phase.items[phaseIndex + 1];
    dispatch({
      type: SELECT_PHASE,
      payload: {
        newPhase
      }
    });
  };
}

export function resetPhase() {
  return (dispatch) => {
    dispatch({
      type: RESET_PHASE,
      payload: {
      }
    });
  };
}
