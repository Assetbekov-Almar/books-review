import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/rootReducer';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

const { NODE_ENV } = process.env;

const composeEnhancers = NODE_ENV !== 'production'
  ? (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose)
  : compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));


export default store;