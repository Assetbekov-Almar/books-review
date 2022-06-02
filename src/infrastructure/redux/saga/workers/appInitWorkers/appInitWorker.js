import { put, call } from 'redux-saga/effects'
import appTypeWorker from './appTypeWorker'
import { appInitFinish, appInitError } from '../../../actions/appInit/actions'

export default function* appInitWorker() {
	try {
		yield call(appTypeWorker)
		yield put(appInitFinish())
	} catch (error) {
		console.log(error)
		yield put(appInitError())
	}
}
