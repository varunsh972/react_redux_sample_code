import initState from './init-experiment.js';

import { SELECT_ITEM, RESET_ITEM, RESET_ALL_ITEMS } from '../actions/experiment-actions.js';

function ExperimentReducer(state = initState, { type, payload } = {}) {
  let newState = state;
  switch (type) {
    case SELECT_ITEM :
      newState = { ...state };
      newState.byId[payload.type].selected = payload.selection;
      break;
    case RESET_ITEM:
      newState = { ...state };
      newState.byId[payload.type].selected = payload.selection;
      break;
    case RESET_ALL_ITEMS:
      newState = { ...state };
      newState.byId[payload.resetElements].selected = [];
      break;
    default:
      break;
  }
  return newState;
}

export default ExperimentReducer;