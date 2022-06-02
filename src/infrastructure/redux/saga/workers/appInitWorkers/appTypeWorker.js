import { put } from 'redux-saga/effects'
import isMobile from '../../../../utils/isMobile'
import { setDesktopType, setMobileType } from '../../../actions/appType/actions'

export default function* appTypeWorker() {
	if (isMobile()) {
		yield put(setMobileType())
	} else {
		yield put(setDesktopType())
	}
}
