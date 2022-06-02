import { combineReducers } from 'redux'
import libraryReducer from "./libraryReducer";
import bookshelfReducer from "./bookshelfReducer";
import getBooksReducer from "./getBooksReducer";
import appInit from "./appInit";
import appType from "./appType";

export default combineReducers({
  appInit,
  appType,
  libraryReducer,
  bookshelfReducer,
  getBooksReducer
})