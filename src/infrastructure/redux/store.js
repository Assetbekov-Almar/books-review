import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers/rootReducer'
import rootSaga from './saga/rootSaga'

const sagaMiddleware = createSagaMiddleware()
export const reactType = process.env.NODE_ENV

let composeEnhancers = compose

if (reactType === 'development') {
	composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
}

const middlewares = []
middlewares.push(sagaMiddleware)

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)))

sagaMiddleware.run(rootSaga)

export default store
