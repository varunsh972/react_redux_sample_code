import { SELECT_PHASE, RESET_PHASE } from '../actions/phase-actions.js';
import initPhaseState from './init-phase.js';

function PhaseReducer(state = initPhaseState, action = {}) {
  let newState = state;
  switch (action.type) {
    case SELECT_PHASE :
      newState = { ...state, selected: action.payload.newPhase };
      break;
    case RESET_PHASE :
      // newState = { ...state, selected: action.payload.newPhase };
      break;
    default:
      break;
  }
  return newState;
}

export default PhaseReducer;