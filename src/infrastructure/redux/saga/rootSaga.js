import { all, takeLatest, take } from 'redux-saga/effects'
import getBooksWatcher from './watchers/getBooksWatcher'
import {APP_INIT_FINISH, APP_INIT_START} from "../actions/appInit/actionTypes";
import appInitWorker from "./workers/appInitWorkers/appInitWorker";

export default function* rootSaga() {
	yield takeLatest(APP_INIT_START, appInitWorker)
	yield take(APP_INIT_FINISH)

	yield all([
		...getBooksWatcher,

	])
}
