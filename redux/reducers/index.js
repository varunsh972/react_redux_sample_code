import { combineReducers } from 'redux';
import experiment from './experiment-reducer.js';
import phase from './phase-reducer.js';

const rootReducer = combineReducers({
  experiment,
  phase
});

export default rootReducer;
