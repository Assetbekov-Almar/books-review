import { all } from 'redux-saga/effects'
import getBooksWatcher from './watchers/getBooksWatcher'

export default function* rootSaga() {
	yield all([
		...getBooksWatcher,

	])
}
