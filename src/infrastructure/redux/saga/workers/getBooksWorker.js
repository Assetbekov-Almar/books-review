import { call, put } from 'redux-saga/effects'
import { getBooksSuccess, getBooksFailure } from "../../actions/library"
import BooksSearchService from "../../../service/api/booksSearch/BooksSearchService"

export function* getBooksWorker(action) {
		try {
			const { status, payload } = yield call(BooksSearchService.search, action.payload)

			if (status === 200) {
				yield put(getBooksSuccess(payload?.items))
				return { status, payload }
			} else {
				yield put(getBooksFailure(payload))
				return { status, payload }
			}
		} catch (e) {
			console.log('getBooksWorker', e)
			yield put(getBooksFailure(e))
		}

}
