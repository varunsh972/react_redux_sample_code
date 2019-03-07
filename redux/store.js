import { applyMiddleware, createStore, compose } from 'redux';
import reducers from './reducers/index.js';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

const logger = createLogger();

const store = createStore(reducers,
  compose(
    applyMiddleware(thunk, logger),
    window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );

export default store;
