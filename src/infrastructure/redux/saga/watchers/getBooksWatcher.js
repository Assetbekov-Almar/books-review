import { takeLatest } from 'redux-saga/effects'
import { getBooksWorker } from '../workers/getBooksWorker'
import {GET_BOOKS_REQUEST} from "../../actions/library";

const getBooksWatcher = [takeLatest(GET_BOOKS_REQUEST, getBooksWorker)]

export default getBooksWatcher
